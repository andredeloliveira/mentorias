angular.module("mentorias").controller("meuPerfilController", ['$scope', '$meteor', '$state','$rootScope',
    function ($scope, $meteor, $state, $rootScope) {
        var vm = this;
        vm.error = '';
        $scope.profileTitle = '';
        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
        console.log($rootScope.currentUser);

        /*
          set o sexo do usuário
        */
        if($rootScope.currentUser.profile.genero  === 'feminino' &&
         $rootScope.currentUser.profile.tipo_conta === 'mentor'){
           $scope.profileTitle = 'Mentora';
         }else if($rootScope.currentUser.profile.genero  === 'feminino' &&
          $rootScope.currentUser.profile.tipo_conta === 'empreendedor'){
            $scope.profileTitle = 'Empreendedora';
          }else if($rootScope.currentUser.profile.genero  === 'masculino' &&
           $rootScope.currentUser.profile.tipo_conta === 'mentor'){
             $scope.profileTitle = 'Mentor';
           }else {
             $scope.profileTitle = 'Empreendedor'
           }


        /*essa parte do código é pra lidar com o JQuery e o caledar. Posteriormente sera mudado o modo
        de acesso, etc. Mas primeiro, o objetivo é fazer funcionar*/
        var calendario  = $('#calendar').fullCalendar({
          weekends:false,
          header: {
            center: 'prev title next',
            left: '',
            right:''
          },
          aspectRatio: 2
        });

    }
]);
