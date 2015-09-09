"use strict";

import BarChartDirective from "./directives/bar";

import DirectiveFactory from "../../utils/directive";

export default angular.module("components.charts.barChart", [])
	.directive("ngBarChart", DirectiveFactory.create(BarChartDirective))
	.name;