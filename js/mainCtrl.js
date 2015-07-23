angular.module('quoteBook')
.controller('mainCtrl',function($scope, mainService){
	
	$scope.getData = function(){
		$scope.date = mainService.getData();
	};

	$scope.getData();

	$scope.dataAdd = function(quote, author){
		
		 mainService.addData(quote, author);
	};

	//$scope.addData();

	$scope.removeData = function(quote,author){
		mainService.removeData(quote, author);
	};

	//$scope.removeData();
	


});