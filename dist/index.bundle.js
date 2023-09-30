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
    width: min(90vh, 50vw);
}

.svg {
    display: grid;
}

.knight,
.point {
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
}

.drag-and-drop {
    visibility: hidden;
    color: rgb(27, 177, 247);
    font-size: 1.5vh;
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
    align-items: start;
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

@media screen and (min-aspect-ratio: 1/1) {}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,2CAA2C;IAC3C,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,MAAM;IACN,OAAO;IACP,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA,kDAAkD;;AAElD,2CAA2C","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: max-content;\n}\n\n.wrapper {\n    display: grid;\n    max-width: 100%;\n    max-height: 100%;\n    gap: 2vh;\n    padding: 5vh;\n}\n\n.board-wrapper {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    grid-template-rows: min-content min-content;\n    gap: 1vh;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    width: min(80vh, 70vw);\n    height: min(80vh, 70vw);\n    border: 1vh rgb(82, 82, 82) solid;\n}\n\n.cell {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.panel {\n    display: grid;\n    gap: 2vh;\n    grid-template-columns: 1fr 1fr;\n    width: min(90vh, 50vw);\n}\n\n.svg {\n    display: grid;\n}\n\n.knight,\n.point {\n    width: min(8vh, 4vw);\n    height: min(8vh, 4vw);\n}\n\n.arrow-template {\n    display: none;\n}\n\n.arrow {\n    position: absolute;\n    pointer-events: none;\n    visibility: hidden;\n    width: min(6vh, 3vw);\n    height: min(6vh, 3vw);\n    fill: rgb(27, 177, 247);\n}\n\npath {\n    pointer-events: none;\n}\n\n.knight-wrapper,\n.point-wrapper {\n    display: grid;\n    grid-template-columns: min-content max-content;\n    background-color: white;\n    border-radius: 1vh;\n    padding: 1vh;\n}\n\n.drag-and-drop {\n    visibility: hidden;\n    color: rgb(27, 177, 247);\n    font-size: 1.5vh;\n}\n\n.popup {\n    position: fixed;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: start;\n    opacity: 0;\n    visibility: hidden;\n    padding: 1vh;\n    transition: all 0.5s ease 0s;\n    z-index: 500;\n}\n\n.text-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2vh;\n    height: 30%;\n    width: 60%;\n    opacity: 0;\n    visibility: hidden;\n    color: white;\n    font-size: 2vh;\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) {}"],"sourceRoot":""}]);
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



const removeListenersForDemo = () => {
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    window.removeEventListener('resize', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.defaultArrow);
}

const setListenersForDemo = () => {
    window.addEventListener('click', (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.demoSteps)().step1, { once: true })
    window.addEventListener('resize', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.defaultArrow);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('mousedown', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('mouseup', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
}

const setListenersForDemoForMibile = () => {
    window.addEventListener('click', (0,_models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.demoSteps)().step1, { once: true })
    window.addEventListener('resize', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.defaultArrow);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().addEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().addEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
}

const removeListenersForDemoForMobile = () => {
    window.removeEventListener('resize', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.defaultArrow);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Knight.getSvg().removeEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('touchstart', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.changeBoardPriority);
    _models_figures__WEBPACK_IMPORTED_MODULE_0__.Point.getSvg().removeEventListener('touchend', _models_lernPreset__WEBPACK_IMPORTED_MODULE_1__.endDragDemo);
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
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/knightMovesHandler */ "./src/models/knightMovesHandler.js");


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
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figures */ "./src/models/figures.js");


const Elements = (() => {
    const popup = document.querySelector('.popup');
    const board = document.querySelector('.board');
    const textContainer = document.querySelector('.text-container');
    const knightWrapper = document.querySelector('.knight-wrapper');
    const pointWrapper = document.querySelector('.point-wrapper');
    const knightText = knightWrapper.querySelector('.drag-and-drop');
    const pointText = pointWrapper.querySelector('.drag-and-drop');
    console.log(pointText)
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
        const panel = document.querySelector(`.${name}-wrapper`);
        panel.appendChild(arrow);

        setTimeout(() => {
            _currentAnimations__WEBPACK_IMPORTED_MODULE_4__.ActiveArrow.setAnimation(_views_animations_animations__WEBPACK_IMPORTED_MODULE_1__.SmoothAnimations.SmoothVisibility.view(arrow, 0, 1, 500, 'forwards'));
        }, 500);
    }

    const setPosition = () => {
        let rectParent = parent.getRect();
        (0,_views_animations_arrows__WEBPACK_IMPORTED_MODULE_2__.setXY)(arrow, rectParent.width, -rectParent.height)
    }

    const move = () => {
        interval = setInterval(() => {
            let rectParent = parent.getRect();
            let rectArrow = prototype.getRect();
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
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/models/board.js");


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
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/models/board.js");


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
/* harmony export */   defaultArrow: () => (/* binding */ defaultArrow),
/* harmony export */   demoSteps: () => (/* binding */ demoSteps),
/* harmony export */   endDragDemo: () => (/* binding */ endDragDemo),
/* harmony export */   startLern: () => (/* binding */ startLern)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forLernDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/forLernDemo */ "./src/controllers/listeners/forLernDemo.js");
/* harmony import */ var _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/presets */ "./src/views/animations/presets.js");
/* harmony import */ var _currentAnimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentAnimations */ "./src/models/currentAnimations.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ "./src/models/elements.js");
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./figures */ "./src/models/figures.js");






let knightTextHide = _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.knightText();
let knightTextView = _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.knightText();
let pointTextAnimation;

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
        _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getSvg().style.pointerEvents = 'all';
        _views_animations_presets__WEBPACK_IMPORTED_MODULE_1__.Hide.popup();
    }

    return { start, step1, step2, end }
}

const knightDemo = () => {
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
}

const defaultArrow = () => {
    _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getArrow().setPosition();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().setPosition();
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
    _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.x(arrow, `${rectParent.x}px`, `${rectArrow.x}px`, 200);
    _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.y(arrow, `${rectParent.y}px`, `${rectArrow.y}px`, 200).finished.then(() => {
        _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.x(arrow, `${rectArrow.x}px`, `${rectParent.x}px`, 200);
        _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.transform.y(arrow, `${rectArrow.y}px`, `${rectParent.y}px`, 200)
    })
}

