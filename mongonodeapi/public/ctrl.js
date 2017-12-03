var app = angular.module("myapp",[])
	.controller("sara",sara);

function sara($http,$scope){
var refresh = function(){	
	$http.get("http://localhost:3000/api/products")
		.then(function(response){
			$scope.lists = response.data;
			console.log(response.data);
			$scope.product = {};
		});
};
refresh();
	$scope.src=function(){
	console.log($scope.product);
		$http.post("http://localhost:3000/api/products", $scope.product).then(function(response){
			console.log(response);
		});
	// console.log(response );
	refresh();	
 	};
}