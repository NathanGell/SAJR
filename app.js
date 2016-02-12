/* App JS */


(function(){

    var app = angular.module('quoteMachine', []);
    
    app.controller('QuoteController', function($scope, $http){
        
        
        this.newQuote = function(){
            $http.get('http://api.icndb.com/jokes/random?firstName=Jarryd&lastName=Rogers&escape=javascript').success(function(response){
                $scope.quote = response.value.joke;
                console.log(response.value.joke);
            });
        };
        
        
    
    });
    

})();