const setXY = (myElement, x, y) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(x, y);
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
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/knightMovesHandler */ "./src/models/knightMovesHandler.js");
/* harmony import */ var _models_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/path */ "./src/models/path.js");







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
            const cursorX = e.clientX;
            const cursorY = e.clientY;
            const elements = document.elementsFromPoint(cursorX, cursorY);
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
                last.style.border = '1vh green solid';
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



const getXY = (myElement) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    if (firstXForm.type == SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        const firstX = firstXForm.matrix.e;
        const firstY = firstXForm.matrix.f;
        return [firstX, firstY];
    }

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
    cell.style.border = `1vh ${color} solid`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBZ0IsdUJBQXVCLGtEQUFLO0FBQzNEOztBQUVBO0FBQ0EsZUFBZSx5REFBZ0IsdUJBQXVCLHNEQUFRO0FBQzlEOztBQUVBO0FBQ0EsZUFBZSx5REFBZ0IsdUJBQXVCLHNEQUFRO0FBQzlEOztBQUVBO0FBQ0EsZUFBZSx5REFBZ0IsdUJBQXVCLHNEQUFRO0FBQzlEOztBQUVBO0FBQ0EsZUFBZSx5REFBZ0IsdUJBQXVCLHNEQUFRO0FBQzlEOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hGTTtBQUNQO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkU7QUFDdEM7O0FBRTlCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQSx5QkFBeUIsa0RBQVc7QUFDcEMsWUFBWSxvRkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1AsK0JBQStCLE9BQU87QUFDdEM7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcz8yMmFiIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckRyYWdFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2Zvckxlcm5EZW1vLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yVHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9jdXJyZW50QW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZmlndXJlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9rbmlnaHRNb3Zlc0dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvbGVyblByZXNldC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9wYXRoLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9hbmltYXRpb25zL21ha2VEcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3Mvbm9kZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL25vZGVzL2JvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9ub2Rlcy9jZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMnZoO1xuICAgIHBhZGRpbmc6IDV2aDtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgZ2FwOiAxdmg7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gICAgd2lkdGg6IG1pbig4MHZoLCA3MHZ3KTtcbiAgICBoZWlnaHQ6IG1pbig4MHZoLCA3MHZ3KTtcbiAgICBib3JkZXI6IDF2aCByZ2IoODIsIDgyLCA4Mikgc29saWQ7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBhbmVsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMnZoO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB3aWR0aDogbWluKDkwdmgsIDUwdncpO1xufVxuXG4uc3ZnIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ua25pZ2h0LFxuLnBvaW50IHtcbiAgICB3aWR0aDogbWluKDh2aCwgNHZ3KTtcbiAgICBoZWlnaHQ6IG1pbig4dmgsIDR2dyk7XG59XG5cbi5hcnJvdy10ZW1wbGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiBtaW4oNnZoLCAzdncpO1xuICAgIGhlaWdodDogbWluKDZ2aCwgM3Z3KTtcbiAgICBmaWxsOiByZ2IoMjcsIDE3NywgMjQ3KTtcbn1cblxucGF0aCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5rbmlnaHQtd3JhcHBlcixcbi5wb2ludC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xuICAgIHBhZGRpbmc6IDF2aDtcbn1cblxuLmRyYWctYW5kLWRyb3Age1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBjb2xvcjogcmdiKDI3LCAxNzcsIDI0Nyk7XG4gICAgZm9udC1zaXplOiAxLjV2aDtcbn1cblxuLnBvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZzogMXZoO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG4gICAgei1pbmRleDogNTAwO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAydmg7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAydmg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7fWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxNQUFNO0lBQ04sT0FBTztJQUNQLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBLGtEQUFrRDs7QUFFbEQsMkNBQTJDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgcGFkZGluZzogNXZoO1xcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXZoO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICB3aWR0aDogbWluKDgwdmgsIDcwdncpO1xcbiAgICBoZWlnaHQ6IG1pbig4MHZoLCA3MHZ3KTtcXG4gICAgYm9yZGVyOiAxdmggcmdiKDgyLCA4MiwgODIpIHNvbGlkO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucGFuZWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogbWluKDkwdmgsIDUwdncpO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmtuaWdodCxcXG4ucG9pbnQge1xcbiAgICB3aWR0aDogbWluKDh2aCwgNHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oOHZoLCA0dncpO1xcbn1cXG5cXG4uYXJyb3ctdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiBtaW4oNnZoLCAzdncpO1xcbiAgICBoZWlnaHQ6IG1pbig2dmgsIDN2dyk7XFxuICAgIGZpbGw6IHJnYigyNywgMTc3LCAyNDcpO1xcbn1cXG5cXG5wYXRoIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5rbmlnaHQtd3JhcHBlcixcXG4ucG9pbnQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG59XFxuXFxuLmRyYWctYW5kLWRyb3Age1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGNvbG9yOiByZ2IoMjcsIDE3NywgMjQ3KTtcXG4gICAgZm9udC1zaXplOiAxLjV2aDtcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xcbiAgICB6LWluZGV4OiA1MDA7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydmg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZXNldEJvcmRlciwgc2V0Qm9yZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL2NlbGxcIlxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgbW91c2VvdmVyID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdyZWQnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICByZXNldEJvcmRlcihjZWxsKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQWN0aXZlQ2VsbHMgPSAoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlb3ZlciA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAnZ3JlZW4nKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2dyZWVuJyk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyRm9yUGF0aENlbGxzID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBtb3VzZW92ZXIgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2JsdWUnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbW91c2VsZWF2ZSA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ2JsdWUnKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhdGhcIjtcbmltcG9ydCB7IG1ha2VEcmFnZ2FibGUgfSBmcm9tIFwiLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9tYWtlRHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4vZm9yQ2VsbHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRyYWdTdmcgPSAoc3ZnKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gbWFrZURyYWdnYWJsZShzdmcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnZ2FibGUuc3RhcnREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZ2dhYmxlLmRyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ2dhYmxlLmVuZERyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IFBhdGguZ2V0UGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcnO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwoY2VsbC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgfSBjYXRjaCB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Z0Zvck1pYmlsZSA9IChzdmcpID0+IHtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBtYWtlRHJhZ2dhYmxlKHN2Zyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkcmFnZ2FibGUuc3RhcnREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ2dhYmxlLmRyYWcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdnYWJsZS5lbmREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gUGF0aC5nZXRQYXRoKCk7XG4gICAgICAgICAgICBwYXRoLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5nZXROb2RlKCkuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICAgICAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbChjZWxsLmdldE5vZGUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICB9IGNhdGNoIHtcblxuICAgICAgICB9XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgY2hhbmdlQm9hcmRQcmlvcml0eSwgY3VycmVudERlbW8sIGRlZmF1bHRBcnJvdywgZGVtb1N0ZXBzLCBlbmREcmFnRGVtbyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbGVyblByZXNldFwiO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtbyA9ICgpID0+IHtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZERyYWdEZW1vKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVmYXVsdEFycm93KTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRlbW8gPSAoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVtb1N0ZXBzKCkuc3RlcDEsIHsgb25jZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWZhdWx0QXJyb3cpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZERyYWdEZW1vKTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSA9ICgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZW1vU3RlcHMoKS5zdGVwMSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlZmF1bHRBcnJvdyk7XG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtb0Zvck1vYmlsZSA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVmYXVsdEFycm93KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWdEZW1vKTtcbiAgICBQb2ludC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG59IiwiaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2tuaWdodE1vdmVzSGFuZGxlclwiO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yVHJhdmFpbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXZhaWxzJyk7XG5cbn0iLCJpbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgQWN0aXZlQm9hcmQsIEJvYXJkIH0gZnJvbSBcIi4vbW9kZWxzL2JvYXJkXCI7XG5pbXBvcnQgeyBrbmlnaHRNb3Zlc0hhbmRsZXIgfSBmcm9tIFwiLi9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyXCI7XG5pbXBvcnQgeyBLbmlnaHRNb3Zlc0dyYXBoIH0gZnJvbSBcIi4vbW9kZWxzL2tuaWdodE1vdmVzR3JhcGhcIjtcbmltcG9ydCB7IGZpbGxCb2FyZCB9IGZyb20gJy4vdmlld3Mvbm9kZXMvYm9hcmQnO1xuaW1wb3J0IHsgbWFrZURyYWdnYWJsZSB9IGZyb20gJy4vdmlld3MvYW5pbWF0aW9ucy9tYWtlRHJhZ2dhYmxlJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckRyYWdTdmcgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JEcmFnRWxlbWVudHMnO1xuaW1wb3J0IHsgRmlndXJlc1Bvc2l0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnMnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yVHJhdmFpbHMgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JUcmF2YWlscyc7XG5pbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSAnLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXJyb3cgfSBmcm9tICcuL3ZpZXdzL2FuaW1hdGlvbnMvYXJyb3dzJztcbmltcG9ydCB7IEtuaWdodCB9IGZyb20gJy4vbW9kZWxzL2ZpZ3VyZXMnO1xuaW1wb3J0IHsgY3VycmVudERlbW8sIHN0YXJ0TGVybiB9IGZyb20gJy4vbW9kZWxzL2xlcm5QcmVzZXQnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yRGVtbyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2Zvckxlcm5EZW1vJztcblxuS25pZ2h0TW92ZXNHcmFwaCgpLmJ1aWxkR3JhcGgoQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbmZpbGxCb2FyZChBY3RpdmVCb2FyZC5nZXRCb2FyZCgpKTtcblxuc2V0TGlzdGVuZXJzRm9yVHJhdmFpbHMoKTtcblxubGV0IGRlbW8gPSBzdGFydExlcm4oKTtcbmN1cnJlbnREZW1vLnNldGRlbW8oZGVtbyk7IiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IEJvYXJkID0gKCkgPT4ge1xuICBsZXQgd2lkdGggPSA4O1xuICBsZXQgaGVpZ2h0ID0gODtcblxuICBsZXQgY2VsbHMgPSBbXTtcblxuICBjb25zdCBjcmVhdGVDZWxscyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBOb2RlKGksIGopO1xuICAgICAgICBsaW5lLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBjZWxscy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDZWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2VsbHM7XG4gIH07XG5cbiAgY29uc3Qgc2V0U2l6ZSA9IChuV2lkdGgsIG5IZWlnaHQpID0+IHtcbiAgICB3aWR0aCA9IG5XaWR0aDtcbiAgICBoZWlnaHQgPSBuSGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlQ2VsbHMsIGdldENlbGxzLCBzZXRTaXplLCBnZXRTaXplIH07XG59O1xuXG5leHBvcnQgY29uc3QgQWN0aXZlQm9hcmQgPSAoKCkgPT4ge1xuICBsZXQgYWN0aXZlQm9hcmQgPSBCb2FyZCgpO1xuICBhY3RpdmVCb2FyZC5jcmVhdGVDZWxscygpO1xuICBjb25zdCBzZXRCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGFjdGl2ZUJvYXJkID0gYm9hcmQ7XG4gIH1cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFjdGl2ZUJvYXJkO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0Qm9hcmQsIGdldEJvYXJkIH07XG59KSgpXG4iLCJpbXBvcnQgeyBTbW9vdGhBbmltYXRpb25zIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5jb25zdCBBbmltYXRpbmdPYmplY3QgPSAoKSA9PiB7XG4gICAgbGV0IGFuaW1hdGlvbiA9IFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmJvYXJkLCAxLCAxLCAxLCAnZm9yd2FyZHMnKTtcblxuICAgIGNvbnN0IHNldEFuaW1hdGlvbiA9IChuZXdBbmltYXRpb24pID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICAgIGFuaW1hdGlvbiA9IG5ld0FuaW1hdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QW5pbWF0aW9uLCBnZXRBbmltYXRpb24gfTtcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUFycm93ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBBbmltYXRpbmdPYmplY3QoKTtcbiAgICByZXR1cm4gcHJvdG90eXBlO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZVRleHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEFuaW1hdGluZ09iamVjdCgpO1xuICAgIHJldHVybiBwcm90b3R5cGU7XG59KSgpO1xuIiwiaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcblxuZXhwb3J0IGNvbnN0IEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGtuaWdodFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25pZ2h0LXdyYXBwZXInKTtcbiAgICBjb25zdCBwb2ludFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnQtd3JhcHBlcicpO1xuICAgIGNvbnN0IGtuaWdodFRleHQgPSBrbmlnaHRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWFuZC1kcm9wJyk7XG4gICAgY29uc3QgcG9pbnRUZXh0ID0gcG9pbnRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWFuZC1kcm9wJyk7XG4gICAgY29uc29sZS5sb2cocG9pbnRUZXh0KVxuICAgIHJldHVybiB7IHBvcHVwLCBib2FyZCwgdGV4dENvbnRhaW5lciwga25pZ2h0VGV4dCwga25pZ2h0V3JhcHBlciwgcG9pbnRXcmFwcGVyLCBrbmlnaHRUZXh0LCBwb2ludFRleHQgfVxufSkoKTsiLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnLCBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnRm9yTWliaWxlIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JEcmFnRWxlbWVudHNcIjtcbmltcG9ydCB7IFNtb290aEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBnZXRNb3ZlLCBzZXRYWSB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2Fycm93c1wiO1xuaW1wb3J0IHsgZ2V0QXJyb3dOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2Fycm93XCI7XG5pbXBvcnQgeyBBY3RpdmVBcnJvdyB9IGZyb20gXCIuL2N1cnJlbnRBbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBGaWd1cmUgPSAobmV3U3ZnKSA9PiB7XG4gICAgY29uc3Qgc3ZnID0gbmV3U3ZnO1xuICAgIGxldCBwYXJlbnQ7XG5cbiAgICBjb25zdCBnZXRSZWN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN2ZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAoblBhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuUGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRSZWN0LCBnZXRTdmcsIHNldFBhcmVudCwgZ2V0UGFyZW50IH1cbn1cblxuZXhwb3J0IGNvbnN0IEFycm93ID0gKHBhcmVudCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEZpZ3VyZShnZXRBcnJvd05vZGUobmFtZSkpO1xuICAgIGNvbnN0IGFycm93ID0gcHJvdG90eXBlLmdldFN2ZygpO1xuICAgIGxldCBpbnRlcnZhbDtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0td3JhcHBlcmApO1xuICAgICAgICBwYW5lbC5hcHBlbmRDaGlsZChhcnJvdyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBBY3RpdmVBcnJvdy5zZXRBbmltYXRpb24oU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoYXJyb3csIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJykpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVjdFBhcmVudCA9IHBhcmVudC5nZXRSZWN0KCk7XG4gICAgICAgIHNldFhZKGFycm93LCByZWN0UGFyZW50LndpZHRoLCAtcmVjdFBhcmVudC5oZWlnaHQpXG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVjdFBhcmVudCA9IHBhcmVudC5nZXRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgcmVjdEFycm93ID0gcHJvdG90eXBlLmdldFJlY3QoKTtcbiAgICAgICAgICAgIGdldE1vdmUoYXJyb3csIHJlY3RQYXJlbnQsIHJlY3RBcnJvdyk7XG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgQWN0aXZlQXJyb3cuc2V0QW5pbWF0aW9uKFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKGFycm93LCAxLCAwLCA1MDAsICdmb3J3YXJkcycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgc2V0UG9zaXRpb24sIHZpZXcsIGhpZGUsIG1vdmUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBLbmlnaHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEZpZ3VyZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25pZ2h0JykpO1xuICAgIGNvbnN0IGFycm93ID0gQXJyb3cocHJvdG90eXBlLCAna25pZ2h0Jyk7XG5cbiAgICBwcm90b3R5cGUuc2V0UGFyZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQtd3JhcHBlcicpKTtcblxuICAgIGNvbnN0IHNldExpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmcocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Z0Zvck1pYmlsZShwcm90b3R5cGUuZ2V0U3ZnKCkpO1xuICAgIH0pKClcblxuICAgIGNvbnN0IGdldEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldEFycm93IH0pO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IFBvaW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBGaWd1cmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50JykpO1xuICAgIGNvbnN0IGFycm93ID0gQXJyb3cocHJvdG90eXBlLCAncG9pbnQnKTtcbiAgICBwcm90b3R5cGUuc2V0UGFyZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJykpO1xuXG4gICAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Zyhwcm90b3R5cGUuZ2V0U3ZnKCkpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnRm9yTWliaWxlKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgfSkoKVxuXG4gICAgY29uc3QgZ2V0QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJvdztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0QXJyb3cgfSk7XG59KSgpOyIsImltcG9ydCB7IEFjdGl2ZUJvYXJkLCBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBGaWd1cmVzUG9zaXRpb25zID0gKCgpID0+IHtcbiAgICBsZXQga25pZ2h0ID0gWzAsIDBdO1xuICAgIGxldCBwb2ludCA9IFswLCAwXTtcblxuICAgIHJldHVybiB7IGtuaWdodCwgcG9pbnQgfTtcbn0pKCkiLCJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBLbmlnaHRNb3Zlc0dyYXBoID0gKCkgPT4ge1xuICBsZXQgbnVsbE5vZGU7XG5cbiAgY29uc3QgZ2V0TnVsbE5vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bGxOb2RlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkR3JhcGggPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGJvYXJkLmdldENlbGxzKCk7XG4gICAgY29uc3Qgd2lkdGggPSBib2FyZC5nZXRTaXplKClbMF07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9hcmQuZ2V0U2l6ZSgpWzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBsZXQgY2VsbCA9IGNlbGxzW2pdW2ldO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDIsIGkgLSAxKSwgMCk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqIC0gMSwgaSAtIDIpLCAxKTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAxLCBpIC0gMiksIDIpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiArIDIsIGkgLSAxKSwgMyk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMiwgaSArIDEpLCA0KTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAxLCBpICsgMiksIDUpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDEsIGkgKyAyKSwgNik7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqIC0gMiwgaSArIDEpLCA3KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBudWxsTm9kZSA9IGNlbGxzWzBdWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vZGUgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldE51bGxOb2RlLCBidWlsZEdyYXBoIH07XG59O1xuIiwiaW1wb3J0IHsgcmVtb3ZlTGlzdGVuZXJzQ2VsbHMsIHNldExpc3RlbmVyRm9yUGF0aENlbGxzLCBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IEZpZ3VyZXNQb3NpdGlvbnMgfSBmcm9tIFwiLi9maWd1cmVzUG9zaXRpb25zXCI7XG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIi4vcGF0aFwiO1xuXG5leHBvcnQgY29uc3Qga25pZ2h0TW92ZXNIYW5kbGVyID0gKCkgPT4ge1xuICBsZXQgZmlyc3RIYWxmUGF0aCA9IFtdO1xuICBsZXQgc2Vjb25kSGFsZlBhdGggPSBbXTtcbiAgbGV0IGxldmVsU3RhcnRQb2ludENoaWxkcmVucyA9IFtdO1xuICBsZXQgbGV2ZWxFbmRQb2ludENoaWxkcmVucyA9IFtdO1xuXG4gIGNvbnN0IGdldFBhdGggPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgICByZXR1cm4gW3N0YXJ0XTtcbiAgICB9XG5cbiAgICBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMucHVzaChbc3RhcnRdKTtcbiAgICBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLnB1c2goW2VuZF0pO1xuXG4gICAgY29uc3QgcGF0aCA9IGJvbmRpbmdQYXRoKHN0YXJ0LCBlbmQpO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGNvbnN0IGJvbmRpbmdQYXRoID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBsZXQgcGF0aDtcbiAgICBsZXQgaW50ZXJzZWN0UG9pbnQgPSBmaW5kSW50ZXJzZWN0KFtzdGFydF0sIFtlbmRdKTtcblxuICAgIGJ1aWxkUGF0aChpbnRlcnNlY3RQb2ludCwgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLCBmaXJzdEhhbGZQYXRoKTtcbiAgICBidWlsZFBhdGgoaW50ZXJzZWN0UG9pbnQsIGxldmVsRW5kUG9pbnRDaGlsZHJlbnMsIHNlY29uZEhhbGZQYXRoKTtcblxuICAgIGZpcnN0SGFsZlBhdGggPSBnZXRQcm9jZXNzZWRBcnIoZmlyc3RIYWxmUGF0aCk7XG4gICAgc2Vjb25kSGFsZlBhdGggPSBnZXRQcm9jZXNzZWRBcnIoc2Vjb25kSGFsZlBhdGgpO1xuXG4gICAgcGF0aCA9IGZpcnN0SGFsZlBhdGguY29uY2F0KFtpbnRlcnNlY3RQb2ludF0pLmNvbmNhdChzZWNvbmRIYWxmUGF0aCk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgY29uc3QgZmluZEludGVyc2VjdCA9IChzdGFydCwgZW5kLCBmbGFnID0gJ2RlZicpID0+IHtcbiAgICBsZXQgaW50ZXJzZWN0O1xuXG4gICAgaWYgKGZsYWcgIT09ICdkZWYnKSB7XG4gICAgICBsZXQgcG9pbnRzID0gZmxhZyA9PT0gJ3N0YXJ0JyA/IHN0YXJ0IDogZW5kO1xuICAgICAgc2V0Q2hpbGRyZW5zKHBvaW50cywgZmxhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYWcgPSAnZW5kJztcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydExhc3QgPSBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBlbmRMYXN0ID0gbGV2ZWxFbmRQb2ludENoaWxkcmVucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHN0YXJ0THZsUG9pbnRzID0gbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zW3N0YXJ0TGFzdF07XG4gICAgY29uc3QgZW5kTHZsUG9pbnRzID0gbGV2ZWxFbmRQb2ludENoaWxkcmVuc1tlbmRMYXN0XTtcblxuICAgIGNvbnN0IGludGVyc2VjdFBvaW50cyA9IGNoZWNrQ2hpbGRyZW5zKFxuICAgICAgc3RhcnRMdmxQb2ludHMsXG4gICAgICBlbmRMdmxQb2ludHMsXG4gICAgKTtcblxuICAgIGlmIChpbnRlcnNlY3RQb2ludHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGZsYWcgPT09ICdzdGFydCcgPyBmbGFnID0gJ2VuZCcgOiBmbGFnID0gJ3N0YXJ0JztcbiAgICAgIGludGVyc2VjdCA9IGZpbmRJbnRlcnNlY3Qoc3RhcnRMdmxQb2ludHMsIGVuZEx2bFBvaW50cywgZmxhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdCA9IGludGVyc2VjdFBvaW50c1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0O1xuICB9XG5cbiAgY29uc3Qgc2V0Q2hpbGRyZW5zID0gKHBvaW50Q2hpbGRyZW5zLCBmbGFnKSA9PiB7XG4gICAgbGV0IGNoaWxkcmVucyA9IFtdO1xuICAgIHBvaW50Q2hpbGRyZW5zLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQgIT09IG51bGwgJiYgY2hpbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGlsZHJlbnMgPSBnZXRQcm9jZXNzZWRBcnIoY2hpbGRyZW5zLmNvbmNhdChjaGlsZC5nZXRNb3ZlcygpKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZmxhZyA9PT0gXCJzdGFydFwiXG4gICAgICA/IGxldmVsU3RhcnRQb2ludENoaWxkcmVucy5wdXNoKGNoaWxkcmVucylcbiAgICAgIDogbGV2ZWxFbmRQb2ludENoaWxkcmVucy5wdXNoKGNoaWxkcmVucyk7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRQYXRoID0gKGludGVyc2VjdFBvaW50LCBjaGlsZHJlbnMsIGNvbnRhaW5lcikgPT4ge1xuICAgIGxldCBtb3ZlcyA9IGdldFByb2Nlc3NlZEFycihpbnRlcnNlY3RQb2ludC5nZXRNb3ZlcygpKTtcbiAgICBsZXQgbHZsID0gY2hpbGRyZW5zLnBvcCgpO1xuXG4gICAgaWYgKGx2bC5pbmRleE9mKGludGVyc2VjdFBvaW50KSA+PSAwKSB7XG4gICAgICBsdmwgPSBjaGlsZHJlbnMucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGludGVyc2VjdFBvaW50cyA9IGNoZWNrQ2hpbGRyZW5zKFxuICAgICAgICBtb3ZlcyxcbiAgICAgICAgbHZsLFxuICAgICAgKTtcbiAgICAgIGNvbnRhaW5lci5wdXNoKGludGVyc2VjdFBvaW50c1swXSk7XG4gICAgICBidWlsZFBhdGgoaW50ZXJzZWN0UG9pbnRzWzBdLCBjaGlsZHJlbnMsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tDaGlsZHJlbnMgPSAoc3RhcnRDaGlsZHJlbnMsIGVuZENoaWxkcmVucykgPT4ge1xuICAgIGNvbnN0IGNvbW1vbiA9IHN0YXJ0Q2hpbGRyZW5zLmZpbHRlcihcbiAgICAgIChjaGlsZCkgPT4gZW5kQ2hpbGRyZW5zLmluZGV4T2YoY2hpbGQpICE9PSAtMSxcbiAgICApO1xuICAgIHJldHVybiBjb21tb247XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UGF0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICBsZXQgcGF0aCA9IGtuaWdodE1vdmVzSGFuZGxlcigpLmdldFBhdGgoRmlndXJlc1Bvc2l0aW9ucy5rbmlnaHQsIEZpZ3VyZXNQb3NpdGlvbnMucG9pbnQpO1xuICBQYXRoLnNldFBhdGgocGF0aCk7XG4gIHBhdGguZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcxdmggYmx1ZSBzb2xpZCc7XG4gICAgc2V0TGlzdGVuZXJGb3JQYXRoQ2VsbHMoZWxlbWVudC5nZXROb2RlKCkpO1xuICB9KTtcbn1cblxuY29uc3QgZ2V0UHJvY2Vzc2VkQXJyID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHNldCA9IG5ldyBTZXQoYXJyYXkuZmlsdGVyKChuKSA9PiBuKSk7XG4gIHJldHVybiBbLi4uc2V0XTtcbn0iLCJpbXBvcnQgeyByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vLCByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vRm9yTW9iaWxlLCBzZXRMaXN0ZW5lcnNGb3JEZW1vLCBzZXRMaXN0ZW5lcnNGb3JEZW1vRm9yTWliaWxlIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMZXJuRGVtb1wiO1xuaW1wb3J0IHsgSGlkZSwgVmlldyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL3ByZXNldHNcIjtcbmltcG9ydCB7IEFjdGl2ZVRleHQgfSBmcm9tIFwiLi9jdXJyZW50QW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcblxubGV0IGtuaWdodFRleHRIaWRlID0gSGlkZS5rbmlnaHRUZXh0KCk7XG5sZXQga25pZ2h0VGV4dFZpZXcgPSBIaWRlLmtuaWdodFRleHQoKTtcbmxldCBwb2ludFRleHRBbmltYXRpb247XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50RGVtbyA9ICgoKSA9PiB7XG4gICAgbGV0IGRlbW87XG5cbiAgICBjb25zdCBnZXREZW1vID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGVtbztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRkZW1vID0gKG5EZW1vKSA9PiB7XG4gICAgICAgIGRlbW8gPSBuRGVtbztcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRkZW1vLCBnZXREZW1vIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRMZXJuID0gKCkgPT4ge1xuICAgIGRlbW9TdGVwcygpLnN0YXJ0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZW1vU3RlcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRlbW8oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSgpO1xuICAgICAgICBLbmlnaHQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgVmlldy5wb3B1cCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFZpZXcudGV4dENvbnRhaW5lcigpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGVwMSA9ICgpID0+IHtcbiAgICAgICAgRWxlbWVudHMua25pZ2h0V3JhcHBlci5zdHlsZS56SW5kZXggPSAnNTAxJztcbiAgICAgICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgICAgIFZpZXcua25pZ2h0V3JhcHBlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGtuaWdodERlbW8oKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RlcDIgPSAoKSA9PiB7XG4gICAgICAgIEVsZW1lbnRzLnBvaW50V3JhcHBlci5zdHlsZS56SW5kZXggPSAnNTAxJztcbiAgICAgICAgVmlldy5wb2ludFdyYXBwZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwb2ludERlbW8oKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vKCk7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyc0ZvckRlbW9Gb3JNb2JpbGUoKTtcbiAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICAgICAgSGlkZS5wb3B1cCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0LCBzdGVwMSwgc3RlcDIsIGVuZCB9XG59XG5cbmNvbnN0IGtuaWdodERlbW8gPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldEFycm93KCkuc2V0UG9zaXRpb24oKTtcbiAgICBLbmlnaHQuZ2V0QXJyb3coKS52aWV3KCk7XG4gICAgS25pZ2h0LmdldEFycm93KCkubW92ZSgpO1xuICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcua25pZ2h0VGV4dCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBLbmlnaHQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgIH0sIDEwMDApO1xufVxuXG5jb25zdCBwb2ludERlbW8gPSAoKSA9PiB7XG4gICAgUG9pbnQuZ2V0QXJyb3coKS5zZXRQb3NpdGlvbigpO1xuICAgIFBvaW50LmdldEFycm93KCkudmlldygpO1xuICAgIFBvaW50LmdldEFycm93KCkubW92ZSgpO1xuICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcucG9pbnRUZXh0KCkpO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEFycm93ID0gKCkgPT4ge1xuICAgIEtuaWdodC5nZXRBcnJvdygpLnNldFBvc2l0aW9uKCk7XG4gICAgUG9pbnQuZ2V0QXJyb3coKS5zZXRQb3NpdGlvbigpO1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQm9hcmRQcmlvcml0eSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc3ZnTmFtZSA9IGUudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsO1xuICAgIGlmIChzdmdOYW1lID09PSAna25pZ2h0Jykge1xuICAgICAgICBhZGRCb2FyZFByaW9yaXR5KEtuaWdodCk7XG4gICAgICAgIEtuaWdodC5nZXRBcnJvdygpLmhpZGUoKTtcbiAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5rbmlnaHRUZXh0KCkpO1xuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBQb2ludC5nZXRBcnJvdygpLmhpZGUoKTtcbiAgICAgICAgQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5wb2ludFRleHQoKSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZEJvYXJkUHJpb3JpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgVmlldy5ib2FyZCgpO1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICc1MDEnO1xufVxuXG5jb25zdCByZW1vdmVCb2FyZFByaW9yaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xufVxuXG5leHBvcnQgY29uc3QgZW5kRHJhZ0RlbW8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN2Z05hbWUgPSBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgaWYgKEtuaWdodC5nZXRQYXJlbnQoKS5jbGFzc05hbWUgPT09ICdrbmlnaHQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIEtuaWdodC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcua25pZ2h0VGV4dCgpKTtcbiAgICAgICAgICAgIHJlbW92ZUJvYXJkUHJpb3JpdHkoS25pZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnIG5vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuc3RlcDIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBpZiAoUG9pbnQuZ2V0UGFyZW50KCkuY2xhc3NOYW1lICE9PSAncG9pbnQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQb2ludC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuZ2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LnBvaW50VGV4dCgpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgTm9kZSA9IChjWCwgY1kpID0+IHtcbiAgbGV0IG5vZGU7XG4gIGNvbnN0IHggPSBjWDtcbiAgY29uc3QgeSA9IGNZO1xuXG4gIGxldCBtb3ZlcyA9IFs4XTtcblxuICBjb25zdCBzZXROb2RlID0gKG5Ob2RlKSA9PiB7XG4gICAgbm9kZSA9IG5Ob2RlO1xuICB9XG5cbiAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGNvbnN0IHNldE1vdmUgPSAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBtb3Zlc1tpbmRleF0gPSBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGdldE1vdmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBtb3ZlcztcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7IHNldE5vZGUsIGdldE5vZGUsIHNldE1vdmUsIGdldE1vdmVzLCBnZXRDb29yZGluYXRlcyB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBQYXRoID0gKCgpID0+IHtcbiAgICBsZXQgcGF0aDtcblxuICAgIGNvbnN0IHNldFBhdGggPSAoblBhdG4pID0+IHtcbiAgICAgICAgcGF0aCA9IG5QYXRuO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhdGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldFBhdGgsIGdldFBhdGggfTtcbn0pKCkiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh5ID0gKGUsIHgsIHksIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3h9YCB9LCB7IGxlZnQ6IGAke3l9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgeHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgU21vb3RoQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgU21vb3RoVmlzaWJpbGl0eSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZGUgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkucGxheVN0YXRlICE9PSAncGF1c2VkJykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkdXIpO1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2aWV3ID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmlldywgaGlkZSB9O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIHsgU21vb3RoVmlzaWJpbGl0eSB9O1xufSkoKTsiLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92ZSA9IChhcnJvdywgcmVjdFBhcmVudCwgcmVjdEFycm93KSA9PiB7XG4gICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdFBhcmVudC54fXB4YCwgYCR7cmVjdEFycm93Lnh9cHhgLCAyMDApO1xuICAgIEFuaW1hdGlvbnMudHJhbnNmb3JtLnkoYXJyb3csIGAke3JlY3RQYXJlbnQueX1weGAsIGAke3JlY3RBcnJvdy55fXB4YCwgMjAwKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdEFycm93Lnh9cHhgLCBgJHtyZWN0UGFyZW50Lnh9cHhgLCAyMDApO1xuICAgICAgICBBbmltYXRpb25zLnRyYW5zZm9ybS55KGFycm93LCBgJHtyZWN0QXJyb3cueX1weGAsIGAke3JlY3RQYXJlbnQueX1weGAsIDIwMClcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0WFkgPSAobXlFbGVtZW50LCB4LCB5KSA9PiB7XG4gICAgY29uc3QgeGZvcm1zID0gbXlFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZSh4LCB5KTtcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscywgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IEFjdGl2ZUJvYXJkLCBCb2FyZCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYm9hcmRcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IEZpZ3VyZXNQb3NpdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnNcIjtcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnZ2FibGUoc3ZnKSB7XG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGZhbHNlO1xuICAgIGxldCBnYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdnYWcnKTtcbiAgICBsZXQgbGFzdCA9IGdhZztcbiAgICBsZXQgY2VsbEluZGV4ID0gMTtcbiAgICBsZXQgcGFyZW50O1xuICAgIGNvbnN0IGNlbGxzID0gQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKS5nZXRDZWxscygpO1xuXG4gICAgZnVuY3Rpb24gc3RhcnREcmFnKGUpIHtcbiAgICAgICAgcGFyZW50ID0gc3ZnLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHN2ZztcbiAgICAgICAgY29uc3QgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc3ZnWCA9IHJlY3QueCArIHBhcnNlSW50KHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3Qgc3ZnWSA9IHJlY3QueSArIHBhcnNlSW50KHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoc3ZnWCwgc3ZnWSk7XG4gICAgICAgIGlmIChlbGVtZW50c1swXS5nZXRBdHRyaWJ1dGVOYW1lcygpWzBdID09PSAnZCcpIHtcbiAgICAgICAgICAgIGNlbGxJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvclggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBjdXJzb3JZID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tjZWxsSW5kZXhdO1xuICAgICAgICAgICAgbGV0IHN2Z1ggPSByZWN0LnggKyBwYXJzZUludChyZWN0LndpZHRoIC8gMik7XG4gICAgICAgICAgICBsZXQgc3ZnWSA9IHJlY3QueSArIHBhcnNlSW50KHJlY3QuaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHNldFhZKHN2ZywgY3Vyc29yWCAtIHN2Z1gsIGN1cnNvclkgLSBzdmdZKTtcbiAgICAgICAgICAgIHN2Z1ggPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcbiAgICAgICAgICAgIHN2Z1kgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2VsbCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZW92ZXJFdmVudCA9IG5ldyBFdmVudCgnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG1vdXNlb3ZlckV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhc3QgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZWxlYXZlRXZlbnQgPSBuZXcgRXZlbnQoJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgICAgICAgICBsYXN0LmRpc3BhdGNoRXZlbnQobW91c2VsZWF2ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgaWYgKGxhc3QgIT09IGdhZyAmJiBsYXN0ICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsYXN0LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhc3QuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICBzZXRQYXJlbnQoc3ZnLCBsYXN0KTtcbiAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscyhsYXN0KTtcbiAgICAgICAgICAgICAgICBsYXN0LnN0eWxlLmJvcmRlciA9ICcxdmggZ3JlZW4gc29saWQnO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zdHlsZS5ib3JkZXIgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTmFtZSA9PT0gJ2NlbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvckVhY2goY2VsbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuZ2V0Tm9kZSgpID09PSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEZpZ3VyZXNQb3NpdGlvbnNbc3ZnLmNsYXNzTmFtZS5iYXNlVmFsXSA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICBkZWZhdWx0WFkoc3ZnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydERyYWcsIGRyYWcsIGVuZERyYWcsIGxhc3QgfTtcbn1cblxuXG5cbmNvbnN0IGdldFhZID0gKG15RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHhmb3JtcyA9IG15RWxlbWVudC50cmFuc2Zvcm0uYmFzZVZhbDtcbiAgICBjb25zdCBmaXJzdFhGb3JtID0geGZvcm1zLmdldEl0ZW0oMCk7XG4gICAgaWYgKGZpcnN0WEZvcm0udHlwZSA9PSBTVkdUcmFuc2Zvcm0uU1ZHX1RSQU5TRk9STV9UUkFOU0xBVEUpIHtcbiAgICAgICAgY29uc3QgZmlyc3RYID0gZmlyc3RYRm9ybS5tYXRyaXguZTtcbiAgICAgICAgY29uc3QgZmlyc3RZID0gZmlyc3RYRm9ybS5tYXRyaXguZjtcbiAgICAgICAgcmV0dXJuIFtmaXJzdFgsIGZpcnN0WV07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBzZXRYWSA9IChteUVsZW1lbnQsIHgsIHkpID0+IHtcbiAgICBjb25zdCB4Zm9ybXMgPSBteUVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XG4gICAgY29uc3QgZmlyc3RYRm9ybSA9IHhmb3Jtcy5nZXRJdGVtKDApO1xuICAgIGZpcnN0WEZvcm0uc2V0VHJhbnNsYXRlKGZpcnN0WEZvcm0ubWF0cml4LmUgKyB4LCBmaXJzdFhGb3JtLm1hdHJpeC5mICsgeSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0WFkgPSAobXlFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeGZvcm1zID0gbXlFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZSgwLCAwKTtcbn1cblxuY29uc3Qgc2V0UGFyZW50ID0gKHN2ZywgcGFyZW50KSA9PiB7XG4gICAgaWYgKHN2Zy5jbGFzc05hbWUuYmFzZVZhbCA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgS25pZ2h0LnNldFBhcmVudChwYXJlbnQpXG4gICAgfVxuICAgIGlmIChzdmcuY2xhc3NOYW1lLmJhc2VWYWwgPT09ICdwb2ludCcpIHtcbiAgICAgICAgUG9pbnQuc2V0UGFyZW50KHBhcmVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgS25pZ2h0LCBQb2ludCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZmlndXJlc1wiO1xuaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9wdXAsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuICAgIGNvbnN0IGJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMuYm9hcmQsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy50ZXh0Q29udGFpbmVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCksIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KFBvaW50LmdldEFycm93KCkuZ2V0U3ZnKCksIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmtuaWdodFdyYXBwZXIsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9pbnRXcmFwcGVyLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5rbmlnaHRUZXh0LCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50VGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLnBvaW50VGV4dCwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3B1cCwgYm9hcmQsIHRleHRDb250YWluZXIsIGtuaWdodEFycm93LCBwb2ludEFycm93LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEhpZGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMucG9wdXAsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5ib2FyZCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMudGV4dENvbnRhaW5lciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEtuaWdodC5nZXRBcnJvdygpLmdldFN2ZygpLCAxLCAwLCAxMDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShQb2ludC5nZXRBcnJvdygpLmdldFN2ZygpLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5rbmlnaHRXcmFwcGVyLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLnBvaW50V3JhcHBlciwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMua25pZ2h0VGV4dCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5wb2ludFRleHQsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcG9wdXAsIGJvYXJkLCB0ZXh0Q29udGFpbmVyLCBrbmlnaHRBcnJvdywgcG9pbnRBcnJvdywga25pZ2h0V3JhcHBlciwgcG9pbnRXcmFwcGVyLCBrbmlnaHRUZXh0LCBwb2ludFRleHQgfTtcbn0pKCk7IiwiZXhwb3J0IGNvbnN0IGdldEFycm93Tm9kZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctdGVtcGxhdGUnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LmFkZChgYXJyb3dgKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKGBhcnJvdy0ke25hbWV9YCk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3ctdGVtcGxhdGUnKTtcbiAgICByZXR1cm4gYXJyb3c7XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IGdldENlbGxOb2RlIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5leHBvcnQgY29uc3QgZmlsbEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBib2FyZC5nZXRDZWxscygpO1xuICAgIGNvbnN0IHdpZHRoID0gYm9hcmQuZ2V0U2l6ZSgpWzBdO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldFNpemUoKVsxXTtcbiAgICBjb25zdCBib2FyZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBsZXQgaXNCbGFjayA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgIGlzQmxhY2sgPSAhaXNCbGFja1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbal1baV07XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwobm9kZSk7XG4gICAgICAgICAgICBjZWxsLnNldE5vZGUobm9kZSk7XG4gICAgICAgICAgICBib2FyZE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNCbGFjaykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkMjhiNDgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZjZTlmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQmxhY2sgPSAhaXNCbGFjaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc2V0Qm9yZGVyID0gKGNlbGwsIGNvbG9yKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBgMXZoICR7Y29sb3J9IHNvbGlkYDtcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0Qm9yZGVyID0gKGNlbGwpID0+IHtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IGBgO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2VsbE5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIHJldHVybiBjZWxsO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==