"use strict";

export default class ChartController {
	constructor($scope) {
		$scope.barChart = [{
			data: [8, 6, 11, 7, 5, 40, 21]
		}];
	}
}

ChartController.$inject = ["$scope"];