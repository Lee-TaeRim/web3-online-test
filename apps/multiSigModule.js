'use strict';

const config = require('../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.testnet));

//const saraAbi = require(config.saraAbi);
//const saraAddress = config.saraAddress;
const walletAbi = require(config.walletAbi);
const walletAddress = config.walletAddress;

//const sara = new web3.eth.Contract(saraAbi, saraAddress);
const wallet = new web3.eth.Contract(walletAbi, walletAddress);

class MultiSigModule {
    //////////////////////////////////// Query ////////////////////////////////////

    async isConfirmed(transactionId) {
        return new Promise((resolve) => {
            const owner = wallet.methods.isConfirmed(transactionId).call();
            resolve(owner);
        });
    }

    async getConfirmationCount(transactionId) {
        return new Promise((resolve) => {
            const owner = wallet.methods.getConfirmationCount(transactionId).call();
            resolve(owner);
        });
    }

    async getTransactionCount(pending, executed) {
        return new Promise((resolve) => {
            const owner = wallet.methods.getTransactionCount(pending, executed).call();
            resolve(owner);
        });
    }

    async getOwners() {
        return new Promise((resolve) => {
            const owner = wallet.methods.getOwners().call();
            resolve(owner);
        });
    }

    async getConfirmations(transactionId) {
        return new Promise((resolve) => {
            const owner = wallet.methods.getConfirmations(transactionId).call();
            resolve(owner);
        });
    }

    async getTransactionIds(from, to, pending, executed){
        return new Promise((resolve) => {
            const owner = wallet.methods.getTransactionIds(from, to, pending, executed).call();
            resolve(owner);
        });
    }

    //////////////////////////////////// Query ////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////

    ////////////////////////////// Get Data Payload ///////////////////////////////

    async submitTransactionEncode(destination, value, data) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.submitTransaction(destination, value, data).encodeABI();
            resolve(dataPayload);
        });
    }

    async confirmTransactionEncode(transactionId) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.confirmTransaction(transactionId).encodeABI();
            resolve(dataPayload);
        });
    }

    async revokeConfirmationEncode(transactionId) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.revokeConfirmation(transactionId).encodeABI();
            resolve(dataPayload);
        });
    }

    // required 자동으로 execeute가 실행되기 때문에 사용하지 않음
    async executeTransactionEncode(transactionId) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.executeTransaction(transactionId).encodeABI();
            resolve(dataPayload);
        });
    }

    // 여기서부터는 onlyWallet modifier가 적용되어 submitTransaction 의 Data로 넣어주어야 함
    async addOwnerEncode(owner) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.addOwner(owner).encodeABI();
            resolve(dataPayload);
        });
    }
    async removeOwnerEncode(owner) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.removeOwner(owner).encodeABI();
            resolve(dataPayload);
        });
    }

    async replaceOwnerEncode(owner, newOwner) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.replaceOwner(owner, newOwner).encodeABI();
            resolve(dataPayload);
        });
    }

    async changeRequirementEncode(required) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.changeRequirement(required).encodeABI();
            resolve(dataPayload)
        });
    }

    ////////////////////////////// Get Data Payload ///////////////////////////////
}

module.exports = MultiSigModule;
