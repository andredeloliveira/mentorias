/*Controller para lidar com o login dos usuários no sistema. */
angular.module("mentorias").controller("loginController", ['$scope', '$meteor', '$state',
    function ($scope, $meteor, $state) {
        var vm = this;

        /*incialização do objeto contendo as credenciais para o login e da variavel de erro.*/
        $scope.error = '';
        $scope.err = null;
        $scope.aUser = null;

        /*a função de login em si.*/
        $scope.login = function (aUser) {

            $meteor.loginWithPassword(aUser.email, aUser.senha, handleError);

            function handleError(err) {
                if (err === undefined || err == "undefined" ) {
                      console.log(err +'erro indefinido');
                      $meteor.next();
                    if (Meteor.user()) {
                      console.log(err +'tenho um usuario');
                      $meteor.next();   
                    }
                }
                console.log(err);
                if (err) {
                    //err.error = 'Erro de login - ' + err;
                    if (err.reason == 'User not found') {
                        $scope.error = 'Usuário não encontrado!';
                    } else if (err.reason == 'Incorrect password') {
                        $scope.error = 'Senha incorreta!';
                    } else {
                        $scope.error = 'Ocorreu uma falha na comunicação!';
                    }

                } else {
                    $state.go('meuPerfil');
                }
            }
        }
    }
]);
