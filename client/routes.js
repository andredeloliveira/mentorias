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

      $stateProvider
        .state('cadastroPerfil', {
          url: '/cadastroPerfil',
          templateUrl: 'client/perfis/views/cadastroPerfil.ng.html',
          controller: 'perfilController'
        })
        .state('home', {
          url: '/',
          templateUrl: 'client/perfis/views/login.ng.html',
          controller: 'perfilController'
          }
        );

      $urlRouterProvider.otherwise("/");

    }]);
