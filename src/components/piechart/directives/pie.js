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
		$scope.chart = chart;

		chart.width = 800;
		chart.height = 700;

		$scope.chartTransform = function() {
			return "scale(1, -1) translate("
				+ (chart.offsetLeft + $scope.radius)
				+ ", "
				+ (-chart.offsetTop - $scope.radius) + ")";
		};

		$scope.legendTransform = function() {
			return "translate(" + (chart.offsetLeft + 2 * $scope.radius + 10) + ", 50)";
		};

		$scope.path = function (index) {
			var rx = $scope.radius;
			var ry = $scope.radius;

			var start;
			if (index == 0) {
				start = 0;
			}
			else {
				start = 2 * Math.PI * $scope.position[index - 1] / $scope.total;
			}
			var stop = 2 * Math.PI * $scope.position[index] / $scope.total;

			var e1x = rx * Math.cos(start);
			var e1y = rx * Math.sin(start);
			var e2x;
			var e2y;
			var e3x;
			var e3y;

			if (stop - start < Math.PI) {
				e2x = ry * Math.cos(stop);
				e2y = ry * Math.sin(stop);
				e3x = e2x;
				e3y = e2y;
			} else {
				e2x = ry * Math.cos(Math.PI);
				e2y = ry * Math.sin(Math.PI);
				e3x = ry * Math.cos(stop);
				e3y = ry * Math.sin(stop);
			}

			var path = "M 0, 0 " + e1x + "," + e1y +
				"A" + rx + "," + ry + " 1 0,1 " + e2x + "," + e2y +
				"A" + rx + "," + ry + " 1 0,1 " + e3x + "," + e3y + "z";
			return path;
		};

		$scope.$watch("data", function(newData) {
			chart.data = newData;

			$scope.total = 0;
			$scope.position = [];

			for (var i = 0; i < $scope.data[0].data.length; i++) {
				$scope.total += $scope.data[0].data[i];
				$scope.position.push($scope.total);
			}
		}, true);
	}
}