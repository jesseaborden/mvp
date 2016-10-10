const express = require('express');
const router = express.Router();
const selectCharacter = require('../controller').selectCharacter;
console.log('inside marvelRouter')

router.get('/charachter', selectCharacter);

module.exports = {
	marvelRouter: router
}