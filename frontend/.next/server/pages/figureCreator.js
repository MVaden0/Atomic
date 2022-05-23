/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/figureCreator";
exports.ids = ["pages/figureCreator"];
exports.modules = {

/***/ "./styles/FigureCreator.module.css":
/*!*****************************************!*\
  !*** ./styles/FigureCreator.module.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"mainPage\": \"FigureCreator_mainPage__BSX8i\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvRmlndXJlQ3JlYXRvci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zdHlsZXMvRmlndXJlQ3JlYXRvci5tb2R1bGUuY3NzP2I5OGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblBhZ2VcIjogXCJGaWd1cmVDcmVhdG9yX21haW5QYWdlX19CU1g4aVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/FigureCreator.module.css\n");

/***/ }),

/***/ "./components/figureCreator/Canvas.jsx":
/*!*********************************************!*\
  !*** ./components/figureCreator/Canvas.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Canvas = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: props.backgroundColor,\n            width: `${props.backgroundWidth}px`,\n            height: `${props.backgroundHeight}px`\n        }\n    }, void 0, false, {\n        fileName: \"/home/michael/code/Atomic/frontend/components/figureCreator/Canvas.jsx\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpZ3VyZUNyZWF0b3IvQ2FudmFzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDQztBQUV6RCxLQUFLLENBQUNLLE1BQU0sSUFBSUMsS0FBSyxHQUFLLENBQUM7SUFDekIsTUFBTSw2RUFDREMsQ0FBRztRQUFDSCxLQUFLLEVBQUUsQ0FBQ0k7WUFBQUEsZUFBZSxFQUFFRixLQUFLLENBQUNFLGVBQWU7WUFBRUMsS0FBSyxLQUFLSCxLQUFLLENBQUNJLGVBQWUsQ0FBQyxFQUFFO1lBQUdDLE1BQU0sS0FBS0wsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxFQUFFO1FBQUMsQ0FBQzs7Ozs7O0FBSXRJLENBQUM7QUFFRCxpRUFBZVAsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL2ZpZ3VyZUNyZWF0b3IvQ2FudmFzLmpzeD9mYjgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0ZpZ3VyZUNyZWF0b3IubW9kdWxlLmNzcydcblxuY29uc3QgQ2FudmFzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IsIHdpZHRoOiBgJHtwcm9wcy5iYWNrZ3JvdW5kV2lkdGh9cHhgLCBoZWlnaHQ6IGAke3Byb3BzLmJhY2tncm91bmRIZWlnaHR9cHhgfX0+XG5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsIkNhbnZhcyIsInByb3BzIiwiZGl2IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJiYWNrZ3JvdW5kV2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/figureCreator/Canvas.jsx\n");

/***/ }),

/***/ "./components/figureCreator/ToolBar.jsx":
/*!**********************************************!*\
  !*** ./components/figureCreator/ToolBar.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst ToolBar = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: props.backgroundColor,\n            width: `${props.width}px`,\n            height: `${props.height}px`\n        }\n    }, void 0, false, {\n        fileName: \"/home/michael/code/Atomic/frontend/components/figureCreator/ToolBar.jsx\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpZ3VyZUNyZWF0b3IvVG9vbEJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBQ0M7QUFFekQsS0FBSyxDQUFDSyxPQUFPLElBQUdDLEtBQUssR0FBSyxDQUFDO0lBQ3pCLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0gsS0FBSyxFQUFFLENBQUNJO1lBQUFBLGVBQWUsRUFBRUYsS0FBSyxDQUFDRSxlQUFlO1lBQUVDLEtBQUssS0FBS0gsS0FBSyxDQUFDRyxLQUFLLENBQUMsRUFBRTtZQUFHQyxNQUFNLEtBQUtKLEtBQUssQ0FBQ0ksTUFBTSxDQUFDLEVBQUU7UUFBQyxDQUFDOzs7Ozs7QUFJbEgsQ0FBQztBQUVELGlFQUFlTCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvZmlndXJlQ3JlYXRvci9Ub29sQmFyLmpzeD8xYjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0ZpZ3VyZUNyZWF0b3IubW9kdWxlLmNzcydcblxuY29uc3QgVG9vbEJhcj0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IsIHdpZHRoOiBgJHtwcm9wcy53aWR0aH1weGAsIGhlaWdodDogYCR7cHJvcHMuaGVpZ2h0fXB4YH19PlxuXG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiVG9vbEJhciIsInByb3BzIiwiZGl2IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/figureCreator/ToolBar.jsx\n");

/***/ }),

