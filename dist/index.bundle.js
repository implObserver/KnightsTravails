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
/* harmony import */ var _models_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements */ "./src/models/elements.js");
/* harmony import */ var _models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/knightMovesHandler */ "./src/models/knightMovesHandler.js");
/* harmony import */ var _models_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/path */ "./src/models/path.js");
/* harmony import */ var _views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/animations/makeDraggable */ "./src/views/animations/makeDraggable.js");
/* harmony import */ var _forCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forCells */ "./src/controllers/listeners/forCells.js");






const setListenersForDragSvg = (svg) => {
    const draggable = (0,_views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_3__.makeDraggable)(svg);
    svg.addEventListener('mousedown', draggable.startDrag);
    svg.addEventListener('mousemove', draggable.drag);
    svg.addEventListener('mouseup', draggable.endDrag);
    svg.addEventListener('mouseup', e => {
        try {
            let path = _models_path__WEBPACK_IMPORTED_MODULE_2__.Path.getPath();
            path.forEach(cell => {
                cell.getNode().style.border = '';
                (0,_forCells__WEBPACK_IMPORTED_MODULE_4__.setListenersForCell)(cell.getNode());
            });
        } catch (error) {

        }
        try {
            (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_1__.start)();
        } catch {

        }
    });
}

const setListenersForDragSvgForMibile = (svg) => {
    const draggable = (0,_views_animations_makeDraggable__WEBPACK_IMPORTED_MODULE_3__.makeDraggable)(svg);
    svg.addEventListener('touchstart', draggable.startDrag);
    svg.addEventListener('touchstart', e => {
        _models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.board.style.border = '1vh green solid';
    });
    svg.addEventListener('touchmove', draggable.drag);

    svg.addEventListener('touchend', draggable.endDrag);
    svg.addEventListener('touchend', e => {
        _models_elements__WEBPACK_IMPORTED_MODULE_0__.Elements.board.style.border = '';
    });
    svg.addEventListener('touchend', e => {
        try {
            let path = _models_path__WEBPACK_IMPORTED_MODULE_2__.Path.getPath();
            path.forEach(cell => {
                cell.getNode().style.border = '';
                (0,_forCells__WEBPACK_IMPORTED_MODULE_4__.setListenersForCell)(cell.getNode());
            });
        } catch (error) {

        }
        try {
            (0,_models_knightMovesHandler__WEBPACK_IMPORTED_MODULE_1__.start)();
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
    //ActiveText.setAnimation(View.knightText());

    setTimeout(() => {
        _figures__WEBPACK_IMPORTED_MODULE_4__.Knight.getSvg().style.pointerEvents = 'all';
    }, 1000);
}

const pointDemo = () => {
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().setPosition();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().view();
    _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().move();
    //ActiveText.setAnimation(View.pointText());
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
        //ActiveText.setAnimation(Hide.knightText());
    }
    if (svgName === 'point') {
        _figures__WEBPACK_IMPORTED_MODULE_4__.Point.getArrow().hide();
        //ActiveText.setAnimation(Hide.pointText());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQSxlQUFlLHlEQUFnQix1QkFBdUIsc0RBQVE7QUFDOUQ7O0FBRUE7QUFDQSxlQUFlLHlEQUFnQix1QkFBdUIsc0RBQVE7QUFDOUQ7O0FBRUE7QUFDQSxlQUFlLHlEQUFnQix1QkFBdUIsc0RBQVE7QUFDOUQ7O0FBRUEsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEZNO0FBQ1A7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ04yRTtBQUN0Qzs7QUFFOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLHlCQUF5QixrREFBVztBQUNwQyxZQUFZLG9GQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qk87QUFDUCwrQkFBK0IsT0FBTztBQUN0Qzs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzPzIyYWIiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckNlbGxzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yRHJhZ0VsZW1lbnRzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGVybkRlbW8uanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JUcmF2YWlscy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2N1cnJlbnRBbmltYXRpb25zLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9maWd1cmVzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvZmlndXJlc1Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL2tuaWdodE1vdmVzR3JhcGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL21vZGVscy9sZXJuUHJlc2V0LmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy9tb2RlbHMvbm9kZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvbW9kZWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hcnJvd3MuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvbWFrZURyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9wcmVzZXRzLmpzIiwid2VicGFjazovL2tuaWdodHN0cmF2YWlscy8uL3NyYy92aWV3cy9ub2Rlcy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJhdmFpbHMvLi9zcmMvdmlld3Mvbm9kZXMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzLy4vc3JjL3ZpZXdzL25vZGVzL2NlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiAydmg7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAydmg7XG4gICAgcGFkZGluZzogNXZoO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBnYXA6IDF2aDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgICB3aWR0aDogbWluKDgwdmgsIDcwdncpO1xuICAgIGhlaWdodDogbWluKDgwdmgsIDcwdncpO1xuICAgIGJvcmRlcjogMXZoIHJnYig4MiwgODIsIDgyKSBzb2xpZDtcbn1cblxuLmNlbGwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGFuZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAydmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIHdpZHRoOiBtaW4oOTB2aCwgNTB2dyk7XG59XG5cbi5zdmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5rbmlnaHQsXG4ucG9pbnQge1xuICAgIHdpZHRoOiBtaW4oOHZoLCA0dncpO1xuICAgIGhlaWdodDogbWluKDh2aCwgNHZ3KTtcbn1cblxuLmFycm93LXRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IG1pbig2dmgsIDN2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNnZoLCAzdncpO1xuICAgIGZpbGw6IHJnYigyNywgMTc3LCAyNDcpO1xufVxuXG5wYXRoIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmtuaWdodC13cmFwcGVyLFxuLnBvaW50LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XG4gICAgcGFkZGluZzogMXZoO1xufVxuXG4uZHJhZy1hbmQtZHJvcCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGNvbG9yOiByZ2IoMjcsIDE3NywgMjQ3KTtcbiAgICBmb250LXNpemU6IDEuNXZoO1xufVxuXG4ucG9wdXAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbiAgICB6LWluZGV4OiA1MDA7XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJ2aDtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJ2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUEsa0RBQWtEOztBQUVsRCwyQ0FBMkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMnZoO1xcbiAgICBwYWRkaW5nOiA1dmg7XFxufVxcblxcbi5ib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxdmg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuICAgIHdpZHRoOiBtaW4oODB2aCwgNzB2dyk7XFxuICAgIGhlaWdodDogbWluKDgwdmgsIDcwdncpO1xcbiAgICBib3JkZXI6IDF2aCByZ2IoODIsIDgyLCA4Mikgc29saWQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wYW5lbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHdpZHRoOiBtaW4oOTB2aCwgNTB2dyk7XFxufVxcblxcbi5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ua25pZ2h0LFxcbi5wb2ludCB7XFxuICAgIHdpZHRoOiBtaW4oOHZoLCA0dncpO1xcbiAgICBoZWlnaHQ6IG1pbig4dmgsIDR2dyk7XFxufVxcblxcbi5hcnJvdy10ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IG1pbig2dmgsIDN2dyk7XFxuICAgIGhlaWdodDogbWluKDZ2aCwgM3Z3KTtcXG4gICAgZmlsbDogcmdiKDI3LCAxNzcsIDI0Nyk7XFxufVxcblxcbnBhdGgge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmtuaWdodC13cmFwcGVyLFxcbi5wb2ludC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtYXgtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gICAgcGFkZGluZzogMXZoO1xcbn1cXG5cXG4uZHJhZy1hbmQtZHJvcCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgY29sb3I6IHJnYigyNywgMTc3LCAyNDcpO1xcbiAgICBmb250LXNpemU6IDEuNXZoO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XFxuICAgIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJ2aDtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge31cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlc2V0Qm9yZGVyLCBzZXRCb3JkZXIgfSBmcm9tIFwiLi4vLi4vdmlld3Mvbm9kZXMvY2VsbFwiXG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JDZWxsID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBtb3VzZW92ZXIgPSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICBzZXRCb3JkZXIoY2VsbCwgJ3JlZCcpO1xuICAgIH0pXG5cbiAgICBjb25zdCBtb3VzZWxlYXZlID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG4gICAgICAgIHJlc2V0Qm9yZGVyKGNlbGwpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscyA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgbW91c2VvdmVyID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgc2V0Qm9yZGVyKGNlbGwsICdncmVlbicpO1xuICAgIH0pXG5cbiAgICBjb25zdCBtb3VzZWxlYXZlID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAnZ3JlZW4nKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJGb3JQYXRoQ2VsbHMgPSAoY2VsbCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlb3ZlciA9IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAnYmx1ZScpO1xuICAgIH0pXG5cbiAgICBjb25zdCBtb3VzZWxlYXZlID0gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG4gICAgICAgIHNldEJvcmRlcihjZWxsLCAnYmx1ZScpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdGFydCB9IGZyb20gXCIuLi8uLi9tb2RlbHMva25pZ2h0TW92ZXNIYW5kbGVyXCI7XG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wYXRoXCI7XG5pbXBvcnQgeyBtYWtlRHJhZ2dhYmxlIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvbWFrZURyYWdnYWJsZVwiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuL2ZvckNlbGxzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IG1ha2VEcmFnZ2FibGUoc3ZnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ2dhYmxlLnN0YXJ0RHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWdnYWJsZS5kcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdnYWJsZS5lbmREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBhdGggPSBQYXRoLmdldFBhdGgoKTtcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLmdldE5vZGUoKS5zdHlsZS5ib3JkZXIgPSAnJztcbiAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JDZWxsKGNlbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgIH0gY2F0Y2gge1xuXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUgPSAoc3ZnKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gbWFrZURyYWdnYWJsZShzdmcpO1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZHJhZ2dhYmxlLnN0YXJ0RHJhZyk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHtcbiAgICAgICAgRWxlbWVudHMuYm9hcmQuc3R5bGUuYm9yZGVyID0gJzF2aCBncmVlbiBzb2xpZCc7XG4gICAgfSk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdnYWJsZS5kcmFnKTtcblxuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGRyYWdnYWJsZS5lbmREcmFnKTtcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcbiAgICAgICAgRWxlbWVudHMuYm9hcmQuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgfSk7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IFBhdGguZ2V0UGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcnO1xuICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwoY2VsbC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgfSBjYXRjaCB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IGNoYW5nZUJvYXJkUHJpb3JpdHksIGN1cnJlbnREZW1vLCBkZWZhdWx0QXJyb3csIGRlbW9TdGVwcywgZW5kRHJhZ0RlbW8gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xlcm5QcmVzZXRcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxpc3RlbmVyc0ZvckRlbW8gPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlZmF1bHRBcnJvdyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JEZW1vID0gKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbW9TdGVwcygpLnN0ZXAxLCB7IG9uY2U6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVmYXVsdEFycm93KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmFnRGVtbyk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZERyYWdEZW1vKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckRlbW9Gb3JNaWJpbGUgPSAoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVtb1N0ZXBzKCkuc3RlcDEsIHsgb25jZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWZhdWx0QXJyb3cpO1xuICAgIEtuaWdodC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hhbmdlQm9hcmRQcmlvcml0eSk7XG4gICAgS25pZ2h0LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xuICAgIFBvaW50LmdldFN2ZygpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBQb2ludC5nZXRTdmcoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZERyYWdEZW1vKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxpc3RlbmVyc0ZvckRlbW9Gb3JNb2JpbGUgPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlZmF1bHRBcnJvdyk7XG4gICAgS25pZ2h0LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGFuZ2VCb2FyZFByaW9yaXR5KTtcbiAgICBLbmlnaHQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmREcmFnRGVtbyk7XG4gICAgUG9pbnQuZ2V0U3ZnKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoYW5nZUJvYXJkUHJpb3JpdHkpO1xuICAgIFBvaW50LmdldFN2ZygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kRHJhZ0RlbW8pO1xufSIsImltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclRyYXZhaWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2YWlscycpO1xuXG59IiwiaW1wb3J0ICcuL3ZpZXdzL2Nzcy9tYWluLmNzcydcbmltcG9ydCB7IEFjdGl2ZUJvYXJkLCBCb2FyZCB9IGZyb20gXCIuL21vZGVscy9ib2FyZFwiO1xuaW1wb3J0IHsga25pZ2h0TW92ZXNIYW5kbGVyIH0gZnJvbSBcIi4vbW9kZWxzL2tuaWdodE1vdmVzSGFuZGxlclwiO1xuaW1wb3J0IHsgS25pZ2h0TW92ZXNHcmFwaCB9IGZyb20gXCIuL21vZGVscy9rbmlnaHRNb3Zlc0dyYXBoXCI7XG5pbXBvcnQgeyBmaWxsQm9hcmQgfSBmcm9tICcuL3ZpZXdzL25vZGVzL2JvYXJkJztcbmltcG9ydCB7IG1ha2VEcmFnZ2FibGUgfSBmcm9tICcuL3ZpZXdzL2FuaW1hdGlvbnMvbWFrZURyYWdnYWJsZSc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yRHJhZ0VsZW1lbnRzJztcbmltcG9ydCB7IEZpZ3VyZXNQb3NpdGlvbnMgfSBmcm9tICcuL21vZGVscy9maWd1cmVzUG9zaXRpb25zJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvclRyYXZhaWxzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yVHJhdmFpbHMnO1xuaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gJy4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zJztcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi92aWV3cy9hbmltYXRpb25zL2Fycm93cyc7XG5pbXBvcnQgeyBLbmlnaHQgfSBmcm9tICcuL21vZGVscy9maWd1cmVzJztcbmltcG9ydCB7IGN1cnJlbnREZW1vLCBzdGFydExlcm4gfSBmcm9tICcuL21vZGVscy9sZXJuUHJlc2V0JztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckRlbW8gfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMZXJuRGVtbyc7XG5cbktuaWdodE1vdmVzR3JhcGgoKS5idWlsZEdyYXBoKEFjdGl2ZUJvYXJkLmdldEJvYXJkKCkpO1xuXG5maWxsQm9hcmQoQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbnNldExpc3RlbmVyc0ZvclRyYXZhaWxzKCk7XG5cbmxldCBkZW1vID0gc3RhcnRMZXJuKCk7XG5jdXJyZW50RGVtby5zZXRkZW1vKGRlbW8pOyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmV4cG9ydCBjb25zdCBCb2FyZCA9ICgpID0+IHtcbiAgbGV0IHdpZHRoID0gODtcbiAgbGV0IGhlaWdodCA9IDg7XG5cbiAgbGV0IGNlbGxzID0gW107XG5cbiAgY29uc3QgY3JlYXRlQ2VsbHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgICBjb25zdCBub2RlID0gTm9kZShpLCBqKTtcbiAgICAgICAgbGluZS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgY2VsbHMucHVzaChsaW5lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2VsbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNlbGxzO1xuICB9O1xuXG4gIGNvbnN0IHNldFNpemUgPSAobldpZHRoLCBuSGVpZ2h0KSA9PiB7XG4gICAgd2lkdGggPSBuV2lkdGg7XG4gICAgaGVpZ2h0ID0gbkhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZUNlbGxzLCBnZXRDZWxscywgc2V0U2l6ZSwgZ2V0U2l6ZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFjdGl2ZUJvYXJkID0gKCgpID0+IHtcbiAgbGV0IGFjdGl2ZUJvYXJkID0gQm9hcmQoKTtcbiAgYWN0aXZlQm9hcmQuY3JlYXRlQ2VsbHMoKTtcbiAgY29uc3Qgc2V0Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBhY3RpdmVCb2FyZCA9IGJvYXJkO1xuICB9XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBhY3RpdmVCb2FyZDtcbiAgfVxuXG4gIHJldHVybiB7IHNldEJvYXJkLCBnZXRCb2FyZCB9O1xufSkoKVxuIiwiaW1wb3J0IHsgU21vb3RoQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuY29uc3QgQW5pbWF0aW5nT2JqZWN0ID0gKCkgPT4ge1xuICAgIGxldCBhbmltYXRpb24gPSBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5ib2FyZCwgMSwgMSwgMSwgJ2ZvcndhcmRzJyk7XG5cbiAgICBjb25zdCBzZXRBbmltYXRpb24gPSAobmV3QW5pbWF0aW9uKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgICBhbmltYXRpb24gPSBuZXdBbmltYXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldEFuaW1hdGlvbiwgZ2V0QW5pbWF0aW9uIH07XG59XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVBcnJvdyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQW5pbWF0aW5nT2JqZWN0KCk7XG4gICAgcmV0dXJuIHByb3RvdHlwZTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBBY3RpdmVUZXh0ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBBbmltYXRpbmdPYmplY3QoKTtcbiAgICByZXR1cm4gcHJvdG90eXBlO1xufSkoKTtcbiIsImltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmV4cG9ydCBjb25zdCBFbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKTtcbiAgICBjb25zdCBrbmlnaHRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJyk7XG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50LXdyYXBwZXInKTtcbiAgICBjb25zdCBrbmlnaHRUZXh0ID0ga25pZ2h0V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcCcpO1xuICAgIGNvbnN0IHBvaW50VGV4dCA9IHBvaW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuZHJhZy1hbmQtZHJvcCcpO1xuICAgIGNvbnNvbGUubG9nKHBvaW50VGV4dClcbiAgICByZXR1cm4geyBwb3B1cCwgYm9hcmQsIHRleHRDb250YWluZXIsIGtuaWdodFRleHQsIGtuaWdodFdyYXBwZXIsIHBvaW50V3JhcHBlciwga25pZ2h0VGV4dCwgcG9pbnRUZXh0IH1cbn0pKCk7IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Zywgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Z0Zvck1pYmlsZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yRHJhZ0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBTbW9vdGhBbmltYXRpb25zIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0TW92ZSwgc2V0WFkgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hcnJvd3NcIjtcbmltcG9ydCB7IGdldEFycm93Tm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9hcnJvd1wiO1xuaW1wb3J0IHsgQWN0aXZlQXJyb3cgfSBmcm9tIFwiLi9jdXJyZW50QW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgRmlndXJlID0gKG5ld1N2ZykgPT4ge1xuICAgIGNvbnN0IHN2ZyA9IG5ld1N2ZztcbiAgICBsZXQgcGFyZW50O1xuXG4gICAgY29uc3QgZ2V0UmVjdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0UmVjdCwgZ2V0U3ZnLCBzZXRQYXJlbnQsIGdldFBhcmVudCB9XG59XG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IChwYXJlbnQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBGaWd1cmUoZ2V0QXJyb3dOb2RlKG5hbWUpKTtcbiAgICBjb25zdCBhcnJvdyA9IHByb3RvdHlwZS5nZXRTdmcoKTtcbiAgICBsZXQgaW50ZXJ2YWw7XG5cbiAgICBjb25zdCB2aWV3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9LXdyYXBwZXJgKTtcbiAgICAgICAgcGFuZWwuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgQWN0aXZlQXJyb3cuc2V0QW5pbWF0aW9uKFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KGFycm93LCAwLCAxLCA1MDAsICdmb3J3YXJkcycpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlY3RQYXJlbnQgPSBwYXJlbnQuZ2V0UmVjdCgpO1xuICAgICAgICBzZXRYWShhcnJvdywgcmVjdFBhcmVudC53aWR0aCwgLXJlY3RQYXJlbnQuaGVpZ2h0KVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlY3RQYXJlbnQgPSBwYXJlbnQuZ2V0UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHJlY3RBcnJvdyA9IHByb3RvdHlwZS5nZXRSZWN0KCk7XG4gICAgICAgICAgICBnZXRNb3ZlKGFycm93LCByZWN0UGFyZW50LCByZWN0QXJyb3cpO1xuICAgICAgICB9LCA4MDApO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgICAgIEFjdGl2ZUFycm93LnNldEFuaW1hdGlvbihTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShhcnJvdywgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IHNldFBvc2l0aW9uLCB2aWV3LCBoaWRlLCBtb3ZlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgS25pZ2h0ID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBGaWd1cmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodCcpKTtcbiAgICBjb25zdCBhcnJvdyA9IEFycm93KHByb3RvdHlwZSwgJ2tuaWdodCcpO1xuXG4gICAgcHJvdG90eXBlLnNldFBhcmVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25pZ2h0LXdyYXBwZXInKSk7XG5cbiAgICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEcmFnU3ZnKHByb3RvdHlwZS5nZXRTdmcoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmdGb3JNaWJpbGUocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICB9KSgpXG5cbiAgICBjb25zdCBnZXRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycm93O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRBcnJvdyB9KTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBQb2ludCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRmlndXJlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludCcpKTtcbiAgICBjb25zdCBhcnJvdyA9IEFycm93KHByb3RvdHlwZSwgJ3BvaW50Jyk7XG4gICAgcHJvdG90eXBlLnNldFBhcmVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnQtd3JhcHBlcicpKTtcblxuICAgIGNvbnN0IHNldExpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRyYWdTdmcocHJvdG90eXBlLmdldFN2ZygpKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRHJhZ1N2Z0Zvck1pYmlsZShwcm90b3R5cGUuZ2V0U3ZnKCkpO1xuICAgIH0pKClcblxuICAgIGNvbnN0IGdldEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldEFycm93IH0pO1xufSkoKTsiLCJpbXBvcnQgeyBBY3RpdmVCb2FyZCwgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY29uc3QgRmlndXJlc1Bvc2l0aW9ucyA9ICgoKSA9PiB7XG4gICAgbGV0IGtuaWdodCA9IFswLCAwXTtcbiAgICBsZXQgcG9pbnQgPSBbMCwgMF07XG5cbiAgICByZXR1cm4geyBrbmlnaHQsIHBvaW50IH07XG59KSgpIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY29uc3QgS25pZ2h0TW92ZXNHcmFwaCA9ICgpID0+IHtcbiAgbGV0IG51bGxOb2RlO1xuXG4gIGNvbnN0IGdldE51bGxOb2RlID0gKCkgPT4ge1xuICAgIHJldHVybiBudWxsTm9kZTtcbiAgfTtcblxuICBjb25zdCBidWlsZEdyYXBoID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBib2FyZC5nZXRDZWxscygpO1xuICAgIGNvbnN0IHdpZHRoID0gYm9hcmQuZ2V0U2l6ZSgpWzBdO1xuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldFNpemUoKVsxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBjZWxsc1tqXVtpXTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogLSAyLCBpIC0gMSksIDApO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDEsIGkgLSAyKSwgMSk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMSwgaSAtIDIpLCAyKTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogKyAyLCBpIC0gMSksIDMpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiArIDIsIGkgKyAxKSwgNCk7XG4gICAgICAgIGNlbGwuc2V0TW92ZShnZXROb2RlKGNlbGxzLCBqICsgMSwgaSArIDIpLCA1KTtcbiAgICAgICAgY2VsbC5zZXRNb3ZlKGdldE5vZGUoY2VsbHMsIGogLSAxLCBpICsgMiksIDYpO1xuICAgICAgICBjZWxsLnNldE1vdmUoZ2V0Tm9kZShjZWxscywgaiAtIDIsIGkgKyAxKSwgNyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbnVsbE5vZGUgPSBjZWxsc1swXVswXTtcbiAgfTtcblxuICBjb25zdCBnZXROb2RlID0gKGJvYXJkLCB4LCB5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBib2FyZFt4XVt5XTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXROdWxsTm9kZSwgYnVpbGRHcmFwaCB9O1xufTtcbiIsImltcG9ydCB7IHJlbW92ZUxpc3RlbmVyc0NlbGxzLCBzZXRMaXN0ZW5lckZvclBhdGhDZWxscywgc2V0TGlzdGVuZXJzRm9yQWN0aXZlQ2VsbHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvckNlbGxzXCI7XG5pbXBvcnQgeyBGaWd1cmVzUG9zaXRpb25zIH0gZnJvbSBcIi4vZmlndXJlc1Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUGF0aCB9IGZyb20gXCIuL3BhdGhcIjtcblxuZXhwb3J0IGNvbnN0IGtuaWdodE1vdmVzSGFuZGxlciA9ICgpID0+IHtcbiAgbGV0IGZpcnN0SGFsZlBhdGggPSBbXTtcbiAgbGV0IHNlY29uZEhhbGZQYXRoID0gW107XG4gIGxldCBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMgPSBbXTtcbiAgbGV0IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMgPSBbXTtcblxuICBjb25zdCBnZXRQYXRoID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgICAgcmV0dXJuIFtzdGFydF07XG4gICAgfVxuXG4gICAgbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLnB1c2goW3N0YXJ0XSk7XG4gICAgbGV2ZWxFbmRQb2ludENoaWxkcmVucy5wdXNoKFtlbmRdKTtcblxuICAgIGNvbnN0IHBhdGggPSBib25kaW5nUGF0aChzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBjb25zdCBib25kaW5nUGF0aCA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgbGV0IHBhdGg7XG4gICAgbGV0IGludGVyc2VjdFBvaW50ID0gZmluZEludGVyc2VjdChbc3RhcnRdLCBbZW5kXSk7XG5cbiAgICBidWlsZFBhdGgoaW50ZXJzZWN0UG9pbnQsIGxldmVsU3RhcnRQb2ludENoaWxkcmVucywgZmlyc3RIYWxmUGF0aCk7XG4gICAgYnVpbGRQYXRoKGludGVyc2VjdFBvaW50LCBsZXZlbEVuZFBvaW50Q2hpbGRyZW5zLCBzZWNvbmRIYWxmUGF0aCk7XG5cbiAgICBmaXJzdEhhbGZQYXRoID0gZ2V0UHJvY2Vzc2VkQXJyKGZpcnN0SGFsZlBhdGgpO1xuICAgIHNlY29uZEhhbGZQYXRoID0gZ2V0UHJvY2Vzc2VkQXJyKHNlY29uZEhhbGZQYXRoKTtcblxuICAgIHBhdGggPSBmaXJzdEhhbGZQYXRoLmNvbmNhdChbaW50ZXJzZWN0UG9pbnRdKS5jb25jYXQoc2Vjb25kSGFsZlBhdGgpO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRJbnRlcnNlY3QgPSAoc3RhcnQsIGVuZCwgZmxhZyA9ICdkZWYnKSA9PiB7XG4gICAgbGV0IGludGVyc2VjdDtcblxuICAgIGlmIChmbGFnICE9PSAnZGVmJykge1xuICAgICAgbGV0IHBvaW50cyA9IGZsYWcgPT09ICdzdGFydCcgPyBzdGFydCA6IGVuZDtcbiAgICAgIHNldENoaWxkcmVucyhwb2ludHMsIGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGFnID0gJ2VuZCc7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRMYXN0ID0gbGV2ZWxTdGFydFBvaW50Q2hpbGRyZW5zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgZW5kTGFzdCA9IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBzdGFydEx2bFBvaW50cyA9IGxldmVsU3RhcnRQb2ludENoaWxkcmVuc1tzdGFydExhc3RdO1xuICAgIGNvbnN0IGVuZEx2bFBvaW50cyA9IGxldmVsRW5kUG9pbnRDaGlsZHJlbnNbZW5kTGFzdF07XG5cbiAgICBjb25zdCBpbnRlcnNlY3RQb2ludHMgPSBjaGVja0NoaWxkcmVucyhcbiAgICAgIHN0YXJ0THZsUG9pbnRzLFxuICAgICAgZW5kTHZsUG9pbnRzLFxuICAgICk7XG5cbiAgICBpZiAoaW50ZXJzZWN0UG9pbnRzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBmbGFnID09PSAnc3RhcnQnID8gZmxhZyA9ICdlbmQnIDogZmxhZyA9ICdzdGFydCc7XG4gICAgICBpbnRlcnNlY3QgPSBmaW5kSW50ZXJzZWN0KHN0YXJ0THZsUG9pbnRzLCBlbmRMdmxQb2ludHMsIGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RQb2ludHNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVyc2VjdDtcbiAgfVxuXG4gIGNvbnN0IHNldENoaWxkcmVucyA9IChwb2ludENoaWxkcmVucywgZmxhZykgPT4ge1xuICAgIGxldCBjaGlsZHJlbnMgPSBbXTtcbiAgICBwb2ludENoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hpbGRyZW5zID0gZ2V0UHJvY2Vzc2VkQXJyKGNoaWxkcmVucy5jb25jYXQoY2hpbGQuZ2V0TW92ZXMoKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZsYWcgPT09IFwic3RhcnRcIlxuICAgICAgPyBsZXZlbFN0YXJ0UG9pbnRDaGlsZHJlbnMucHVzaChjaGlsZHJlbnMpXG4gICAgICA6IGxldmVsRW5kUG9pbnRDaGlsZHJlbnMucHVzaChjaGlsZHJlbnMpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkUGF0aCA9IChpbnRlcnNlY3RQb2ludCwgY2hpbGRyZW5zLCBjb250YWluZXIpID0+IHtcbiAgICBsZXQgbW92ZXMgPSBnZXRQcm9jZXNzZWRBcnIoaW50ZXJzZWN0UG9pbnQuZ2V0TW92ZXMoKSk7XG4gICAgbGV0IGx2bCA9IGNoaWxkcmVucy5wb3AoKTtcblxuICAgIGlmIChsdmwuaW5kZXhPZihpbnRlcnNlY3RQb2ludCkgPj0gMCkge1xuICAgICAgbHZsID0gY2hpbGRyZW5zLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpbnRlcnNlY3RQb2ludHMgPSBjaGVja0NoaWxkcmVucyhcbiAgICAgICAgbW92ZXMsXG4gICAgICAgIGx2bCxcbiAgICAgICk7XG4gICAgICBjb250YWluZXIucHVzaChpbnRlcnNlY3RQb2ludHNbMF0pO1xuICAgICAgYnVpbGRQYXRoKGludGVyc2VjdFBvaW50c1swXSwgY2hpbGRyZW5zLCBjb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrQ2hpbGRyZW5zID0gKHN0YXJ0Q2hpbGRyZW5zLCBlbmRDaGlsZHJlbnMpID0+IHtcbiAgICBjb25zdCBjb21tb24gPSBzdGFydENoaWxkcmVucy5maWx0ZXIoXG4gICAgICAoY2hpbGQpID0+IGVuZENoaWxkcmVucy5pbmRleE9mKGNoaWxkKSAhPT0gLTEsXG4gICAgKTtcbiAgICByZXR1cm4gY29tbW9uO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFBhdGggfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgbGV0IHBhdGggPSBrbmlnaHRNb3Zlc0hhbmRsZXIoKS5nZXRQYXRoKEZpZ3VyZXNQb3NpdGlvbnMua25pZ2h0LCBGaWd1cmVzUG9zaXRpb25zLnBvaW50KTtcbiAgUGF0aC5zZXRQYXRoKHBhdGgpO1xuICBwYXRoLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmdldE5vZGUoKS5zdHlsZS5ib3JkZXIgPSAnMXZoIGJsdWUgc29saWQnO1xuICAgIHNldExpc3RlbmVyRm9yUGF0aENlbGxzKGVsZW1lbnQuZ2V0Tm9kZSgpKTtcbiAgfSk7XG59XG5cbmNvbnN0IGdldFByb2Nlc3NlZEFyciA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzZXQgPSBuZXcgU2V0KGFycmF5LmZpbHRlcigobikgPT4gbikpO1xuICByZXR1cm4gWy4uLnNldF07XG59IiwiaW1wb3J0IHsgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtbywgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtb0Zvck1vYmlsZSwgc2V0TGlzdGVuZXJzRm9yRGVtbywgc2V0TGlzdGVuZXJzRm9yRGVtb0Zvck1pYmlsZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGVybkRlbW9cIjtcbmltcG9ydCB7IEhpZGUsIFZpZXcgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9wcmVzZXRzXCI7XG5pbXBvcnQgeyBBY3RpdmVUZXh0IH0gZnJvbSBcIi4vY3VycmVudEFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmxldCBrbmlnaHRUZXh0SGlkZSA9IEhpZGUua25pZ2h0VGV4dCgpO1xubGV0IGtuaWdodFRleHRWaWV3ID0gSGlkZS5rbmlnaHRUZXh0KCk7XG5sZXQgcG9pbnRUZXh0QW5pbWF0aW9uO1xuXG5leHBvcnQgY29uc3QgY3VycmVudERlbW8gPSAoKCkgPT4ge1xuICAgIGxldCBkZW1vO1xuXG4gICAgY29uc3QgZ2V0RGVtbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlbW87XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0ZGVtbyA9IChuRGVtbykgPT4ge1xuICAgICAgICBkZW1vID0gbkRlbW87XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0ZGVtbywgZ2V0RGVtbyB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TGVybiA9ICgpID0+IHtcbiAgICBkZW1vU3RlcHMoKS5zdGFydCgpO1xufVxuXG5leHBvcnQgY29uc3QgZGVtb1N0ZXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JEZW1vKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckRlbW9Gb3JNaWJpbGUoKTtcbiAgICAgICAgS25pZ2h0LmdldFN2ZygpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIFZpZXcucG9wdXAoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBWaWV3LnRleHRDb250YWluZXIoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RlcDEgPSAoKSA9PiB7XG4gICAgICAgIEVsZW1lbnRzLmtuaWdodFdyYXBwZXIuc3R5bGUuekluZGV4ID0gJzUwMSc7XG4gICAgICAgIEhpZGUudGV4dENvbnRhaW5lcigpO1xuICAgICAgICBWaWV3LmtuaWdodFdyYXBwZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBrbmlnaHREZW1vKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ZXAyID0gKCkgPT4ge1xuICAgICAgICBFbGVtZW50cy5wb2ludFdyYXBwZXIuc3R5bGUuekluZGV4ID0gJzUwMSc7XG4gICAgICAgIFZpZXcucG9pbnRXcmFwcGVyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcG9pbnREZW1vKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzRm9yRGVtbygpO1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnNGb3JEZW1vRm9yTW9iaWxlKCk7XG4gICAgICAgIEtuaWdodC5nZXRTdmcoKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgIEhpZGUucG9wdXAoKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydCwgc3RlcDEsIHN0ZXAyLCBlbmQgfVxufVxuXG5jb25zdCBrbmlnaHREZW1vID0gKCkgPT4ge1xuICAgIEtuaWdodC5nZXRBcnJvdygpLnNldFBvc2l0aW9uKCk7XG4gICAgS25pZ2h0LmdldEFycm93KCkudmlldygpO1xuICAgIEtuaWdodC5nZXRBcnJvdygpLm1vdmUoKTtcbiAgICAvL0FjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcua25pZ2h0VGV4dCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBLbmlnaHQuZ2V0U3ZnKCkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgIH0sIDEwMDApO1xufVxuXG5jb25zdCBwb2ludERlbW8gPSAoKSA9PiB7XG4gICAgUG9pbnQuZ2V0QXJyb3coKS5zZXRQb3NpdGlvbigpO1xuICAgIFBvaW50LmdldEFycm93KCkudmlldygpO1xuICAgIFBvaW50LmdldEFycm93KCkubW92ZSgpO1xuICAgIC8vQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oVmlldy5wb2ludFRleHQoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QXJyb3cgPSAoKSA9PiB7XG4gICAgS25pZ2h0LmdldEFycm93KCkuc2V0UG9zaXRpb24oKTtcbiAgICBQb2ludC5nZXRBcnJvdygpLnNldFBvc2l0aW9uKCk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VCb2FyZFByaW9yaXR5ID0gKGUpID0+IHtcbiAgICBjb25zdCBzdmdOYW1lID0gZS50YXJnZXQuY2xhc3NOYW1lLmJhc2VWYWw7XG4gICAgaWYgKHN2Z05hbWUgPT09ICdrbmlnaHQnKSB7XG4gICAgICAgIGFkZEJvYXJkUHJpb3JpdHkoS25pZ2h0KTtcbiAgICAgICAgS25pZ2h0LmdldEFycm93KCkuaGlkZSgpO1xuICAgICAgICAvL0FjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKEhpZGUua25pZ2h0VGV4dCgpKTtcbiAgICB9XG4gICAgaWYgKHN2Z05hbWUgPT09ICdwb2ludCcpIHtcbiAgICAgICAgUG9pbnQuZ2V0QXJyb3coKS5oaWRlKCk7XG4gICAgICAgIC8vQWN0aXZlVGV4dC5zZXRBbmltYXRpb24oSGlkZS5wb2ludFRleHQoKSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGFkZEJvYXJkUHJpb3JpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgSGlkZS50ZXh0Q29udGFpbmVyKCk7XG4gICAgVmlldy5ib2FyZCgpO1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICc1MDEnO1xufVxuXG5jb25zdCByZW1vdmVCb2FyZFByaW9yaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIEVsZW1lbnRzLmJvYXJkLnN0eWxlLnpJbmRleCA9ICcxMDAnO1xufVxuXG5leHBvcnQgY29uc3QgZW5kRHJhZ0RlbW8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN2Z05hbWUgPSBlLnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ2tuaWdodCcpIHtcbiAgICAgICAgaWYgKEtuaWdodC5nZXRQYXJlbnQoKS5jbGFzc05hbWUgPT09ICdrbmlnaHQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIEtuaWdodC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuc2V0QW5pbWF0aW9uKFZpZXcua25pZ2h0VGV4dCgpKTtcbiAgICAgICAgICAgIHJlbW92ZUJvYXJkUHJpb3JpdHkoS25pZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnIG5vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuc3RlcDIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3ZnTmFtZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBpZiAoUG9pbnQuZ2V0UGFyZW50KCkuY2xhc3NOYW1lICE9PSAncG9pbnQtd3JhcHBlcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludC13cmFwcGVyJykuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgZGVtb1N0ZXBzKCkuZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQb2ludC5nZXRBcnJvdygpLnZpZXcoKTtcbiAgICAgICAgICAgIEFjdGl2ZVRleHQuZ2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBBY3RpdmVUZXh0LnNldEFuaW1hdGlvbihWaWV3LnBvaW50VGV4dCgpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgTm9kZSA9IChjWCwgY1kpID0+IHtcbiAgbGV0IG5vZGU7XG4gIGNvbnN0IHggPSBjWDtcbiAgY29uc3QgeSA9IGNZO1xuXG4gIGxldCBtb3ZlcyA9IFs4XTtcblxuICBjb25zdCBzZXROb2RlID0gKG5Ob2RlKSA9PiB7XG4gICAgbm9kZSA9IG5Ob2RlO1xuICB9XG5cbiAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGNvbnN0IHNldE1vdmUgPSAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBtb3Zlc1tpbmRleF0gPSBub2RlO1xuICB9O1xuXG4gIGNvbnN0IGdldE1vdmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBtb3ZlcztcbiAgfTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9O1xuXG4gIHJldHVybiB7IHNldE5vZGUsIGdldE5vZGUsIHNldE1vdmUsIGdldE1vdmVzLCBnZXRDb29yZGluYXRlcyB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBQYXRoID0gKCgpID0+IHtcbiAgICBsZXQgcGF0aDtcblxuICAgIGNvbnN0IHNldFBhdGggPSAoblBhdG4pID0+IHtcbiAgICAgICAgcGF0aCA9IG5QYXRuO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhdGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldFBhdGgsIGdldFBhdGggfTtcbn0pKCkiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHh5ID0gKGUsIHgsIHksIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3h9YCB9LCB7IGxlZnQ6IGAke3l9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgeHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgU21vb3RoQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgU21vb3RoVmlzaWJpbGl0eSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZGUgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkucGxheVN0YXRlICE9PSAncGF1c2VkJykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkdXIpO1xuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2aWV3ID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmlldywgaGlkZSB9O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIHsgU21vb3RoVmlzaWJpbGl0eSB9O1xufSkoKTsiLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92ZSA9IChhcnJvdywgcmVjdFBhcmVudCwgcmVjdEFycm93KSA9PiB7XG4gICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdFBhcmVudC54fXB4YCwgYCR7cmVjdEFycm93Lnh9cHhgLCAyMDApO1xuICAgIEFuaW1hdGlvbnMudHJhbnNmb3JtLnkoYXJyb3csIGAke3JlY3RQYXJlbnQueX1weGAsIGAke3JlY3RBcnJvdy55fXB4YCwgMjAwKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgQW5pbWF0aW9ucy50cmFuc2Zvcm0ueChhcnJvdywgYCR7cmVjdEFycm93Lnh9cHhgLCBgJHtyZWN0UGFyZW50Lnh9cHhgLCAyMDApO1xuICAgICAgICBBbmltYXRpb25zLnRyYW5zZm9ybS55KGFycm93LCBgJHtyZWN0QXJyb3cueX1weGAsIGAke3JlY3RQYXJlbnQueX1weGAsIDIwMClcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0WFkgPSAobXlFbGVtZW50LCB4LCB5KSA9PiB7XG4gICAgY29uc3QgeGZvcm1zID0gbXlFbGVtZW50LnRyYW5zZm9ybS5iYXNlVmFsO1xuICAgIGNvbnN0IGZpcnN0WEZvcm0gPSB4Zm9ybXMuZ2V0SXRlbSgwKTtcbiAgICBmaXJzdFhGb3JtLnNldFRyYW5zbGF0ZSh4LCB5KTtcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscywgc2V0TGlzdGVuZXJzRm9yQ2VsbCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yQ2VsbHNcIjtcbmltcG9ydCB7IEFjdGl2ZUJvYXJkLCBCb2FyZCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYm9hcmRcIjtcbmltcG9ydCB7IEtuaWdodCwgUG9pbnQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IEZpZ3VyZXNQb3NpdGlvbnMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZpZ3VyZXNQb3NpdGlvbnNcIjtcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9rbmlnaHRNb3Zlc0hhbmRsZXJcIjtcbmltcG9ydCB7IFBhdGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnZ2FibGUoc3ZnKSB7XG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGZhbHNlO1xuICAgIGxldCBnYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdnYWcnKTtcbiAgICBsZXQgbGFzdCA9IGdhZztcbiAgICBsZXQgY2VsbEluZGV4ID0gMTtcbiAgICBsZXQgcGFyZW50O1xuICAgIGNvbnN0IGNlbGxzID0gQWN0aXZlQm9hcmQuZ2V0Qm9hcmQoKS5nZXRDZWxscygpO1xuXG4gICAgZnVuY3Rpb24gc3RhcnREcmFnKGUpIHtcbiAgICAgICAgcGFyZW50ID0gc3ZnLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHN2ZztcbiAgICAgICAgY29uc3QgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc3ZnWCA9IHJlY3QueCArIHBhcnNlSW50KHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3Qgc3ZnWSA9IHJlY3QueSArIHBhcnNlSW50KHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoc3ZnWCwgc3ZnWSk7XG4gICAgICAgIGlmIChlbGVtZW50c1swXS5nZXRBdHRyaWJ1dGVOYW1lcygpWzBdID09PSAnZCcpIHtcbiAgICAgICAgICAgIGNlbGxJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvclggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBjdXJzb3JZID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tjZWxsSW5kZXhdO1xuICAgICAgICAgICAgbGV0IHN2Z1ggPSByZWN0LnggKyBwYXJzZUludChyZWN0LndpZHRoIC8gMik7XG4gICAgICAgICAgICBsZXQgc3ZnWSA9IHJlY3QueSArIHBhcnNlSW50KHJlY3QuaGVpZ2h0IC8gMik7XG5cbiAgICAgICAgICAgIHNldFhZKHN2ZywgY3Vyc29yWCAtIHN2Z1gsIGN1cnNvclkgLSBzdmdZKTtcbiAgICAgICAgICAgIHN2Z1ggPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcbiAgICAgICAgICAgIHN2Z1kgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2VsbCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZW92ZXJFdmVudCA9IG5ldyBFdmVudCgnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG1vdXNlb3ZlckV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhc3QgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZWxlYXZlRXZlbnQgPSBuZXcgRXZlbnQoJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgICAgICAgICBsYXN0LmRpc3BhdGNoRXZlbnQobW91c2VsZWF2ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICBsYXN0ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICAgIHJlc2V0KCk7XG5cbiAgICAgICAgaWYgKGxhc3QgIT09IGdhZyAmJiBsYXN0ICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsYXN0LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhc3QuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICBzZXRQYXJlbnQoc3ZnLCBsYXN0KTtcbiAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnNGb3JBY3RpdmVDZWxscyhsYXN0KTtcbiAgICAgICAgICAgICAgICBsYXN0LnN0eWxlLmJvcmRlciA9ICcxdmggZ3JlZW4gc29saWQnO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zdHlsZS5ib3JkZXIgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTmFtZSA9PT0gJ2NlbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExpc3RlbmVyc0ZvckNlbGwocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgICAgIGNlbGxzLmZvckVhY2goY2VsbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuZ2V0Tm9kZSgpID09PSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIEZpZ3VyZXNQb3NpdGlvbnNbc3ZnLmNsYXNzTmFtZS5iYXNlVmFsXSA9IGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICBkZWZhdWx0WFkoc3ZnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGFydERyYWcsIGRyYWcsIGVuZERyYWcsIGxhc3QgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFhZID0gKG15RWxlbWVudCwgeCwgeSkgPT4ge1xuICAgIGNvbnN0IHhmb3JtcyA9IG15RWxlbWVudC50cmFuc2Zvcm0uYmFzZVZhbDtcbiAgICBjb25zdCBmaXJzdFhGb3JtID0geGZvcm1zLmdldEl0ZW0oMCk7XG4gICAgZmlyc3RYRm9ybS5zZXRUcmFuc2xhdGUoZmlyc3RYRm9ybS5tYXRyaXguZSArIHgsIGZpcnN0WEZvcm0ubWF0cml4LmYgKyB5KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRYWSA9IChteUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB4Zm9ybXMgPSBteUVsZW1lbnQudHJhbnNmb3JtLmJhc2VWYWw7XG4gICAgY29uc3QgZmlyc3RYRm9ybSA9IHhmb3Jtcy5nZXRJdGVtKDApO1xuICAgIGZpcnN0WEZvcm0uc2V0VHJhbnNsYXRlKDAsIDApO1xufVxuXG5jb25zdCBzZXRQYXJlbnQgPSAoc3ZnLCBwYXJlbnQpID0+IHtcbiAgICBpZiAoc3ZnLmNsYXNzTmFtZS5iYXNlVmFsID09PSAna25pZ2h0Jykge1xuICAgICAgICBLbmlnaHQuc2V0UGFyZW50KHBhcmVudClcbiAgICB9XG4gICAgaWYgKHN2Zy5jbGFzc05hbWUuYmFzZVZhbCA9PT0gJ3BvaW50Jykge1xuICAgICAgICBQb2ludC5zZXRQYXJlbnQocGFyZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBLbmlnaHQsIFBvaW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9maWd1cmVzXCI7XG5pbXBvcnQgeyBTbW9vdGhBbmltYXRpb25zIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgVmlldyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5wb3B1cCwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG4gICAgY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5ib2FyZCwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLnRleHRDb250YWluZXIsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0QXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhLbmlnaHQuZ2V0QXJyb3coKS5nZXRTdmcoKSwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoUG9pbnQuZ2V0QXJyb3coKS5nZXRTdmcoKSwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrbmlnaHRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMua25pZ2h0V3JhcHBlciwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkudmlldyhFbGVtZW50cy5wb2ludFdyYXBwZXIsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0VGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS52aWV3KEVsZW1lbnRzLmtuaWdodFRleHQsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LnZpZXcoRWxlbWVudHMucG9pbnRUZXh0LCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBvcHVwLCBib2FyZCwgdGV4dENvbnRhaW5lciwga25pZ2h0QXJyb3csIHBvaW50QXJyb3csIGtuaWdodFdyYXBwZXIsIHBvaW50V3JhcHBlciwga25pZ2h0VGV4dCwgcG9pbnRUZXh0IH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgSGlkZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5wb3B1cCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBib2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLmJvYXJkLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy50ZXh0Q29udGFpbmVyLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodEFycm93ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoS25pZ2h0LmdldEFycm93KCkuZ2V0U3ZnKCksIDEsIDAsIDEwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKFBvaW50LmdldEFycm93KCkuZ2V0U3ZnKCksIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga25pZ2h0V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLmtuaWdodFdyYXBwZXIsIDEsIDAsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gU21vb3RoQW5pbWF0aW9ucy5TbW9vdGhWaXNpYmlsaXR5LmhpZGUoRWxlbWVudHMucG9pbnRXcmFwcGVyLCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtuaWdodFRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBTbW9vdGhBbmltYXRpb25zLlNtb290aFZpc2liaWxpdHkuaGlkZShFbGVtZW50cy5rbmlnaHRUZXh0LCAxLCAwLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50VGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFNtb290aEFuaW1hdGlvbnMuU21vb3RoVmlzaWJpbGl0eS5oaWRlKEVsZW1lbnRzLnBvaW50VGV4dCwgMSwgMCwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3B1cCwgYm9hcmQsIHRleHRDb250YWluZXIsIGtuaWdodEFycm93LCBwb2ludEFycm93LCBrbmlnaHRXcmFwcGVyLCBwb2ludFdyYXBwZXIsIGtuaWdodFRleHQsIHBvaW50VGV4dCB9O1xufSkoKTsiLCJleHBvcnQgY29uc3QgZ2V0QXJyb3dOb2RlID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy10ZW1wbGF0ZScpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKGBhcnJvd2ApO1xuICAgIGFycm93LmNsYXNzTGlzdC5hZGQoYGFycm93LSR7bmFtZX1gKTtcbiAgICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdy10ZW1wbGF0ZScpO1xuICAgIHJldHVybiBhcnJvdztcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JDZWxsIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JDZWxsc1wiO1xuaW1wb3J0IHsgZ2V0Q2VsbE5vZGUgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBmaWxsQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGJvYXJkLmdldENlbGxzKCk7XG4gICAgY29uc3Qgd2lkdGggPSBib2FyZC5nZXRTaXplKClbMF07XG4gICAgY29uc3QgaGVpZ2h0ID0gYm9hcmQuZ2V0U2l6ZSgpWzFdO1xuICAgIGNvbnN0IGJvYXJkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGxldCBpc0JsYWNrID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgICAgaXNCbGFjayA9ICFpc0JsYWNrXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBjZWxsc1tqXVtpXTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBnZXRDZWxsTm9kZSgpO1xuICAgICAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbChub2RlKTtcbiAgICAgICAgICAgIGNlbGwuc2V0Tm9kZShub2RlKTtcbiAgICAgICAgICAgIGJvYXJkTm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGlmIChpc0JsYWNrKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QyOGI0OCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmNlOWYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNCbGFjayA9ICFpc0JsYWNrO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBzZXRCb3JkZXIgPSAoY2VsbCwgY29sb3IpID0+IHtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IGAxdmggJHtjb2xvcn0gc29saWRgO1xufVxuXG5leHBvcnQgY29uc3QgcmVzZXRCb3JkZXIgPSAoY2VsbCkgPT4ge1xuICAgIGNlbGwuc3R5bGUuYm9yZGVyID0gYGA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgcmV0dXJuIGNlbGw7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9