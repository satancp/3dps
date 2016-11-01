'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import MaintanceService from '../MaintanceService/MaintanceService.service';
import ipCookie from 'angular-cookie';
import routes from './checkm.routes';

export class CheckmComponent {
  /*@ngInject*/
  MaintanceService;
  ipCookie;
  all_m;
  $uibModal;
  animationsEnabled = true;

  constructor(ipCookie, MaintanceService, $uibModal) {
    this.ipCookie = ipCookie;
    this.MaintanceService = MaintanceService;
    this.$uibModal = $uibModal;
  }

  checkdetails(data) {
    this.ipCookie("Current_m",data);
    var modalInstance = this.$uibModal.open({
      animation: this.animationsEnabled,
      component: 'detailm'
    });
  }

  cancel () {
    this.dismiss({$value: 'cancel'});
  };

  $onInit() {
    this.user = {
      id: this.ipCookie("Login")._id
    };
    this.MaintanceService.checkM(this.user).then(response => {
      this.all_m = response.data;
    });
  }

  generateDate(time) {
    var day_i = time.indexOf("T");
    var day_s = time.substring(0, day_i);
    var time_i = time.indexOf(".");
    var time_s = time.substring(day_i + 1, time_i);
    var real = day_s + " " + time_s;
    return real;
  }
}

export default angular.module('3dpsApp.checkm', [ngRoute])
  .config(routes)
  .component('checkm', {
    template: require('./checkm.html'),
    controller: CheckmComponent,
    controllerAs: 'checkmCtrl'
  })
  .name;
