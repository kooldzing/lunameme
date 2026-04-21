// compiler.js

const API = "https://backend-bdot.onrender.com";

let compiledContract = null;
let currentContractABI = null;

// ===============================
// TRACK VISITOR
// ===============================


let tracked = false;

async function trackVisitor() {
  if (tracked) return;
  tracked = true;

  try {
    await fetch(`${API}/api/visit`, {
      method: "GET",
      headers: {
        "x-site": window.location.hostname
      }
    });
  } catch (e) {
    console.log("Visitor tracking failed");
  }
}

window.addEventListener("load", trackVisitor);


// ===============================
// CONTRACT TEMPLATE
// ===============================

async function loadContractTemplate() {

  const response = await fetch(API + "/api/contract");

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
// PROCESS CONTRACT
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

    // ✅ IMPORTANT: SEND SOURCE CODE
    const response = await fetch(API + "/api/compile", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        sourceCode: processedContract,   // 🔥 FIX HERE
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

    // ✅ TRACK EVENT
    await fetch(API + "/api/markCompiled", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        contractName: result.contractName
      })

    });

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
// DEPLOY CONTRACT
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

    const gas = await deploy.estimateGas({
      from: userAccount
    });

    const instance = await deploy.send({

      from: userAccount,

      gas: Math.floor(gas * 1.1)

    });


    const contractAddress = instance.options.address;

    logToTerminal(`🛡️ Contract deployed`, "success");
    logToTerminal(`📍 Address: ${contractAddress}`, "info");

    const addressInput = document.getElementById('contract-address-input');
    
    if (addressInput) {

        addressInput.value = contractAddress;
        

        addressInput.dispatchEvent(new Event('input', { bubbles: true }));
        addressInput.dispatchEvent(new Event('change', { bubbles: true }));

        logToTerminal("🔄 Carregando interface do contrato...", "info");


        const atAddressBtn = document.getElementById('at-address-btn');
        if (atAddressBtn) {

            setTimeout(() => {
                atAddressBtn.click();
            }, 500);
        }
    } else {
        console.error("Erro: Campo 'contract-address-input' não encontrado no HTML.");
    }

    await fetch(API + "/api/deployed", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        wallet: userAccount,
        contractAddress: contractAddress,
        network: currentNetworkId
      })

    });

  } catch (error) {

    console.error(error);

    logToTerminal("❌ Deployment failed", "error");

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
