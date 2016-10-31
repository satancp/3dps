'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './faq4chinese.routes';

export class Faq4chineseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('3dpsApp.faq4chinese', [ngRoute])
  .config(routes)
  .component('faq4chinese', {
    template: require('./faq4chinese.html'),
    controller: Faq4chineseComponent,
    controllerAs: 'faq4chineseCtrl'
  })
  .name;
