
import ChartController from "./controllers/chart";

import components from "./components/index"

angular.module("chart", [components])
	.controller("ChartController", ChartController);