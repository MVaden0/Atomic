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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    }\n];\nvar circle = function(ctx, options) {\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    drawData.forEach(function(element) {\n        //circle(element);\n        alert(typeof element === \"undefined\" ? \"undefined\" : _typeof(element));\n    });\n    ctx.strokeStyle = '#1a1a1a';\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.arc(250, 250, 80, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = '#1a1a1a';\n    ctx.beginPath();\n    ctx.arc(170, 160, 10, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.strokeStyle = '#1a1a1a';\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.arc(170, 160, 40, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = '#1a1a1a';\n    ctx.beginPath();\n    ctx.arc(170, 340, 10, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.strokeStyle = '#1a1a1a';\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.arc(170, 340, 40, 0, 2 * Math.PI);\n    ctx.stroke();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 112,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUl1QjtBQUNoQjtBQUVJO0FBTDdDLEdBQUssQ0FBQ0ksVUFBVSxHQUFHSixtREFBTyxDQUFDLFFBQVE7V0FBRixtTEFBaUM7Ozs7Ozs7SUFBS0ssR0FBRyxFQUFFLEtBQUs7O0tBQTNFRCxVQUFVO0FBT2hCLEdBQUssQ0FBQ0UsUUFBUSxHQUFHLENBQUM7SUFDaEIsQ0FBQztRQUNDQyxHQUFHLEVBQUUsQ0FBVTtRQUNmQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxTQUFTLEVBQUUsQ0FBUztRQUNwQkMsTUFBTSxFQUFFLEVBQUU7UUFDVkMsQ0FBQyxFQUFFLEdBQUc7UUFDTkMsQ0FBQyxFQUFFLEdBQUc7SUFDUixDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsQ0FBUEMsR0FBRyxFQUFFQyxPQUFPLEVBQUssQ0FBQztJQUNoQyxHQUFLLENBQUNOLFNBQVMsR0FBR00sT0FBTyxDQUFDTixTQUFTLElBQUksQ0FBUztJQUNoRCxHQUFLLENBQUNPLFdBQVcsR0FBR0QsT0FBTyxDQUFDQyxXQUFXLElBQUksQ0FBUztJQUNwRCxHQUFLLENBQUNSLElBQUksR0FBR08sT0FBTyxDQUFDUCxJQUFJLElBQUksS0FBSztJQUNsQyxHQUFLLENBQUNTLE1BQU0sR0FBR0YsT0FBTyxDQUFDRSxNQUFNLElBQUksS0FBSztJQUN0QyxHQUFLLENBQUNQLE1BQU0sR0FBR0ssT0FBTyxDQUFDTCxNQUFNLElBQUksRUFBRTtJQUNuQyxHQUFLLENBQUNDLENBQUMsR0FBR0ksT0FBTyxDQUFDSixDQUFDLElBQUksRUFBRTtJQUN6QixHQUFLLENBQUNDLENBQUMsR0FBR0csT0FBTyxDQUFDSCxDQUFDLElBQUksRUFBRTtJQUN6QixHQUFLLENBQUNNLFNBQVMsR0FBR0gsT0FBTyxDQUFDRyxTQUFTLElBQUksQ0FBQztJQUV4QyxFQUFFLEVBQUVWLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQk0sR0FBRyxDQUFDSyxTQUFTLEdBQUdWLFNBQVMsQ0FBQztRQUMxQkssR0FBRyxDQUFDTSxTQUFTLEVBQUUsQ0FBQztRQUNoQk4sR0FBRyxDQUFDTyxHQUFHLENBQUNWLENBQUMsRUFBRUMsQ0FBQyxFQUFFRixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQ1ksSUFBSSxDQUFDQyxFQUFFO1FBQ2xDVCxHQUFHLENBQUNOLElBQUk7SUFDVixDQUFDO0lBRUQsRUFBRSxFQUFFUyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkJILEdBQUcsQ0FBQ1UsV0FBVyxHQUFHUixXQUFXLENBQUM7UUFDOUJGLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHQSxTQUFTLENBQUM7UUFDMUJKLEdBQUcsQ0FBQ00sU0FBUyxFQUFFLENBQUM7UUFDaEJOLEdBQUcsQ0FBQ08sR0FBRyxDQUFDVixDQUFDLEVBQUVDLENBQUMsRUFBRUYsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNZLElBQUksQ0FBQ0MsRUFBRSxDQUFDLENBQUM7UUFDcENULEdBQUcsQ0FBQ0csTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ1EsSUFBSSxHQUFHLFFBQVEsQ0FBUFgsR0FBRyxFQUFFWSxVQUFVLEVBQUssQ0FBQztJQUNqQ1osR0FBRyxDQUFDYSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWIsR0FBRyxDQUFDYyxNQUFNLENBQUNDLEtBQUssRUFBRWYsR0FBRyxDQUFDYyxNQUFNLENBQUNFLE1BQU07SUFFdkR4QixRQUFRLENBQUN5QixPQUFPLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztRQUM3QixFQUFrQjtRQUNsQkMsS0FBSyxRQUFRRCxPQUFPLGlDQUFkLE9BQWMsQ0FBUEEsT0FBTztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUVIbEIsR0FBRyxDQUFDVSxXQUFXLEdBQUcsQ0FBUztJQUMzQlYsR0FBRyxDQUFDSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCSixHQUFHLENBQUNNLFNBQVM7SUFDYk4sR0FBRyxDQUFDTyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQ0MsSUFBSSxDQUFDQyxFQUFFO0lBQ2xDVCxHQUFHLENBQUNHLE1BQU07SUFFVkgsR0FBRyxDQUFDSyxTQUFTLEdBQUcsQ0FBUztJQUN6QkwsR0FBRyxDQUFDTSxTQUFTO0lBQ2JOLEdBQUcsQ0FBQ08sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNDLElBQUksQ0FBQ0MsRUFBRTtJQUNsQ1QsR0FBRyxDQUFDTixJQUFJO0lBRVJNLEdBQUcsQ0FBQ1UsV0FBVyxHQUFHLENBQVM7SUFDM0JWLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQkosR0FBRyxDQUFDTSxTQUFTO0lBQ2JOLEdBQUcsQ0FBQ08sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNDLElBQUksQ0FBQ0MsRUFBRTtJQUNsQ1QsR0FBRyxDQUFDRyxNQUFNO0lBRVZILEdBQUcsQ0FBQ0ssU0FBUyxHQUFHLENBQVM7SUFDekJMLEdBQUcsQ0FBQ00sU0FBUztJQUNiTixHQUFHLENBQUNPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDQyxJQUFJLENBQUNDLEVBQUU7SUFDbENULEdBQUcsQ0FBQ04sSUFBSTtJQUVSTSxHQUFHLENBQUNVLFdBQVcsR0FBRyxDQUFTO0lBQzNCVixHQUFHLENBQUNJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEJKLEdBQUcsQ0FBQ00sU0FBUztJQUNiTixHQUFHLENBQUNPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDQyxJQUFJLENBQUNDLEVBQUU7SUFDbENULEdBQUcsQ0FBQ0csTUFBTTtBQUNaLENBQUM7QUFFYyxRQUFRLENBQUNpQixJQUFJLEdBQUcsQ0FBQztJQUM5QixNQUFNLDZFQUNIQyxDQUFHOzt3RkFDRGxDLGtFQUFjOzs7Ozt3RkFDZEcsVUFBVTs7Ozs7d0ZBQ1ZnQyxDQUFPO2dCQUFDQyxTQUFTLEVBQUVsQyw0RUFBaUI7c0dBQ2xDZ0MsQ0FBRztvQkFBQ0UsU0FBUyxFQUFFbEMsNEZBQWlDOztvR0FDOUNnQyxDQUFHOzRCQUFDRSxTQUFTLEVBQUVsQywwRkFBK0I7OzRHQUM1Q3NDLENBQUk7b0NBQUNKLFNBQVMsRUFBRWxDLHVGQUE0Qjs4Q0FBRSxDQUFNOzs7Ozs7NEdBQ3BEc0MsQ0FBSTtvQ0FBQ0osU0FBUyxFQUFFbEMsZ0dBQXFDOzhDQUFFLENBQVE7Ozs7Ozs0R0FDL0RzQyxDQUFJO29DQUFDSixTQUFTLEVBQUVsQyw0RkFBaUM7OENBQUUsQ0FBSTs7Ozs7Ozs7Ozs7O29HQUV6RGdDLENBQUc7NEJBQUNFLFNBQVMsRUFBRWxDLDZGQUFrQztzQ0FBRSxDQUVwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR0hpQyxDQUFPO2dCQUFDVSxLQUFLLEVBQUMsQ0FBTztnQkFBQ1QsU0FBUyxFQUFFbEMsc0VBQVc7O2dHQUMxQ2dDLENBQUc7d0JBQUNFLFNBQVMsRUFBRWxDLDBFQUFlOzt3R0FDNUJnQyxDQUFHO2dDQUFDRSxTQUFTLEVBQUVsQyxnRkFBcUI7MENBQUUsQ0FFdkM7Ozs7Ozt3R0FDQ2dDLENBQUc7Z0NBQUNFLFNBQVMsRUFBRWxDLDhFQUFtQjswQ0FBRSxDQUdyQzs7Ozs7Ozs7Ozs7O2dHQUVEZ0MsQ0FBRzt3QkFBQ0UsU0FBUyxFQUFFbEMsNEVBQWlCOzhHQUNoQ0QsMERBQU07NEJBQUNtQyxTQUFTLEVBQUVsQyxrRkFBdUI7NEJBQUVzQixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUd2RFcsQ0FBTztnQkFBQ1UsS0FBSyxFQUFDLENBQVk7Z0JBQUNULFNBQVMsRUFBRWxDLDRFQUFpQjs7Ozs7Ozs7Ozs7O0FBSzlELENBQUM7TUFwQ3VCK0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgQmFja2dyb3VuZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9CYWNrZ3JvdW5kXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmltcG9ydCBMYW5kaW5nUGFnZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL0xhbmRpbmdQYWdlTmF2J1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW52YXNcIjtcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGRyYXdEYXRhID0gW1xuICB7XG4gICAgdGFnOiAnY2lyY2xlLTEnLFxuICAgIGZpbGw6IHRydWUsXG4gICAgZmlsbENvbG9yOiAnIzFhMWExYScsXG4gICAgcmFkaXVzOiAyMCxcbiAgICB4OiAyNTAsXG4gICAgeTogMjUwIFxuICB9XG5dO1xuXG5jb25zdCBjaXJjbGUgPSAoY3R4LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZpbGxDb2xvciA9IG9wdGlvbnMuZmlsbENvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBvcHRpb25zLnN0cm9rZUNvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3QgZmlsbCA9IG9wdGlvbnMuZmlsbCB8fCBmYWxzZTtcbiAgY29uc3Qgc3Ryb2tlID0gb3B0aW9ucy5zdHJva2UgfHwgZmFsc2U7XG4gIGNvbnN0IHJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDEwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDEwO1xuICBjb25zdCB5ID0gb3B0aW9ucy55IHx8IDEwO1xuICBjb25zdCBsaW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCB8fCAyO1xuXG4gIGlmIChmaWxsID09IHRydWUpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJKVxuICAgIGN0eC5maWxsKClcbiAgfVxuXG4gIGlmIChzdHJva2UgPT0gdHJ1ZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyKk1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufTtcblxuY29uc3QgZHJhdyA9IChjdHgsIGZyYW1lQ291bnQpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcblxuICBkcmF3RGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy9jaXJjbGUoZWxlbWVudCk7XG4gICAgYWxlcnQodHlwZW9mIGVsZW1lbnQpXG4gIH0pO1xuXG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjMWExYTFhJ1xuICBjdHgubGluZVdpZHRoID0gMjtcbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5hcmMoMjUwLCAyNTAsIDgwLCAwLCAyKk1hdGguUEkpXG4gIGN0eC5zdHJva2UoKVxuXG4gIGN0eC5maWxsU3R5bGUgPSAnIzFhMWExYSdcbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5hcmMoMTcwLCAxNjAsIDEwLCAwLCAyKk1hdGguUEkpXG4gIGN0eC5maWxsKClcblxuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzFhMWExYSdcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5iZWdpblBhdGgoKVxuICBjdHguYXJjKDE3MCwgMTYwLCA0MCwgMCwgMipNYXRoLlBJKVxuICBjdHguc3Ryb2tlKClcblxuICBjdHguZmlsbFN0eWxlID0gJyMxYTFhMWEnXG4gIGN0eC5iZWdpblBhdGgoKVxuICBjdHguYXJjKDE3MCwgMzQwLCAxMCwgMCwgMipNYXRoLlBJKVxuICBjdHguZmlsbCgpXG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gJyMxYTFhMWEnXG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYygxNzAsIDM0MCwgNDAsIDAsIDIqTWF0aC5QSSlcbiAgY3R4LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYW5kaW5nUGFnZU5hdiAvPlxuICAgICAgPEJhY2tncm91bmQgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubGFuZGluZ1BhZ2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fd3JhcHBlcn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX21haW59PkF0b21pYzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fcHJvbnVuY2lhdGlvbn0+W8mZdMOkbWlrXTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlfT5hZGouPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19kZWZpbml0aW9ufT5cbiAgICAgICAgICBvZiBvciBmb3JtaW5nIGEgc2luZ2xlIGlycmVkdWNpYmxlIHVuaXQgb3IgY29tcG9uZW50IGluIGEgbGFyZ2VyIHN5c3RlbS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0aXRsZT1cImFib3V0XCIgY2xhc3NOYW1lPXtzdHlsZS5hYm91dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHRIZWFkZXJ9PlxuICAgICAgICAgICAgTGVhcm4gZnJvbSBmaXJzdCBwcmluY2lwbGVzLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHRCb2R5fT5cbiAgICAgICAgICAgIEF0b21zIGFyZSB0aGUgc21hbGxlc3QgZnVuY3Rpb25hbCB1bml0cyBvZiBtYXR0ZXIgZnJvbSB3aGljaCBldmVyeXRoaW5nIGVsc2UgaXMgYnVpbHQgdXBvbi5cbiAgICAgICAgICAgIEF0b21pYyB3YXMgYnVpbHQgb24gdGhlc2UgcHJpbmNpcGxlcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dEZpZ3VyZX0+XG4gICAgICAgIDxDYW52YXMgY2xhc3NOYW1lPXtzdHlsZS5hYm91dEZpZ3VyZUNhbnZhc30gZHJhdz17ZHJhd30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0aXRsZT1cImdldFN0YXJ0ZWRcIiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmdQYWdlfT5cblxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJMYW5kaW5nUGFnZU5hdiIsIkNhbnZhcyIsInN0eWxlIiwiQmFja2dyb3VuZCIsInNzciIsImRyYXdEYXRhIiwidGFnIiwiZmlsbCIsImZpbGxDb2xvciIsInJhZGl1cyIsIngiLCJ5IiwiY2lyY2xlIiwiY3R4Iiwib3B0aW9ucyIsInN0cm9rZUNvbG9yIiwic3Ryb2tlIiwibGluZVdpZHRoIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZnJhbWVDb3VudCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhbGVydCIsIkhvbWUiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibGFuZGluZ1BhZ2UiLCJhdG9taWNEZWZpbml0aW9uX19jb250YWluZXIiLCJhdG9taWNEZWZpbml0aW9uX193cmFwcGVyIiwic3BhbiIsImF0b21pY0RlZmluaXRpb25fX21haW4iLCJhdG9taWNEZWZpbml0aW9uX19wcm9udW5jaWF0aW9uIiwiYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlIiwiYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbiIsInRpdGxlIiwiYWJvdXQiLCJhYm91dFRleHQiLCJhYm91dFRleHRIZWFkZXIiLCJhYm91dFRleHRCb2R5IiwiYWJvdXRGaWd1cmUiLCJhYm91dEZpZ3VyZUNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});