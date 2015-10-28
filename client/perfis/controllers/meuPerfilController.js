angular.module("mentorias").controller("meuPerfilController", ['$scope', '$meteor', '$state','$rootScope',
    function ($scope, $meteor, $state, $rootScope) {
        var vm = this;
        vm.error = '';
        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
        console.log($rootScope.currentUser);

        /*essa parte do código é pra lidar com o JQuery e o caledar. Posteriormente sera mudado o modo
        de acesso, etc. Mas primeiro, o objetivo é fazer funcionar*/
        $('#calendar').fullCalendar({
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
