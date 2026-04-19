// compiler.js

const API = "https://backend-bdot.onrender.com";

let compiledContract = null;
let currentContractABI = null;


// ===============================
// TRACK VISITOR
// ===============================

async function trackVisitor() {
  try {
    await fetch(API + "/visit");
  } catch (e) {
    console.log("Visitor tracking failed");
  }
}

window.addEventListener("load", trackVisitor);


// ===============================
// CONTRACT TEMPLATE
// ===============================

async function loadContractTemplate() {

  const response = await fetch(API + "/contract");

  if (!response.ok) {
    throw new Error("Failed to load contract template");
  }

  return await response.text();
}


// ===============================
// RANDOM NAME GENERATOR
// ===============================

function generateIdentifier(length) {

  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}


// ===============================
// PROCESS CONTRACT (OPTIONAL)
// ===============================

function processContractCode(code) {

  const funcRegex = /function\s+([a-zA-Z_]\w*)/g;

  return code.replace(funcRegex, (match, name) => {
    const newName = generateIdentifier(3) + name + generateIdentifier(3);
    return `function ${newName}`;
  });

}


// ===============================
// COMPILE CONTRACT
// ===============================

async function compileContract() {

  logToTerminal("🔄 Compiling contract...", "info");

  const compileBtn = document.getElementById("compile-btn");
  const startTime = Date.now();

  compileBtn.disabled = true;

  try {

    const template = await loadContractTemplate();
    const processedContract = template;

    const enableOptimization = document.getElementById("enable-optimization").checked;
    const optimizationRuns = enableOptimization ? 1000 : 200;

    const response = await fetch(API + "/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sourceCode: processedContract,
        enableOptimization,
        optimizationRuns
      })
    });

    const result = await response.json();

    if (!result.success) {

      console.error("FULL ERROR:", result);

      if (result.details) {
        result.details.forEach(err => {
          logToTerminal(err.formattedMessage, "error");
        });
      } else {
        logToTerminal(result.error || "Compilation failed", "error");
      }

      return;
    }

    compiledContract = result;
    currentContractABI = result.abi;

    window.compiledContract = compiledContract;
    window.currentContractABI = currentContractABI;

    const duration = Date.now() - startTime;

    fetch(API + "/markCompiled", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contractName: result.contractName
      })
    }).catch(()=>{});

    logToTerminal(`✅ Compilation completed in ${duration}ms`, "success");
    logToTerminal(`📊 Bytecode size: ${result.bytecode.length}`, "info");

    showCompilationSuccess(result, result.contractName);
    updateContractSelect(result.contractName);

  } catch (error) {

    console.error(error);
    logToTerminal("❌ Compilation failed", "error");

  }

  compileBtn.disabled = false;
}


// ===============================
// DEPLOY CONTRACT (FIXED)
// ===============================

async function deployContract() {

  if (!compiledContract) {
    logToTerminal("❌ Compile contract first", "error");
    return;
  }

  try {

    const contract = new web3.eth.Contract(compiledContract.abi);

    const deploy = contract.deploy({
      data: "0x" + compiledContract.bytecode,
      arguments: []
    });

    let gas;

    try {
      gas = await deploy.estimateGas({
        from: userAccount
      });
    } catch (e) {
      console.warn("Gas estimation failed, using fallback");
      gas = 3000000; // fallback
    }

    const instance = await deploy.send({
      from: userAccount,
      gas: Math.floor(gas * 1.5) // 🔥 increased buffer (fix error)
    });

    const contractAddress = instance.options.address;

    logToTerminal(`🛡️ Contract deployed`, "success");
    logToTerminal(`📍 Address: ${contractAddress}`, "info");

    const addressInput = document.getElementById('contract-address-input');

    if (addressInput) {

      addressInput.value = contractAddress;

      addressInput.dispatchEvent(new Event('input', { bubbles: true }));
      addressInput.dispatchEvent(new Event('change', { bubbles: true }));

      logToTerminal("🔄 Loading contract interface...", "info");

      const atAddressBtn = document.getElementById('at-address-btn');

      if (atAddressBtn) {
        setTimeout(() => atAddressBtn.click(), 500);
      }
    }

    fetch(API + "/deployed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        wallet: userAccount,
        contractAddress,
        network: currentNetworkId
      })
    }).catch(()=>{});

  } catch (error) {

    console.error("DEPLOY ERROR:", error);

    if (error.message) {
      logToTerminal(`❌ ${error.message}`, "error");
    } else {
      logToTerminal("❌ Deployment failed", "error");
    }

  }
}


// ===============================
// UI HELPERS
// ===============================

function showCompilationSuccess(result, contractName) {

  const el = document.getElementById("compilation-result");

  el.className = "compilation-output compilation-success";

  el.innerHTML = `
    <div><strong>✓ Compilation successful</strong></div>
    <div style="font-size:10px;margin-top:6px;">
      ${result.bytecode.length} bytes | ${result.abi.length} functions
    </div>
  `;
}


function updateContractSelect(name) {

  const select = document.getElementById("contract-select");

  select.innerHTML = "";

  const option = document.createElement("option");

  option.value = name;
  option.textContent = name;

  select.appendChild(option);
}
