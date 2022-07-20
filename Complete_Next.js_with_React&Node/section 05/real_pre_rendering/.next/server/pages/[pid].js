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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[pid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[pid].js":
/*!************************!*\
  !*** ./pages/[pid].js ***!
  \************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductDetailPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/sangwuuyang/Documents/GitHub/LearnNext.js/Complete_Next.js_with_React&Node/section 05/real_pre_rendering/pages/[pid].js\";\n\n\n\nfunction ProductDetailPage(props) {\n  const {\n    loadedProduct\n  } = props;\n\n  if (!loadedProduct) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: loadedProduct.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: loadedProduct.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getData() {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), \"data\", \"dummy-backend.json\");\n  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(filePath, \"utf-8\");\n  const data = JSON.parse(jsonData);\n  return data;\n}\n\nasync function getStaticProps(context) {\n  const {\n    params\n  } = context;\n  console.log(context);\n  const productId = params.pid;\n  const data = await getData();\n  const product = data.products.find(product => product.id === productId);\n\n  if (!product) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      loadedProduct: product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const data = await getData();\n  const paths = data.products.map(product => ({\n    params: {\n      pid: product.id\n    }\n  }));\n  return {\n    paths,\n    fallback: true\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bcGlkXS5qcz84OGJkIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxQYWdlIiwicHJvcHMiLCJsb2FkZWRQcm9kdWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldERhdGEiLCJmaWxlUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwiZnMiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdElkIiwicGlkIiwicHJvZHVjdCIsInByb2R1Y3RzIiwiZmluZCIsImlkIiwibm90Rm91bmQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwibWFwIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQy9DLFFBQU07QUFBRUM7QUFBRixNQUFvQkQsS0FBMUI7O0FBRUEsTUFBSSxDQUFDQyxhQUFMLEVBQW9CO0FBQ2xCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLGFBQWEsQ0FBQ0M7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSUQsYUFBYSxDQUFDRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7QUFFRCxlQUFlQyxPQUFmLEdBQXlCO0FBQ3ZCLFFBQU1DLFFBQVEsR0FBR0MsMkNBQUksQ0FBQ0MsSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQyxvQkFBakMsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsa0RBQUUsQ0FBQ0MsUUFBSCxDQUFZUCxRQUFaLEVBQXNCLE9BQXRCLENBQXZCO0FBQ0EsUUFBTVEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsUUFBWCxDQUFiO0FBQ0EsU0FBT0csSUFBUDtBQUNEOztBQUVNLGVBQWVHLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU07QUFBRUM7QUFBRixNQUFhRCxPQUFuQjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLFFBQU1JLFNBQVMsR0FBR0gsTUFBTSxDQUFDSSxHQUF6QjtBQUVBLFFBQU1ULElBQUksR0FBRyxNQUFNVCxPQUFPLEVBQTFCO0FBRUEsUUFBTW1CLE9BQU8sR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNDLElBQWQsQ0FBb0JGLE9BQUQsSUFBYUEsT0FBTyxDQUFDRyxFQUFSLEtBQWVMLFNBQS9DLENBQWhCOztBQUVBLE1BQUksQ0FBQ0UsT0FBTCxFQUFjO0FBQ1osV0FBTztBQUNMSSxjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0Q7O0FBRUQsU0FBTztBQUNMM0IsU0FBSyxFQUFFO0FBQ0xDLG1CQUFhLEVBQUVzQjtBQURWO0FBREYsR0FBUDtBQUtEO0FBRU0sZUFBZUssY0FBZixHQUFnQztBQUNyQyxRQUFNZixJQUFJLEdBQUcsTUFBTVQsT0FBTyxFQUExQjtBQUNBLFFBQU15QixLQUFLLEdBQUdoQixJQUFJLENBQUNXLFFBQUwsQ0FBY00sR0FBZCxDQUFtQlAsT0FBRCxLQUFjO0FBQzVDTCxVQUFNLEVBQUU7QUFDTkksU0FBRyxFQUFFQyxPQUFPLENBQUNHO0FBRFA7QUFEb0MsR0FBZCxDQUFsQixDQUFkO0FBTUEsU0FBTztBQUNMRyxTQURLO0FBRUxFLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCIsImZpbGUiOiIuL3BhZ2VzL1twaWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxQYWdlKHByb3BzKSB7XG4gIGNvbnN0IHsgbG9hZGVkUHJvZHVjdCB9ID0gcHJvcHM7XG5cbiAgaWYgKCFsb2FkZWRQcm9kdWN0KSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGgxPntsb2FkZWRQcm9kdWN0LnRpdGxlfTwvaDE+XG4gICAgICA8cD57bG9hZGVkUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZHVtbXktYmFja2VuZC5qc29uXCIpO1xuICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCBcInV0Zi04XCIpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcbiAgY29uc29sZS5sb2coY29udGV4dCk7XG4gIGNvbnN0IHByb2R1Y3RJZCA9IHBhcmFtcy5waWQ7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcblxuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0cy5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBwcm9kdWN0SWQpO1xuXG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9hZGVkUHJvZHVjdDogcHJvZHVjdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGNvbnN0IHBhdGhzID0gZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBwaWQ6IHByb2R1Y3QuaWQsXG4gICAgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[pid].js\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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