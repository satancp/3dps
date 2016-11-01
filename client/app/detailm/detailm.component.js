'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import ipCookie from 'angular-cookie';

import routes from './detailm.routes';

export class DetailmComponent {
  /*@ngInject*/
  ipCookie;
  data;

  constructor(ipCookie) {
    this.ipCookie = ipCookie;
  }

  $onInit() {
    this.data = this.ipCookie("Current_m");
    this.image_path = "./assets/images/" + this.data.description4image[0].image_path;
  }
}

export default angular.module('3dpsApp.detailm', [ngRoute])
  .config(routes)
  .component('detailm', {
    template: require('./detailm.html'),
    controller: DetailmComponent,
    controllerAs: 'detailmCtrl'
  })
  .name;
