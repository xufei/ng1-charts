"use strict";

import barChart from "./barchart/index";
import pieChart from "./piechart/index";
import radarChart from "./radarchart/index";


export default angular.module("components", [barChart, pieChart, radarChart]).name;