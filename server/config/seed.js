/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Crypto from '../api/crypto/crypto.model';

Crypto.find({}).remove()
.then(() => {
    Crypto.create({
    	value: 'default',
    });
});

