'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import routes from './register.routes';
import User from '../UserService/User.service';
import ipCookie from 'angular-cookie';

export class RegisterComponent {
  /*@ngInject*/
  $route;
  $location;
  registrationForm;
  ipCookie;
  User; 

  constructor($location, $route, ipCookie, User) {
    this.$location = $location;
    this.$route = $route;
    this.registrationForm = {
      username: "",
      password: "",
      maintancelist: [],
      ifadmin: false,
      address2: ""
    };
    this.ipCookie = ipCookie;
    this.User = User;
  }

  cancel() {
    this.dismiss({$value: 'cancel'});
  };

  $onInit() {

  }

  encryptData(data,key) {
    var CryptoJS = require("crypto-js");
    var encrypted = CryptoJS.AES.encrypt(data,key).toString();
    return encrypted;
  }

  handleRegBtnClick(registrationForm) {
    var encrypted = this.encryptData(registrationForm.password, this.ipCookie("Crypto"));
    registrationForm.password = encrypted;
    this.User.addUser(registrationForm)
      .then(response => {
        alert("Successfully!Enjoy~");
        this.ipCookie('LoginState', 1);
        this.ipCookie('Login', response.data);
        this.dismiss({$value: 'cancel'});
        if(this.ipCookie("Current_language") == "English") {
          this.$location.path('/');
        }
        else {
          this.$location.path('/main4chinese');
        }
        this.$route.reload();
    });
  }
}

export default angular.module('3dpsApp.register', [ngRoute])
  .config(routes)
  .component('register', {
    template: require('./register.html'),
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: RegisterComponent,
    controllerAs: 'registerCtrl'
  })
  .name;
