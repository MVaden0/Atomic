"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    }\n];\nvar circle = function(ctx, options) {\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    drawData.forEach(function(element) {\n        circle(element);\n    });\n    ctx.strokeStyle = '#1a1a1a';\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.arc(250, 250, 80, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = '#1a1a1a';\n    ctx.beginPath();\n    ctx.arc(170, 160, 10, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.strokeStyle = '#1a1a1a';\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.arc(170, 160, 40, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = '#1a1a1a';\n    ctx.beginPath();\n    ctx.arc(170, 340, 10, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.strokeStyle = '#1a1a1a';\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.arc(170, 340, 40, 0, 2 * Math.PI);\n    ctx.stroke();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 111,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEJhY2tncm91bmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQmFja2dyb3VuZFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgTGFuZGluZ1BhZ2VOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kaW5nUGFnZU5hdidcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FudmFzXCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBkcmF3RGF0YSA9IFtcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0xJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMjAsXG4gICAgeDogMjUwLFxuICAgIHk6IDI1MCBcbiAgfVxuXTtcblxuY29uc3QgY2lyY2xlID0gKGN0eCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBmaWxsQ29sb3IgPSBvcHRpb25zLmZpbGxDb2xvciB8fCAnI2ZmZmZmZic7XG4gIGNvbnN0IHN0cm9rZUNvbG9yID0gb3B0aW9ucy5zdHJva2VDb2xvciB8fCAnI2ZmZmZmZic7XG4gIGNvbnN0IGZpbGwgPSBvcHRpb25zLmZpbGwgfHwgZmFsc2U7XG4gIGNvbnN0IHN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlIHx8IGZhbHNlO1xuICBjb25zdCByYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCAxMDtcbiAgY29uc3QgeCA9IG9wdGlvbnMueCB8fCAxMDtcbiAgY29uc3QgeSA9IG9wdGlvbnMueSB8fCAxMDtcbiAgY29uc3QgbGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMjtcblxuICBpZiAoZmlsbCA9PSB0cnVlKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIqTWF0aC5QSSlcbiAgICBjdHguZmlsbCgpXG4gIH1cblxuICBpZiAoc3Ryb2tlID09IHRydWUpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXcgPSAoY3R4LCBmcmFtZUNvdW50KSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG5cbiAgZHJhd0RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNpcmNsZShlbGVtZW50KTtcbiAgfSk7XG4gIFxuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzFhMWExYSdcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5iZWdpblBhdGgoKVxuICBjdHguYXJjKDI1MCwgMjUwLCA4MCwgMCwgMipNYXRoLlBJKVxuICBjdHguc3Ryb2tlKClcblxuICBjdHguZmlsbFN0eWxlID0gJyMxYTFhMWEnXG4gIGN0eC5iZWdpblBhdGgoKVxuICBjdHguYXJjKDE3MCwgMTYwLCAxMCwgMCwgMipNYXRoLlBJKVxuICBjdHguZmlsbCgpXG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gJyMxYTFhMWEnXG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYygxNzAsIDE2MCwgNDAsIDAsIDIqTWF0aC5QSSlcbiAgY3R4LnN0cm9rZSgpXG5cbiAgY3R4LmZpbGxTdHlsZSA9ICcjMWExYTFhJ1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYygxNzAsIDM0MCwgMTAsIDAsIDIqTWF0aC5QSSlcbiAgY3R4LmZpbGwoKVxuXG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjMWExYTFhJ1xuICBjdHgubGluZVdpZHRoID0gMjtcbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5hcmMoMTcwLCAzNDAsIDQwLCAwLCAyKk1hdGguUEkpXG4gIGN0eC5zdHJva2UoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGFuZGluZ1BhZ2VOYXYgLz5cbiAgICAgIDxCYWNrZ3JvdW5kIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmdQYWdlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX3dyYXBwZXJ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19tYWlufT5BdG9taWM8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX3Byb251bmNpYXRpb259PlvJmXTDpG1pa108L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2FkamVjdGl2ZX0+YWRqLjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbn0+XG4gICAgICAgICAgb2Ygb3IgZm9ybWluZyBhIHNpbmdsZSBpcnJlZHVjaWJsZSB1bml0IG9yIGNvbXBvbmVudCBpbiBhIGxhcmdlciBzeXN0ZW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdGl0bGU9XCJhYm91dFwiIGNsYXNzTmFtZT17c3R5bGUuYWJvdXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0SGVhZGVyfT5cbiAgICAgICAgICAgIExlYXJuIGZyb20gZmlyc3QgcHJpbmNpcGxlcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0Qm9keX0+XG4gICAgICAgICAgICBBdG9tcyBhcmUgdGhlIHNtYWxsZXN0IGZ1bmN0aW9uYWwgdW5pdHMgb2YgbWF0dGVyIGZyb20gd2hpY2ggZXZlcnl0aGluZyBlbHNlIGlzIGJ1aWx0IHVwb24uXG4gICAgICAgICAgICBBdG9taWMgd2FzIGJ1aWx0IG9uIHRoZXNlIHByaW5jaXBsZXMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRGaWd1cmV9PlxuICAgICAgICA8Q2FudmFzIGNsYXNzTmFtZT17c3R5bGUuYWJvdXRGaWd1cmVDYW52YXN9IGRyYXc9e2RyYXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdGl0bGU9XCJnZXRTdGFydGVkXCIgY2xhc3NOYW1lPXtzdHlsZS5sYW5kaW5nUGFnZX0+XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiTGFuZGluZ1BhZ2VOYXYiLCJDYW52YXMiLCJzdHlsZSIsIkJhY2tncm91bmQiLCJzc3IiLCJkcmF3RGF0YSIsInRhZyIsImZpbGwiLCJmaWxsQ29sb3IiLCJyYWRpdXMiLCJ4IiwieSIsImNpcmNsZSIsImN0eCIsIm9wdGlvbnMiLCJzdHJva2VDb2xvciIsInN0cm9rZSIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImZyYW1lQ291bnQiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJlbGVtZW50IiwiSG9tZSIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsYW5kaW5nUGFnZSIsImF0b21pY0RlZmluaXRpb25fX2NvbnRhaW5lciIsImF0b21pY0RlZmluaXRpb25fX3dyYXBwZXIiLCJzcGFuIiwiYXRvbWljRGVmaW5pdGlvbl9fbWFpbiIsImF0b21pY0RlZmluaXRpb25fX3Byb251bmNpYXRpb24iLCJhdG9taWNEZWZpbml0aW9uX19hZGplY3RpdmUiLCJhdG9taWNEZWZpbml0aW9uX19kZWZpbml0aW9uIiwidGl0bGUiLCJhYm91dCIsImFib3V0VGV4dCIsImFib3V0VGV4dEhlYWRlciIsImFib3V0VGV4dEJvZHkiLCJhYm91dEZpZ3VyZSIsImFib3V0RmlndXJlQ2FudmFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});