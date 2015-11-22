angular.module("mentorias").controller("pesquisaController", ['$scope', '$stateParams', '$meteor', '$state', '$q','$rootScope',
    function ($scope, $stateParams, $meteor, $state, $q, $rootScope) {
      /*Todos os usuários cadastrados*/
      if(Meteor.userId()){
        $scope.loggedIn = 1;
      }else {
        $scope.loggedIn = 0;
      }
      console.log(query);





    }
]);
