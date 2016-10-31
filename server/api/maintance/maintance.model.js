'use strict';

import mongoose from 'mongoose';

var StateSchema = new mongoose.Schema({
	ifvalid: Boolean,
	repairman_name: String,
	valid_time2arrive: Date,
	basic_pay: Number,
	extra_pay: Number,
	reason4extra: String,
	reward: Number,
	final_pay: Number
});

var ImageSchema = new mongoose.Schema({
	image_path: String
});

var MaintanceSchema = new mongoose.Schema({
	address: String,
	location: String,
	item: String,
	description4text: String,
	description4image: [ImageSchema],
	description4video: String,
	state: String,
	state_details: [StateSchema],
	publish_date: Date,
	publish_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

export default mongoose.model('Maintance', MaintanceSchema);
