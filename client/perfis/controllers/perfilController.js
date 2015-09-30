/**
  Controller responsável pelo Perfil. Aqui os métodos para Login, cadastro e busca de usuários são definidos.
**/

angular.module("mentorias").controller("perfilController", ['$scope', '$stateParams','$meteor',
  function($scope, $stateParams,$meteor){


    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

  }]);
