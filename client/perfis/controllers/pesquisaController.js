angular.module("mentorias").controller("pesquisaController", ['$scope', '$stateParams', '$meteor', '$state', '$q','$rootScope',
    function ($scope, $stateParams, $meteor, $state, $q, $rootScope) {
      /*Todos os usuários cadastrados*/
      if(Meteor.userId()){
        $scope.loggedIn = 1;
      }else {
        $scope.loggedIn = 0;
      }
      console.log($rootScope.currentUser);
      $meteor.subscribe('users').then(function(usersHandle){
                        $scope.allUsers = $meteor.collection(Meteor.users,false);
                                arrayUsers = $.map($scope.allUsers, function(value, index) {
                        return [value];
                        });
                        $scope.usuarios = arrayUsers;
                });
      /*E todas as empresas também*/
      $meteor.subscribe('empresas').then(function(empresasHandle){
          $scope.allEmpresas = $meteor.collection(Empresas,false);
          arrayEmpresas = $.map($scope.allEmpresas,function(value, index){
            return [value];
          });
          $scope.empresas = arrayEmpresas;
      });





    }
]);
