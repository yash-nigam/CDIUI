    // create the module and name it cdiApp    
    var cdiApp = angular.module('RoutingApp', ['ngRoute','ui.bootstrap']);  
      
    // configure our routes    
    cdiApp.config(function($routeProvider) {  
        $routeProvider  
      
        // route for the home page    
        .when('#', {  
            templateUrl: 'cdiHomePage.html',  
            controller: 'mainController'  
        })
        
        .when('/', {  
            templateUrl: 'cdiHomePage.html',  
            controller: 'mainController'  
        })  
      
        // route for the about page    
        .when('/all', {  
            templateUrl: 'bar3loadjson.html',  
            controller: 'aboutController'  
        })  
      
        // route for the contact page    
        .when('/infrastructure', {  
            templateUrl: 'infraonly.html',  
            controller: 'contactController'  
        })
        
        // route for the contact page    
        .when('/busapps', {  
            templateUrl: 'busapps.html',  
            controller: 'contactController'  
        })
        
     // route for the contact page    
        .when('/eventincident', {  
            templateUrl: 'EventIncident.html',  
            controller: 'contactController'  
        })
        
        .when('/securitycompliance', {  
            templateUrl: 'SecurityCompliance.html',  
            controller: 'contactController'  
        })
        
        .otherwise({
    		redirectTo: '/all'
          });
        
      
    });  
      
    // create the controller and inject Angular's $scope    
    cdiApp.controller('mainController', function($scope) {  
        // create a message to display in our view    
        $scope.HomeMessage = 'Home Controller Called !!!';  
    });  
      
    cdiApp.controller('aboutController', function($scope) {  
        $scope.AboutMessage = 'About Controller Called !!!';  
    });  
      
    cdiApp.controller('contactController', function($scope) {  
        $scope.ContactMessage = 'Contact Controller Called !!!';  
    });
   
    cdiApp.controller('jsoncontroller', function($scope, $http,$uibModal) {
        $http.get('./js/jsondata.json').success(function(data) {
            $scope.jsondata = data;
        });
        $scope.orderProp = 'RANK';
        
        $scope.open = function (cdirecord){ 
       	 var modalInstance = $uibModal.open({
       		 	controller: "ModalInstanceCtrl",
       		 	templateUrl: 'cdiRecordDialog.html',
	     			resolve:{cdirecord: function(){return cdirecord;}
	        			}});};
    });
    
    cdiApp.controller('ModalInstanceCtrl', function($scope, $uibModalInstance,cdirecord) {
     	  $scope.ok = function() { $uibModalInstance.close(); };
     	  $scope.cdirecord = cdirecord;
     	  $scope.cancel = function() {
     	    $uibModalInstance.dismiss('cancel');
     	  };
     	});
    
    cdiApp.filter('unique', function() {
        return function(collection, keyname) {
            var output = [],
                keys = [];
    
            angular.forEach(collection, function(item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            return output;
        };
    });
