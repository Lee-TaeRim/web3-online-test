'use strict';

const expressLoader = require('./express');

module.exports = (async function(expressApp) {
    await expressLoader(expressApp);
    console.log('✌️ Express loaded');
});
