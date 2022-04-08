'use strict';

const SaraModule = require('./saraModule');
const MultiSigModule = require('./multiSigModule');
const TransactionModule = require('./transactionModule');

const signedTransaction = require('../signedTransaction.json');

exports.home = (req, res) => {
    // 테스트용 코드

    /*
    const saraModule = new SaraModule();
    const multiSigModule = new MultiSigModule();
    const transactionModule = new TransactionModule();

    saraModule.transferEncode('0xAF2EEca8b7B4ec9ebC25967Dd0c55aBEDbCA7C11', 1000000).then(function(res){
        console.log(res);
    });

    transactionModule.getNonce('0xAF2EEca8b7B4ec9ebC25967Dd0c55aBEDbCA7C11').then(function(res){
        console.log(res);
    });
    
    multiSigModule.getOwners().then(function(res){
        console.log(res);
    });

    transactionModule.send(signedTransaction).then(function(res){
        console.log(res);
    });
    */

    res.render("sara");
}
