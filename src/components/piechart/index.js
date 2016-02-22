import PieChartDirective from "./directives/pie";

export default angular.module("components.charts.pieChart", [])
	.directive("ngPieChart", () => new PieChartDirective())
	.name;