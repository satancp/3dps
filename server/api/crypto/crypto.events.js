/**
 * Crypto model events
 */

'use strict';

import {EventEmitter} from 'events';
import Crypto from './crypto.model';
var CryptoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CryptoEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Crypto.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CryptoEvents.emit(event + ':' + doc._id, doc);
    CryptoEvents.emit(event, doc);
  };
}

export default CryptoEvents;
