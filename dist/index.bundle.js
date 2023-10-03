"use strict";
(self["webpackChunkknightstravails"] = self["webpackChunkknightstravails"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/css/main.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/css/main.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    box-sizing: border-box;
}

:root {
    font-size: 2vh;
}

html {
    font-family: Roboto;
}

span {
    padding-left: 1vh;
    padding-right: 1vh;
    height: min-content;
    width: max-content;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content min-content;
    justify-content: center;
    align-content: center;
    max-width: 100%;
    max-height: 100%;
    gap: 2vh;
    padding: 5vh;
}

.board-wrapper {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-rows: min-content min-content;
    gap: 1vh;
}

.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    width: min(85vh, 80vw);
    height: min(85vh, 80vw);
    border: min(1vh, 1vw) rgb(82, 82, 82) solid;
}

.cell {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.number {
    font-size: min(5vh, 5vw);
}

.panel {
    display: grid;
    gap: 2vh;
    grid-template-columns: 1fr 1fr;
    width: min(85vh, 80vw);
    justify-items: center;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.svg {
    display: grid;
}

.knight,
.point {
    cursor: pointer;
    display: grid;
    position: absolute;
    width: min(8vh, 8vw);
    height: min(8vh, 8vw);
}

.arrow-template {
    display: none;
}

.arrow {
    position: absolute;
    pointer-events: none;
    visibility: hidden;
    justify-self: start;
    width: min(6vh, 3vw);
    height: min(6vh, 3vw);
    fill: rgb(27, 177, 247);
}

path {
    pointer-events: none;
}

.knight-wrapper,
.point-wrapper {
    display: grid;
    grid-template-columns: max-content max-content;
    background-color: white;
    border-radius: 1vh;
    padding: 1vh;
    gap: min(2vh, 1vw);
    width: min(30vh, 25vw);
    height: min(10vh, 8vw);
    justify-items: center;

    align-items: center;
    align-content: center;
}

.drag-and-drop {
    display: grid;
    visibility: hidden;
    color: rgb(27, 177, 247);
    font-size: min(1.5vh, 1.2vw);
}

.popup {
    position: fixed;
    display: grid;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    justify-items: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    padding: 1vh;
    transition: all 0.5s ease 0s;
    z-index: 500;
}

.text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh;
    height: 30%;
    width: 60%;
    opacity: 0;
    visibility: hidden;
    color: white;
    font-size: 2vh;
}

@media screen and (max-aspect-ratio:1/1.0000001) {}

@media screen and (min-aspect-ratio: 1/1) {}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,2CAA2C;IAC3C,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,sBAAsB;IACtB,uBAAuB;IACvB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;;IAErB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,MAAM;IACN,OAAO;IACP,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA,kDAAkD;;AAElD,2CAA2C","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: max-content;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    gap: 2vh;\n    padding: 5vh;\n}\n\n.board-wrapper {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    grid-template-rows: min-content min-content;\n    gap: 1vh;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    width: min(85vh, 80vw);\n    height: min(85vh, 80vw);\n    border: min(1vh, 1vw) rgb(82, 82, 82) solid;\n}\n\n.cell {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    align-content: center;\n    align-items: center;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.number {\n    font-size: min(5vh, 5vw);\n}\n\n.panel {\n    display: grid;\n    gap: 2vh;\n    grid-template-columns: 1fr 1fr;\n    width: min(85vh, 80vw);\n    justify-items: center;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.svg {\n    display: grid;\n}\n\n.knight,\n.point {\n    cursor: pointer;\n    display: grid;\n    position: absolute;\n    width: min(8vh, 8vw);\n    height: min(8vh, 8vw);\n}\n\n.arrow-template {\n    display: none;\n}\n\n.arrow {\n    position: absolute;\n    pointer-events: none;\n    visibility: hidden;\n    justify-self: start;\n    width: min(6vh, 3vw);\n    height: min(6vh, 3vw);\n    fill: rgb(27, 177, 247);\n}\n\npath {\n    pointer-events: none;\n}\n\n.knight-wrapper,\n.point-wrapper {\n    display: grid;\n    grid-template-columns: max-content max-content;\n    background-color: white;\n    border-radius: 1vh;\n    padding: 1vh;\n    gap: min(2vh, 1vw);\n    width: min(30vh, 25vw);\n    height: min(10vh, 8vw);\n    justify-items: center;\n\n    align-items: center;\n    align-content: center;\n}\n\n.drag-and-drop {\n    display: grid;\n    visibility: hidden;\n    color: rgb(27, 177, 247);\n    font-size: min(1.5vh, 1.2vw);\n}\n\n.popup {\n    position: fixed;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    padding: 1vh;\n    transition: all 0.5s ease 0s;\n    z-index: 500;\n}\n\n.text-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2vh;\n    height: 30%;\n    width: 60%;\n    opacity: 0;\n    visibility: hidden;\n    color: white;\n    font-size: 2vh;\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) {}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/css/main.css":
/*!********************************!*\
  !*** ./src/views/css/main.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/listeners/forCells.js":
/*!***********************************************!*\
  !*** ./src/controllers/listeners/forCells.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenerForPathCells: () => (/* binding */ setListenerForPathCells),
/* harmony export */   setListenersForActiveCells: () => (/* binding */ setListenersForActiveCells),
/* harmony export */   setListenersForCell: () => (/* binding */ setListenersForCell)
/* harmony export */ });
/* harmony import */ var _views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/nodes/cell */ "./src/views/nodes/cell.js");


const setListenersForCell = (cell) => {
    const mouseover = cell.addEventListener('mouseover', e => {
        (0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.setBorder)(cell, 'red');
    })

    const mouseleave = cell.addEventListener('mouseleave', e => {
        ;(0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.resetBorder)(cell);
    })
}

const setListenersForActiveCells = (cell) => {
    const mouseover = cell.addEventListener('mouseover', e => {
        ;(0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.setBorder)(cell, 'green');
    })

    const mouseleave = cell.addEventListener('mouseleave', e => {
        ;(0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.setBorder)(cell, 'green');
    })
}

const setListenerForPathCells = (cell) => {
    const mouseover = cell.addEventListener('mouseover', e => {
        ;(0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.setBorder)(cell, 'blue');
    })

    const mouseleave = cell.addEventListener('mouseleave', e => {
        ;(0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_0__.setBorder)(cell, 'blue');
    })
}

/***/ }),

/***/ "./src/controllers/listeners/forDragElements.js":
/*!******************************************************!*\
  !*** ./src/controllers/listeners/forDragElements.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForDragSvg: () => (/* binding */ setListenersForDragSvg),
/* harmony export */   setListenersForDragSvgForMibile: () => (/* binding */ setListenersForDragSvgForMibile)
/* harmony export */ });
/* harmony import */ var _models_currentAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/currentAnimations */ "./src/models/currentAnimations.js");
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/figures */ "./src/models/figures.js");
/* harmony import */ var _models_figuresPositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/figuresPositions */ "./src/models/figuresPositions.js");
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/knightMovesHandler */ "./src/models/knightMovesHandler.js");
/* harmony import */ var _models_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/path */ "./src/models/path.js");
/* harmony import */ var _views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/animations/makeDraggable */ "./src/views/animations/makeDraggable.js");
/* harmony import */ var _views_animations_move__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/animations/move */ "./src/views/animations/move.js");
/* harmony import */ var _views_nodes_cell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/nodes/cell */ "./src/views/nodes/cell.js");
/* harmony import */ var _forCells__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forCells */ "./src/controllers/listeners/forCells.js");











const setListenersForDragSvg = (svg) => {
    const draggable = (0,_views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_5__.makeDraggable)(svg);
    svg.addEventListener('mousedown', draggable.startDrag);
    svg.addEventListener('mousemove', draggable.drag);
    svg.addEventListener('mouseup', draggable.endDrag);
    svg.addEventListener('mousedown', e => {
        try {
            let path = _models_path__WEBPACK_IMPORTED_MODULE_4__.Path.getPath();
            path.forEach(cell => {
                (0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_7__.resetBorder)(cell.getNode());
                cell.getNode().removeChild(cell.getNode().querySelector('.number'));
                (0,_forCells__WEBPACK_IMPORTED_MODULE_8__.setListenersForCell)(cell.getNode());
            });
        } catch (error) {

        }
    });

    svg.addEventListener('mouseup', (e) => {
        try {
            (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_3__.start)();

            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.setCell(_models_figuresPositions__WEBPACK_IMPORTED_MODULE_2__.FiguresPositions.knight);
            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.setCell(_models_figuresPositions__WEBPACK_IMPORTED_MODULE_2__.FiguresPositions.point);
            let path = _models_path__WEBPACK_IMPORTED_MODULE_4__.Path.getPath().slice();

            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().style.pointerEvents = 'none';
            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().style.pointerEvents = 'none';
            (0,_views_animations_move__WEBPACK_IMPORTED_MODULE_6__.startMove)(path);


        } catch (error) {

        }
    })
}

const setListenersForDragSvgForMibile = (svg) => {
    const draggable = (0,_views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_5__.makeDraggable)(svg);
    svg.addEventListener('touchstart', draggable.startDrag);
    svg.addEventListener('touchmove', draggable.drag);
    svg.addEventListener('touchend', draggable.endDrag);
    svg.addEventListener('touchstart', e => {
        e.preventDefault()
        try {
            let path = _models_path__WEBPACK_IMPORTED_MODULE_4__.Path.getPath();
            path.forEach(cell => {
                (0,_views_nodes_cell__WEBPACK_IMPORTED_MODULE_7__.resetBorder)(cell.getNode());
                cell.getNode().removeChild(cell.getNode().querySelector('.number'));
                (0,_forCells__WEBPACK_IMPORTED_MODULE_8__.setListenersForCell)(cell.getNode());
            });
        } catch (error) {

        }
    });

    svg.addEventListener('touchend', e => {
        try {
            (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_3__.start)();

            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.setCell(_models_figuresPositions__WEBPACK_IMPORTED_MODULE_2__.FiguresPositions.knight);
            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.setCell(_models_figuresPositions__WEBPACK_IMPORTED_MODULE_2__.FiguresPositions.point);
            let path = _models_path__WEBPACK_IMPORTED_MODULE_4__.Path.getPath().slice();

            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().style.pointerEvents = 'none';
            _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().style.pointerEvents = 'none';
            (0,_views_animations_move__WEBPACK_IMPORTED_MODULE_6__.startMove)(path);


        } catch (error) {

        }
    });
}

/***/ }),

/***/ "./src/controllers/listeners/forLernDemo.js":
/*!**************************************************!*\
  !*** ./src/controllers/listeners/forLernDemo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeListenersForDemo: () => (/* binding */ removeListenersForDemo),
/* harmony export */   removeListenersForDemoForMobile: () => (/* binding */ removeListenersForDemoForMobile),
/* harmony export */   setListenersForDemo: () => (/* binding */ setListenersForDemo),
/* harmony export */   setListenersForDemoForMibile: () => (/* binding */ setListenersForDemoForMibile)
/* harmony export */ });
/* harmony import */ var _models_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements */ "./src/models/elements.js");
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/figures */ "./src/models/figures.js");
/* harmony import */ var _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/lernPreset */ "./src/models/lernPreset.js");
/* harmony import */ var _views_animations_presets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/animations/presets */ "./src/views/animations/presets.js");





const removeListenersForDemo = () => {
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().removeEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().removeEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().removeEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().removeEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
    window.removeEventListener('resize', hideArrow());
}

const setListenersForDemo = () => {
    window.removeEventListener('resize', hideArrow());
    _models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.popup.addEventListener('click', (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.demoSteps)().step1, { once: true, passive: false })
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().addEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().addEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().addEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().addEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);

}

const setListenersForDemoForMibile = () => {
    _models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.popup.addEventListener('mousedown', (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.demoSteps)().step1, { once: true, passive: false });
    window.addEventListener('mousedown', e => {
        e.stopPropagation();
        e.preventDefault();
    });
    window.addEventListener('resize', hideArrow());
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().addEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().addEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().addEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().addEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
}

const removeListenersForDemoForMobile = () => {
    window.removeEventListener('resize', hideArrow());
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().removeEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getSvg().removeEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().removeEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getSvg().removeEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_2__.endDragDemo);
}

function hideArrow() {
    var timer;
    return function (e) {
        _models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getArrow().getSvg().style.visibility = 'hidden';
        _models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getArrow().getSvg().style.visibility = 'hidden';
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            _views_animations_presets__WEBPACK_IMPORTED_MODULE_3__.View.knightArrow();
            _views_animations_presets__WEBPACK_IMPORTED_MODULE_3__.View.pointArrow();
        }, 600);
    };
}

/***/ }),

/***/ "./src/controllers/listeners/forTravails.js":
/*!**************************************************!*\
  !*** ./src/controllers/listeners/forTravails.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForTravails: () => (/* binding */ setListenersForTravails)
