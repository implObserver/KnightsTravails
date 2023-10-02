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

@media screen and (min-aspect-ratio: 1/1) {}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,2CAA2C;IAC3C,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,sBAAsB;IACtB,uBAAuB;IACvB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;;IAErB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,MAAM;IACN,OAAO;IACP,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA,kDAAkD;;AAElD,2CAA2C","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: max-content;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    justify-content: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    gap: 2vh;\n    padding: 5vh;\n}\n\n.board-wrapper {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    grid-template-rows: min-content min-content;\n    gap: 1vh;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    width: min(85vh, 80vw);\n    height: min(85vh, 80vw);\n    border: min(1vh, 1vw) rgb(82, 82, 82) solid;\n}\n\n.cell {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    align-content: center;\n    align-items: center;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.number {\n    font-size: min(5vh, 5vw);\n}\n\n.panel {\n    display: grid;\n    gap: 2vh;\n    grid-template-columns: 1fr 1fr;\n    width: min(85vh, 80vw);\n    justify-items: center;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.svg {\n    display: grid;\n}\n\n.knight,\n.point {\n    display: grid;\n    position: absolute;\n    width: min(8vh, 8vw);\n    height: min(8vh, 8vw);\n}\n\n.arrow-template {\n    display: none;\n}\n\n.arrow {\n    position: absolute;\n    pointer-events: none;\n    visibility: hidden;\n    justify-self: start;\n    width: min(6vh, 3vw);\n    height: min(6vh, 3vw);\n    fill: rgb(27, 177, 247);\n}\n\npath {\n    pointer-events: none;\n}\n\n.knight-wrapper,\n.point-wrapper {\n    display: grid;\n    grid-template-columns: max-content max-content;\n    background-color: white;\n    border-radius: 1vh;\n    padding: 1vh;\n    gap: min(2vh, 1vw);\n    width: min(30vh, 25vw);\n    height: min(10vh, 8vw);\n    justify-items: center;\n    \n    align-items: center;\n    align-content: center;\n}\n\n.drag-and-drop {\n    display: grid;\n    visibility: hidden;\n    color: rgb(27, 177, 247);\n    font-size: min(1.5vh, 1.2vw);\n}\n\n.popup {\n    position: fixed;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    padding: 1vh;\n    transition: all 0.5s ease 0s;\n    z-index: 500;\n}\n\n.text-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2vh;\n    height: 30%;\n    width: 60%;\n    opacity: 0;\n    visibility: hidden;\n    color: white;\n    font-size: 2vh;\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) {}"],"sourceRoot":""}]);
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
/* harmony import */ var _models_figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/figures */ "./src/models/figures.js");
/* harmony import */ var _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/lernPreset */ "./src/models/lernPreset.js");
/* harmony import */ var _views_animations_presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/animations/presets */ "./src/views/animations/presets.js");




const removeListenersForDemo = () => {
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    window.removeEventListener('resize', hideArrow());
}

const setListenersForDemo = () => {
    window.removeEventListener('resize', hideArrow());
    window.addEventListener('click', (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.demoSteps)().step1, { once: true })
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);

}

const setListenersForDemoForMibile = () => {
    window.addEventListener('click', (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.demoSteps)().step1, { once: true })
    window.addEventListener('resize', hideArrow());
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
}

const removeListenersForDemoForMobile = () => {
    window.removeEventListener('resize', hideArrow());
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
}

