'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/login4chinese', {
      template: '<login-4-chinese></login-4-chinese>'
    });
}
