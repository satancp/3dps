'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/checkm', {
      template: '<checkm></checkm>'
    });
}
