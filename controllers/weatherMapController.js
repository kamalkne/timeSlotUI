weatherMapModule.controller('weatherMapController', ['$scope', '$parse', 'weatherMapFactory', '$rootScope',
	function ($scope, $parse, weatherMapFactory, $rootScope) {

		$rootScope.showLoader = false;
		$scope.cityArray = [];
		$scope.data = [];
		$scope.cityEntered = function(){
			$scope.data = [];
			$rootScope.showLoader = true;
            weatherMapFactory.getCityWeather().then(function(data){
                $scope.slots = data;
                $rootScope.showLoader = false;
            }, function(){
                alert("Please try after some time..!");
            });

		}();

        $scope.enterDetails = function() {
            $scope.isModalOpen = true;
        }

		$scope.save = function() {
            weatherMapFactory.saveSettings($scope.name, $scope.number);
        }
	}
]);

