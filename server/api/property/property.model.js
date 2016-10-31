'use strict';

import mongoose from 'mongoose';

var PropertySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Property', PropertySchema);
