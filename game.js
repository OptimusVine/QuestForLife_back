var sLoc = __filename.substring(process.cwd().length,__filename.length);
console.log("Calling : " + sLoc)

console.log("* \n**\n*** \n****")
console.log("THE GAME IS STARTING \n*****")

var characterController = require('./controllers/character')

characterController.addRandomCharacter()