/* harmony export */ });
const setListenersForTravails = () => {
    const button = document.querySelector('.travails');

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/css/main.css */ "./src/views/css/main.css");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/board */ "./src/models/board.js");
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/knightMovesHandler */ "./src/models/knightMovesHandler.js");
/* harmony import */ var _models_knightMovesGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/knightMovesGraph */ "./src/models/knightMovesGraph.js");
/* harmony import */ var _views_nodes_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/board */ "./src/views/nodes/board.js");
/* harmony import */ var _views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/animations/makeDraggable */ "./src/views/animations/makeDraggable.js");
/* harmony import */ var _controllers_listeners_forDragElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/listeners/forDragElements */ "./src/controllers/listeners/forDragElements.js");
/* harmony import */ var _models_figuresPositions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/figuresPositions */ "./src/models/figuresPositions.js");
/* harmony import */ var _controllers_listeners_forTravails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/listeners/forTravails */ "./src/controllers/listeners/forTravails.js");
/* harmony import */ var _views_animations_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/animations/animations */ "./src/views/animations/animations.js");
/* harmony import */ var _views_animations_arrows__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/animations/arrows */ "./src/views/animations/arrows.js");
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/figures */ "./src/models/figures.js");
/* harmony import */ var _models_lernPreset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/lernPreset */ "./src/models/lernPreset.js");
/* harmony import */ var _controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controllers/listeners/forLernDemo */ "./src/controllers/listeners/forLernDemo.js");















(0,_models_knightMovesGraph__WEBPACK_IMPORTED_MODULE_3__.KnightMovesGraph)().buildGraph(_models_board__WEBPACK_IMPORTED_MODULE_1__.ActiveBoard.getBoard());

(0,_views_nodes_board__WEBPACK_IMPORTED_MODULE_4__.fillBoard)(_models_board__WEBPACK_IMPORTED_MODULE_1__.ActiveBoard.getBoard());

(0,_controllers_listeners_forTravails__WEBPACK_IMPORTED_MODULE_8__.setListenersForTravails)();

let isLern = JSON.parse(localStorage.getItem('isLern'));

if (isLern !== 'yes') {
    let demo = (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_12__.startLern)();
    _models_lernPreset__WEBPACK_IMPORTED_MODULE_12__.currentDemo.setdemo(demo);
}

/***/ }),

/***/ "./src/models/board.js":
/*!*****************************!*\
  !*** ./src/models/board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveBoard: () => (/* binding */ ActiveBoard),
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/models/node.js");


const Board = () => {
  let width = 8;
  let height = 8;

  let cells = [];

  const createCells = () => {
    for (let i = 0; i < width; i++) {
      let line = [];
      for (let j = 0; j < height; j++) {
        const node = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(i, j);
        line.push(node);
      }
      cells.push(line);
    }
  };

  const getCells = () => {
    return cells;
  };

  const setSize = (nWidth, nHeight) => {
    width = nWidth;
    height = nHeight;
  }

  const getSize = () => {
    return [width, height];
  }

  return { createCells, getCells, setSize, getSize };
};

const ActiveBoard = (() => {
  let activeBoard = Board();
  activeBoard.createCells();

  const setBoard = (board) => {
    activeBoard = board;
  }

  const getBoard = () => {
    return activeBoard;
  }
  
  return { setBoard, getBoard };
})()


/***/ }),

/***/ "./src/models/currentAnimations.js":
/*!*****************************************!*\
  !*** ./src/models/currentAnimations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveArrow: () => (/* binding */ ActiveArrow),
/* harmony export */   ActiveFigure: () => (/* binding */ ActiveFigure),
/* harmony export */   ActiveText: () => (/* binding */ ActiveText)
/* harmony export */ });
/* harmony import */ var _views_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/animations/animations */ "./src/views/animations/animations.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/models/elements.js");



const AnimatingObject = () => {
    let animation = _views_animations_animations__WEBPACK_IMPORTED_MODULE_0__.SmoothAnimations.SmoothVisibility.view(_elements__WEBPACK_IMPORTED_MODULE_1__.Elements.board, 1, 1, 1, 'forwards');

    const setAnimation = (newAnimation) => {
        animation.pause();
        animation = newAnimation;
    }

    const getAnimation = () => {
        return animation;
    }

    return { setAnimation, getAnimation };
}

const ActiveArrow = (() => {
    const prototype = AnimatingObject();
    return prototype;
})();

const ActiveText = (() => {
    const prototype = AnimatingObject();
    return prototype;
})();

const ActiveFigure = (() => {
    const prototype = AnimatingObject();
    return prototype;
})();

/***/ }),

/***/ "./src/models/elements.js":
/*!********************************!*\
  !*** ./src/models/elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Elements: () => (/* binding */ Elements)
/* harmony export */ });
const Elements = (() => {
    const popup = document.querySelector('.popup');
    const board = document.querySelector('.board');
    const textContainer = document.querySelector('.text-container');
    const knightWrapper = document.querySelector('.knight-wrapper');
    const pointWrapper = document.querySelector('.point-wrapper');
    const knightText = knightWrapper.querySelector('.drag-and-drop');
    const pointText = pointWrapper.querySelector('.drag-and-drop');

    return { popup, board, textContainer, knightText, knightWrapper, pointWrapper, knightText, pointText }
})();

/***/ }),

/***/ "./src/models/figures.js":
/*!*******************************!*\
  !*** ./src/models/figures.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrow: () => (/* binding */ Arrow),
/* harmony export */   Figure: () => (/* binding */ Figure),
/* harmony export */   Knight: () => (/* binding */ Knight),
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forDragElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/forDragElements */ "./src/controllers/listeners/forDragElements.js");
/* harmony import */ var _views_animations_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/animations */ "./src/views/animations/animations.js");
/* harmony import */ var _views_animations_arrows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/animations/arrows */ "./src/views/animations/arrows.js");
/* harmony import */ var _views_nodes_arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/arrow */ "./src/views/nodes/arrow.js");
/* harmony import */ var _currentAnimations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currentAnimations */ "./src/models/currentAnimations.js");






const Figure = (newSvg) => {
    const svg = newSvg;
    let parent;
    let cell;

    const getRect = () => {
        return svg.getBoundingClientRect();
    }

    const getSvg = () => {
        return svg;
    }

    const setParent = (nParent) => {
        parent = nParent;
    }

    const getParent = () => {
        return parent;
    }

    const getCell = () => {
        return cell;
    }

    const setCell = (nCell) => {
        cell = nCell;
    }

    return { getCell, setCell, getRect, getSvg, setParent, getParent }
}

const Arrow = (parent, name) => {
    const prototype = Figure((0,_views_nodes_arrow__WEBPACK_IMPORTED_MODULE_3__.getArrowNode)(name));
    const arrow = prototype.getSvg();
    let interval;

    const view = () => {
        const wrapper = document.querySelector(`.${name}-wrapper`);
        wrapper.appendChild(arrow);

        setTimeout(() => {
            _currentAnimations__WEBPACK_IMPORTED_MODULE_4__.ActiveArrow.setAnimation(_views_animations_animations__WEBPACK_IMPORTED_MODULE_1__.SmoothAnimations.SmoothVisibility.view(arrow, 0, 1, 500, 'forwards'));
        }, 1500);
    }

    const setPosition = () => {
        let rectParent = parent.getRect();
        (0,_views_animations_arrows__WEBPACK_IMPORTED_MODULE_2__.setXY)(arrow, rectParent);
    }

    const move = () => {
        interval = setInterval(() => {
            let rectArrow = prototype.getRect();
            let rectParent = parent.getRect();
            (0,_views_animations_arrows__WEBPACK_IMPORTED_MODULE_2__.setXY)(arrow, rectParent);
            (0,_views_animations_arrows__WEBPACK_IMPORTED_MODULE_2__.getMove)(arrow, rectParent, rectArrow);
        }, 800);
    }

    const hide = () => {
        _currentAnimations__WEBPACK_IMPORTED_MODULE_4__.ActiveArrow.setAnimation(_views_animations_animations__WEBPACK_IMPORTED_MODULE_1__.SmoothAnimations.SmoothVisibility.hide(arrow, 1, 0, 500, 'forwards'));
    }

    return Object.assign(prototype, { setPosition, view, hide, move });
}

const Knight = (() => {
    const prototype = Figure(document.querySelector('.knight'));
    const arrow = Arrow(prototype, 'knight');

    prototype.setParent(document.querySelector('.knight-wrapper'));

    const setListeners = (() => {
        (0,_controllers_listeners_forDragElements__WEBPACK_IMPORTED_MODULE_0__.setListenersForDragSvg)(prototype.getSvg());
        (0,_controllers_listeners_forDragElements__WEBPACK_IMPORTED_MODULE_0__.setListenersForDragSvgForMibile)(prototype.getSvg());
    })()

    const getArrow = () => {
        return arrow;
    }

    return Object.assign(prototype, { getArrow });
})();

const Point = (() => {
    const prototype = Figure(document.querySelector('.point'));
    const arrow = Arrow(prototype, 'point');

    prototype.setParent(document.querySelector('.point-wrapper'));

    const setListeners = (() => {
        (0,_controllers_listeners_forDragElements__WEBPACK_IMPORTED_MODULE_0__.setListenersForDragSvg)(prototype.getSvg());
        (0,_controllers_listeners_forDragElements__WEBPACK_IMPORTED_MODULE_0__.setListenersForDragSvgForMibile)(prototype.getSvg());
    })()

    const getArrow = () => {
        return arrow;
    }

    return Object.assign(prototype, { getArrow });
})();

/***/ }),

/***/ "./src/models/figuresPositions.js":
/*!****************************************!*\
  !*** ./src/models/figuresPositions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiguresPositions: () => (/* binding */ FiguresPositions)
/* harmony export */ });
const FiguresPositions = (() => {
    let knight = [0, 0];
    let point = [0, 0];

    return { knight, point };
})()

/***/ }),

/***/ "./src/models/knightMovesGraph.js":
/*!****************************************!*\
  !*** ./src/models/knightMovesGraph.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnightMovesGraph: () => (/* binding */ KnightMovesGraph)
/* harmony export */ });
const KnightMovesGraph = () => {
  let nullNode;

  const getNullNode = () => {
    return nullNode;
  };

  const buildGraph = (board) => {
    const cells = board.getCells();
    const width = board.getSize()[0];
    const height = board.getSize()[1];
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        let cell = cells[j][i];
        cell.setMove(getNode(cells, j - 2, i - 1), 0);
        cell.setMove(getNode(cells, j - 1, i - 2), 1);
        cell.setMove(getNode(cells, j + 1, i - 2), 2);
        cell.setMove(getNode(cells, j + 2, i - 1), 3);
        cell.setMove(getNode(cells, j + 2, i + 1), 4);
        cell.setMove(getNode(cells, j + 1, i + 2), 5);
        cell.setMove(getNode(cells, j - 1, i + 2), 6);
        cell.setMove(getNode(cells, j - 2, i + 1), 7);
      }
    }

    nullNode = cells[0][0];
  };

  const getNode = (board, x, y) => {
    try {
      return board[x][y];
    } catch {
      return null;
    }
  };

  return { getNullNode, buildGraph };
};


/***/ }),

/***/ "./src/models/knightMovesHandler.js":
/*!******************************************!*\
  !*** ./src/models/knightMovesHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightMovesHandler: () => (/* binding */ knightMovesHandler),
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/forCells */ "./src/controllers/listeners/forCells.js");
/* harmony import */ var _views_animations_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/path */ "./src/views/animations/path.js");
/* harmony import */ var _views_nodes_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/cell */ "./src/views/nodes/cell.js");
/* harmony import */ var _figuresPositions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figuresPositions */ "./src/models/figuresPositions.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path */ "./src/models/path.js");






