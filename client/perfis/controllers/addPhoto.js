angular.module("mentorias").controller("AddPhotoController", ['$scope', '$meteor', '$rootScope', '$state', '$mdDialog',
    function ($scope, $meteor, $rootScope, $state, $mdDialog) {
    //https://gist.github.com/Whoaa512/4596611	
    	Accounts.onCreateUser(function(options, user) {
		    if (options.profile) {
		        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
		        user.profile = options.profile;
		    }
		    return user;
		});

     // $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');


        $scope.close = $mdDialog.hide;
    }
]);
