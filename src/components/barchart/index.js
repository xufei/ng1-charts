import BarChartDirective from "./directives/bar";

export default angular.module("components.charts.barChart", [])
	.directive("ngBarChart", () => new BarChartDirective())
	.name;