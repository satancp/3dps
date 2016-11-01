'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import MaintanceService from '../MaintanceService/MaintanceService.service';
import ipCookie from 'angular-cookie';

import routes from './applym.routes';

export class ApplymComponent {
  /*@ngInject*/
  $route;
  $location;
  applyForm;
  ipCookie;
  MaintanceService; 
  Upload;
  $timeout;

  constructor($location, $route, ipCookie, MaintanceService, Upload, $timeout) {
    this.$location = $location;
    this.$route = $route;
    this.ipCookie = ipCookie;
    this.Upload = Upload;
    this.$timeout = $timeout;
    this.applyForm = {
      address: "Summer Street 102",
      city: "Sheffield",
      zip: "S3 7NT",
      state: "Pending",
      state_details: [],
      publish_user: this.ipCookie("Login"),
      description4image: []
    };
    this.MaintanceService = MaintanceService;
  }

  cancel() {
    this.dismiss({$value: 'cancel'});
  };

  $onInit() {

  }

  handleAplBtnClick(applyForm) {
    applyForm.description4image.push({image_path:applyForm.file.name});
    applyForm.file.upload = this.Upload.upload({
      url: '/api/maintances/upload',
      file: applyForm.file
    });
    applyForm.file.upload.then(function (response) {
      this.$timeout(function () {
        applyForm.file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        this.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      applyForm.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    applyForm.publish_date = new Date();
    this.MaintanceService.addMaintance(applyForm)
      .then(response => {
        alert("Successfully!");
        this.dismiss({$value: 'cancel'});
        if(this.ipCookie("Current_language") == "English") {
          this.$location.path('/checkm');
        }
        else {
          this.$location.path('/checkm4chinese');
        }
        this.$route.reload();
    });
  }
}

export default angular.module('3dpsApp.applym', [ngRoute])
  .config(routes)
  .component('applym', {
    template: require('./applym.html'),
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: ApplymComponent,
    controllerAs: 'applymCtrl'
  })
  .name;
