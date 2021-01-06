/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\r\n\r\n// import NumberCreater from './utils/number'\r\n// import ranColor from './utils/ranColor'\r\n// import random from './utils/random'\r\n// let n = new NumberCreater()\r\n// let container = document.querySelector('.container')\r\n// let center = document.getElementsByClassName('divcenter')[0]\r\n// n.onNumberCreated = function(n,isPrime){\r\n//     let span = document.createElement('span');\r\n//     span.innerText = n;\r\n  \r\n//     if(isPrime){\r\n//         let color = ranColor()\r\n//         span.style.color = color\r\n//         createCenterNumber(n,color)\r\n//     }\r\n//     container.appendChild(span)\r\n//     center.innerText = n\r\n// }\r\n// n.start()\r\n// setTimeout(()=>{\r\n// n.stop()\r\n// },5000)\r\n\r\n// function createCenterNumber(n,color){\r\n//     let div = document.createElement('div')\r\n//     div.innerText = n;\r\n//     div.className = 'center'\r\n//     div.style.color = color\r\n//     document.body.appendChild(div)\r\n//     getComputedStyle(div).left;\r\n//     div.style.transform = `translateX(${random(200,-200)}px) translateY(${random(200,-200)}px)`\r\n//     div.style.opacity = 0;\r\n// }\n\n//# sourceURL=webpack://4number/./src/index.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/number */ \"./src/utils/number.js\");\n/* harmony import */ var _onNumberCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onNumberCreate */ \"./src/page/onNumberCreate.js\");\n\r\n\r\nlet n = new _utils_number__WEBPACK_IMPORTED_MODULE_0__.default()\r\nn.onNumberCreated = _onNumberCreate__WEBPACK_IMPORTED_MODULE_1__.default\r\nlet isStart = false\r\ndocument.body.addEventListener('click',function(){\r\n    if(isStart){\r\n        isStart = false\r\n        n.stop()\r\n    }else{\r\n        isStart = true\r\n        n.start()\r\n        console.log(1)\r\n    }\r\n})\n\n//# sourceURL=webpack://4number/./src/page/event.js?");

/***/ }),

/***/ "./src/page/onNumberCreate.js":
/*!************************************!*\
  !*** ./src/page/onNumberCreate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ onNumberCreated\n/* harmony export */ });\n/* harmony import */ var _utils_ranColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ranColor */ \"./src/utils/ranColor.js\");\n/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/random */ \"./src/utils/random.js\");\n\r\n\r\n\r\nlet container = document.querySelector('.container')\r\nlet center = document.getElementsByClassName('divcenter')[0]\r\nfunction onNumberCreated(n,isPrime){\r\n    let span = document.createElement('span');\r\n    span.innerText = n;\r\n  \r\n    if(isPrime){\r\n        let color = (0,_utils_ranColor__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n        span.style.color = color\r\n        createCenterNumber(n,color)\r\n    }\r\n    container.appendChild(span)\r\n    center.innerText = n\r\n}\r\n\r\nfunction createCenterNumber(n,color){\r\n    let div = document.createElement('div')\r\n    div.innerText = n;\r\n    div.className = 'center'\r\n    div.style.color = color\r\n    document.body.appendChild(div)\r\n    getComputedStyle(div).left;\r\n    div.style.transform = `translateX(${(0,_utils_random__WEBPACK_IMPORTED_MODULE_1__.default)(200,-200)}px) translateY(${(0,_utils_random__WEBPACK_IMPORTED_MODULE_1__.default)(200,-200)}px)`\r\n    div.style.opacity = 0;\r\n}\n\n//# sourceURL=webpack://4number/./src/page/onNumberCreate.js?");

/***/ }),

/***/ "./src/utils/isPrime.js":
/*!******************************!*\
  !*** ./src/utils/isPrime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ isPrime\n/* harmony export */ });\n//判断一个数是不是素数\r\n\r\nfunction isPrime(n){\r\n    if(n < 2){\r\n        return false\r\n    }\r\n    for(let i = 2 ; i <= n - 1;i++){\r\n        if(n%i === 0){\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://4number/./src/utils/isPrime.js?");

/***/ }),

/***/ "./src/utils/number.js":
/*!*****************************!*\
  !*** ./src/utils/number.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ NumberCreater\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/utils/isPrime.js\");\n\r\nclass NumberCreater{\r\n    constructor(duraiton=500){\r\n        this.duraiton = duraiton\r\n        this.number = 1\r\n        this.timer  = null\r\n    }\r\n    start(){\r\n        if(this.timer){\r\n            return\r\n        }\r\n        this.timer = setInterval(()=>{\r\n            this.onNumberCreated && this.onNumberCreated(this.number,(0,_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.number)) \r\n            this.number++\r\n        },this.duraiton)\r\n    }\r\n    stop(){\r\n        clearInterval(this.timer)\r\n        this.timer = null\r\n    }\r\n}\n\n//# sourceURL=webpack://4number/./src/utils/number.js?");

/***/ }),

/***/ "./src/utils/ranColor.js":
/*!*******************************!*\
  !*** ./src/utils/ranColor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ \"./src/utils/random.js\");\n\r\nlet colorArr = ['#f26395',\"#63efab\",\"#ef7658\",\"#ffe868\",\"#80e3f7\",\"d781f9\"]\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    let i = (0,_random__WEBPACK_IMPORTED_MODULE_0__.default)(colorArr.length,0)\r\n    return colorArr[i]\r\n}\n\n//# sourceURL=webpack://4number/./src/utils/ranColor.js?");

/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//产生一个随机数\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(max,min){\r\n    return Math.floor(Math.random() * (max -min) + min);\r\n}\n\n//# sourceURL=webpack://4number/./src/utils/random.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;