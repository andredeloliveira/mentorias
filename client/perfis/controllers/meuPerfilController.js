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
          /*Função que vai tratar a média das notas.
          @result -> Objeto com a média das notas (em estrelinhas) e quantas estrelinhas em branco;
          */
          $scope.getStars = function(stars){

            var nStars = stars.length;
            if(!stars)
              console.error('estrelas vazio');
            var total = 0;
            var media = 0;
            var nBlankStars = 0;
            var nRealStars = 0;
            for(var i; i < nStars; i++){
              total = total + stars[i];
            }

            if(total !== 0 &&  nStars !== 0){
              media = Math.floor(total / nStars);
            }
            if(media === 0){
              nBlankStars = 5;
              nRealStars = 0;
            }else if(media === 5){
              nRealStars = media;
              nBlankStars = 0;
            }else{
              nRealStars = media;
              nBlankStars = 5 - media;
            }
            var tempStars = {
              realStars: nRealStars,
              blankStars: nBlankStars
            };
            return tempStars;

          };
        /*essa parte do código é pra lidar com o JQuery e o caledar. Posteriormente sera mudado o modo
        de acesso, etc. Mas primeiro, o objetivo é fazer funcionar*/
        var calendario  = $('#agendaMes').fullCalendar($rootScope.currentUser.profile.agendaMes);

        var calendarioDia = $('#agendaDia').fullCalendar($rootScope.currentUser.profile.agendaDia);

        $scope.stars = $scope.getStars($rootScope.currentUser.profile.stars);
        console.log($scope.stars);

    }
]);
