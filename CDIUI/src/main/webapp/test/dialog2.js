app = angular.module('app', ['ui.bootstrap']);

app.controller('MyController', function($scope, $uibModal, $log) {
	  $scope.chkbxNoIncome = false;

	  $scope.clearInputFields = function() {


	    if ($scope.chkbxNoIncome) {
	      var modalInstance = $uibModal.open({
	        templateUrl: 'noIncomeMessage.html',
	        controller: 'ModalInstanceCtrl'
	      });
	    }

	  };

	});

app.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {
	  $scope.ok = function() {
	    $uibModalInstance.close();
	  };

	  $scope.cancel = function() {
	    $uibModalInstance.dismiss('cancel');
	  };
	});