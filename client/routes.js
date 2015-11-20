angular.module("mentorias").run(['$rootScope', '$state', function ($rootScope, $state) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === 'AUTH_REQUIRED') {
            $state.go('login');
        }
        if (error === 'FORBIDDEN') {
             $state.go('403');
        }
        if (error === 'NOT_FOUND') {
             $state.go('404');
        }
    });
}]);
angular.module('mentorias').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        //router para o cadastro de perfil (Usando o $meteor.user !)

        $stateProvider

            .state('403', {
                url: '/403',
                templateUrl: 'client/403.html',
            })
            .state('404', {
                url: '/404',
                templateUrl: 'client/404.html',
            })
            .state('modais', {
                url: '/modais',
                templateUrl: 'client/perfis/views/modais.ng.html',
                controller: 'modaisController',
                controllerAs: 'modal'
            })
            .state('painel-controle', {
                url: '/painel-controle',
                templateUrl: 'client/perfis/views/painel-controle.ng.html',
                controller: 'painelControleController',
                controllerAs: 'pc'
            })
            .state('criar-trajetoria', {
                url: '/criar-trajetoria',
                templateUrl: 'client/trajetoria/views/criar-trajetoria.ng.html',
                controller: 'criarTrajetoriaController',
                controllerAs: 'vt'
            })
            .state('visualizar-trajetoria', {
                url: '/visualizar-trajetoria',
                templateUrl: 'client/trajetoria/views/visualizar-trajetoria.ng.html',
                controller: 'visualizarTrajetoriaController',
                controllerAs: 'vt'
            })
            .state('trajetoria-de-desenvolvimento', {
                url: '/trajetoria-de-desenvolvimento',
                templateUrl: 'client/trajetoria/views/trajetoria-de-desenvolvimento.ng.html',
                controller: 'trajetoriaDesenvolvimentoController',
                controllerAs: 'td'
            })
            .state('trocar-senha', {
                url: '/trocar-senha',
                templateUrl: 'client/perfis/views/trocar-senha.ng.html',
                controller: 'trocarSenhaController',
                controllerAs: 'tsc'
            })
            .state('recuperar-senha', {
                url: '/recuperar-senha',
                templateUrl: 'client/perfis/views/recuperar-senha.ng.html',
                controller: 'recuperarSenhaController',
                controllerAs: 'rsc'
            })
            .state('cadastroPerfil', {
                url: '/cadastroPerfil',
                templateUrl: 'client/perfis/views/cadastroPerfil.ng.html',
                controller: 'perfilController',
                controllerAs: 'pc'
            })
            /*para a home...*/
            .state('home', {
                url: '/',
                templateUrl: 'client/perfis/views/meuPerfil.ng.html',
                controller: 'meuPerfilController',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            })
            .state('proximaEtapa', {
                url: '/proximaEtapa',
                templateUrl: 'client/perfis/views/proximaEtapa.ng.html',
                controller: 'proximaEtapaController'
            })
            /*para a lista de empresas*/
            .state('empresas', {
                url: '/empresas',
                templateUrl: 'client/empresa/views/empresas.ng.html',
                controller: 'empresasController',
                controllerAs: 'ecs'
            })
            /*para ver os detahes da Empresa*/
            .state('DetalhesEmpresa', {
                url: '/detalhesEmpresa/:empresaId',
                templateUrl: 'client/empresa/views/empresaDetails.ng.html',
                controller: 'empresaDetailsController',
                controllerAs: 'dc'
            })
            /*para o cadastro de Empresa*/
            .state('cadastroEmpresa', {
                url: '/cadastroEmpresa',
                templateUrl: 'client/empresa/views/cadastroEmpresa.ng.html',
                controller: 'empresaController',
                controllerAs: 'ec'
            })
            /*para a página meu perfil*/
            .state('meuPerfil', {
                url: '/meuPerfil',
                templateUrl: 'client/perfis/views/meuPerfil.ng.html',
                controller: 'meuPerfilController',
                conrollerAs: 'mpc',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                        return $meteor.requireUser();
                    }]
                }
            })
            /*para a página de login*/
            .state('login', {
                url: '/login',
                templateUrl: 'client/perfis/views/login.ng.html',
                controller: 'loginController',
                controllerAs: 'lc',
                resolve: {
                    "currentUser": ["$meteor", "$rootScope", "$state", function ($meteor, $rootScope, $state) {
                        $meteor.waitForUser().then(function () {
                            if ($rootScope.currentUser) {
                                $state.go('home');
                            }
                        }, function (err) {
                            console.log('Login error - ', err);
                        });
                    }]
                }
            })
            //detalhes do perfil (quando um terceiro acessa o perfil)
            .state('perfilDetalhes',{
              url:'/perfis/:perfilId',
              templateUrl: 'client/perfis/views/perfilDetalhes.ng.html',
              controller:'perfilDetalhesController',
              controllerAs:'pdc',
              resolve: {
                  "currentUser": ["$meteor", function ($meteor) {
                      return $meteor.requireUser();
                  }]
              }
            })
            /*pra reinicializar a senha*/
            /*pro logout*/
            .state('logout', {
                url: '/logout',
                resolve: {
                    "logout": ['$meteor', '$state', function ($meteor, $state) {
                        return $meteor.logout().then(function () {
                            $state.go('login');
                        }, function (err) {
                            console.log('logout error - ', err);
                        });
                    }]
                }
            });

        /*caso alguma merda acontença, redireciona pra página inicial. Caso isso aconteça abra ao debug e chore*/

        $urlRouterProvider.when('', '/');
        //$urlRouterProvider.otherwise('/404');

    }
]);
