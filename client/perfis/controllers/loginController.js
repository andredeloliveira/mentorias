/*Controller para lidar com o login dos usuários no sistema. */
angular.module("mentorias").controller("loginController",['$meteor', '$state',
  function($meteor, $state){
    var vm = this;
    /*incialização do objeto contendo as credenciais para o login e da variavel de erro.*/
    vm.credentials = {
      email: '',
      password: ''
    };
    vm.error = '';
    /*a função de login em si.*/
    vm.login = function(){
      $meteor.loginWithPassword(vm.credentials.email, vm.credential.password).then(
        function(){
          $state.go('/');
        }, function(err){
            vm.error = 'Erro de login - ' + err;
        }
      );
    };
  }]);
