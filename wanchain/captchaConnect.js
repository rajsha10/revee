// Example using Web3.js to interact with the Wanchain smart contract
const Web3 = require('web3');
const web3 = new Web3('https://wanchain-node-url');
const contractABI = [/* ABI from compiled smart contract */];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const captchaContract = new web3.eth.Contract(contractABI, contractAddress);

async function createCaptcha(question, answerHash, userAddress) {
    await captchaContract.methods.createCaptcha(question, answerHash).send({ from: userAddress });
}

async function verifyCaptcha(answer, userAddress) {
    const result = await captchaContract.methods.verifyCaptcha(answer).call({ from: userAddress });
    return result;
}
