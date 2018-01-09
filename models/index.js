var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Album = require('./album'); //SPRINT 1 STEP 3.D
module.exports.Song = require('./song');
