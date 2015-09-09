import angular from "angular";

import ChessController from "./controllers/chess";
import ChessBoardController from "./controllers/chessboard";

angular.module("chart", [])
	.controller("ChessController", ChessController)
	.controller("ChessBoardController", ChessBoardController);