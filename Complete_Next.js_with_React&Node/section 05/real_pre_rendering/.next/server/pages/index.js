module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/sangwuuyang/Documents/GitHub/LearnNext.js/Complete_Next.js_with_React&Node/section 05/real_pre_rendering/pages/index.js\";\n\n\n\nfunction HomePage(props) {\n  const {\n    products\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: product.title\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nasync function getStaticProps() {\n  console.log(\"RE-GETTING STATIC PROPS\");\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), \"data\", \"dummy-backend.json\");\n  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(filePath, \"utf-8\");\n  const data = JSON.parse(jsonData);\n\n  if (!data) {\n    return {\n      redirect: {\n        destination: \"/no-data\"\n      }\n    };\n  }\n\n  if (data.products.length === 0) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      products: data.products\n    },\n    // notFound: true,\n    revalidate: 10 // 50 seconds\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJ0aXRsZSIsImlkIiwiZGVzY3JpcHRpb24iLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxlUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwiZnMiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwibGVuZ3RoIiwibm90Rm91bmQiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsUUFBTTtBQUFFQztBQUFGLE1BQWVELEtBQXJCO0FBQ0Esc0JBQ0U7QUFBQSxjQUNHQyxRQUFRLENBQUNDLEdBQVQsQ0FBY0MsT0FBRCxpQkFDWjtBQUFBLDhCQUNFO0FBQUEsa0JBQXNCQSxPQUFPLENBQUNDO0FBQTlCLFNBQVNELE9BQU8sQ0FBQ0UsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBT0YsT0FBTyxDQUFDRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0FBRWNQLHVFQUFmO0FBRU8sZUFBZVEsY0FBZixHQUFnQztBQUNyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsb0JBQWpDLENBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLGtEQUFFLENBQUNDLFFBQUgsQ0FBWVAsUUFBWixFQUFzQixPQUF0QixDQUF2QjtBQUNBLFFBQU1RLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFFBQVgsQ0FBYjs7QUFFQSxNQUFJLENBQUNHLElBQUwsRUFBVztBQUNULFdBQU87QUFDTEcsY0FBUSxFQUFFO0FBQ1JDLG1CQUFXLEVBQUU7QUFETDtBQURMLEtBQVA7QUFLRDs7QUFFRCxNQUFJSixJQUFJLENBQUNqQixRQUFMLENBQWNzQixNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLFdBQU87QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTHhCLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUVpQixJQUFJLENBQUNqQjtBQURWLEtBREY7QUFJTDtBQUNBd0IsY0FBVSxFQUFFLEVBTFAsQ0FLVzs7QUFMWCxHQUFQO0FBT0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzL3Byb21pc2VzXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC50aXRsZX08L2xpPlxuICAgICAgICAgIDxzcGFuPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zb2xlLmxvZyhcIlJFLUdFVFRJTkcgU1RBVElDIFBST1BTXCIpO1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJkdW1teS1iYWNrZW5kLmpzb25cIik7XG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsIFwidXRmLThcIik7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL25vLWRhdGFcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGlmIChkYXRhLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHM6IGRhdGEucHJvZHVjdHMsXG4gICAgfSxcbiAgICAvLyBub3RGb3VuZDogdHJ1ZSxcbiAgICByZXZhbGlkYXRlOiAxMCwgLy8gNTAgc2Vjb25kc1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs/promises\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy9wcm9taXNlc1wiP2VkODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMvcHJvbWlzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs/promises\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });