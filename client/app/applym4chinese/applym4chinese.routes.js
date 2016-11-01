'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/applym4chinese', {
      template: '<applym-4-chinese></applym-4-chinese>'
    });
}
