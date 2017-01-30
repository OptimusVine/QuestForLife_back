var sLoc = __filename.substring(process.cwd().length,__filename.length);
console.log("Calling : " + sLoc)

var characterController = require('./character')

module.exports = {
    characterController: characterController
}