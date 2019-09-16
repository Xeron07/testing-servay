const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	userId: String,
	name: String,
	img: String,
	gallery: Object
});

mongoose.model('users', userSchema);
