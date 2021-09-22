var app = angular.module('codefaceApp', ['$strap.directives']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
	    .when('/home', { templateUrl: 'home.html' })
            .when('/projects', { templateUrl: 'projects.html' })
            .otherwise({redirectTo: '/home'});
    }]);     

app.controller('codefaceCtrl', function($scope, $window, $location) {
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
	if ($location.path().startsWith("/examples")) {
	    $("#dropdown").addClass("active");
	} else {
	    $("#dropdown").removeClass("active");
	}
    });
});
