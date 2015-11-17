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

          if($rootScope.currentUser.profile.tipo_conta === 'mentor'){
            $scope.menuLateral = 'mentor'
          }else if($rootScope.currentUser.profile.tipo_conta === 'empreendedor'){
            $scope.menuLateral = 'empreendedor';
          }
          /*fim da definição de usuário*/

          /*Seleciona a view*/
          $scope.setCurrentView = function(view){
            $scope.currentView = view;
          };
          /*Mostra a view  - retorna um boolean caso a view selecionada for a em questão*/
          $scope.showView = function(view){
            return $scope.curretView === view;
          };
          /*para criar um evento no calendario*/
          $scope.createEvent = function(event){

          };
        /*essa parte do código é pra lidar com o JQuery e o caledar. Posteriormente sera mudado o modo
        de acesso, etc. Mas primeiro, o objetivo é fazer funcionar*/
        var calendario  = $('#calendar').fullCalendar({
          weekends:false,
          header: {
            center: 'prev title next',
            left: '',
            right:''
          },
          lang: 'pt-br'
          ,
          aspectRatio: 2
        });

        var calendarioDia = $('#calendarioDia').fullCalendar({
          header: {
            center: 'prev title next',
            left: '',
            right:''
          },
          views: {
            agendaDay: {
              titleFormat: 'DD/MM/YYYY'
            }
          },
          defaultView: 'agendaDay',
          height: 450,
          lang: 'pt-br'
        });

    }
]);
