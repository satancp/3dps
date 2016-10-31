'use strict';

import mongoose from 'mongoose';

var CryptoSchema = new mongoose.Schema({
  value: String
});

export default mongoose.model('Crypto', CryptoSchema);
