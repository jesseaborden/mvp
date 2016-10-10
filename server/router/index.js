const express = require('express');
const router = express.Router();
const selectCharacter = require('../controller').selectCharacter;

router.use('/', selectCharacter);

module.exports = {
	marvelRouter: router
}