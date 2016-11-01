'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/detailm4chinese', {
      template: '<detailm-4-chinese></detailm-4-chinese>'
    });
}
