"use strict";

export default class ChartController {
	constructor($scope) {
		$scope.chart = [{
			data: [8, 2, 11, 7, 40, 21]
		}];
	}
}

ChartController.$inject = ["$scope"];