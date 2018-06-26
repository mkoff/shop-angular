'use strict';

// Controllers
var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListCtrl', function($scope, $http){
	$scope.title = 'Angular-shop';
	
	$http.get('js/phones.json').success(function(data, status, headers, config){
		$scope.phones = data;
	}).error(function(){

	});

	// Filter
	$scope.sortField = undefined;
	$scope.reverse = undefined;

	$scope.sort = function(fieldName){
		if($scope.sortField === fieldName){
			$scope.reverse = !$scope.reverse;
		}else{
			$scope.sortField = fieldName;
			$scope.reverse = false;
		}
	}

	$scope.sizeCart = 0;

	$scope.add = function(){
		$scope.sizeCart++;
		console.log(this.key.id);
	}
});