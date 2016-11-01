'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './detailm4chinese.routes';

export class Detailm4chineseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('3dpsApp.detailm4chinese', [ngRoute])
  .config(routes)
  .component('detailm4chinese', {
    template: require('./detailm4chinese.html'),
    controller: Detailm4chineseComponent,
    controllerAs: 'detailm4chineseCtrl'
  })
  .name;
