/**
 * Home configure module state view
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
  'use strict';

  angular.module('comercialprado').config(baseConfig);

  baseConfig.$inject = ['$stateProvider'];

  function baseConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          'header': {
            templateUrl: 'components/header/partials/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
          },
          'login': {
            templateUrl: 'components/login/partials/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
          },
          'footer': {
            templateUrl: 'components/footer/partials/footer.html',
            controller: 'FooterController',
            controllerAs: 'footer'
          }
        }
      });
  }
})();
