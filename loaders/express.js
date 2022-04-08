'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');

module.exports = (async function(app) {
    app.set('view engine', 'ejs');
    app.set('views', ['./apps/views']);
    app.use('/scripts', express.static('public/scripts'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cookieParser());

    const wwwAppRouter = require('../apps');
    app.use('/', wwwAppRouter);
    app.use(compression());

});
