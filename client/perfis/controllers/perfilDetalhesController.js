
angular.module("mentorias").controller("perfilDetalhesController", ['$scope', '$meteor', '$state','$stateParams',
    function ($scope, $meteor, $state, $stateParams) {

        /*usuário sendo requisitado*/
        $scope.user = {};
        $scope.userObject = {};

        $scope.user = $scope.$meteorObject(Meteor.users,$stateParams.userId,false);
        $scope.$meteorSubscribe('users');

        //$scope.user = $scope.$meteorObject(Meteor.users,$stateParams.userId,false).subscribe('users');
        $scope.error = '';

        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');

          console.log($scope.user["emails"]);

        /*
          sexo do usuário definido aqui.
        */

        $scope.definirSexo = function(user){
          var result = '';
          if(user.profile.tipo_conta === 'mentor' && user.profile.genero === 'feminino'){
            result = 'Mentora';
          }else if(user.profile.tipo_conta === 'mentor' && user.profile.genero === 'masculino'){
            result = 'Mentor';
          }else if(user.profile.tipo_conta === 'empreendedor' && user.profile.genero === 'feminino'){
            result = 'Empreendedora';
          }else if(user.profile.tipo_conta === 'empreendedor' && user.profile.genero === 'masculino'){
            result = 'Empreendedor';
          }
          return result;
        };

          /*fim da definição de usuário*/






    }
]);
