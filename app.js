'user strict';

const express = require('express');
const http = require('http');

async function startServer() {
    const app = express();

    await require("./loaders")(app);
    http.createServer(app).listen(3000, err => {
        if (err) console.log(err);

        console.log(`
            ###########################################
            ##  HTTP Server listening on port: 3000  ##
            ###########################################
        `);
    });
}

startServer();
