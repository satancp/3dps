'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
import ipCookie from 'angular-cookie';

export class NavbarComponent {
  $location;
  ipCookie;
  items1;
  items2;
  items3;
  items1_chinese;
  items2_chinese;
  items3_chinese;
  animationsEnabled;
  $uibModal;
  current_language;
  $route;
  $rootScope;
  
  constructor($location, ipCookie, $uibModal, $route, $rootScope) {
    'ngInject';
    this.$rootScope = $rootScope;
    this.ipCookie = ipCookie;
    this.$location = $location;
    this.animationsEnabled = true;
    this.$uibModal = $uibModal;
    this.$route = $route;
    this.current_language = this.ipCookie("Current_language");
    if(this.current_language != "English" && this.current_language != "Chinese") {
      this.current_language = "English";
      this.$rootScope.real_title = "Go2Fix";
    }
    this.setTitle();
    this.items1 = [
    {
      title: 'Redeem Code',
      link: '/'
    }];
    this.items2 = [
    {
      title: 'Contact Us',
      link: ''
    },
    {
      title: 'FAQ',
      link: '/faq'
    }];
    this.items3 = [
    {
      title: 'Check Profile',
      link: ''
    }
    ];
    this.items1_chinese = [
    {
      title: '兑换码',
      link: '/'
    }];
    this.items2_chinese = [
    {
      title: '联系我们',
      link: ''
    },
    {
      title: '常见问题',
      link: '/faq4chinese'
    }];
    this.items3_chinese = [
    {
      title: '查看信息',
      link: ''
    }
    ];
  }

  login() {
    var modalInstance1 = this.$uibModal.open({
      animation: this.animationsEnabled,
      component: 'login'
    });
  }

  logout() {
    this.ipCookie.remove('LoginState');
    this.ipCookie.remove('Login');
    this.$location.path('/');
    this.$route.reload();
  }

  login4chinese() {
    var modalInstance2 = this.$uibModal.open({
      animation: this.animationsEnabled,
      component: 'login4chinese'
    });
  }

  logout4chinese() {
    this.ipCookie.remove('LoginState');
    this.ipCookie.remove('Login');
    this.$location.path('/main4chinese');
    this.$route.reload();
  }

  setlanguage(target_language) {
    this.ipCookie("Current_language", target_language);
    this.current_language = this.ipCookie("Current_language");
    this.setTitle();
    if(this.current_language == "Chinese") {
      this.$location.path('/main4chinese');
    }
    else {
      this.$location.path('/');
    }
    this.$route.reload();
  }

  setTitle() {
    if(this.current_language == "Chinese") {
      this.$rootScope.real_title = "Go2Fix 房产服务";
    }
    else {
      this.$rootScope.real_title = "Go2Fix";
    }
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
