angular.module("mentorias").run(['$rootScope', '$state', function ($rootScope, $state) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page

        switch (error) {
          case 'FORBIDDEN':
            $state.go('403');
            break;
          case 'NOT_FOUND':
            $state.go('404');
            break;
          default:
            state.go('login');

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
            .state('chat', {
                url: '/chat',
                templateUrl: 'client/chat/views/chat.html',
                controller: 'chatController',
                controllerAs: 'chat'
            })
            .state('modais', {
                url: '/modais',
                templateUrl: 'client/perfis/views/modais.html',
                controller: 'modaisController',
                controllerAs: 'modal'
            })
            .state('painel-controle', {
                url: '/painel-controle',
                templateUrl: 'client/perfis/views/painel-controle.html',
                controller: 'painelControleController',
                controllerAs: 'pc'
            })
            .state('criar-trajetoria', {
                url: '/criar-trajetoria',
                templateUrl: 'client/trajetoria/views/criar-trajetoria.html',
                controller: 'criarTrajetoriaController',
                controllerAs: 'vt'
            })
            .state('visualizar-trajetoria', {
                url: '/visualizar-trajetoria',
                templateUrl: 'client/trajetoria/views/visualizar-trajetoria.html',
                controller: 'visualizarTrajetoriaController',
                controllerAs: 'vt'
            })
            .state('trajetoria-de-desenvolvimento', {
                url: '/trajetoria-de-desenvolvimento',
                templateUrl: 'client/trajetoria/views/trajetoria-de-desenvolvimento.html',
                controller: 'trajetoriaDesenvolvimentoController',
                controllerAs: 'td'
            })
            .state('trocar-senha', {
                url: '/trocar-senha',
                templateUrl: 'client/perfis/views/trocar-senha.html',
                controller: 'trocarSenhaController',
                controllerAs: 'tsc'
            })
            .state('recuperar-senha', {
                url: '/recuperar-senha',
                templateUrl: 'client/perfis/views/recuperar-senha.html',
                controller: 'recuperarSenhaController',
                controllerAs: 'rsc'
            })
            .state('cadastroPerfil', {
                url: '/cadastroPerfil',
                templateUrl: 'client/perfis/views/cadastroPerfil.html',
                controller: 'perfilController',
                controllerAs: 'pc'
            })
            /*para a home...*/
            .state('home', {
                url: '/',
                templateUrl: 'client/perfis/views/meuPerfil.html',
                controller: 'meuPerfilController',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                         return $meteor.waitForUser();
                    }]
                }
            })
            .state('proximaEtapa', {
                url: '/proximaEtapa',
                templateUrl: 'client/perfis/views/proximaEtapa.html',
                controller: 'proximaEtapaController'
            })
            /*para a lista de empresas*/
            .state('empresas', {
                url: '/empresas',
                templateUrl: 'client/empresa/views/empresas.html',
                controller: 'empresasController',
                controllerAs: 'ecs'
            })
            /*para ver os detahes da Empresa*/
            .state('DetalhesEmpresa', {
                url: '/detalhesEmpresa/:empresaId',
                templateUrl: 'client/empresa/views/empresaDetails.html',
                controller: 'empresaDetailsController',
                controllerAs: 'dc'
            })
            /*para o cadastro de Empresa*/
            .state('cadastroEmpresa', {
                url: '/cadastroEmpresa',
                templateUrl: 'client/empresa/views/cadastroEmpresa.html',
                controller: 'empresaController',
                controllerAs: 'ec'
            })
            /*para a página meu perfil*/
            .state('meuPerfil', {
                url: '/meuPerfil',
                templateUrl: 'client/perfis/views/meuPerfil.html',
                controller: 'meuPerfilController',
                conrollerAs: 'mpc',
                resolve: {
                    "currentUser": ["$meteor", function ($meteor) {
                         return $meteor.waitForUser();
                    }]
                }
            })
            /*para a página de login*/
            .state('login', {
                url: '/login',
                templateUrl: 'client/perfis/views/login.html',
                controller: 'loginController',
                controllerAs: 'lc',
                resolve: {
                    "currentUser": ["$meteor", "$rootScope", "$state", function ($meteor, $rootScope, $state) {
                        return $meteor.waitForUser();

                    }]
                }
            })
            //detalhes do perfil (quando um terceiro acessa o perfil)
            .state('perfilDetalhes',{
              url:'/perfis/:perfilId',
              templateUrl: 'client/perfis/views/perfilDetalhes.html',
              controller:'perfilDetalhesController',
              controllerAs:'pdc',
              resolve: {
                  "currentUser": ["$meteor", function ($meteor) {
                     return $meteor.waitForUser();
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
            })
            //pesquisar
            .state('pesquisar',{
              url:'/pesquisa/:query',
              templateUrl: 'client/pesquisa.html',
              controller: 'resultadoPesquisaController',
              controllerAs: 'rpc',
              resolve: {
                  "currentUser": ["$meteor", function ($meteor) {
                     return $meteor.waitForUser();
                  }]
              }
            });

        /*caso alguma merda acontença, redireciona pra página inicial. Caso isso aconteça abra ao debug e chore*/

        $urlRouterProvider.when('', '/');
        //$urlRouterProvider.otherwise('/404');

    }
]);
