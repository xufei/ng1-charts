import template from "../templates/bar.html";

import BarChart from "../../../models/chart/bar";

export default class BarChartDirective {
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
		let chart = new BarChart();
		$scope.chart = chart;

		$scope.offsetLeft = 100;
		$scope.offsetTop = 50;

		chart.width = 600;
		chart.height = 400;

		$scope.$watch("data", function(newData) {
			chart.data = newData;
		}, true);
	}
}