'use strict';

const config = require('../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.testnet));

const saraAbi = require(config.saraAbi);
const saraAddress = config.saraAddress;
//const walletAbi = require(config.walletAbi);
//const walletAddress = config.walletAddress;

const sara = new web3.eth.Contract(saraAbi, saraAddress);
//const wallet = new web3.eth.Contract(walletAbi, walletAddress);

class SaraModule {
    //////////////////////////////////// Query ////////////////////////////////////

    async getOwner() {
        return new Promise((resolve) => {
            const owner = sara.methods.getOwner().call();
            resolve(owner);
        });
    }

    async decimals() {
        return new Promise((resolve) => {
            const decimals = sara.methods.decimals().call();
            resolve(decimals);
        });
    }

    async symbol() {
        return new Promise((resolve) => {
            const symbol = sara.methods.symbol().call();
            resolve(symbol);
        });
    }

    async name() {
        return new Promise((resolve) => {
            const name = sara.methods.name().call();
            resolve(name);
        });
    }

    async totalSupply() {
        return new Promise((resolve) => {
            const totalSupply = sara.methods.totalSupply().call();
            resolve(totalSupply);
        });
    }

    async balanceOf(account) {
        return new Promise((resolve) => {
            const balanceOf = sara.methods.balanceOf(account).call();
            resolve(balanceOf);
        });
    }

    async allowance(owner, spender) {
        return new Promise((resolve) => {
            const allowance = sara.methods.allowance(owner, spender).call();
            resolve(allowance);
        });
    }

    //////////////////////////////////// Query ////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////

    ////////////////////////////// Get Data Payload ///////////////////////////////

    // 개인이 트랜잭션 요청할 때 사용
    async transferEncode(recipient, amount) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.transfer(recipient, amount).encodeABI();
            resolve(dataPayload);
        });
    }
    
    async approveEncode(spender, amount) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.approve(spender, amount).encodeABI();
            resolve(dataPayload);
        });
    }
    
    async transferFromEncode(sender, recipient, amount) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.transferFrom(sender, recipient, amount).encodeABI();
            resolve(dataPayload);
        });
    }
    
    async increaseAllowanceEncode(spender, addedValue) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.increaseAllowance(spender, addedValue).encodeABI();
            resolve(dataPayload);
        });
    }
    
    async decreaseAllowanceEncode(spender, subtractedValue) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.decreaseAllowance(spender, subtractedValue).encodeABI();
            resolve(dataPayload);
        });
    }
    
    async mintEncode(amount) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.mint(amount).encodeABI();
            resolve(dataPayload);
        });
    }
    
    async getAuthEncode(amount) {
        return new Promise((resolve) => {
            const dataPayload = sara.methods.getAuth(amount).encodeABI();
            resolve(dataPayload);
        });
    }

    ////////////////////////////// Get Data Payload ///////////////////////////////
}

module.exports = SaraModule;
