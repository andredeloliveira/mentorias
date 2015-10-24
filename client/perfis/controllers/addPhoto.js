angular.module("mentorias").controller("AddPhotoController", ['$scope', '$meteor', '$rootScope', '$state', '$mdDialog',
    function ($scope, $meteor, $rootScope, $state, $mdDialog) {
//      $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');


        $scope.close = $mdDialog.hide;
    }
]);
