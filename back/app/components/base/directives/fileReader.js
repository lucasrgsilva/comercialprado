(function () {
  'use strict';

  angular.module('comercialprado').directive('fileReader', fileReader);

  fileReader.$inject = ['$q'];

  function fileReader($q) {
    var slice = Array.prototype.slice;
    var directive = {
      restrict: 'A',
      require: '?ngModel',
      link: link
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      ngModel.$render = angular.noop;
      element.bind('change', changeCallback);

      function changeCallback(event) {
        var element = event.target;

        $q.all(slice.call(element.files, 0).map(readFile)).then(function (values) {
          if (element.multiple) {
            ngModel.$setViewValue(values);
          } else {
            ngModel.$setViewValue(values.length ? values[0] : null);
          }
        });

        function readFile(file) {
          var defer = $q.defer();
          var reader = new FileReader();

          reader.file = file;
          reader.onload = function (event) {
            defer.resolve(event.target.result);
          };

          reader.onerror = function (event) {
            defer.reject(event);
          };

          reader.readAsDataURL(file);

          return defer.promise;
        }
      }
    }
  }
})();
