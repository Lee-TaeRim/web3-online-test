const dotenv = require('dotenv');

const envFound = dotenv.config();
if (envFound.error) {
    //.env 파일 에러 확인
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
    mainnet: process.env.MAINNET,
    testnet: process.env.TESTNET,

    saraAddress: process.env.SARA_BEP20_ADDRESS,
    walletAddress: process.env.MULTISIG_WALLET_ADDRESS,

    saraAbi: process.env.SARA_BEP20_ABI,
    walletAbi: process.env.MULTISIG_WALLET_ABI,

    // 테스트용
    testPub01: process.env.TEST_PUB_01,
    testPri01: process.env.TEST_PRI_01,
    testPub02: process.env.TEST_PUB_02,
    testPri02: process.env.TEST_PRI_01,
};

module.exports = config;
