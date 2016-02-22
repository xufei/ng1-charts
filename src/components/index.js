import barChart from "./barchart/index";
import lineChart from "./linechart/index";
import pieChart from "./piechart/index";
import radarChart from "./radarchart/index";

export default angular.module("components", [barChart, lineChart, pieChart, radarChart]).name;