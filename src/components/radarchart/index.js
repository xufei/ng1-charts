import RadarChartDirective from "./directives/radar";

export default angular.module("components.charts.radarChart", [])
	.directive("ngRadarChart", () => new RadarChartDirective())
	.name;