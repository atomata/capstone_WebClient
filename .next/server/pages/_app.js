/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_util_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/util/styles */ \"./src/util/styles.ts\");\n/* harmony import */ var _src_util_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/util/utils */ \"./src/util/utils.ts\");\n/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.global.css */ \"./pages/app.global.css\");\n/* harmony import */ var _app_global_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_global_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/gin/Projects/capstone_WebClient/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().footer.withConfig({\n  displayName: \"_app__Footer\",\n  componentId: \"hspmcv-0\"\n})([\"display:none;\"]);\nfunction App({\n  Component,\n  pageProps\n}) {\n  // Below is for MUI integration with Next.js SSR\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    const jssStyles = document.querySelector(\"#jss-server-side\");\n    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"My App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: `${_src_util_utils__WEBPACK_IMPORTED_MODULE_6__.assetPrefix}/favicon.ico`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://fonts.googleapis.com/css2?family=B612:wght@700&display=swap\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300&display=swap\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n      theme: _src_util_styles__WEBPACK_IMPORTED_MODULE_5__.default,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n      children: \"My App\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired),\n  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdG9tYXRhLXdlYi1jbGllbnQvLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImFzc2V0UHJlZml4IiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLDBFQUFIO0FBQUE7QUFBQTtBQUFBLHFCQUFaO0FBSWUsU0FBU0MsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQWlEO0FBQzlEO0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFsQjtBQUNBLFFBQUlGLFNBQUosRUFBZUEsU0FBUyxDQUFDRyxhQUFWLENBQXdCQyxXQUF4QixDQUFvQ0osU0FBcEM7QUFDaEIsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsNEJBRUUsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUF1QixZQUFJLEVBQUcsR0FBRUssd0RBQVk7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBU0UsOERBQUMsNERBQUQ7QUFBZSxXQUFLLEVBQUVDLHFEQUF0QjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVSLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVlFLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBLGtCQURGO0FBZ0JEO0FBRURGLEdBQUcsQ0FBQ1csU0FBSixHQUFnQjtBQUNkVixXQUFTLEVBQUVXLDBFQURHO0FBRWRWLFdBQVMsRUFBRVUscUVBQTJCQztBQUZ4QixDQUFoQiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3JjL3V0aWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gXCIuLi9zcmMvdXRpbC91dGlsc1wiO1xuaW1wb3J0IFwiLi9hcHAuZ2xvYmFsLmNzc1wiO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgLy8gQmVsb3cgaXMgZm9yIE1VSSBpbnRlZ3JhdGlvbiB3aXRoIE5leHQuanMgU1NSXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc3Mtc2VydmVyLXNpZGVcIik7XG4gICAgaWYgKGpzc1N0eWxlcykganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBwcmV0dGllci1pZ25vcmUgKi99XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vZmF2aWNvbi5pY29gfSAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QjYxMjp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrU2VyaWY6d2dodEAzMDAmZGlzcGxheT1zd2FwXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDxGb290ZXI+TXkgQXBwPC9Gb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/util/styles.ts":
/*!****************************!*\
  !*** ./src/util/styles.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst purple = ({\n  opacity = 1\n} = {}) => `rgba(39, 0, 84, ${opacity})`;\n\nconst blue = ({\n  opacity = 1\n} = {}) => `hsla(240, 100%, 20%, ${opacity})`;\n\nconst theme = {\n  colors: {\n    sqlRed: \"hsl(0, 100%, 30%)\",\n    preProBlue: blue(),\n    seeThroughPurple: purple({\n      opacity: 0.623\n    }),\n    createPurple: purple,\n    createBlue: blue\n  },\n  fonts: {\n    B612: `\n      \"B612\", Menlo, Monaco,\n      Lucida Console, Liberation Mono,\n      DejaVu Sans Mono, Bitstream Vera Sans Mono,\n      Courier New, monospace\n    `,\n    IBMPlexSerif: `\n      IBM Plex Serif\n    `\n  },\n  shadows: {\n    sparse: \"0px 11px 67px -4px rgba(0, 0, 0, 0.6)\"\n  },\n  transitions: {\n    lifted: \"all 700ms cubic-bezier(0.75, 0, 0.25, 1)\",\n    liftedFast: \"all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)\"\n  },\n  mixins: {\n    unselectable: ({\n      pointerEvents = false\n    } = {}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)([\"\", \" user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;\"], !pointerEvents && \"pointer-events: none;\").toString()\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdG9tYXRhLXdlYi1jbGllbnQvLi9zcmMvdXRpbC9zdHlsZXMudHM/N2M4MiJdLCJuYW1lcyI6WyJwdXJwbGUiLCJvcGFjaXR5IiwiYmx1ZSIsInRoZW1lIiwiY29sb3JzIiwic3FsUmVkIiwicHJlUHJvQmx1ZSIsInNlZVRocm91Z2hQdXJwbGUiLCJjcmVhdGVQdXJwbGUiLCJjcmVhdGVCbHVlIiwiZm9udHMiLCJCNjEyIiwiSUJNUGxleFNlcmlmIiwic2hhZG93cyIsInNwYXJzZSIsInRyYW5zaXRpb25zIiwibGlmdGVkIiwibGlmdGVkRmFzdCIsIm1peGlucyIsInVuc2VsZWN0YWJsZSIsInBvaW50ZXJFdmVudHMiLCJjc3MiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsU0FBTyxHQUFHO0FBQVosSUFBa0IsRUFBbkIsS0FBMkIsbUJBQWtCQSxPQUFRLEdBQXBFOztBQUNBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVELFNBQU8sR0FBRztBQUFaLElBQWtCLEVBQW5CLEtBQTJCLHdCQUF1QkEsT0FBUSxHQUF2RTs7QUFFQSxNQUFNRSxLQUFtQixHQUFHO0FBQzFCQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFLG1CQURGO0FBRU5DLGNBQVUsRUFBRUosSUFBSSxFQUZWO0FBR05LLG9CQUFnQixFQUFFUCxNQUFNLENBQUM7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBRCxDQUhsQjtBQUlOTyxnQkFBWSxFQUFFUixNQUpSO0FBS05TLGNBQVUsRUFBRVA7QUFMTixHQURrQjtBQVMxQlEsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOUztBQU9MQyxnQkFBWSxFQUFHO0FBQ25CO0FBQ0E7QUFUUyxHQVRtQjtBQXFCMUJDLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFERCxHQXJCaUI7QUF5QjFCQyxhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFLDBDQURHO0FBRVhDLGNBQVUsRUFBRTtBQUZELEdBekJhO0FBOEIxQkMsUUFBTSxFQUFFO0FBQ05DLGdCQUFZLEVBQUUsQ0FBQztBQUNiQyxtQkFBYSxHQUFHO0FBREgsUUFFa0IsRUFGbkIsS0FHWkMsc0RBQUcsd0hBQ0MsQ0FBQ0QsYUFBRCxJQUFrQix1QkFEbkIsQ0FBSCxDQU9FRSxRQVBGO0FBSkk7QUE5QmtCLENBQTVCO0FBNkNBLCtEQUFlbkIsS0FBZiIsImZpbGUiOiIuL3NyYy91dGlsL3N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IHB1cnBsZSA9ICh7IG9wYWNpdHkgPSAxIH0gPSB7fSkgPT4gYHJnYmEoMzksIDAsIDg0LCAke29wYWNpdHl9KWA7XG5jb25zdCBibHVlID0gKHsgb3BhY2l0eSA9IDEgfSA9IHt9KSA9PiBgaHNsYSgyNDAsIDEwMCUsIDIwJSwgJHtvcGFjaXR5fSlgO1xuXG5jb25zdCB0aGVtZTogRGVmYXVsdFRoZW1lID0ge1xuICBjb2xvcnM6IHtcbiAgICBzcWxSZWQ6IFwiaHNsKDAsIDEwMCUsIDMwJSlcIixcbiAgICBwcmVQcm9CbHVlOiBibHVlKCksXG4gICAgc2VlVGhyb3VnaFB1cnBsZTogcHVycGxlKHsgb3BhY2l0eTogMC42MjMgfSksXG4gICAgY3JlYXRlUHVycGxlOiBwdXJwbGUsXG4gICAgY3JlYXRlQmx1ZTogYmx1ZSxcbiAgfSxcblxuICBmb250czoge1xuICAgIEI2MTI6IGBcbiAgICAgIFwiQjYxMlwiLCBNZW5sbywgTW9uYWNvLFxuICAgICAgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubyxcbiAgICAgIENvdXJpZXIgTmV3LCBtb25vc3BhY2VcbiAgICBgLFxuICAgIElCTVBsZXhTZXJpZjogYFxuICAgICAgSUJNIFBsZXggU2VyaWZcbiAgICBgLFxuICB9LFxuXG4gIHNoYWRvd3M6IHtcbiAgICBzcGFyc2U6IFwiMHB4IDExcHggNjdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICB9LFxuXG4gIHRyYW5zaXRpb25zOiB7XG4gICAgbGlmdGVkOiBcImFsbCA3MDBtcyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC4yNSwgMSlcIixcbiAgICBsaWZ0ZWRGYXN0OiBcImFsbCAwLjJzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpXCIsXG4gIH0sXG5cbiAgbWl4aW5zOiB7XG4gICAgdW5zZWxlY3RhYmxlOiAoe1xuICAgICAgcG9pbnRlckV2ZW50cyA9IGZhbHNlLFxuICAgIH06IHsgcG9pbnRlckV2ZW50cz86IGJvb2xlYW4gfSA9IHt9KSA9PlxuICAgICAgY3NzYFxuICAgICAgICAkeyFwb2ludGVyRXZlbnRzICYmIFwicG9pbnRlci1ldmVudHM6IG5vbmU7XCJ9XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgYC50b1N0cmluZygpLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/styles.ts\n");

/***/ }),

