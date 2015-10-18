var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	type: String,
	name: String
});

mongoose.model('Animal', animalSchema);