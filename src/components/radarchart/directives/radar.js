import template from "../templates/radar.html";

import RadarChart from "../../../models/chart/radar";

export default class RadarChartDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";

		this.scope = {
			data: "="
		};
	}

	link(scope, element, attrs) {
	}

	controller($scope) {
		let chart = new RadarChart();
		$scope.chart = chart;

		$scope.offsetLeft = 100;
		$scope.offsetTop = 50;

		chart.radius = $scope.radius || 150;

		chart.width = 2 * chart.radius;
		chart.height = 2 * chart.radius;


		$scope.$watch("data", function(newData) {
			chart.data = newData;
		}, true);
	}
}