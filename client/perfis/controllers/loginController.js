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

            if (aUser == null || aUser.email == '' ) {
                $scope.error = "Digite email e nome";
            };
            console.log(aUser + 'object aUser');

            $meteor.loginWithPassword(aUser.email, aUser.senha, handleError);

            function handleError(err) {
                console.log(err + 'error aqui')
                if (err == null || err == "NaN" || err == undefined) {
                    $scope.error = 'Erro de login - ' + err ;
                        for(obj in aUser){
                            console.log(obj);    
                        }
                        for(errrinho in err){
                            console.log(errrinho);    
                        }
                    }
                    if (err.reason == 'User not found') {
                        $scope.error = 'Usuário não encontrado!';
                    } else if (err.reason == 'Incorrect password') {
                        $scope.error = 'Senha incorreta!';
                    } else if(err.reason == 'NaN'){
                        $scope.error = "Erro handle  NaN";
                    } else if(err.reason == undefined){
                        $scope.error = "Digite Nome e Email por favor";
                    } else {
                        $scope.error = 'Ocorreu uma falha na comunicação!';
                    }
                } else {
                    $state.go('home');
                }
            }    
        }
    }
]);
