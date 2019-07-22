angular.module('app').directive('ngBlur', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function($scope, $element, $attrs, ngModel) {
      $element.on('blur', function() {
        if (ngModel.$invalid) {
          $element.addClass('error');
        } else {
          $element.removeClass('error');
        }
      });
    }
  };
});

// restrict
// A que seria o atributo ex: <input ng-blur
// E que seria o elemento ex: <ng-blur>
// require seria o importante da diretiva
