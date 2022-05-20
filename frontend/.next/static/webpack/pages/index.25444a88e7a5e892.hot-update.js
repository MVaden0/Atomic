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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-2',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        lineWidth: 2,\n        radius: 80,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-3',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-4',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-5',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 340\n    },\n    {\n        tag: 'circle-6',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 340\n    }\n];\nvar circle = function(ctx, options) {\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    var dx = 1 / 100;\n    drawData.forEach(function(element) {\n        circle(ctx, element);\n    });\n    var test = {\n        tag: 'circle-7',\n        fill: true,\n        fillColor: '#c16e70',\n        radius: 10,\n        x: 330 - frameCount,\n        y: 250 - Math.sqrt(Math.pow(80, 2) - Math.pow(80 - frameCount, 2))\n    };\n    // radius: 2 * Math.PI * 100% * 80 = 2 * Math.PI; * 80\n    // 2 * Math.PI * percent% * 80 = 1\n    ctx.fillStyle = test.fillColor;\n    ctx.beginPath();\n    ctx.arc(test.x, test.y, test.radius, 0, 2 * Math.PI);\n    ctx.fill();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 144,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJDLHNFQUFXOztnR0FDMUNtQyxDQUFHO3dCQUFDRSxTQUFTLEVBQUVyQywwRUFBZTs7d0dBQzVCbUMsQ0FBRztnQ0FBQ0UsU0FBUyxFQUFFckMsZ0ZBQXFCOzBDQUFFLENBRXZDOzs7Ozs7d0dBQ0NtQyxDQUFHO2dDQUFDRSxTQUFTLEVBQUVyQyw4RUFBbUI7MENBQUUsQ0FHckM7Ozs7Ozs7Ozs7OztnR0FFRG1DLENBQUc7d0JBQUNFLFNBQVMsRUFBRXJDLDRFQUFpQjs4R0FDaENELDBEQUFNOzRCQUFDc0MsU0FBUyxFQUFFckMsa0ZBQXVCOzRCQUFFc0IsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHdkRjLENBQU87Z0JBQUNVLEtBQUssRUFBQyxDQUFZO2dCQUFDVCxTQUFTLEVBQUVyQyw0RUFBaUI7Ozs7Ozs7Ozs7OztBQUs5RCxDQUFDO01BcEN1QmtDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEJhY2tncm91bmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQmFja2dyb3VuZFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgTGFuZGluZ1BhZ2VOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kaW5nUGFnZU5hdidcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FudmFzXCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBkcmF3RGF0YSA9IFtcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0xJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMjAsXG4gICAgeDogMjUwLFxuICAgIHk6IDI1MCBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0yJyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgcmFkaXVzOiA4MCxcbiAgICB4OiAyNTAsXG4gICAgeTogMjUwXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtMycsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS00JyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDQwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS01JyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMTAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9LFxuICB7XG4gICAgdGFnOiAnY2lyY2xlLTYnLFxuICAgIHN0cm9rZTogdHJ1ZSxcbiAgICBzdHJva2VDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogNDAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9XG5dO1xuXG5jb25zdCBjaXJjbGUgPSAoY3R4LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZpbGxDb2xvciA9IG9wdGlvbnMuZmlsbENvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBvcHRpb25zLnN0cm9rZUNvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3QgZmlsbCA9IG9wdGlvbnMuZmlsbCB8fCBmYWxzZTtcbiAgY29uc3Qgc3Ryb2tlID0gb3B0aW9ucy5zdHJva2UgfHwgZmFsc2U7XG4gIGNvbnN0IHJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDEwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDEwO1xuICBjb25zdCB5ID0gb3B0aW9ucy55IHx8IDEwO1xuICBjb25zdCBsaW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCB8fCAyO1xuXG4gIGlmIChmaWxsID09IHRydWUpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJKVxuICAgIGN0eC5maWxsKClcbiAgfVxuXG4gIGlmIChzdHJva2UgPT0gdHJ1ZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyKk1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufTtcblxuY29uc3QgZHJhdyA9IChjdHgsIGZyYW1lQ291bnQpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcblxuICBjb25zdCBkeCA9IDEgLyAxMDA7XG5cbiAgZHJhd0RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNpcmNsZShjdHgsIGVsZW1lbnQpO1xuICB9KTtcblxuICBjb25zdCB0ZXN0ID0ge1xuICAgIHRhZzogJ2NpcmNsZS03JyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNjMTZlNzAnLFxuICAgIHJhZGl1czogMTAsXG4gICAgeDogMzMwIC0gZnJhbWVDb3VudCxcbiAgICB5OiAyNTAgLSBNYXRoLnNxcnQoTWF0aC5wb3coODAsIDIpIC0gTWF0aC5wb3coODAgLSBmcmFtZUNvdW50LCAyKSlcbiAgfVxuXG4gIC8vIHJhZGl1czogMiAqIE1hdGguUEkgKiAxMDAlICogODAgPSAyICogTWF0aC5QSTsgKiA4MFxuICAvLyAyICogTWF0aC5QSSAqIHBlcmNlbnQlICogODAgPSAxXG5cbiAgY3R4LmZpbGxTdHlsZSA9IHRlc3QuZmlsbENvbG9yO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmModGVzdC54LCB0ZXN0LnksIHRlc3QucmFkaXVzLCAwLCAyKk1hdGguUEkpXG4gIGN0eC5maWxsKClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGFuZGluZ1BhZ2VOYXYgLz5cbiAgICAgIDxCYWNrZ3JvdW5kIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmdQYWdlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX3dyYXBwZXJ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19tYWlufT5BdG9taWM8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX3Byb251bmNpYXRpb259PlvJmXTDpG1pa108L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2FkamVjdGl2ZX0+YWRqLjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbn0+XG4gICAgICAgICAgb2Ygb3IgZm9ybWluZyBhIHNpbmdsZSBpcnJlZHVjaWJsZSB1bml0IG9yIGNvbXBvbmVudCBpbiBhIGxhcmdlciBzeXN0ZW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdGl0bGU9XCJhYm91dFwiIGNsYXNzTmFtZT17c3R5bGUuYWJvdXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0SGVhZGVyfT5cbiAgICAgICAgICAgIExlYXJuIGZyb20gZmlyc3QgcHJpbmNpcGxlcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0Qm9keX0+XG4gICAgICAgICAgICBBdG9tcyBhcmUgdGhlIHNtYWxsZXN0IGZ1bmN0aW9uYWwgdW5pdHMgb2YgbWF0dGVyIGZyb20gd2hpY2ggZXZlcnl0aGluZyBlbHNlIGlzIGJ1aWx0IHVwb24uXG4gICAgICAgICAgICBBdG9taWMgd2FzIGJ1aWx0IG9uIHRoZXNlIHByaW5jaXBsZXMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRGaWd1cmV9PlxuICAgICAgICA8Q2FudmFzIGNsYXNzTmFtZT17c3R5bGUuYWJvdXRGaWd1cmVDYW52YXN9IGRyYXc9e2RyYXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdGl0bGU9XCJnZXRTdGFydGVkXCIgY2xhc3NOYW1lPXtzdHlsZS5sYW5kaW5nUGFnZX0+XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiTGFuZGluZ1BhZ2VOYXYiLCJDYW52YXMiLCJzdHlsZSIsIkJhY2tncm91bmQiLCJzc3IiLCJkcmF3RGF0YSIsInRhZyIsImZpbGwiLCJmaWxsQ29sb3IiLCJyYWRpdXMiLCJ4IiwieSIsInN0cm9rZSIsInN0cm9rZUNvbG9yIiwibGluZVdpZHRoIiwiY2lyY2xlIiwiY3R4Iiwib3B0aW9ucyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImZyYW1lQ291bnQiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImR4IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0ZXN0Iiwic3FydCIsInBvdyIsIkhvbWUiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibGFuZGluZ1BhZ2UiLCJhdG9taWNEZWZpbml0aW9uX19jb250YWluZXIiLCJhdG9taWNEZWZpbml0aW9uX193cmFwcGVyIiwic3BhbiIsImF0b21pY0RlZmluaXRpb25fX21haW4iLCJhdG9taWNEZWZpbml0aW9uX19wcm9udW5jaWF0aW9uIiwiYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlIiwiYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbiIsInRpdGxlIiwiYWJvdXQiLCJhYm91dFRleHQiLCJhYm91dFRleHRIZWFkZXIiLCJhYm91dFRleHRCb2R5IiwiYWJvdXRGaWd1cmUiLCJhYm91dEZpZ3VyZUNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});