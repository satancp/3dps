'use strict';

import mongoose from 'mongoose';

var ImageSchema = new mongoose.Schema({
	image_path: String
});

var StateSchema = new mongoose.Schema({
	ifvalid: Boolean,
	order_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	order_date: Date
});

var PropertySchema = new mongoose.Schema({
	address: String,
	city: String,
	zip: String,
	description4text: String,
	description4image: [ImageSchema],
	vacancy_type: String,
	vacancy_num: Number,
	pay_type: String,
	pay_num: Number,
	start_date: Date,
	end_date: Date,
	period: Number,
	state: String,
	state_details: [StateSchema]
});

export default mongoose.model('Property', PropertySchema);
