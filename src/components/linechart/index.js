import LineChartDirective from "./directives/line";

export default angular.module("components.charts.lineChart", [])
	.directive("ngLineChart", () => new LineChartDirective())
	.name;