angular.module("mentorias").run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
}]);
angular.module('mentorias').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);
      //router para o cadastro de perfil (Usando o $meteor.user !)
      $stateProvider
        .state('cadastroPerfil', {
          url: '/cadastroPerfil',
          templateUrl: 'client/perfis/views/cadastroPerfil.ng.html',
          controller: 'perfilController',
          controllerAs: 'pc'
        })
        /*para a home...*/
        .state('home', {
          url: '/',
          templateUrl: 'client/home/views/home.ng.html',
          controller: 'homeController'
        })
        .state('proximaEtapa',{
          url:'/proximaEtapa',
          templateUrl: 'client/perfis/views/proximaEtapa.ng.html',
          controller: 'proximaEtapaController'
        })
        /*para a página de login*/
        .state('login', {
          url: '/login',
          templateUrl: 'client/perfis/views/login.ng.html',
          controller: 'loginController',
          controllerAS: 'lc'
        })
        /*pra reinicializar a senha*/
        .state('resetSenha',{
          url:'/resetSenha',
          templateUrl: 'clients/perfis/views/reset-senha.ng.html',
          controller: 'resetSenhaController',
          controllerAs: 'rsc'
        })
        /*pro logout*/
        .state('logout',{
          url: '/logout',
          resolve: {
            "logout": ['$meteor','$state',function($meteor,$state){
              return $meteor.logout().then(function(){
                $state.go('/');
              }, function(err){
                console.log('logout error - ', err);
              });
            }]
          }
        });

        /*caso alguma merda acontença, redireciona pra página inicial. Caso isso aconteça abra ao debug e chore*/
      $urlRouterProvider.otherwise("/");

    }]);
