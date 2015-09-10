import "../css/pie.css";

import template from "../templates/pie.html";

import PieChart from "../../../models/chart/pie";

export default class PieChartDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";

		this.scope = {
			data: "=",
			radius: "="
		};
	}

	link(scope, element, attrs) {
		this.$scope = scope;
	}

	controller($scope) {
		let chart = new PieChart();
		chart.width = 800;
		chart.height = 700;
		chart.radius = $scope.radius || 150;

		$scope.chart = chart;

		$scope.offsetLeft = 100;
		$scope.offsetTop = 50;


		$scope.$watch("data", function(newData) {
			chart.data = newData;
		}, true);
	}
}