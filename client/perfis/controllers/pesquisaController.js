angular.module("mentorias").controller("pesquisaController", ['$scope', '$stateParams', '$meteor', '$state', '$q','$rootScope',
    function ($scope, $stateParams, $meteor, $state, $q, $rootScope) {
      /*Todos os usuários cadastrados*/
      $scope.verifyLogin = function(){
        if(Meteor.userId()){
          return 1;
        }else{
          return 0;
        }
      }

      $scope.query = '';

      /*Parque que realmente importa para a  pesquisa*/
      $scope.pesquisa = function(){
        console.log('esta funcionando');
        if($scope.query){
          $state.go('pesquisar',{query: $scope.query});
        }
      };



    }
]);
