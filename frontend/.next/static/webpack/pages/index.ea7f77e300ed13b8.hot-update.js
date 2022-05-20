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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-2',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        lineWidth: 2,\n        radius: 80,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-3',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-4',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-5',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 340\n    },\n    {\n        tag: 'circle-6',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 340\n    }\n];\nvar circle = function(ctx, options) {\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    var dx = 1 / 100;\n    drawData.forEach(function(element) {\n        circle(ctx, element);\n    });\n    var test = {\n        tag: 'circle-7',\n        fill: true,\n        fillColor: '#c16e70',\n        radius: 10,\n        x: 330 - frameCount,\n        y: 250 - Math.sqrt(80 - Math.power(330 - frameCount, 2))\n    };\n    ctx.fillStyle = test.fillColor;\n    ctx.beginPath();\n    ctx.arc(test.x, test.y, test.radius, 0, 2 * Math.PI);\n    ctx.fill();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 141,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qm1DLENBQUc7Z0NBQUNFLFNBQVMsRUFBRXJDLGdGQUFxQjswQ0FBRSxDQUV2Qzs7Ozs7O3dHQUNDbUMsQ0FBRztnQ0FBQ0UsU0FBUyxFQUFFckMsOEVBQW1COzBDQUFFLENBR3JDOzs7Ozs7Ozs7Ozs7Z0dBRURtQyxDQUFHO3dCQUFDRSxTQUFTLEVBQUVyQyw0RUFBaUI7OEdBQ2hDRCwwREFBTTs0QkFBQ3NDLFNBQVMsRUFBRXJDLGtGQUF1Qjs0QkFBRXNCLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR3ZEYyxDQUFPO2dCQUFDVSxLQUFLLEVBQUMsQ0FBWTtnQkFBQ1QsU0FBUyxFQUFFckMsNEVBQWlCOzs7Ozs7Ozs7Ozs7QUFLOUQsQ0FBQztNQXBDdUJrQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0JhY2tncm91bmRcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuaW1wb3J0IExhbmRpbmdQYWdlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2VOYXYnXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9jb21wb25lbnRzL0NhbnZhc1wiO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgZHJhd0RhdGEgPSBbXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtMScsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDIwLFxuICAgIHg6IDI1MCxcbiAgICB5OiAyNTAgXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtMicsXG4gICAgc3Ryb2tlOiB0cnVlLFxuICAgIHN0cm9rZUNvbG9yOiAnIzFhMWExYScsXG4gICAgbGluZVdpZHRoOiAyLFxuICAgIHJhZGl1czogODAsXG4gICAgeDogMjUwLFxuICAgIHk6IDI1MFxuICB9LFxuICB7XG4gICAgdGFnOiAnY2lyY2xlLTMnLFxuICAgIGZpbGw6IHRydWUsXG4gICAgZmlsbENvbG9yOiAnIzFhMWExYScsXG4gICAgcmFkaXVzOiAxMCxcbiAgICB4OiAxNzAsXG4gICAgeTogMTYwXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtNCcsXG4gICAgc3Ryb2tlOiB0cnVlLFxuICAgIHN0cm9rZUNvbG9yOiAnIzFhMWExYScsXG4gICAgcmFkaXVzOiA0MCxcbiAgICB4OiAxNzAsXG4gICAgeTogMTYwXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtNScsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAzNDBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS02JyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDQwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAzNDBcbiAgfVxuXTtcblxuY29uc3QgY2lyY2xlID0gKGN0eCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBmaWxsQ29sb3IgPSBvcHRpb25zLmZpbGxDb2xvciB8fCAnI2ZmZmZmZic7XG4gIGNvbnN0IHN0cm9rZUNvbG9yID0gb3B0aW9ucy5zdHJva2VDb2xvciB8fCAnI2ZmZmZmZic7XG4gIGNvbnN0IGZpbGwgPSBvcHRpb25zLmZpbGwgfHwgZmFsc2U7XG4gIGNvbnN0IHN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlIHx8IGZhbHNlO1xuICBjb25zdCByYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCAxMDtcbiAgY29uc3QgeCA9IG9wdGlvbnMueCB8fCAxMDtcbiAgY29uc3QgeSA9IG9wdGlvbnMueSB8fCAxMDtcbiAgY29uc3QgbGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGggfHwgMjtcblxuICBpZiAoZmlsbCA9PSB0cnVlKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIqTWF0aC5QSSlcbiAgICBjdHguZmlsbCgpXG4gIH1cblxuICBpZiAoc3Ryb2tlID09IHRydWUpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXcgPSAoY3R4LCBmcmFtZUNvdW50KSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG5cbiAgY29uc3QgZHggPSAxIC8gMTAwO1xuXG4gIGRyYXdEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjaXJjbGUoY3R4LCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgY29uc3QgdGVzdCA9IHtcbiAgICB0YWc6ICdjaXJjbGUtNycsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjYzE2ZTcwJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDMzMCAtIGZyYW1lQ291bnQsXG4gICAgeTogMjUwIC0gTWF0aC5zcXJ0KDgwIC0gTWF0aC5wb3dlcigzMzAgLSBmcmFtZUNvdW50LCAyKSlcbiAgfVxuXG4gIGN0eC5maWxsU3R5bGUgPSB0ZXN0LmZpbGxDb2xvcjtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHRlc3QueCwgdGVzdC55LCB0ZXN0LnJhZGl1cywgMCwgMipNYXRoLlBJKVxuICBjdHguZmlsbCgpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExhbmRpbmdQYWdlTmF2IC8+XG4gICAgICA8QmFja2dyb3VuZCAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5sYW5kaW5nUGFnZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX193cmFwcGVyfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fbWFpbn0+QXRvbWljPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19wcm9udW5jaWF0aW9ufT5byZl0w6RtaWtdPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19hZGplY3RpdmV9PmFkai48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2RlZmluaXRpb259PlxuICAgICAgICAgIG9mIG9yIGZvcm1pbmcgYSBzaW5nbGUgaXJyZWR1Y2libGUgdW5pdCBvciBjb21wb25lbnQgaW4gYSBsYXJnZXIgc3lzdGVtLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIHRpdGxlPVwiYWJvdXRcIiBjbGFzc05hbWU9e3N0eWxlLmFib3V0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFib3V0VGV4dH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFib3V0VGV4dEhlYWRlcn0+XG4gICAgICAgICAgICBMZWFybiBmcm9tIGZpcnN0IHByaW5jaXBsZXMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFib3V0VGV4dEJvZHl9PlxuICAgICAgICAgICAgQXRvbXMgYXJlIHRoZSBzbWFsbGVzdCBmdW5jdGlvbmFsIHVuaXRzIG9mIG1hdHRlciBmcm9tIHdoaWNoIGV2ZXJ5dGhpbmcgZWxzZSBpcyBidWlsdCB1cG9uLlxuICAgICAgICAgICAgQXRvbWljIHdhcyBidWlsdCBvbiB0aGVzZSBwcmluY2lwbGVzLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFib3V0RmlndXJlfT5cbiAgICAgICAgPENhbnZhcyBjbGFzc05hbWU9e3N0eWxlLmFib3V0RmlndXJlQ2FudmFzfSBkcmF3PXtkcmF3fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIHRpdGxlPVwiZ2V0U3RhcnRlZFwiIGNsYXNzTmFtZT17c3R5bGUubGFuZGluZ1BhZ2V9PlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIkxhbmRpbmdQYWdlTmF2IiwiQ2FudmFzIiwic3R5bGUiLCJCYWNrZ3JvdW5kIiwic3NyIiwiZHJhd0RhdGEiLCJ0YWciLCJmaWxsIiwiZmlsbENvbG9yIiwicmFkaXVzIiwieCIsInkiLCJzdHJva2UiLCJzdHJva2VDb2xvciIsImxpbmVXaWR0aCIsImNpcmNsZSIsImN0eCIsIm9wdGlvbnMiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VTdHlsZSIsImRyYXciLCJmcmFtZUNvdW50IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJkeCIsImZvckVhY2giLCJlbGVtZW50IiwidGVzdCIsInNxcnQiLCJwb3dlciIsIkhvbWUiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibGFuZGluZ1BhZ2UiLCJhdG9taWNEZWZpbml0aW9uX19jb250YWluZXIiLCJhdG9taWNEZWZpbml0aW9uX193cmFwcGVyIiwic3BhbiIsImF0b21pY0RlZmluaXRpb25fX21haW4iLCJhdG9taWNEZWZpbml0aW9uX19wcm9udW5jaWF0aW9uIiwiYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlIiwiYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbiIsInRpdGxlIiwiYWJvdXQiLCJhYm91dFRleHQiLCJhYm91dFRleHRIZWFkZXIiLCJhYm91dFRleHRCb2R5IiwiYWJvdXRGaWd1cmUiLCJhYm91dEZpZ3VyZUNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});