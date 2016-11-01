'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/checkm4chinese', {
      template: '<checkm-4-chinese></checkm-4-chinese>'
    });
}
