'use strict';

const config = require('../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.testnet));

class TransactionModule {
    async getNonce(account) {
        return new Promise((resolve) => {
            const nonce = web3.eth.getTransactionCount(account);
            resolve(nonce);
        });
    }
    
    async send(signedTransaction) {
        return new Promise((resolve) => {
            web3.eth.sendSignedTransaction(signedTransaction)
            .then(resolve);
        });
    }
}

module.exports = TransactionModule;
