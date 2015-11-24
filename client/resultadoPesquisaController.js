angular.module("mentorias").controller("resultadoPesquisaController", ['$scope', '$stateParams', '$meteor', '$state', '$q','$rootScope',
    function ($scope, $stateParams, $meteor, $state, $q, $rootScope) {
      /*Todos os usuários cadastrados*/
      $scope.query = $stateParams.query;
      $scope.images = $meteor.collection(Images,false,Images).subscribe('images');
      /*Eu ia usar essas queries aqui de baixo, mas não vai rolar. Não sei como pesquisar como se fosse o %like
        do SQL.
      */
       var regEx = "/(["+ $stateParams.query + "+" + $stateParams.query.toLowerCase()+"])\w+/";
        var regexQuery = new RegExp(regEx);
        //$scope.users = $meteor.collection(Meteor.users,false).subscribe('userByName', regexQuery);
        //$scope.empresas = $meteor.collection(Empresas, false).subscribe('empresaByName', regexQuery);




      console.log($scope.users);
      console.log($scope.empresas);

      /*eu sei q é codigo duplicado, maas quero fazer funcionar agora, eum uma manutenção evolutiva
      vale a pena injetar a dependencia*/





    }
]);
