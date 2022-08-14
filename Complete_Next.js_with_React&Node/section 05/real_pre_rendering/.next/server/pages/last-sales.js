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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/last-sales.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LastSalesPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/sangwuuyang/Documents/GitHub/LearnNext.js/Complete_Next.js_with_React&Node/section 05/real_pre_rendering/pages/last-sales.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction LastSalesPage(props) {\n  // const [isLoading, setIsLoading] = useState(false);\n  const {\n    0: sales,\n    1: setSales\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(); // 컴포넌트가 로드 될때 url에 대한 요청을 보내게 된다\n  // return 값을 받는다\n\n  const fetcher = (...args) => fetch(...args).then(res => res.json());\n\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(`https://nextjs-prerender-d2499-default-rtdb.firebaseio.com/sales.json`, fetcher);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (data) {\n      const transformedSales = Object.keys(data).map(key => {\n        return _objectSpread(_objectSpread({}, data[key]), {}, {\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      });\n      setSales(transformedSales);\n    }\n  }, [data]); // useEffect(() => {\n  //   setIsLoading(true);\n  //   const fetcher = (...args) => fetch(...args).then((res) => res.json());\n  //   fetch(\n  //     \"https://nextjs-prerender-d2499-default-rtdb.firebaseio.com/sales.json\"\n  //   )\n  //     .then((res) => {\n  //       return res.json();\n  //     })\n  //     .then((data) => {\n  //       console.log(data);\n  //       const transformedSales = Object.keys(data).map((key) => {\n  //         return {\n  //           ...data[key],\n  //           id: key,\n  //           username: data[key].username,\n  //           volume: data[key].volume,\n  //         };\n  //       });\n  //       console.log(transformedSales);\n  //       setSales(transformedSales);\n  //       setIsLoading(false);\n  //     });\n  // }, []);\n  // 로딩보다 에러가 더 중요하기 때문에 앞서 두자\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No sales yet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (!data || !sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(sale => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: [sale.username, \" - $\", sale.volume]\n    }, sale.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXN0LXNhbGVzLmpzPzA1MWQiXSwibmFtZXMiOlsiTGFzdFNhbGVzUGFnZSIsInByb3BzIiwic2FsZXMiLCJzZXRTYWxlcyIsInVzZVN0YXRlIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwidXNlRWZmZWN0IiwidHJhbnNmb3JtZWRTYWxlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwic2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDM0M7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLEVBQWxDLENBRjJDLENBSTNDO0FBRUE7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHLENBQUMsR0FBR0MsSUFBSixLQUFhQyxLQUFLLENBQUMsR0FBR0QsSUFBSixDQUFMLENBQWVFLElBQWYsQ0FBcUJDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQTdCLENBQTdCOztBQUVBLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCQywwQ0FBTSxDQUMzQix1RUFEMkIsRUFFNUJSLE9BRjRCLENBQTlCO0FBS0FTLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlILElBQUosRUFBVTtBQUNSLFlBQU1JLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBWixFQUFrQk8sR0FBbEIsQ0FBdUJDLEdBQUQsSUFBUztBQUN0RCwrQ0FDS1IsSUFBSSxDQUFDUSxHQUFELENBRFQ7QUFFRUMsWUFBRSxFQUFFRCxHQUZOO0FBR0VFLGtCQUFRLEVBQUVWLElBQUksQ0FBQ1EsR0FBRCxDQUFKLENBQVVFLFFBSHRCO0FBSUVDLGdCQUFNLEVBQUVYLElBQUksQ0FBQ1EsR0FBRCxDQUFKLENBQVVHO0FBSnBCO0FBTUQsT0FQd0IsQ0FBekI7QUFRQW5CLGNBQVEsQ0FBQ1ksZ0JBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FaUSxFQVlOLENBQUNKLElBQUQsQ0FaTSxDQUFULENBZDJDLENBNEIzQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFJQyxLQUFKLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ1QsS0FBZCxFQUFxQjtBQUNuQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxjQUNHQSxLQUFLLENBQUNnQixHQUFOLENBQVdLLElBQUQsaUJBQ1Q7QUFBQSxpQkFDR0EsSUFBSSxDQUFDRixRQURSLFVBQ3NCRSxJQUFJLENBQUNELE1BRDNCO0FBQUEsT0FBU0MsSUFBSSxDQUFDSCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vcGFnZXMvbGFzdC1zYWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFzdFNhbGVzUGFnZShwcm9wcykge1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2FsZXMsIHNldFNhbGVzXSA9IHVzZVN0YXRlKCk7XG5cbiAgLy8g7Lu07Y+s64SM7Yq46rCAIOuhnOuTnCDrkKDrlYwgdXJs7JeQIOuMgO2VnCDsmpTssq3snYQg67O064K06rKMIOuQnOuLpFxuXG4gIC8vIHJldHVybiDqsJLsnYQg67Cb64qU64ukXG4gIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHBzOi8vbmV4dGpzLXByZXJlbmRlci1kMjQ5OS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbmAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmRhdGFba2V5XSxcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vICAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIC8vICAgZmV0Y2goXG4gIC8vICAgICBcImh0dHBzOi8vbmV4dGpzLXByZXJlbmRlci1kMjQ5OS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiXG4gIC8vICAgKVxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAvLyAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgLy8gICAgIH0pXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5KSA9PiB7XG4gIC8vICAgICAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgICAgIC4uLmRhdGFba2V5XSxcbiAgLy8gICAgICAgICAgIGlkOiBrZXksXG4gIC8vICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAvLyAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAvLyAgICAgICAgIH07XG4gIC8vICAgICAgIH0pO1xuXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAvLyAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH0pO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8g66Gc65Sp67O064ukIOyXkOufrOqwgCDrjZQg7KSR7JqU7ZWY6riwIOuVjOusuOyXkCDslZ7shJwg65GQ7J6QXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8cD5ObyBzYWxlcyB5ZXQ8L3A+O1xuICB9XG5cbiAgaWYgKCFkYXRhIHx8ICFzYWxlcykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

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

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });