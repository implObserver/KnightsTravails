"use strict";
(self["webpackChunkknightstravails"] = self["webpackChunkknightstravails"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/board */ "./src/models/board.js");
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/knightMovesHandler */ "./src/models/knightMovesHandler.js");
/* harmony import */ var _models_knightMovesTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/knightMovesTree */ "./src/models/knightMovesTree.js");




let board = _models_board__WEBPACK_IMPORTED_MODULE_0__.Board.getBoard();

let root = _models_knightMovesTree__WEBPACK_IMPORTED_MODULE_2__.KnightMovesTree.getRoot();

let res = (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_1__.knightMovesHandler)().getPath(board[0][0], board[0][0]);

res.forEach((element) => {
  console.log(element.getCoordinates());
});


/***/ }),

/***/ "./src/models/board.js":
/*!*****************************!*\
  !*** ./src/models/board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/models/node.js");


const Board = (() => {
  let board = [];
  const createBoard = (() => {
    for (let i = 0; i < 8; i++) {
      let line = [];
      for (let j = 0; j < 8; j++) {
        const node = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(i, j);
        line.push(node);
      }
      board.push(line);
    }
  })();

  const getBoard = () => {
    return board;
  };

  return { createBoard, getBoard };
})();


/***/ }),

/***/ "./src/models/knightMovesHandler.js":
/*!******************************************!*\
  !*** ./src/models/knightMovesHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightMovesHandler: () => (/* binding */ knightMovesHandler)
/* harmony export */ });
const knightMovesHandler = () => {
  let maxDeep = 4;
  let levelStart = -1;
  let levelEnd = 0;
  let startPath = [];
  let endPath = [];
  let levelStartPointChildrens = [];
  let levelEndPointChildrens = [];

  const getPath = (start, end) => {
    if (start === end) {
      return [start];
    }

    fillingChildMoves([start], "start");
    fillingChildMoves([end], "end");

    const path = [...buildPath(start, end)];
    return path;
  };

  const fillingChildMoves = (point, flag) => {
    for (let i = 0; i < maxDeep; i++) {
      point = setChildrens(point, flag);
    }
  };

  const setChildrens = (pointChildrens, flag = "start") => {
    let childrens = [];
    pointChildrens.forEach((child) => {
      if (child !== null && child !== undefined) {
        childrens = childrens.concat(child.getMoves());
      }
    });
    childrens = new Set(childrens.filter((n) => n));
    childrens = [...childrens];
    flag === "start"
      ? levelStartPointChildrens.push(childrens)
      : levelEndPointChildrens.push(childrens);
    return childrens;
  };

  const buildPath = (start, end) => {
    let intersectPoint = getIntersectPoint();
    buildEndPath(intersectPoint);
    buildStartPath(intersectPoint);
    const path = startPath.filter((n) => n).concat(endPath.filter((n) => n));
    path.unshift(start);
    path.push(end);
    return new Set(path);
  };

  const getIntersectPoint = () => {
    let intersectPoints = [];
    while (intersectPoints.length === 0) {
      levelStart < levelEnd ? ++levelStart : ++levelEnd;
      intersectPoints = checkChildrens(
        levelEndPointChildrens[levelStart],
        levelStartPointChildrens[levelEnd],
      );
    }
    clearChilds();
    endPath.push(intersectPoints[0]);
    return intersectPoints[0];
  };

  const buildEndPath = (intersectPoint) => {
    if (levelEndPointChildrens.length === 0) {
      return;
    } else {
      let intersectPoints = checkChildrens(
        intersectPoint.getMoves(),
        levelEndPointChildrens.pop(),
      );
      endPath.push(intersectPoints[0]);
      buildEndPath(intersectPoints[0]);
    }
  };

  const buildStartPath = (intersectPoint) => {
    if (levelStartPointChildrens.length === 0) {
      return;
    } else {
      let intersectPoints = checkChildrens(
        intersectPoint.getMoves(),
        levelStartPointChildrens.pop(),
      );
      startPath.push(intersectPoints[0]);
      buildStartPath(intersectPoints[0]);
    }
  };

  const checkChildrens = (startChildrens, endChildrens) => {
    const common = startChildrens.filter(
      (child) => endChildrens.indexOf(child) !== -1,
    );
    return common;
  };

  const clearChilds = () => {
    for (let i = 0; i < maxDeep - levelEnd; i++) {
      if (levelEndPointChildrens.length > 1) {
        levelEndPointChildrens.pop();
      }
    }
    for (let i = 0; i < maxDeep - levelStart; i++) {
      if (levelStartPointChildrens.length > 1) {
        levelStartPointChildrens.pop();
      }
    }
  };

  return { getPath };
};


