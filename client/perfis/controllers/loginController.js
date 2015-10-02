/*Controller para lidar com o login dos usuários no sistema. */
angular.module("mentorias").controller("loginController", ['$scope', '$meteor', '$state',
    function ($scope, $meteor, $state) {
        var vm = this;

        /*incialização do objeto contendo as credenciais para o login e da variavel de erro.*/

        vm.error = '';

        /*a função de login em si.*/
        $scope.login = function (aUser) {

            $meteor.loginWithPassword(aUser.email, aUser.senha).then(
                function () {
                    $state.go('home');
                }, function (err) {
                    vm.error = 'Erro de login - ' + err;
                }
            );
        }
    }
]);
