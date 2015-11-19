/*Controller para lidar com a página de visualização das empresas. */
angular.module("mentorias").controller("empresasController", ['$scope', '$meteor', '$state',
    function ($scope, $meteor, $state) {
        var vm = this;
        //fetch the empresas in the collection created in the /model/empresas.js
        $scope.empresas = $meteor.collection(Empresas);
       
        $scope.error = '';
    }
]);
