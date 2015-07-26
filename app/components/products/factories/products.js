(function () {
  'use strict';

  angular.module('comercialprado').factory('Products', ProductsFactory);

  ProductsFactory.$inject = ['Restangular'];

  function ProductsFactory(Restangular) {
    Restangular.extendModel('products', function (obj) {
      return angular.extend(obj, {});
    });

    return Restangular.all('products');
  }
}());
