var app = angular.module('LatestWorkCtrlModule',['invoiceService']);

app.controller('LatestWorkCtrl', ['$scope','$http', function($scope, $http) {
  
 $scope.User = {};
        $scope.errorMessage = '';

$scope.name = "testsasd";
     // when landing on the page, get all todos and show them
    $http.get('api/invoices')
        .success(function(data) {
            $scope.invoices = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
 
}]);