"use strict";

import PieChartDirective from "./directives/pie";

import DirectiveFactory from "../../utils/directive";

export default angular.module("components.charts.pieChart", [])
	.directive("ngPieChart", DirectiveFactory.create(PieChartDirective))
	.name;