/**
 * Admin configure module state view
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
  'use strict';

  angular.module('comercialprado').config(baseConfig);

  baseConfig.$inject = ['$stateProvider'];

  function baseConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        views: {
          'header': {
            templateUrl: 'components/header/partials/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
          },
          'adminProducts': {
            templateUrl: 'components/admin/partials/admin.html',
            controller: 'ProductsController',
            controllerAs: 'products'
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
