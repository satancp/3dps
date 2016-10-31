'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/faq4chinese', {
      template: '<faq-4-chinese></faq-4-chinese>'
    });
}
