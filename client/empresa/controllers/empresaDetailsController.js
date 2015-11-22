if (Meteor.isClient) {

/*Controller para lidar com a página de visualização da empresa. */
angular.module("mentorias").controller("empresaDetailsController", ["$scope", "$rootScope", "$stateParams", "$meteor",
   function ($scope, $rootScope, $stateParams, $meteor) { 	    

 		idEmpresa = $stateParams.empresaId;
   		$scope.Empresa = $meteor.object(Empresas, idEmpresa);

   		//$scope.Integrantes = $meteor.object(Integrantes);

   		$meteor.subscribe('allUsers').then(function(usersHandle){
   			allUsers = $meteor.collection(Meteor.users);
   				arrayUsers = $.map(allUsers, function(value, index) {
    			return [value];
			});
			var usuario =  Meteor.userId();
			$scope.usuarios = arrayUsers;
   		})

   		$meteor.subscribe('empresaByID', $stateParams).then(function(empresaHandle){
   			empresaByID = $meteor.collection(Empresas);
   			//console.log(empresaByID);
   			arrEmpresa = $.map(empresaByID, function(valor, idx){
   				return [valor];
   			})
   			$scope.detalhesEmpresa = arrEmpresa[0];
   			//console.log($scope.detalhesEmpresa);

   			imgid = $scope.detalhesEmpresa.profilePic._id;
   			
   			//console.log(imgid);

   			$scope.arr = $meteor.subscribe('imagensID', imgid).then(function(imgHandle){
	   			arr = $meteor.collectionFS(Images, false, Images);
	   			img = $.map(arr, function(v, i){
	   				return [v];
	   			});
	   			//$scope.imagemEmpresa = img[0];
   			});
   		})
	
		$meteor.subscribe('produtos').then(function(produtosHandle){
   			produtos = $meteor.collection(Produtos);
   			arrProdutos = $.map(produtos, function(val, ind){
   				return [val];
   			})
   			$scope.listaprodutos = arrProdutos; 

   			console.log($scope.listaprodutos);
   		})
   		
   		// console.log($scope.listaprodutos, arrProdutos);
		//Carregando no template
		
   }
]);


}