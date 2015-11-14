/*
Controller de Produtos
*/
angular.module("mentorias")

//controller de produtos
.controller("produtosController", ['$scope', '$stateParams', '$meteor', '$state','$meteorSubscribe',
	function ($scope, $stateParams, $meteor, $state, $meteorSubscribe){
		    
		    $scope.produtos = Meteor.Produtos;
			
			console.log($scope.produtos)
		

}])

