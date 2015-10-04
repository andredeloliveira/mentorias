/**
 Controller responsável pelo Perfil. Aqui os métodos para Login, cadastro e busca de usuários são definidos.
 **/

angular.module("mentorias").controller("empresaController", ['$scope', '$stateParams', '$meteor', '$state',
    function ($scope, $stateParams, $meteor, $state) {


        /*usuário provenientes do servidor*/
        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
        $scope.images = $meteor.collection(Images, false, Images).subscribe('images');
        /*
         Variável que define a etapa do cadastro. Com ela, sera possível controlar o que será mostrado na view
         */
        $scope.etapaCadastro = 0;
        /*função que define as etapas do cadastro do Perfil.
         0 - Nome da empresa, produtos
         1 - Descrição da empresa;
         2 - Integrantes
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

        vm.empresa = {
          /*definir o objeto da empresa aqui*/

        };

        /*fazer a função para adicionar a empresa*/



        /*Aqui será definida a lógica para o controller das tags*/
        vm.readonly = false;
        vm.produtos = [];
        vm.integrantes = [];
        vm.tags = [];

        /*fim do controle das tags*/


    }
]);
