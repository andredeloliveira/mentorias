/**
 Controller responsável pelo Perfil. Aqui os métodos para Login, cadastro e busca de usuários são definidos.
 **/

angular.module("mentorias").controller("perfilController", ['$scope', '$stateParams', '$meteor', '$state',
    function ($scope, $stateParams, $meteor, $state) {


        /*usuário provenientes do servidor*/
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
        /*
         Variável que define a etapa do cadastro. Com ela, sera possível controlar o que será mostrado na view
         */
        $scope.etapaCadastro = 0;
        /*função que define as etapas do cadastro do Perfil.
         0 - Nome, e-mail, senha e tipo do perfil (mentor ou empreendedor)
         1 - Descrição profissional;
         2 - Tags de expertise
         3 - Redes sociais e foto do perfil
         */

        /*Mostra a etapa na view através do ng-show*/
        $scope.mostrarEtapa = function (etapa) {
            return etapa === $scope.etapaCadastro;
        }
        /*Seleciona a proxima etapa que irá para a view*/
        $scope.setProximaEtapa = function () {
            $scope.etapaCadastro = $scope.etapaCadastro + 1;
        }
        /*Seleciona a etapa Anterior do cadastro*/
        $scope.setEtapaAnterior = function () {
            if ($scope.etapaCadastro === 0)
                $scope.etapaCadastro = 0;
            else
                $scope.etapaCadastro = $scope.etapaCadastro - 1;
        }


        /*Daqui pra baixo, a lógica é com as sintax do controllerAs definido no route.js ...*/

        var vm = this;

        vm.error = '';

        /*Precisamos fazer uma função customizada pra adicionar o tipo (mentor/empreendedor), etc, etc*/
        /*Os campos para página do facebook, twitter e linkedIn estão também. Só a URL será adicionada, logo
         Não poderemos obter a foto do perfil do facebook. Somente se o perfil tiver ligaçao com OAuth2.0!
         */
        vm.register = function (nUser) {

            vm.credentials = {
                email: nUser.email,
                password: nUser.senha,
                createdAt: new Date(),
                profile: {
                    name: nUser.nome,
                    breve_descricao: nUser.breve_descricao,
                    tipo_conta: nUser.tipo_conta,
                    genero: nUser.genero,
                    expertise: vm.tagNames,
                    facebook: nUser.facebook_page,
                    twitter: nUser.twitter_profile,
                    linkedIn: nUser.linkedIn
                },
                services: {
                    facebook: {
                        id: "", // facebook id
                        accessToken: "" // facebook tooken
                    },
                    resume: {
                        loginTokens: [
                            {
                                token: "",
                                when: ""
                            }
                        ]
                    }
                }
            };

            $meteor.createUser(vm.credentials).then(
                function () {
                    /*aqui é onde decide se vai a proxima etapa do empreendedor ou do mentor.
                     Que deve ser adicionada depois, assim como qualquer outra condição depois do cadastro ;)*/
                    if (vm.credentials.profile.tipo_conta === 'empreendedor') {
                        console.log(vm.credentials);
                        $state.go('proximaEtapa');
                    } else {
                        $state.go('home');
                    }
                }, function (err) {
                    vm.error = 'Erro de registro - ' + err;
                }
            );
        }

        /*Aqui será definida a lógica para o controller das tags*/
        vm.readonly = false;
        vm.tagNames = [];
        vm.tags = [];


        /*fim do controle das tags*/


    }
]);
