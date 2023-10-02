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
    width: min(80vh, 70vw);
    height: min(80vh, 70vw);
    border: 1vh rgb(82, 82, 82) solid;
}

.cell {
    display: grid;
    justify-content: center;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.panel {
    display: grid;
    gap: 2vh;
    grid-template-columns: 1fr 1fr;
    width: min(80vh, 70vw);
    justify-items: center;
    align-content: center;
}

.svg {
    display: grid;
}

.knight,
.point {
    display: grid;
    width: min(8vh, 4vw);
    height: min(8vh, 4vw);
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
    grid-template-columns: min-content max-content;
    background-color: white;
    border-radius: 1vh;
    padding: 1vh;
    gap: min(2vh, 1vw);
    width: min(30vh, 25vw);
    height: min(10vh, 8vw);
    justify-items: center;
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

@media screen and (min-aspect-ratio: 1/1) {}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,2CAA2C;IAC3C,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,MAAM;IACN,OAAO;IACP,qBAAqB;IACrB,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA,kDAAkD;;AAElD,2CAA2C","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: max-content;\n}\n\n.wrapper {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    max-width: 100%;\n    max-height: 100%;\n    gap: 2vh;\n    padding: 5vh;\n}\n\n.board-wrapper {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    grid-template-rows: min-content min-content;\n    gap: 1vh;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    width: min(80vh, 70vw);\n    height: min(80vh, 70vw);\n    border: 1vh rgb(82, 82, 82) solid;\n}\n\n.cell {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.panel {\n    display: grid;\n    gap: 2vh;\n    grid-template-columns: 1fr 1fr;\n    width: min(80vh, 70vw);\n    justify-items: center;\n    align-content: center;\n}\n\n.svg {\n    display: grid;\n}\n\n.knight,\n.point {\n    display: grid;\n    width: min(8vh, 4vw);\n    height: min(8vh, 4vw);\n}\n\n.arrow-template {\n    display: none;\n}\n\n.arrow {\n    position: absolute;\n    pointer-events: none;\n    visibility: hidden;\n    justify-self: start;\n    width: min(6vh, 3vw);\n    height: min(6vh, 3vw);\n    fill: rgb(27, 177, 247);\n}\n\npath {\n    pointer-events: none;\n}\n\n.knight-wrapper,\n.point-wrapper {\n    display: grid;\n    grid-template-columns: min-content max-content;\n    background-color: white;\n    border-radius: 1vh;\n    padding: 1vh;\n    gap: min(2vh, 1vw);\n    width: min(30vh, 25vw);\n    height: min(10vh, 8vw);\n    justify-items: center;\n    align-content: center;\n}\n\n.drag-and-drop {\n    display: grid;\n    visibility: hidden;\n    color: rgb(27, 177, 247);\n    font-size: min(1.5vh, 1.2vw);\n}\n\n.popup {\n    position: fixed;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    padding: 1vh;\n    transition: all 0.5s ease 0s;\n    z-index: 500;\n}\n\n.text-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2vh;\n    height: 30%;\n    width: 60%;\n    opacity: 0;\n    visibility: hidden;\n    color: white;\n    font-size: 2vh;\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) {}"],"sourceRoot":""}]);
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
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/knightMovesHandler */ "./src/models/knightMovesHandler.js");
/* harmony import */ var _models_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/path */ "./src/models/path.js");
/* harmony import */ var _views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/animations/makeDraggable */ "./src/views/animations/makeDraggable.js");
/* harmony import */ var _forCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forCells */ "./src/controllers/listeners/forCells.js");





const setListenersForDragSvg = (svg) => {
    const draggable = (0,_views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_2__.makeDraggable)(svg);
    svg.addEventListener('mousedown', draggable.startDrag);
    svg.addEventListener('mousemove', draggable.drag);
    svg.addEventListener('mouseup', draggable.endDrag);
    svg.addEventListener('mouseup', e => {
        try {
            let path = _models_path__WEBPACK_IMPORTED_MODULE_1__.Path.getPath();
            path.forEach(cell => {
                cell.getNode().style.border = '';
                (0,_forCells__WEBPACK_IMPORTED_MODULE_3__.setListenersForCell)(cell.getNode());
            });
        } catch (error) {

        }
        try {
            (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_0__.start)();
        } catch {

        }
    });
}

