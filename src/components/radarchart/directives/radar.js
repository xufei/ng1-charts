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

		$scope.$watch("data", function(newData) {
			chart.data = newData;
		}, true);
	}
}