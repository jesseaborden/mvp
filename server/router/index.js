const express = require('express');
const router = express.Router();
const selectCharacter = require('../controller').selectCharacter;
const selectSeries = require('../controller').selectSeries;
console.log('inside marvelRouter')

router.get('/charachter/person', selectCharacter);

router.get('/charachter/id', selectSeries);


module.exports = {
	marvelRouter: router
}