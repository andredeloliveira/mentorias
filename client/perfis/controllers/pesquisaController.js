angular.module("mentorias").controller("pesquisaController", ['$scope', '$stateParams', '$meteor', '$state', '$q',
    function ($scope, $stateParams, $meteor, $state, $q) {
      /*Todos os usuários cadastrados*/
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

      console.log($scope.empresas);
      console.log($scope.users);



    }
]);
