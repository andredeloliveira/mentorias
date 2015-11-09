angular.module('mentorias', ['angular-meteor','ui.router','ngMaterial']);

var themeIcons = ['$mdIconProvider' , function ($mdIconProvider) {

  $mdIconProvider
    .iconSet("config", "/resources/icones/Configuracoes.ico")
    .iconSet("logoff", "/resources/icones/Sair.ico")


}];

angular.module('mentorias')
  .config(themeIcons);

function onReady() {
  angular.bootstrap(document, ['socially']);
}