/***/ "./src/util/utils.ts":
/*!***************************!*\
  !*** ./src/util/utils.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assetPrefix\": function() { return /* binding */ assetPrefix; },\n/* harmony export */   \"redirect\": function() { return /* binding */ redirect; },\n/* harmony export */   \"style\": function() { return /* binding */ style; },\n/* harmony export */   \"urlFor\": function() { return /* binding */ urlFor; }\n/* harmony export */ });\n// const weAreInProduction = process.env.NODE_ENV === \"production\";\n// const assetPrefix = weAreInProduction ? \"/preprosql\" : \"\";\nconst assetPrefix = process.env.ASSET_PREFIX || \"\";\n\nconst urlFor = (path = \"/\") => `${assetPrefix}${path}`;\n\nconst redirect = (path = \"/\") => {\n  var _window, _window$location;\n\n  return (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.replace(`${assetPrefix}${path}`);\n};\n/**\n * Convert template literal backtick-strings to React style objects for use as\n * inline-styles.\n *\n * Utility template literal parser\n *\n * @param {string | TemplateStringsArray | string[]} str\n * @returns\n */\n\n\nconst style = (str = \"\") => {\n  const s = {};\n  const myString = (str instanceof Array ? str.join(\"\") : str).replace(/ {2,}/g, \"\").replace(/\\n/g, \"\").trim();\n\n  const formatStringToCamelCase = someString => {\n    const splitted = someString.split(\"-\");\n    if (splitted.length === 1) return splitted[0];\n    return splitted[0] + splitted.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join(\"\");\n  };\n\n  myString.split(\";\").forEach(el => {\n    const [property, value] = el.split(\":\");\n    if (!property) return;\n    const formattedProperty = formatStringToCamelCase(property.trim());\n    s[formattedProperty] = value.trim();\n  });\n  return s;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdG9tYXRhLXdlYi1jbGllbnQvLi9zcmMvdXRpbC91dGlscy50cz9hYzZkIl0sIm5hbWVzIjpbImFzc2V0UHJlZml4IiwicHJvY2VzcyIsImVudiIsIkFTU0VUX1BSRUZJWCIsInVybEZvciIsInBhdGgiLCJyZWRpcmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInN0eWxlIiwic3RyIiwicyIsIm15U3RyaW5nIiwiQXJyYXkiLCJqb2luIiwidHJpbSIsImZvcm1hdFN0cmluZ1RvQ2FtZWxDYXNlIiwic29tZVN0cmluZyIsInNwbGl0dGVkIiwic3BsaXQiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImZvckVhY2giLCJlbCIsInByb3BlcnR5IiwidmFsdWUiLCJmb3JtYXR0ZWRQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFJQSxNQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFaLElBQTRCLEVBQWhEOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxDQUFDQyxJQUFJLEdBQUcsR0FBUixLQUF5QixHQUFFTCxXQUFZLEdBQUVLLElBQUssRUFBN0Q7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLENBQUNELElBQUksR0FBRyxHQUFSO0FBQUE7O0FBQUEsb0JBQ2ZFLE1BRGUsZ0VBQ2YsUUFBUUMsUUFETyxxREFDZixpQkFBa0JDLE9BQWxCLENBQTJCLEdBQUVULFdBQVksR0FBRUssSUFBSyxFQUFoRCxDQURlO0FBQUEsQ0FBakI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1LLEtBQUssR0FBRyxDQUNaQyxHQUE2QyxHQUFHLEVBRHBDLEtBRU07QUFDbEIsUUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxRQUFNQyxRQUFRLEdBQUcsQ0FBQ0YsR0FBRyxZQUFZRyxLQUFmLEdBQXVCSCxHQUFHLENBQUNJLElBQUosQ0FBUyxFQUFULENBQXZCLEdBQXNDSixHQUF2QyxFQUNkRixPQURjLENBQ04sUUFETSxFQUNJLEVBREosRUFFZEEsT0FGYyxDQUVOLEtBRk0sRUFFQyxFQUZELEVBR2RPLElBSGMsRUFBakI7O0FBS0EsUUFBTUMsdUJBQXVCLEdBQUlDLFVBQUQsSUFBd0I7QUFDdEQsVUFBTUMsUUFBUSxHQUFHRCxVQUFVLENBQUNFLEtBQVgsQ0FBaUIsR0FBakIsQ0FBakI7QUFDQSxRQUFJRCxRQUFRLENBQUNFLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkIsT0FBT0YsUUFBUSxDQUFDLENBQUQsQ0FBZjtBQUMzQixXQUNFQSxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQ0FBLFFBQVEsQ0FDTEcsS0FESCxDQUNTLENBRFQsRUFFR0MsR0FGSCxDQUVRQyxJQUFELElBQVVBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsV0FBUixLQUF3QkQsSUFBSSxDQUFDRixLQUFMLENBQVcsQ0FBWCxDQUZ6QyxFQUdHUCxJQUhILENBR1EsRUFIUixDQUZGO0FBT0QsR0FWRDs7QUFZQUYsVUFBUSxDQUFDTyxLQUFULENBQWUsR0FBZixFQUFvQk0sT0FBcEIsQ0FBNkJDLEVBQUQsSUFBUTtBQUNsQyxVQUFNLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxJQUFvQkYsRUFBRSxDQUFDUCxLQUFILENBQVMsR0FBVCxDQUExQjtBQUNBLFFBQUksQ0FBQ1EsUUFBTCxFQUFlO0FBQ2YsVUFBTUUsaUJBQWlCLEdBQUdiLHVCQUF1QixDQUFDVyxRQUFRLENBQUNaLElBQVQsRUFBRCxDQUFqRDtBQUNBSixLQUFDLENBQUNrQixpQkFBRCxDQUFELEdBQXVCRCxLQUFLLENBQUNiLElBQU4sRUFBdkI7QUFDRCxHQUxEO0FBT0EsU0FBT0osQ0FBUDtBQUNELENBN0JEIiwiZmlsZSI6Ii4vc3JjL3V0aWwvdXRpbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB3ZUFyZUluUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcbi8vIGNvbnN0IGFzc2V0UHJlZml4ID0gd2VBcmVJblByb2R1Y3Rpb24gPyBcIi9wcmVwcm9zcWxcIiA6IFwiXCI7XG5cbmltcG9ydCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgYXNzZXRQcmVmaXggPSBwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVggfHwgXCJcIjtcblxuY29uc3QgdXJsRm9yID0gKHBhdGggPSBcIi9cIik6IHN0cmluZyA9PiBgJHthc3NldFByZWZpeH0ke3BhdGh9YDtcblxuY29uc3QgcmVkaXJlY3QgPSAocGF0aCA9IFwiL1wiKTogdm9pZCA9PlxuICB3aW5kb3c/LmxvY2F0aW9uPy5yZXBsYWNlKGAke2Fzc2V0UHJlZml4fSR7cGF0aH1gKTtcblxuLyoqXG4gKiBDb252ZXJ0IHRlbXBsYXRlIGxpdGVyYWwgYmFja3RpY2stc3RyaW5ncyB0byBSZWFjdCBzdHlsZSBvYmplY3RzIGZvciB1c2UgYXNcbiAqIGlubGluZS1zdHlsZXMuXG4gKlxuICogVXRpbGl0eSB0ZW1wbGF0ZSBsaXRlcmFsIHBhcnNlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgVGVtcGxhdGVTdHJpbmdzQXJyYXkgfCBzdHJpbmdbXX0gc3RyXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBzdHlsZSA9IChcbiAgc3RyOiBzdHJpbmcgfCBUZW1wbGF0ZVN0cmluZ3NBcnJheSB8IHN0cmluZ1tdID0gXCJcIlxuKTogQ1NTUHJvcGVydGllcyA9PiB7XG4gIGNvbnN0IHMgPSB7fTtcbiAgY29uc3QgbXlTdHJpbmcgPSAoc3RyIGluc3RhbmNlb2YgQXJyYXkgPyBzdHIuam9pbihcIlwiKSA6IHN0cilcbiAgICAucmVwbGFjZSgvIHsyLH0vZywgXCJcIilcbiAgICAucmVwbGFjZSgvXFxuL2csIFwiXCIpXG4gICAgLnRyaW0oKTtcblxuICBjb25zdCBmb3JtYXRTdHJpbmdUb0NhbWVsQ2FzZSA9IChzb21lU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzcGxpdHRlZCA9IHNvbWVTdHJpbmcuc3BsaXQoXCItXCIpO1xuICAgIGlmIChzcGxpdHRlZC5sZW5ndGggPT09IDEpIHJldHVybiBzcGxpdHRlZFswXTtcbiAgICByZXR1cm4gKFxuICAgICAgc3BsaXR0ZWRbMF0gK1xuICAgICAgc3BsaXR0ZWRcbiAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgKTtcbiAgfTtcblxuICBteVN0cmluZy5zcGxpdChcIjtcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBbcHJvcGVydHksIHZhbHVlXSA9IGVsLnNwbGl0KFwiOlwiKTtcbiAgICBpZiAoIXByb3BlcnR5KSByZXR1cm47XG4gICAgY29uc3QgZm9ybWF0dGVkUHJvcGVydHkgPSBmb3JtYXRTdHJpbmdUb0NhbWVsQ2FzZShwcm9wZXJ0eS50cmltKCkpO1xuICAgIHNbZm9ybWF0dGVkUHJvcGVydHldID0gdmFsdWUudHJpbSgpO1xuICB9KTtcblxuICByZXR1cm4gcztcbn07XG5cbmV4cG9ydCB7IGFzc2V0UHJlZml4LCByZWRpcmVjdCwgc3R5bGUsIHVybEZvciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/utils.ts\n");

/***/ }),

/***/ "./pages/app.global.css":
/*!******************************!*\
  !*** ./pages/app.global.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();