"use strict";

import RadarChartDirective from "./directives/radar";

import DirectiveFactory from "../../utils/directive";

export default angular.module("components.charts.radarChart", [])
	.directive("ngRadarChart", DirectiveFactory.create(RadarChartDirective))
	.name;