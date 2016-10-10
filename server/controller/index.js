const api = require('marvel-api')
const request = require('request')
const marvel = api.createClient({
  publicKey: 'a4b5612aaebc501bd35e6afc29162907', 
  privateKey: '80e8c98ccec66190cceed324fb1af6e308886dd6'
});

const selectCharacter = function(req,res){
	marvel.characters.findByName('spider-man')
	.then(function(data){
		res.send(data)
	})
	.fail(console.error)
	.done();
}

module.exports = {
	selectCharacter: selectCharacter
}