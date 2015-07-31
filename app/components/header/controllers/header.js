/**
 * Products Controller
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
  'use strict';

  angular.module('comercialprado').controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$location', '$anchorScroll'];

  function HeaderController($location, $anchorScroll) {
    var vm = this;
    vm.scrollTo = scrollTo;

    function scrollTo(id) {
      $location.hash(id);
      $anchorScroll();
    }
  }
})();
