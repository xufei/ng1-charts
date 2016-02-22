import template from "../templates/line.html";

import LineChart from "../../../models/chart/line";

export default class LineChartDirective {
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
		let chart = new LineChart();
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