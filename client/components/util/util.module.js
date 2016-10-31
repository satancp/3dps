'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('3dpsApp.util', [])
  .factory('Util', UtilService)
  .name;