/***/ "./pages/figureCreator.js":
/*!********************************!*\
  !*** ./pages/figureCreator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FigureCreator)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_FigureCreator_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/FigureCreator.module.css */ \"./styles/FigureCreator.module.css\");\n/* harmony import */ var _styles_FigureCreator_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_FigureCreator_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_figureCreator_ToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/figureCreator/ToolBar */ \"./components/figureCreator/ToolBar.jsx\");\n/* harmony import */ var _components_figureCreator_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/figureCreator/Canvas */ \"./components/figureCreator/Canvas.jsx\");\n\n\n\n\n\nfunction FigureCreator() {\n    const { 0: pageWidth , 1: setPageWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: pageHeight , 1: setPageHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: toolBarWidth , 1: setToolBarWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: backgroundCanvasWidth , 1: setBackgroundCanvasWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPageWidth(window.innerWidth);\n        setPageHeight(window.innerHeight);\n        setToolBarWidth(250);\n        setBackgroundCanvasWidth(pageWidth - toolBarWidth * 2);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_FigureCreator_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainPage),\n        style: {\n            backgroundColor: '#1a1a1a',\n            width: `${pageWidth}px`,\n            height: `${pageHeight}px`\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figureCreator_ToolBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                backgroundColor: \"#ff0000\",\n                width: toolBarWidth,\n                height: pageHeight\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/figureCreator.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figureCreator_ToolBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                backgroundColor: \"#00ff00\",\n                width: toolBarWidth,\n                height: pageHeight\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/figureCreator.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_figureCreator_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                backgroundColor: \"#0000ff\",\n                backgroundWidth: backgroundCanvasWidth,\n                backgroundHeight: pageHeight\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/figureCreator.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/figureCreator.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWd1cmVDcmVhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDVztBQUVHO0FBQ0Y7QUFFeEMsUUFBUSxDQUFDSyxhQUFhLEdBQUcsQ0FBQztJQUNyQyxLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJUCwrQ0FBUTtJQUMxQyxLQUFLLE1BQUVRLFVBQVUsTUFBRUMsYUFBYSxNQUFJVCwrQ0FBUTtJQUU1QyxLQUFLLE1BQUVVLFlBQVksTUFBRUMsZUFBZSxNQUFJWCwrQ0FBUSxDQUFDLENBQUM7SUFFbEQsS0FBSyxNQUFFWSxxQkFBcUIsTUFBRUMsd0JBQXdCLE1BQUliLCtDQUFRLENBQUMsQ0FBQztJQUVwRUMsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JNLFlBQVksQ0FBQ08sTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztRQUNoQ04sYUFBYSxDQUFDSyxNQUFNLENBQUNFLFdBQVcsQ0FBQyxDQUFDO1FBRWxDTCxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckJFLHdCQUF3QixDQUFDUCxTQUFTLEdBQUlJLFlBQVksR0FBRyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBR0gsTUFBTSw2RUFDRE8sQ0FBRztRQUFDQyxTQUFTLEVBQUVoQixrRkFBYztRQUFFQSxLQUFLLEVBQUUsQ0FBQ2tCO1lBQUFBLGVBQWUsRUFBRSxDQUFTO1lBQUVDLEtBQUssS0FBS2YsU0FBUyxDQUFDLEVBQUU7WUFBR2dCLE1BQU0sS0FBS2QsVUFBVSxDQUFDLEVBQUU7UUFBQyxDQUFDOzt3RkFDbEhMLHlFQUFPO2dCQUFDaUIsZUFBZSxFQUFDLENBQVM7Z0JBQUNDLEtBQUssRUFBRVgsWUFBWTtnQkFBRVksTUFBTSxFQUFFZCxVQUFVOzs7Ozs7d0ZBQ3pFTCx5RUFBTztnQkFBQ2lCLGVBQWUsRUFBQyxDQUFTO2dCQUFDQyxLQUFLLEVBQUVYLFlBQVk7Z0JBQUVZLE1BQU0sRUFBRWQsVUFBVTs7Ozs7O3dGQUN6RUosd0VBQU07Z0JBQUNnQixlQUFlLEVBQUMsQ0FBUztnQkFBQ0csZUFBZSxFQUFFWCxxQkFBcUI7Z0JBQUVZLGdCQUFnQixFQUFFaEIsVUFBVTs7Ozs7Ozs7Ozs7O0FBR2xILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2ZpZ3VyZUNyZWF0b3IuanM/MmI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0ZpZ3VyZUNyZWF0b3IubW9kdWxlLmNzcydcblxuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9maWd1cmVDcmVhdG9yL1Rvb2xCYXInO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL2ZpZ3VyZUNyZWF0b3IvQ2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlndXJlQ3JlYXRvcigpIHtcbiAgICBjb25zdCBbcGFnZVdpZHRoLCBzZXRQYWdlV2lkdGhdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcGFnZUhlaWdodCwgc2V0UGFnZUhlaWdodF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgW3Rvb2xCYXJXaWR0aCwgc2V0VG9vbEJhcldpZHRoXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW2JhY2tncm91bmRDYW52YXNXaWR0aCwgc2V0QmFja2dyb3VuZENhbnZhc1dpZHRoXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0UGFnZVdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgc2V0UGFnZUhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgICAgIHNldFRvb2xCYXJXaWR0aCgyNTApO1xuXG4gICAgICAgIHNldEJhY2tncm91bmRDYW52YXNXaWR0aChwYWdlV2lkdGggLSAodG9vbEJhcldpZHRoICogMikpXG4gICAgfSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWluUGFnZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMWExYTFhJywgd2lkdGg6IGAke3BhZ2VXaWR0aH1weGAsIGhlaWdodDogYCR7cGFnZUhlaWdodH1weGB9fT5cbiAgICAgICAgICAgIDxUb29sQmFyIGJhY2tncm91bmRDb2xvcj0nI2ZmMDAwMCcgd2lkdGg9e3Rvb2xCYXJXaWR0aH0gaGVpZ2h0PXtwYWdlSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPFRvb2xCYXIgYmFja2dyb3VuZENvbG9yPScjMDBmZjAwJyB3aWR0aD17dG9vbEJhcldpZHRofSBoZWlnaHQ9e3BhZ2VIZWlnaHR9IC8+XG4gICAgICAgICAgICA8Q2FudmFzIGJhY2tncm91bmRDb2xvcj0nIzAwMDBmZicgYmFja2dyb3VuZFdpZHRoPXtiYWNrZ3JvdW5kQ2FudmFzV2lkdGh9IGJhY2tncm91bmRIZWlnaHQ9e3BhZ2VIZWlnaHR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJUb29sQmFyIiwiQ2FudmFzIiwiRmlndXJlQ3JlYXRvciIsInBhZ2VXaWR0aCIsInNldFBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJzZXRQYWdlSGVpZ2h0IiwidG9vbEJhcldpZHRoIiwic2V0VG9vbEJhcldpZHRoIiwiYmFja2dyb3VuZENhbnZhc1dpZHRoIiwic2V0QmFja2dyb3VuZENhbnZhc1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpblBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRXaWR0aCIsImJhY2tncm91bmRIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/figureCreator.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/figureCreator.js"));
module.exports = __webpack_exports__;

})();