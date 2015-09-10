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
		this.$scope = scope;
	}

	controller($scope) {
		let chart = new RadarChart();
		$scope.chart = chart;

		$scope.offsetLeft = 100;
		$scope.offsetTop = 50;

		chart.width = 600;
		chart.height = 300;


		$scope.$watch("data", function(newData) {
			chart.data = newData;
		}, true);
	}
}