var myApp = angular.module('myApp',[]);

/**
 myApp.controller("mainController",function($scope,$log){

    $log.log($scope);    
    
});
 */
/**
 * Minificar
myApp.controller("mainController",['$scope','$log',function($scope,$log){

    $log.log($scope);    
    
}]);
myApp.controller("mainController",["$scope","$log",function(o,l){l.log(o)}]);
 */

myApp.controller("mainController",function($scope,$log){

    $log.log($scope);    
    
});
