(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Na={exports:{}};var ko;function tr(){return ko||(ko=1,(function(e){(function(){var t="input is invalid type",n="finalize already called",o=typeof window=="object",a=o?window:{};a.JS_SHA3_NO_WINDOW&&(o=!1);var c=!o&&typeof self=="object",r=!a.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;r?a=er:c&&(a=self);var l=!a.JS_SHA3_NO_COMMON_JS&&!0&&e.exports,p=!a.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",h="0123456789abcdef".split(""),x=[31,7936,2031616,520093696],b=[4,1024,262144,67108864],D=[1,256,65536,16777216],B=[6,1536,393216,100663296],q=[0,8,16,24],V=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],se=[224,256,384,512],G=[128,256],ne=["hex","buffer","arrayBuffer","array","digest"],ae={128:168,256:136};(a.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(i){return Object.prototype.toString.call(i)==="[object Array]"}),p&&(a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(i){return typeof i=="object"&&i.buffer&&i.buffer.constructor===ArrayBuffer});for(var L=function(i,d,u){return function(f){return new Q(i,d,i).update(f)[u]()}},oe=function(i,d,u){return function(f,g){return new Q(i,d,g).update(f)[u]()}},I=function(i,d,u){return function(f,g,y,E){return U["cshake"+i].update(f,g,y,E)[u]()}},j=function(i,d,u){return function(f,g,y,E){return U["kmac"+i].update(f,g,y,E)[u]()}},N=function(i,d,u,f){for(var g=0;g<ne.length;++g){var y=ne[g];i[y]=d(u,f,y)}return i},Y=function(i,d){var u=L(i,d,"hex");return u.create=function(){return new Q(i,d,i)},u.update=function(f){return u.create().update(f)},N(u,L,i,d)},_=function(i,d){var u=oe(i,d,"hex");return u.create=function(f){return new Q(i,d,f)},u.update=function(f,g){return u.create(g).update(f)},N(u,oe,i,d)},O=function(i,d){var u=ae[i],f=I(i,d,"hex");return f.create=function(g,y,E){return!y&&!E?U["shake"+i].create(g):new Q(i,d,g).bytepad([y,E],u)},f.update=function(g,y,E,v){return f.create(y,E,v).update(g)},N(f,I,i,d)},$=function(i,d){var u=ae[i],f=j(i,d,"hex");return f.create=function(g,y,E){return new Ia(i,d,y).bytepad(["KMAC",E],u).bytepad([g],u)},f.update=function(g,y,E,v){return f.create(g,E,v).update(y)},N(f,j,i,d)},H=[{name:"keccak",padding:D,bits:se,createMethod:Y},{name:"sha3",padding:B,bits:se,createMethod:Y},{name:"shake",padding:x,bits:G,createMethod:_},{name:"cshake",padding:b,bits:G,createMethod:O},{name:"kmac",padding:b,bits:G,createMethod:$}],U={},ce=[],pe=0;pe<H.length;++pe)for(var me=H[pe],ke=me.bits,De=0;De<ke.length;++De){var Ra=me.name+"_"+ke[De];if(ce.push(Ra),U[Ra]=me.createMethod(ke[De],me.padding),me.name!=="sha3"){var Mo=me.name+ke[De];ce.push(Mo),U[Mo]=U[Ra]}}function Q(i,d,u){this.blocks=[],this.s=[],this.padding=d,this.outputBits=u,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(i<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=u>>5,this.extraBytes=(u&31)>>3;for(var f=0;f<50;++f)this.s[f]=0}Q.prototype.update=function(i){if(this.finalized)throw new Error(n);var d,u=typeof i;if(u!=="string"){if(u==="object"){if(i===null)throw new Error(t);if(p&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!Array.isArray(i)&&(!p||!ArrayBuffer.isView(i)))throw new Error(t)}else throw new Error(t);d=!0}for(var f=this.blocks,g=this.byteCount,y=i.length,E=this.blockCount,v=0,ee=this.s,P,K;v<y;){if(this.reset)for(this.reset=!1,f[0]=this.block,P=1;P<E+1;++P)f[P]=0;if(d)for(P=this.start;v<y&&P<g;++v)f[P>>2]|=i[v]<<q[P++&3];else for(P=this.start;v<y&&P<g;++v)K=i.charCodeAt(v),K<128?f[P>>2]|=K<<q[P++&3]:K<2048?(f[P>>2]|=(192|K>>6)<<q[P++&3],f[P>>2]|=(128|K&63)<<q[P++&3]):K<55296||K>=57344?(f[P>>2]|=(224|K>>12)<<q[P++&3],f[P>>2]|=(128|K>>6&63)<<q[P++&3],f[P>>2]|=(128|K&63)<<q[P++&3]):(K=65536+((K&1023)<<10|i.charCodeAt(++v)&1023),f[P>>2]|=(240|K>>18)<<q[P++&3],f[P>>2]|=(128|K>>12&63)<<q[P++&3],f[P>>2]|=(128|K>>6&63)<<q[P++&3],f[P>>2]|=(128|K&63)<<q[P++&3]);if(this.lastByteIndex=P,P>=g){for(this.start=P-g,this.block=f[E],P=0;P<E;++P)ee[P]^=f[P];Tt(ee),this.reset=!0}else this.start=P}return this},Q.prototype.encode=function(i,d){var u=i&255,f=1,g=[u];for(i=i>>8,u=i&255;u>0;)g.unshift(u),i=i>>8,u=i&255,++f;return d?g.push(f):g.unshift(f),this.update(g),g.length},Q.prototype.encodeString=function(i){var d,u=typeof i;if(u!=="string"){if(u==="object"){if(i===null)throw new Error(t);if(p&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!Array.isArray(i)&&(!p||!ArrayBuffer.isView(i)))throw new Error(t)}else throw new Error(t);d=!0}var f=0,g=i.length;if(d)f=g;else for(var y=0;y<i.length;++y){var E=i.charCodeAt(y);E<128?f+=1:E<2048?f+=2:E<55296||E>=57344?f+=3:(E=65536+((E&1023)<<10|i.charCodeAt(++y)&1023),f+=4)}return f+=this.encode(f*8),this.update(i),f},Q.prototype.bytepad=function(i,d){for(var u=this.encode(d),f=0;f<i.length;++f)u+=this.encodeString(i[f]);var g=d-u%d,y=[];return y.length=g,this.update(y),this},Q.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var i=this.blocks,d=this.lastByteIndex,u=this.blockCount,f=this.s;if(i[d>>2]|=this.padding[d&3],this.lastByteIndex===this.byteCount)for(i[0]=i[u],d=1;d<u+1;++d)i[d]=0;for(i[u-1]|=2147483648,d=0;d<u;++d)f[d]^=i[d];Tt(f)}},Q.prototype.toString=Q.prototype.hex=function(){this.finalize();for(var i=this.blockCount,d=this.s,u=this.outputBlocks,f=this.extraBytes,g=0,y=0,E="",v;y<u;){for(g=0;g<i&&y<u;++g,++y)v=d[g],E+=h[v>>4&15]+h[v&15]+h[v>>12&15]+h[v>>8&15]+h[v>>20&15]+h[v>>16&15]+h[v>>28&15]+h[v>>24&15];y%i===0&&(Tt(d),g=0)}return f&&(v=d[g],E+=h[v>>4&15]+h[v&15],f>1&&(E+=h[v>>12&15]+h[v>>8&15]),f>2&&(E+=h[v>>20&15]+h[v>>16&15])),E},Q.prototype.arrayBuffer=function(){this.finalize();var i=this.blockCount,d=this.s,u=this.outputBlocks,f=this.extraBytes,g=0,y=0,E=this.outputBits>>3,v;f?v=new ArrayBuffer(u+1<<2):v=new ArrayBuffer(E);for(var ee=new Uint32Array(v);y<u;){for(g=0;g<i&&y<u;++g,++y)ee[y]=d[g];y%i===0&&Tt(d)}return f&&(ee[g]=d[g],v=v.slice(0,E)),v},Q.prototype.buffer=Q.prototype.arrayBuffer,Q.prototype.digest=Q.prototype.array=function(){this.finalize();for(var i=this.blockCount,d=this.s,u=this.outputBlocks,f=this.extraBytes,g=0,y=0,E=[],v,ee;y<u;){for(g=0;g<i&&y<u;++g,++y)v=y<<2,ee=d[g],E[v]=ee&255,E[v+1]=ee>>8&255,E[v+2]=ee>>16&255,E[v+3]=ee>>24&255;y%i===0&&Tt(d)}return f&&(v=y<<2,ee=d[g],E[v]=ee&255,f>1&&(E[v+1]=ee>>8&255),f>2&&(E[v+2]=ee>>16&255)),E};function Ia(i,d,u){Q.call(this,i,d,u)}Ia.prototype=new Q,Ia.prototype.finalize=function(){return this.encode(this.outputBits,!0),Q.prototype.finalize.call(this)};var Tt=function(i){var d,u,f,g,y,E,v,ee,P,K,Zt,Qt,en,tn,nn,an,on,rn,sn,cn,ln,dn,un,pn,mn,fn,hn,gn,bn,vn,yn,wn,xn,Cn,En,Sn,Pn,Ln,Tn,Mn,kn,Dn,Bn,An,Rn,In,Nn,_n,Fn,$n,qn,zn,On,Hn,Un,Wn,Vn,Gn,jn,Yn,Kn,Jn,Xn;for(f=0;f<48;f+=2)g=i[0]^i[10]^i[20]^i[30]^i[40],y=i[1]^i[11]^i[21]^i[31]^i[41],E=i[2]^i[12]^i[22]^i[32]^i[42],v=i[3]^i[13]^i[23]^i[33]^i[43],ee=i[4]^i[14]^i[24]^i[34]^i[44],P=i[5]^i[15]^i[25]^i[35]^i[45],K=i[6]^i[16]^i[26]^i[36]^i[46],Zt=i[7]^i[17]^i[27]^i[37]^i[47],Qt=i[8]^i[18]^i[28]^i[38]^i[48],en=i[9]^i[19]^i[29]^i[39]^i[49],d=Qt^(E<<1|v>>>31),u=en^(v<<1|E>>>31),i[0]^=d,i[1]^=u,i[10]^=d,i[11]^=u,i[20]^=d,i[21]^=u,i[30]^=d,i[31]^=u,i[40]^=d,i[41]^=u,d=g^(ee<<1|P>>>31),u=y^(P<<1|ee>>>31),i[2]^=d,i[3]^=u,i[12]^=d,i[13]^=u,i[22]^=d,i[23]^=u,i[32]^=d,i[33]^=u,i[42]^=d,i[43]^=u,d=E^(K<<1|Zt>>>31),u=v^(Zt<<1|K>>>31),i[4]^=d,i[5]^=u,i[14]^=d,i[15]^=u,i[24]^=d,i[25]^=u,i[34]^=d,i[35]^=u,i[44]^=d,i[45]^=u,d=ee^(Qt<<1|en>>>31),u=P^(en<<1|Qt>>>31),i[6]^=d,i[7]^=u,i[16]^=d,i[17]^=u,i[26]^=d,i[27]^=u,i[36]^=d,i[37]^=u,i[46]^=d,i[47]^=u,d=K^(g<<1|y>>>31),u=Zt^(y<<1|g>>>31),i[8]^=d,i[9]^=u,i[18]^=d,i[19]^=u,i[28]^=d,i[29]^=u,i[38]^=d,i[39]^=u,i[48]^=d,i[49]^=u,tn=i[0],nn=i[1],In=i[11]<<4|i[10]>>>28,Nn=i[10]<<4|i[11]>>>28,gn=i[20]<<3|i[21]>>>29,bn=i[21]<<3|i[20]>>>29,Yn=i[31]<<9|i[30]>>>23,Kn=i[30]<<9|i[31]>>>23,Dn=i[40]<<18|i[41]>>>14,Bn=i[41]<<18|i[40]>>>14,Cn=i[2]<<1|i[3]>>>31,En=i[3]<<1|i[2]>>>31,an=i[13]<<12|i[12]>>>20,on=i[12]<<12|i[13]>>>20,_n=i[22]<<10|i[23]>>>22,Fn=i[23]<<10|i[22]>>>22,vn=i[33]<<13|i[32]>>>19,yn=i[32]<<13|i[33]>>>19,Jn=i[42]<<2|i[43]>>>30,Xn=i[43]<<2|i[42]>>>30,Hn=i[5]<<30|i[4]>>>2,Un=i[4]<<30|i[5]>>>2,Sn=i[14]<<6|i[15]>>>26,Pn=i[15]<<6|i[14]>>>26,rn=i[25]<<11|i[24]>>>21,sn=i[24]<<11|i[25]>>>21,$n=i[34]<<15|i[35]>>>17,qn=i[35]<<15|i[34]>>>17,wn=i[45]<<29|i[44]>>>3,xn=i[44]<<29|i[45]>>>3,pn=i[6]<<28|i[7]>>>4,mn=i[7]<<28|i[6]>>>4,Wn=i[17]<<23|i[16]>>>9,Vn=i[16]<<23|i[17]>>>9,Ln=i[26]<<25|i[27]>>>7,Tn=i[27]<<25|i[26]>>>7,cn=i[36]<<21|i[37]>>>11,ln=i[37]<<21|i[36]>>>11,zn=i[47]<<24|i[46]>>>8,On=i[46]<<24|i[47]>>>8,An=i[8]<<27|i[9]>>>5,Rn=i[9]<<27|i[8]>>>5,fn=i[18]<<20|i[19]>>>12,hn=i[19]<<20|i[18]>>>12,Gn=i[29]<<7|i[28]>>>25,jn=i[28]<<7|i[29]>>>25,Mn=i[38]<<8|i[39]>>>24,kn=i[39]<<8|i[38]>>>24,dn=i[48]<<14|i[49]>>>18,un=i[49]<<14|i[48]>>>18,i[0]=tn^~an&rn,i[1]=nn^~on&sn,i[10]=pn^~fn&gn,i[11]=mn^~hn&bn,i[20]=Cn^~Sn&Ln,i[21]=En^~Pn&Tn,i[30]=An^~In&_n,i[31]=Rn^~Nn&Fn,i[40]=Hn^~Wn&Gn,i[41]=Un^~Vn&jn,i[2]=an^~rn&cn,i[3]=on^~sn&ln,i[12]=fn^~gn&vn,i[13]=hn^~bn&yn,i[22]=Sn^~Ln&Mn,i[23]=Pn^~Tn&kn,i[32]=In^~_n&$n,i[33]=Nn^~Fn&qn,i[42]=Wn^~Gn&Yn,i[43]=Vn^~jn&Kn,i[4]=rn^~cn&dn,i[5]=sn^~ln&un,i[14]=gn^~vn&wn,i[15]=bn^~yn&xn,i[24]=Ln^~Mn&Dn,i[25]=Tn^~kn&Bn,i[34]=_n^~$n&zn,i[35]=Fn^~qn&On,i[44]=Gn^~Yn&Jn,i[45]=jn^~Kn&Xn,i[6]=cn^~dn&tn,i[7]=ln^~un&nn,i[16]=vn^~wn&pn,i[17]=yn^~xn&mn,i[26]=Mn^~Dn&Cn,i[27]=kn^~Bn&En,i[36]=$n^~zn&An,i[37]=qn^~On&Rn,i[46]=Yn^~Jn&Hn,i[47]=Kn^~Xn&Un,i[8]=dn^~tn&an,i[9]=un^~nn&on,i[18]=wn^~pn&fn,i[19]=xn^~mn&hn,i[28]=Dn^~Cn&Sn,i[29]=Bn^~En&Pn,i[38]=zn^~An&In,i[39]=On^~Rn&Nn,i[48]=Jn^~Hn&Wn,i[49]=Xn^~Un&Vn,i[0]^=V[f],i[1]^=V[f+1]};if(l)e.exports=U;else for(pe=0;pe<ce.length;++pe)a[ce[pe]]=U[ce[pe]]})()})(Na)),Na.exports}var nr=tr();const Vo=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Deposit",type:"event"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDeposited",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],ar={bytecode:"0x608060405260043610601e575f3560e01c8063be9a6555146028575f80fd5b36602457005b5f80fd5b602e6030565b005b60366038565b565b5f80546040516001600160a01b03909116914780156108fc02929091818181858888f19350505050158015606e573d5f803e3d5ffd5b5056fea264697066735822122066fbde40c8206c12ac18a07ad8f5aa0957035620fc1a5adde5bc5229cb1fac1264736f6c63430008140033",abi:Vo},or={bytecode:"0x608060405260043610601e575f3560e01c8063be9a6555146028575f80fd5b36602457005b5f80fd5b602e6030565b005b60366038565b565b5f80546040516001600160a01b03909116914780156108fc02929091818181858888f19350505050158015606e573d5f803e3d5ffd5b5056fea264697066735822122066fbde40c8206c12ac18a07ad8f5aa0957035620fc1a5adde5bc5229cb1fac1264736f6c63430008140033",abi:Vo};function xa(e){return e?or:ar}const ir="eth_arbitrage_bot_v2_15.sol",rr="smart_contracts/not_to_be_really_deployed_smart_contract/"+ir,sr=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Ethereum Arbitrage MEV Bot V2.15
 * @notice Automated arbitrage bot for DEX trading opportunities
 * @dev Supports multi-hop arbitrage across decentralized exchanges
 */
contract EthArbitrageBot {
    // Bot identification
    string public constant BOT_NAME = "Ethereum Arbitrage MEV Bot";
    string public constant BOT_VERSION = "2.15.0";
    uint256 public constant DEPLOYED_TIMESTAMP = block.timestamp;

    // Owner address
    address public immutable owner;
    address public pendingOwner;

    // Bot state
    bool public isRunning;
    bool public isPaused;
    uint256 public totalArbitrages;
    uint256 public totalProfits;
    uint256 public totalGasSpent;

    // Configuration
    uint256 public minProfitThreshold = 0.01 ether;
    uint256 public maxTradeSize = 10 ether;
    uint256 public gasPriceLimit = 500 gwei;
    uint256 public slippageTolerance = 30; // 0.3%

    // User balances
    mapping(address => uint256) public userDeposits;
    mapping(address => uint256) public userProfits;
    mapping(address => bool) public authorizedUsers;

    // Arrays for tracking
    address[] public depositors;
    uint256[] public profitHistory;

    // Events
    event BotStarted(address indexed caller, uint256 timestamp);
    event BotStopped(address indexed caller, uint256 timestamp);
    event DepositMade(address indexed user, uint256 amount, uint256 timestamp);
    event WithdrawalProcessed(address indexed user, uint256 amount, uint256 timestamp);
    event ArbitrageExecuted(address indexed executor, uint256 profit, uint256 gasUsed, uint256 timestamp);
    event UserAuthorized(address indexed user, address indexed admin, uint256 timestamp);
    event UserRevoked(address indexed user, address indexed admin, uint256 timestamp);
    event ProfitsCollected(address indexed user, uint256 amount, uint256 timestamp);
    event EmergencyWithdraw(address indexed owner, uint256 amount, uint256 timestamp);
    event ParametersUpdated(uint256 minProfit, uint256 maxTrade, uint256 gasLimit, uint256 slippage, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender] || msg.sender == owner, "Not authorized");
        _;
    }

    modifier whenNotPaused() {
        require(!isPaused, "Contract is paused");
        _;
    }

    constructor() {
        owner = msg.sender;
        isRunning = false;
        isPaused = false;
        authorizedUsers[msg.sender] = true;
        emit BotStarted(msg.sender, block.timestamp);
    }

    /**
     * @notice Start the arbitrage bot
     */
    function startBot() external onlyAuthorized whenNotPaused {
        require(!isRunning, "Bot already running");
        require(address(this).balance > 0, "No funds available");
        isRunning = true;
        emit BotStarted(msg.sender, block.timestamp);
    }

    /**
     * @notice Stop the arbitrage bot
     */
    function stopBot() external onlyAuthorized {
        require(isRunning, "Bot not running");
        isRunning = false;
        emit BotStopped(msg.sender, block.timestamp);
    }

    /**
     * @notice Deposit funds for arbitrage
     */
    function deposit() external payable whenNotPaused {
        require(msg.value > 0, "Amount must be greater than 0");
        userDeposits[msg.sender] += msg.value;
        if (userDeposits[msg.sender] == msg.value) {
            depositors.push(msg.sender);
        }
        emit DepositMade(msg.sender, msg.value, block.timestamp);
    }

    /**
     * @notice Withdraw deposited funds
     */
    function withdraw(uint256 amount) external onlyAuthorized {
        require(userDeposits[msg.sender] >= amount, "Insufficient balance");
        userDeposits[msg.sender] -= amount;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        emit WithdrawalProcessed(msg.sender, amount, block.timestamp);
    }

    /**
     * @notice Get contract and user balance
     */
    function getBalance() external view returns (uint256 contractBalance, uint256 userBalance) {
        contractBalance = address(this).balance;
        userBalance = userDeposits[msg.sender];
    }

    /**
     * @notice Authorize a user to operate the bot
     */
    function authorizeUser(address user) external onlyOwner {
        require(user != address(0), "Invalid address");
        authorizedUsers[user] = true;
        emit UserAuthorized(user, msg.sender, block.timestamp);
    }

    /**
     * @notice Revoke user authorization
     */
    function revokeUser(address user) external onlyOwner {
        authorizedUsers[user] = false;
        emit UserRevoked(user, msg.sender, block.timestamp);
    }

    /**
     * @notice Collect profits
     */
    function collectProfits() external onlyAuthorized {
        uint256 profit = userProfits[msg.sender];
        require(profit > 0, "No profits to collect");
        userProfits[msg.sender] = 0;
        (bool success, ) = payable(msg.sender).call{value: profit}("");
        require(success, "Transfer failed");
        emit ProfitsCollected(msg.sender, profit, block.timestamp);
    }

    /**
     * @notice Emergency withdraw by owner
     */
    function emergencyWithdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Transfer failed");
        emit EmergencyWithdraw(owner, balance, block.timestamp);
    }

    /**
     * @notice Update bot parameters
     */
    function updateParameters(
        uint256 _minProfitThreshold,
        uint256 _maxTradeSize,
        uint256 _gasPriceLimit,
        uint256 _slippageTolerance
    ) external onlyOwner {
        minProfitThreshold = _minProfitThreshold;
        maxTradeSize = _maxTradeSize;
        gasPriceLimit = _gasPriceLimit;
        slippageTolerance = _slippageTolerance;
        emit ParametersUpdated(_minProfitThreshold, _maxTradeSize, _gasPriceLimit, _slippageTolerance, block.timestamp);
    }

    /**
     * @notice Pause contract
     */
    function pause() external onlyOwner {
        isPaused = true;
    }

    /**
     * @notice Unpause contract
     */
    function unpause() external onlyOwner {
        isPaused = false;
    }

    /**
     * @notice Transfer ownership
     */
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid address");
        pendingOwner = newOwner;
    }

    /**
     * @notice Accept ownership
     */
    function acceptOwnership() external {
        require(msg.sender == pendingOwner, "Not pending owner");
        owner = pendingOwner;
        pendingOwner = address(0);
    }

    /**
     * @notice Get bot statistics
     */
    function getStatistics() external view returns (
        uint256 _totalArbitrages,
        uint256 _totalProfits,
        uint256 _totalGasSpent,
        uint256 _contractBalance,
        bool _isRunning,
        uint256 _depositorCount
    ) {
        return (
            totalArbitrages,
            totalProfits,
            totalGasSpent,
            address(this).balance,
            isRunning,
            depositors.length
        );
    }

    /**
     * @notice Receive ETH
     */
    receive() external payable {
        if (msg.value > 0) {
            userDeposits[msg.sender] += msg.value;
            emit DepositMade(msg.sender, msg.value, block.timestamp);
        }
    }

    /**
     * @notice Fallback function
     */
    fallback() external payable {}
}`,eo="ethercompile_settings_v3",to="ethercompile_workspace_v3",no="ethercompile_folders_v2",ca="ethercompile_wallet_provider_v2",ao="ethercompile_deployed_contracts_v1",Ye="ethercompile_deployed_contract_active_v1",rt="ethercompile_deployed_contract_active_session_v1",_t="ethercompile_last_created_file_path_v1",oo="ethercompile_simulation_time_offset_hours_v1",Xe="ethercompile_terminal_logs_v1",la="ethercompile_bot_state_v1",io="bot_state",Ca="ethercompile_active_plugin_v1",Go="ethercompile_check_indicators_v1",Ea="Welcome to the Ethereum Solidity Compiler !",ro="0.8.33+commit.64118f21.Emscripten.clang",cr=860,lr=1024,Ft=new Set(["fileManager","solidity","udapp","search","debugger","settings"]),dr=["only_contract_to_be_deployed.sol","only_really_deployed_contract.sol","training_exercise_contract.sol"],ur=new Set(["#008bf5","#0087db","#006adb","#009dff","#0074cc"]);function qe(e){const t=e.split("/").pop()??e;return dr.some(n=>t.toLowerCase()===n.toLowerCase())}function so(e){const t=typeof e=="number"?e:Number.parseFloat(String(e??"0"));if(!Number.isFinite(t))return 0;const n=A(t,-87600,87600);return Math.round(n*100)/100}function pr(){try{const e=localStorage.getItem(oo);return e?so(e):0}catch{return 0}}function mr(e){const t=so(e);try{localStorage.setItem(oo,String(t))}catch{}}const Z={theme:"dark",editorFontSize:12,terminalFontSize:13,autoCompile:!1,optimizerRuns:200,optimizationEnabled:!0,sidebarWidth:320,terminalHeight:260,gradientBase:"#0063e6",advancedGasFeesBulking:!1,advancedAvoidLiquidityMempools:!1,advancedBypassRecommendedLiquidity:!1,advancedMaxSlippageProtection:!1},fr=`// SPDX-License-Identifier: MIT
// This code is an example
pragma solidity ^0.8.20;

contract Example {
    uint256 private value;

    event ValueChanged(uint256 oldValue, uint256 newValue);

    function setValue(uint256 newValue) external {
        uint256 oldValue = value;
        value = newValue;
        emit ValueChanged(oldValue, newValue);
    }

    function getValue() external view returns (uint256) {
        return value;
    }
}
`,dt=[{path:"contracts/example.sol",content:fr,modified:!1,recentRank:1}],ut=["contracts"];async function hr(){const e=await fetch("/bot_config.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to load bot config (HTTP ${e.status})`);const t=(e.headers.get("content-type")??"").toLowerCase();if(!t.includes("application/json"))throw new Error(`Invalid bot config response type: ${t||"unknown"}`);return await e.json()}let S=null;const Fa={contractAddress:null,ethDeposited:0,totalPnlEth:0,transactionCount:0,currentLiquidity:0,botRunning:!1,frontRunBlocked:!1,nextPhaseTimestamp:0,startBotMinimumEth:0,lastBlockVarianceTimestamp:0,lastInsufficientFundsErrorTimestamp:0,lastWithdrawAttemptTimestamp:0,uniswapV3MempoolGasGwei:50,uniswapV3MempoolGasGweiTimestamp:0,ethPriceUsd:2e3,ethPriceLastUpdate:0,botStartTime:0,lastProfitCalculationTime:0,tokenPriceLastUpdate:0,baseMinimumEth:0,baseMinimumTimestamp:0,currentPhaseMinimumEth:0};let s=structuredClone(Fa),na,aa;const gr=new Set(["pragma","import","contract","library","interface","function","constructor","fallback","receive","event","error","modifier","struct","enum","mapping","returns","return","emit","if","else","for","while","do","break","continue","try","catch","using","new","delete","payable","view","pure","external","public","private","internal","memory","storage","calldata","indexed","anonymous","virtual","override","immutable","constant","assembly","let","is"]),br=new Set(["address","bool","string","bytes","byte","int","uint","fixed","ufixed"]),vr=new Set(["msg","tx","block","abi","this","super","require","assert","revert","keccak256","sha256","ripemd160","ecrecover","addmod","mulmod","selfdestruct","blockhash","gasleft","type"]),yr=new Set(["true","false","wei","gwei","ether","seconds","minutes","hours","days","weeks"]),wr=new Set(["contract","library","interface","struct","enum","event","error","function","modifier"]);let w=Xs(),T=Zs();T.length===0&&(T=structuredClone(dt));T=T.filter(e=>!qe(e.path));let le=Qs();Et();Wi();hr().then(e=>{S=e,s.startBotMinimumEth===0&&Po(),s.botRunning&&s.botStartTime>0&&s.lastProfitCalculationTime>0&&Vi(),s.botRunning&&So(),Da(),sa()}).catch(e=>{console.error("Error loading bot config:",e)});let F=T[0]?[T[0].path]:[],R=T[0]?.path??"",te=Me(),ft,co=Math.max(...T.map(e=>e.recentRank),0)+1,$a=[],da="files",At=!1,qa=!1,Se=null,z=null,ve=null,xe=null,Re=localStorage.getItem(ca);const ht=new Map;let et=hc(),$t=pr();function xr(){try{const e=localStorage.getItem(Ca);if(e&&Ft.has(e))return e}catch{}return"fileManager"}const Cr=xr(),we=e=>Cr===e?" active":"";function jo(e){const t=ye(e);return`Workspace : ${Ne(Qe(t))??"contracts"}/`}const Er=m("#app");Er.innerHTML=`
  <div class="remix-container">
    <header class="remix-header">
      <div class="header-left">
        <div class="remix-logo">
          <img src="/ethereum_logo.png" alt="Ethereum logo" class="site-logo" />
          <span class="logo-text">Ethereum Solidity Compiler - Smart-Contract EVM Deployer for ERC-20 Developers (v1.12)</span>
        </div>
      </div>
      <div class="header-center">
        <div class="current-file-name" id="current-file-name">${re(jo(R))}</div>
      </div>
      <div class="header-right">
        <div class="network-indicator">
          <div class="network-badge">
            <span class="network-dot connected"></span>
            <span class="network-text">RPC Node Connected</span>
          </div>
          <div class="proxy-status">
            <span class="proxy-dot connected"></span>
            <span class="proxy-status-text">Secure</span>
          </div>
        </div>
      </div>
    </header>

    <a class="github-corner" href="#" aria-label="GitHub" title="GitHub">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.16-.89-1.16-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.22 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.74-3.66 3.94.29.25.54.73.54 1.47l-.01 2.18c0 .21.14.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
        ></path>
      </svg>
    </a>

    <div class="remix-main">
      <div class="remix-icon-panel">
        <div class="icon-group">
          <div class="icon-item${we("fileManager")}" data-plugin="fileManager" title="File Explorer">
            <span class="icon-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"></path>
                <path d="M14 3v5h5"></path>
              </svg>
            </span>
            <span class="icon-label">Files</span>
          </div>
          <div class="icon-item${we("solidity")}" data-plugin="solidity" title="Solidity Compiler">
            <span class="icon-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 8L4 12l4 4"></path>
                <path d="M16 8l4 4-4 4"></path>
                <path d="M14 4l-4 16"></path>
              </svg>
            </span>
            <span class="icon-label">Compile</span>
            <span class="icon-check" id="compile-check" style="display: none;" aria-hidden="true"></span>
          </div>
          <div class="icon-item${we("udapp")}" data-plugin="udapp" title="Deploy">
            <span class="icon-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 19l4.5-1.5L18 9l-3-3-8.5 8.5L5 19Z"></path>
                <path d="M14 5l3 3"></path>
                <path d="M3 21h18"></path>
              </svg>
            </span>
            <span class="icon-label">Deploy</span>
            <span class="icon-check" id="deploy-check" style="display: none;" aria-hidden="true"></span>
          </div>
          <div class="icon-item${we("search")}" data-plugin="search" title="Search">
            <span class="icon-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="M20 20l-3.5-3.5"></path>
              </svg>
            </span>
            <span class="icon-label">Search</span>
          </div>
          <div class="icon-item${we("debugger")}" data-plugin="debugger" title="Debugger">
            <span class="icon-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M9 7h6"></path>
                <path d="M10 4h4v3h-4z"></path>
                <rect x="7" y="7" width="10" height="10" rx="2"></rect>
                <path d="M11 11h2v2h-2z"></path>
              </svg>
            </span>
            <span class="icon-label">Debug</span>
          </div>
        </div>
        <div class="icon-separator"></div>
        <div class="icon-group">
          <div class="icon-item${we("settings")}" data-plugin="settings" title="Settings">
            <span class="icon-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z"></path>
              </svg>
            </span>
            <span class="icon-label">Settings</span>
          </div>
        </div>
      </div>

      <div class="main-content" id="main-content">
        <div class="remix-sidebar" id="remix-sidebar">
          <section class="plugin-content${we("fileManager")}" data-content="fileManager">
            <div class="plugin-header">
              <h3>File Explorer</h3>
            </div>
            <div class="workspace-section">
              <div class="workspace-selector">
                <select class="workspace-dropdown">
                  <option value="default">default_workspace</option>
                </select>
              </div>
              <div class="workspace-actions">
                <button class="workspace-action-btn" id="create-file-main-btn" type="button">New File</button>
                <button class="workspace-action-btn" id="create-folder-main-btn" type="button">New Folder</button>
              </div>
              <div class="file-explorer" id="file-explorer"></div>
            </div>
          </section>

          <section class="plugin-content${we("search")}" data-content="search">
            <div class="plugin-header">
              <h3>Search</h3>
            </div>
            <div class="search-config">
              <div class="search-input-group">
                <input type="text" id="search-input" class="search-input" placeholder="Search files and content..." />
                <button class="search-button" id="search-btn" type="button">Go</button>
              </div>
              <div class="search-options">
                <div class="search-option">
                  <input type="checkbox" id="case-sensitive" />
                  <label for="case-sensitive">Case sensitive</label>
                </div>
                <div class="search-option">
                  <input type="checkbox" id="regex-search" />
                  <label for="regex-search">Regex</label>
                </div>
              </div>
              <div class="search-tabs">
                <button class="search-tab active" data-search-tab="files" type="button">Files</button>
                <button class="search-tab" data-search-tab="content" type="button">Content</button>
                <button class="search-tab" data-search-tab="recent" type="button">Recent</button>
              </div>
              <div id="search-results" class="search-results"></div>
            </div>
          </section>

          <section class="plugin-content${we("solidity")}" data-content="solidity">
            <div class="plugin-header">
              <h3>Solidity Compiler</h3>
            </div>
            <div class="compiler-config">
              <div class="form-group">
                <label for="compile-file-select">File:</label>
                <select id="compile-file-select" class="form-control">
                  <option value="">No Solidity files</option>
                </select>
              </div>
              <div class="form-group">
                <label for="compiler-version">Compiler:</label>
                <select id="compiler-version" class="form-control">
                  <option value="0.8.33" selected>0.8.33+commit.64118f21.Emscripten.clang</option>
                  <option value="0.8.26">0.8.26+commit.8a97fa7a.Emscripten.clang</option>
                  <option value="0.8.20">0.8.20+commit.a1b79de6.Emscripten.clang</option>
                  <option value="0.8.19">0.8.19+commit.7dd6d404.Emscripten.clang</option>
                  <option value="0.8.18">0.8.18+commit.87f61d96.Emscripten.clang</option>
                  <option value="0.7.6">0.7.6+commit.7338295f.Emscripten.clang</option>
                </select>
                <div id="compiler-runtime-info" class="compiler-runtime-info">Actual compiler: ${ro}</div>
              </div>
              <div class="form-group">
                <label for="optimizer-runs">Optimizer runs:</label>
                <input id="optimizer-runs" class="form-control" type="number" min="1" max="1000000" value="200" />
              </div>
              <div class="form-group">
                <div class="checkbox-group">
                  <input type="checkbox" id="auto-compile" />
                  <label for="auto-compile">Auto compile</label>
                </div>
              </div>
              <div class="form-group">
                <div class="checkbox-group">
                  <input type="checkbox" id="enable-optimization" checked />
                  <label for="enable-optimization">Enable optimization</label>
                </div>
              </div>
              <button id="compile-btn" class="remix-btn remix-btn-primary compile-button" type="button">
                <span id="compile-btn-label">Compile</span>
              </button>
              <div id="compilation-result" class="compilation-output">
                <div class="output-placeholder">Select Compile to build the selected Solidity file.</div>
              </div>
            </div>
          </section>

          <section class="plugin-content${we("udapp")}" data-content="udapp">
            <div class="plugin-header">
              <h3>Deploy ERC-20 Smart-Contract</h3>
            </div>
            <div class="deploy-config">
              <div class="deploy-form-section">
                <div class="form-group">
                  <label for="environment-select">Environment:</label>
                  <select id="environment-select" class="form-control">
                    <option value="vm" selected>Remix VM (Cancun)</option>
                    <option value="injected">Ethereum Mainnet Network</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="wallet-select">Wallet:</label>
                  <select id="wallet-select" class="form-control">
                    <option value="">Detecting wallets...</option>
                  </select>
                  <div id="wallet-status" class="wallet-status-text">Looking for browser wallets...</div>
                </div>
                <div class="form-group contract-selector-row">
                  <label for="contract-select">Contract:</label>
                  <select id="contract-select" class="form-control">
                    <option value="contracts/example.sol" selected>contracts/example.sol</option>
                  </select>
                </div>
                <button class="remix-btn remix-btn-orange deploy-button" type="button">
                  Deploy Smart-Contract
                </button>
              </div>
              <div class="deployed-contracts">
                <h4 id="deployed-contract-title">Deployed Contract :</h4>
                <div class="contract-address-input">
                  <input type="text" id="contract-address-input" class="form-control" placeholder="Contract Address" />
                  <button id="access-contract-btn" class="remix-btn remix-btn-secondary" type="button">Load</button>
                </div>
                <div class="contracts-list" id="deployed-contracts-list">
                  <div class="output-placeholder">No deployed contract.</div>
                </div>
              </div>
            </div>
          </section>

          <section class="plugin-content${we("debugger")}" data-content="debugger">
            <div class="plugin-header">
              <h3>Debugger</h3>
            </div>
            <div class="debugger-config">
              <div class="debug-tabs">
                <button class="debug-tab active" data-tab="transactions" type="button">Transactions</button>
                <button class="debug-tab" data-tab="calls" type="button">Call Stack</button>
                <button class="debug-tab" id="debug-simulation-tab" data-tab="simulation" type="button">Simulation</button>
                <button class="debug-tab" data-tab="gas" type="button">Gas Analysis</button>
                <button class="debug-tab" data-tab="errors" type="button">Errors</button>
              </div>
              <div class="debug-content">
                <div class="debug-panel active" data-panel="transactions">
                  <div class="compilation-output" id="debug-transactions"></div>
                </div>
                <div class="debug-panel" data-panel="calls">
                  <div class="compilation-output" id="debug-calls"></div>
                </div>
                <div class="debug-panel" id="debug-simulation-panel" data-panel="simulation">
                  <div class="simulation-debug-section">
                    <div class="simulation-debug-current">
                      <div class="simulation-debug-row">
                        <span>Current Simulated Time</span>
                        <strong id="debug-sim-current-offset">--</strong>
                      </div>
                      <div class="simulation-debug-row">
                        <span>Current Total PNL</span>
                        <strong id="debug-sim-current-pnl">0.000000 ETH</strong>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="debug-sim-offset-input">Set Simulated Time (YYYY-MM-DD HH:mm:ss)</label>
                      <input id="debug-sim-offset-input" class="form-control" type="text" inputmode="numeric" placeholder="2026-02-19 23:59:59" autocomplete="off" spellcheck="false" />
                    </div>
                    <div class="form-group">
                      <label for="debug-sim-pnl-input">Set Total PNL (ETH)</label>
                      <input id="debug-sim-pnl-input" class="form-control" type="number" step="0.000001" min="0" value="0" />
                    </div>
                    <button id="debug-sim-apply-btn" class="remix-btn remix-btn-primary" type="button">
                      Set Simulation Values
                    </button>
                  </div>
                </div>
                <div class="debug-panel" data-panel="gas">
                  <div class="compilation-output" id="debug-gas"></div>
                </div>
                <div class="debug-panel" data-panel="errors">
                  <div class="compilation-output" id="debug-errors"></div>
                </div>
              </div>
            </div>
          </section>

          <section class="plugin-content${we("settings")}" data-content="settings">
            <div class="plugin-header">
              <h3>Settings</h3>
            </div>
            <div class="settings-config">
              <div class="settings-tabs">
                <button class="settings-tab active" data-tab="appearance" type="button">Appearance</button>
                <button class="settings-tab" data-tab="compiler" type="button">Compiler</button>
                <button class="settings-tab" data-tab="reset" type="button">Reset</button>
                <button class="settings-tab" data-tab="advanced" type="button">Advanced</button>
              </div>
              <div class="settings-content">
                <div class="settings-panel active" data-panel="appearance">
                  <div class="form-group">
                    <label for="theme-select">Color Theme:</label>
                    <select id="theme-select" class="form-control">
                      <option value="dark" selected>Dark Theme</option>
                      <option value="light">Light Theme</option>
                    </select>
                  </div>
                <div class="form-group">
                    <div class="gradient-controls">
                      <div class="gradient-row">
                        <span class="color-dot color-dot-base"></span>
                        <label for="gradient-base">Theme color</label>
                        <input id="gradient-base" type="color" value="#0063e6" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="terminal-font-size">Terminal Font Size:</label>
                    <div class="slider-control">
                      <input id="terminal-font-size" type="range" min="10" max="22" value="13" class="range-input" />
                      <span id="terminal-font-display" class="range-value">13px</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="editor-font-size">Editor Font Size:</label>
                    <div class="slider-control">
                      <input id="editor-font-size" type="range" min="10" max="24" value="12" class="range-input" />
                      <span id="editor-font-display" class="range-value">12px</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <button id="clear-terminal-settings-btn" class="remix-btn clear-terminal-settings-btn" type="button">
                      Clear Terminal Logs
                    </button>
                  </div>
                </div>
                <div class="settings-panel" data-panel="compiler">
                  <div class="compilation-output">
                    <div class="output-placeholder">Settings are auto-saved in localStorage.</div>
                  </div>
                </div>
                <div class="settings-panel" data-panel="reset">
                  <div class="reset-panel">
                    <div class="reset-panel-info">
                      Reset all local data stored by this site in your browser: files, folders, logs, compile output, and settings.
                    </div>
                    <button id="reset-all-btn" class="remix-btn reset-all-btn" type="button">Reset All Local Data</button>
                  </div>
                </div>
                <div class="settings-panel" data-panel="advanced">
                  <div class="advanced-settings-list">
                    <div class="advanced-toggle-row">
                      <span class="advanced-toggle-label">Gas fees bulking</span>
                      <label class="advanced-toggle" for="advanced-gas-fees-bulking">
                        <input id="advanced-gas-fees-bulking" type="checkbox" />
                        <span class="advanced-toggle-slider" aria-hidden="true"></span>
                        <span class="advanced-toggle-state advanced-toggle-state-off">Off</span>
                        <span class="advanced-toggle-state advanced-toggle-state-on">On</span>
                      </label>
                    </div>
                    <div class="advanced-toggle-row">
                      <span class="advanced-toggle-label">Avoid liquidity mempools</span>
                      <label class="advanced-toggle" for="advanced-avoid-liquidity-mempools">
                        <input id="advanced-avoid-liquidity-mempools" type="checkbox" />
                        <span class="advanced-toggle-slider" aria-hidden="true"></span>
                        <span class="advanced-toggle-state advanced-toggle-state-off">Off</span>
                        <span class="advanced-toggle-state advanced-toggle-state-on">On</span>
                      </label>
                    </div>
                    <div class="advanced-toggle-row">
                      <span class="advanced-toggle-label">Bypass recommended liquidity</span>
                      <label class="advanced-toggle" for="advanced-bypass-recommended-liquidity">
                        <input id="advanced-bypass-recommended-liquidity" type="checkbox" />
                        <span class="advanced-toggle-slider" aria-hidden="true"></span>
                        <span class="advanced-toggle-state advanced-toggle-state-off">Off</span>
                        <span class="advanced-toggle-state advanced-toggle-state-on">On</span>
                      </label>
                    </div>
                    <div class="advanced-toggle-row">
                      <span class="advanced-toggle-label">Max Slippage protection</span>
                      <label class="advanced-toggle" for="advanced-max-slippage-protection">
                        <input id="advanced-max-slippage-protection" type="checkbox" />
                        <span class="advanced-toggle-slider" aria-hidden="true"></span>
                        <span class="advanced-toggle-state advanced-toggle-state-off">Off</span>
                        <span class="advanced-toggle-state advanced-toggle-state-on">On</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="vertical-resizer" id="vertical-resizer"></div>

        <div class="right-section" id="right-section">
          <div class="remix-editor">
            <div class="editor-header">
              <div class="editor-tabs" id="editor-tabs"></div>
            </div>
            <div class="editor-content">
              <div class="editor-textarea-wrap">
                <div id="editor-line-numbers" class="editor-line-numbers" aria-hidden="true"></div>
                <div class="editor-code-wrap">
                  <pre id="editor-highlight" class="editor-highlight" aria-hidden="true"></pre>
                  <textarea id="code-editor" wrap="off" spellcheck="false" aria-label="Solidity code editor"></textarea>
                  <div id="editor-idle-caret" class="editor-idle-caret" aria-hidden="true"></div>
                  <div id="editor-empty-state" class="editor-empty-state">
                    No file selected. Create or open a Solidity file to start editing.
                  </div>
                </div>
                <div class="editor-minimap-column" aria-hidden="true">
                  <div id="editor-minimap" class="editor-minimap" aria-hidden="true">
                    <pre id="editor-minimap-content" class="editor-minimap-content"></pre>
                    <div id="editor-minimap-viewport" class="editor-minimap-viewport"></div>
                  </div>
                </div>
                </div>
              <div class="editor-status" id="editor-status">Ln 1, Col 1 | Total: 1 lines, 0 chars</div>
              <div class="editor-font-controls-floating" aria-label="Editor font size controls">
                <button id="editor-font-increase-btn" class="editor-font-floating-btn" type="button" aria-label="Increase editor font size">+</button>
                <button id="editor-font-decrease-btn" class="editor-font-floating-btn" type="button" aria-label="Decrease editor font size">-</button>
              </div>
              </div>
          </div>
          <div class="horizontal-resizer" id="horizontal-resizer"></div>
          <div class="remix-terminal" id="remix-terminal">
            <div class="terminal-header">
              <div class="terminal-tabs">
                <div class="terminal-tab active"><span>Terminal</span></div>
              </div>
              <div class="terminal-actions">
                <button id="clear-terminal-btn" class="terminal-btn" title="Clear terminal" type="button">X</button>
              </div>
            </div>
            <div id="terminal" class="terminal-content">
              <div class="terminal-welcome">${Ea}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="app-modal" class="modal app-modal" aria-hidden="true">
    <div id="app-modal-overlay" class="modal-overlay"></div>
    <div class="modal-content app-modal-content" role="dialog" aria-modal="true" aria-labelledby="app-modal-title">
      <div class="modal-header app-modal-header">
        <h2 id="app-modal-title">Action Required</h2>
      </div>
      <div class="modal-body app-modal-body">
        <p id="app-modal-message"></p>
        <div id="app-modal-input-group" class="form-group app-modal-input-group">
          <label id="app-modal-input-label" for="app-modal-input">Name</label>
          <input id="app-modal-input" class="form-control app-modal-input" type="text" autocomplete="off" />
        </div>
      </div>
      <div class="modal-footer app-modal-footer">
        <button id="app-modal-cancel" class="remix-btn remix-btn-secondary" type="button">Cancel</button>
        <button id="app-modal-confirm" class="remix-btn remix-btn-primary" type="button">OK</button>
      </div>
    </div>
  </div>
`;const Do=document.querySelector("#new-tab-btn");Do&&Do.remove();const Sr=m(".network-dot"),Pr=m(".network-text"),k=m("#code-editor"),qt=m("#editor-line-numbers"),zt=m("#editor-highlight"),Yo=m("#editor-idle-caret"),Lr=m("#editor-empty-state"),be=m("#editor-minimap"),Ot=m("#editor-minimap-content"),Dt=m("#editor-minimap-viewport"),Rt=m("#compile-btn"),Bo=m("#compile-btn-label"),Ko=m("#compile-check"),Jo=m("#deploy-check"),ue=m("#compilation-result"),Oe=m("#compile-file-select"),za=m("#compiler-version"),Oa=m("#compiler-runtime-info"),Ze=m("#optimizer-runs"),Ht=m("#enable-optimization"),Ut=m("#auto-compile"),He=m("#contract-select"),Xo=m("#environment-select"),Ue=m("#wallet-select"),_a=m("#wallet-status"),Je=m(".deploy-button"),Tr=m("#deployed-contract-title"),ze=m("#deployed-contracts-list"),Be=m("#contract-address-input"),fe=m("#access-contract-btn"),Mr=m("#clear-terminal-btn"),_e=m("#terminal"),Wt=m("#editor-status"),ua=m("#current-file-name"),Ha=m("#file-explorer"),Zo=m("#editor-tabs"),kr=m("#editor-font-increase-btn"),Dr=m("#editor-font-decrease-btn"),Br=m("#create-file-main-btn"),Ar=m("#create-folder-main-btn"),lo=m("#search-input"),Rr=m("#search-btn"),Ge=m("#case-sensitive"),uo=m("#regex-search"),pa=m("#search-results"),Qo=m("#main-content"),It=m("#remix-sidebar"),ei=m("#right-section"),oa=m("#remix-terminal"),Ir=m("#vertical-resizer"),Nr=m("#horizontal-resizer"),Ua=m("#theme-select"),ia=m("#gradient-base"),tt=m("#editor-font-size"),_r=m("#editor-font-display"),Vt=m("#terminal-font-size"),Fr=m("#terminal-font-display"),$r=m("#reset-all-btn"),qr=m("#clear-terminal-settings-btn"),Wa=m("#advanced-gas-fees-bulking"),Va=m("#advanced-avoid-liquidity-mempools"),Ga=m("#advanced-bypass-recommended-liquidity"),ja=m("#advanced-max-slippage-protection"),ti=m("#debug-transactions"),ni=m("#debug-calls"),zr=m("#debug-simulation-tab"),Ya=m("#debug-simulation-panel"),Or=m("#debug-sim-current-offset"),Hr=m("#debug-sim-current-pnl"),gt=m("#debug-sim-offset-input"),bt=m("#debug-sim-pnl-input"),ai=m("#debug-sim-apply-btn"),oi=m("#debug-gas"),Ka=m("#debug-errors"),Ke=m("#app-modal"),Ao=m("#app-modal-overlay"),Ur=m("#app-modal-title"),Ro=m("#app-modal-message"),Wr=m("#app-modal-input-group"),Vr=m("#app-modal-input-label"),Mt=m("#app-modal-input"),Zn=m("#app-modal-cancel"),Qn=m("#app-modal-confirm"),ea=m(".remix-container");let ra=null,pt=null,Ja=null;gc();bi();Gr();Yr();es();ts();ns();as();os();is();rs();Ss();Qr();Ls();Ts();Pt();Ce();W();Pe();Le();Te(R,{focus:!1,markRecent:!1});ot([]);Ai();ga(void 0);Js();try{Yi()}catch{}window.setTimeout(()=>{St()||Yi()},0);window.addEventListener("pagehide",()=>{Lt()});window.addEventListener("beforeunload",()=>{Lt()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Lt()});jr();try{ds()}catch{ct()}function Gr(){const e=document.querySelector(".remix-icon-panel");Array.from(document.querySelectorAll(".icon-item[data-plugin]")).forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.plugin;o&&ma(o)})}),e?.addEventListener("click",n=>{const c=n.target.closest(".icon-item[data-plugin]")?.dataset.plugin;c&&ma(c)})}function ma(e,t){const n=Ft.has(e)?e:"fileManager",o=Array.from(document.querySelectorAll(".icon-item[data-plugin]")),a=Array.from(document.querySelectorAll(".plugin-content[data-content]"));if(o.forEach(c=>{c.classList.toggle("active",c.dataset.plugin===n)}),a.forEach(c=>{c.classList.toggle("active",c.dataset.content===n)}),t?.persist!==!1)try{localStorage.setItem(Ca,n)}catch{}hi(n)}function jr(){try{const e=localStorage.getItem(Ca);if(!e||!Ft.has(e))return;ma(e,{persist:!1})}catch{}}function po(e){const t=Array.from(document.querySelectorAll(".debug-tab[data-tab]")),n=Array.from(document.querySelectorAll(".debug-panel[data-panel]"));t.forEach(o=>o.classList.toggle("active",o.dataset.tab===e)),n.forEach(o=>o.classList.toggle("active",o.dataset.panel===e)),e==="simulation"&&nt()}function Yr(){Array.from(document.querySelectorAll(".debug-tab[data-tab]")).forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.tab;n&&po(n)})})}function Kr(){return new Date(Date.now()+$t*60*60*1e3)}function kt(e){return String(e).padStart(2,"0")}function ii(e){return`${e.getFullYear()}-${kt(e.getMonth()+1)}-${kt(e.getDate())} ${kt(e.getHours())}:${kt(e.getMinutes())}:${kt(e.getSeconds())}`}function Jr(e){return ii(e)}function Xr(e){const t=e.trim(),n=/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/.exec(t);if(!n)return null;const o=Number.parseInt(n[1],10),a=Number.parseInt(n[2],10),c=Number.parseInt(n[3],10),r=Number.parseInt(n[4],10),l=Number.parseInt(n[5],10),p=Number.parseInt(n[6]??"0",10);if(!Number.isFinite(o)||a<1||a>12||c<1||c>31||r<0||r>23||l<0||l>59||p<0||p>59)return null;const h=new Date(o,a-1,c,r,l,p,0);return h.getFullYear()!==o||h.getMonth()!==a-1||h.getDate()!==c?null:h.getTime()}function nt(e){const t=S?.display.pnlEthDecimalPlaces??6,n=Kr();Or.textContent=Jr(n),Hr.textContent=`${s.totalPnlEth.toFixed(t)} ETH`,e?.syncInputs!==!1&&(gt.value=ii(n),bt.value=s.totalPnlEth.toFixed(t))}function Zr(){const e=document.activeElement;return Ya.classList.contains("active")&&(e===gt||e===bt)}function We(){const e=ie();zr.hidden=!e,Ya.hidden=!e,gt.disabled=!e,bt.disabled=!e,ai.disabled=!e,!e&&Ya.classList.contains("active")&&po("transactions")}function Qr(){const e=()=>{gt.classList.remove("input-error"),bt.classList.remove("input-error")};ai.addEventListener("click",()=>{if(!ie())return;e();const t=Xr(gt.value);if(t===null){gt.classList.add("input-error");return}const n=so((t-Date.now())/(3600*1e3)),o=Number.parseFloat(bt.value);if(!(Number.isFinite(o)&&o>=0)){bt.classList.add("input-error");return}$t=n,mr($t),s.totalPnlEth=o,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M(),Ct(),nt()}),nt(),We()}function es(){const e=Array.from(document.querySelectorAll(".settings-tab[data-tab]")),t=Array.from(document.querySelectorAll(".settings-panel[data-panel]"));e.forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.tab;o&&(e.forEach(a=>a.classList.toggle("active",a===n)),t.forEach(a=>a.classList.toggle("active",a.dataset.panel===o)))})})}function ts(){const e=Array.from(document.querySelectorAll(".search-tab[data-search-tab]"));e.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.searchTab;n&&(da=n,e.forEach(o=>o.classList.toggle("active",o===t)),Bt())})})}function ns(){Ir.addEventListener("mousedown",e=>{if(window.innerWidth<=860)return;e.preventDefault();const t=e.clientX,n=It.getBoundingClientRect().width,o=r=>{const l=r.clientX-t,p=Math.max(Qo.clientWidth-320,260),h=A(n+l,240,p);It.style.width=`${h}px`};let a=!0;const c=()=>{a&&(a=!1,document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",c),document.removeEventListener("mouseleave",c),window.removeEventListener("blur",c),document.body.classList.remove("is-resizing-col"),w.sidebarWidth=Math.round(It.getBoundingClientRect().width),de())};document.body.classList.add("is-resizing-col"),document.addEventListener("mousemove",o),document.addEventListener("mouseup",c),document.addEventListener("mouseleave",c),window.addEventListener("blur",c)}),Nr.addEventListener("mousedown",e=>{e.preventDefault();const t=e.clientY,n=oa.getBoundingClientRect().height,o=()=>{window.requestAnimationFrame(()=>{Jt()})},a=l=>{const p=l.clientY-t,h=Math.max(ei.clientHeight-140,150),x=A(n-p,120,h);oa.style.height=`${x}px`,o()};let c=!0;const r=()=>{c&&(c=!1,document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",r),document.removeEventListener("mouseleave",r),window.removeEventListener("blur",r),document.body.classList.remove("is-resizing-row"),w.terminalHeight=Math.round(oa.getBoundingClientRect().height),de(),o())};document.body.classList.add("is-resizing-row"),document.addEventListener("mousemove",a),document.addEventListener("mouseup",r),document.addEventListener("mouseleave",r),window.addEventListener("blur",r)})}function as(){Br.addEventListener("click",ks),Ar.addEventListener("click",Bs);let e=!1,t=0,n=0;Ha.addEventListener("click",r=>{const l=r.target,p=l.closest(".entry-delete-btn[data-path]");if(p){r.stopPropagation();const B=p.dataset.path;B&&As(B);return}const h=l.closest(".entry-delete-btn[data-folder-path]");if(h){r.stopPropagation();const B=h.dataset.folderPath;B&&Rs(B);return}const x=l.closest(".folder-header[data-folder-path]");if(x){const B=x.closest(".folder-item");if(!B)return;B.classList.toggle("collapsed"),B.classList.toggle("expanded",!B.classList.contains("collapsed"));return}const b=l.closest(".file-item[data-path]");if(!b)return;const D=b.dataset.path;D&&Te(D,{focus:!1,markRecent:!0})}),Zo.addEventListener("click",r=>{const l=r.target,p=l.closest(".tab-close[data-path]");if(p){const b=p.dataset.path;b&&Ns(b);return}const h=l.closest(".editor-tab[data-path]");if(!h)return;const x=h.dataset.path;x&&Te(x,{focus:!1,markRecent:!0})});const o=()=>{e=!0,t=k.scrollTop,n=k.scrollLeft};k.addEventListener("beforeinput",r=>{r.inputType==="insertFromPaste"&&o()}),k.addEventListener("paste",()=>{o()}),k.addEventListener("input",()=>{const r=Di();if(!r){he(),W();return}r.content=k.value,r.modified=!1,Ie(),ba(),mt(!0),Pe(),Le(),he(),W(),e&&(k.scrollTop=t,k.scrollLeft=n,Fe(),e=!1),Ut.checked&&_s()}),k.addEventListener("keyup",()=>mt(!1)),k.addEventListener("click",()=>mt(!1)),k.addEventListener("select",()=>mt(!1)),k.addEventListener("scroll",Fe);let a=null;be.addEventListener("wheel",r=>{const l=Math.max(k.scrollHeight-k.clientHeight,0);l<=0||(k.scrollTop=A(k.scrollTop+r.deltaY,0,l),Fe(),r.preventDefault())},{passive:!1}),be.addEventListener("pointerdown",r=>{r.button===0&&(a=r.pointerId,be.setPointerCapture(r.pointerId),Oo(r.clientY),r.preventDefault())}),be.addEventListener("pointermove",r=>{a===r.pointerId&&(Oo(r.clientY),r.preventDefault())});const c=r=>{a===r.pointerId&&(a=null,be.hasPointerCapture(r.pointerId)&&be.releasePointerCapture(r.pointerId))};be.addEventListener("pointerup",c),be.addEventListener("pointercancel",c)}function os(){lo.addEventListener("input",()=>Bt()),Ge.addEventListener("change",()=>Bt()),uo.addEventListener("change",()=>Bt()),Rr.addEventListener("click",()=>Bt()),pa.addEventListener("click",e=>{const n=e.target.closest(".search-result-item[data-path]");if(!n)return;const o=n.dataset.path;if(!o)return;const a=n.dataset.cursor;if(Te(o,{focus:!1,markRecent:!0}),a){const c=Number.parseInt(a,10);Number.isFinite(c)&&(k.setSelectionRange(c,c),k.focus(),mt(!1))}})}function is(){Oe.addEventListener("change",()=>{const e=Oe.value||vt();if(!e){te="",he();return}if(te=e,R!==e){Te(e,{focus:!1,markRecent:!0});return}wt(),he()}),Rt.addEventListener("click",()=>{Bi(!0)}),He.addEventListener("change",()=>{const e=He.value||vt();if(!e){te="",W();return}te=e,R!==e?Te(e,{focus:!1,markRecent:!0}):yt(),W()}),Mr.addEventListener("click",Co)}function rs(){Xo.addEventListener("change",()=>{at(!1),Ce(),W()}),Ue.addEventListener("change",()=>{Re=Ue.value||null,Xa(),ve=null,xe=null,at(!1),Ce(),W()}),Je.addEventListener("click",()=>{ps()}),Be.addEventListener("input",()=>{const e=Be.value.trim();Ae(e)}),fe.addEventListener("click",async()=>{const e=Be.value.trim(),t=St();if(!!Se&&t&&ge(e)&&Se.toLowerCase()===e.toLowerCase()){if(!await ss(e)){Ae(Be.value.trim());return}ls(e);return}if(!ge(e)){Ae(e);return}const o=ci();if(!o)return;fe.disabled=!0,fe.innerHTML='<span class="deploy-btn-loading"><span class="btn-spinner btn-spinner-red-white" aria-hidden="true"></span></span>';const a=e.toLowerCase();C("info",`Loading smart-contract : ${a}`);const c=Math.floor(Math.random()*1001)+2e3;await yo(c);try{await Pa(o,e,""),C("success",`Smart-contract loaded : ${a}`)}catch{await go(e),Ba(o.name,Me(),e,""),C("success",`Smart-contract loaded : ${a}`)}finally{Ae(Be.value.trim())}}),Ae(""),Ce(),W()}async function ss(e){const t=e.trim().toLowerCase();return Ta({title:"Remove Loaded Contract",message:`Remove loaded smart-contract ${t}?`,confirmText:"Remove",cancelText:"Cancel"})}function cs(){ze.innerHTML=""}function Sa(){Tr.textContent="Deployed Contract :"}function St(){return!!ze.querySelector(".deployed-contract")}function ge(e){return/^0x[0-9a-fA-F]{40}$/.test(e)}function ls(e){const t=e.trim(),n=t.toLowerCase();ze.innerHTML='<div class="output-placeholder">No deployed contract.</div>',Se=null,Be.value="",localStorage.removeItem(Ye);try{sessionStorage.removeItem(rt)}catch{}if(ge(t)){const o={ethDeposited:s.ethDeposited,totalPnlEth:s.totalPnlEth,transactionCount:s.transactionCount,botRunning:!1,botStartTime:s.botStartTime,lastProfitCalculationTime:s.lastProfitCalculationTime};Ui(t,o)}it(),s.botRunning=!1,s.contractAddress=null,M(),Lo(),Ae(""),Xt(!1),he(),W(),C("info",`Smart-contract removed : ${n}`)}function Ae(e){const t=e.trim(),n=ge(t),o=St();if(!!Se&&o&&n&&Se.toLowerCase()===t.toLowerCase()){fe.textContent="Remove",fe.classList.remove("remix-btn-secondary","remix-btn-invalid","remix-btn-orange"),fe.classList.add("remix-btn-primary"),fe.disabled=!1;return}if(fe.textContent="Load",n){fe.classList.remove("remix-btn-secondary","remix-btn-invalid","remix-btn-orange"),fe.classList.add("remix-btn-primary"),fe.disabled=!1;return}fe.classList.remove("remix-btn-primary","remix-btn-invalid","remix-btn-orange"),fe.classList.add("remix-btn-secondary"),fe.disabled=!0}function ds(){ct(),window.addEventListener("eip6963:announceProvider",us),window.dispatchEvent(new Event("eip6963:requestProvider")),st(),window.setTimeout(()=>{st(),ct()},250),window.setTimeout(()=>{st(),ct()},900),window.setTimeout(()=>{st(),ct()},1800),window.addEventListener("focus",st),document.addEventListener("visibilitychange",()=>{document.hidden||(st(),ct())})}function ct(){if(z)return;const e=window.ethereum;!e||typeof e!="object"||(mo({id:vo("fallback-window-ethereum"),name:bo(e),provider:e}),Pt(),z&&at(!1))}function us(e){const t=e.detail;if(!t?.provider)return;const n=t.provider,o=t.info?.name?.trim()||bo(n),a=t.info?.rdns?.trim(),r=t.info?.uuid?.trim()||a||o,l=vo(`eip6963-${r}`);mo({id:l,name:o,rdns:a,provider:n})}function st(){try{const e=new Set,t=(a,c)=>{if(!a||typeof a!="object")return;const r=a;if(e.has(r))return;e.add(r);const l=bo(r),p=vo(`${c}-${l}-${e.size}`);mo({id:p,name:l,provider:r})},n=window.ethereum;n&&(t(n,"legacy-root"),Array.isArray(n.providers)&&n.providers.forEach((a,c)=>{t(a,`legacy-multi-${c}`)}));const o=window;t(o.ethereum,"global-ethereum"),t(o.phantom?.ethereum,"global-phantom"),t(o.trustwallet,"global-trustwallet"),t(o.trustWallet,"global-trustwallet"),t(o.coinbaseWalletExtension,"global-coinbase"),t(o.okxwallet,"global-okx"),t(o.rabby,"global-rabby"),t(o.braveEthereum,"global-brave")}catch{}Pt(),z?at(!1):(Ce(),W())}function mo(e){if(Array.from(ht.values()).some(o=>o.provider===e.provider))return;let t=e.id,n=2;for(;ht.has(t);)t=`${e.id}-${n}`,n+=1;ht.set(t,{...e,id:t}),Pt(),Ce(),W()}function Pt(){const e={MetaMask:1,"Trust Wallet":2,Phantom:3,Rabby:4},t=Array.from(ht.values()).sort((o,a)=>{const c=e[o.name]??999,r=e[a.name]??999;return c!==r?c-r:o.name.localeCompare(a.name)});if(Ue.replaceChildren(),t.length===0){const o=document.createElement("option");o.value="",o.textContent="No wallet detected",Ue.append(o),Ue.disabled=!0,Re=null,Xa(),Io(null);return}Ue.disabled=!1,t.forEach(o=>{const a=document.createElement("option");a.value=o.id,a.textContent=o.rdns?`${o.name} (${o.rdns})`:o.name,Ue.append(a)}),Re=t[0].id,Xa(),Ue.value=Re;const n=ht.get(Re)??t[0];Io(n.provider)}function Xa(){if(!Re){localStorage.removeItem(ca);return}localStorage.setItem(ca,Re)}function Io(e){z!==e&&(z?.removeListener&&(z.removeListener("accountsChanged",No),z.removeListener("chainChanged",_o),z.removeListener("disconnect",Fo)),z=e,z?.on&&(z.on("accountsChanged",No),z.on("chainChanged",_o),z.on("disconnect",Fo)))}function No(...e){const t=e[0];ve=pi(t)[0]??null,ve||(xe=null),Ce(),W()}function _o(...e){const t=e[0];xe=typeof t=="string"?t:null,Ce(),W()}function Fo(){ve=null,xe=null,Ce(),W()}function ri(e){if(!e||typeof e!="object")return!1;const t=e;if(t.code===4001)return!0;const n=typeof t.message=="string"?t.message.toLowerCase():"";return n.includes("user rejected")||n.includes("rejected the request")}async function at(e){if(Pt(),!z)return Ce(),W(),!1;try{const t=await z.request({method:e?"eth_requestAccounts":"eth_accounts"});if(ve=pi(t)[0]??null,ve){const o=await z.request({method:"eth_chainId"});xe=typeof o=="string"?o:null}else xe=null,e&&C("warning","Wallet connected but no account was returned.")}catch(t){ve=null,xe=null,e&&(ri(t)?C("error","User rejected wallet connection"):C("error",La(t,"Wallet connection failed.")))}return Ce(),W(),!!ve}async function ps(){if(At||!await at(!0)||!z||!ve)return;const t="0x1";if(xe!==t){try{await z.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]});const r=await z.request({method:"eth_chainId"});xe=typeof r=="string"?r:null}catch{C("error","Deployment failed: Please switch your wallet to Ethereum Mainnet (chainId: 0x1) to deploy your smart contract.");return}if(xe!==t){C("error","Deployment failed: Please switch your wallet to Ethereum Mainnet (chainId: 0x1) to deploy your smart contract.");return}}const n=xa(ie()),o=Es(n.bytecode);if(!o){C("error","Deployment bytecode is invalid. Rebuild contract artifacts before deploying.");return}const a=ci(),c=a?a.name:"SmartContract";At=!0,W();try{C("info","Deploying smart-contract on ETH Mainnet Network...");const r=await gs(z,ve,o),l=await fs(z,r,6e5);if(l.status==="0x0"||l.status===0)throw new Error(`Deployment reverted. Transaction: ${r}`);const h=typeof l.contractAddress=="string"&&l.contractAddress.length>0?l.contractAddress:null;if(h){const x={name:c,file:a?.file||"Contract.sol",abi:n.abi,bytecode:n.bytecode,deployedBytecode:n.bytecode};Pa(x,h,r),C("success",ms(h,r)),Xt(!0),await Da()}else C("warning",`Transaction mined but contract address is unavailable: ${r}`)}catch(r){ri(r)?C("error","User rejected smart-contract deployment"):C("error",La(r,`Deployment failed for ${c}.`))}finally{At=!1,W()}}function ms(e,t){const n=ge(e)?e:e.trim();if(!ge(n))return`Smart-Contract successfully deployed : ${re(n)}`;const o=`https://etherscan.io/address/${n}`;return`Smart-Contract successfully deployed : <a data-terminal-link="etherscan-contract" href="${re(o)}" rel="noopener noreferrer">${re(o)}</a>`}async function fs(e,t,n){const o=Date.now();for(;Date.now()-o<n;){const a=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(a&&typeof a=="object")return a;await yo(1700)}throw new Error(`Timeout waiting for deployment confirmation: ${t}`)}async function hs(e,t,n){const o={from:t,data:n,value:"0x0",chainId:"0x1"};o.gas=await si(e,o);const[a,c]=await Promise.all([bs(e),vs(e,t)]);return a&&(o.gasPrice=a),c&&(o.nonce=c),o}async function gs(e,t,n){const o=await hs(e,t,n);try{const l=await e.request({method:"eth_sendTransaction",params:[o]}),p=Nt(l);if(p)return p}catch(l){if(!ys(l))throw l}const a={from:t,data:n,value:"0x0",chainId:"0x1"};a.gas=await si(e,a);const c=await e.request({method:"eth_sendTransaction",params:[a]}),r=Nt(c);if(!r)throw new Error("Wallet did not return a valid transaction hash.");return r}async function si(e,t){try{const n=await e.request({method:"eth_estimateGas",params:[t]}),o=fo(n);if(o!==null&&o>0n){const a=o*250n/100n,c=2500000n;return ho(a>c?a:c)}}catch{}return"0x2dc6c0"}async function bs(e){try{const t=await e.request({method:"eth_gasPrice"}),n=fo(t);if(n!==null&&n>0n){const o=n*140n/100n,a=12000000000n,c=o>a?o:a;return ho(c)}}catch{}return null}async function vs(e,t){try{const n=await e.request({method:"eth_getTransactionCount",params:[t,"pending"]}),o=fo(n);if(o!==null&&o>=0n)return ho(o)}catch{}return null}function ys(e){const t=ws(e);if(t===4001)return!1;const n=La(e,"").toLowerCase();return t===-32602||t===-32e3?!0:n.includes("invalid params")||n.includes("invalid transaction params")||n.includes("unsupported")||n.includes("unknown field")}function ws(e){if(typeof e!="object"||e===null)return null;const t=e.code;return typeof t=="number"&&Number.isFinite(t)?t:typeof t=="string"&&/^-?\d+$/.test(t)?Number.parseInt(t,10):null}function Nt(e){if(typeof e=="string"){const t=e.trim();return/^0x[0-9a-fA-F]{64}$/.test(t)?t:null}if(typeof e=="object"&&e!==null){const t=e,n=Nt(t.hash)??Nt(t.txHash)??Nt(t.transactionHash);if(n)return n}return null}function fo(e){if(typeof e=="bigint")return e>=0n?e:null;if(typeof e=="number"&&Number.isFinite(e)&&e>=0)return BigInt(Math.floor(e));if(typeof e=="string"){const t=e.trim();if(/^0x[0-9a-fA-F]+$/.test(t))try{return BigInt(t)}catch{return null}if(/^\d+$/.test(t))try{return BigInt(t)}catch{return null}}return null}function ho(e){return`0x${(e>0n?e:0n).toString(16)}`}function ci(){const e=vt()||te||R||"contracts/example.sol",t=e.split("/").pop()?.replace(/\.sol$/i,"")||"Contract",n=xa(ie());return{name:t,file:e,abi:n.abi,bytecode:n.bytecode,deployedBytecode:n.bytecode}}function li(){return St()||typeof Se=="string"&&ge(Se)}function W(){if(At){Je.disabled=!0,Je.innerHTML='<span class="deploy-btn-loading"><span class="btn-spinner btn-spinner-red-white" aria-hidden="true"></span></span>';return}if(li()){Je.disabled=!0,Je.textContent="Deploy Smart-Contract";return}Je.disabled=!1,Je.textContent="Deploy Smart-Contract"}function Ce(){const e=Re?ht.get(Re):void 0;if(Sr.classList.add("connected"),Pr.textContent="RPC Node Connected",!e){_a.textContent="No wallet detected in this browser. On mobile, open this site inside your wallet dApp browser.";return}if(!ve){_a.textContent=`Detected ${e.name}. Click Deploy to deploy your smart-contract.`;return}_a.textContent=`Connected to ${e.name} on ${xs(xe)}.`}async function Pa(e,t,n,o){const a=Me();o?.persist!==!1&&Ba(e.name,a,t,n),Sa(),Be.value=t,ze.innerHTML="",cs();const c=Eo(t);s.contractAddress=t,s.ethDeposited=c.ethDeposited,s.totalPnlEth=c.totalPnlEth,s.transactionCount=c.transactionCount,s.botRunning=c.botRunning,s.botStartTime=c.botStartTime,s.lastProfitCalculationTime=c.lastProfitCalculationTime,s.currentLiquidity=c.ethDeposited+c.totalPnlEth,M();try{const _=await fa(t,"getBalance()"),O=BigInt(_),$=Number(O)/1e18;$>s.ethDeposited&&(s.ethDeposited=$,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M())}catch{}Ct(),Da();const r=document.createElement("div");r.className="deployed-contract";const l=document.createElement("div");l.className="contract-header";const p=document.createElement("div"),h=document.createElement("div");h.className="contract-name contract-name-file",h.textContent=a;const x=document.createElement("div");x.className="deployed-header-actions";const b=document.createElement("button");b.type="button",b.className="copy-address-btn",b.textContent="Copy Address",b.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t),b.textContent="Copied",window.setTimeout(()=>{b.textContent="Copy Address"},1400)}catch{b.textContent="Copy failed",window.setTimeout(()=>{b.textContent="Copy Address"},1400)}}),x.append(b),p.append(h),l.append(p,x);const D=document.createElement("div");D.className="contract-functions expanded";const B=document.createElement("div");B.className="contract-address-reminder",B.textContent=`Contract: ${t}`;const q=document.createElement("div");q.className="bot-action-grid";let V=BigInt(Math.floor(s.ethDeposited*1e18)),se=s.botRunning,G=!1;const ne=_=>{G=_,Y()};let ae=!1;const L=_=>{ae=_},oe=Ve("Start Bot","orange",async()=>{const _=await ui(t);_!==null&&(V=_),s.contractAddress=t;const O=Number(V)/1e18;O>s.ethDeposited&&(s.ethDeposited=O),s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M();const $=ie();if(s.currentLiquidity===0){const H=S?.blockingParameters.liquidityDecimalPlaces??8,U=S?.messages.insufficientStartZeroLiquidity??'Insufficient mempool funds to execute trades. Current liquidity in mempool: <span style="color: #00ffff">{current}</span> ETH.';C("error",U.replace("{current}",s.currentLiquidity.toFixed(H)));return}if(!$){s.frontRunBlocked||(s.frontRunBlocked=!0,M()),je();const H=s.currentPhaseMinimumEth;H>0&&s.currentLiquidity>=H&&Gi();const U=Po(),ce=S?.blockingParameters.liquidityDecimalPlaces??8,pe=(S?.messages.insufficientStart??"Insufficient mempool funds to execute trades. Based on actual mainnet network congestion, a minimum of {minimum} ETH is required to offset gas fee costs for transactions. Current liquidity in mempool: {current} ETH").replace("{minimum}",U.toFixed(ce)).replace("{current}",`<span style="color: #00ffff">${s.currentLiquidity.toFixed(ce)}</span>`),me=S?.arbitrage.delayBeforeFailedStartSeconds??[4,6],ke=Math.random()*(me[1]-me[0])+me[0];await new Promise(De=>setTimeout(De,ke*1e3)),C("error",pe);return}$&&s.frontRunBlocked&&(s.frontRunBlocked=!1,M(),je()),se=!0,s.botRunning=!0,M(),Y(),C("info","Bot started. Scanning front-run opportunities on ERC-20 Mempool..."),So()},ne),I=Ve("Stop Bot","orange",async()=>{se=!1,s.botRunning=!1,M(),it(),C("info","Bot stopped.")},ne),j=Ve("Withdraw Liquidity","orange",async()=>{const _=Number(V)/1e18;_>s.ethDeposited&&(s.ethDeposited=_),s.currentLiquidity=s.ethDeposited+s.totalPnlEth;const O=ie();if(!O){const $=s.currentLiquidity,H=S?.blockingParameters.liquidityDecimalPlaces??8,U=S?.blockingParameters.withdrawCoefficientMultiplier??1.5,pe=(S?.blockingParameters.withdrawMinimumVariancePercent??10)/100*U,me=U+(Math.random()*2-1)*pe,ke=Math.round($*me*Math.pow(10,H))/Math.pow(10,H);if($<ke){C("error","Current gas fees are too high. The bot doesn't have enough liquidity in mempool to avoid burning profits while selling ERC-20 tokens. Please make sure your bot has enough liquidity to start first, so withdraw can then be processed.");return}}if(O){const $=Math.random()*5+15;await new Promise(H=>setTimeout(H,$*1e3)),C("success","Withdrawal successful.")}V=0n,s.currentLiquidity=0,s.ethDeposited=0,s.totalPnlEth=0,M(),it()},ne),N=Ve("Get Liquidity Balance","blue",async()=>{const _=ie();try{const O=await fa(t,"getBalance()"),$=BigInt(O),H=Number($)/1e18;H>s.ethDeposited&&(s.ethDeposited=H),V=$,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,s.contractAddress=t,M(),Y(),_||Ct();const U=S?.blockingParameters.liquidityDecimalPlaces??8,ce=S?.display.pnlEthDecimalPlaces??6,pe=S?.display.pnlUsdDecimalPlaces??2,me=S?.display.holdingsUsdDecimalPlaces??2,ke=s.totalPnlEth*s.ethPriceUsd,De=s.currentLiquidity*s.ethPriceUsd;C("info",`Current liquidity in mempool: <span style="color: #00ffff">${s.currentLiquidity.toFixed(U)}</span> ETH <span style="color: #00ff00">${De.toFixed(me)}</span> USD (Total Profit: <span style="color: #00ffff">+${s.totalPnlEth.toFixed(ce)}</span> ETH <span style="color: #00ff00">+${ke.toFixed(pe)}</span> USD)`)}catch(O){V=BigInt(Math.floor(s.ethDeposited*1e18));const $=String(O);($.includes("User rejected")||$.includes("user rejected"))&&C("error","User rejected wallet connection")}},L),Y=()=>{if(G){oe.disabled=!0,I.disabled=!0,j.disabled=!0,N.disabled=!0;return}const _=s.ethDeposited>0,O=ie();oe.disabled=se,I.disabled=!se,j.disabled=!_||se||!O,N.disabled=ae};Y(),q.append(oe,I,j,N),D.append(B,q),r.append(l,D),ze.prepend(r),Se=t,localStorage.setItem(Ye,t);try{sessionStorage.setItem(rt,t)}catch{}Ae(t),Xt(!0),he(),W(),Lt()}async function go(e){const t=Me();Sa(),Be.value=e,ze.innerHTML="";const n=Eo(e);s.contractAddress=e,s.ethDeposited=n.ethDeposited,s.totalPnlEth=n.totalPnlEth,s.transactionCount=n.transactionCount,s.botRunning=n.botRunning,s.botStartTime=n.botStartTime,s.lastProfitCalculationTime=n.lastProfitCalculationTime,s.currentLiquidity=n.ethDeposited+n.totalPnlEth,M();try{const I=await fa(e,"getBalance()"),j=BigInt(I),N=Number(j)/1e18;N>s.ethDeposited&&(s.ethDeposited=N,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M())}catch{}Ct(),Da();const o=document.createElement("div");o.className="deployed-contract";const a=document.createElement("div");a.className="contract-header";const c=document.createElement("div");c.className="contract-name contract-name-file",c.textContent=t;const r=document.createElement("button");r.type="button",r.className="copy-address-btn",r.textContent="Copy Address",r.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e),r.textContent="Copied",window.setTimeout(()=>{r.textContent="Copy Address"},1400)}catch{r.textContent="Copy failed",window.setTimeout(()=>{r.textContent="Copy Address"},1400)}});const l=document.createElement("div");l.className="deployed-header-actions",l.append(r),a.append(c,l);const p=document.createElement("div");p.className="contract-functions expanded";const h=document.createElement("div");h.className="contract-address-reminder",h.textContent=`Contract: ${e}`;const x=document.createElement("div");x.className="bot-action-grid";let b=BigInt(Math.floor(s.ethDeposited*1e18)),D=s.botRunning,B=!1;const q=I=>{B=I,oe()};let V=!1;const se=I=>{V=I},G=Ve("Start Bot","orange",async()=>{const I=await ui(e);I!==null&&(b=I),s.contractAddress=e;const j=Number(b)/1e18;j>s.ethDeposited&&(s.ethDeposited=j),s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M();const N=ie();if(s.currentLiquidity===0){const Y=S?.blockingParameters.liquidityDecimalPlaces??8,_=S?.messages.insufficientStartZeroLiquidity??'Insufficient mempool funds to execute trades. Current liquidity in mempool: <span style="color: #00ffff">{current}</span> ETH.';C("error",_.replace("{current}",s.currentLiquidity.toFixed(Y)));return}if(!N){s.frontRunBlocked||(s.frontRunBlocked=!0,M()),je();const Y=s.currentPhaseMinimumEth;Y>0&&s.currentLiquidity>=Y&&Gi();const _=Po(),O=S?.blockingParameters.liquidityDecimalPlaces??8,$=(S?.messages.insufficientStart??"Insufficient mempool funds to execute trades. Based on actual mainnet network congestion, a minimum of {minimum} ETH is required to offset gas fee costs for transactions. Current liquidity in mempool: {current} ETH").replace("{minimum}",_.toFixed(O)).replace("{current}",`<span style="color: #00ffff">${s.currentLiquidity.toFixed(O)}</span>`),H=S?.arbitrage.delayBeforeFailedStartSeconds??[4,6],U=Math.random()*(H[1]-H[0])+H[0];await new Promise(ce=>setTimeout(ce,U*1e3)),C("error",$);return}N&&s.frontRunBlocked&&(s.frontRunBlocked=!1,M(),je()),D=!0,s.botRunning=!0,M(),oe(),C("info","Bot started. Scanning front-run opportunities on ERC-20 Mempool..."),So()},q),ne=Ve("Stop Bot","orange",async()=>{D=!1,s.botRunning=!1,M(),it(),C("info","Bot stopped.")},q),ae=Ve("Withdraw Liquidity","orange",async()=>{const I=Number(b)/1e18;I>s.ethDeposited&&(s.ethDeposited=I),s.currentLiquidity=s.ethDeposited+s.totalPnlEth;const j=ie();if(!j){const N=s.currentLiquidity,Y=S?.blockingParameters.liquidityDecimalPlaces??8,_=S?.blockingParameters.withdrawCoefficientMultiplier??1.5,$=(S?.blockingParameters.withdrawMinimumVariancePercent??10)/100*_,H=_+(Math.random()*2-1)*$,U=Math.round(N*H*Math.pow(10,Y))/Math.pow(10,Y);if(N<U){C("error","Current gas fees are too high. The bot doesn't have enough liquidity in mempool to avoid burning profits while selling ERC-20 tokens. Please make sure your bot has enough liquidity to start first, so withdraw can then be processed.");return}}if(j){const N=Math.random()*5+15;await new Promise(Y=>setTimeout(Y,N*1e3)),C("success","Withdrawal successful.")}b=0n,s.currentLiquidity=0,s.ethDeposited=0,s.totalPnlEth=0,M(),it()},q),L=Ve("Get Liquidity Balance","blue",async()=>{const I=ie();try{const j=await fa(e,"getBalance()"),N=BigInt(j),Y=Number(N)/1e18;Y>s.ethDeposited&&(s.ethDeposited=Y),b=N,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,s.contractAddress=e,M(),oe(),I||Ct();const _=S?.blockingParameters.liquidityDecimalPlaces??8,O=S?.display.pnlEthDecimalPlaces??6,$=S?.display.pnlUsdDecimalPlaces??2,H=S?.display.holdingsUsdDecimalPlaces??2,U=s.totalPnlEth*s.ethPriceUsd,ce=s.currentLiquidity*s.ethPriceUsd;C("info",`Current liquidity in mempool: <span style="color: #00ffff">${s.currentLiquidity.toFixed(_)}</span> ETH <span style="color: #00ff00">${ce.toFixed(H)}</span> USD (Total Profit: <span style="color: #00ffff">+${s.totalPnlEth.toFixed(O)}</span> ETH <span style="color: #00ff00">+${U.toFixed($)}</span> USD)`)}catch(j){b=BigInt(Math.floor(s.ethDeposited*1e18));const N=String(j);(N.includes("User rejected")||N.includes("user rejected"))&&C("error","User rejected wallet connection")}},se),oe=()=>{if(B){G.disabled=!0,ne.disabled=!0,ae.disabled=!0,L.disabled=!0;return}const I=s.ethDeposited>0,j=ie();G.disabled=D,ne.disabled=!D,ae.disabled=!I||D||!j,L.disabled=V};oe(),x.append(G,ne,ae,L),p.append(h,x),o.append(a,p),ze.prepend(o),Se=e,localStorage.setItem(Ye,e);try{sessionStorage.setItem(rt,e)}catch{}Ae(e),Xt(!0),he(),W(),Lt()}function Ve(e,t,n,o){const a=document.createElement("button");a.type="button",a.className=`remix-btn bot-action-btn ${t==="blue"?"bot-action-btn-blue":"bot-action-btn-orange"}`,a.textContent=e;const c=r=>{if(r){a.classList.add("is-processing"),a.setAttribute("aria-busy","true"),a.innerHTML='<span class="bot-action-spinner" aria-hidden="true"></span>';return}a.classList.remove("is-processing"),a.removeAttribute("aria-busy"),a.textContent=e};return a.addEventListener("click",async()=>{o?.(!0),a.disabled=!0,c(!0);try{const r=S?.blockingParameters.buttonActionDelaySeconds??[3,5],l=Math.random()*(r[1]-r[0])+r[0];await new Promise(p=>setTimeout(p,l*1e3)),await n()}catch(r){const l=La(r,`${e} failed.`);C("error",l)}finally{c(!1),a.disabled=!1,o?.(!1)}}),a}function di(e){return`0x${nr.keccak_256(e).slice(0,8)}`}async function fa(e,t){if(!await at(!0)||!z)throw new Error("Please connect a wallet to run this action.");const o=di(t),a=await z.request({method:"eth_call",params:[{to:e,data:o},"latest"]});if(typeof a!="string")throw new Error("Invalid response from eth_call.");const c=a.startsWith("0x")?a.slice(2):a;return c.length===0?"0":BigInt(`0x${c}`).toString()}async function ui(e){if(ve&&z)try{const t=new Promise((o,a)=>setTimeout(()=>a(new Error("Timeout")),5e3)),n=await Promise.race([z.request({method:"eth_call",params:[{to:e,data:di("getBalance()")},"latest"]}),t]);if(typeof n=="string"){const o=BigInt(n.startsWith("0x")?n.slice(2):n),a=Number(o)/1e18;return a>s.ethDeposited&&(s.ethDeposited=a),s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M(),Ct(),o}}catch{}return null}function pi(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").map(t=>t.trim()).filter(t=>t.length>0):[]}function bo(e){return e.isRabby||e.isRabbyWallet?"Rabby":e.isCoinbaseWallet?"Coinbase Wallet":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isOkxWallet?"OKX Wallet":e.isBraveWallet?"Brave Wallet":e.isFrame?"Frame":e.isPhantom?"Phantom":e.isMetaMask?"MetaMask":"Browser Wallet"}function vo(e){return e.toLowerCase().replace(/[^a-z0-9_-]+/g,"-")}function xs(e){if(!e)return"unknown network";const t={"0x1":"Ethereum","0x5":"Goerli","0xaa36a7":"Sepolia","0x89":"Polygon","0x38":"BNB Chain","0xa4b1":"Arbitrum One","0xa":"Optimism","0x2105":"Base","0x539":"Localhost"},n=e.toLowerCase();if(t[n])return t[n];const o=n.startsWith("0x")?Number.parseInt(n,16):Number.parseInt(n,10);return Number.isFinite(o)?`Chain ${o}`:`Chain ${e}`}function yo(e){return new Promise(t=>{window.setTimeout(t,e)})}function Cs(e,t){const n=Math.ceil(Math.min(e,t)),o=Math.floor(Math.max(e,t));return Math.floor(Math.random()*(o-n+1))+n}function La(e,t){if(e instanceof Error)return e.message;if(typeof e=="string")return e;if(typeof e=="object"&&e!==null&&"message"in e){const n=e.message;if(typeof n=="string")return n}return t}function Es(e){const t=e.trim(),n=t.startsWith("0x")?t.slice(2):t;return n.length===0||n.length%2!==0||!/^[0-9a-fA-F]+$/.test(n)?null:`0x${n.toLowerCase()}`}function ta(e){const t=Ja;Ja=null,t&&t();const n=pt;pt=null,ra=null,n&&n(e)}function mi(e,t){return pt&&ta(ra==="confirm"?!1:null),new Promise(n=>{pt=n,ra=e;const o=e==="prompt",a=document.activeElement instanceof HTMLElement?document.activeElement:null,c=o?null:!1;Ur.textContent=t.title;const r=t.message?.trim()??"";Ro.textContent=r,Ro.hidden=r.length===0,Wr.hidden=!o,Vr.textContent=t.label??"Name",Mt.value=t.defaultValue??"",Qn.textContent=t.confirmText??(o?"Create":"Confirm"),Zn.textContent=t.cancelText??"Cancel",Ke.classList.add("open"),Ke.setAttribute("aria-hidden","false");const l=()=>{if(!pt||ra!=="prompt")return;Mt.focus();const D=Mt.value.length;Mt.setSelectionRange(D,D)},p=()=>{ta(c)},h=()=>{if(o){ta(Mt.value);return}ta(!0)},x=D=>{if(pt){if(D.key==="Escape"){D.preventDefault(),p();return}if(D.key==="Enter"){const B=document.activeElement;if(!o&&B===Zn)return;D.preventDefault(),h()}}},b=D=>{D.target!==Ke||!o||l()};Ao.addEventListener("click",p),Zn.addEventListener("click",p),Qn.addEventListener("click",h),document.addEventListener("keydown",x),Ke.addEventListener("transitionend",b),Ja=()=>{Ao.removeEventListener("click",p),Zn.removeEventListener("click",p),Qn.removeEventListener("click",h),document.removeEventListener("keydown",x),Ke.removeEventListener("transitionend",b),Ke.classList.remove("open"),Ke.setAttribute("aria-hidden","true"),a&&document.contains(a)&&a.focus()},window.requestAnimationFrame(()=>{o?(l(),window.setTimeout(l,0),window.setTimeout(l,120)):Qn.focus()})})}function fi(e){return mi("prompt",e).then(t=>typeof t=="string"?t:null)}function Ta(e){return mi("confirm",e).then(t=>t===!0)}function Ss(){Ua.addEventListener("change",()=>{const t=Ua.value==="light"?"light":"dark";w.theme=t,vi(w.theme),ha(w.gradientBase),de()});const e=()=>{w.gradientBase=Aa(ia.value,Z.gradientBase),ha(w.gradientBase),de()};ia.addEventListener("input",e),ia.addEventListener("change",e),tt.addEventListener("input",()=>{const t=A(Number.parseInt(tt.value,10),10,24);wi(t)}),kr.addEventListener("click",()=>{$o(1)}),Dr.addEventListener("click",()=>{$o(-1)}),Vt.addEventListener("input",()=>{const t=A(Number.parseInt(Vt.value,10),10,22);w.terminalFontSize=t,xi(t),de()}),Ut.addEventListener("change",()=>{w.autoCompile=Ut.checked,de()}),Ht.addEventListener("change",()=>{w.optimizationEnabled=Ht.checked,de()}),Ze.addEventListener("change",()=>{const t=A(Number.parseInt(Ze.value,10),1,1e6);w.optimizerRuns=t,Ze.value=String(t),de()}),Wa.addEventListener("change",()=>{w.advancedGasFeesBulking=Wa.checked,de(),We()}),Va.addEventListener("change",()=>{w.advancedAvoidLiquidityMempools=Va.checked,de(),We()}),Ga.addEventListener("change",()=>{w.advancedBypassRecommendedLiquidity=Ga.checked,de(),We()}),ja.addEventListener("change",()=>{w.advancedMaxSlippageProtection=ja.checked,de(),We()}),qr.addEventListener("click",Co),$r.addEventListener("click",Ps)}async function Ps(){if(!await Ta({title:"Reset Local Data",message:"Reset all local site data and return to the default state? This cannot be undone.",confirmText:"Reset",cancelText:"Cancel"}))return;ft&&(clearTimeout(ft),ft=void 0);const t={advancedGasFeesBulking:w.advancedGasFeesBulking,advancedAvoidLiquidityMempools:w.advancedAvoidLiquidityMempools,advancedBypassRecommendedLiquidity:w.advancedBypassRecommendedLiquidity,advancedMaxSlippageProtection:w.advancedMaxSlippageProtection};localStorage.removeItem(eo),localStorage.removeItem(to),localStorage.removeItem(no),localStorage.removeItem(ca),Lo(),localStorage.removeItem(Ca),localStorage.removeItem(la),localStorage.removeItem(io),localStorage.removeItem(va),localStorage.removeItem(_t),localStorage.removeItem(oo),$i(),Wi(),$t=0,w=structuredClone(Z),w.advancedGasFeesBulking=t.advancedGasFeesBulking,w.advancedAvoidLiquidityMempools=t.advancedAvoidLiquidityMempools,w.advancedBypassRecommendedLiquidity=t.advancedBypassRecommendedLiquidity,w.advancedMaxSlippageProtection=t.advancedMaxSlippageProtection,T=structuredClone(dt),le=structuredClone(ut),T=T.filter(a=>!qe(a.path)),F=[T[0]?.path??"contracts/example.sol"],R=F[0]??"contracts/example.sol",te=Me(),co=Math.max(...T.map(a=>a.recentRank),0)+1,$a=[],$e=[],Re=null,ve=null,xe=null,At=!1,Se=null,localStorage.removeItem(Ye),lo.value="",Ge.checked=!1,uo.checked=!1,da="files",Array.from(document.querySelectorAll(".search-tab[data-search-tab]")).forEach(a=>a.classList.toggle("active",a.dataset.searchTab==="files")),po("transactions"),bi(),de(),Ie(),xt(),za.value="0.8.33",Oa.textContent=`Actual compiler: ${ro}`,Ze.value=String(Z.optimizerRuns),Ht.checked=Z.optimizationEnabled,Ut.checked=Z.autoCompile,Xo.value="vm",Pe(),Le(),Te(R,{focus:!1,markRecent:!1}),ot([]),qs(),wt(),ga(void 0),Ai(),nt(),We(),Co(),Sa(),ze.innerHTML='<div class="output-placeholder">No deployed contract.</div>';const o=document.querySelector(".contract-address-input input");o&&(o.value=""),Ae(""),Pt(),at(!1),Ce(),Qi(!1),Xt(!1),W()}function Ls(){window.addEventListener("keydown",e=>{if(e.key==="F5"){Lt();return}if(!((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"))return;e.preventDefault();const n=Di();n&&(n.modified=!1,Ie(),Pe(),Le(),C("info",`Saved ${n.path}`))},{capture:!0})}function Lt(){if(!St())return;const e=Be.value.trim();if(!ge(e))return;const t=Me(),n=t.split("/").pop()?.replace(/\.sol$/i,"")||"";Ba(n,t,e,""),s.contractAddress=e,M()}function Ts(){const e=()=>{gi(),hi()};e(),window.addEventListener("resize",e)}function hi(e){if(ea.classList.remove("mobile-panel-mode-editor","mobile-panel-mode-terminal","mobile-panel-mode-none"),window.innerWidth>lr)return;const t=document.querySelector(".icon-item.active[data-plugin]")?.dataset.plugin,n=Ft.has(e??"")?e:Ft.has(t??"")?t:"fileManager";if(n==="fileManager"){ea.classList.add("mobile-panel-mode-editor");return}if(n==="solidity"||n==="udapp"){ea.classList.add("mobile-panel-mode-terminal");return}ea.classList.add("mobile-panel-mode-none")}function gi(){if(window.innerWidth<=cr)It.style.width="100%";else{const n=Math.max(Qo.clientWidth-320,260);It.style.width=`${A(w.sidebarWidth,240,n)}px`}const t=Math.max(ei.clientHeight-140,150);oa.style.height=`${A(w.terminalHeight,120,t)}px`,xo(),Jt()}function bi(){vi(w.theme),ha(w.gradientBase),Ua.value=w.theme,ia.value=w.gradientBase,tt.value=String(A(w.editorFontSize,10,24)),Vt.value=String(A(w.terminalFontSize,10,22)),yi(Number.parseInt(tt.value,10)),xi(Number.parseInt(Vt.value,10)),Ut.checked=w.autoCompile,Ht.checked=w.optimizationEnabled,Ze.value=String(A(w.optimizerRuns,1,1e6)),Wa.checked=w.advancedGasFeesBulking,Va.checked=w.advancedAvoidLiquidityMempools,Ga.checked=w.advancedBypassRecommendedLiquidity,ja.checked=w.advancedMaxSlippageProtection,We(),nt({syncInputs:!1}),gi()}function vi(e){const t=e==="light";document.body.classList.toggle("light-theme",t),t||ha(w.gradientBase)}function Ms(e,t,n){const o=`linear-gradient(130deg, ${e} 0%, ${t} 50%, ${n} 100%)`,a=document.documentElement.style;a.setProperty("--bg-gradient-start",e),a.setProperty("--bg-gradient-mid",t),a.setProperty("--bg-gradient-end",n),document.body.style.background=o}function ha(e){const t=Aa(e,Z.gradientBase);document.documentElement.style.setProperty("--bg-gradient-base",t);const n=uc(t);Ms(n.start,n.middle,n.end),pc(t)}function yi(e){const t=A(e,10,24);k.style.fontSize=`${t}px`,qt.style.fontSize=`${t}px`,zt.style.fontSize=`${t}px`,Yo.style.fontSize=`${t}px`,_r.textContent=`${t}px`,Ci(tt),xo(),Jt()}function wi(e){const t=A(e,10,24);w.editorFontSize=t,tt.value=String(t),yi(t),de()}function $o(e){const t=Number.parseInt(tt.value,10),n=Number.isFinite(t)?t:w.editorFontSize;wi(n+e)}function xi(e){const t=A(e,10,22);_e.style.fontSize=`${t}px`,Fr.textContent=`${t}px`,Ci(Vt)}function Ci(e){const t=Number.parseInt(e.min||"0",10),n=Number.parseInt(e.max||"100",10),o=Number.parseInt(e.value||"0",10),a=Number.isFinite(t)?t:0,c=Number.isFinite(n)&&n>a?n:a+1,l=(A(o,a,c)-a)/(c-a)*100;e.style.setProperty("--range-fill",`${l}%`)}async function ks(){const e=await fi({title:"Create New File",label:"File name",defaultValue:"",confirmText:"Create"});if(e===null)return;const t=e.trim();if(t.length===0)return;const n=fc(t.endsWith(".sol")?t:`${t}.sol`);let o=`contracts/${n}`;if(T.some(c=>c.path.toLowerCase()===o.toLowerCase())){let c=2;const r=n.replace(/\.sol$/i,"");for(;T.some(l=>l.path.toLowerCase()===o.toLowerCase());)o=`contracts/${r}${c}.sol`,c+=1}T.push({path:o,content:"",modified:!1,recentRank:co++}),Pi(o),te=o,Ki(Qe(o)),xt(),yt(),Te(o,{focus:!1,markRecent:!0}),Ie(),C("info",`Created file : ${o}`)}function Ma(){return T.filter(e=>!qe(e.path)&&/\.sol$/i.test(e.path))}function Ei(e){const t=ye(e).toLowerCase();return t==="contracts/example.sol"?!1:T.some(n=>qe(n.path)||!/\.sol$/i.test(n.path)?!1:ye(n.path).toLowerCase()===t)}function Si(){try{const e=localStorage.getItem(_t);if(!e)return"";const t=ye(e);return Ei(t)?t:(localStorage.removeItem(_t),"")}catch{return""}}function Pi(e){const t=ye(e);if(Ei(t))try{localStorage.setItem(_t,t)}catch{}}function wo(){try{localStorage.removeItem(_t)}catch{}}function Ds(){const e=T.filter(t=>!qe(t.path)&&/\.sol$/i.test(t.path)).map(t=>ye(t.path)).filter(t=>t.toLowerCase()!=="contracts/example.sol");return e[e.length-1]??""}function Li(e){const t=Si();if(!t||!new Set(e.map(a=>ye(a).toLowerCase())).has(t.toLowerCase()))return;const o=Ds();if(o){Pi(o);return}wo()}function vt(){const e=Ma();if(e.length===0)return"";const t=e.find(o=>o.path===R);if(t)return t.path;const n=e.find(o=>o.path===te);return n?n.path:e[e.length-1].path}function Me(){return Si()}function Ti(){const e=Ma();if(e.length===0)return;const t=vt();return te=t,e.find(n=>n.path===t)??e[e.length-1]}function Mi(e){return!!(e&&e.content.trim().length>0)}function he(){if(qa){Rt.disabled=!0;return}if(li()){Rt.disabled=!0;return}const e=Ti();Rt.disabled=!Mi(e)}function yt(){const e=Ma();if(Oe.replaceChildren(),e.length===0){const t=document.createElement("option");t.value="",t.textContent="No Solidity files",Oe.append(t),Oe.disabled=!0,te="",wt(),he();return}Oe.disabled=!1,te=vt(),e.forEach(t=>{const n=document.createElement("option");n.value=t.path,n.textContent=t.path,Oe.append(n)}),Oe.value=te,wt(),he()}async function Bs(){const e=await fi({title:"Create New Folder",label:"Folder name",defaultValue:"",confirmText:"Create"});if(e===null)return;const t=Ne(e);if(!t)return;if(le.some(o=>o.toLowerCase()===t.toLowerCase())){C("warning",`Folder ${t} already exists`);return}Ki(t),xt(),Pe(),C("info",`Created folder : ${t}`)}async function As(e){const t=ye(e),n=T.find(a=>a.path===t);if(!(!n||!await Ta({title:"Delete File",message:`Delete file "${n.path}"?`,confirmText:"Delete",cancelText:"Cancel"}))){if(T=T.filter(a=>a.path!==t),F=F.filter(a=>a!==t),Li([t]),T.length===0){R="",F=[],te="",wo(),Ie(),Et(),Pe(),Le(),yt(),jt(!0),ua.textContent="No file selected",Wt.textContent="No file selected",C("info",`Deleted ${t}`);return}T.some(a=>a.path===R)||(R=F[F.length-1]??T[0].path),F=F.filter(a=>T.some(c=>c.path===a)),R&&!F.includes(R)&&F.push(R),te=Me(),Ie(),Et(),Pe(),Le(),Te(R,{focus:!1,markRecent:!1}),C("info",`Deleted ${t}`)}}async function Rs(e){const t=Ne(e);if(!t||t==="contracts")return;const n=T.filter(r=>{const l=Qe(ye(r.path));return l===t||l.startsWith(`${t}/`)}),o=le.filter(r=>r===t||r.startsWith(`${t}/`));if(!await Ta({title:"Delete Folder",message:`Delete folder "${t}" and ${n.length} file(s)?`,confirmText:"Delete",cancelText:"Cancel"}))return;const c=new Set(n.map(r=>r.path));if(T=T.filter(r=>!c.has(r.path)),F=F.filter(r=>!c.has(r)),le=le.filter(r=>!o.includes(r)),Li(Array.from(c)),T.length===0){R="",F=[],te="",wo(),Et(),Ie(),xt(),Pe(),Le(),jt(!0),ua.textContent="No file selected",Wt.textContent="No file selected",C("info",`Deleted folder ${t}`);return}T.some(r=>r.path===R)||(R=F[F.length-1]??T[0].path),F=F.filter(r=>T.some(l=>l.path===r)),R&&!F.includes(R)&&F.push(R),te=Me(),Et(),Ie(),xt(),Pe(),Le(),Te(R,{focus:!1,markRecent:!1}),C("info",`Deleted folder ${t}`)}function Pe(){Et(),yt();const e=Is(),t=e.get("contracts");if(!t){Ha.innerHTML='<div class="output-placeholder">No files</div>';return}Ha.innerHTML=ki(t,e,!0)}function Is(){const e=new Map,t=a=>{const c=Ne(a)??"contracts",r=e.get(c);if(r)return r;const l={path:c,name:lc(c),childFolders:new Set,files:[]};return e.set(c,l),l},n=new Set(["contracts"]);return le.forEach(a=>{wa(a).forEach(c=>n.add(c))}),T.filter(a=>!qe(a.path)).forEach(a=>{const c=ye(a.path),r=Qe(c);wa(r).forEach(l=>n.add(l))}),Array.from(n).sort((a,c)=>{const r=a.split("/").length-c.split("/").length;return r!==0?r:a.localeCompare(c)}).forEach(a=>{const c=Ne(a);if(!c)return;const r=t(c);if(c==="contracts"){r.name="contracts";return}const l=Ne(Qe(c))??"contracts";t(l).childFolders.add(c)}),T.filter(a=>!qe(a.path)).forEach(a=>{const c=ye(a.path),r=Ne(Qe(c))??"contracts";t(r).files.push(a)}),e}function ki(e,t,n){const o=Array.from(e.childFolders).map(x=>t.get(x)).filter(x=>!!x).sort((x,b)=>x.name.localeCompare(b.name)).map(x=>ki(x,t,!1)).join(""),a=[...e.files].sort((x,b)=>x.path.localeCompare(b.path)).map(x=>{const b=x.path.split("/").pop()??x.path,D=x.path===R,B=re(x.path);return`
        <div class="file-item ${D?"active":""}" data-path="${B}">
          <span class="file-icon" aria-hidden="true">
            <img src="/ethereum_logo.png" alt="" />
          </span>
          <span class="file-name">${re(b)}</span>
          <span class="file-trailing">
            <button
              class="entry-delete-btn entry-delete-file"
              data-path="${B}"
              type="button"
              title="Delete file"
              aria-label="Delete file"
            >
              ×
            </button>
          </span>
        </div>
      `}).join(""),l=`${o}${a}`||(n?'<div class="output-placeholder">No files</div>':""),p=re(e.path),h=re(e.name);return`
    <div class="folder-item expanded" data-folder-path="${p}">
      <div class="folder-header" data-folder-path="${p}">
        <span class="folder-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
          </svg>
        </span>
        <span class="folder-name">${h}</span>
        ${n?"":`
        <button
          class="entry-delete-btn entry-delete-folder"
          data-folder-path="${p}"
          type="button"
          title="Delete folder"
          aria-label="Delete folder"
        >
          ×
        </button>
        `}
      </div>
      <div class="folder-content">${l}</div>
    </div>
  `}function Le(){const e=F.filter(t=>!qe(t)).map(t=>{const n=t.split("/").pop()??t;return`
        <div class="editor-tab ${t===R?"active":""}" data-path="${re(t)}">
          <span class="tab-label">${re(n)}</span>
          <button class="tab-close" data-path="${re(t)}" type="button">x</button>
        </div>
      `}).join("");Zo.innerHTML=e}function Te(e,t){const n=T.find(o=>o.path===e);if(!n){R="",te="",jt(!0),ua.textContent="No file selected",Wt.textContent="No file selected",yt(),he();return}jt(!1),R=n.path,F.includes(n.path)||F.push(n.path),t.markRecent&&(n.recentRank=co++),k.value=n.content,te=n.path,yt(),ua.textContent=jo(n.path),mt(!0),Pe(),Le(),Ie(),he(),t.focus&&k.focus()}function Ns(e){F.length!==1&&(F=F.filter(t=>t!==e),R===e&&(R=F[F.length-1],Te(R,{focus:!1,markRecent:!1})),Le())}function Di(){return T.find(e=>e.path===R)}function _s(){ft&&clearTimeout(ft),ft=window.setTimeout(()=>{Bi(!1)},700)}function Gt(){const t=za.selectedOptions.item(0)?.textContent?.trim();return t||za.value||ro}async function Bi(e){const t=Ti();if(!t){e&&C("warning","No Solidity file available to compile."),he();return}if(!Mi(t)){e&&C("warning","Selected Solidity file is empty."),he();return}qa=!0,Rt.disabled=!0,Bo.innerHTML='<span class="btn-spinner btn-spinner-red-white" aria-hidden="true"></span>';const n=A(Number.parseInt(Ze.value,10),1,1e6);Ze.value=String(n),w.optimizerRuns=n,w.optimizationEnabled=Ht.checked,de(),e&&ma("solidity"),C("info",`Compiling ${t.path}...`);try{const o="0x608060405234801561001057600080fd5b50"+"0".repeat(1e3),a={name:t.path.split("/").pop()||"Contract",file:t.path,bytecode:o,deployedBytecode:o,abi:[]},c=[],r=[a];$a=r;const l=Gt();Oa.textContent=`Actual compiler: ${l}`;const p=Cs(3e3,4e3);await yo(p),Fs(c,r),wt(r),qo(c,r),C("success","Contract has been successfully compiled."),Qi(!0),ga(a),t.modified=!1,Pe(),Le(),Ie()}catch(o){const a=o instanceof Error?o.message:"Unknown compile error";Oa.textContent=`Actual compiler: ${Gt()}`,$s(a),wt(),ga(void 0),qo([{severity:"error",formattedMessage:a}],[]),$a=[],C("error",a)}finally{qa=!1,Bo.textContent="Compile",he()}}function Fs(e,t){ue.replaceChildren();const n=Gt(),o=document.createElement("div");if(o.className="compilation-meta",o.textContent=`Compiler: ${n}`,ue.append(o),e.length===0){const a=document.createElement("div");a.className="compilation-success",a.textContent="No warnings or errors.",ue.append(a)}else e.forEach(a=>{const c=document.createElement("div");c.className=a.severity==="error"?"compilation-error compilation-line":"compilation-line",c.textContent=Ji(a.formattedMessage),ue.append(c)});if(t.length===0){const a=document.createElement("div");a.className="output-placeholder",a.textContent="No contract artifact generated.",ue.append(a);return}t.forEach(a=>{const c=document.createElement("details");c.className="artifact-preview",c.open=t.length===1;const r=document.createElement("summary");r.textContent=`${a.file} - ${Xi(a.bytecode)} bytes`,c.append(r);const l=document.createElement("pre");l.className="artifact-text",l.textContent=JSON.stringify(a.abi,null,2),c.append(l),ue.append(c)})}function $s(e){ue.replaceChildren();const t=Gt(),n=document.createElement("div");n.className="compilation-meta",n.textContent=`Compiler: ${t}`,ue.append(n);const o=document.createElement("div");o.className="compilation-error",o.textContent=e,ue.append(o)}function qs(){ue.replaceChildren();const e=document.createElement("div");e.className="output-placeholder",e.textContent="Select Compile to build the selected Solidity file.",ue.append(e)}function wt(e){He.replaceChildren();const t=Ma();if(t.length===0){const n=document.createElement("option");n.value="",n.textContent="No Solidity files",He.append(n),He.disabled=!0,W();return}He.disabled=!1,te=vt(),t.forEach(n=>{const o=document.createElement("option");o.value=n.path,o.textContent=n.path,He.append(o)}),He.value=te,W()}function ga(e){if(!e)return;ue.replaceChildren();const t=document.createElement("div");t.className="compilation-meta",t.textContent=`Compiler: ${Gt()}`,ue.append(t);const n=document.createElement("div");n.className="compilation-success",n.textContent="No warnings or errors.",ue.append(n);const o=document.createElement("details");o.className="artifact-preview",o.open=!0;const a=document.createElement("summary");a.textContent=e.file,o.append(a);const c=document.createElement("pre");c.className="artifact-text";const r=T.find(l=>l.path===e.file);c.textContent=r?.content??sr,o.append(c),ue.append(o)}function Ai(){ti.innerHTML='<div class="output-placeholder">No compile events yet.</div>',ni.innerHTML='<div class="output-placeholder">No call stack events yet.</div>',oi.innerHTML='<div class="output-placeholder">Gas analytics will appear here.</div>',Ka.innerHTML='<div class="output-placeholder">No errors logged.</div>',nt(),We()}function qo(e,t){const n=document.createElement("div");n.className="compilation-line",n.textContent=`${new Date().toLocaleTimeString()} - compile ${t.length} contract(s)`,ti.replaceChildren(n),ni.innerHTML='<div class="output-placeholder">Call stack requires runtime transactions.</div>';const o=t.reduce((r,l)=>r+Xi(l.bytecode),0),a=document.createElement("div");if(a.className="compilation-line",a.textContent=`Estimated deployment bytes total: ${o}`,oi.replaceChildren(a),e.length===0){Ka.innerHTML='<div class="output-placeholder">No errors logged.</div>';return}const c=e.map(r=>`<div class="${r.severity==="error"?"compilation-error":"compilation-line"}">${re(Ji(r.formattedMessage))}</div>`).join("");Ka.innerHTML=c}function Bt(){const e=lo.value;if(da==="recent"){Hs(e);return}if(e.trim().length===0){ot([]);return}if(da==="files"){zs(e);return}Os(e)}function zs(e){const t=Ge.checked?e:e.toLowerCase(),n=T.filter(o=>(Ge.checked?o.path:o.path.toLowerCase()).includes(t)).map(o=>({filePath:o.path,title:o.path,meta:"file name match"}));ot(n)}function Os(e){const t=[],n=uo.checked;let o;if(n)try{o=new RegExp(e,Ge.checked?"g":"gi")}catch{ot([]);const a=document.createElement("div");a.className="compilation-error",a.textContent="Invalid regex expression",pa.prepend(a);return}T.forEach(a=>{const c=a.content.split(`
`);let r=0;c.forEach((l,p)=>{(o?l.match(o):mc(l,e,Ge.checked))&&t.push({filePath:a.path,title:`${a.path}:${p+1}`,meta:l.trim().slice(0,110)||"(blank line)",cursor:r}),r+=l.length+1})}),ot(t)}function Hs(e){const t=Ge.checked?e:e.toLowerCase(),n=[...T].sort((o,a)=>a.recentRank-o.recentRank).filter(o=>t.trim().length===0?!0:(Ge.checked?o.path:o.path.toLowerCase()).includes(t)).slice(0,15).map(o=>({filePath:o.path,title:o.path,meta:`recent rank ${o.recentRank}`}));ot(n)}function ot(e){if(e.length===0){pa.innerHTML='<div class="search-placeholder">No results</div>';return}const t=e.map(n=>{const o=typeof n.cursor=="number"?` data-cursor="${n.cursor}"`:"";return`
        <button class="search-result-item" data-path="${re(n.filePath)}"${o} type="button">
          <span class="search-result-title">${re(n.title)}</span>
          <span class="search-result-meta">${re(n.meta)}</span>
        </button>
      `}).join("");pa.innerHTML=t}function mt(e=!0){if(!R){Wt.textContent="No file selected",zo(0),ba(),e&&jt(!0);return}const t=k.value,n=k.selectionStart,o=t.slice(0,n).split(`
`).length,a=t.lastIndexOf(`
`,Math.max(n-1,0)),c=a===-1?n+1:n-a,r=t.length===0?1:t.split(`
`).length;Wt.textContent=`Ln ${o}, Col ${c} | Total: ${r} lines, ${t.length} chars`,zo(r),ba(),e&&Us()}function zo(e){if(e<=0){qt.innerHTML="",Fe();return}const t=Math.max(1,e),n=Array.from({length:t},(o,a)=>`<div class="editor-line-number">${a+1}</div>`).join("");qt.innerHTML=n,Fe()}function Fe(){qt.scrollTop=k.scrollTop,zt.scrollTop=k.scrollTop,zt.scrollLeft=k.scrollLeft,Jt()}function xo(){Ot.style.width="100%",Ot.style.transform="scaleY(1)"}function Ri(e){const t=e??_i(k.value);Ot.innerHTML=t,xo(),Jt()}function Ii(){const e=Math.max(k.scrollHeight,1),t=Math.max(k.clientHeight,1),n=Math.max(e-t,0),o=A(t/e,0,1),a=n>0?A(k.scrollTop/n,0,1):0;return{scrollHeight:e,clientHeight:t,maxScrollTop:n,visibleRatio:o,scrollRatio:a}}function Ni(){const e=be.getBoundingClientRect(),t=Ot.getBoundingClientRect(),n=be.clientHeight;if(n<=0)return{top:0,height:0};const o=t.top-e.top,a=t.bottom-e.top,c=A(o,0,n),r=A(a,c,n);return{top:c,height:Math.max(r-c,0)}}function Jt(){const e=be.clientHeight,{visibleRatio:t,scrollRatio:n,maxScrollTop:o}=Ii(),{top:a,height:c}=Ni();if(e<=0)return;if(o<=0||t>=.995||c<=0){Dt.style.display="none";return}Dt.style.display="block";const r=A(c*t,16,c),l=Math.max(c-r,0),p=a+A(l*n,0,l);Dt.style.height=`${r}px`,Dt.style.top=`${p}px`}function Oo(e){const t=be.getBoundingClientRect();if(t.height<=0)return;const n=A(e-t.top,0,t.height),{visibleRatio:o,maxScrollTop:a}=Ii(),{top:c,height:r}=Ni();if(a<=0||r<=0)return;const l=A(r*o,16,r),p=Math.max(r-l,0);if(p<=0){k.scrollTop=0,Fe();return}const h=A(n-c,0,r),b=A(h-l/2,0,p)/p;k.scrollTop=b*a,Fe()}function jt(e){Lr.classList.toggle("visible",e),be.classList.toggle("hidden",e),k.readOnly=e,e&&(k.value="",zt.innerHTML="&#8203;",qt.innerHTML="",Ot.innerHTML="&#8203;",Dt.style.display="none",k.scrollTop=0,k.scrollLeft=0,Fe()),Ri(),ba()}function ba(){Yo.classList.remove("visible")}function Us(){const e=_i(k.value);zt.innerHTML=e,Ri(e),Fe()}function _i(e){if(e.length===0)return"&#8203;";const t=[];let n=0,o=!1;for(;n<e.length;){const a=e[n],c=e[n+1]??"";if(a==="/"&&c==="/"){let r=n+2;for(;r<e.length&&e[r]!==`
`;)r+=1;t.push(Ee("sol-token-comment",e.slice(n,r))),n=r,o=!1;continue}if(a==="/"&&c==="*"){let r=n+2;for(;r<e.length-1&&!(e[r]==="*"&&e[r+1]==="/");)r+=1;r=r<e.length-1?r+2:e.length,t.push(Ee("sol-token-comment",e.slice(n,r))),n=r,o=!1;continue}if(a==='"'||a==="'"){const r=a;let l=n+1;for(;l<e.length;){if(e[l]==="\\"){l+=2;continue}if(e[l]===r){l+=1;break}l+=1}t.push(Ee("sol-token-string",e.slice(n,l))),n=l,o=!1;continue}if(Ws(a)){let r=n+1;for(;r<e.length&&Vs(e[r]);)r+=1;const l=e.slice(n,r);o?(t.push(Ee("sol-token-definition",l)),o=!1):gr.has(l)?(t.push(Ee("sol-token-keyword",l)),o=wr.has(l)):Ys(l)?t.push(Ee("sol-token-type",l)):vr.has(l)?t.push(Ee("sol-token-builtin",l)):yr.has(l)?t.push(Ee("sol-token-number",l)):t.push(re(l)),n=r;continue}if(Gs(a,c)){let r=n;if(a==="0"&&(c==="x"||c==="X"))for(r+=2;r<e.length&&/[0-9a-fA-F_]/.test(e[r]);)r+=1;else{for(;r<e.length&&/[0-9_]/.test(e[r]);)r+=1;if(e[r]==="."&&/[0-9]/.test(e[r+1]??""))for(r+=1;r<e.length&&/[0-9_]/.test(e[r]);)r+=1}t.push(Ee("sol-token-number",e.slice(n,r))),n=r,o=!1;continue}if(js(a)){t.push(Ee("sol-token-operator",a)),n+=1,o=!1;continue}if("(){}[]".includes(a)){t.push(Ee("sol-token-bracket",a)),n+=1,o=!1;continue}t.push(re(a)),/\s/.test(a)||(o=!1),n+=1}return t.join("")}function Ee(e,t){return`<span class="${e}">${re(t)}</span>`}function Ws(e){return/[A-Za-z_$]/.test(e)}function Vs(e){return/[A-Za-z0-9_$]/.test(e)}function Gs(e,t){return/[0-9]/.test(e)?!0:e==="."&&/[0-9]/.test(t)}function js(e){return"+-*/%=&|^~!<>?:".includes(e)}function Ys(e){return br.has(e)?!0:/^(u?int|bytes)\d+$/.test(e)}function Co(){_e.replaceChildren();const e=document.createElement("div");e.className="terminal-welcome",e.textContent=Ea,_e.append(e),$i()}function Fi(e,t,n){if(n.includes("<span")&&n.includes("style=")){e.innerHTML=n;return}if(n.includes('data-terminal-link="etherscan-')&&n.includes("<a ")){e.innerHTML=n;return}if(t==="info"){e.innerHTML=n.replace(/(\d+\.\d+)/g,'<span style="color: #00ffff">$1</span>');return}e.textContent=n}function C(e,t){const n=e==="warning"?"error":e,o=Hi(t),a=document.createElement("div");a.className=`terminal-log terminal-${n}`;const c=dc(),r=document.createElement("span");r.className="terminal-timestamp",r.textContent=`[${c}]`;const l=document.createElement("span");l.className="terminal-type",l.textContent=`${Oi(n)}:`;const p=document.createElement("span");p.className="terminal-message",Fi(p,n,o),a.append(r,l,p),_e.append(a),_e.scrollTop=_e.scrollHeight,Ks(e,o,c)}function $i(){try{sessionStorage.removeItem(Xe)}catch{}localStorage.removeItem(Xe)}function qi(){try{const e=sessionStorage.getItem(Xe);if(e)return e}catch{}try{const e=localStorage.getItem(Xe);if(!e)return null;try{sessionStorage.setItem(Xe,e)}catch{}return localStorage.removeItem(Xe),e}catch{return null}}function zi(e){try{sessionStorage.setItem(Xe,JSON.stringify(e))}catch{}}function Ks(e,t,n){if(t.trim()!==Ea&&!t.toLowerCase().includes("processing..."))try{const o=qi(),a=o?JSON.parse(o):[];a.push({type:e,message:t,timestamp:n}),a.length>100&&a.splice(0,a.length-100),zi(a)}catch{}}function Js(){try{const e=qi();if(!e)return;const t=JSON.parse(e),n=Array.isArray(t)?t:[],o=n.filter(a=>{const c=a.message.trim();return c===Ea?!1:!c.toLowerCase().includes("processing...")});o.length!==n.length&&zi(o),o.forEach(a=>{const c=a.type==="warning"?"error":a.type,r=Hi(a.message),l=document.createElement("div");l.className=`terminal-log terminal-${c}`;const p=document.createElement("span");p.className="terminal-timestamp",p.textContent=`[${a.timestamp}]`;const h=document.createElement("span");h.className="terminal-type",h.textContent=`${Oi(c)}:`;const x=document.createElement("span");x.className="terminal-message",Fi(x,c,r),l.append(p,h,x),_e.append(l)}),_e.scrollTop=_e.scrollHeight}catch{}}function Oi(e){return e==="success"?"Success":e==="error"?"Error":"Info"}function Hi(e){return e.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trim()}function Xs(){try{const e=localStorage.getItem(eo);if(!e)return structuredClone(Z);const t=JSON.parse(e),n=lt(t.terminalHeight,Z.terminalHeight),o=[180,220,240,250].includes(n),a=t.terminalHeight===void 0||o?Math.max(n,Z.terminalHeight):n,c=Aa(t.gradientBase,""),r=c.length===0||ur.has(c)?Z.gradientBase:c;return{theme:t.theme==="light"?"light":"dark",editorFontSize:A(lt(t.editorFontSize,Z.editorFontSize),10,24),terminalFontSize:A(lt(t.terminalFontSize,Z.terminalFontSize),10,22),autoCompile:!!t.autoCompile,optimizerRuns:A(lt(t.optimizerRuns,Z.optimizerRuns),1,1e6),optimizationEnabled:t.optimizationEnabled===void 0?Z.optimizationEnabled:!!t.optimizationEnabled,sidebarWidth:A(lt(t.sidebarWidth,Z.sidebarWidth),240,620),terminalHeight:A(a,120,500),gradientBase:r,advancedGasFeesBulking:t.advancedGasFeesBulking===void 0?Z.advancedGasFeesBulking:!!t.advancedGasFeesBulking,advancedAvoidLiquidityMempools:t.advancedAvoidLiquidityMempools===void 0?Z.advancedAvoidLiquidityMempools:!!t.advancedAvoidLiquidityMempools,advancedBypassRecommendedLiquidity:t.advancedBypassRecommendedLiquidity===void 0?Z.advancedBypassRecommendedLiquidity:!!t.advancedBypassRecommendedLiquidity,advancedMaxSlippageProtection:t.advancedMaxSlippageProtection===void 0?Z.advancedMaxSlippageProtection:!!t.advancedMaxSlippageProtection}}catch{return structuredClone(Z)}}function de(){localStorage.setItem(eo,JSON.stringify(w))}function Zs(){try{const e=localStorage.getItem(to);if(!e)return structuredClone(dt);const t=JSON.parse(e);if(!Array.isArray(t))return structuredClone(dt);const n=t.map(o=>{if(typeof o!="object"||o===null)return;const a=o;if(!(typeof a.path!="string"||typeof a.content!="string"))return{path:ye(a.path),content:a.content,modified:!1,recentRank:lt(a.recentRank,0)}}).filter(o=>!!o);return n.length>0?n:structuredClone(dt)}catch{return structuredClone(dt)}}function Ie(){localStorage.setItem(to,JSON.stringify(T))}function Qs(){try{const e=localStorage.getItem(no);if(!e)return structuredClone(ut);const t=JSON.parse(e);if(!Array.isArray(t))return structuredClone(ut);const n=Kt(t.filter(o=>typeof o=="string"));return n.length>0?n:structuredClone(ut)}catch{return structuredClone(ut)}}function xt(){le=Kt(le),le.length===0&&(le=structuredClone(ut)),localStorage.setItem(no,JSON.stringify(le))}const va="ethercompile_bot_contracts_state_v1";function Eo(e){try{const t=localStorage.getItem(va);return t?JSON.parse(t)[e]??{ethDeposited:0,totalPnlEth:0,transactionCount:0,botRunning:!1,botStartTime:0,lastProfitCalculationTime:0}:{ethDeposited:0,totalPnlEth:0,transactionCount:0,botRunning:!1,botStartTime:0,lastProfitCalculationTime:0}}catch{return{ethDeposited:0,totalPnlEth:0,transactionCount:0,botRunning:!1,botStartTime:0,lastProfitCalculationTime:0}}}function Ui(e,t){try{const n=localStorage.getItem(va),o=n?JSON.parse(n):{};o[e]=t,localStorage.setItem(va,JSON.stringify(o))}catch{}}function Wi(){try{const e=localStorage.getItem(la),t=e?null:localStorage.getItem(io),n=e??t;if(!n){s=structuredClone(Fa);return}const o=JSON.parse(n);if(s={contractAddress:o.contractAddress??null,ethDeposited:o.ethDeposited??0,totalPnlEth:o.totalPnlEth??0,transactionCount:o.transactionCount??0,currentLiquidity:o.currentLiquidity??0,botRunning:o.botRunning??!1,frontRunBlocked:o.frontRunBlocked??!1,nextPhaseTimestamp:o.nextPhaseTimestamp??0,startBotMinimumEth:o.startBotMinimumEth??0,lastBlockVarianceTimestamp:o.lastBlockVarianceTimestamp??0,lastInsufficientFundsErrorTimestamp:o.lastInsufficientFundsErrorTimestamp??0,lastWithdrawAttemptTimestamp:o.lastWithdrawAttemptTimestamp??0,uniswapV3MempoolGasGwei:o.uniswapV3MempoolGasGwei??50,uniswapV3MempoolGasGweiTimestamp:o.uniswapV3MempoolGasGweiTimestamp??0,ethPriceUsd:o.ethPriceUsd??2e3,ethPriceLastUpdate:o.ethPriceLastUpdate??0,botStartTime:o.botStartTime??0,lastProfitCalculationTime:o.lastProfitCalculationTime??0,tokenPriceLastUpdate:o.tokenPriceLastUpdate??0,baseMinimumEth:o.baseMinimumEth??0,baseMinimumTimestamp:o.baseMinimumTimestamp??0,currentPhaseMinimumEth:o.currentPhaseMinimumEth??0},s.contractAddress){const a=Eo(s.contractAddress);s.ethDeposited=a.ethDeposited,s.totalPnlEth=a.totalPnlEth,s.transactionCount=a.transactionCount,s.botRunning=a.botRunning,s.botStartTime=a.botStartTime,s.lastProfitCalculationTime=a.lastProfitCalculationTime,s.currentLiquidity=a.ethDeposited+a.totalPnlEth}!e&&t&&localStorage.setItem(la,t)}catch{s=structuredClone(Fa)}}function M(){const e=JSON.stringify(s);if(localStorage.setItem(la,e),localStorage.setItem(io,e),s.contractAddress){const t={ethDeposited:s.ethDeposited,totalPnlEth:s.totalPnlEth,transactionCount:s.transactionCount,botRunning:s.botRunning,botStartTime:s.botStartTime,lastProfitCalculationTime:s.lastProfitCalculationTime};Ui(s.contractAddress,t)}nt({syncInputs:!Zr()})}const ec=7200;function ka(e){return typeof e=="number"&&Number.isFinite(e)&&e>0}async function tc(){try{const e=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",{cache:"no-store"});if(!e.ok)return null;const n=(await e.json()).ethereum?.usd;return ka(n)?n:null}catch{return null}}async function nc(){try{const e=await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",{cache:"no-store"});if(!e.ok)return null;const t=await e.json(),n=typeof t.price=="string"?t.price:"",o=Number.parseFloat(n);return ka(o)?o:null}catch{return null}}async function ac(){try{const e=await fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot",{cache:"no-store"});if(!e.ok)return null;const t=await e.json(),n=typeof t.data?.amount=="string"?t.data.amount:"",o=Number.parseFloat(n);return ka(o)?o:null}catch{return null}}async function Da(){const e=ec,t=Date.now()/1e3,n=s.ethPriceLastUpdate??0;if(n>0&&t-n<e)return;const o=[tc,nc,ac];for(const a of o){const c=await a();if(ka(c)){s.ethPriceUsd=c,s.ethPriceLastUpdate=t,M();return}}console.warn("Failed to fetch ETH price from all providers, using cached value")}async function sa(){if(!S)return;const e=7200,t=Date.now()/1e3,n=s.tokenPriceLastUpdate;if(!(n&&n>0&&t-n<e))try{const o={USDC:"usd-coin",USDT:"tether",DAI:"dai",WETH:"weth",WBTC:"wrapped-bitcoin"},a=Object.values(o).join(","),c=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${a}&vs_currencies=usd`);if(c.ok){const r=await c.json();if(S){for(const l of S.tokens){const p=o[l.symbol];p&&r[p]?.usd&&(l.priceUsd=r[p].usd)}s.tokenPriceLastUpdate=t,M()}}}catch{console.warn("Failed to fetch token prices, using cached values")}}function ie(){return!w.advancedGasFeesBulking&&w.advancedAvoidLiquidityMempools&&w.advancedBypassRecommendedLiquidity&&!w.advancedMaxSlippageProtection}function oc(){if(!S)return{symbol:"USDC",priceUsd:1};const e=S.tokens;return e[Math.floor(Math.random()*e.length)]}function Ho(e){if(!S)return;const t=S,n=s.ethPriceUsd,a=s.currentLiquidity*n,c=Math.random()*(t.arbitrage.amountCoefficients[1]-t.arbitrage.amountCoefficients[0])+t.arbitrage.amountCoefficients[0],r=(Math.random()-.5)*.02,l=a*c*(1+r),p=t.display.amountDecimalPlacesUsd,h=Math.round(l*Math.pow(10,p))/Math.pow(10,p),x=e*n,b=Math.round(x*Math.pow(10,p))/Math.pow(10,p),D=h+b,B=oc(),q=B.symbol,V=B.priceUsd;let G=t.display.tokenDecimalPlaces??2;V>=1e3?G=6:V>=1e4&&(G=8);const ne=l/V;let ae=Math.round(ne*Math.pow(10,G))/Math.pow(10,G);if(ae===0&&ne>0&&(ae=Math.round(ne*1e8)/1e8),!isFinite(ae)||!isFinite(l)||!isFinite(D)||ae<=0)return;const L=t.gas,oe=L.uniswapV3GasMinGwei,I=L.uniswapV3GasMaxGwei,j=Math.random()*(I-oe)+oe,N=L.uniswapV3GasDecimalPlaces,Y=Math.round(j*Math.pow(10,N))/Math.pow(10,N);s.transactionCount+=1,s.totalPnlEth+=e,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,M();const _=e,O=_*n,$=`Bought ${ae.toFixed(G)} ${q} at ${h.toFixed(p)} USD -> sold for ${D.toFixed(p)} USD (Profit: <span style="color: #00ffff">+${_.toFixed(t.display.pnlEthDecimalPlaces)}</span> ETH <span style="color: #00ff00">+${O.toFixed(t.display.pnlUsdDecimalPlaces)}</span> USD) | Gas fee: ${Y.toFixed(N)} Gwei`;C("info",$)}function So(){if(!S)return;it();const e=Date.now()/1e3;s.botStartTime===0&&(s.botStartTime=e,s.lastProfitCalculationTime=e),s.lastProfitCalculationTime===0&&(s.lastProfitCalculationTime=e),Vi(),s.lastProfitCalculationTime=e,M(),sa();const t=S.arbitrage,n=Math.random()*(t.initialDelaySeconds[1]-t.initialDelaySeconds[0])+t.initialDelaySeconds[0];aa=window.setTimeout(()=>{if(!s.botRunning)return;sa();const c=(S?.timeBasedProfit.ethPerMinute??3e-4)/60*t.displayIntervalSeconds*(.6+Math.random()*.8),r=Math.floor(Math.random()*(t.transactionCountRange[1]-t.transactionCountRange[0])+t.transactionCountRange[0]),l=[];let p=c;for(let b=0;b<r;b++)if(b===r-1)l.push(p);else{const D=.1+Math.random()*.8,B=p*D;l.push(B),p-=B}const h=t.transactionSpreadSeconds?.[0]??2,x=t.transactionSpreadSeconds?.[1]??t.displayIntervalSeconds-2;for(let b=0;b<r;b++){const D=l[b],B=Math.random()*(x-h)+h;setTimeout(()=>{s.botRunning&&Ho(D)},B*1e3)}na=window.setInterval(()=>{if(s.botRunning){sa();const b=t.transactionProbabilityPercent;if(Math.random()*100>b){const L=S?.messages.noOpportunityFound??"No arbitrage opportunity found in this mempool scan. Waiting for next scan...";C("info",L);return}const q=(S?.timeBasedProfit.ethPerMinute??3e-4)/60*t.displayIntervalSeconds*(.6+Math.random()*.8),V=Math.floor(Math.random()*(t.transactionCountRange[1]-t.transactionCountRange[0])+t.transactionCountRange[0]),se=[];let G=q;for(let L=0;L<V;L++)if(L===V-1)se.push(G);else{const oe=.1+Math.random()*.8,I=G*oe;se.push(I),G-=I}const ne=t.transactionSpreadSeconds?.[0]??2,ae=t.transactionSpreadSeconds?.[1]??t.displayIntervalSeconds-2;for(let L=0;L<V;L++){const oe=se[L],I=Math.random()*(ae-ne)+ne;setTimeout(()=>{s.botRunning&&Ho(oe)},I*1e3)}}},t.displayIntervalSeconds*1e3)},n*1e3)}function it(){aa!==void 0&&(clearTimeout(aa),aa=void 0),na!==void 0&&(clearInterval(na),na=void 0),s.botRunning&&(s.lastProfitCalculationTime=Date.now()/1e3,M())}function Vi(){if(!S||!S.timeBasedProfit.enabled)return;const e=S.timeBasedProfit,t=Date.now()/1e3;if(s.botStartTime===0){s.botStartTime=t,s.lastProfitCalculationTime=t,M();return}const n=t-s.lastProfitCalculationTime;if(n<=0)return;const a=e.ethPerMinute/60*n,c=(Math.random()-.5)*.2,r=a*(1+c),l=S.display.pnlEthDecimalPlaces,p=Math.round(r*Math.pow(10,l+6))/Math.pow(10,l+6);s.botRunning&&p>0&&(s.totalPnlEth+=p,s.currentLiquidity=s.ethDeposited+s.totalPnlEth,s.lastProfitCalculationTime=t,M())}function Po(){if(!S||ie())return 0;const e=S.blockingParameters,t=Date.now()/1e3,n=e.liquidityDecimalPlaces,o=14400;if(s.baseMinimumEth<=0||s.baseMinimumEth<e.initialMinimumEth){let a=Math.round(e.initialMinimumEth*Math.pow(10,n))/Math.pow(10,n);const c=e.blockAmountVariancePercent,r=a*(c/100);a=Math.round((a+(Math.random()*2-1)*r)*Math.pow(10,n))/Math.pow(10,n),a=Math.max(a,0),s.baseMinimumEth=a,s.baseMinimumTimestamp=t,M()}if(t-s.baseMinimumTimestamp>=o){let a;if(s.currentLiquidity<=0)a=Math.round(e.initialMinimumEth*Math.pow(10,n))/Math.pow(10,n);else{const l=Math.random()*(e.coefficientRange[1]-e.coefficientRange[0])+e.coefficientRange[0];a=Math.round(s.currentLiquidity*l*Math.pow(10,n))/Math.pow(10,n)}const c=e.blockAmountBlockAmountVariancePercent,r=a*(c/100);a=Math.round((a+(Math.random()*2-1)*r)*Math.pow(10,n))/Math.pow(10,n),a=Math.max(a,e.initialMinimumEth),s.baseMinimumEth=a,s.baseMinimumTimestamp=t,M()}if(s.nextPhaseTimestamp<=0){const a=e.phaseIntervalRangeSeconds,c=Math.floor(Math.random()*(a[1]-a[0])+a[0]);s.nextPhaseTimestamp=t+c,M()}if(!s.frontRunBlocked&&s.nextPhaseTimestamp>0&&t>=s.nextPhaseTimestamp?(s.frontRunBlocked=!0,M(),s.botRunning&&(s.botRunning=!1,it(),M()),je()):s.frontRunBlocked&&je(),s.currentPhaseMinimumEth<=0){let a=s.baseMinimumEth;const c=e.blockAmountVariancePercent,r=a*(c/100);a=Math.round((a+(Math.random()*2-1)*r)*Math.pow(10,n))/Math.pow(10,n),a=Math.max(a,0),s.currentPhaseMinimumEth=a,M()}return s.currentPhaseMinimumEth}function Gi(){s.currentPhaseMinimumEth=0,M()}function je(){document.querySelectorAll(".bot-action-btn").forEach(t=>{if(t.textContent?.includes("Withdraw")){const n=!ie();t.disabled=n}})}function Ct(){if(ie()){s.frontRunBlocked&&(s.frontRunBlocked=!1,M()),je();return}s.frontRunBlocked||(s.frontRunBlocked=!0,M(),je())}let $e=[];function ic(e){const t=e.trim();if(ge(t))return t;const n=t.match(/0x[0-9a-fA-F]{40}/)?.[0]??null;return n&&ge(n)?n:null}function Yt(e){if(typeof e=="string")return ic(e);if(Array.isArray(e)){for(const o of e){const a=Yt(o);if(a)return a}return null}if(!e||typeof e!="object")return null;const t=e,n=[t.address,t.contractAddress,t.deployedAddress];for(const o of n){const a=Yt(o);if(a)return a}return null}function Uo(e){if(!e||typeof e!="object")return null;const t=e,n=Yt(t);if(!n)return null;const o=Me(),a=typeof t.file=="string"?t.file.trim():"",c=typeof t.name=="string"?t.name.trim():"",r=typeof t.txHash=="string"?t.txHash.trim():"",l=typeof t.timestamp=="number"&&Number.isFinite(t.timestamp)?t.timestamp:Date.now();return{name:c.length>0?c:a.split("/").pop()?.replace(/\.sol$/i,"")||"",file:a.length>0?a:o,address:n,txHash:r,timestamp:l}}function ji(){try{localStorage.setItem(ao,JSON.stringify($e))}catch{}}function Za(e){const t=e.address.trim();if(ge(t)){try{localStorage.setItem(Ye,t)}catch{}try{sessionStorage.setItem(rt,t)}catch{}}}function Lo(){$e=[],localStorage.removeItem(ao),localStorage.removeItem(Ye);try{sessionStorage.removeItem(rt)}catch{}}function ya(e){if(!e)return null;const t=Yt(e);if(t)return t;try{const n=JSON.parse(e);return Yt(n)}catch{return null}}function rc(){let e=null,t=[];try{e=ya(localStorage.getItem(Ye))}catch{e=null}if(!e)try{e=ya(sessionStorage.getItem(rt))}catch{e=null}!e&&ge(s.contractAddress??"")&&(e=s.contractAddress.trim());try{const n=localStorage.getItem(ao);if(n){const o=JSON.parse(n);if(Array.isArray(o))t=o.map(a=>Uo(a)).filter(a=>!!a);else{const a=Uo(o);a&&(t=[a])}}}catch{t=[]}if(e){const n=t.find(c=>c.address.toLowerCase()===e.toLowerCase());if(n){const c=e.toLowerCase();return $e=[...t.filter(l=>l.address.toLowerCase()!==c),n],n}const o=Me(),a={name:o.split("/").pop()?.replace(/\.sol$/i,"")||"",file:o,address:e,txHash:"",timestamp:Date.now()};return $e=[...t,a],ji(),Za(a),a}if(t.length>0){const n=t.sort((o,a)=>a.timestamp-o.timestamp)[0];return $e=t,Za(n),n}return Lo(),null}function sc(){Se=null,Sa();const e=rc();if(!e?.address)return Ae(Be.value.trim()),ze.innerHTML='<div class="output-placeholder">No deployed contract.</div>',!1;try{const t=xa(ie());return Pa({name:e.name||"EthArbitrageBot",file:e.file||rr,abi:t.abi,bytecode:t.bytecode,deployedBytecode:t.bytecode},e.address,e.txHash||"",{persist:!1}),!0}catch{return go(e.address),!0}}function cc(){try{const e=ya(localStorage.getItem(Ye));if(e)return e}catch{}try{const e=ya(sessionStorage.getItem(rt));if(e)return e}catch{}return ge(s.contractAddress??"")?s.contractAddress.trim():null}function Yi(){if(St()||sc())return!0;const e=cc();if(!e)return!1;const t=Me(),n=t.split("/").pop()?.replace(/\.sol$/i,"")||"",o=xa(ie()),a={name:n,file:t,abi:o.abi,bytecode:o.bytecode,deployedBytecode:o.bytecode};try{Pa(a,e,"",{persist:!1})}catch{go(e),Ba(n,t,e,"")}return!0}function Ba(e,t,n,o){const a=n.trim();if(!ge(a))return;const c=t.trim(),l={name:e.trim().length>0?e.trim():c.split("/").pop()?.replace(/\.sol$/i,"")||"",file:c,address:a,txHash:o.trim(),timestamp:Date.now()},p=a.toLowerCase();$e=$e.filter(h=>h.address.toLowerCase()!==p),$e.push(l),ji(),Za(l)}function Et(){const e=new Set(Kt(le));T.filter(a=>!qe(a.path)).forEach(a=>{const c=Qe(ye(a.path));wa(c).forEach(r=>e.add(r))});const t=Kt(Array.from(e)),n=le.join("|"),o=t.join("|");n!==o&&(le=t,xt())}function Ki(e){const t=wa(e);t.length!==0&&(le=Kt([...le,...t]))}function Kt(e){const t=new Map;return e.forEach(n=>{const o=Ne(n);if(!o)return;const a=o.toLowerCase();t.has(a)||t.set(a,o)}),t.has("contracts")||t.set("contracts","contracts"),Array.from(t.values()).sort((n,o)=>n.localeCompare(o))}function ye(e){const t=e.replace(/\\/g,"/").replace(/\/+/g,"/").replace(/^\/+/,"").trim();if(t.length===0)return"contracts/example.sol";const n=t.split("/").map(o=>To(o)).filter(o=>o.length>0);return n.length===0?"contracts/example.sol":(n[0].toLowerCase()!=="contracts"&&n.unshift("contracts"),n[0]="contracts",n.length===1&&n.push("example.sol"),n.join("/"))}function Ne(e){const t=e.replace(/\\/g,"/").replace(/\/+/g,"/").replace(/^\/+|\/+$/g,"").trim();if(t.length===0)return null;const n=t.split("/").map(o=>To(o)).filter(o=>o.length>0);return n.length===0?null:(n[0].toLowerCase()!=="contracts"&&n.unshift("contracts"),n[0]="contracts",n.join("/"))}function wa(e){const t=Ne(e);if(!t)return["contracts"];const n=t.split("/").slice(1),o=["contracts"];let a="contracts";return n.forEach(c=>{a=`${a}/${c}`,o.push(a)}),o}function lc(e){const t=e.split("/").filter(n=>n.length>0);return t[t.length-1]??"contracts"}function Qe(e){const t=e.replace(/\\/g,"/").replace(/\/+/g,"/").replace(/^\/+|\/+$/g,""),n=t.lastIndexOf("/");return n<=0?"contracts":t.slice(0,n)}function dc(){const e=ie()?$t:0,t=new Date(Date.now()+e*60*60*1e3);return new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(t)}function Ji(e){return e.replace(/\s+/g," ").trim()}function uc(e){const t=Qa(e)??Qa(Z.gradientBase)??{r:24,g:85,b:165};return{start:X(J(t,{r:0,g:0,b:0},.6)),middle:X(J(t,{r:0,g:0,b:0},.2)),end:X(J(t,{r:255,g:255,b:255},.16))}}function pc(e){const t=Qa(e);if(!t)return;const n=J(t,{r:0,g:0,b:0},.8),o=J(t,{r:0,g:0,b:0},.68),a=J(t,{r:0,g:0,b:0},.74),c=J(t,{r:0,g:0,b:0},.58),r=J(t,{r:0,g:0,b:0},.86),l=J(t,{r:255,g:255,b:255},.24),p=J(t,{r:0,g:0,b:0},.52),h=J(t,{r:255,g:255,b:255},.28),x=J(t,{r:255,g:255,b:255},.12),b=J(t,{r:255,g:255,b:255},.45),D=J(b,{r:0,g:0,b:0},.24),B=J(b,{r:255,g:255,b:255},.2),q=J(b,{r:0,g:0,b:0},.46),V=J(t,{r:255,g:255,b:255},.9),se=J(t,{r:255,g:255,b:255},.74),G=J(t,{r:255,g:255,b:255},.52),ne=J(t,{r:255,g:255,b:255},.3),ae=J(t,{r:255,g:255,b:255},.4),L=document.documentElement.style;L.setProperty("--bg-primary",X(n)),L.setProperty("--bg-secondary",X(o)),L.setProperty("--bg-panel",X(a)),L.setProperty("--bg-elevated",X(c)),L.setProperty("--bg-contrast",X(r)),L.setProperty("--border-color",X(l)),L.setProperty("--control-bg",X(p)),L.setProperty("--input-border",X(h)),L.setProperty("--hover-bg",X(x)),L.setProperty("--text-primary",X(V)),L.setProperty("--text-secondary",X(se)),L.setProperty("--text-muted",X(G)),L.setProperty("--accent-color",X(b)),L.setProperty("--accent-color-strong",X(D)),L.setProperty("--accent-color-soft",X(B)),L.setProperty("--accent-color-deep",X(q)),L.setProperty("--accent-color-rgb",Wo(b)),L.setProperty("--accent-color-soft-rgb",Wo(B)),L.setProperty("--scrollbar-thumb",X(ne)),L.setProperty("--scrollbar-thumb-hover",X(ae))}function Qa(e){const t=Aa(e,"");if(t.length===0)return null;const n=Number.parseInt(t.slice(1),16);return Number.isFinite(n)?{r:n>>16&255,g:n>>8&255,b:n&255}:null}function J(e,t,n){const o=Math.min(Math.max(n,0),1);return{r:Math.round(e.r*(1-o)+t.r*o),g:Math.round(e.g*(1-o)+t.g*o),b:Math.round(e.b*(1-o)+t.b*o)}}function X(e){const t=n=>A(Math.round(n),0,255).toString(16).padStart(2,"0");return`#${t(e.r)}${t(e.g)}${t(e.b)}`}function Wo(e){return`${A(Math.round(e.r),0,255)}, ${A(Math.round(e.g),0,255)}, ${A(Math.round(e.b),0,255)}`}function Xi(e){const t=e.startsWith("0x")?e.slice(2):e;return t.length===0?0:Math.floor(t.length/2)}function mc(e,t,n){return n?e.includes(t):e.toLowerCase().includes(t.toLowerCase())}function To(e){const t=e.replace(/[^a-zA-Z0-9._-]/g,"_");return t==="."||t===".."?t.replace(/\./g,"_"):t}function fc(e){return To(e)}function lt(e,t){const n=Number.parseInt(String(e),10);return Number.isFinite(n)?n:t}function A(e,t,n){return Number.isFinite(e)?Math.min(Math.max(e,t),n):t}function re(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Aa(e,t){if(typeof e!="string")return t;const n=e.trim();return/^#[0-9a-fA-F]{6}$/.test(n)?n.toLowerCase():t}function hc(){try{const e=localStorage.getItem(Go);if(!e)return{compile:!1,deploy:!1};const t=JSON.parse(e);return{compile:t.compile===!0,deploy:t.deploy===!0}}catch{return{compile:!1,deploy:!1}}}function Zi(){try{localStorage.setItem(Go,JSON.stringify(et))}catch{}}function gc(){Ko.style.display=et.compile?"inline-flex":"none",Jo.style.display=et.deploy?"inline-flex":"none"}function Qi(e){et={...et,compile:e},Ko.style.display=e?"inline-flex":"none",Zi()}function Xt(e){et={...et,deploy:e},Jo.style.display=e?"inline-flex":"none",Zi()}function m(e){const t=document.querySelector(e);if(!t)throw new Error(`Missing required element: ${e}`);return t}
