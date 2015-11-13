/*
Controller de Produtos
*/
angular.module("mentorias")

//controller de produtos
.controller("produtosController", ['$scope', '$stateParams', '$meteor', '$state','$meteorSubscribe',
	function ($scope, $stateParams, $meteor, $state, $meteorSubscribe){
		    $scope.users = $meteor.collection(Meteor.users,false).subscribe('users');
			
		

}])