const knightMovesHandler = () => {
  let firstHalfPath = [];
  let secondHalfPath = [];
  let levelStartPointChildrens = [];
  let levelEndPointChildrens = [];

  const getPath = (start, end) => {
    if (start === end) {
      return [start];
    }

    levelStartPointChildrens.push([start]);
    levelEndPointChildrens.push([end]);

    const path = bondingPath(start, end);
    return path;
  };

  const bondingPath = (start, end) => {
    let path;
    let intersectPoint = findIntersect([start], [end]);

    buildPath(intersectPoint, levelStartPointChildrens, firstHalfPath);
    buildPath(intersectPoint, levelEndPointChildrens, secondHalfPath);

    firstHalfPath = getProcessedArr(firstHalfPath);
    secondHalfPath = getProcessedArr(secondHalfPath);

    path = firstHalfPath.reverse().concat([intersectPoint]).concat(secondHalfPath);
    return path;
  };

  const findIntersect = (start, end, flag = 'def') => {
    let intersect;

    if (flag !== 'def') {
      let points = flag === 'start' ? start : end;
      setChildrens(points, flag);
    } else {
      flag = 'end';
    }

    const startLast = levelStartPointChildrens.length - 1;
    const endLast = levelEndPointChildrens.length - 1;
    const startLvlPoints = levelStartPointChildrens[startLast];
    const endLvlPoints = levelEndPointChildrens[endLast];

    const intersectPoints = checkChildrens(
      startLvlPoints,
      endLvlPoints,
    );

    if (intersectPoints.length <= 0) {
      flag === 'start' ? flag = 'end' : flag = 'start';
      intersect = findIntersect(startLvlPoints, endLvlPoints, flag);
    } else {
      intersect = intersectPoints[0];
    }

    return intersect;
  }

  const setChildrens = (pointChildrens, flag) => {
    let childrens = [];
    pointChildrens.forEach((child) => {
      if (child !== null && child !== undefined) {
        childrens = getProcessedArr(childrens.concat(child.getMoves()));
      }
    });
    flag === "start"
      ? levelStartPointChildrens.push(childrens)
      : levelEndPointChildrens.push(childrens);
  };

  const buildPath = (intersectPoint, childrens, container) => {
    let moves = getProcessedArr(intersectPoint.getMoves());
    let lvl = childrens.pop();

    if (lvl.indexOf(intersectPoint) >= 0) {
      lvl = childrens.pop();
    }

    if (childrens.length === 0) {
      return;
    } else {
      let intersectPoints = checkChildrens(
        moves,
        lvl,
      );
      container.push(intersectPoints[0]);
      buildPath(intersectPoints[0], childrens, container);
    }
  }

  const checkChildrens = (startChildrens, endChildrens) => {
    const common = startChildrens.filter(
      (child) => endChildrens.indexOf(child) !== -1,
    );
    return common;
  };

  return { getPath };
};

const start = () => {
  let path = knightMovesHandler().getPath(_figuresPositions__WEBPACK_IMPORTED_MODULE_3__.FiguresPositions.knight, _figuresPositions__WEBPACK_IMPORTED_MODULE_3__.FiguresPositions.point);
  _path__WEBPACK_IMPORTED_MODULE_4__.Path.setPath(path);
  (0,_views_animations_path__WEBPACK_IMPORTED_MODULE_1__.viewPath)();
}

const getProcessedArr = (array) => {
  const set = new Set(array.filter((n) => n));
  return [...set];
}

/***/ }),

/***/ "./src/models/lernPreset.js":
/*!**********************************!*\
  !*** ./src/models/lernPreset.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeBoardPriority: () => (/* binding */ changeBoardPriority),
/* harmony export */   currentDemo: () => (/* binding */ currentDemo),
/* harmony export */   demoSteps: () => (/* binding */ demoSteps),
/* harmony export */   endDragDemo: () => (/* binding */ endDragDemo),
/* harmony export */   startLern: () => (/* binding */ startLern)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/forLernDemo */ "./src/controllers/listeners/forLernDemo.js");
/* harmony import */ var _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/presets */ "./src/views/animations/presets.js");
/* harmony import */ var _currentAnimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentAnimations */ "./src/models/currentAnimations.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ "./src/models/elements.js");
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./figures */ "./src/models/figures.js");






const currentDemo = (() => {
    let demo;

    const getDemo = () => {
        return demo;
    }

    const setdemo = (nDemo) => {
        demo = nDemo;
    }

    return { setdemo, getDemo };
})();

const startLern = () => {
    demoSteps().start();
}

const demoSteps = () => {
    const start = () => {
        ;(0,_controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_0__.setListenersForDemo)();
        (0,_controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_0__.setListenersForDemoForMibile)();
        _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getSvg().style.pointerEvents = 'none';
        _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getSvg().style.pointerEvents = 'none';
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.popup();
        setTimeout(() => {
            _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.textContainer();
        }, 1000);
    }

    const step1 = () => {
        _elements__WEBPACK_IMPORTED_MODULE_3__.Elements.knightWrapper.style.zIndex = '501';
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.textContainer();
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.knightWrapper();
        setTimeout(() => {
            knightDemo();
        }, 1000);
    }

    const step2 = () => {
        _elements__WEBPACK_IMPORTED_MODULE_3__.Elements.pointWrapper.style.zIndex = '501';
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.pointWrapper();
        setTimeout(() => {
            pointDemo();
        }, 1000);
    }

    const end = () => {
        ;(0,_controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_0__.removeListenersForDemo)();
        (0,_controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_0__.removeListenersForDemoForMobile)();
        _elements__WEBPACK_IMPORTED_MODULE_3__.Elements.knightWrapper.removeChild(_figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().getSvg());
        _elements__WEBPACK_IMPORTED_MODULE_3__.Elements.pointWrapper.removeChild(_figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().getSvg());
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.popup();
        localStorage.setItem('isLern', JSON.stringify('yes'));
    }

    return { start, step1, step2, end }
}

const knightDemo = () => {
    _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().getSvg().style.zIndex = 600;
    _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().setPosition();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().view();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().move();
    _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.setAnimation(_views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.knightText());

    setTimeout(() => {
        _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getSvg().style.pointerEvents = 'all';
    }, 1000);
}

const pointDemo = () => {
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().setPosition();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().view();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().move();
    _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.setAnimation(_views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.pointText());
    setTimeout(() => {
        _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getSvg().style.pointerEvents = 'all';
    }, 1000);
}

const changeBoardPriority = (e) => {
    const svgName = e.target.className.baseVal;
    if (svgName === 'knight') {
        addBoardPriority(_figures__WEBPACK_IMPORTED_MODULE_4__.Knight);
        _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().hide();
        _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.setAnimation(_views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.knightText());
    }
    if (svgName === 'point') {
        _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().hide();
        _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.setAnimation(_views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.pointText());
    }

}

const addBoardPriority = async () => {
    _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.textContainer();
    _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.board();
    _elements__WEBPACK_IMPORTED_MODULE_3__.Elements.board.style.zIndex = '501';
}

const removeBoardPriority = async () => {
    _elements__WEBPACK_IMPORTED_MODULE_3__.Elements.board.style.zIndex = '100';
}

const endDragDemo = (e) => {
    const svgName = e.target.className.baseVal;
    if (svgName === 'knight') {
        if (_figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getParent().className === 'knight-wrapper') {
            _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().view();
            _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.setAnimation(_views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.knightText());
            removeBoardPriority(_figures__WEBPACK_IMPORTED_MODULE_4__.Knight);
        } else {
            e.target.style.pointerEvents = ' none';
            document.querySelector('.knight-wrapper').style.zIndex = '1';
            demoSteps().step2();
        }
    }
    if (svgName === 'point') {
        if (_figures__WEBPACK_IMPORTED_MODULE_4__.Point.getParent().className !== 'point-wrapper') {
            document.querySelector('.point-wrapper').style.zIndex = '1';
            demoSteps().end();
        } else {
            _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().view();
            _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.getAnimation();
            _currentAnimations__WEBPACK_IMPORTED_MODULE_2__.ActiveText.setAnimation(_views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.View.pointText());
        }
    }
}

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
  let node;
  const x = cX;
  const y = cY;

  let moves = [8];

  const setNode = (nNode) => {
    node = nNode;
  }

  const getNode = () => {
    return node;
  }

  const setMove = (node, index) => {
    moves[index] = node;
  };

  const getMoves = () => {
    return moves;
  };

  const getCoordinates = () => {
    return [x, y];
  };

  return { setNode, getNode, setMove, getMoves, getCoordinates };
};


/***/ }),

/***/ "./src/models/path.js":
/*!****************************!*\
  !*** ./src/models/path.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Path: () => (/* binding */ Path)
/* harmony export */ });
const Path = (() => {
    let path;

    const setPath = (nPatn) => {
        path = nPatn;
    }

    const getPath = () => {
        return path;
    }

    return { setPath, getPath };
})()

/***/ }),

/***/ "./src/views/animations/animations.js":
/*!********************************************!*\
  !*** ./src/views/animations/animations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations),
/* harmony export */   SmoothAnimations: () => (/* binding */ SmoothAnimations)
/* harmony export */ });
const Animations = (() => {

    const transform = (() => {
        const x = (e, x0, x1, dur, fill = 'none') => {
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], { duration: dur, fill: fill });
        }

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], { duration: dur, fill: fill });
        }

        const xy = (e, x, y, dur, fill = 'none') => {
            return e.animate([{ top: `${x}` }, { left: `${y}` }], { duration: dur, fill: fill });
        }

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate([{ transform: `rotate(${rotate1}deg)` }, { transform: `rotate(${rotate2}deg)` }], { duration: dur, fill: fill });
        }

        return { x, y, xy, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], { duration: dur, fill: fill });
    }

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], { duration: dur, fill: fill });
    }

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, { duration: dur, fill: fill });
    }

    return { transform, background, opacity, custom };
})();

const SmoothAnimations = (() => {

    const SmoothVisibility = (() => {

        const hide = (e, op1, op2, dur, fill) => {
            setTimeout(() => {
                if (opacity.playState !== 'paused') {
                    e.style.visibility = 'hidden';
                }
            }, dur);
            let opacity = Animations.opacity(e, op1, op2, dur, fill);
            return opacity;
        }

        const view = (e, op1, op2, dur, fill) => {
            e.style.visibility = 'visible';
            return Animations.opacity(e, op1, op2, dur, fill);
        }
        
        return { view, hide };
    })();

    return { SmoothVisibility };
})();

/***/ }),

/***/ "./src/views/animations/arrows.js":
/*!****************************************!*\
  !*** ./src/views/animations/arrows.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMove: () => (/* binding */ getMove),
/* harmony export */   setXY: () => (/* binding */ setXY)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");


const getMove = (arrow, rectParent, rectArrow) => {
    _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.x(arrow, `${rectParent.x}px`, `${rectParent.x + rectParent.width}px`, 400, 'forwards').finished.then(() => {
        _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.x(arrow, `${rectParent.x + rectParent.width}px`, `${rectParent.x}px`, 400, 'forwards')
    });
    _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.y(arrow, `${rectParent.y}px`, `${rectParent.y - rectParent.height}px`, 400, 'forwards').finished.then(() => {
        _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.y(arrow, `${rectParent.y - rectParent.height}px`, `${rectParent.y}px`, 400, 'forwards')
    });

}

const setXY = (arrow, rect) => {
    const xforms = arrow.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(rect.height, -rect.width);
}

/***/ }),

/***/ "./src/views/animations/makeDraggable.js":
/*!***********************************************!*\
  !*** ./src/views/animations/makeDraggable.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultXY: () => (/* binding */ defaultXY),
/* harmony export */   makeDraggable: () => (/* binding */ makeDraggable),
/* harmony export */   setXY: () => (/* binding */ setXY)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/listeners/forCells */ "./src/controllers/listeners/forCells.js");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/board */ "./src/models/board.js");
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/figures */ "./src/models/figures.js");
/* harmony import */ var _models_figuresPositions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/figuresPositions */ "./src/models/figuresPositions.js");
/* harmony import */ var _nodes_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/cell */ "./src/views/nodes/cell.js");






function makeDraggable(svg) {
    let selectedElement = false;
    let gag = document.createElement('gag');
    let last = gag;
    let cellIndex = 1;
    let parent;
    const cells = _models_board__WEBPACK_IMPORTED_MODULE_1__.ActiveBoard.getBoard().getCells();

    function startDrag(e) {
        parent = svg.parentElement;
        selectedElement = svg;
        const rect = svg.getBoundingClientRect();
        const svgX = rect.x + parseInt(rect.width / 2);
        const svgY = rect.y + parseInt(rect.height / 2);
        const elements = document.elementsFromPoint(svgX, svgY);
        if (elements[0].getAttributeNames()[0] === 'd') {
            cellIndex = 2;
        }
    }

    function drag(e) {
        if (selectedElement) {
            const rect = svg.getBoundingClientRect();
            let cursorX = e.clientX;
            let cursorY = e.clientY;

            if (cursorX === undefined) {
                cursorX = e.touches[0].clientX;
                cursorY = e.touches[0].clientY;
            }

            let elements = document.elementsFromPoint(cursorX, cursorY);
            const element = elements[cellIndex];
            let svgX = rect.x + parseInt(rect.width / 2);
            let svgY = rect.y + parseInt(rect.height / 2);

            setXY(svg, cursorX - svgX, cursorY - svgY);
            svgX = svg.getBoundingClientRect().x;
            svgY = svg.getBoundingClientRect().y;

            if (element.className === 'cell') {
                const mouseoverEvent = new Event('mouseover');
                element.dispatchEvent(mouseoverEvent);
            }

            if (last !== element) {
                const mouseleaveEvent = new Event('mouseleave');
                last.dispatchEvent(mouseleaveEvent);
                last = element;
            }
        }
    }

    function endDrag() {
        reset();

        if (last !== gag && last !== parent) {
            if (last.children.length === 0) {
                last.appendChild(svg);

                setParent(svg, last);
                (0,_controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__.setListenersForActiveCells)(last);
                (0,_nodes_cell__WEBPACK_IMPORTED_MODULE_4__.setBorder)(last, 'green');
                parent.style.border = '';
                if (parent.className === 'cell') {
                    (0,_controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__.setListenersForCell)(parent);
                }
             
                cells.forEach(cells => {
                    cells.forEach(cell => {
                        if (cell.getNode() === last) {
                            _models_figuresPositions__WEBPACK_IMPORTED_MODULE_3__.FiguresPositions[svg.className.baseVal] = cell;
                        }
                    });
                });

            }
        }
    }

    function reset() {
        selectedElement = false;
        defaultXY(svg);
    }

    return { startDrag, drag, endDrag, last };
}

