'use strict';
const angular = require('angular');

/*@ngInject*/
export function PropertyServiceService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('3dpsApp.PropertyService', [])
  .service('PropertyService', PropertyServiceService)
  .name;
