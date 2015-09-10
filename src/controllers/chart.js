"use strict";

export default class ChartController {
	constructor($scope) {
		$scope.charts = [{
			data: [8, 2, 15, 7, 40, 21]
		}];
	}
}

ChartController.$inject = ["$scope"];