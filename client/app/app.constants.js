'use strict';

import angular from 'angular';

export default angular.module('3dpsApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
