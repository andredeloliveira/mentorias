if (Meteor.isClient) {

/*Controller para lidar com a página de visualização da empresa. */
angular.module("mentorias").
controller("empresaDetailsController", ['$scope', '$rootScope', '$stateParams', '$meteor', '$state','$meteorSubscribe',
    function ($scope, $rootScope, $stateParams, $meteor, $state, $meteorSubscribe) {

    	//bind geral
		var vm = this;


   		$meteor.subscribe('empresaByID', $stateParams).then(function(empresaIDHandle){
   			$scope.ObjEmpresa = $meteor.collection(Empresas, false).subscribe('empresaByID', $stateParams);
   			console.log($scope.ObjEmpresa); 

   			arrEmpresa = $.map($scope.ObjEmpresa, function(valor, idx){
   				return [valor];
   			});
   			$scope.Empresa = arrEmpresa[0];
   			$scope.imgid = $scope.Empresa.profilePic._id;
   			
   		});
   		$meteor.subscribe('imagensID', $scope.imgid).then(function(imgHandle){
	   		arr = $meteor.collectionFS(Images, false, Images).subscribe('imagensID', $scope.imgid);
	   		img = $.map(arr, function(v, i){
	   			return [v];
	   		});
	   		$scope.imagemEmpresa = img;
   		});		

   		//updateEmpresa #EmpresaModel
   		vm.updateEmpresa = function(){

   			alert('atualizando dados empresa');
   		}
		//updateIntegrantes #IntegranteModel
   		vm.updateIntegrantes = function(){
   			alert('update no integrante');
   		}
   		//deleteInntegrantes #IntegranteModel
   		vm.deleteIntegrate= function(){
   			alert('deletando Integrante');
   		}
   		//setIntegranteRole #IntegranteModel
   		vm.setRoleIntegrante= function(){
   			alert('atribuindo cargo integrante');
   		}

   		//###########################inspector##################################
   		console.log($scope.imagemEmpresa);
		console.log($scope.imgid);

	}

]);

}