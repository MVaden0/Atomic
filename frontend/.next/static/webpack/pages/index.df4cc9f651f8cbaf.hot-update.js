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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-2',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        lineWidth: 2,\n        radius: 80,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-3',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-4',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-5',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 340\n    },\n    {\n        tag: 'circle-6',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 340\n    }\n];\nvar circle = function(ctx, options) {\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    var dx = 1 / 100;\n    drawData.forEach(function(element) {\n        circle(ctx, element);\n    });\n    var test = {\n        tag: 'circle-7',\n        fill: true,\n        fillColor: '#c16e70',\n        radius: 10,\n        x: 330,\n        y: 250\n    };\n    // radius: 2 * Math.PI * 100% * 80 = 2 * Math.PI; * 80\n    // 2 * Math.PI * percent% * 80 = 1\n    var dTheta = frameCount / 160;\n    var dX = Math.cos(dTheta) * 80;\n    var dY = Math.sin(dTheta) * 80;\n    ctx.fillStyle = test.fillColor;\n    ctx.beginPath();\n    ctx.arc(250 - dX, 250 - dY, test.radius, 0, 2 * Math.PI);\n    ctx.fill();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 147,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO2dCQUFDVSxLQUFLLEVBQUMsQ0FBTztnQkFBQ1QsU0FBUyxFQUFFeEMsc0VBQVc7O2dHQUMxQ3NDLENBQUc7d0JBQUNFLFNBQVMsRUFBRXhDLDBFQUFlOzt3R0FDNUJzQyxDQUFHO2dDQUFDRSxTQUFTLEVBQUV4QyxnRkFBcUI7MENBQUUsQ0FFdkM7Ozs7Ozt3R0FDQ3NDLENBQUc7Z0NBQUNFLFNBQVMsRUFBRXhDLDhFQUFtQjswQ0FBRSxDQUdyQzs7Ozs7Ozs7Ozs7O2dHQUVEc0MsQ0FBRzt3QkFBQ0UsU0FBUyxFQUFFeEMsNEVBQWlCOzhHQUNoQ0QsMERBQU07NEJBQUN5QyxTQUFTLEVBQUV4QyxrRkFBdUI7NEJBQUVzQixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUd2RGlCLENBQU87Z0JBQUNVLEtBQUssRUFBQyxDQUFZO2dCQUFDVCxTQUFTLEVBQUV4Qyw0RUFBaUI7Ozs7Ozs7Ozs7OztBQUs5RCxDQUFDO01BcEN1QnFDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEJhY2tncm91bmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQmFja2dyb3VuZFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgTGFuZGluZ1BhZ2VOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kaW5nUGFnZU5hdidcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FudmFzXCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBkcmF3RGF0YSA9IFtcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0xJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMjAsXG4gICAgeDogMjUwLFxuICAgIHk6IDI1MCBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0yJyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgcmFkaXVzOiA4MCxcbiAgICB4OiAyNTAsXG4gICAgeTogMjUwXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtMycsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS00JyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDQwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS01JyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMTAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9LFxuICB7XG4gICAgdGFnOiAnY2lyY2xlLTYnLFxuICAgIHN0cm9rZTogdHJ1ZSxcbiAgICBzdHJva2VDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogNDAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9XG5dO1xuXG5jb25zdCBjaXJjbGUgPSAoY3R4LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZpbGxDb2xvciA9IG9wdGlvbnMuZmlsbENvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBvcHRpb25zLnN0cm9rZUNvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3QgZmlsbCA9IG9wdGlvbnMuZmlsbCB8fCBmYWxzZTtcbiAgY29uc3Qgc3Ryb2tlID0gb3B0aW9ucy5zdHJva2UgfHwgZmFsc2U7XG4gIGNvbnN0IHJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDEwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDEwO1xuICBjb25zdCB5ID0gb3B0aW9ucy55IHx8IDEwO1xuICBjb25zdCBsaW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCB8fCAyO1xuXG4gIGlmIChmaWxsID09IHRydWUpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJKVxuICAgIGN0eC5maWxsKClcbiAgfVxuXG4gIGlmIChzdHJva2UgPT0gdHJ1ZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyKk1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufTtcblxuY29uc3QgZHJhdyA9IChjdHgsIGZyYW1lQ291bnQpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcblxuICBjb25zdCBkeCA9IDEgLyAxMDA7XG5cbiAgZHJhd0RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNpcmNsZShjdHgsIGVsZW1lbnQpO1xuICB9KTtcblxuICBjb25zdCB0ZXN0ID0ge1xuICAgIHRhZzogJ2NpcmNsZS03JyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyNjMTZlNzAnLFxuICAgIHJhZGl1czogMTAsXG4gICAgeDogMzMwLFxuICAgIHk6IDI1MFxuICB9XG5cbiAgLy8gcmFkaXVzOiAyICogTWF0aC5QSSAqIDEwMCUgKiA4MCA9IDIgKiBNYXRoLlBJOyAqIDgwXG4gIC8vIDIgKiBNYXRoLlBJICogcGVyY2VudCUgKiA4MCA9IDFcbiAgY29uc3QgZFRoZXRhID0gZnJhbWVDb3VudCAvIDE2MDtcbiAgY29uc3QgZFggPSBNYXRoLmNvcyhkVGhldGEpICogODA7XG4gIGNvbnN0IGRZID0gTWF0aC5zaW4oZFRoZXRhKSAqIDgwO1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0ZXN0LmZpbGxDb2xvcjtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKDI1MCAtIGRYLCAyNTAgLSBkWSwgdGVzdC5yYWRpdXMsIDAsIDIqTWF0aC5QSSlcbiAgY3R4LmZpbGwoKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYW5kaW5nUGFnZU5hdiAvPlxuICAgICAgPEJhY2tncm91bmQgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubGFuZGluZ1BhZ2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fd3JhcHBlcn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX21haW59PkF0b21pYzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fcHJvbnVuY2lhdGlvbn0+W8mZdMOkbWlrXTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlfT5hZGouPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19kZWZpbml0aW9ufT5cbiAgICAgICAgICBvZiBvciBmb3JtaW5nIGEgc2luZ2xlIGlycmVkdWNpYmxlIHVuaXQgb3IgY29tcG9uZW50IGluIGEgbGFyZ2VyIHN5c3RlbS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0aXRsZT1cImFib3V0XCIgY2xhc3NOYW1lPXtzdHlsZS5hYm91dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHRIZWFkZXJ9PlxuICAgICAgICAgICAgTGVhcm4gZnJvbSBmaXJzdCBwcmluY2lwbGVzLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHRCb2R5fT5cbiAgICAgICAgICAgIEF0b21zIGFyZSB0aGUgc21hbGxlc3QgZnVuY3Rpb25hbCB1bml0cyBvZiBtYXR0ZXIgZnJvbSB3aGljaCBldmVyeXRoaW5nIGVsc2UgaXMgYnVpbHQgdXBvbi5cbiAgICAgICAgICAgIEF0b21pYyB3YXMgYnVpbHQgb24gdGhlc2UgcHJpbmNpcGxlcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dEZpZ3VyZX0+XG4gICAgICAgIDxDYW52YXMgY2xhc3NOYW1lPXtzdHlsZS5hYm91dEZpZ3VyZUNhbnZhc30gZHJhdz17ZHJhd30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0aXRsZT1cImdldFN0YXJ0ZWRcIiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmdQYWdlfT5cblxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJMYW5kaW5nUGFnZU5hdiIsIkNhbnZhcyIsInN0eWxlIiwiQmFja2dyb3VuZCIsInNzciIsImRyYXdEYXRhIiwidGFnIiwiZmlsbCIsImZpbGxDb2xvciIsInJhZGl1cyIsIngiLCJ5Iiwic3Ryb2tlIiwic3Ryb2tlQ29sb3IiLCJsaW5lV2lkdGgiLCJjaXJjbGUiLCJjdHgiLCJvcHRpb25zIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZnJhbWVDb3VudCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZHgiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRlc3QiLCJkVGhldGEiLCJkWCIsImNvcyIsImRZIiwic2luIiwiSG9tZSIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsYW5kaW5nUGFnZSIsImF0b21pY0RlZmluaXRpb25fX2NvbnRhaW5lciIsImF0b21pY0RlZmluaXRpb25fX3dyYXBwZXIiLCJzcGFuIiwiYXRvbWljRGVmaW5pdGlvbl9fbWFpbiIsImF0b21pY0RlZmluaXRpb25fX3Byb251bmNpYXRpb24iLCJhdG9taWNEZWZpbml0aW9uX19hZGplY3RpdmUiLCJhdG9taWNEZWZpbml0aW9uX19kZWZpbml0aW9uIiwidGl0bGUiLCJhYm91dCIsImFib3V0VGV4dCIsImFib3V0VGV4dEhlYWRlciIsImFib3V0VGV4dEJvZHkiLCJhYm91dEZpZ3VyZSIsImFib3V0RmlndXJlQ2FudmFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});