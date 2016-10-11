const api = require('marvel-api');
const request = require('request');
// const ratings = require('../model/ratings.js');
const marvel = api.createClient({
  publicKey: 'a4b5612aaebc501bd35e6afc29162907', 
  privateKey: '80e8c98ccec66190cceed324fb1af6e308886dd6'
});

const selectCharacter = function(req,res){
	let marvelName = req.query.name;
	marvel.characters.findNameStartsWith(marvelName)
	.then(function(data){
		res.send(data)
	})
	.fail(console.error)
	.done();
}

module.exports = {
	selectCharacter: selectCharacter
}