angular.module('simplest', ['services'])

.controller('emailCtrl', ['$scope', 'messagesService', function($scope, messagesService) {
	'use strict';
	
	$scope.messages   = messagesService.getAll();
	$scope.selMessage = $scope.messages[1];
	$scope.selType    = 'inbox';

	$scope.selectMessage = function(message) {
		$scope.selMessage = message;
	};

	$scope.closeMessage = function() {
		$scope.selMessage = null;
	};

	$scope.changeType = function(obj) {
		obj.preventDefault();

		var type = obj.target.attributes['data-type'];

		if (type && type.value !== $scope.selType) {
			$scope.search  = '';
			$scope.selType = type.value;
			$scope.closeMessage();
		}
	};
}])

// get first fragment of message up to the first comma
.filter('firstFragment', function() {
    'use strict';

    return function(input) {
        return input.slice(0, input.indexOf(','));
    };
})

.directive('inboxCount', ['$filter', 'messagesService', function($filter, messagesService) {
	'use strict';

	return {
		restrict: 'A',
		controller: function($scope) {
			var messages = messagesService.getAll();

			$scope.$watch('selType', function() {
				$scope.inboxCount = $filter('filter')(messages, { type: $scope.selType }).length;
			});
		}
	};
}])
