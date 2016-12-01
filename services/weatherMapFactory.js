weatherMapModule.service('weatherMapFactory', function ($http, $parse, $q) {

	this.getCityWeather = function() {
		var deferred = $q.defer();
		var url = 'http://kke6win7plp:3003';
		$http.get(url).then(function(data){
			deferred.resolve(data.data);
		}, function(error) {
			deferred.reject(error);
		});
	return deferred.promise;
    };

    this.saveSettings = function(name, number) {
        var deferred = $q.defer();
		var url = 'http://kke6win7plp:3003';
        var data = {
            name: name,
            number: number
        };
         $http.post(url, data)
        .success(function (data, status, headers, config) {
        })
        .error(function (data, status, header, config) {
        });
    }
});
