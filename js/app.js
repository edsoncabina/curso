var myApp = angular.module('myApp',['ngMessages']);

myApp.controller("mainController",function($scope,$log,$filter){
    
    /**
     //$log= metodo semelhante ao console do js
     $log.log("Olá");
    $log.info("Informação");
    $log.warn("Aviso");
    $log.debug("Debug");
    $log.error("Erro");;
     */
    $scope.nome = "Edson";
    $scope.nomeFormatado = $filter('uppercase')($scope.nome);

    $log.info($scope.nome);
    $log.info($scope.nomeFormatado);



    
    //console.log($log);
});
