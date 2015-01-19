hg.directive('hgGrid', function() {

  return {
    restrict: 'E',
    template: '<div></div>',
    scope: true,
    controller: 'gridController',
    link: function(scope, element, attrs, ctrl) {
      scope.$watch(attrs.source, function() {
        if (!ctrl.isSourceResolved()) {
          return;
        }
        ctrl.bindGrid();
      }, true);
    }
  }
  
});

