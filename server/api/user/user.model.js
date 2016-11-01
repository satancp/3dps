'use strict';

import mongoose from 'mongoose';

var MaintanceSchema = new mongoose.Schema({
  	content: {type: mongoose.Schema.Types.ObjectId, ref: 'Maintance'},
    added_date: { type: Date, required: true }
});

var PropertySchema = new mongoose.Schema({
    content: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'},
    added_date: { type: Date, required: true }
});

var UserSchema = new mongoose.Schema({
    username: String,
  	password: String,
  	ifadmin: Boolean,
  	email: String,
  	gender: String,
  	fullname: String,
  	address1: String,
  	address2: String,
  	city: String,
  	zip: String,
  	phone: String,
  	maintancelist: [MaintanceSchema],
    propertylist: [PropertySchema]
});

export default mongoose.model('User', UserSchema);