const setXY = (myElement, x, y) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(firstXForm.matrix.e + x, firstXForm.matrix.f + y);
}

const defaultXY = (myElement) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(0, 0);
}

const setParent = (svg, parent) => {
    if (svg.className.baseVal === 'knight') {
        _models_figures__WEBPACK_IMPORTED_MODULE_2__.Knight.setParent(parent)
    }
    if (svg.className.baseVal === 'point') {
        _models_figures__WEBPACK_IMPORTED_MODULE_2__.Point.setParent(parent);
    }
}

/***/ }),

/***/ "./src/views/animations/move.js":
/*!**************************************!*\
  !*** ./src/views/animations/move.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveX: () => (/* binding */ moveX),
/* harmony export */   moveY: () => (/* binding */ moveY),
/* harmony export */   resetKnight: () => (/* binding */ resetKnight),
/* harmony export */   startMove: () => (/* binding */ startMove)
/* harmony export */ });
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/board */ "./src/models/board.js");
/* harmony import */ var _models_currentAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/currentAnimations */ "./src/models/currentAnimations.js");
/* harmony import */ var _models_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/elements */ "./src/models/elements.js");
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/figures */ "./src/models/figures.js");
/* harmony import */ var _models_figuresPositions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/figuresPositions */ "./src/models/figuresPositions.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");







const startMove = (path) => {
    let interval = setInterval(() => {
        if (path.length < 1) {
            clearInterval(interval);
            moveX(_models_figures__WEBPACK_IMPORTED_MODULE_3__.Point.getCell());
            setTimeout(() => {
                resetKnight();
                _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getSvg().style.pointerEvents = 'all';
                _models_figures__WEBPACK_IMPORTED_MODULE_3__.Point.getSvg().style.pointerEvents = 'all';
            }, 1600);
        } else {
            moveX(path.shift());
        }
    }, 800);
}

const resetKnight = () => {
    _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.setCell(_models_figuresPositions__WEBPACK_IMPORTED_MODULE_4__.FiguresPositions.knight);
    _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getCell().getNode().appendChild(_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getSvg());
}

const moveX = (finish) => {
    try {
        let startCoordinates = _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getCell().getCoordinates();
        let finishCoordinates = finish.getCoordinates();
        let startX = startCoordinates[0];
        let startY = startCoordinates[1];
        let finishX = finishCoordinates[0];
        let finishY = finishCoordinates[1];

        if (startX === finishX) {
            if (startY !== finishY) {
                return moveY(finish);
            }
            return true;
        } else {
            let nextPoint = startX > finishX ? _models_board__WEBPACK_IMPORTED_MODULE_0__.ActiveBoard.getBoard().getCells()[startX - 1][startY] : _models_board__WEBPACK_IMPORTED_MODULE_0__.ActiveBoard.getBoard().getCells()[startX + 1][startY];
            let nextPointRect = nextPoint.getNode().getBoundingClientRect();
            let nextPointRectX = nextPointRect.x;
            _models_currentAnimations__WEBPACK_IMPORTED_MODULE_1__.ActiveFigure.setAnimation(_animations__WEBPACK_IMPORTED_MODULE_5__.Animations.transform.x(_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getSvg(), `${_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getRect().x}px`, `${nextPointRectX}px`, 100));
            _models_currentAnimations__WEBPACK_IMPORTED_MODULE_1__.ActiveFigure.getAnimation().finished.then(() => {
                nextPoint.getNode().appendChild(_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getSvg());
                _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.setCell(nextPoint)
                moveX(finish);
            });
        }
    } catch (error) {
        console.log('errr')
        console.log(error)
    }
}

const moveY = (finish) => {
    try {
        let startCoordinates = _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getCell().getCoordinates();
        let finishCoordinates = finish.getCoordinates();
        let startX = startCoordinates[0];
        let startY = startCoordinates[1];
        let finishX = finishCoordinates[0];
        let finishY = finishCoordinates[1];

        if (startY === finishY) {
            if (startX !== finishX) {
                return moveX(finish);
            }

            return true;
        } else {
            let nextPoint = startY > finishY ? _models_board__WEBPACK_IMPORTED_MODULE_0__.ActiveBoard.getBoard().getCells()[startX][startY - 1] : _models_board__WEBPACK_IMPORTED_MODULE_0__.ActiveBoard.getBoard().getCells()[startX][startY + 1];
            let nextPointRect = nextPoint.getNode().getBoundingClientRect();
            let nextPointRectY = nextPointRect.y;
            _models_currentAnimations__WEBPACK_IMPORTED_MODULE_1__.ActiveFigure.setAnimation(_animations__WEBPACK_IMPORTED_MODULE_5__.Animations.transform.y(_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getSvg(), `${_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getRect().y}px`, `${nextPointRectY}px`, 100));
            _models_currentAnimations__WEBPACK_IMPORTED_MODULE_1__.ActiveFigure.getAnimation().finished.then(() => {
                nextPoint.getNode().appendChild(_models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.getSvg());
                _models_figures__WEBPACK_IMPORTED_MODULE_3__.Knight.setCell(nextPoint)
                moveY(finish);
            })
        }
    } catch (error) {
        console.log('errr')
        console.log(error)
    }
}

/***/ }),

/***/ "./src/views/animations/path.js":
/*!**************************************!*\
  !*** ./src/views/animations/path.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewPath: () => (/* binding */ viewPath)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/listeners/forCells */ "./src/controllers/listeners/forCells.js");
/* harmony import */ var _models_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/path */ "./src/models/path.js");
/* harmony import */ var _nodes_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes/cell */ "./src/views/nodes/cell.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");





const viewPath = () => {
    const path = _models_path__WEBPACK_IMPORTED_MODULE_1__.Path.getPath();
    try {
        for (let i = 0; i < path.length; i++) {

            let cell = path[i];
            let span = setUpSpan(i + 1, 'number');
            if (cell.getNode().querySelector('.point') === null) {
                cell.getNode().appendChild(span);
            }
            _animations__WEBPACK_IMPORTED_MODULE_3__.SmoothAnimations.SmoothVisibility.view(span, 0, 1, 500, 'forwards');
            (0,_nodes_cell__WEBPACK_IMPORTED_MODULE_2__.setBorder)(cell.getNode(), 'blue');
            (0,_controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__.setListenerForPathCells)(cell.getNode());
        }
    } catch (error) {
       
    }
}

const addClasses = (node, ...classes) => {
    for (let curClass of classes) {
        node.classList.add(curClass);
    }
}

const setUpSpan = (text, className = '') => {
    let span = createNode('span', className);
    span.textContent = text;
    return span;
}

const createNode = (nodeName, ...className) => {
    let node = document.createElement(nodeName);
    addClasses(node, ...className);
    return node;
}

/***/ }),

/***/ "./src/views/animations/presets.js":
/*!*****************************************!*\
  !*** ./src/views/animations/presets.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hide: () => (/* binding */ Hide),
/* harmony export */   View: () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _models_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements */ "./src/models/elements.js");
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/figures */ "./src/models/figures.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");




const View = (() => {
    const popup = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.popup, 0, 1, 500, 'forwards');
    }
    const board = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.board, 0, 1, 500, 'forwards');
    }
    const textContainer = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.textContainer, 0, 1, 500, 'forwards');
    }

    const knightArrow = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getArrow().getSvg(), 0, 1, 500, 'forwards');
    }

    const pointArrow = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getArrow().getSvg(), 0, 1, 500, 'forwards');
    }

    const knightWrapper = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.knightWrapper, 0, 1, 500, 'forwards');
    }

    const pointWrapper = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.pointWrapper, 0, 1, 500, 'forwards');
    }

    const knightText = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.knightText, 0, 1, 500, 'forwards');
    }

    const pointText = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.view(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.pointText, 0, 1, 500, 'forwards');
    }

    return { popup, board, textContainer, knightArrow, pointArrow, knightWrapper, pointWrapper, knightText, pointText };
})();

const Hide = (() => {
    const popup = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.popup, 1, 0, 500, 'forwards');
    }

    const board = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.board, 1, 0, 500, 'forwards');
    }

    const textContainer = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.textContainer, 1, 0, 500, 'forwards');
    }

    const knightArrow = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_figures__WEBPACK_IMPORTED_MODULE_1__.Knight.getArrow().getSvg(), 1, 0, 100, 'forwards');
    }

    const pointArrow = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_figures__WEBPACK_IMPORTED_MODULE_1__.Point.getArrow().getSvg(), 1, 0, 500, 'forwards');
    }

    const knightWrapper = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.knightWrapper, 1, 0, 500, 'forwards');
    }

    const pointWrapper = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.pointWrapper, 1, 0, 500, 'forwards');
    }

    const knightText = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.knightText, 1, 0, 500, 'forwards');
    }

    const pointText = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(_models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.pointText, 1, 0, 500, 'forwards');
    }

    const plug = () => {
        return _animations__WEBPACK_IMPORTED_MODULE_2__.SmoothAnimations.SmoothVisibility.hide(document.createElement('plug'), 1, 0, 500, 'forwards');
    }

    return { plug, popup, board, textContainer, knightArrow, pointArrow, knightWrapper, pointWrapper, knightText, pointText };
})();

/***/ }),

/***/ "./src/views/nodes/arrow.js":
/*!**********************************!*\
  !*** ./src/views/nodes/arrow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrowNode: () => (/* binding */ getArrowNode)
/* harmony export */ });
const getArrowNode = (name) => {
    const arrow = document.querySelector('.arrow-template').cloneNode(true);
    arrow.classList.add(`arrow`);
    arrow.classList.add(`arrow-${name}`);
    arrow.classList.remove('arrow-template');
    return arrow;
}

/***/ }),

/***/ "./src/views/nodes/board.js":
/*!**********************************!*\
  !*** ./src/views/nodes/board.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillBoard: () => (/* binding */ fillBoard)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/listeners/forCells */ "./src/controllers/listeners/forCells.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/views/nodes/cell.js");



const fillBoard = (board) => {
    const cells = board.getCells();
    const width = board.getSize()[0];
    const height = board.getSize()[1];
    const boardNode = document.querySelector('.board');
    let isBlack = true;
    for (let i = 0; i < width; i++) {
        isBlack = !isBlack
        for (let j = 0; j < height; j++) {
            const cell = cells[j][i];
            const node = (0,_cell__WEBPACK_IMPORTED_MODULE_1__.getCellNode)();
            (0,_controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__.setListenersForCell)(node);
            cell.setNode(node);
            boardNode.appendChild(node);
            if (isBlack) {
                node.style.backgroundColor = '#d28b48';
            } else {
                node.style.backgroundColor = '#ffce9f';
            }
            isBlack = !isBlack;
        }
    }
}

/***/ }),

/***/ "./src/views/nodes/cell.js":
/*!*********************************!*\
  !*** ./src/views/nodes/cell.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCellNode: () => (/* binding */ getCellNode),
/* harmony export */   resetBorder: () => (/* binding */ resetBorder),
/* harmony export */   setBorder: () => (/* binding */ setBorder)
/* harmony export */ });
const setBorder = (cell, color) => {
    cell.style.border = `min(1vh, 1vw) ${color} solid`;
}

const resetBorder = (cell) => {
    cell.style.border = ``;
}

