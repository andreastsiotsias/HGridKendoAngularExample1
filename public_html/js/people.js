hg.factory('people',
  function($http, $q, $rootScope) {
    
    var _data = null;
    
    return {
      get: function() {
        var deferred = $q.defer();
        
        if (_data) {
          deferred.resolve(_data);
        } else {
          $http.get('people.json').success(function(data) {
            _data = data;
            deferred.resolve(_data);
            $rootScope.$$phase || $rootScope.$apply();
          });
        }
        return deferred.promise;
      }
    }
});


