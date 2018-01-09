var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema ({ //SPRINT 3 STEP 1.B
	name: String,
	track: Number
});


module.exports = SongSchema; //SPRINT 3 STEP 1.C