angular.module("mentorias").controller("AddPhotoController", ['$scope', '$meteor', '$rootScope', '$state', '$mdDialog',
  function($scope, $meteor, $rootScope, $state, $mdDialog) {
    $scope.addImages = function (files) {
      if (files.length > 0) {
        // if I want to save it -> $scope.images.save(files[0]);
        //but I want to keep it on the memory(node.js) so..

        var reader = new FileReader();
        reader.onload = function(e){
          $scope.apply(function(){
            $scope.imgSrc = e.target.result;
          });
        };
        reader.readAsDataURL(files[0]);
      }else{
        $scope.imgSrc = undefined;
      }
    };

    $scope.close = $mdDialog.hide;
  }]);
