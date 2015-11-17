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
            //console.log(aUser + 'object aUser');
            try{

                $meteor.loginWithPassword(aUser.email, aUser.senha, handleError);
    
            }catch(err){


                function handleError(err) {
                    console.log(err+" erro tipo");
                    if (err){
                        if (err.reason == 'User not found') {
                            $scope.error = 'Usuário não encontrado!';
                        } else if (err.reason == 'Incorrect password') {
                            $scope.error = 'Senha incorreta!';
                        } else if(err.reason == 'NaN'){
                            $scope.error = "Erro handle  NaN";
                        }else if(err.reason == 'undefined'){
                            $scope.error = "Erro undefined";
                        }else if(err == 'undefined'){
                            $scope.error = "Erro indefinido";
                            Meteor._reload.reload("home");
                        } else {
                            $scope.error = 'Ocorreu uma falha na comunicação!';
                        }
                    } else {
                        //Meteor._reload.reload();
                        $state.go('home');
                    }
                }


            }
            
             
        }
    }
]);
