
angular.module("mentorias").controller("perfilDetalhesController", ['$scope','$rootScope', '$meteor', '$state','$stateParams',
    function ($scope,$rootScope ,$meteor, $state, $stateParams ) {

        /*usuário sendo requisitado*/

        $scope.userObject = {};

        var subscriptionHandle;
       //  $scope.userB = $scope.$meteorObject(Meteor.users, $stateParams.perfilId ,false).subscribe("users");
    $meteor.subscribe("users", { _id: $stateParams.perfilId }).then(function (handle) {
        console.log('Client Users subscription ready');
        subscriptionHandle = handle;
        // Get the control from the database and bind it to Angular's scope
        $scope.control = $meteor.object(Meteor.users, { _id: $stateParams.perfilId } );

        // Get the actual object without the angular wrapping
        self.thing = $scope.control.getRawObject();
        $scope.user  = $scope.control.getRawObject();
        console.log($scope.control.getRawObject());


        /*Novamente pega as info do banco e joga no usuário*/
        $scope.loadUsers = function(users){
          var result = [];

          console.log(users);

          for( var prop in users){
            if(users.hasOwnProperty(prop)){
              if(users[prop]._id){
                result.push(users[prop]);
              }
            }
          }
          console.log(result);
          return result;

        }

       //$scope.user = $scope.loadUsers($scope.userB);
        //$scope.user = $scope.$meteorObject(Meteor.users,$stateParams.userId,false).subscribe('users');
        $scope.error = '';

        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');

        console.log($scope.user);

        /*
          Função para definir o sexo do usuário
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

        /*função para as a média de nota do usuário*/
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

        //função que define quem é que tá vendo essa parada
        $scope.defineView = function(user, currentUser){
          if(user.profile.tipo_conta === 'mentor' && currentUser.profile.tipo_conta === 'empreendedor'){
            $scope.viewEmpreendedor = 1;
          }else if(user.profile.tipo_conta === 'empreendedor' && currentUser.profile.tipo_conta === 'mentor'){
            $scope.viewMentor = 1;
          }else if(user.profile.tipo_conta === 'mentor' && currentUser.profile.tipo_conta === 'mentor'){
            $scope.viewEmpreendedor = 1;
          }
        }

        /*definição memo*/
       $scope.profileTitle = $scope.definirSexo($scope.user);
        $scope.defineView($scope.user, $rootScope.currentUser);
        $scope.stars = $scope.getStars($scope.user.profile.stars);
        console.log($scope.stars);
        $scope.agendaDia = $('#agendaDia').fullCalendar($scope.user.profile.agendaDia);
        $scope.agendaMes = $('#agendaMes').fullCalendar($scope.user.profile.agendaMes);

        /*funcão que adiciona uma requisição de evento para o usuário X do usuário logado */

        handle.stop();

        $scope.requisitaEvento = function(){
          /*Novo evento que será requisitado.*/
          // var newEvent = {
          //   id:  $rootScope.currentUser._id + $scope.user._id,
          //   title: titulo,
          //   start: new Date()+3600, //saporra tem que ter a data completa
          //   //end: new Date(), //saqui também (porra) pr amostrar a merda do tempo inicial e final
          //   // className: 'CSS class for the event',
          //   // color: 'color',
          //   // backgroundColor: 'backgroundColor',
          //   // borderColor: 'borderColor',
          //   // textColor: 'textColor',
          //   allDay: false, //vai fazer aparecer a hora que é esse lixo
          //   userFrom: currentUser._id //e o otário que pede ajuda aos universitarios
          // };

          //Mandando a requisição pro maldito:
          Meteor.users.update({_id: $scope.user._id}, {
              $push : {
                //saqui é pra merda do evento aparecer piscando no canto lá, igual um satanas
                "profile.requisicoes": 'fff'
                }
              }
        );
      };







      });








//nao escreve nada pra baixo dessa linha! VOce já perdeu tempo por causa dessa merda de erro besta.
    }
]);
