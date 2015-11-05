angular.module("mentorias").controller("meuPerfilController", ['$scope', '$meteor', '$state','$rootScope',
    function ($scope, $meteor, $state, $rootScope) {
        var vm = this;
        vm.error = '';
        $scope.profileTitle = '';
        /*curretView é a visualização que será selecionada nos botões da extrema direita da página do perfil
        0 é para a agenda.
        0 = agenda;
        1 = mensagens
        2 = açoes do mentor
        */
        $scope.currentView = 0;
        /*mesmo esquma aqui apara o menu lateral.
        */
        $scope.menuLateral = '';
        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
        console.log($rootScope.currentUser);

        /*
          sexo do usuário definido aqui.
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

           /*botões da direita definidos aqui */
          if($rootScope.currentUser.profile.tipo_conta === 'mentor'){
            $scope.menuLateral = 'mentor'
          }else if($rootScope.currentUser.profile.tipo_conta === 'empreendedor'){
            $scope.menuLateral = 'empreendedor';
          }

          /*Seleciona a view*/
          $scope.setCurrentView = function(view){
            $scope.currentView = view;
          }
          /*Mostra a view  - retorna um boolean caso a view selecionada for a em questão*/
          $scope.showView = function(view){
            return $scope.curretView === view;
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
