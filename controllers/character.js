var sLoc = __filename.substring(process.cwd().length,__filename.length);
console.log("Calling : " + sLoc)

var fs = require('fs')

var mongoose = require('mongoose')
var Character = mongoose.model('Character')

var characters;

Character.find(function(err, results){
    characters = results
})

addCharacter = function(c){
    
}

addRandomCharacter = function(){
    console.log("Add Character")
    var c = {
        name: {
            full: "Ogre"
        },
        player: false
    }
    var newC = new Character(c)
    newC.save(function(err, char){
        if(char){
            console.log(char)
        } 
    })
}

module.exports = {
    characters: characters,
    addRandomCharacter: addRandomCharacter,
}

