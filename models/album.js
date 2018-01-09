// Require mongoose to be used
var mongoose = require("mongoose");
// Setting up our Schema variable
var Schema = mongoose.Schema; 

var song = require('./song'); //SPRINT 3 STEP 1.D

var AlbumSchema = new Schema ({ //SPRINT 1 STEP 3.A
	artistName: String,
	name: String,
	releaseDate: String,	
	genres: [ String ],
	songs: [ song ] //SPRINT 3 STEP 1.E
});

var Album = mongoose.model('Album', AlbumSchema); //SPRINT 1 STEP 3.C

module.exports = Album; 