const getCellNode = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzPzIyYWIiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckNlbGxzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yRHJhZ0VsZW1lbnRzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGVybkRlbW8uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JUcmF2YWlscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2N1cnJlbnRBbmltYXRpb25zLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9maWd1cmVzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZmlndXJlc1Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2tuaWdodE1vdmVzR3JhcGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9sZXJuUHJlc2V0LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvbm9kZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hcnJvd3MuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvbWFrZURyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9tb3ZlLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL3BhdGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3Mvbm9kZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL25vZGVzL2JvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9ub2Rlcy9jZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMnZoO1xuICAgIHBhZGRpbmc6IDV2aDtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxdmg7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gICAgd2lkdGg6IG1pbig4NXZoLCA4MHZ3KTtcbiAgICBoZWlnaHQ6IG1pbig4NXZoLCA4MHZ3KTtcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgcmdiKDgyLCA4MiwgODIpIHNvbGlkO1xufVxuXG4uY2VsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm51bWJlciB7XG4gICAgZm9udC1zaXplOiBtaW4oNXZoLCA1dncpO1xufVxuXG4ucGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAydmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHdpZHRoOiBtaW4oODV2aCwgODB2dyk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3ZnIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ua25pZ2h0LFxuLnBvaW50IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IG1pbig4dmgsIDh2dyk7XG4gICAgaGVpZ2h0OiBtaW4oOHZoLCA4dncpO1xufVxuXG4uYXJyb3ctdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIHdpZHRoOiBtaW4oNnZoLCAzdncpO1xuICAgIGhlaWdodDogbWluKDZ2aCwgM3Z3KTtcbiAgICBmaWxsOiByZ2IoMjcsIDE3NywgMjQ3KTtcbn1cblxucGF0aCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5rbmlnaHQtd3JhcHBlcixcbi5wb2ludC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBnYXA6IG1pbigydmgsIDF2dyk7XG4gICAgd2lkdGg6IG1pbigzMHZoLCAyNXZ3KTtcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCA4dncpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZHJhZy1hbmQtZHJvcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgY29sb3I6IHJnYigyNywgMTc3LCAyNDcpO1xuICAgIGZvbnQtc2l6ZTogbWluKDEuNXZoLCAxLjJ2dyk7XG59XG5cbi5wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbiAgICB6LWluZGV4OiA1MDA7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJ2aDtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJ2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjs7SUFFckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsTUFBTTtJQUNOLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQSxrREFBa0Q7O0FBRWxELDJDQUEyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAydmg7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgd2lkdGg6IG1pbig4NXZoLCA4MHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oODV2aCwgODB2dyk7XFxuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSByZ2IoODIsIDgyLCA4Mikgc29saWQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gICAgZm9udC1zaXplOiBtaW4oNXZoLCA1dncpO1xcbn1cXG5cXG4ucGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogbWluKDg1dmgsIDgwdncpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ua25pZ2h0LFxcbi5wb2ludCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogbWluKDh2aCwgOHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oOHZoLCA4dncpO1xcbn1cXG5cXG4uYXJyb3ctdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIHdpZHRoOiBtaW4oNnZoLCAzdncpO1xcbiAgICBoZWlnaHQ6IG1pbig2dmgsIDN2dyk7XFxuICAgIGZpbGw6IHJnYigyNywgMTc3LCAyNDcpO1xcbn1cXG5cXG5wYXRoIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5rbmlnaHQtd3JhcHBlcixcXG4ucG9pbnQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgZ2FwOiBtaW4oMnZoLCAxdncpO1xcbiAgICB3aWR0aDogbWluKDMwdmgsIDI1dncpO1xcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCA4dncpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRyYWctYW5kLWRyb3Age1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGNvbG9yOiByZ2IoMjcsIDE3NywgMjQ3KTtcXG4gICAgZm9udC1zaXplOiBtaW4oMS41dmgsIDEuMnZ3KTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcXG4gICAgei1pbmRleDogNTAwO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnZoO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzoxLzEuMDAwMDAwMSkge31cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVzZXRCb3JkZXIsIHNldEJvcmRlciB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9jZWxsXCJcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckNlbGwgPSAoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlb3ZlciA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAncmVkJyk7XG4gICAgfSlcblxuICAgIGNvbnN0IG1vdXNlbGVhdmUgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcbiAgICAgICAgcmVzZXRCb3JkZXIoY2VsbCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckFjdGl2ZUNlbGxzID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBtb3VzZW92ZXIgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2dyZWVuJyk7XG4gICAgfSlcblxuICAgIGNvbnN0IG1vdXNlbGVhdmUgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdncmVlbicpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lckZvclBhdGhDZWxscyA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgbW91c2VvdmVyID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdibHVlJyk7XG4gICAgfSlcblxuICAgIGNvbnN0IG1vdXNlbGVhdmUgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdibHVlJyk7XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBBY3RpdmVGaWd1cmUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2N1cnJlbnRBbmltYXRpb25zXCI7XG5pbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzUG9zaXRpb25zXCI7XG5pbXBvcnQgeyBzdGFydCB9IGZyb20gXCIuLi8uLi9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyXCI7XG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wYXRoXCI7XG5pbXBvcnQgeyBtYWtlRHJhZ2dhYmxlIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvbWFrZURyYWdnYWJsZVwiO1xuaW1wb3J0IHsgaW5uZXJJbnRlcnZhbCwgbW92ZVgsIHJlc2V0S25pZ2h0LCBzdGFydE1vdmUgfSBmcm9tIFwiLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9tb3ZlXCI7XG5pbXBvcnQgeyByZXNldEJvcmRlciB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9jZWxsXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4vZm9yQ2VsbHNcIjtcblxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2ZyA9IChzdmcpID0+IHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBtYWtlRHJhZ2dhYmxlKHN2Zyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWdnYWJsZS5zdGFydERyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnZ2FibGUuZHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnZ2FibGUuZW5kRHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBQYXRoLmdldFBhdGgoKTtcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICByZXNldEJvcmRlcihjZWxsLmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgY2VsbC5nZXROb2RlKCkucmVtb3ZlQ2hpbGQoY2VsbC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLm51bWJlcicpKTtcbiAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JDZWxsKGNlbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0KCk7XG5cbiAgICAgICAgICAgIEtuaWdodC5zZXRDZWxsKEZpZ3VyZXNQb3NpdGlvbnMua25pZ2h0KTtcbiAgICAgICAgICAgIFBvaW50LnNldENlbGwoRmlndXJlc1Bvc2l0aW9ucy5wb2ludCk7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IFBhdGguZ2V0UGF0aCgpLnNsaWNlKCk7XG5cbiAgICAgICAgICAgIFBvaW50LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICBLbmlnaHQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIHN0YXJ0TW92ZShwYXRoKTtcblxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnRm9yTWliaWxlID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IG1ha2VEcmFnZ2FibGUoc3ZnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRyYWdnYWJsZS5zdGFydERyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnZ2FibGUuZHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ2dhYmxlLmVuZERyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBQYXRoLmdldFBhdGgoKTtcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICByZXNldEJvcmRlcihjZWxsLmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgY2VsbC5nZXROb2RlKCkucmVtb3ZlQ2hpbGQoY2VsbC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLm51bWJlcicpKTtcbiAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JDZWxsKGNlbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnQoKTtcblxuICAgICAgICAgICAgS25pZ2h0LnNldENlbGwoRmlndXJlc1Bvc2l0aW9ucy5rbmlnaHQpO1xuICAgICAgICAgICAgUG9pbnQuc2V0Q2VsbChGaWd1cmVzUG9zaXRpb25zLnBvaW50KTtcbiAgICAgICAgICAgIGxldCBwYXRoID0gUGF0aC5nZXRQYXRoKCkuc2xpY2UoKTtcblxuICAgICAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIEtuaWdodC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc3RhcnRNb3ZlKHBhdGgpO1xuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBjaGFuZ2VCb2FyZFByaW9yaXR5LCBjdXJyZW50RGVtbywgZGVtb1N0ZXBzLCBlbmREcmFnRGVtbyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGVyblByZXNldFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi92aWV3cy9hbmltYXRpb25zL3ByZXNldHNcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxpc3RlbmVyc0ZvckRlbW8gPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVBcnJvdygpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRlbW8gPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVBcnJvdygpKTtcbiAgICBFbGVtZW50cy5wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbW9TdGVwcygpLnN0ZXAxLCB7IG9uY2U6IHRydWUsIHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRlbW9Gb3JNaWJpbGUgPSAoKSA9PiB7XG4gICAgRWxlbWVudHMucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZGVtb1N0ZXBzKCkuc3RlcDEsIHsgb25jZTogdHJ1ZSwgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVBcnJvdygpKTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWdEZW1vKTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vRm9yTW9iaWxlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoaWRlQXJyb3coKSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xufVxuXG5mdW5jdGlvbiBoaWRlQXJyb3coKSB7XG4gICAgdmFyIHRpbWVyO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBLbmlnaHQuZ2V0QXJyb3coKS5nZXRTdmcoKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIFBvaW50LmdldEFycm93KCkuZ2V0U3ZnKCkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBWaWV3LmtuaWdodEFycm93KCk7XG4gICAgICAgICAgICBWaWV3LnBvaW50QXJyb3coKTtcbiAgICAgICAgfSwgNjAwKTtcbiAgICB9O1xufSIsImV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JUcmF2YWlscyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmFpbHMnKTtcblxufSIsImltcG9ydCAnLi92aWV3cy9jc3MvbWFpbi5jc3MnXG5pbXBvcnQgeyBBY3RpdmVCb2FyZCwgQm9hcmQgfSBmcm9tIFwiLi9tb2RlbHMvYm9hcmRcIjtcbmltcG9ydCB7IGtuaWdodE1vdmVzSGFuZGxlciB9IGZyb20gXCIuL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IEtuaWdodE1vdmVzR3JhcGggfSBmcm9tIFwiLi9tb2RlbHMva25pZ2h0TW92ZXNHcmFwaFwiO1xuaW1wb3J0IHsgZmlsbEJvYXJkIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9ib2FyZCc7XG5pbXBvcnQgeyBtYWtlRHJhZ2dhYmxlIH0gZnJvbSAnLi92aWV3cy9hbmltYXRpb25zL21ha2VEcmFnZ2FibGUnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2ZyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckRyYWdFbGVtZW50cyc7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSAnLi9tb2RlbHMvZmlndXJlc1Bvc2l0aW9ucyc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JUcmF2YWlscyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclRyYXZhaWxzJztcbmltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tICcuL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vdmlld3MvYW5pbWF0aW9ucy9hcnJvd3MnO1xuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi9tb2RlbHMvZmlndXJlcyc7XG5pbXBvcnQgeyBjdXJyZW50RGVtbywgc3RhcnRMZXJuIH0gZnJvbSAnLi9tb2RlbHMvbGVyblByZXNldCc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JEZW1vIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGVybkRlbW8nO1xuXG5LbmlnaHRNb3Zlc0dyYXBoKCkuYnVpbGRHcmFwaChBY3RpdmVCb2FyZC5nZXRCb2FyZCgpKTtcblxuZmlsbEJvYXJkKEFjdGl2ZUJvYXJkLmdldEJvYXJkKCkpO1xuXG5zZXRMaXN0ZW5lcnNGb3JUcmF2YWlscygpO1xuXG5sZXQgaXNMZXJuID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNMZXJuJykpO1xuXG5pZiAoaXNMZXJuICE9PSAneWVzJykge1xuICAgIGxldCBkZW1vID0gc3RhcnRMZXJuKCk7XG4gICAgY3VycmVudERlbW8uc2V0ZGVtbyhkZW1vKTtcbn0iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5leHBvcnQgY29uc3QgQm9hcmQgPSAoKSA9PiB7XG4gIGxldCB3aWR0aCA9IDg7XG4gIGxldCBoZWlnaHQgPSA4O1xuXG4gIGxldCBjZWxscyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZUNlbGxzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IE5vZGUoaSwgaik7XG4gICAgICAgIGxpbmUucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGNlbGxzLnB1c2gobGluZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldENlbGxzID0gKCkgPT4ge1xuICAgIHJldHVybiBjZWxscztcbiAgfTtcblxuICBjb25zdCBzZXRTaXplID0gKG5XaWR0aCwgbkhlaWdodCkgPT4ge1xuICAgIHdpZHRoID0gbldpZHRoO1xuICAgIGhlaWdodCA9IG5IZWlnaHQ7XG4gIH1cblxuICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gIH1cblxuICByZXR1cm4geyBjcmVhdGVDZWxscywgZ2V0Q2VsbHMsIHNldFNpemUsIGdldFNpemUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVCb2FyZCA9ICgoKSA9PiB7XG4gIGxldCBhY3RpdmVCb2FyZCA9IEJvYXJkKCk7XG4gIGFjdGl2ZUJvYXJkLmNyZWF0ZUNlbGxzKCk7XG5cbiAgY29uc3Qgc2V0Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBhY3RpdmVCb2FyZCA9IGJvYXJkO1xuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFjdGl2ZUJvYXJkO1xuICB9XG4gIFxuICByZXR1cm4geyBzZXRCb2FyZCwgZ2V0Qm9hcmQgfTtcbn0pKClcbiIsImltcG9ydCB7IFNtb290aEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmNvbnN0IEFuaW1hdGluZ09iamVjdCA9ICgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uID0gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMuYm9hcmQsIDEsIDEsIDEsICdmb3J3YXJkcycpO1xuXG4gICAgY29uc3Qgc2V0QW5pbWF0aW9uID0gKG5ld0FuaW1hdGlvbikgPT4ge1xuICAgICAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICAgICAgYW5pbWF0aW9uID0gbmV3QW5pbWF0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRBbmltYXRpb24sIGdldEFuaW1hdGlvbiB9O1xufVxuXG5leHBvcnQgY29uc3QgQWN0aXZlQXJyb3cgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEFuaW1hdGluZ09iamVjdCgpO1xuICAgIHJldHVybiBwcm90b3R5cGU7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQWN0aXZlVGV4dCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQW5pbWF0aW5nT2JqZWN0KCk7XG4gICAgcmV0dXJuIHByb3RvdHlwZTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVGaWd1cmUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEFuaW1hdGluZ09iamVjdCgpO1xuICAgIHJldHVybiBwcm90b3R5cGU7XG59KSgpOyIsImV4cG9ydCBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKTtcbiAgICBjb25zdCBrbmlnaHRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJyk7XG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50LXdyYXBwZXInKTtcbiAgICBjb25zdCBrbmlnaHRUZXh0ID0ga25pZ2h0V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcCcpO1xuICAgIGNvbnN0IHBvaW50VGV4dCA9IHBvaW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcCcpO1xuXG4gICAgcmV0dXJuIHsgcG9wdXAsIGJvYXJkLCB0ZXh0Q29udGFpbmVyLCBrbmlnaHRUZXh0LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9XG59KSgpOyIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckRyYWdTdmcsIHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckRyYWdFbGVtZW50c1wiO1xuaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGdldE1vdmUsIHNldFhZIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzXCI7XG5pbXBvcnQgeyBnZXRBcnJvd05vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvYXJyb3dcIjtcbmltcG9ydCB7IEFjdGl2ZUFycm93IH0gZnJvbSBcIi4vY3VycmVudEFuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEZpZ3VyZSA9IChuZXdTdmcpID0+IHtcbiAgICBjb25zdCBzdmcgPSBuZXdTdmc7XG4gICAgbGV0IHBhcmVudDtcbiAgICBsZXQgY2VsbDtcblxuICAgIGNvbnN0IGdldFJlY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3ZnID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldENlbGwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNldENlbGwgPSAobkNlbGwpID0+IHtcbiAgICAgICAgY2VsbCA9IG5DZWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldENlbGwsIHNldENlbGwsIGdldFJlY3QsIGdldFN2Zywgc2V0UGFyZW50LCBnZXRQYXJlbnQgfVxufVxuXG5leHBvcnQgY29uc3QgQXJyb3cgPSAocGFyZW50LCBuYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRmlndXJlKGdldEFycm93Tm9kZShuYW1lKSk7XG4gICAgY29uc3QgYXJyb3cgPSBwcm90b3R5cGUuZ2V0U3ZnKCk7XG4gICAgbGV0IGludGVydmFsO1xuXG4gICAgY29uc3QgdmlldyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LXdyYXBwZXJgKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvdyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBBY3RpdmVBcnJvdy5zZXRBbmltYXRpb24oU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoYXJyb3csIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJykpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlY3RQYXJlbnQgPSBwYXJlbnQuZ2V0UmVjdCgpO1xuICAgICAgICBzZXRYWShhcnJvdywgcmVjdFBhcmVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVjdEFycm93ID0gcHJvdG90eXBlLmdldFJlY3QoKTtcbiAgICAgICAgICAgIGxldCByZWN0UGFyZW50ID0gcGFyZW50LmdldFJlY3QoKTtcbiAgICAgICAgICAgIHNldFhZKGFycm93LCByZWN0UGFyZW50KTtcbiAgICAgICAgICAgIGdldE1vdmUoYXJyb3csIHJlY3RQYXJlbnQsIHJlY3RBcnJvdyk7XG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgQWN0aXZlQXJyb3cuc2V0QW5pbWF0aW9uKFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKGFycm93LCAxLCAwLCA1MDAsICdmb3J3YXJkcycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgc2V0UG9zaXRpb24sIHZpZXcsIGhpZGUsIG1vdmUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBLbmlnaHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEZpZ3VyZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25pZ2h0JykpO1xuICAgIGNvbnN0IGFycm93ID0gQXJyb3cocHJvdG90eXBlLCAna25pZ2h0Jyk7XG5cbiAgICBwcm90b3R5cGUuc2V0UGFyZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQtd3JhcHBlcicpKTtcblxuICAgIGNvbnN0IHNldExpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmcocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Z0Zvck1pYmlsZShwcm90b3R5cGUuZ2V0U3ZnKCkpO1xuICAgIH0pKClcblxuICAgIGNvbnN0IGdldEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldEFycm93IH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IFBvaW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBGaWd1cmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50JykpO1xuICAgIGNvbnN0IGFycm93ID0gQXJyb3cocHJvdG90eXBlLCAncG9pbnQnKTtcblxuICAgIHByb3RvdHlwZS5zZXRQYXJlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50LXdyYXBwZXInKSk7XG5cbiAgICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICB9KSgpXG5cbiAgICBjb25zdCBnZXRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycm93O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRBcnJvdyB9KTtcbn0pKCk7IiwiZXhwb3J0IGNvbnN0IEZpZ3VyZXNQb3NpdGlvbnMgPSAoKCkgPT4ge1xuICAgIGxldCBrbmlnaHQgPSBbMCwgMF07XG4gICAgbGV0IHBvaW50ID0gWzAsIDBdO1xuXG4gICAgcmV0dXJuIHsga25pZ2h0LCBwb2ludCB9O1xufSkoKSIsImV4cG9ydCBjb25zdCBLbmlnaHRNb3Zlc0dyYXBoID0gKCkgPT4ge1xuICBsZXQgbnVsbE5vZGU7XG5cbiAgY29uc3QgZ2V0TnVsbE5vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bGxOb2RlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkR3JhcGggPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGJvYXJkLmdldENlbGxzKCk7XG4gICAgY29uc3Qgd2lkdGggPSBib2FyZC5nZXRTaXplKClbMF07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9hcmQuZ2V0U2l6ZSgpWzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBsZXQgY2VsbCA9IGNlbGxzW2pdW2ldO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDIsIGkgLSAxKSwgMCk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqIC0gMSwgaSAtIDIpLCAxKTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAxLCBpIC0gMiksIDIpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiArIDIsIGkgLSAxKSwgMyk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMiwgaSArIDEpLCA0KTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAxLCBpICsgMiksIDUpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDEsIGkgKyAyKSwgNik7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqIC0gMiwgaSArIDEpLCA3KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBudWxsTm9kZSA9IGNlbGxzWzBdWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vZGUgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldE51bGxOb2RlLCBidWlsZEdyYXBoIH07XG59O1xuIiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJGb3JQYXRoQ2VsbHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckNlbGxzXCI7XG5pbXBvcnQgeyB2aWV3UGF0aCB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL3BhdGhcIjtcbmltcG9ydCB7IHNldEJvcmRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9jZWxsXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4vZmlndXJlc1Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUGF0aCB9IGZyb20gXCIuL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IGtuaWdodE1vdmVzSGFuZGxlciA9ICgpID0+IHtcbiAgbGV0IGZpcnN0SGFsZlBhdGggPSBbXTtcbiAgbGV0IHNlY29uZEhhbGZQYXRoID0gW107XG4gIGxldCBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMgPSBbXTtcbiAgbGV0IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMgPSBbXTtcblxuICBjb25zdCBnZXRQYXRoID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgICAgcmV0dXJuIFtzdGFydF07XG4gICAgfVxuXG4gICAgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLnB1c2goW3N0YXJ0XSk7XG4gICAgbGV2ZWxFbmRQb2ludENoaWxkcmVucy5wdXNoKFtlbmRdKTtcblxuICAgIGNvbnN0IHBhdGggPSBib25kaW5nUGF0aChzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBjb25zdCBib25kaW5nUGF0aCA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgbGV0IHBhdGg7XG4gICAgbGV0IGludGVyc2VjdFBvaW50ID0gZmluZEludGVyc2VjdChbc3RhcnRdLCBbZW5kXSk7XG5cbiAgICBidWlsZFBhdGgoaW50ZXJzZWN0UG9pbnQsIGxldmVsU3RhcnRQb2ludENoaWxkcmVucywgZmlyc3RIYWxmUGF0aCk7XG4gICAgYnVpbGRQYXRoKGludGVyc2VjdFBvaW50LCBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLCBzZWNvbmRIYWxmUGF0aCk7XG5cbiAgICBmaXJzdEhhbGZQYXRoID0gZ2V0UHJvY2Vzc2VkQXJyKGZpcnN0SGFsZlBhdGgpO1xuICAgIHNlY29uZEhhbGZQYXRoID0gZ2V0UHJvY2Vzc2VkQXJyKHNlY29uZEhhbGZQYXRoKTtcblxuICAgIHBhdGggPSBmaXJzdEhhbGZQYXRoLnJldmVyc2UoKS5jb25jYXQoW2ludGVyc2VjdFBvaW50XSkuY29uY2F0KHNlY29uZEhhbGZQYXRoKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBjb25zdCBmaW5kSW50ZXJzZWN0ID0gKHN0YXJ0LCBlbmQsIGZsYWcgPSAnZGVmJykgPT4ge1xuICAgIGxldCBpbnRlcnNlY3Q7XG5cbiAgICBpZiAoZmxhZyAhPT0gJ2RlZicpIHtcbiAgICAgIGxldCBwb2ludHMgPSBmbGFnID09PSAnc3RhcnQnID8gc3RhcnQgOiBlbmQ7XG4gICAgICBzZXRDaGlsZHJlbnMocG9pbnRzLCBmbGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhZyA9ICdlbmQnO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0TGFzdCA9IGxldmVsU3RhcnRQb2ludENoaWxkcmVucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGVuZExhc3QgPSBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLmxlbmd0aCAtIDE7XG4gICAgY29uc3Qgc3RhcnRMdmxQb2ludHMgPSBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnNbc3RhcnRMYXN0XTtcbiAgICBjb25zdCBlbmRMdmxQb2ludHMgPSBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zW2VuZExhc3RdO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0UG9pbnRzID0gY2hlY2tDaGlsZHJlbnMoXG4gICAgICBzdGFydEx2bFBvaW50cyxcbiAgICAgIGVuZEx2bFBvaW50cyxcbiAgICApO1xuXG4gICAgaWYgKGludGVyc2VjdFBvaW50cy5sZW5ndGggPD0gMCkge1xuICAgICAgZmxhZyA9PT0gJ3N0YXJ0JyA/IGZsYWcgPSAnZW5kJyA6IGZsYWcgPSAnc3RhcnQnO1xuICAgICAgaW50ZXJzZWN0ID0gZmluZEludGVyc2VjdChzdGFydEx2bFBvaW50cywgZW5kTHZsUG9pbnRzLCBmbGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJzZWN0ID0gaW50ZXJzZWN0UG9pbnRzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Q7XG4gIH1cblxuICBjb25zdCBzZXRDaGlsZHJlbnMgPSAocG9pbnRDaGlsZHJlbnMsIGZsYWcpID0+IHtcbiAgICBsZXQgY2hpbGRyZW5zID0gW107XG4gICAgcG9pbnRDaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZCAhPT0gbnVsbCAmJiBjaGlsZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNoaWxkcmVucyA9IGdldFByb2Nlc3NlZEFycihjaGlsZHJlbnMuY29uY2F0KGNoaWxkLmdldE1vdmVzKCkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmbGFnID09PSBcInN0YXJ0XCJcbiAgICAgID8gbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLnB1c2goY2hpbGRyZW5zKVxuICAgICAgOiBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLnB1c2goY2hpbGRyZW5zKTtcbiAgfTtcblxuICBjb25zdCBidWlsZFBhdGggPSAoaW50ZXJzZWN0UG9pbnQsIGNoaWxkcmVucywgY29udGFpbmVyKSA9PiB7XG4gICAgbGV0IG1vdmVzID0gZ2V0UHJvY2Vzc2VkQXJyKGludGVyc2VjdFBvaW50LmdldE1vdmVzKCkpO1xuICAgIGxldCBsdmwgPSBjaGlsZHJlbnMucG9wKCk7XG5cbiAgICBpZiAobHZsLmluZGV4T2YoaW50ZXJzZWN0UG9pbnQpID49IDApIHtcbiAgICAgIGx2bCA9IGNoaWxkcmVucy5wb3AoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaW50ZXJzZWN0UG9pbnRzID0gY2hlY2tDaGlsZHJlbnMoXG4gICAgICAgIG1vdmVzLFxuICAgICAgICBsdmwsXG4gICAgICApO1xuICAgICAgY29udGFpbmVyLnB1c2goaW50ZXJzZWN0UG9pbnRzWzBdKTtcbiAgICAgIGJ1aWxkUGF0aChpbnRlcnNlY3RQb2ludHNbMF0sIGNoaWxkcmVucywgY29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0NoaWxkcmVucyA9IChzdGFydENoaWxkcmVucywgZW5kQ2hpbGRyZW5zKSA9PiB7XG4gICAgY29uc3QgY29tbW9uID0gc3RhcnRDaGlsZHJlbnMuZmlsdGVyKFxuICAgICAgKGNoaWxkKSA9PiBlbmRDaGlsZHJlbnMuaW5kZXhPZihjaGlsZCkgIT09IC0xLFxuICAgICk7XG4gICAgcmV0dXJuIGNvbW1vbjtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQYXRoIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gIGxldCBwYXRoID0ga25pZ2h0TW92ZXNIYW5kbGVyKCkuZ2V0UGF0aChGaWd1cmVzUG9zaXRpb25zLmtuaWdodCwgRmlndXJlc1Bvc2l0aW9ucy5wb2ludCk7XG4gIFBhdGguc2V0UGF0aChwYXRoKTtcbiAgdmlld1BhdGgoKTtcbn1cblxuY29uc3QgZ2V0UHJvY2Vzc2VkQXJyID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoYXJyYXkuZmlsdGVyKChuKSA9PiBuKSk7XG4gIHJldHVybiBbLi4uc2V0XTtcbn0iLCJpbXBvcnQgeyByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vLCByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vRm9yTW9iaWxlLCBzZXRMaXN0ZW5lcnNGb3JEZW1vLCBzZXRMaXN0ZW5lcnNGb3JEZW1vRm9yTWliaWxlIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMZXJuRGVtb1wiO1xuaW1wb3J0IHsgSGlkZSwgVmlldyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL3ByZXNldHNcIjtcbmltcG9ydCB7IEFjdGl2ZVRleHQgfSBmcm9tIFwiLi9jdXJyZW50QW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnREZW1vID0gKCgpID0+IHtcbiAgICBsZXQgZGVtbztcblxuICAgIGNvbnN0IGdldERlbW8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkZW1vO1xuICAgIH1cblxuICAgIGNvbnN0IHNldGRlbW8gPSAobkRlbW8pID0+IHtcbiAgICAgICAgZGVtbyA9IG5EZW1vO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldGRlbW8sIGdldERlbW8gfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBzdGFydExlcm4gPSAoKSA9PiB7XG4gICAgZGVtb1N0ZXBzKCkuc3RhcnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbW9TdGVwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRGVtbygpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEZW1vRm9yTWliaWxlKCk7XG4gICAgICAgIEtuaWdodC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBQb2ludC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBWaWV3LnBvcHVwKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVmlldy50ZXh0Q29udGFpbmVyKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ZXAxID0gKCkgPT4ge1xuICAgICAgICBFbGVtZW50cy5rbmlnaHRXcmFwcGVyLnN0eWxlLnpJbmRleCA9ICc1MDEnO1xuICAgICAgICBIaWRlLnRleHRDb250YWluZXIoKTtcbiAgICAgICAgVmlldy5rbmlnaHRXcmFwcGVyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAga25pZ2h0RGVtbygpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGVwMiA9ICgpID0+IHtcbiAgICAgICAgRWxlbWVudHMucG9pbnRXcmFwcGVyLnN0eWxlLnpJbmRleCA9ICc1MDEnO1xuICAgICAgICBWaWV3LnBvaW50V3JhcHBlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBvaW50RGVtbygpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyc0ZvckRlbW8oKTtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtb0Zvck1vYmlsZSgpO1xuICAgICAgICBFbGVtZW50cy5rbmlnaHRXcmFwcGVyLnJlbW92ZUNoaWxkKEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpKTtcbiAgICAgICAgRWxlbWVudHMucG9pbnRXcmFwcGVyLnJlbW92ZUNoaWxkKFBvaW50LmdldEFycm93KCkuZ2V0U3ZnKCkpO1xuICAgICAgICBIaWRlLnBvcHVwKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0xlcm4nLCBKU09OLnN0cmluZ2lmeSgneWVzJykpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0LCBzdGVwMSwgc3RlcDIsIGVuZCB9XG59XG5cbmNvbnN0IGtuaWdodERlbW8gPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCkuc3R5bGUuekluZGV4ID0gNjAwO1xuICAgIEtuaWdodC5nZXRBcnJvdygpLnNldFBvc2l0aW9uKCk7XG4gICAgS25pZ2h0LmdldEFycm93KCkudmlldygpO1xuICAgIEtuaWdodC5nZXRBcnJvdygpLm1vdmUoKTtcbiAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LmtuaWdodFRleHQoKSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICB9LCAxMDAwKTtcbn1cblxuY29uc3QgcG9pbnREZW1vID0gKCkgPT4ge1xuICAgIFBvaW50LmdldEFycm93KCkuc2V0UG9zaXRpb24oKTtcbiAgICBQb2ludC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICBQb2ludC5nZXRBcnJvdygpLm1vdmUoKTtcbiAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LnBvaW50VGV4dCgpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgIH0sIDEwMDApO1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQm9hcmRQcmlvcml0eSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc3ZnTmFtZSA9IGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsO1xuICAgIGlmIChzdmdOYW1lID09PSAna25pZ2h0Jykge1xuICAgICAgICBhZGRCb2FyZFByaW9yaXR5KEtuaWdodCk7XG4gICAgICAgIEtuaWdodC5nZXRBcnJvdygpLmhpZGUoKTtcbiAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5rbmlnaHRUZXh0KCkpO1xuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBQb2ludC5nZXRBcnJvdygpLmhpZGUoKTtcbiAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5wb2ludFRleHQoKSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZEJvYXJkUHJpb3JpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgVmlldy5ib2FyZCgpO1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICc1MDEnO1xufVxuXG5jb25zdCByZW1vdmVCb2FyZFByaW9yaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xufVxuXG5leHBvcnQgY29uc3QgZW5kRHJhZ0RlbW8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN2Z05hbWUgPSBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgaWYgKEtuaWdodC5nZXRQYXJlbnQoKS5jbGFzc05hbWUgPT09ICdrbmlnaHQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIEtuaWdodC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcua25pZ2h0VGV4dCgpKTtcbiAgICAgICAgICAgIHJlbW92ZUJvYXJkUHJpb3JpdHkoS25pZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnIG5vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuc3RlcDIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBpZiAoUG9pbnQuZ2V0UGFyZW50KCkuY2xhc3NOYW1lICE9PSAncG9pbnQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQb2ludC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuZ2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LnBvaW50VGV4dCgpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgTm9kZSA9IChjWCwgY1kpID0+IHtcbiAgbGV0IG5vZGU7XG4gIGNvbnN0IHggPSBjWDtcbiAgY29uc3QgeSA9IGNZO1xuXG4gIGxldCBtb3ZlcyA9IFs4XTtcblxuICBjb25zdCBzZXROb2RlID0gKG5Ob2RlKSA9PiB7XG4gICAgbm9kZSA9IG5Ob2RlO1xuICB9XG5cbiAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGNvbnN0IHNldE1vdmUgPSAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBtb3Zlc1tpbmRleF0gPSBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGdldE1vdmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBtb3ZlcztcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7IHNldE5vZGUsIGdldE5vZGUsIHNldE1vdmUsIGdldE1vdmVzLCBnZXRDb29yZGluYXRlcyB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBQYXRoID0gKCgpID0+IHtcbiAgICBsZXQgcGF0aDtcblxuICAgIGNvbnN0IHNldFBhdGggPSAoblBhdG4pID0+IHtcbiAgICAgICAgcGF0aCA9IG5QYXRuO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhdGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldFBhdGgsIGdldFBhdGggfTtcbn0pKCkiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeHkgPSAoZSwgeCwgeSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eH1gIH0sIHsgbGVmdDogYCR7eX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3RhdGUgPSAoZSwgcm90YXRlMSwgcm90YXRlMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTF9ZGVnKWAgfSwgeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUyfWRlZylgIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB4LCB5LCB4eSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBTbW9vdGhBbmltYXRpb25zID0gKCgpID0+IHtcblxuICAgIGNvbnN0IFNtb290aFZpc2liaWxpdHkgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkucGxheVN0YXRlICE9PSAncGF1c2VkJykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkdXIpO1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZpZXcgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgdmlldywgaGlkZSB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBTbW9vdGhWaXNpYmlsaXR5IH07XG59KSgpOyIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZlID0gKGFycm93LCByZWN0UGFyZW50LCByZWN0QXJyb3cpID0+IHtcbiAgICBBbmltYXRpb25zLnRyYW5zZm9ybS54KGFycm93LCBgJHtyZWN0UGFyZW50Lnh9cHhgLCBgJHtyZWN0UGFyZW50LnggKyByZWN0UGFyZW50LndpZHRofXB4YCwgNDAwLCAnZm9yd2FyZHMnKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdFBhcmVudC54ICsgcmVjdFBhcmVudC53aWR0aH1weGAsIGAke3JlY3RQYXJlbnQueH1weGAsIDQwMCwgJ2ZvcndhcmRzJylcbiAgICB9KTtcbiAgICBBbmltYXRpb25zLnRyYW5zZm9ybS55KGFycm93LCBgJHtyZWN0UGFyZW50Lnl9cHhgLCBgJHtyZWN0UGFyZW50LnkgLSByZWN0UGFyZW50LmhlaWdodH1weGAsIDQwMCwgJ2ZvcndhcmRzJykuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgIEFuaW1hdGlvbnMudHJhbnNmb3JtLnkoYXJyb3csIGAke3JlY3RQYXJlbnQueSAtIHJlY3RQYXJlbnQuaGVpZ2h0fXB4YCwgYCR7cmVjdFBhcmVudC55fXB4YCwgNDAwLCAnZm9yd2FyZHMnKVxuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBjb25zdCBzZXRYWSA9IChhcnJvdywgcmVjdCkgPT4ge1xuICAgIGNvbnN0IHhmb3JtcyA9IGFycm93LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZShyZWN0LmhlaWdodCwgLXJlY3Qud2lkdGgpO1xufSIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckFjdGl2ZUNlbGxzLCBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxsc1wiO1xuaW1wb3J0IHsgQWN0aXZlQm9hcmQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JvYXJkXCI7XG5pbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzUG9zaXRpb25zXCI7XG5pbXBvcnQgeyBzZXRCb3JkZXIgfSBmcm9tIFwiLi4vbm9kZXMvY2VsbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyYWdnYWJsZShzdmcpIHtcbiAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgbGV0IGdhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2dhZycpO1xuICAgIGxldCBsYXN0ID0gZ2FnO1xuICAgIGxldCBjZWxsSW5kZXggPSAxO1xuICAgIGxldCBwYXJlbnQ7XG4gICAgY29uc3QgY2VsbHMgPSBBY3RpdmVCb2FyZC5nZXRCb2FyZCgpLmdldENlbGxzKCk7XG5cbiAgICBmdW5jdGlvbiBzdGFydERyYWcoZSkge1xuICAgICAgICBwYXJlbnQgPSBzdmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gc3ZnO1xuICAgICAgICBjb25zdCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzdmdYID0gcmVjdC54ICsgcGFyc2VJbnQocmVjdC53aWR0aCAvIDIpO1xuICAgICAgICBjb25zdCBzdmdZID0gcmVjdC55ICsgcGFyc2VJbnQocmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChzdmdYLCBzdmdZKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzWzBdLmdldEF0dHJpYnV0ZU5hbWVzKClbMF0gPT09ICdkJykge1xuICAgICAgICAgICAgY2VsbEluZGV4ID0gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGN1cnNvclggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY3Vyc29yWSA9IGUuY2xpZW50WTtcblxuICAgICAgICAgICAgaWYgKGN1cnNvclggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGN1cnNvclggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgICBjdXJzb3JZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGN1cnNvclgsIGN1cnNvclkpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2NlbGxJbmRleF07XG4gICAgICAgICAgICBsZXQgc3ZnWCA9IHJlY3QueCArIHBhcnNlSW50KHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgICAgIGxldCBzdmdZID0gcmVjdC55ICsgcGFyc2VJbnQocmVjdC5oZWlnaHQgLyAyKTtcblxuICAgICAgICAgICAgc2V0WFkoc3ZnLCBjdXJzb3JYIC0gc3ZnWCwgY3Vyc29yWSAtIHN2Z1kpO1xuICAgICAgICAgICAgc3ZnWCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgICAgICAgICAgc3ZnWSA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUgPT09ICdjZWxsJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlb3ZlckV2ZW50ID0gbmV3IEV2ZW50KCdtb3VzZW92ZXInKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobW91c2VvdmVyRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFzdCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlbGVhdmVFdmVudCA9IG5ldyBFdmVudCgnbW91c2VsZWF2ZScpO1xuICAgICAgICAgICAgICAgIGxhc3QuZGlzcGF0Y2hFdmVudChtb3VzZWxlYXZlRXZlbnQpO1xuICAgICAgICAgICAgICAgIGxhc3QgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kRHJhZygpIHtcbiAgICAgICAgcmVzZXQoKTtcblxuICAgICAgICBpZiAobGFzdCAhPT0gZ2FnICYmIGxhc3QgIT09IHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGxhc3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFzdC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgICAgICAgICAgICAgc2V0UGFyZW50KHN2ZywgbGFzdCk7XG4gICAgICAgICAgICAgICAgc2V0TGlzdGVuZXJzRm9yQWN0aXZlQ2VsbHMobGFzdCk7XG4gICAgICAgICAgICAgICAgc2V0Qm9yZGVyKGxhc3QsICdncmVlbicpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zdHlsZS5ib3JkZXIgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTmFtZSA9PT0gJ2NlbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2VsbHMuZm9yRWFjaChjZWxscyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5nZXROb2RlKCkgPT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWd1cmVzUG9zaXRpb25zW3N2Zy5jbGFzc05hbWUuYmFzZVZhbF0gPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICBkZWZhdWx0WFkoc3ZnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydERyYWcsIGRyYWcsIGVuZERyYWcsIGxhc3QgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFhZID0gKG15RWxlbWVudCwgeCwgeSkgPT4ge1xuICAgIGNvbnN0IHhmb3JtcyA9IG15RWxlbWVudC50cmFuc2Zvcm0uYmFzZVZhbDtcbiAgICBjb25zdCBmaXJzdFhGb3JtID0geGZvcm1zLmdldEl0ZW0oMCk7XG4gICAgZmlyc3RYRm9ybS5zZXRUcmFuc2xhdGUoZmlyc3RYRm9ybS5tYXRyaXguZSArIHgsIGZpcnN0WEZvcm0ubWF0cml4LmYgKyB5KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRYWSA9IChteUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB4Zm9ybXMgPSBteUVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XG4gICAgY29uc3QgZmlyc3RYRm9ybSA9IHhmb3Jtcy5nZXRJdGVtKDApO1xuICAgIGZpcnN0WEZvcm0uc2V0VHJhbnNsYXRlKDAsIDApO1xufVxuXG5jb25zdCBzZXRQYXJlbnQgPSAoc3ZnLCBwYXJlbnQpID0+IHtcbiAgICBpZiAoc3ZnLmNsYXNzTmFtZS5iYXNlVmFsID09PSAna25pZ2h0Jykge1xuICAgICAgICBLbmlnaHQuc2V0UGFyZW50KHBhcmVudClcbiAgICB9XG4gICAgaWYgKHN2Zy5jbGFzc05hbWUuYmFzZVZhbCA9PT0gJ3BvaW50Jykge1xuICAgICAgICBQb2ludC5zZXRQYXJlbnQocGFyZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQWN0aXZlQm9hcmQsIEJvYXJkIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ib2FyZFwiO1xuaW1wb3J0IHsgQWN0aXZlRmlndXJlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jdXJyZW50QW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzUG9zaXRpb25zXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRNb3ZlID0gKHBhdGgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgbW92ZVgoUG9pbnQuZ2V0Q2VsbCgpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0S25pZ2h0KCk7XG4gICAgICAgICAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICAgICAgICAgICAgICBQb2ludC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgICAgICB9LCAxNjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmVYKHBhdGguc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICB9LCA4MDApO1xufVxuXG5leHBvcnQgY29uc3QgcmVzZXRLbmlnaHQgPSAoKSA9PiB7XG4gICAgS25pZ2h0LnNldENlbGwoRmlndXJlc1Bvc2l0aW9ucy5rbmlnaHQpO1xuICAgIEtuaWdodC5nZXRDZWxsKCkuZ2V0Tm9kZSgpLmFwcGVuZENoaWxkKEtuaWdodC5nZXRTdmcoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBtb3ZlWCA9IChmaW5pc2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgc3RhcnRDb29yZGluYXRlcyA9IEtuaWdodC5nZXRDZWxsKCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgbGV0IGZpbmlzaENvb3JkaW5hdGVzID0gZmluaXNoLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGxldCBzdGFydFggPSBzdGFydENvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgc3RhcnRZID0gc3RhcnRDb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGZpbmlzaFggPSBmaW5pc2hDb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IGZpbmlzaFkgPSBmaW5pc2hDb29yZGluYXRlc1sxXTtcblxuICAgICAgICBpZiAoc3RhcnRYID09PSBmaW5pc2hYKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRZICE9PSBmaW5pc2hZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVZKGZpbmlzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXh0UG9pbnQgPSBzdGFydFggPiBmaW5pc2hYID8gQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKS5nZXRDZWxscygpW3N0YXJ0WCAtIDFdW3N0YXJ0WV0gOiBBY3RpdmVCb2FyZC5nZXRCb2FyZCgpLmdldENlbGxzKClbc3RhcnRYICsgMV1bc3RhcnRZXTtcbiAgICAgICAgICAgIGxldCBuZXh0UG9pbnRSZWN0ID0gbmV4dFBvaW50LmdldE5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXh0UG9pbnRSZWN0WCA9IG5leHRQb2ludFJlY3QueDtcbiAgICAgICAgICAgIEFjdGl2ZUZpZ3VyZS5zZXRBbmltYXRpb24oQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChLbmlnaHQuZ2V0U3ZnKCksIGAke0tuaWdodC5nZXRSZWN0KCkueH1weGAsIGAke25leHRQb2ludFJlY3RYfXB4YCwgMTAwKSk7XG4gICAgICAgICAgICBBY3RpdmVGaWd1cmUuZ2V0QW5pbWF0aW9uKCkuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dFBvaW50LmdldE5vZGUoKS5hcHBlbmRDaGlsZChLbmlnaHQuZ2V0U3ZnKCkpO1xuICAgICAgICAgICAgICAgIEtuaWdodC5zZXRDZWxsKG5leHRQb2ludClcbiAgICAgICAgICAgICAgICBtb3ZlWChmaW5pc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJycicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1vdmVZID0gKGZpbmlzaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBzdGFydENvb3JkaW5hdGVzID0gS25pZ2h0LmdldENlbGwoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBsZXQgZmluaXNoQ29vcmRpbmF0ZXMgPSBmaW5pc2guZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgbGV0IHN0YXJ0WCA9IHN0YXJ0Q29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGxldCBzdGFydFkgPSBzdGFydENvb3JkaW5hdGVzWzFdO1xuICAgICAgICBsZXQgZmluaXNoWCA9IGZpbmlzaENvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgZmluaXNoWSA9IGZpbmlzaENvb3JkaW5hdGVzWzFdO1xuXG4gICAgICAgIGlmIChzdGFydFkgPT09IGZpbmlzaFkpIHtcbiAgICAgICAgICAgIGlmIChzdGFydFggIT09IGZpbmlzaFgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZVgoZmluaXNoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV4dFBvaW50ID0gc3RhcnRZID4gZmluaXNoWSA/IEFjdGl2ZUJvYXJkLmdldEJvYXJkKCkuZ2V0Q2VsbHMoKVtzdGFydFhdW3N0YXJ0WSAtIDFdIDogQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKS5nZXRDZWxscygpW3N0YXJ0WF1bc3RhcnRZICsgMV07XG4gICAgICAgICAgICBsZXQgbmV4dFBvaW50UmVjdCA9IG5leHRQb2ludC5nZXROb2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbmV4dFBvaW50UmVjdFkgPSBuZXh0UG9pbnRSZWN0Lnk7XG4gICAgICAgICAgICBBY3RpdmVGaWd1cmUuc2V0QW5pbWF0aW9uKEFuaW1hdGlvbnMudHJhbnNmb3JtLnkoS25pZ2h0LmdldFN2ZygpLCBgJHtLbmlnaHQuZ2V0UmVjdCgpLnl9cHhgLCBgJHtuZXh0UG9pbnRSZWN0WX1weGAsIDEwMCkpO1xuICAgICAgICAgICAgQWN0aXZlRmlndXJlLmdldEFuaW1hdGlvbigpLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHRQb2ludC5nZXROb2RlKCkuYXBwZW5kQ2hpbGQoS25pZ2h0LmdldFN2ZygpKTtcbiAgICAgICAgICAgICAgICBLbmlnaHQuc2V0Q2VsbChuZXh0UG9pbnQpXG4gICAgICAgICAgICAgICAgbW92ZVkoZmluaXNoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJycicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lckZvclBhdGhDZWxscyB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhdGhcIjtcbmltcG9ydCB7IHNldEJvcmRlciB9IGZyb20gXCIuLi9ub2Rlcy9jZWxsXCI7XG5pbXBvcnQgeyBTbW9vdGhBbmltYXRpb25zIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1BhdGggPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IFBhdGguZ2V0UGF0aCgpO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHBhdGhbaV07XG4gICAgICAgICAgICBsZXQgc3BhbiA9IHNldFVwU3BhbihpICsgMSwgJ251bWJlcicpO1xuICAgICAgICAgICAgaWYgKGNlbGwuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5wb2ludCcpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5nZXROb2RlKCkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhzcGFuLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgICAgICAgICAgc2V0Qm9yZGVyKGNlbGwuZ2V0Tm9kZSgpLCAnYmx1ZScpO1xuICAgICAgICAgICAgc2V0TGlzdGVuZXJGb3JQYXRoQ2VsbHMoY2VsbC5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICBcbiAgICB9XG59XG5cbmNvbnN0IGFkZENsYXNzZXMgPSAobm9kZSwgLi4uY2xhc3NlcykgPT4ge1xuICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGN1ckNsYXNzKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldFVwU3BhbiA9ICh0ZXh0LCBjbGFzc05hbWUgPSAnJykgPT4ge1xuICAgIGxldCBzcGFuID0gY3JlYXRlTm9kZSgnc3BhbicsIGNsYXNzTmFtZSk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIHNwYW47XG59XG5cbmNvbnN0IGNyZWF0ZU5vZGUgPSAobm9kZU5hbWUsIC4uLmNsYXNzTmFtZSkgPT4ge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgYWRkQ2xhc3Nlcyhub2RlLCAuLi5jbGFzc05hbWUpO1xuICAgIHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9wdXAsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuICAgIGNvbnN0IGJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMuYm9hcmQsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy50ZXh0Q29udGFpbmVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCksIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KFBvaW50LmdldEFycm93KCkuZ2V0U3ZnKCksIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmtuaWdodFdyYXBwZXIsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9pbnRXcmFwcGVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5rbmlnaHRUZXh0LCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50VGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLnBvaW50VGV4dCwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3B1cCwgYm9hcmQsIHRleHRDb250YWluZXIsIGtuaWdodEFycm93LCBwb2ludEFycm93LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEhpZGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMucG9wdXAsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5ib2FyZCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMudGV4dENvbnRhaW5lciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpLCAxLCAwLCAxMDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5rbmlnaHRXcmFwcGVyLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLnBvaW50V3JhcHBlciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMua25pZ2h0VGV4dCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5wb2ludFRleHQsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGx1ZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BsdWcnKSwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbHVnLCBwb3B1cCwgYm9hcmQsIHRleHRDb250YWluZXIsIGtuaWdodEFycm93LCBwb2ludEFycm93LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9O1xufSkoKTsiLCJleHBvcnQgY29uc3QgZ2V0QXJyb3dOb2RlID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy10ZW1wbGF0ZScpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKGBhcnJvd2ApO1xuICAgIGFycm93LmNsYXNzTGlzdC5hZGQoYGFycm93LSR7bmFtZX1gKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdy10ZW1wbGF0ZScpO1xuICAgIHJldHVybiBhcnJvdztcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxsc1wiO1xuaW1wb3J0IHsgZ2V0Q2VsbE5vZGUgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBmaWxsQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGJvYXJkLmdldENlbGxzKCk7XG4gICAgY29uc3Qgd2lkdGggPSBib2FyZC5nZXRTaXplKClbMF07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9hcmQuZ2V0U2l6ZSgpWzFdO1xuICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGxldCBpc0JsYWNrID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgaXNCbGFjayA9ICFpc0JsYWNrXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tqXVtpXTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBnZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbChub2RlKTtcbiAgICAgICAgICAgIGNlbGwuc2V0Tm9kZShub2RlKTtcbiAgICAgICAgICAgIGJvYXJkTm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGlmIChpc0JsYWNrKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QyOGI0OCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmNlOWYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNCbGFjayA9ICFpc0JsYWNrO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBzZXRCb3JkZXIgPSAoY2VsbCwgY29sb3IpID0+IHtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IGBtaW4oMXZoLCAxdncpICR7Y29sb3J9IHNvbGlkYDtcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0Qm9yZGVyID0gKGNlbGwpID0+IHtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IGBgO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2VsbE5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIHJldHVybiBjZWxsO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==