/***/ }),

/***/ "./src/models/knightMovesTree.js":
/*!***************************************!*\
  !*** ./src/models/knightMovesTree.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnightMovesTree: () => (/* binding */ KnightMovesTree)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/models/board.js");


const buildTree = (() => {
  const arr = _board__WEBPACK_IMPORTED_MODULE_0__.Board.getBoard();
  const processedArrayToTree = () => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let node = arr[j][i];
        node.setMove(getNode(j - 2, i - 1), 0);
        node.setMove(getNode(j - 1, i - 2), 1);
        node.setMove(getNode(j + 1, i - 2), 2);
        node.setMove(getNode(j + 2, i - 1), 3);
        node.setMove(getNode(j + 2, i + 1), 4);
        node.setMove(getNode(j + 1, i + 2), 5);
        node.setMove(getNode(j - 1, i + 2), 6);
        node.setMove(getNode(j - 2, i + 1), 7);
      }
    }
  };

  const getNode = (x, y) => {
    try {
      return arr[x][y];
    } catch {
      return null;
    }
  };

  return { processedArrayToTree };
})();

const KnightMovesTree = (() => {
  const root = buildTree.processedArrayToTree();
  const getRoot = () => {
    return root;
  };

  return { getRoot };
})();


/***/ }),

/***/ "./src/models/node.js":
/*!****************************!*\
  !*** ./src/models/node.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
const Node = (cX, cY) => {
  const x = cX;
  const y = cY;

  let moves = [8];

  const setMove = (node, index) => {
    moves[index] = node;
  };

  const getMoves = () => {
    return moves;
  };

  const getCoordinates = () => {
    return [cX, cY];
  };

  return { setMove, getMoves, getCoordinates };
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDMEI7QUFDTjs7QUFFM0QsWUFBWSxnREFBSzs7QUFFakIsV0FBVyxvRUFBZTs7QUFFMUIsVUFBVSw4RUFBa0I7O0FBRTVCO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWjZCOztBQUV2QjtBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHNCQUFzQixPQUFPO0FBQzdCLHFCQUFxQiwyQ0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQk07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDakhnQzs7QUFFaEM7QUFDQSxjQUFjLHlDQUFLO0FBQ25CO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdENNO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2tuaWdodE1vdmVzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2tuaWdodE1vdmVzVHJlZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL25vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9tb2RlbHMvYm9hcmRcIjtcbmltcG9ydCB7IGtuaWdodE1vdmVzSGFuZGxlciB9IGZyb20gXCIuL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IEtuaWdodE1vdmVzVHJlZSB9IGZyb20gXCIuL21vZGVscy9rbmlnaHRNb3Zlc1RyZWVcIjtcblxubGV0IGJvYXJkID0gQm9hcmQuZ2V0Qm9hcmQoKTtcblxubGV0IHJvb3QgPSBLbmlnaHRNb3Zlc1RyZWUuZ2V0Um9vdCgpO1xuXG5sZXQgcmVzID0ga25pZ2h0TW92ZXNIYW5kbGVyKCkuZ2V0UGF0aChib2FyZFswXVswXSwgYm9hcmRbMF1bMF0pO1xuXG5yZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50LmdldENvb3JkaW5hdGVzKCkpO1xufSk7XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5leHBvcnQgY29uc3QgQm9hcmQgPSAoKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXTtcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IE5vZGUoaSwgaik7XG4gICAgICAgIGxpbmUucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1c2gobGluZSk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVCb2FyZCwgZ2V0Qm9hcmQgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3Qga25pZ2h0TW92ZXNIYW5kbGVyID0gKCkgPT4ge1xuICBsZXQgbWF4RGVlcCA9IDQ7XG4gIGxldCBsZXZlbFN0YXJ0ID0gLTE7XG4gIGxldCBsZXZlbEVuZCA9IDA7XG4gIGxldCBzdGFydFBhdGggPSBbXTtcbiAgbGV0IGVuZFBhdGggPSBbXTtcbiAgbGV0IGxldmVsU3RhcnRQb2ludENoaWxkcmVucyA9IFtdO1xuICBsZXQgbGV2ZWxFbmRQb2ludENoaWxkcmVucyA9IFtdO1xuXG4gIGNvbnN0IGdldFBhdGggPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgICByZXR1cm4gW3N0YXJ0XTtcbiAgICB9XG5cbiAgICBmaWxsaW5nQ2hpbGRNb3Zlcyhbc3RhcnRdLCBcInN0YXJ0XCIpO1xuICAgIGZpbGxpbmdDaGlsZE1vdmVzKFtlbmRdLCBcImVuZFwiKTtcblxuICAgIGNvbnN0IHBhdGggPSBbLi4uYnVpbGRQYXRoKHN0YXJ0LCBlbmQpXTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBjb25zdCBmaWxsaW5nQ2hpbGRNb3ZlcyA9IChwb2ludCwgZmxhZykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RGVlcDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHNldENoaWxkcmVucyhwb2ludCwgZmxhZyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldENoaWxkcmVucyA9IChwb2ludENoaWxkcmVucywgZmxhZyA9IFwic3RhcnRcIikgPT4ge1xuICAgIGxldCBjaGlsZHJlbnMgPSBbXTtcbiAgICBwb2ludENoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gY2hpbGRyZW5zLmNvbmNhdChjaGlsZC5nZXRNb3ZlcygpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaGlsZHJlbnMgPSBuZXcgU2V0KGNoaWxkcmVucy5maWx0ZXIoKG4pID0+IG4pKTtcbiAgICBjaGlsZHJlbnMgPSBbLi4uY2hpbGRyZW5zXTtcbiAgICBmbGFnID09PSBcInN0YXJ0XCJcbiAgICAgID8gbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLnB1c2goY2hpbGRyZW5zKVxuICAgICAgOiBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLnB1c2goY2hpbGRyZW5zKTtcbiAgICByZXR1cm4gY2hpbGRyZW5zO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkUGF0aCA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgbGV0IGludGVyc2VjdFBvaW50ID0gZ2V0SW50ZXJzZWN0UG9pbnQoKTtcbiAgICBidWlsZEVuZFBhdGgoaW50ZXJzZWN0UG9pbnQpO1xuICAgIGJ1aWxkU3RhcnRQYXRoKGludGVyc2VjdFBvaW50KTtcbiAgICBjb25zdCBwYXRoID0gc3RhcnRQYXRoLmZpbHRlcigobikgPT4gbikuY29uY2F0KGVuZFBhdGguZmlsdGVyKChuKSA9PiBuKSk7XG4gICAgcGF0aC51bnNoaWZ0KHN0YXJ0KTtcbiAgICBwYXRoLnB1c2goZW5kKTtcbiAgICByZXR1cm4gbmV3IFNldChwYXRoKTtcbiAgfTtcblxuICBjb25zdCBnZXRJbnRlcnNlY3RQb2ludCA9ICgpID0+IHtcbiAgICBsZXQgaW50ZXJzZWN0UG9pbnRzID0gW107XG4gICAgd2hpbGUgKGludGVyc2VjdFBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGxldmVsU3RhcnQgPCBsZXZlbEVuZCA/ICsrbGV2ZWxTdGFydCA6ICsrbGV2ZWxFbmQ7XG4gICAgICBpbnRlcnNlY3RQb2ludHMgPSBjaGVja0NoaWxkcmVucyhcbiAgICAgICAgbGV2ZWxFbmRQb2ludENoaWxkcmVuc1tsZXZlbFN0YXJ0XSxcbiAgICAgICAgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zW2xldmVsRW5kXSxcbiAgICAgICk7XG4gICAgfVxuICAgIGNsZWFyQ2hpbGRzKCk7XG4gICAgZW5kUGF0aC5wdXNoKGludGVyc2VjdFBvaW50c1swXSk7XG4gICAgcmV0dXJuIGludGVyc2VjdFBvaW50c1swXTtcbiAgfTtcblxuICBjb25zdCBidWlsZEVuZFBhdGggPSAoaW50ZXJzZWN0UG9pbnQpID0+IHtcbiAgICBpZiAobGV2ZWxFbmRQb2ludENoaWxkcmVucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGludGVyc2VjdFBvaW50cyA9IGNoZWNrQ2hpbGRyZW5zKFxuICAgICAgICBpbnRlcnNlY3RQb2ludC5nZXRNb3ZlcygpLFxuICAgICAgICBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLnBvcCgpLFxuICAgICAgKTtcbiAgICAgIGVuZFBhdGgucHVzaChpbnRlcnNlY3RQb2ludHNbMF0pO1xuICAgICAgYnVpbGRFbmRQYXRoKGludGVyc2VjdFBvaW50c1swXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1aWxkU3RhcnRQYXRoID0gKGludGVyc2VjdFBvaW50KSA9PiB7XG4gICAgaWYgKGxldmVsU3RhcnRQb2ludENoaWxkcmVucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGludGVyc2VjdFBvaW50cyA9IGNoZWNrQ2hpbGRyZW5zKFxuICAgICAgICBpbnRlcnNlY3RQb2ludC5nZXRNb3ZlcygpLFxuICAgICAgICBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMucG9wKCksXG4gICAgICApO1xuICAgICAgc3RhcnRQYXRoLnB1c2goaW50ZXJzZWN0UG9pbnRzWzBdKTtcbiAgICAgIGJ1aWxkU3RhcnRQYXRoKGludGVyc2VjdFBvaW50c1swXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrQ2hpbGRyZW5zID0gKHN0YXJ0Q2hpbGRyZW5zLCBlbmRDaGlsZHJlbnMpID0+IHtcbiAgICBjb25zdCBjb21tb24gPSBzdGFydENoaWxkcmVucy5maWx0ZXIoXG4gICAgICAoY2hpbGQpID0+IGVuZENoaWxkcmVucy5pbmRleE9mKGNoaWxkKSAhPT0gLTEsXG4gICAgKTtcbiAgICByZXR1cm4gY29tbW9uO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2hpbGRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RGVlcCAtIGxldmVsRW5kOyBpKyspIHtcbiAgICAgIGlmIChsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV2ZWxFbmRQb2ludENoaWxkcmVucy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhEZWVwIC0gbGV2ZWxTdGFydDsgaSsrKSB7XG4gICAgICBpZiAobGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXRQYXRoIH07XG59O1xuIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5jb25zdCBidWlsZFRyZWUgPSAoKCkgPT4ge1xuICBjb25zdCBhcnIgPSBCb2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBwcm9jZXNzZWRBcnJheVRvVHJlZSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhcnJbal1baV07XG4gICAgICAgIG5vZGUuc2V0TW92ZShnZXROb2RlKGogLSAyLCBpIC0gMSksIDApO1xuICAgICAgICBub2RlLnNldE1vdmUoZ2V0Tm9kZShqIC0gMSwgaSAtIDIpLCAxKTtcbiAgICAgICAgbm9kZS5zZXRNb3ZlKGdldE5vZGUoaiArIDEsIGkgLSAyKSwgMik7XG4gICAgICAgIG5vZGUuc2V0TW92ZShnZXROb2RlKGogKyAyLCBpIC0gMSksIDMpO1xuICAgICAgICBub2RlLnNldE1vdmUoZ2V0Tm9kZShqICsgMiwgaSArIDEpLCA0KTtcbiAgICAgICAgbm9kZS5zZXRNb3ZlKGdldE5vZGUoaiArIDEsIGkgKyAyKSwgNSk7XG4gICAgICAgIG5vZGUuc2V0TW92ZShnZXROb2RlKGogLSAxLCBpICsgMiksIDYpO1xuICAgICAgICBub2RlLnNldE1vdmUoZ2V0Tm9kZShqIC0gMiwgaSArIDEpLCA3KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm9kZSA9ICh4LCB5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhcnJbeF1beV07XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvY2Vzc2VkQXJyYXlUb1RyZWUgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBLbmlnaHRNb3Zlc1RyZWUgPSAoKCkgPT4ge1xuICBjb25zdCByb290ID0gYnVpbGRUcmVlLnByb2Nlc3NlZEFycmF5VG9UcmVlKCk7XG4gIGNvbnN0IGdldFJvb3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0Um9vdCB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBOb2RlID0gKGNYLCBjWSkgPT4ge1xuICBjb25zdCB4ID0gY1g7XG4gIGNvbnN0IHkgPSBjWTtcblxuICBsZXQgbW92ZXMgPSBbOF07XG5cbiAgY29uc3Qgc2V0TW92ZSA9IChub2RlLCBpbmRleCkgPT4ge1xuICAgIG1vdmVzW2luZGV4XSA9IG5vZGU7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1vdmVzO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBbY1gsIGNZXTtcbiAgfTtcblxuICByZXR1cm4geyBzZXRNb3ZlLCBnZXRNb3ZlcywgZ2V0Q29vcmRpbmF0ZXMgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=