/**
 Controller responsável pelo Perfil. Aqui os métodos para Login, cadastro e busca de usuários são definidos.
 **/

angular.module("mentorias").controller("perfilController", ['$scope', '$stateParams', '$meteor', '$state',
    function ($scope, $stateParams, $meteor, $state) {


        /*usuário provenientes do servidor*/
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
        $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
        $scope.tempImage = {};
        $scope.feedbackUpload = false;

        /*controle de imagens de usuário. A função add temp foi adicionada pra não criar um gargalo no banco.
          Antes a foto era adicionada pelo simples fato de clicar no botão de procurar e escolher a foto.
          Agora o botão upload foi adicionado.
        */

        $scope.addTempImage = function(images){
          $scope.tempImage = images[0];
          console.log('image on the temp var');
        };



        $scope.addImages = function () {
            /*Uma referencia da imagem do perfil é salva no nUser, que é o objeto
            criado na view, que será inserido no banco. A imagem está em uma collection diferente
            da do usuário, ou seja, aqui só tem uma referencia ao objeto, que é buscado
            na view meuPerfil.ng.html*/
            var fileObj = Images.insert($scope.tempImage, function(err, fileObj){
              if(err)
                console.log('erro no upload '+ err);
              return fileObj;
            });
            $scope.nUser.profilePic = fileObj;
            $scope.feedbackUpload = true;
            console.log($scope.nUser);


        };

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


        /*Os campos para página do facebook, twitter e linkedIn estão também. Só a URL será adicionada, logo
         Não poderemos obter a foto do perfil do facebook. Somente se o perfil tiver ligaçao com OAuth2.0!
         */
        vm.register = function (nUser) {
          console.log('entered the register function');

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
                    facebook: nUser.facebook,
                    twitter: nUser.twitter,
                    linkedIn: nUser.linkedIn,
                    profilePic: nUser.profilePic,
                    stars: 0,
                    horasMentorias:0,
                    badges: 0
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
            console.log(vm.credentials);

            $meteor.createUser(vm.credentials).then(
                function () {
                  console.log('entered the createUser function')
                    /*aqui é onde decide se vai a proxima etapa do empreendedor ou do mentor.
                     Que deve ser adicionada depois, assim como qualquer outra condição depois do cadastro ;*/
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