function hideArrow() {
    var timer;
    return function (e) {
        _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getArrow().getSvg().style.visibility = 'hidden';
        _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getArrow().getSvg().style.visibility = 'hidden';
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            _views_animations_presets__WEBPACK_IMPORTED_MODULE_2__.View.knightArrow();
            _views_animations_presets__WEBPACK_IMPORTED_MODULE_2__.View.pointArrow();
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
    console.log(start)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW4uY3NzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcz8yMmFiIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckRyYWdFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2Zvckxlcm5EZW1vLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yVHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9jdXJyZW50QW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZmlndXJlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9rbmlnaHRNb3Zlc0dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvbGVyblByZXNldC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9wYXRoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL21ha2VEcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvbW92ZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9wYXRoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL3ByZXNldHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL25vZGVzL2Fycm93LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9ub2Rlcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3Mvbm9kZXMvY2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDJ2aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBnYXA6IDJ2aDtcbiAgICBwYWRkaW5nOiA1dmg7XG59XG5cbi5ib2FyZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXZoO1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICAgIHdpZHRoOiBtaW4oODV2aCwgODB2dyk7XG4gICAgaGVpZ2h0OiBtaW4oODV2aCwgODB2dyk7XG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpIHJnYig4MiwgODIsIDgyKSBzb2xpZDtcbn1cblxuLmNlbGwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogbWluKDV2aCwgNXZ3KTtcbn1cblxuLnBhbmVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMnZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB3aWR0aDogbWluKDg1dmgsIDgwdncpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN2ZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmtuaWdodCxcbi5wb2ludCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IG1pbig4dmgsIDh2dyk7XG4gICAgaGVpZ2h0OiBtaW4oOHZoLCA4dncpO1xufVxuXG4uYXJyb3ctdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgIHdpZHRoOiBtaW4oNnZoLCAzdncpO1xuICAgIGhlaWdodDogbWluKDZ2aCwgM3Z3KTtcbiAgICBmaWxsOiByZ2IoMjcsIDE3NywgMjQ3KTtcbn1cblxucGF0aCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5rbmlnaHQtd3JhcHBlcixcbi5wb2ludC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xuICAgIHBhZGRpbmc6IDF2aDtcbiAgICBnYXA6IG1pbigydmgsIDF2dyk7XG4gICAgd2lkdGg6IG1pbigzMHZoLCAyNXZ3KTtcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCA4dncpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRyYWctYW5kLWRyb3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGNvbG9yOiByZ2IoMjcsIDE3NywgMjQ3KTtcbiAgICBmb250LXNpemU6IG1pbigxLjV2aCwgMS4ydncpO1xufVxuXG4ucG9wdXAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMXZoO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG4gICAgei1pbmRleDogNTAwO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAydmg7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAydmg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7fWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjs7SUFFckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsTUFBTTtJQUNOLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQSxrREFBa0Q7O0FBRWxELDJDQUEyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAydmg7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgd2lkdGg6IG1pbig4NXZoLCA4MHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oODV2aCwgODB2dyk7XFxuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSByZ2IoODIsIDgyLCA4Mikgc29saWQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gICAgZm9udC1zaXplOiBtaW4oNXZoLCA1dncpO1xcbn1cXG5cXG4ucGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogbWluKDg1dmgsIDgwdncpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ua25pZ2h0LFxcbi5wb2ludCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IG1pbig4dmgsIDh2dyk7XFxuICAgIGhlaWdodDogbWluKDh2aCwgOHZ3KTtcXG59XFxuXFxuLmFycm93LXRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICB3aWR0aDogbWluKDZ2aCwgM3Z3KTtcXG4gICAgaGVpZ2h0OiBtaW4oNnZoLCAzdncpO1xcbiAgICBmaWxsOiByZ2IoMjcsIDE3NywgMjQ3KTtcXG59XFxuXFxucGF0aCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ua25pZ2h0LXdyYXBwZXIsXFxuLnBvaW50LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGdhcDogbWluKDJ2aCwgMXZ3KTtcXG4gICAgd2lkdGg6IG1pbigzMHZoLCAyNXZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTB2aCwgOHZ3KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZHJhZy1hbmQtZHJvcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgY29sb3I6IHJnYigyNywgMTc3LCAyNDcpO1xcbiAgICBmb250LXNpemU6IG1pbigxLjV2aCwgMS4ydncpO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xcbiAgICB6LWluZGV4OiA1MDA7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZXNldEJvcmRlciwgc2V0Qm9yZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL2NlbGxcIlxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgbW91c2VvdmVyID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdyZWQnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICByZXNldEJvcmRlcihjZWxsKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQWN0aXZlQ2VsbHMgPSAoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlb3ZlciA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAnZ3JlZW4nKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2dyZWVuJyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyRm9yUGF0aENlbGxzID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBtb3VzZW92ZXIgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2JsdWUnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2JsdWUnKTtcbiAgICB9KVxufSIsImltcG9ydCB7IEFjdGl2ZUZpZ3VyZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY3VycmVudEFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IEZpZ3VyZXNQb3NpdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnNcIjtcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhdGhcIjtcbmltcG9ydCB7IG1ha2VEcmFnZ2FibGUgfSBmcm9tIFwiLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9tYWtlRHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyBpbm5lckludGVydmFsLCBtb3ZlWCwgcmVzZXRLbmlnaHQsIHN0YXJ0TW92ZSB9IGZyb20gXCIuLi8uLi92aWV3cy9hbmltYXRpb25zL21vdmVcIjtcbmltcG9ydCB7IHJlc2V0Qm9yZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL2NlbGxcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckNlbGwgfSBmcm9tIFwiLi9mb3JDZWxsc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IG1ha2VEcmFnZ2FibGUoc3ZnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ2dhYmxlLnN0YXJ0RHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdnYWJsZS5kcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdnYWJsZS5lbmREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IFBhdGguZ2V0UGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0Qm9yZGVyKGNlbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICBjZWxsLmdldE5vZGUoKS5yZW1vdmVDaGlsZChjZWxsLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubnVtYmVyJykpO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwoY2VsbC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnQoKTtcblxuICAgICAgICAgICAgS25pZ2h0LnNldENlbGwoRmlndXJlc1Bvc2l0aW9ucy5rbmlnaHQpO1xuICAgICAgICAgICAgUG9pbnQuc2V0Q2VsbChGaWd1cmVzUG9zaXRpb25zLnBvaW50KTtcbiAgICAgICAgICAgIGxldCBwYXRoID0gUGF0aC5nZXRQYXRoKCkuc2xpY2UoKTtcblxuICAgICAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIEtuaWdodC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc3RhcnRNb3ZlKHBhdGgpO1xuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUgPSAoc3ZnKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gbWFrZURyYWdnYWJsZShzdmcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZHJhZ2dhYmxlLnN0YXJ0RHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdnYWJsZS5kcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBkcmFnZ2FibGUuZW5kRHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IFBhdGguZ2V0UGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHJlc2V0Qm9yZGVyKGNlbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICBjZWxsLmdldE5vZGUoKS5yZW1vdmVDaGlsZChjZWxsLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubnVtYmVyJykpO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwoY2VsbC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGFydCgpO1xuXG4gICAgICAgICAgICBLbmlnaHQuc2V0Q2VsbChGaWd1cmVzUG9zaXRpb25zLmtuaWdodCk7XG4gICAgICAgICAgICBQb2ludC5zZXRDZWxsKEZpZ3VyZXNQb3NpdGlvbnMucG9pbnQpO1xuICAgICAgICAgICAgbGV0IHBhdGggPSBQYXRoLmdldFBhdGgoKS5zbGljZSgpO1xuXG4gICAgICAgICAgICBQb2ludC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICBzdGFydE1vdmUocGF0aCk7XG5cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBjaGFuZ2VCb2FyZFByaW9yaXR5LCBjdXJyZW50RGVtbywgZGVtb1N0ZXBzLCBlbmREcmFnRGVtbyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGVyblByZXNldFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi92aWV3cy9hbmltYXRpb25zL3ByZXNldHNcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxpc3RlbmVyc0ZvckRlbW8gPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVBcnJvdygpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRlbW8gPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVBcnJvdygpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZW1vU3RlcHMoKS5zdGVwMSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRlbW9Gb3JNaWJpbGUgPSAoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVtb1N0ZXBzKCkuc3RlcDEsIHsgb25jZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoaWRlQXJyb3coKSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtb0Zvck1vYmlsZSA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGlkZUFycm93KCkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBQb2ludC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWdEZW1vKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFycm93KCkge1xuICAgIHZhciB0aW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVmlldy5rbmlnaHRBcnJvdygpO1xuICAgICAgICAgICAgVmlldy5wb2ludEFycm93KCk7XG4gICAgICAgIH0sIDYwMCk7XG4gICAgfTtcbn0iLCJleHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yVHJhdmFpbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXZhaWxzJyk7XG5cbn0iLCJpbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgQWN0aXZlQm9hcmQsIEJvYXJkIH0gZnJvbSBcIi4vbW9kZWxzL2JvYXJkXCI7XG5pbXBvcnQgeyBrbmlnaHRNb3Zlc0hhbmRsZXIgfSBmcm9tIFwiLi9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyXCI7XG5pbXBvcnQgeyBLbmlnaHRNb3Zlc0dyYXBoIH0gZnJvbSBcIi4vbW9kZWxzL2tuaWdodE1vdmVzR3JhcGhcIjtcbmltcG9ydCB7IGZpbGxCb2FyZCB9IGZyb20gJy4vdmlld3Mvbm9kZXMvYm9hcmQnO1xuaW1wb3J0IHsgbWFrZURyYWdnYWJsZSB9IGZyb20gJy4vdmlld3MvYW5pbWF0aW9ucy9tYWtlRHJhZ2dhYmxlJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckRyYWdTdmcgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JEcmFnRWxlbWVudHMnO1xuaW1wb3J0IHsgRmlndXJlc1Bvc2l0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnMnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yVHJhdmFpbHMgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JUcmF2YWlscyc7XG5pbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSAnLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzJztcbmltcG9ydCB7IEtuaWdodCB9IGZyb20gJy4vbW9kZWxzL2ZpZ3VyZXMnO1xuaW1wb3J0IHsgY3VycmVudERlbW8sIHN0YXJ0TGVybiB9IGZyb20gJy4vbW9kZWxzL2xlcm5QcmVzZXQnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yRGVtbyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2Zvckxlcm5EZW1vJztcblxuS25pZ2h0TW92ZXNHcmFwaCgpLmJ1aWxkR3JhcGgoQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbmZpbGxCb2FyZChBY3RpdmVCb2FyZC5nZXRCb2FyZCgpKTtcblxuc2V0TGlzdGVuZXJzRm9yVHJhdmFpbHMoKTtcblxubGV0IGlzTGVybiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzTGVybicpKTtcblxuaWYgKGlzTGVybiAhPT0gJ3llcycpIHtcbiAgICBsZXQgZGVtbyA9IHN0YXJ0TGVybigpO1xuICAgIGN1cnJlbnREZW1vLnNldGRlbW8oZGVtbyk7XG59IiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IEJvYXJkID0gKCkgPT4ge1xuICBsZXQgd2lkdGggPSA4O1xuICBsZXQgaGVpZ2h0ID0gODtcblxuICBsZXQgY2VsbHMgPSBbXTtcblxuICBjb25zdCBjcmVhdGVDZWxscyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBOb2RlKGksIGopO1xuICAgICAgICBsaW5lLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBjZWxscy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDZWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2VsbHM7XG4gIH07XG5cbiAgY29uc3Qgc2V0U2l6ZSA9IChuV2lkdGgsIG5IZWlnaHQpID0+IHtcbiAgICB3aWR0aCA9IG5XaWR0aDtcbiAgICBoZWlnaHQgPSBuSGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlQ2VsbHMsIGdldENlbGxzLCBzZXRTaXplLCBnZXRTaXplIH07XG59O1xuXG5leHBvcnQgY29uc3QgQWN0aXZlQm9hcmQgPSAoKCkgPT4ge1xuICBsZXQgYWN0aXZlQm9hcmQgPSBCb2FyZCgpO1xuICBhY3RpdmVCb2FyZC5jcmVhdGVDZWxscygpO1xuXG4gIGNvbnN0IHNldEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgYWN0aXZlQm9hcmQgPSBib2FyZDtcbiAgfVxuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBhY3RpdmVCb2FyZDtcbiAgfVxuICBcbiAgcmV0dXJuIHsgc2V0Qm9hcmQsIGdldEJvYXJkIH07XG59KSgpXG4iLCJpbXBvcnQgeyBTbW9vdGhBbmltYXRpb25zIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5jb25zdCBBbmltYXRpbmdPYmplY3QgPSAoKSA9PiB7XG4gICAgbGV0IGFuaW1hdGlvbiA9IFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmJvYXJkLCAxLCAxLCAxLCAnZm9yd2FyZHMnKTtcblxuICAgIGNvbnN0IHNldEFuaW1hdGlvbiA9IChuZXdBbmltYXRpb24pID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICAgIGFuaW1hdGlvbiA9IG5ld0FuaW1hdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QW5pbWF0aW9uLCBnZXRBbmltYXRpb24gfTtcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUFycm93ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBBbmltYXRpbmdPYmplY3QoKTtcbiAgICByZXR1cm4gcHJvdG90eXBlO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZVRleHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEFuaW1hdGluZ09iamVjdCgpO1xuICAgIHJldHVybiBwcm90b3R5cGU7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQWN0aXZlRmlndXJlID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBBbmltYXRpbmdPYmplY3QoKTtcbiAgICByZXR1cm4gcHJvdG90eXBlO1xufSkoKTsiLCJleHBvcnQgY29uc3QgRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtY29udGFpbmVyJyk7XG4gICAgY29uc3Qga25pZ2h0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQtd3JhcHBlcicpO1xuICAgIGNvbnN0IHBvaW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJyk7XG4gICAgY29uc3Qga25pZ2h0VGV4dCA9IGtuaWdodFdyYXBwZXIucXVlcnlTZWxlY3RvcignLmRyYWctYW5kLWRyb3AnKTtcbiAgICBjb25zdCBwb2ludFRleHQgPSBwb2ludFdyYXBwZXIucXVlcnlTZWxlY3RvcignLmRyYWctYW5kLWRyb3AnKTtcblxuICAgIHJldHVybiB7IHBvcHVwLCBib2FyZCwgdGV4dENvbnRhaW5lciwga25pZ2h0VGV4dCwga25pZ2h0V3JhcHBlciwgcG9pbnRXcmFwcGVyLCBrbmlnaHRUZXh0LCBwb2ludFRleHQgfVxufSkoKTsiLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnLCBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnRm9yTWliaWxlIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JEcmFnRWxlbWVudHNcIjtcbmltcG9ydCB7IFNtb290aEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBnZXRNb3ZlLCBzZXRYWSB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2Fycm93c1wiO1xuaW1wb3J0IHsgZ2V0QXJyb3dOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2Fycm93XCI7XG5pbXBvcnQgeyBBY3RpdmVBcnJvdyB9IGZyb20gXCIuL2N1cnJlbnRBbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBGaWd1cmUgPSAobmV3U3ZnKSA9PiB7XG4gICAgY29uc3Qgc3ZnID0gbmV3U3ZnO1xuICAgIGxldCBwYXJlbnQ7XG4gICAgbGV0IGNlbGw7XG5cbiAgICBjb25zdCBnZXRSZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN2ZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAoblBhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuUGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDZWxsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDZWxsID0gKG5DZWxsKSA9PiB7XG4gICAgICAgIGNlbGwgPSBuQ2VsbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRDZWxsLCBzZXRDZWxsLCBnZXRSZWN0LCBnZXRTdmcsIHNldFBhcmVudCwgZ2V0UGFyZW50IH1cbn1cblxuZXhwb3J0IGNvbnN0IEFycm93ID0gKHBhcmVudCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEZpZ3VyZShnZXRBcnJvd05vZGUobmFtZSkpO1xuICAgIGNvbnN0IGFycm93ID0gcHJvdG90eXBlLmdldFN2ZygpO1xuICAgIGxldCBpbnRlcnZhbDtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfS13cmFwcGVyYCk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgQWN0aXZlQXJyb3cuc2V0QW5pbWF0aW9uKFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KGFycm93LCAwLCAxLCA1MDAsICdmb3J3YXJkcycpKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCByZWN0UGFyZW50ID0gcGFyZW50LmdldFJlY3QoKTtcbiAgICAgICAgc2V0WFkoYXJyb3csIHJlY3RQYXJlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlY3RBcnJvdyA9IHByb3RvdHlwZS5nZXRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgcmVjdFBhcmVudCA9IHBhcmVudC5nZXRSZWN0KCk7XG4gICAgICAgICAgICBzZXRYWShhcnJvdywgcmVjdFBhcmVudCk7XG4gICAgICAgICAgICBnZXRNb3ZlKGFycm93LCByZWN0UGFyZW50LCByZWN0QXJyb3cpO1xuICAgICAgICB9LCA4MDApO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgICAgIEFjdGl2ZUFycm93LnNldEFuaW1hdGlvbihTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShhcnJvdywgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IHNldFBvc2l0aW9uLCB2aWV3LCBoaWRlLCBtb3ZlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgS25pZ2h0ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBGaWd1cmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodCcpKTtcbiAgICBjb25zdCBhcnJvdyA9IEFycm93KHByb3RvdHlwZSwgJ2tuaWdodCcpO1xuXG4gICAgcHJvdG90eXBlLnNldFBhcmVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25pZ2h0LXdyYXBwZXInKSk7XG5cbiAgICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICB9KSgpXG5cbiAgICBjb25zdCBnZXRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycm93O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRBcnJvdyB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQb2ludCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRmlndXJlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludCcpKTtcbiAgICBjb25zdCBhcnJvdyA9IEFycm93KHByb3RvdHlwZSwgJ3BvaW50Jyk7XG5cbiAgICBwcm90b3R5cGUuc2V0UGFyZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJykpO1xuXG4gICAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Zyhwcm90b3R5cGUuZ2V0U3ZnKCkpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnRm9yTWliaWxlKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgfSkoKVxuXG4gICAgY29uc3QgZ2V0QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJvdztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0QXJyb3cgfSk7XG59KSgpOyIsImV4cG9ydCBjb25zdCBGaWd1cmVzUG9zaXRpb25zID0gKCgpID0+IHtcbiAgICBsZXQga25pZ2h0ID0gWzAsIDBdO1xuICAgIGxldCBwb2ludCA9IFswLCAwXTtcblxuICAgIHJldHVybiB7IGtuaWdodCwgcG9pbnQgfTtcbn0pKCkiLCJleHBvcnQgY29uc3QgS25pZ2h0TW92ZXNHcmFwaCA9ICgpID0+IHtcbiAgbGV0IG51bGxOb2RlO1xuXG4gIGNvbnN0IGdldE51bGxOb2RlID0gKCkgPT4ge1xuICAgIHJldHVybiBudWxsTm9kZTtcbiAgfTtcblxuICBjb25zdCBidWlsZEdyYXBoID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBib2FyZC5nZXRDZWxscygpO1xuICAgIGNvbnN0IHdpZHRoID0gYm9hcmQuZ2V0U2l6ZSgpWzBdO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldFNpemUoKVsxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBjZWxsc1tqXVtpXTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogLSAyLCBpIC0gMSksIDApO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDEsIGkgLSAyKSwgMSk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMSwgaSAtIDIpLCAyKTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAyLCBpIC0gMSksIDMpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiArIDIsIGkgKyAxKSwgNCk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMSwgaSArIDIpLCA1KTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogLSAxLCBpICsgMiksIDYpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDIsIGkgKyAxKSwgNyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbnVsbE5vZGUgPSBjZWxsc1swXVswXTtcbiAgfTtcblxuICBjb25zdCBnZXROb2RlID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBib2FyZFt4XVt5XTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXROdWxsTm9kZSwgYnVpbGRHcmFwaCB9O1xufTtcbiIsImltcG9ydCB7IHNldExpc3RlbmVyRm9yUGF0aENlbGxzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxsc1wiO1xuaW1wb3J0IHsgdmlld1BhdGggfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9wYXRoXCI7XG5pbXBvcnQgeyBzZXRCb3JkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvY2VsbFwiO1xuaW1wb3J0IHsgRmlndXJlc1Bvc2l0aW9ucyB9IGZyb20gXCIuL2ZpZ3VyZXNQb3NpdGlvbnNcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi9wYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBrbmlnaHRNb3Zlc0hhbmRsZXIgPSAoKSA9PiB7XG4gIGxldCBmaXJzdEhhbGZQYXRoID0gW107XG4gIGxldCBzZWNvbmRIYWxmUGF0aCA9IFtdO1xuICBsZXQgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zID0gW107XG4gIGxldCBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zID0gW107XG5cbiAgY29uc3QgZ2V0UGF0aCA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhcnQpXG4gICAgaWYgKHN0YXJ0ID09PSBlbmQpIHtcbiAgICAgIHJldHVybiBbc3RhcnRdO1xuICAgIH1cblxuICAgIGxldmVsU3RhcnRQb2ludENoaWxkcmVucy5wdXNoKFtzdGFydF0pO1xuICAgIGxldmVsRW5kUG9pbnRDaGlsZHJlbnMucHVzaChbZW5kXSk7XG5cbiAgICBjb25zdCBwYXRoID0gYm9uZGluZ1BhdGgoc3RhcnQsIGVuZCk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgY29uc3QgYm9uZGluZ1BhdGggPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgIGxldCBwYXRoO1xuICAgIGxldCBpbnRlcnNlY3RQb2ludCA9IGZpbmRJbnRlcnNlY3QoW3N0YXJ0XSwgW2VuZF0pO1xuXG4gICAgYnVpbGRQYXRoKGludGVyc2VjdFBvaW50LCBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMsIGZpcnN0SGFsZlBhdGgpO1xuICAgIGJ1aWxkUGF0aChpbnRlcnNlY3RQb2ludCwgbGV2ZWxFbmRQb2ludENoaWxkcmVucywgc2Vjb25kSGFsZlBhdGgpO1xuXG4gICAgZmlyc3RIYWxmUGF0aCA9IGdldFByb2Nlc3NlZEFycihmaXJzdEhhbGZQYXRoKTtcbiAgICBzZWNvbmRIYWxmUGF0aCA9IGdldFByb2Nlc3NlZEFycihzZWNvbmRIYWxmUGF0aCk7XG5cbiAgICBwYXRoID0gZmlyc3RIYWxmUGF0aC5yZXZlcnNlKCkuY29uY2F0KFtpbnRlcnNlY3RQb2ludF0pLmNvbmNhdChzZWNvbmRIYWxmUGF0aCk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgY29uc3QgZmluZEludGVyc2VjdCA9IChzdGFydCwgZW5kLCBmbGFnID0gJ2RlZicpID0+IHtcbiAgICBsZXQgaW50ZXJzZWN0O1xuXG4gICAgaWYgKGZsYWcgIT09ICdkZWYnKSB7XG4gICAgICBsZXQgcG9pbnRzID0gZmxhZyA9PT0gJ3N0YXJ0JyA/IHN0YXJ0IDogZW5kO1xuICAgICAgc2V0Q2hpbGRyZW5zKHBvaW50cywgZmxhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYWcgPSAnZW5kJztcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydExhc3QgPSBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBlbmRMYXN0ID0gbGV2ZWxFbmRQb2ludENoaWxkcmVucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHN0YXJ0THZsUG9pbnRzID0gbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zW3N0YXJ0TGFzdF07XG4gICAgY29uc3QgZW5kTHZsUG9pbnRzID0gbGV2ZWxFbmRQb2ludENoaWxkcmVuc1tlbmRMYXN0XTtcblxuICAgIGNvbnN0IGludGVyc2VjdFBvaW50cyA9IGNoZWNrQ2hpbGRyZW5zKFxuICAgICAgc3RhcnRMdmxQb2ludHMsXG4gICAgICBlbmRMdmxQb2ludHMsXG4gICAgKTtcblxuICAgIGlmIChpbnRlcnNlY3RQb2ludHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGZsYWcgPT09ICdzdGFydCcgPyBmbGFnID0gJ2VuZCcgOiBmbGFnID0gJ3N0YXJ0JztcbiAgICAgIGludGVyc2VjdCA9IGZpbmRJbnRlcnNlY3Qoc3RhcnRMdmxQb2ludHMsIGVuZEx2bFBvaW50cywgZmxhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdCA9IGludGVyc2VjdFBvaW50c1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0O1xuICB9XG5cbiAgY29uc3Qgc2V0Q2hpbGRyZW5zID0gKHBvaW50Q2hpbGRyZW5zLCBmbGFnKSA9PiB7XG4gICAgbGV0IGNoaWxkcmVucyA9IFtdO1xuICAgIHBvaW50Q2hpbGRyZW5zLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQgIT09IG51bGwgJiYgY2hpbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGlsZHJlbnMgPSBnZXRQcm9jZXNzZWRBcnIoY2hpbGRyZW5zLmNvbmNhdChjaGlsZC5nZXRNb3ZlcygpKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZmxhZyA9PT0gXCJzdGFydFwiXG4gICAgICA/IGxldmVsU3RhcnRQb2ludENoaWxkcmVucy5wdXNoKGNoaWxkcmVucylcbiAgICAgIDogbGV2ZWxFbmRQb2ludENoaWxkcmVucy5wdXNoKGNoaWxkcmVucyk7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRQYXRoID0gKGludGVyc2VjdFBvaW50LCBjaGlsZHJlbnMsIGNvbnRhaW5lcikgPT4ge1xuICAgIGxldCBtb3ZlcyA9IGdldFByb2Nlc3NlZEFycihpbnRlcnNlY3RQb2ludC5nZXRNb3ZlcygpKTtcbiAgICBsZXQgbHZsID0gY2hpbGRyZW5zLnBvcCgpO1xuXG4gICAgaWYgKGx2bC5pbmRleE9mKGludGVyc2VjdFBvaW50KSA+PSAwKSB7XG4gICAgICBsdmwgPSBjaGlsZHJlbnMucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGludGVyc2VjdFBvaW50cyA9IGNoZWNrQ2hpbGRyZW5zKFxuICAgICAgICBtb3ZlcyxcbiAgICAgICAgbHZsLFxuICAgICAgKTtcbiAgICAgIGNvbnRhaW5lci5wdXNoKGludGVyc2VjdFBvaW50c1swXSk7XG4gICAgICBidWlsZFBhdGgoaW50ZXJzZWN0UG9pbnRzWzBdLCBjaGlsZHJlbnMsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tDaGlsZHJlbnMgPSAoc3RhcnRDaGlsZHJlbnMsIGVuZENoaWxkcmVucykgPT4ge1xuICAgIGNvbnN0IGNvbW1vbiA9IHN0YXJ0Q2hpbGRyZW5zLmZpbHRlcihcbiAgICAgIChjaGlsZCkgPT4gZW5kQ2hpbGRyZW5zLmluZGV4T2YoY2hpbGQpICE9PSAtMSxcbiAgICApO1xuICAgIHJldHVybiBjb21tb247XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGF0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICBsZXQgcGF0aCA9IGtuaWdodE1vdmVzSGFuZGxlcigpLmdldFBhdGgoRmlndXJlc1Bvc2l0aW9ucy5rbmlnaHQsIEZpZ3VyZXNQb3NpdGlvbnMucG9pbnQpO1xuICBQYXRoLnNldFBhdGgocGF0aCk7XG4gIHZpZXdQYXRoKCk7XG59XG5cbmNvbnN0IGdldFByb2Nlc3NlZEFyciA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KGFycmF5LmZpbHRlcigobikgPT4gbikpO1xuICByZXR1cm4gWy4uLnNldF07XG59IiwiaW1wb3J0IHsgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtbywgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtb0Zvck1vYmlsZSwgc2V0TGlzdGVuZXJzRm9yRGVtbywgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGVybkRlbW9cIjtcbmltcG9ydCB7IEhpZGUsIFZpZXcgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9wcmVzZXRzXCI7XG5pbXBvcnQgeyBBY3RpdmVUZXh0IH0gZnJvbSBcIi4vY3VycmVudEFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50RGVtbyA9ICgoKSA9PiB7XG4gICAgbGV0IGRlbW87XG5cbiAgICBjb25zdCBnZXREZW1vID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVtbztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRkZW1vID0gKG5EZW1vKSA9PiB7XG4gICAgICAgIGRlbW8gPSBuRGVtbztcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRkZW1vLCBnZXREZW1vIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRMZXJuID0gKCkgPT4ge1xuICAgIGRlbW9TdGVwcygpLnN0YXJ0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZW1vU3RlcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRlbW8oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSgpO1xuICAgICAgICBLbmlnaHQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgVmlldy5wb3B1cCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFZpZXcudGV4dENvbnRhaW5lcigpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGVwMSA9ICgpID0+IHtcbiAgICAgICAgRWxlbWVudHMua25pZ2h0V3JhcHBlci5zdHlsZS56SW5kZXggPSAnNTAxJztcbiAgICAgICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgICAgIFZpZXcua25pZ2h0V3JhcHBlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGtuaWdodERlbW8oKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RlcDIgPSAoKSA9PiB7XG4gICAgICAgIEVsZW1lbnRzLnBvaW50V3JhcHBlci5zdHlsZS56SW5kZXggPSAnNTAxJztcbiAgICAgICAgVmlldy5wb2ludFdyYXBwZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwb2ludERlbW8oKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vKCk7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyc0ZvckRlbW9Gb3JNb2JpbGUoKTtcbiAgICAgICAgRWxlbWVudHMua25pZ2h0V3JhcHBlci5yZW1vdmVDaGlsZChLbmlnaHQuZ2V0QXJyb3coKS5nZXRTdmcoKSk7XG4gICAgICAgIEVsZW1lbnRzLnBvaW50V3JhcHBlci5yZW1vdmVDaGlsZChQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpKTtcbiAgICAgICAgSGlkZS5wb3B1cCgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNMZXJuJywgSlNPTi5zdHJpbmdpZnkoJ3llcycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydCwgc3RlcDEsIHN0ZXAyLCBlbmQgfVxufVxuXG5jb25zdCBrbmlnaHREZW1vID0gKCkgPT4ge1xuICAgIEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpLnN0eWxlLnpJbmRleCA9IDYwMDtcbiAgICBLbmlnaHQuZ2V0QXJyb3coKS5zZXRQb3NpdGlvbigpO1xuICAgIEtuaWdodC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICBLbmlnaHQuZ2V0QXJyb3coKS5tb3ZlKCk7XG4gICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oVmlldy5rbmlnaHRUZXh0KCkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIEtuaWdodC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgfSwgMTAwMCk7XG59XG5cbmNvbnN0IHBvaW50RGVtbyA9ICgpID0+IHtcbiAgICBQb2ludC5nZXRBcnJvdygpLnNldFBvc2l0aW9uKCk7XG4gICAgUG9pbnQuZ2V0QXJyb3coKS52aWV3KCk7XG4gICAgUG9pbnQuZ2V0QXJyb3coKS5tb3ZlKCk7XG4gICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oVmlldy5wb2ludFRleHQoKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFBvaW50LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICB9LCAxMDAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUJvYXJkUHJpb3JpdHkgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN2Z05hbWUgPSBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgYWRkQm9hcmRQcmlvcml0eShLbmlnaHQpO1xuICAgICAgICBLbmlnaHQuZ2V0QXJyb3coKS5oaWRlKCk7XG4gICAgICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKEhpZGUua25pZ2h0VGV4dCgpKTtcbiAgICB9XG4gICAgaWYgKHN2Z05hbWUgPT09ICdwb2ludCcpIHtcbiAgICAgICAgUG9pbnQuZ2V0QXJyb3coKS5oaWRlKCk7XG4gICAgICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKEhpZGUucG9pbnRUZXh0KCkpO1xuICAgIH1cblxufVxuXG5jb25zdCBhZGRCb2FyZFByaW9yaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIEhpZGUudGV4dENvbnRhaW5lcigpO1xuICAgIFZpZXcuYm9hcmQoKTtcbiAgICBFbGVtZW50cy5ib2FyZC5zdHlsZS56SW5kZXggPSAnNTAxJztcbn1cblxuY29uc3QgcmVtb3ZlQm9hcmRQcmlvcml0eSA9IGFzeW5jICgpID0+IHtcbiAgICBFbGVtZW50cy5ib2FyZC5zdHlsZS56SW5kZXggPSAnMTAwJztcbn1cblxuZXhwb3J0IGNvbnN0IGVuZERyYWdEZW1vID0gKGUpID0+IHtcbiAgICBjb25zdCBzdmdOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWw7XG4gICAgaWYgKHN2Z05hbWUgPT09ICdrbmlnaHQnKSB7XG4gICAgICAgIGlmIChLbmlnaHQuZ2V0UGFyZW50KCkuY2xhc3NOYW1lID09PSAna25pZ2h0LXdyYXBwZXInKSB7XG4gICAgICAgICAgICBLbmlnaHQuZ2V0QXJyb3coKS52aWV3KCk7XG4gICAgICAgICAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LmtuaWdodFRleHQoKSk7XG4gICAgICAgICAgICByZW1vdmVCb2FyZFByaW9yaXR5KEtuaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyBub25lJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQtd3JhcHBlcicpLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICAgIGRlbW9TdGVwcygpLnN0ZXAyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN2Z05hbWUgPT09ICdwb2ludCcpIHtcbiAgICAgICAgaWYgKFBvaW50LmdldFBhcmVudCgpLmNsYXNzTmFtZSAhPT0gJ3BvaW50LXdyYXBwZXInKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnQtd3JhcHBlcicpLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICAgIGRlbW9TdGVwcygpLmVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9pbnQuZ2V0QXJyb3coKS52aWV3KCk7XG4gICAgICAgICAgICBBY3RpdmVUZXh0LmdldEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oVmlldy5wb2ludFRleHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IE5vZGUgPSAoY1gsIGNZKSA9PiB7XG4gIGxldCBub2RlO1xuICBjb25zdCB4ID0gY1g7XG4gIGNvbnN0IHkgPSBjWTtcblxuICBsZXQgbW92ZXMgPSBbOF07XG5cbiAgY29uc3Qgc2V0Tm9kZSA9IChuTm9kZSkgPT4ge1xuICAgIG5vZGUgPSBuTm9kZTtcbiAgfVxuXG4gIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBjb25zdCBzZXRNb3ZlID0gKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgbW92ZXNbaW5kZXhdID0gbm9kZTtcbiAgfTtcblxuICBjb25zdCBnZXRNb3ZlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbW92ZXM7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICByZXR1cm4geyBzZXROb2RlLCBnZXROb2RlLCBzZXRNb3ZlLCBnZXRNb3ZlcywgZ2V0Q29vcmRpbmF0ZXMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgUGF0aCA9ICgoKSA9PiB7XG4gICAgbGV0IHBhdGg7XG5cbiAgICBjb25zdCBzZXRQYXRoID0gKG5QYXRuKSA9PiB7XG4gICAgICAgIHBhdGggPSBuUGF0bjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXRoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRQYXRoLCBnZXRQYXRoIH07XG59KSgpIiwiZXhwb3J0IGNvbnN0IEFuaW1hdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh5ID0gKGUsIHgsIHksIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3h9YCB9LCB7IGxlZnQ6IGAke3l9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgeHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgU21vb3RoQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBTbW9vdGhWaXNpYmlsaXR5ID0gKCgpID0+IHtcblxuICAgICAgICBjb25zdCBoaWRlID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5LnBsYXlTdGF0ZSAhPT0gJ3BhdXNlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZHVyKTtcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICAgICAgcmV0dXJuIG9wYWNpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2aWV3ID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IHZpZXcsIGhpZGUgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgU21vb3RoVmlzaWJpbGl0eSB9O1xufSkoKTsiLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92ZSA9IChhcnJvdywgcmVjdFBhcmVudCwgcmVjdEFycm93KSA9PiB7XG4gICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdFBhcmVudC54fXB4YCwgYCR7cmVjdFBhcmVudC54ICsgcmVjdFBhcmVudC53aWR0aH1weGAsIDQwMCwgJ2ZvcndhcmRzJykuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgIEFuaW1hdGlvbnMudHJhbnNmb3JtLngoYXJyb3csIGAke3JlY3RQYXJlbnQueCArIHJlY3RQYXJlbnQud2lkdGh9cHhgLCBgJHtyZWN0UGFyZW50Lnh9cHhgLCA0MDAsICdmb3J3YXJkcycpXG4gICAgfSk7XG4gICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueShhcnJvdywgYCR7cmVjdFBhcmVudC55fXB4YCwgYCR7cmVjdFBhcmVudC55IC0gcmVjdFBhcmVudC5oZWlnaHR9cHhgLCA0MDAsICdmb3J3YXJkcycpLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICBBbmltYXRpb25zLnRyYW5zZm9ybS55KGFycm93LCBgJHtyZWN0UGFyZW50LnkgLSByZWN0UGFyZW50LmhlaWdodH1weGAsIGAke3JlY3RQYXJlbnQueX1weGAsIDQwMCwgJ2ZvcndhcmRzJylcbiAgICB9KTtcblxufVxuXG5leHBvcnQgY29uc3Qgc2V0WFkgPSAoYXJyb3csIHJlY3QpID0+IHtcbiAgICBjb25zdCB4Zm9ybXMgPSBhcnJvdy50cmFuc2Zvcm0uYmFzZVZhbDtcbiAgICBjb25zdCBmaXJzdFhGb3JtID0geGZvcm1zLmdldEl0ZW0oMCk7XG4gICAgZmlyc3RYRm9ybS5zZXRUcmFuc2xhdGUocmVjdC5oZWlnaHQsIC1yZWN0LndpZHRoKTtcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscywgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IEFjdGl2ZUJvYXJkIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ib2FyZFwiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgRmlndXJlc1Bvc2l0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgc2V0Qm9yZGVyIH0gZnJvbSBcIi4uL25vZGVzL2NlbGxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnZ2FibGUoc3ZnKSB7XG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGZhbHNlO1xuICAgIGxldCBnYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdnYWcnKTtcbiAgICBsZXQgbGFzdCA9IGdhZztcbiAgICBsZXQgY2VsbEluZGV4ID0gMTtcbiAgICBsZXQgcGFyZW50O1xuICAgIGNvbnN0IGNlbGxzID0gQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKS5nZXRDZWxscygpO1xuXG4gICAgZnVuY3Rpb24gc3RhcnREcmFnKGUpIHtcbiAgICAgICAgcGFyZW50ID0gc3ZnLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHN2ZztcbiAgICAgICAgY29uc3QgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc3ZnWCA9IHJlY3QueCArIHBhcnNlSW50KHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3Qgc3ZnWSA9IHJlY3QueSArIHBhcnNlSW50KHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoc3ZnWCwgc3ZnWSk7XG4gICAgICAgIGlmIChlbGVtZW50c1swXS5nZXRBdHRyaWJ1dGVOYW1lcygpWzBdID09PSAnZCcpIHtcbiAgICAgICAgICAgIGNlbGxJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBjdXJzb3JYID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgbGV0IGN1cnNvclkgPSBlLmNsaWVudFk7XG5cbiAgICAgICAgICAgIGlmIChjdXJzb3JYID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJzb3JYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgY3Vyc29yWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tjZWxsSW5kZXhdO1xuICAgICAgICAgICAgbGV0IHN2Z1ggPSByZWN0LnggKyBwYXJzZUludChyZWN0LndpZHRoIC8gMik7XG4gICAgICAgICAgICBsZXQgc3ZnWSA9IHJlY3QueSArIHBhcnNlSW50KHJlY3QuaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHNldFhZKHN2ZywgY3Vyc29yWCAtIHN2Z1gsIGN1cnNvclkgLSBzdmdZKTtcbiAgICAgICAgICAgIHN2Z1ggPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcbiAgICAgICAgICAgIHN2Z1kgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2VsbCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZW92ZXJFdmVudCA9IG5ldyBFdmVudCgnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG1vdXNlb3ZlckV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhc3QgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZWxlYXZlRXZlbnQgPSBuZXcgRXZlbnQoJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgICAgICAgICBsYXN0LmRpc3BhdGNoRXZlbnQobW91c2VsZWF2ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgaWYgKGxhc3QgIT09IGdhZyAmJiBsYXN0ICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsYXN0LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhc3QuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgICAgICAgICAgICAgIHNldFBhcmVudChzdmcsIGxhc3QpO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckFjdGl2ZUNlbGxzKGxhc3QpO1xuICAgICAgICAgICAgICAgIHNldEJvcmRlcihsYXN0LCAnZ3JlZW4nKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc05hbWUgPT09ICdjZWxsJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JDZWxsKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNlbGxzLmZvckVhY2goY2VsbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuZ2V0Tm9kZSgpID09PSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlndXJlc1Bvc2l0aW9uc1tzdmcuY2xhc3NOYW1lLmJhc2VWYWxdID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgZGVmYXVsdFhZKHN2Zyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnREcmFnLCBkcmFnLCBlbmREcmFnLCBsYXN0IH07XG59XG5cbmV4cG9ydCBjb25zdCBzZXRYWSA9IChteUVsZW1lbnQsIHgsIHkpID0+IHtcbiAgICBjb25zdCB4Zm9ybXMgPSBteUVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XG4gICAgY29uc3QgZmlyc3RYRm9ybSA9IHhmb3Jtcy5nZXRJdGVtKDApO1xuICAgIGZpcnN0WEZvcm0uc2V0VHJhbnNsYXRlKGZpcnN0WEZvcm0ubWF0cml4LmUgKyB4LCBmaXJzdFhGb3JtLm1hdHJpeC5mICsgeSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0WFkgPSAobXlFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeGZvcm1zID0gbXlFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZSgwLCAwKTtcbn1cblxuY29uc3Qgc2V0UGFyZW50ID0gKHN2ZywgcGFyZW50KSA9PiB7XG4gICAgaWYgKHN2Zy5jbGFzc05hbWUuYmFzZVZhbCA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgS25pZ2h0LnNldFBhcmVudChwYXJlbnQpXG4gICAgfVxuICAgIGlmIChzdmcuY2xhc3NOYW1lLmJhc2VWYWwgPT09ICdwb2ludCcpIHtcbiAgICAgICAgUG9pbnQuc2V0UGFyZW50KHBhcmVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFjdGl2ZUJvYXJkLCBCb2FyZCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYm9hcmRcIjtcbmltcG9ydCB7IEFjdGl2ZUZpZ3VyZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY3VycmVudEFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgRmlndXJlc1Bvc2l0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TW92ZSA9IChwYXRoKSA9PiB7XG4gICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAocGF0aC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIG1vdmVYKFBvaW50LmdldENlbGwoKSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNldEtuaWdodCgpO1xuICAgICAgICAgICAgICAgIEtuaWdodC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgICAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgICAgICAgICAgfSwgMTYwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb3ZlWChwYXRoLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgfSwgODAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0S25pZ2h0ID0gKCkgPT4ge1xuICAgIEtuaWdodC5zZXRDZWxsKEZpZ3VyZXNQb3NpdGlvbnMua25pZ2h0KTtcbiAgICBLbmlnaHQuZ2V0Q2VsbCgpLmdldE5vZGUoKS5hcHBlbmRDaGlsZChLbmlnaHQuZ2V0U3ZnKCkpO1xufVxuXG5leHBvcnQgY29uc3QgbW92ZVggPSAoZmluaXNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHN0YXJ0Q29vcmRpbmF0ZXMgPSBLbmlnaHQuZ2V0Q2VsbCgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGxldCBmaW5pc2hDb29yZGluYXRlcyA9IGZpbmlzaC5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBsZXQgc3RhcnRYID0gc3RhcnRDb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IHN0YXJ0WSA9IHN0YXJ0Q29vcmRpbmF0ZXNbMV07XG4gICAgICAgIGxldCBmaW5pc2hYID0gZmluaXNoQ29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGxldCBmaW5pc2hZID0gZmluaXNoQ29vcmRpbmF0ZXNbMV07XG5cbiAgICAgICAgaWYgKHN0YXJ0WCA9PT0gZmluaXNoWCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0WSAhPT0gZmluaXNoWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3ZlWShmaW5pc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV4dFBvaW50ID0gc3RhcnRYID4gZmluaXNoWCA/IEFjdGl2ZUJvYXJkLmdldEJvYXJkKCkuZ2V0Q2VsbHMoKVtzdGFydFggLSAxXVtzdGFydFldIDogQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKS5nZXRDZWxscygpW3N0YXJ0WCArIDFdW3N0YXJ0WV07XG4gICAgICAgICAgICBsZXQgbmV4dFBvaW50UmVjdCA9IG5leHRQb2ludC5nZXROb2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbmV4dFBvaW50UmVjdFggPSBuZXh0UG9pbnRSZWN0Lng7XG4gICAgICAgICAgICBBY3RpdmVGaWd1cmUuc2V0QW5pbWF0aW9uKEFuaW1hdGlvbnMudHJhbnNmb3JtLngoS25pZ2h0LmdldFN2ZygpLCBgJHtLbmlnaHQuZ2V0UmVjdCgpLnh9cHhgLCBgJHtuZXh0UG9pbnRSZWN0WH1weGAsIDEwMCkpO1xuICAgICAgICAgICAgQWN0aXZlRmlndXJlLmdldEFuaW1hdGlvbigpLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHRQb2ludC5nZXROb2RlKCkuYXBwZW5kQ2hpbGQoS25pZ2h0LmdldFN2ZygpKTtcbiAgICAgICAgICAgICAgICBLbmlnaHQuc2V0Q2VsbChuZXh0UG9pbnQpXG4gICAgICAgICAgICAgICAgbW92ZVgoZmluaXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VycnInKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBtb3ZlWSA9IChmaW5pc2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgc3RhcnRDb29yZGluYXRlcyA9IEtuaWdodC5nZXRDZWxsKCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgbGV0IGZpbmlzaENvb3JkaW5hdGVzID0gZmluaXNoLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGxldCBzdGFydFggPSBzdGFydENvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgc3RhcnRZID0gc3RhcnRDb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGZpbmlzaFggPSBmaW5pc2hDb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IGZpbmlzaFkgPSBmaW5pc2hDb29yZGluYXRlc1sxXTtcblxuICAgICAgICBpZiAoc3RhcnRZID09PSBmaW5pc2hZKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRYICE9PSBmaW5pc2hYKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVYKGZpbmlzaCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5leHRQb2ludCA9IHN0YXJ0WSA+IGZpbmlzaFkgPyBBY3RpdmVCb2FyZC5nZXRCb2FyZCgpLmdldENlbGxzKClbc3RhcnRYXVtzdGFydFkgLSAxXSA6IEFjdGl2ZUJvYXJkLmdldEJvYXJkKCkuZ2V0Q2VsbHMoKVtzdGFydFhdW3N0YXJ0WSArIDFdO1xuICAgICAgICAgICAgbGV0IG5leHRQb2ludFJlY3QgPSBuZXh0UG9pbnQuZ2V0Tm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG5leHRQb2ludFJlY3RZID0gbmV4dFBvaW50UmVjdC55O1xuICAgICAgICAgICAgQWN0aXZlRmlndXJlLnNldEFuaW1hdGlvbihBbmltYXRpb25zLnRyYW5zZm9ybS55KEtuaWdodC5nZXRTdmcoKSwgYCR7S25pZ2h0LmdldFJlY3QoKS55fXB4YCwgYCR7bmV4dFBvaW50UmVjdFl9cHhgLCAxMDApKTtcbiAgICAgICAgICAgIEFjdGl2ZUZpZ3VyZS5nZXRBbmltYXRpb24oKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0UG9pbnQuZ2V0Tm9kZSgpLmFwcGVuZENoaWxkKEtuaWdodC5nZXRTdmcoKSk7XG4gICAgICAgICAgICAgICAgS25pZ2h0LnNldENlbGwobmV4dFBvaW50KVxuICAgICAgICAgICAgICAgIG1vdmVZKGZpbmlzaCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VycnInKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJGb3JQYXRoQ2VsbHMgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckNlbGxzXCI7XG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wYXRoXCI7XG5pbXBvcnQgeyBzZXRCb3JkZXIgfSBmcm9tIFwiLi4vbm9kZXMvY2VsbFwiO1xuaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdQYXRoID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBQYXRoLmdldFBhdGgoKTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGNlbGwgPSBwYXRoW2ldO1xuICAgICAgICAgICAgbGV0IHNwYW4gPSBzZXRVcFNwYW4oaSArIDEsICdudW1iZXInKTtcbiAgICAgICAgICAgIGlmIChjZWxsLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcucG9pbnQnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwuZ2V0Tm9kZSgpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoc3BhbiwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICAgICAgICAgIHNldEJvcmRlcihjZWxsLmdldE5vZGUoKSwgJ2JsdWUnKTtcbiAgICAgICAgICAgIHNldExpc3RlbmVyRm9yUGF0aENlbGxzKGNlbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgXG4gICAgfVxufVxuXG5jb25zdCBhZGRDbGFzc2VzID0gKG5vZGUsIC4uLmNsYXNzZXMpID0+IHtcbiAgICBmb3IgKGxldCBjdXJDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgfVxufVxuXG5jb25zdCBzZXRVcFNwYW4gPSAodGV4dCwgY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICBsZXQgc3BhbiA9IGNyZWF0ZU5vZGUoJ3NwYW4nLCBjbGFzc05hbWUpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBzcGFuO1xufVxuXG5jb25zdCBjcmVhdGVOb2RlID0gKG5vZGVOYW1lLCAuLi5jbGFzc05hbWUpID0+IHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgIGFkZENsYXNzZXMobm9kZSwgLi4uY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHNcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IFNtb290aEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBWaWV3ID0gKCgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLnBvcHVwLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cbiAgICBjb25zdCBib2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmJvYXJkLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMudGV4dENvbnRhaW5lciwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5rbmlnaHRXcmFwcGVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLnBvaW50V3JhcHBlciwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMua25pZ2h0VGV4dCwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5wb2ludFRleHQsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcG9wdXAsIGJvYXJkLCB0ZXh0Q29udGFpbmVyLCBrbmlnaHRBcnJvdywgcG9pbnRBcnJvdywga25pZ2h0V3JhcHBlciwgcG9pbnRXcmFwcGVyLCBrbmlnaHRUZXh0LCBwb2ludFRleHQgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBIaWRlID0gKCgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLnBvcHVwLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMuYm9hcmQsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLnRleHRDb250YWluZXIsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShLbmlnaHQuZ2V0QXJyb3coKS5nZXRTdmcoKSwgMSwgMCwgMTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoUG9pbnQuZ2V0QXJyb3coKS5nZXRTdmcoKSwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMua25pZ2h0V3JhcHBlciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5wb2ludFdyYXBwZXIsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0VGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLmtuaWdodFRleHQsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMucG9pbnRUZXh0LCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsdWcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbHVnJyksIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGx1ZywgcG9wdXAsIGJvYXJkLCB0ZXh0Q29udGFpbmVyLCBrbmlnaHRBcnJvdywgcG9pbnRBcnJvdywga25pZ2h0V3JhcHBlciwgcG9pbnRXcmFwcGVyLCBrbmlnaHRUZXh0LCBwb2ludFRleHQgfTtcbn0pKCk7IiwiZXhwb3J0IGNvbnN0IGdldEFycm93Tm9kZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LmFkZChgYXJyb3dgKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKGBhcnJvdy0ke25hbWV9YCk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3ctdGVtcGxhdGUnKTtcbiAgICByZXR1cm4gYXJyb3c7XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IGdldENlbGxOb2RlIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5leHBvcnQgY29uc3QgZmlsbEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBib2FyZC5nZXRDZWxscygpO1xuICAgIGNvbnN0IHdpZHRoID0gYm9hcmQuZ2V0U2l6ZSgpWzBdO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldFNpemUoKVsxXTtcbiAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBsZXQgaXNCbGFjayA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgIGlzQmxhY2sgPSAhaXNCbGFja1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbal1baV07XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwobm9kZSk7XG4gICAgICAgICAgICBjZWxsLnNldE5vZGUobm9kZSk7XG4gICAgICAgICAgICBib2FyZE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNCbGFjaykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkMjhiNDgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZjZTlmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQmxhY2sgPSAhaXNCbGFjaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc2V0Qm9yZGVyID0gKGNlbGwsIGNvbG9yKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBgbWluKDF2aCwgMXZ3KSAke2NvbG9yfSBzb2xpZGA7XG59XG5cbmV4cG9ydCBjb25zdCByZXNldEJvcmRlciA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBgYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENlbGxOb2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICByZXR1cm4gY2VsbDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=