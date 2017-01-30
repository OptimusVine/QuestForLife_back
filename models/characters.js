var sLoc = __filename.substring(process.cwd().length,__filename.length);
console.log("Calling : " + sLoc)

var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    player: {type: Boolean},
	id: {type: String},
	name: {
		full: {type: String, unique: true, required: true }
	},
	}) 

mongoose.model('Character', CharacterSchema); 