/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/Slider/Slider.js":
/*!****************************************!*\
  !*** ./src/component/Slider/Slider.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\nclass Slider {\r\n  constructor(config) {\r\n    config = Object.assign({\r\n      time: 3000,\r\n      speed: 1,\r\n      index: 0\r\n    }, config);\r\n    this.el = document.querySelector(config.el);\r\n    this.items = [...this.el.children];\r\n    this.time = config.time;\r\n    this.speed = config.speed;\r\n    this.index = config.index;\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.el.style.cssText = 'overflow:hidden; position: relative';\r\n    this.items.forEach((item, index) => {\r\n      item.style.cssText = `position: absolute; transform: translateX(${ index * 100 }%); transition: transform ${ this.speed }s ease`;\r\n    });\r\n    this.slide();\r\n  }\r\n\r\n  slide() {\r\n    setTimeout(() => {\r\n      this.items.forEach((value) => {\r\n        let translateValue = Number.parseInt(value.style.transform.match(/(-)?[0-9]*%/).toString());\r\n        value.style.transition = `transform ${ this.speed }s ease`;\r\n        value.style.transform = `translateX(${ translateValue - 100 }%)`;\r\n      });\r\n      setTimeout(() => {\r\n        this.items[this.index].style.transition = '';\r\n        this.items[this.index].style.transform = 'translateX(200%)';\r\n        this.index++;\r\n        if(this.index === 3) {\r\n          this.index = 0;\r\n        }\r\n      }, this.speed * 1000);\r\n      this.slide();\r\n    }, this.time);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/component/Slider/Slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_Slider_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/Slider/Slider */ \"./src/component/Slider/Slider.js\");\n\r\n\r\nconst slider = new _component_Slider_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n  el: '#container'\r\n});\r\n\r\n\r\nconsole.log(slider);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });