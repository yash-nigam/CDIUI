var app = angular.module('app', ['ui.bootstrap']);
	app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, customer)
	{	$scope.customer = customer;	});

	app.controller('CustomerController', function($scope, $timeout,$modal,$log) 
	{$scope.customers = [
        	{name: 'Ricky',details: 'Some Details for Ricky',},
		{name: 'Dicky',details: 'Some Dicky Details',},
		{name: 'Nick	y',details: 'Some Nicky Details',}
				];
	$scope.open = function (_customer) 
		{ var modalInstance = $modal.open(
			{controller: "ModalInstanceCtrl",templateUrl: 'myModalContent.html',resolve: 
				{customer: function(){return _customer;}
            			}
			});

    		};
	});