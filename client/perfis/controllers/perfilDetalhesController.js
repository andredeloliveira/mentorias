
angular.module("mentorias").controller("perfilDetalhesController", ['$scope', '$meteor', '$state','$stateParams',
    function ($scope, $meteor, $state, $stateParams) {

        /*usuário sendo requisitado*/
        $scope.user = $meteor.object(Meteor.users,$stateParams.userId).subscribe('users');
        console.log($scope.user);
        $scope.profileTitle = '';
        $scope.error = '';

        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
        console.log($scope.user);

        /*
          sexo do usuário definido aqui.
        */



          /*fim da definição de usuário*/






    }
]);
