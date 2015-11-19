angular.module('mentorias', ['angular-meteor','ui.router','ngMaterial']);

var themeIcons = ['$mdIconProvider' , function ($mdIconProvider) {

  $mdIconProvider
    .iconSet("config", "/resources/icones/Configuracoes.ico")
    .iconSet("logoff", "/resources/icones/Sair.ico")


}];

angular.module('mentorias')
  .config(themeIcons)
  .filter('range', function() {
    return function(input, total) {
      total = parseInt(total);

      for (var i=0; i<total; i++) {
        input.push(i);
      }

      return input;
    };
  });


function onReady() {
  angular.bootstrap(document, ['mentorias']);
}

var query = '';
