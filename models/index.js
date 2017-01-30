var sLoc = __filename.substring(process.cwd().length,__filename.length);
console.log("Calling : " + sLoc)

// This calls all of the models
// It is called from the main app.js page to load all of the models into Mongoose


 var character = require('./characters.js')
 // var monster = require('./monster.js')