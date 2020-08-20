var myApp = angular.module('myApp',[]);

myApp.controller("mainController",function($scope){
    $scope.name = "Edson";
    $scope.ocupacao ="Desenvolvedor";
    $scope.getNome = function (){
        return "Edson Cabina";
    };
    
    console.log($scope);

});