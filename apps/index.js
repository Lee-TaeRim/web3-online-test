'use strict';

const express = require('express');
const sara = require("./sara");

const router = express.Router();

router.get("/", sara.home);

module.exports = router;
