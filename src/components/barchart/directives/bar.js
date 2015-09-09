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

		$scope.$watch("data", function(newData) {
			chart.data = newData;
		});
	}
}