if (Meteor.isClient) {

/*Controller para lidar com a página de visualização da empresa. */
angular.module("mentorias").controller("empresaDetailsController", ["$scope", "$rootScope", "$stateParams", "$meteor",
   function ($scope, $rootScope, $stateParams, $meteor) {

   	    
   		$meteor.subscribe('allUsers').then(function(usersHandle){
   			$scope.allUsers = $meteor.collection(Meteor.users);
   				arrayUsers = $.map($scope.allUsers, function(value, index) {
    			return [value];
			});
			var usuario =  Meteor.userId();
			$scope.usuarios = arrayUsers;
   		})

   		$meteor.subscribe('empresaByID', $stateParams).then(function(empresaHandle){
   			$scope.empresaByID = $meteor.collection(Empresas);
   			//console.log($scope.empresaByID);
   			arrEmpresa = $.map($scope.empresaByID, function(valor, idx){
   				return [valor];
   			})
   			$scope.detalhesEmpresa = arrEmpresa[0];
   			//console.log($scope.detalhesEmpresa);
   			$scope.imgid = $scope.detalhesEmpresa.profilePic._id;

   			$meteor.subscribe('imagensID', $scope.imgid).then(function(imagensIDHandle){
	   			$scope.imagensID = $meteor.collection(Images);
	   			$scope.imagemEmpresa = $scope.imagensID[0];
   			})
   		})
   				
		$meteor.subscribe('produtos').then(function(produtosHandle){
   			$scope.produtos = $meteor.collection(Produtos);
   			arrProdutos = $.map($scope.produtos, function(val, ind){
   				return [val];
   			})
   			$scope.listaprodutos = arrProdutos; 
   			//console.log($scope.listaprodutos);
   		})
   		
   		// console.log($scope.listaprodutos, arrProdutos);
	//Carregando no template

   }
]);


}