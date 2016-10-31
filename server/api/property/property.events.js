/**
 * Property model events
 */

'use strict';

import {EventEmitter} from 'events';
import Property from './property.model';
var PropertyEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PropertyEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Property.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PropertyEvents.emit(event + ':' + doc._id, doc);
    PropertyEvents.emit(event, doc);
  };
}

export default PropertyEvents;
