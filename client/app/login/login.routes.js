'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/login', {
      template: '<login></login>'
    });
}