const setListenersForDragSvgForMibile = (svg) => {
    const draggable = (0,_views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_2__.makeDraggable)(svg);
    svg.addEventListener('touchstart', draggable.startDrag);
    svg.addEventListener('touchmove', draggable.drag);
    svg.addEventListener('touchend', draggable.endDrag);
    svg.addEventListener('touchend', e => {
        try {
            let path = _models_path__WEBPACK_IMPORTED_MODULE_1__.Path.getPath();
            path.forEach(cell => {
                cell.getNode().style.border = '';
                (0,_forCells__WEBPACK_IMPORTED_MODULE_3__.setListenersForCell)(cell.getNode());
            });
        } catch (error) {

        }
        try {
            (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_0__.start)();
        } catch {

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

let demo = (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_12__.startLern)();
_models_lernPreset__WEBPACK_IMPORTED_MODULE_12__.currentDemo.setdemo(demo);

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

    return { getRect, getSvg, setParent, getParent }
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
        }, 500);
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
/* harmony import */ var _figuresPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figuresPositions */ "./src/models/figuresPositions.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ "./src/models/path.js");




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

    path = firstHalfPath.concat([intersectPoint]).concat(secondHalfPath);
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
  let path = knightMovesHandler().getPath(_figuresPositions__WEBPACK_IMPORTED_MODULE_1__.FiguresPositions.knight, _figuresPositions__WEBPACK_IMPORTED_MODULE_1__.FiguresPositions.point);
  _path__WEBPACK_IMPORTED_MODULE_2__.Path.setPath(path);
  path.forEach((element) => {
    element.getNode().style.border = '1vh blue solid';
    (0,_controllers_listeners_forCells__WEBPACK_IMPORTED_MODULE_0__.setListenerForPathCells)(element.getNode());
  });
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
        _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getSvg().style.pointerEvents = 'all';
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.popup();
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
                let coordinates;
                cells.forEach(cells => {
                    cells.forEach(cell => {
                        if (cell.getNode() === last) {
                            coordinates = cell;
                        }
                    });
                });

                _models_figuresPositions__WEBPACK_IMPORTED_MODULE_3__.FiguresPositions[svg.className.baseVal] = coordinates;
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

    return { popup, board, textContainer, knightArrow, pointArrow, knightWrapper, pointWrapper, knightText, pointText };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dmFpbHMvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcz8yMmFiIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckRyYWdFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2Zvckxlcm5EZW1vLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yVHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9jdXJyZW50QW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZmlndXJlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9rbmlnaHRNb3Zlc0dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvbGVyblByZXNldC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9wYXRoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL21ha2VEcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3Mvbm9kZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL25vZGVzL2JvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9ub2Rlcy9jZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBnYXA6IDJ2aDtcbiAgICBwYWRkaW5nOiA1dmg7XG59XG5cbi5ib2FyZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXZoO1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICAgIHdpZHRoOiBtaW4oODB2aCwgNzB2dyk7XG4gICAgaGVpZ2h0OiBtaW4oODB2aCwgNzB2dyk7XG4gICAgYm9yZGVyOiAxdmggcmdiKDgyLCA4MiwgODIpIHNvbGlkO1xufVxuXG4uY2VsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5wYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDJ2aDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgd2lkdGg6IG1pbig4MHZoLCA3MHZ3KTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc3ZnIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ua25pZ2h0LFxuLnBvaW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4oOHZoLCA0dncpO1xuICAgIGhlaWdodDogbWluKDh2aCwgNHZ3KTtcbn1cblxuLmFycm93LXRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICB3aWR0aDogbWluKDZ2aCwgM3Z3KTtcbiAgICBoZWlnaHQ6IG1pbig2dmgsIDN2dyk7XG4gICAgZmlsbDogcmdiKDI3LCAxNzcsIDI0Nyk7XG59XG5cbnBhdGgge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ua25pZ2h0LXdyYXBwZXIsXG4ucG9pbnQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgZ2FwOiBtaW4oMnZoLCAxdncpO1xuICAgIHdpZHRoOiBtaW4oMzB2aCwgMjV2dyk7XG4gICAgaGVpZ2h0OiBtaW4oMTB2aCwgOHZ3KTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZHJhZy1hbmQtZHJvcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgY29sb3I6IHJnYigyNywgMTc3LCAyNDcpO1xuICAgIGZvbnQtc2l6ZTogbWluKDEuNXZoLCAxLjJ2dyk7XG59XG5cbi5wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbiAgICB6LWluZGV4OiA1MDA7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJ2aDtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJ2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsTUFBTTtJQUNOLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQSxrREFBa0Q7O0FBRWxELDJDQUEyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAydmg7XFxuICAgIHBhZGRpbmc6IDV2aDtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgd2lkdGg6IG1pbig4MHZoLCA3MHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oODB2aCwgNzB2dyk7XFxuICAgIGJvcmRlcjogMXZoIHJnYig4MiwgODIsIDgyKSBzb2xpZDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnBhbmVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAydmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IG1pbig4MHZoLCA3MHZ3KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ua25pZ2h0LFxcbi5wb2ludCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4oOHZoLCA0dncpO1xcbiAgICBoZWlnaHQ6IG1pbig4dmgsIDR2dyk7XFxufVxcblxcbi5hcnJvdy10ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgd2lkdGg6IG1pbig2dmgsIDN2dyk7XFxuICAgIGhlaWdodDogbWluKDZ2aCwgM3Z3KTtcXG4gICAgZmlsbDogcmdiKDI3LCAxNzcsIDI0Nyk7XFxufVxcblxcbnBhdGgge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmtuaWdodC13cmFwcGVyLFxcbi5wb2ludC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtYXgtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBnYXA6IG1pbigydmgsIDF2dyk7XFxuICAgIHdpZHRoOiBtaW4oMzB2aCwgMjV2dyk7XFxuICAgIGhlaWdodDogbWluKDEwdmgsIDh2dyk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZHJhZy1hbmQtZHJvcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgY29sb3I6IHJnYigyNywgMTc3LCAyNDcpO1xcbiAgICBmb250LXNpemU6IG1pbigxLjV2aCwgMS4ydncpO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xcbiAgICB6LWluZGV4OiA1MDA7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZXNldEJvcmRlciwgc2V0Qm9yZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL2NlbGxcIlxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgbW91c2VvdmVyID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdyZWQnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICByZXNldEJvcmRlcihjZWxsKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQWN0aXZlQ2VsbHMgPSAoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlb3ZlciA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAnZ3JlZW4nKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2dyZWVuJyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyRm9yUGF0aENlbGxzID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBtb3VzZW92ZXIgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2JsdWUnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2JsdWUnKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhdGhcIjtcbmltcG9ydCB7IG1ha2VEcmFnZ2FibGUgfSBmcm9tIFwiLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9tYWtlRHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4vZm9yQ2VsbHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRyYWdTdmcgPSAoc3ZnKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gbWFrZURyYWdnYWJsZShzdmcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnZ2FibGUuc3RhcnREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ2dhYmxlLmRyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ2dhYmxlLmVuZERyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IFBhdGguZ2V0UGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcnO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwoY2VsbC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgfSBjYXRjaCB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Z0Zvck1pYmlsZSA9IChzdmcpID0+IHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBtYWtlRHJhZ2dhYmxlKHN2Zyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkcmFnZ2FibGUuc3RhcnREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ2dhYmxlLmRyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdnYWJsZS5lbmREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gUGF0aC5nZXRQYXRoKCk7XG4gICAgICAgICAgICBwYXRoLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5nZXROb2RlKCkuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICAgICAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbChjZWxsLmdldE5vZGUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICB9IGNhdGNoIHtcblxuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgY2hhbmdlQm9hcmRQcmlvcml0eSwgY3VycmVudERlbW8sIGRlbW9TdGVwcywgZW5kRHJhZ0RlbW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xlcm5QcmVzZXRcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9wcmVzZXRzXCI7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vID0gKCkgPT4ge1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZERyYWdEZW1vKTtcbiAgICBQb2ludC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBQb2ludC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoaWRlQXJyb3coKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JEZW1vID0gKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoaWRlQXJyb3coKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVtb1N0ZXBzKCkuc3RlcDEsIHsgb25jZTogdHJ1ZSB9KVxuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZERyYWdEZW1vKTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JEZW1vRm9yTWliaWxlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbW9TdGVwcygpLnN0ZXAxLCB7IG9uY2U6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGlkZUFycm93KCkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWdEZW1vKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxpc3RlbmVyc0ZvckRlbW9Gb3JNb2JpbGUgPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVBcnJvdygpKTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWdEZW1vKTtcbiAgICBQb2ludC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBcnJvdygpIHtcbiAgICB2YXIgdGltZXI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgUG9pbnQuZ2V0QXJyb3coKS5nZXRTdmcoKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFZpZXcua25pZ2h0QXJyb3coKTtcbiAgICAgICAgICAgIFZpZXcucG9pbnRBcnJvdygpO1xuICAgICAgICB9LCA2MDApO1xuICAgIH07XG59IiwiZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclRyYXZhaWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2YWlscycpO1xuXG59IiwiaW1wb3J0ICcuL3ZpZXdzL2Nzcy9tYWluLmNzcydcbmltcG9ydCB7IEFjdGl2ZUJvYXJkLCBCb2FyZCB9IGZyb20gXCIuL21vZGVscy9ib2FyZFwiO1xuaW1wb3J0IHsga25pZ2h0TW92ZXNIYW5kbGVyIH0gZnJvbSBcIi4vbW9kZWxzL2tuaWdodE1vdmVzSGFuZGxlclwiO1xuaW1wb3J0IHsgS25pZ2h0TW92ZXNHcmFwaCB9IGZyb20gXCIuL21vZGVscy9rbmlnaHRNb3Zlc0dyYXBoXCI7XG5pbXBvcnQgeyBmaWxsQm9hcmQgfSBmcm9tICcuL3ZpZXdzL25vZGVzL2JvYXJkJztcbmltcG9ydCB7IG1ha2VEcmFnZ2FibGUgfSBmcm9tICcuL3ZpZXdzL2FuaW1hdGlvbnMvbWFrZURyYWdnYWJsZSc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yRHJhZ0VsZW1lbnRzJztcbmltcG9ydCB7IEZpZ3VyZXNQb3NpdGlvbnMgfSBmcm9tICcuL21vZGVscy9maWd1cmVzUG9zaXRpb25zJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvclRyYXZhaWxzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yVHJhdmFpbHMnO1xuaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gJy4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zJztcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi92aWV3cy9hbmltYXRpb25zL2Fycm93cyc7XG5pbXBvcnQgeyBLbmlnaHQgfSBmcm9tICcuL21vZGVscy9maWd1cmVzJztcbmltcG9ydCB7IGN1cnJlbnREZW1vLCBzdGFydExlcm4gfSBmcm9tICcuL21vZGVscy9sZXJuUHJlc2V0JztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckRlbW8gfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMZXJuRGVtbyc7XG5cbktuaWdodE1vdmVzR3JhcGgoKS5idWlsZEdyYXBoKEFjdGl2ZUJvYXJkLmdldEJvYXJkKCkpO1xuXG5maWxsQm9hcmQoQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbnNldExpc3RlbmVyc0ZvclRyYXZhaWxzKCk7XG5cbmxldCBkZW1vID0gc3RhcnRMZXJuKCk7XG5jdXJyZW50RGVtby5zZXRkZW1vKGRlbW8pOyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmV4cG9ydCBjb25zdCBCb2FyZCA9ICgpID0+IHtcbiAgbGV0IHdpZHRoID0gODtcbiAgbGV0IGhlaWdodCA9IDg7XG5cbiAgbGV0IGNlbGxzID0gW107XG5cbiAgY29uc3QgY3JlYXRlQ2VsbHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBjb25zdCBub2RlID0gTm9kZShpLCBqKTtcbiAgICAgICAgbGluZS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaChsaW5lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2VsbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNlbGxzO1xuICB9O1xuXG4gIGNvbnN0IHNldFNpemUgPSAobldpZHRoLCBuSGVpZ2h0KSA9PiB7XG4gICAgd2lkdGggPSBuV2lkdGg7XG4gICAgaGVpZ2h0ID0gbkhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZUNlbGxzLCBnZXRDZWxscywgc2V0U2l6ZSwgZ2V0U2l6ZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUJvYXJkID0gKCgpID0+IHtcbiAgbGV0IGFjdGl2ZUJvYXJkID0gQm9hcmQoKTtcbiAgYWN0aXZlQm9hcmQuY3JlYXRlQ2VsbHMoKTtcblxuICBjb25zdCBzZXRCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGFjdGl2ZUJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYWN0aXZlQm9hcmQ7XG4gIH1cbiAgXG4gIHJldHVybiB7IHNldEJvYXJkLCBnZXRCb2FyZCB9O1xufSkoKVxuIiwiaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuY29uc3QgQW5pbWF0aW5nT2JqZWN0ID0gKCkgPT4ge1xuICAgIGxldCBhbmltYXRpb24gPSBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5ib2FyZCwgMSwgMSwgMSwgJ2ZvcndhcmRzJyk7XG5cbiAgICBjb25zdCBzZXRBbmltYXRpb24gPSAobmV3QW5pbWF0aW9uKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgICBhbmltYXRpb24gPSBuZXdBbmltYXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldEFuaW1hdGlvbiwgZ2V0QW5pbWF0aW9uIH07XG59XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVBcnJvdyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQW5pbWF0aW5nT2JqZWN0KCk7XG4gICAgcmV0dXJuIHByb3RvdHlwZTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVUZXh0ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBBbmltYXRpbmdPYmplY3QoKTtcbiAgICByZXR1cm4gcHJvdG90eXBlO1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKTtcbiAgICBjb25zdCBrbmlnaHRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJyk7XG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50LXdyYXBwZXInKTtcbiAgICBjb25zdCBrbmlnaHRUZXh0ID0ga25pZ2h0V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcCcpO1xuICAgIGNvbnN0IHBvaW50VGV4dCA9IHBvaW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcCcpO1xuXG4gICAgcmV0dXJuIHsgcG9wdXAsIGJvYXJkLCB0ZXh0Q29udGFpbmVyLCBrbmlnaHRUZXh0LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9XG59KSgpOyIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckRyYWdTdmcsIHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckRyYWdFbGVtZW50c1wiO1xuaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGdldE1vdmUsIHNldFhZIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzXCI7XG5pbXBvcnQgeyBnZXRBcnJvd05vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvYXJyb3dcIjtcbmltcG9ydCB7IEFjdGl2ZUFycm93IH0gZnJvbSBcIi4vY3VycmVudEFuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IEZpZ3VyZSA9IChuZXdTdmcpID0+IHtcbiAgICBjb25zdCBzdmcgPSBuZXdTdmc7XG4gICAgbGV0IHBhcmVudDtcblxuICAgIGNvbnN0IGdldFJlY3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3ZnID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldFJlY3QsIGdldFN2Zywgc2V0UGFyZW50LCBnZXRQYXJlbnQgfVxufVxuXG5leHBvcnQgY29uc3QgQXJyb3cgPSAocGFyZW50LCBuYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRmlndXJlKGdldEFycm93Tm9kZShuYW1lKSk7XG4gICAgY29uc3QgYXJyb3cgPSBwcm90b3R5cGUuZ2V0U3ZnKCk7XG4gICAgbGV0IGludGVydmFsO1xuXG4gICAgY29uc3QgdmlldyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LXdyYXBwZXJgKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvdyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBBY3RpdmVBcnJvdy5zZXRBbmltYXRpb24oU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoYXJyb3csIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJykpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVjdFBhcmVudCA9IHBhcmVudC5nZXRSZWN0KCk7XG4gICAgICAgIHNldFhZKGFycm93LCByZWN0UGFyZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCByZWN0QXJyb3cgPSBwcm90b3R5cGUuZ2V0UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHJlY3RQYXJlbnQgPSBwYXJlbnQuZ2V0UmVjdCgpO1xuICAgICAgICAgICAgc2V0WFkoYXJyb3csIHJlY3RQYXJlbnQpO1xuICAgICAgICAgICAgZ2V0TW92ZShhcnJvdywgcmVjdFBhcmVudCwgcmVjdEFycm93KTtcbiAgICAgICAgfSwgODAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgICBBY3RpdmVBcnJvdy5zZXRBbmltYXRpb24oU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoYXJyb3csIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJykpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBzZXRQb3NpdGlvbiwgdmlldywgaGlkZSwgbW92ZSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEtuaWdodCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRmlndXJlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQnKSk7XG4gICAgY29uc3QgYXJyb3cgPSBBcnJvdyhwcm90b3R5cGUsICdrbmlnaHQnKTtcblxuICAgIHByb3RvdHlwZS5zZXRQYXJlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJykpO1xuXG4gICAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Zyhwcm90b3R5cGUuZ2V0U3ZnKCkpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnRm9yTWliaWxlKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgfSkoKVxuXG4gICAgY29uc3QgZ2V0QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJvdztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0QXJyb3cgfSk7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgUG9pbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEZpZ3VyZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnQnKSk7XG4gICAgY29uc3QgYXJyb3cgPSBBcnJvdyhwcm90b3R5cGUsICdwb2ludCcpO1xuICAgIFxuICAgIHByb3RvdHlwZS5zZXRQYXJlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50LXdyYXBwZXInKSk7XG5cbiAgICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICB9KSgpXG5cbiAgICBjb25zdCBnZXRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycm93O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRBcnJvdyB9KTtcbn0pKCk7IiwiZXhwb3J0IGNvbnN0IEZpZ3VyZXNQb3NpdGlvbnMgPSAoKCkgPT4ge1xuICAgIGxldCBrbmlnaHQgPSBbMCwgMF07XG4gICAgbGV0IHBvaW50ID0gWzAsIDBdO1xuXG4gICAgcmV0dXJuIHsga25pZ2h0LCBwb2ludCB9O1xufSkoKSIsImV4cG9ydCBjb25zdCBLbmlnaHRNb3Zlc0dyYXBoID0gKCkgPT4ge1xuICBsZXQgbnVsbE5vZGU7XG5cbiAgY29uc3QgZ2V0TnVsbE5vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bGxOb2RlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkR3JhcGggPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGJvYXJkLmdldENlbGxzKCk7XG4gICAgY29uc3Qgd2lkdGggPSBib2FyZC5nZXRTaXplKClbMF07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9hcmQuZ2V0U2l6ZSgpWzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBsZXQgY2VsbCA9IGNlbGxzW2pdW2ldO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDIsIGkgLSAxKSwgMCk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqIC0gMSwgaSAtIDIpLCAxKTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAxLCBpIC0gMiksIDIpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiArIDIsIGkgLSAxKSwgMyk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMiwgaSArIDEpLCA0KTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAxLCBpICsgMiksIDUpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDEsIGkgKyAyKSwgNik7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqIC0gMiwgaSArIDEpLCA3KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBudWxsTm9kZSA9IGNlbGxzWzBdWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vZGUgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldE51bGxOb2RlLCBidWlsZEdyYXBoIH07XG59O1xuIiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJGb3JQYXRoQ2VsbHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckNlbGxzXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4vZmlndXJlc1Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUGF0aCB9IGZyb20gXCIuL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IGtuaWdodE1vdmVzSGFuZGxlciA9ICgpID0+IHtcbiAgbGV0IGZpcnN0SGFsZlBhdGggPSBbXTtcbiAgbGV0IHNlY29uZEhhbGZQYXRoID0gW107XG4gIGxldCBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMgPSBbXTtcbiAgbGV0IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMgPSBbXTtcblxuICBjb25zdCBnZXRQYXRoID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgICAgcmV0dXJuIFtzdGFydF07XG4gICAgfVxuXG4gICAgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLnB1c2goW3N0YXJ0XSk7XG4gICAgbGV2ZWxFbmRQb2ludENoaWxkcmVucy5wdXNoKFtlbmRdKTtcblxuICAgIGNvbnN0IHBhdGggPSBib25kaW5nUGF0aChzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBjb25zdCBib25kaW5nUGF0aCA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgbGV0IHBhdGg7XG4gICAgbGV0IGludGVyc2VjdFBvaW50ID0gZmluZEludGVyc2VjdChbc3RhcnRdLCBbZW5kXSk7XG5cbiAgICBidWlsZFBhdGgoaW50ZXJzZWN0UG9pbnQsIGxldmVsU3RhcnRQb2ludENoaWxkcmVucywgZmlyc3RIYWxmUGF0aCk7XG4gICAgYnVpbGRQYXRoKGludGVyc2VjdFBvaW50LCBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLCBzZWNvbmRIYWxmUGF0aCk7XG5cbiAgICBmaXJzdEhhbGZQYXRoID0gZ2V0UHJvY2Vzc2VkQXJyKGZpcnN0SGFsZlBhdGgpO1xuICAgIHNlY29uZEhhbGZQYXRoID0gZ2V0UHJvY2Vzc2VkQXJyKHNlY29uZEhhbGZQYXRoKTtcblxuICAgIHBhdGggPSBmaXJzdEhhbGZQYXRoLmNvbmNhdChbaW50ZXJzZWN0UG9pbnRdKS5jb25jYXQoc2Vjb25kSGFsZlBhdGgpO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRJbnRlcnNlY3QgPSAoc3RhcnQsIGVuZCwgZmxhZyA9ICdkZWYnKSA9PiB7XG4gICAgbGV0IGludGVyc2VjdDtcblxuICAgIGlmIChmbGFnICE9PSAnZGVmJykge1xuICAgICAgbGV0IHBvaW50cyA9IGZsYWcgPT09ICdzdGFydCcgPyBzdGFydCA6IGVuZDtcbiAgICAgIHNldENoaWxkcmVucyhwb2ludHMsIGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGFnID0gJ2VuZCc7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRMYXN0ID0gbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgZW5kTGFzdCA9IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBzdGFydEx2bFBvaW50cyA9IGxldmVsU3RhcnRQb2ludENoaWxkcmVuc1tzdGFydExhc3RdO1xuICAgIGNvbnN0IGVuZEx2bFBvaW50cyA9IGxldmVsRW5kUG9pbnRDaGlsZHJlbnNbZW5kTGFzdF07XG5cbiAgICBjb25zdCBpbnRlcnNlY3RQb2ludHMgPSBjaGVja0NoaWxkcmVucyhcbiAgICAgIHN0YXJ0THZsUG9pbnRzLFxuICAgICAgZW5kTHZsUG9pbnRzLFxuICAgICk7XG5cbiAgICBpZiAoaW50ZXJzZWN0UG9pbnRzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBmbGFnID09PSAnc3RhcnQnID8gZmxhZyA9ICdlbmQnIDogZmxhZyA9ICdzdGFydCc7XG4gICAgICBpbnRlcnNlY3QgPSBmaW5kSW50ZXJzZWN0KHN0YXJ0THZsUG9pbnRzLCBlbmRMdmxQb2ludHMsIGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RQb2ludHNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVyc2VjdDtcbiAgfVxuXG4gIGNvbnN0IHNldENoaWxkcmVucyA9IChwb2ludENoaWxkcmVucywgZmxhZykgPT4ge1xuICAgIGxldCBjaGlsZHJlbnMgPSBbXTtcbiAgICBwb2ludENoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gZ2V0UHJvY2Vzc2VkQXJyKGNoaWxkcmVucy5jb25jYXQoY2hpbGQuZ2V0TW92ZXMoKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZsYWcgPT09IFwic3RhcnRcIlxuICAgICAgPyBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMucHVzaChjaGlsZHJlbnMpXG4gICAgICA6IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMucHVzaChjaGlsZHJlbnMpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkUGF0aCA9IChpbnRlcnNlY3RQb2ludCwgY2hpbGRyZW5zLCBjb250YWluZXIpID0+IHtcbiAgICBsZXQgbW92ZXMgPSBnZXRQcm9jZXNzZWRBcnIoaW50ZXJzZWN0UG9pbnQuZ2V0TW92ZXMoKSk7XG4gICAgbGV0IGx2bCA9IGNoaWxkcmVucy5wb3AoKTtcblxuICAgIGlmIChsdmwuaW5kZXhPZihpbnRlcnNlY3RQb2ludCkgPj0gMCkge1xuICAgICAgbHZsID0gY2hpbGRyZW5zLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpbnRlcnNlY3RQb2ludHMgPSBjaGVja0NoaWxkcmVucyhcbiAgICAgICAgbW92ZXMsXG4gICAgICAgIGx2bCxcbiAgICAgICk7XG4gICAgICBjb250YWluZXIucHVzaChpbnRlcnNlY3RQb2ludHNbMF0pO1xuICAgICAgYnVpbGRQYXRoKGludGVyc2VjdFBvaW50c1swXSwgY2hpbGRyZW5zLCBjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrQ2hpbGRyZW5zID0gKHN0YXJ0Q2hpbGRyZW5zLCBlbmRDaGlsZHJlbnMpID0+IHtcbiAgICBjb25zdCBjb21tb24gPSBzdGFydENoaWxkcmVucy5maWx0ZXIoXG4gICAgICAoY2hpbGQpID0+IGVuZENoaWxkcmVucy5pbmRleE9mKGNoaWxkKSAhPT0gLTEsXG4gICAgKTtcbiAgICByZXR1cm4gY29tbW9uO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhdGggfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgbGV0IHBhdGggPSBrbmlnaHRNb3Zlc0hhbmRsZXIoKS5nZXRQYXRoKEZpZ3VyZXNQb3NpdGlvbnMua25pZ2h0LCBGaWd1cmVzUG9zaXRpb25zLnBvaW50KTtcbiAgUGF0aC5zZXRQYXRoKHBhdGgpO1xuICBwYXRoLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmdldE5vZGUoKS5zdHlsZS5ib3JkZXIgPSAnMXZoIGJsdWUgc29saWQnO1xuICAgIHNldExpc3RlbmVyRm9yUGF0aENlbGxzKGVsZW1lbnQuZ2V0Tm9kZSgpKTtcbiAgfSk7XG59XG5cbmNvbnN0IGdldFByb2Nlc3NlZEFyciA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KGFycmF5LmZpbHRlcigobikgPT4gbikpO1xuICByZXR1cm4gWy4uLnNldF07XG59IiwiaW1wb3J0IHsgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtbywgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtb0Zvck1vYmlsZSwgc2V0TGlzdGVuZXJzRm9yRGVtbywgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGVybkRlbW9cIjtcbmltcG9ydCB7IEhpZGUsIFZpZXcgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9wcmVzZXRzXCI7XG5pbXBvcnQgeyBBY3RpdmVUZXh0IH0gZnJvbSBcIi4vY3VycmVudEFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50RGVtbyA9ICgoKSA9PiB7XG4gICAgbGV0IGRlbW87XG5cbiAgICBjb25zdCBnZXREZW1vID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVtbztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRkZW1vID0gKG5EZW1vKSA9PiB7XG4gICAgICAgIGRlbW8gPSBuRGVtbztcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRkZW1vLCBnZXREZW1vIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRMZXJuID0gKCkgPT4ge1xuICAgIGRlbW9TdGVwcygpLnN0YXJ0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZW1vU3RlcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRlbW8oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSgpO1xuICAgICAgICBLbmlnaHQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgVmlldy5wb3B1cCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFZpZXcudGV4dENvbnRhaW5lcigpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGVwMSA9ICgpID0+IHtcbiAgICAgICAgRWxlbWVudHMua25pZ2h0V3JhcHBlci5zdHlsZS56SW5kZXggPSAnNTAxJztcbiAgICAgICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgICAgIFZpZXcua25pZ2h0V3JhcHBlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGtuaWdodERlbW8oKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RlcDIgPSAoKSA9PiB7XG4gICAgICAgIEVsZW1lbnRzLnBvaW50V3JhcHBlci5zdHlsZS56SW5kZXggPSAnNTAxJztcbiAgICAgICAgVmlldy5wb2ludFdyYXBwZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwb2ludERlbW8oKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vKCk7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyc0ZvckRlbW9Gb3JNb2JpbGUoKTtcbiAgICAgICAgRWxlbWVudHMua25pZ2h0V3JhcHBlci5yZW1vdmVDaGlsZChLbmlnaHQuZ2V0QXJyb3coKS5nZXRTdmcoKSk7XG4gICAgICAgIEVsZW1lbnRzLnBvaW50V3JhcHBlci5yZW1vdmVDaGlsZChQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpKTtcbiAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICAgICAgSGlkZS5wb3B1cCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0LCBzdGVwMSwgc3RlcDIsIGVuZCB9XG59XG5cbmNvbnN0IGtuaWdodERlbW8gPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCkuc3R5bGUuekluZGV4ID0gNjAwO1xuICAgIEtuaWdodC5nZXRBcnJvdygpLnNldFBvc2l0aW9uKCk7XG4gICAgS25pZ2h0LmdldEFycm93KCkudmlldygpO1xuICAgIEtuaWdodC5nZXRBcnJvdygpLm1vdmUoKTtcbiAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LmtuaWdodFRleHQoKSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICB9LCAxMDAwKTtcbn1cblxuY29uc3QgcG9pbnREZW1vID0gKCkgPT4ge1xuICAgIFBvaW50LmdldEFycm93KCkuc2V0UG9zaXRpb24oKTtcbiAgICBQb2ludC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICBQb2ludC5nZXRBcnJvdygpLm1vdmUoKTtcbiAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LnBvaW50VGV4dCgpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgUG9pbnQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgIH0sIDEwMDApO1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQm9hcmRQcmlvcml0eSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc3ZnTmFtZSA9IGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsO1xuICAgIGlmIChzdmdOYW1lID09PSAna25pZ2h0Jykge1xuICAgICAgICBhZGRCb2FyZFByaW9yaXR5KEtuaWdodCk7XG4gICAgICAgIEtuaWdodC5nZXRBcnJvdygpLmhpZGUoKTtcbiAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5rbmlnaHRUZXh0KCkpO1xuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBQb2ludC5nZXRBcnJvdygpLmhpZGUoKTtcbiAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5wb2ludFRleHQoKSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZEJvYXJkUHJpb3JpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgVmlldy5ib2FyZCgpO1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICc1MDEnO1xufVxuXG5jb25zdCByZW1vdmVCb2FyZFByaW9yaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xufVxuXG5leHBvcnQgY29uc3QgZW5kRHJhZ0RlbW8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN2Z05hbWUgPSBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgaWYgKEtuaWdodC5nZXRQYXJlbnQoKS5jbGFzc05hbWUgPT09ICdrbmlnaHQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIEtuaWdodC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcua25pZ2h0VGV4dCgpKTtcbiAgICAgICAgICAgIHJlbW92ZUJvYXJkUHJpb3JpdHkoS25pZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnIG5vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuc3RlcDIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBpZiAoUG9pbnQuZ2V0UGFyZW50KCkuY2xhc3NOYW1lICE9PSAncG9pbnQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQb2ludC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuZ2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LnBvaW50VGV4dCgpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgTm9kZSA9IChjWCwgY1kpID0+IHtcbiAgbGV0IG5vZGU7XG4gIGNvbnN0IHggPSBjWDtcbiAgY29uc3QgeSA9IGNZO1xuXG4gIGxldCBtb3ZlcyA9IFs4XTtcblxuICBjb25zdCBzZXROb2RlID0gKG5Ob2RlKSA9PiB7XG4gICAgbm9kZSA9IG5Ob2RlO1xuICB9XG5cbiAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGNvbnN0IHNldE1vdmUgPSAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBtb3Zlc1tpbmRleF0gPSBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGdldE1vdmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBtb3ZlcztcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7IHNldE5vZGUsIGdldE5vZGUsIHNldE1vdmUsIGdldE1vdmVzLCBnZXRDb29yZGluYXRlcyB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBQYXRoID0gKCgpID0+IHtcbiAgICBsZXQgcGF0aDtcblxuICAgIGNvbnN0IHNldFBhdGggPSAoblBhdG4pID0+IHtcbiAgICAgICAgcGF0aCA9IG5QYXRuO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhdGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldFBhdGgsIGdldFBhdGggfTtcbn0pKCkiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeHkgPSAoZSwgeCwgeSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eH1gIH0sIHsgbGVmdDogYCR7eX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3RhdGUgPSAoZSwgcm90YXRlMSwgcm90YXRlMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTF9ZGVnKWAgfSwgeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUyfWRlZylgIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB4LCB5LCB4eSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBTbW9vdGhBbmltYXRpb25zID0gKCgpID0+IHtcblxuICAgIGNvbnN0IFNtb290aFZpc2liaWxpdHkgPSAoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkucGxheVN0YXRlICE9PSAncGF1c2VkJykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkdXIpO1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZpZXcgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgdmlldywgaGlkZSB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBTbW9vdGhWaXNpYmlsaXR5IH07XG59KSgpOyIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZlID0gKGFycm93LCByZWN0UGFyZW50LCByZWN0QXJyb3cpID0+IHtcbiAgICBBbmltYXRpb25zLnRyYW5zZm9ybS54KGFycm93LCBgJHtyZWN0UGFyZW50Lnh9cHhgLCBgJHtyZWN0UGFyZW50LnggKyByZWN0UGFyZW50LndpZHRofXB4YCwgNDAwLCAnZm9yd2FyZHMnKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdFBhcmVudC54ICsgcmVjdFBhcmVudC53aWR0aH1weGAsIGAke3JlY3RQYXJlbnQueH1weGAsIDQwMCwgJ2ZvcndhcmRzJylcbiAgICB9KTtcbiAgICBBbmltYXRpb25zLnRyYW5zZm9ybS55KGFycm93LCBgJHtyZWN0UGFyZW50Lnl9cHhgLCBgJHtyZWN0UGFyZW50LnkgLSByZWN0UGFyZW50LmhlaWdodH1weGAsIDQwMCwgJ2ZvcndhcmRzJykuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgIEFuaW1hdGlvbnMudHJhbnNmb3JtLnkoYXJyb3csIGAke3JlY3RQYXJlbnQueSAtIHJlY3RQYXJlbnQuaGVpZ2h0fXB4YCwgYCR7cmVjdFBhcmVudC55fXB4YCwgNDAwLCAnZm9yd2FyZHMnKVxuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBjb25zdCBzZXRYWSA9IChhcnJvdywgcmVjdCkgPT4ge1xuICAgIGNvbnN0IHhmb3JtcyA9IGFycm93LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZShyZWN0LmhlaWdodCwgLXJlY3Qud2lkdGgpO1xufSIsImltcG9ydCB7IHNldExpc3RlbmVyc0ZvckFjdGl2ZUNlbGxzLCBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxsc1wiO1xuaW1wb3J0IHsgQWN0aXZlQm9hcmQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2JvYXJkXCI7XG5pbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzUG9zaXRpb25zXCI7XG5pbXBvcnQgeyBzZXRCb3JkZXIgfSBmcm9tIFwiLi4vbm9kZXMvY2VsbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyYWdnYWJsZShzdmcpIHtcbiAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgbGV0IGdhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2dhZycpO1xuICAgIGxldCBsYXN0ID0gZ2FnO1xuICAgIGxldCBjZWxsSW5kZXggPSAxO1xuICAgIGxldCBwYXJlbnQ7XG4gICAgY29uc3QgY2VsbHMgPSBBY3RpdmVCb2FyZC5nZXRCb2FyZCgpLmdldENlbGxzKCk7XG5cbiAgICBmdW5jdGlvbiBzdGFydERyYWcoZSkge1xuICAgICAgICBwYXJlbnQgPSBzdmcucGFyZW50RWxlbWVudDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gc3ZnO1xuICAgICAgICBjb25zdCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzdmdYID0gcmVjdC54ICsgcGFyc2VJbnQocmVjdC53aWR0aCAvIDIpO1xuICAgICAgICBjb25zdCBzdmdZID0gcmVjdC55ICsgcGFyc2VJbnQocmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChzdmdYLCBzdmdZKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzWzBdLmdldEF0dHJpYnV0ZU5hbWVzKClbMF0gPT09ICdkJykge1xuICAgICAgICAgICAgY2VsbEluZGV4ID0gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGN1cnNvclggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgY3Vyc29yWSA9IGUuY2xpZW50WTtcblxuICAgICAgICAgICAgaWYgKGN1cnNvclggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGN1cnNvclggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgICAgICBjdXJzb3JZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGN1cnNvclgsIGN1cnNvclkpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2NlbGxJbmRleF07XG4gICAgICAgICAgICBsZXQgc3ZnWCA9IHJlY3QueCArIHBhcnNlSW50KHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgICAgIGxldCBzdmdZID0gcmVjdC55ICsgcGFyc2VJbnQocmVjdC5oZWlnaHQgLyAyKTtcblxuICAgICAgICAgICAgc2V0WFkoc3ZnLCBjdXJzb3JYIC0gc3ZnWCwgY3Vyc29yWSAtIHN2Z1kpO1xuICAgICAgICAgICAgc3ZnWCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgICAgICAgICAgc3ZnWSA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUgPT09ICdjZWxsJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlb3ZlckV2ZW50ID0gbmV3IEV2ZW50KCdtb3VzZW92ZXInKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobW91c2VvdmVyRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFzdCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlbGVhdmVFdmVudCA9IG5ldyBFdmVudCgnbW91c2VsZWF2ZScpO1xuICAgICAgICAgICAgICAgIGxhc3QuZGlzcGF0Y2hFdmVudChtb3VzZWxlYXZlRXZlbnQpO1xuICAgICAgICAgICAgICAgIGxhc3QgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kRHJhZygpIHtcbiAgICAgICAgcmVzZXQoKTtcblxuICAgICAgICBpZiAobGFzdCAhPT0gZ2FnICYmIGxhc3QgIT09IHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGxhc3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGFzdC5hcHBlbmRDaGlsZChzdmcpO1xuICAgICAgICAgICAgICAgIHNldFBhcmVudChzdmcsIGxhc3QpO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckFjdGl2ZUNlbGxzKGxhc3QpO1xuICAgICAgICAgICAgICAgIHNldEJvcmRlcihsYXN0LCAnZ3JlZW4nKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc05hbWUgPT09ICdjZWxsJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JDZWxsKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcztcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmdldE5vZGUoKSA9PT0gbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBGaWd1cmVzUG9zaXRpb25zW3N2Zy5jbGFzc05hbWUuYmFzZVZhbF0gPSBjb29yZGluYXRlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgZGVmYXVsdFhZKHN2Zyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnREcmFnLCBkcmFnLCBlbmREcmFnLCBsYXN0IH07XG59XG5cbmV4cG9ydCBjb25zdCBzZXRYWSA9IChteUVsZW1lbnQsIHgsIHkpID0+IHtcbiAgICBjb25zdCB4Zm9ybXMgPSBteUVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XG4gICAgY29uc3QgZmlyc3RYRm9ybSA9IHhmb3Jtcy5nZXRJdGVtKDApO1xuICAgIGZpcnN0WEZvcm0uc2V0VHJhbnNsYXRlKGZpcnN0WEZvcm0ubWF0cml4LmUgKyB4LCBmaXJzdFhGb3JtLm1hdHJpeC5mICsgeSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0WFkgPSAobXlFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeGZvcm1zID0gbXlFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZSgwLCAwKTtcbn1cblxuY29uc3Qgc2V0UGFyZW50ID0gKHN2ZywgcGFyZW50KSA9PiB7XG4gICAgaWYgKHN2Zy5jbGFzc05hbWUuYmFzZVZhbCA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgS25pZ2h0LnNldFBhcmVudChwYXJlbnQpXG4gICAgfVxuICAgIGlmIChzdmcuY2xhc3NOYW1lLmJhc2VWYWwgPT09ICdwb2ludCcpIHtcbiAgICAgICAgUG9pbnQuc2V0UGFyZW50KHBhcmVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9wdXAsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuICAgIGNvbnN0IGJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMuYm9hcmQsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy50ZXh0Q29udGFpbmVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCksIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KFBvaW50LmdldEFycm93KCkuZ2V0U3ZnKCksIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmtuaWdodFdyYXBwZXIsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9pbnRXcmFwcGVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5rbmlnaHRUZXh0LCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50VGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLnBvaW50VGV4dCwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3B1cCwgYm9hcmQsIHRleHRDb250YWluZXIsIGtuaWdodEFycm93LCBwb2ludEFycm93LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEhpZGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMucG9wdXAsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5ib2FyZCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMudGV4dENvbnRhaW5lciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpLCAxLCAwLCAxMDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5rbmlnaHRXcmFwcGVyLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLnBvaW50V3JhcHBlciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMua25pZ2h0VGV4dCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5wb2ludFRleHQsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcG9wdXAsIGJvYXJkLCB0ZXh0Q29udGFpbmVyLCBrbmlnaHRBcnJvdywgcG9pbnRBcnJvdywga25pZ2h0V3JhcHBlciwgcG9pbnRXcmFwcGVyLCBrbmlnaHRUZXh0LCBwb2ludFRleHQgfTtcbn0pKCk7IiwiZXhwb3J0IGNvbnN0IGdldEFycm93Tm9kZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LmFkZChgYXJyb3dgKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKGBhcnJvdy0ke25hbWV9YCk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3ctdGVtcGxhdGUnKTtcbiAgICByZXR1cm4gYXJyb3c7XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IGdldENlbGxOb2RlIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5leHBvcnQgY29uc3QgZmlsbEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBib2FyZC5nZXRDZWxscygpO1xuICAgIGNvbnN0IHdpZHRoID0gYm9hcmQuZ2V0U2l6ZSgpWzBdO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldFNpemUoKVsxXTtcbiAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBsZXQgaXNCbGFjayA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgIGlzQmxhY2sgPSAhaXNCbGFja1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbal1baV07XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwobm9kZSk7XG4gICAgICAgICAgICBjZWxsLnNldE5vZGUobm9kZSk7XG4gICAgICAgICAgICBib2FyZE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNCbGFjaykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkMjhiNDgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZjZTlmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQmxhY2sgPSAhaXNCbGFjaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc2V0Qm9yZGVyID0gKGNlbGwsIGNvbG9yKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBgbWluKDF2aCwgMXZ3KSAke2NvbG9yfSBzb2xpZGA7XG59XG5cbmV4cG9ydCBjb25zdCByZXNldEJvcmRlciA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBgYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENlbGxOb2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICByZXR1cm4gY2VsbDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=