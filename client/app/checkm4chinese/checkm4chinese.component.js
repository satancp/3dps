'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './checkm4chinese.routes';

export class Checkm4chineseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('3dpsApp.checkm4chinese', [ngRoute])
  .config(routes)
  .component('checkm4chinese', {
    template: require('./checkm4chinese.html'),
    controller: Checkm4chineseComponent,
    controllerAs: 'checkm4chineseCtrl'
  })
  .name;
