/*Controller para lidar com o login dos usuários no sistema. */
angular.module("mentorias").controller("loginController", ['$scope', '$meteor', '$state', 
    function ($scope, $meteor, $state) {
        var vm = this;

        /*incialização do objeto contendo as credenciais para o login e da variavel de erro.*/

        $scope.error = '';

        /*a função de login em si.*/
        $scope.login = function (aUser) {
            console.log(aUser + 'object aUser');
             
             var i=0;
             
             for(var objeto in aUser){
                value= objeto+' '+aUser[objeto];
                i++;
             }
          if (aUser == 'undefined' || aUser == "NaN") {
            $scope.error = 'preencha os campos nome e email';
          }else if (aUser.email == 'undefined' || aUser.email == ""){
            $scope.error = 'preencha o campo email';
          }else if (aUser.email == 'undefined' || aUser.email == ""){
            $scope.error = 'preencha o campo senha';
          }else{
            $meteor.loginWithPassword(aUser.email, aUser.senha, handleError);
          }
            function handleError(err) {
       
                if (err == undefined || handleError == "NaN") {
                    $scope.error = 'Erro de login - ' + err + handleError;
                    if (err.reason == 'User not found') {
                        $scope.error = 'Usuário não encontrado!';
                    } else if (err.reason == 'Incorrect password') {
                        $scope.error = 'Senha incorreta!';
                    } else if(err.reason == 'NaN'){
                        $scope.error = "Erro handle  NaN";
                            $meteor._reload.reload('home'); 
                    } else if(err.reason == 'undefined'){
                        $scope.error = "Digite Nome e Email por favor";
                            $meteor._reload.reload('home'); 
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
