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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _dali_Dali__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dali/Dali */ \"./dali/Dali.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        type: 'circle',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-2',\n        type: 'circle',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        lineWidth: 2,\n        radius: 80,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-3',\n        type: 'circle',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-4',\n        type: 'circle',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-5',\n        type: 'circle',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 340\n    },\n    {\n        tag: 'circle-6',\n        type: 'circle',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 340\n    }\n];\nvar drawing = new _dali_Dali__WEBPACK_IMPORTED_MODULE_4__[\"default\"](drawData);\nvar circle = function(ctx, options) {\n    drawing.render();\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    drawData.forEach(function(element) {\n        circle(ctx, element);\n    });\n    var test = {\n        tag: 'circle-7',\n        fill: true,\n        fillColor: '#c16e70',\n        radius: 10,\n        x: 330,\n        y: 250\n    };\n    var dTheta = frameCount / 80;\n    var dX = Math.cos(dTheta) * 80;\n    var dY = Math.sin(dTheta) * 80;\n    ctx.fillStyle = test.fillColor;\n    ctx.beginPath();\n    ctx.arc(250 - dX, 250 - dY, test.radius, 0, 2 * Math.PI);\n    ctx.fill();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 145,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 154,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQztBQUl1QjtBQUNoQjtBQUVWO0FBRWM7QUFQN0MsR0FBSyxDQUFDSyxVQUFVLEdBQUdMLG1EQUFPLENBQUMsUUFBUTtXQUFGLG1MQUFpQzs7Ozs7OztJQUFLTSxHQUFHLEVBQUUsS0FBSzs7S0FBM0VELFVBQVU7QUFTaEIsR0FBSyxDQUFDRSxRQUFRLEdBQUcsQ0FBQztJQUNoQixDQUFDO1FBQ0NDLEdBQUcsRUFBRSxDQUFVO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFNBQVMsRUFBRSxDQUFTO1FBQ3BCQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEdBQUcsRUFBRSxDQUFVO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RNLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLFdBQVcsRUFBRSxDQUFTO1FBQ3RCQyxTQUFTLEVBQUUsQ0FBQztRQUNaTCxNQUFNLEVBQUUsRUFBRTtRQUNWQyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEdBQUcsRUFBRSxDQUFVO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFNBQVMsRUFBRSxDQUFTO1FBQ3BCQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEdBQUcsRUFBRSxDQUFVO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RNLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLFdBQVcsRUFBRSxDQUFTO1FBQ3RCSixNQUFNLEVBQUUsRUFBRTtRQUNWQyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEdBQUcsRUFBRSxDQUFVO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFNBQVMsRUFBRSxDQUFTO1FBQ3BCQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUM7SUFDRCxDQUFDO1FBQ0NOLEdBQUcsRUFBRSxDQUFVO1FBQ2ZDLElBQUksRUFBRSxDQUFRO1FBQ2RNLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLFdBQVcsRUFBRSxDQUFTO1FBQ3RCSixNQUFNLEVBQUUsRUFBRTtRQUNWQyxDQUFDLEVBQUUsR0FBRztRQUNOQyxDQUFDLEVBQUUsR0FBRztJQUNSLENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDSSxPQUFPLEdBQUcsR0FBRyxDQUFDZixrREFBSSxDQUFDSSxRQUFRO0FBRWpDLEdBQUssQ0FBQ1ksTUFBTSxHQUFHLFFBQVEsQ0FBUEMsR0FBRyxFQUFFQyxPQUFPLEVBQUssQ0FBQztJQUNoQ0gsT0FBTyxDQUFDSSxNQUFNO0lBQ2QsR0FBSyxDQUFDWCxTQUFTLEdBQUdVLE9BQU8sQ0FBQ1YsU0FBUyxJQUFJLENBQVM7SUFDaEQsR0FBSyxDQUFDSyxXQUFXLEdBQUdLLE9BQU8sQ0FBQ0wsV0FBVyxJQUFJLENBQVM7SUFDcEQsR0FBSyxDQUFDTixJQUFJLEdBQUdXLE9BQU8sQ0FBQ1gsSUFBSSxJQUFJLEtBQUs7SUFDbEMsR0FBSyxDQUFDSyxNQUFNLEdBQUdNLE9BQU8sQ0FBQ04sTUFBTSxJQUFJLEtBQUs7SUFDdEMsR0FBSyxDQUFDSCxNQUFNLEdBQUdTLE9BQU8sQ0FBQ1QsTUFBTSxJQUFJLEVBQUU7SUFDbkMsR0FBSyxDQUFDQyxDQUFDLEdBQUdRLE9BQU8sQ0FBQ1IsQ0FBQyxJQUFJLEVBQUU7SUFDekIsR0FBSyxDQUFDQyxDQUFDLEdBQUdPLE9BQU8sQ0FBQ1AsQ0FBQyxJQUFJLEVBQUU7SUFDekIsR0FBSyxDQUFDRyxTQUFTLEdBQUdJLE9BQU8sQ0FBQ0osU0FBUyxJQUFJLENBQUM7SUFFeEMsRUFBRSxFQUFFUCxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakJVLEdBQUcsQ0FBQ0csU0FBUyxHQUFHWixTQUFTLENBQUM7UUFDMUJTLEdBQUcsQ0FBQ0ksU0FBUyxFQUFFLENBQUM7UUFDaEJKLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDWixDQUFDLEVBQUVDLENBQUMsRUFBRUYsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNjLElBQUksQ0FBQ0MsRUFBRTtRQUNsQ1AsR0FBRyxDQUFDVixJQUFJO0lBQ1YsQ0FBQztJQUVELEVBQUUsRUFBRUssTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25CSyxHQUFHLENBQUNRLFdBQVcsR0FBR1osV0FBVyxDQUFDO1FBQzlCSSxHQUFHLENBQUNILFNBQVMsR0FBR0EsU0FBUyxDQUFDO1FBQzFCRyxHQUFHLENBQUNJLFNBQVMsRUFBRSxDQUFDO1FBQ2hCSixHQUFHLENBQUNLLEdBQUcsQ0FBQ1osQ0FBQyxFQUFFQyxDQUFDLEVBQUVGLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDYyxJQUFJLENBQUNDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDUCxHQUFHLENBQUNMLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNjLElBQUksR0FBRyxRQUFRLENBQVBULEdBQUcsRUFBRVUsVUFBVSxFQUFLLENBQUM7SUFDakNWLEdBQUcsQ0FBQ1csU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDQyxLQUFLLEVBQUViLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDRSxNQUFNO0lBRXZEM0IsUUFBUSxDQUFDNEIsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFLLENBQUM7UUFDN0JqQixNQUFNLENBQUNDLEdBQUcsRUFBRWdCLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsR0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztRQUNaN0IsR0FBRyxFQUFFLENBQVU7UUFDZkUsSUFBSSxFQUFFLElBQUk7UUFDVkMsU0FBUyxFQUFFLENBQVM7UUFDcEJDLE1BQU0sRUFBRSxFQUFFO1FBQ1ZDLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO0lBQ1IsQ0FBQztJQUVELEdBQUssQ0FBQ3dCLE1BQU0sR0FBR1IsVUFBVSxHQUFHLEVBQUU7SUFDOUIsR0FBSyxDQUFDUyxFQUFFLEdBQUdiLElBQUksQ0FBQ2MsR0FBRyxDQUFDRixNQUFNLElBQUksRUFBRTtJQUNoQyxHQUFLLENBQUNHLEVBQUUsR0FBR2YsSUFBSSxDQUFDZ0IsR0FBRyxDQUFDSixNQUFNLElBQUksRUFBRTtJQUVoQ2xCLEdBQUcsQ0FBQ0csU0FBUyxHQUFHYyxJQUFJLENBQUMxQixTQUFTLENBQUM7SUFDL0JTLEdBQUcsQ0FBQ0ksU0FBUyxFQUFFLENBQUM7SUFDaEJKLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLEdBQUcsR0FBR2MsRUFBRSxFQUFFLEdBQUcsR0FBR0UsRUFBRSxFQUFFSixJQUFJLENBQUN6QixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQ2MsSUFBSSxDQUFDQyxFQUFFO0lBQ3JEUCxHQUFHLENBQUNWLElBQUk7QUFFVixDQUFDO0FBRWMsUUFBUSxDQUFDaUMsSUFBSSxHQUFHLENBQUM7SUFDOUIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0QzQyxrRUFBYzs7Ozs7d0ZBQ2RJLFVBQVU7Ozs7O3dGQUNWd0MsQ0FBTztnQkFBQ0MsU0FBUyxFQUFFMUMsNEVBQWlCO3NHQUNsQ3dDLENBQUc7b0JBQUNFLFNBQVMsRUFBRTFDLDRGQUFpQzs7b0dBQzlDd0MsQ0FBRzs0QkFBQ0UsU0FBUyxFQUFFMUMsMEZBQStCOzs0R0FDNUM4QyxDQUFJO29DQUFDSixTQUFTLEVBQUUxQyx1RkFBNEI7OENBQUUsQ0FBTTs7Ozs7OzRHQUNwRDhDLENBQUk7b0NBQUNKLFNBQVMsRUFBRTFDLGdHQUFxQzs4Q0FBRSxDQUFROzs7Ozs7NEdBQy9EOEMsQ0FBSTtvQ0FBQ0osU0FBUyxFQUFFMUMsNEZBQWlDOzhDQUFFLENBQUk7Ozs7Ozs7Ozs7OztvR0FFekR3QyxDQUFHOzRCQUFDRSxTQUFTLEVBQUUxQyw2RkFBa0M7c0NBQUUsQ0FFcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdIeUMsQ0FBTztnQkFBQ1UsS0FBSyxFQUFDLENBQU87Z0JBQUNULFNBQVMsRUFBRTFDLHNFQUFXOztnR0FDMUN3QyxDQUFHO3dCQUFDRSxTQUFTLEVBQUUxQywwRUFBZTs7d0dBQzVCd0MsQ0FBRztnQ0FBQ0UsU0FBUyxFQUFFMUMsZ0ZBQXFCOzBDQUFFLENBRXZDOzs7Ozs7d0dBQ0N3QyxDQUFHO2dDQUFDRSxTQUFTLEVBQUUxQyw4RUFBbUI7MENBQUUsQ0FHckM7Ozs7Ozs7Ozs7OztnR0FFRHdDLENBQUc7d0JBQUNFLFNBQVMsRUFBRTFDLDRFQUFpQjs4R0FDaENGLDBEQUFNOzRCQUFDNEMsU0FBUyxFQUFFMUMsa0ZBQXVCOzRCQUFFeUIsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHdkRnQixDQUFPO2dCQUFDVSxLQUFLLEVBQUMsQ0FBWTtnQkFBQ1QsU0FBUyxFQUFFMUMsNEVBQWlCOzs7Ozs7Ozs7Ozs7QUFLOUQsQ0FBQztNQXBDdUJ1QyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0JhY2tncm91bmRcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuaW1wb3J0IExhbmRpbmdQYWdlTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2VOYXYnXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9jb21wb25lbnRzL0NhbnZhc1wiO1xuXG5pbXBvcnQgRGFsaSBmcm9tICcuLi9kYWxpL0RhbGknXG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBkcmF3RGF0YSA9IFtcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0xJyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMjAsXG4gICAgeDogMjUwLFxuICAgIHk6IDI1MCBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0yJyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgcmFkaXVzOiA4MCxcbiAgICB4OiAyNTAsXG4gICAgeTogMjUwXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtMycsXG4gICAgdHlwZTogJ2NpcmNsZScsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS00JyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDQwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS01JyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMTAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9LFxuICB7XG4gICAgdGFnOiAnY2lyY2xlLTYnLFxuICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgIHN0cm9rZTogdHJ1ZSxcbiAgICBzdHJva2VDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogNDAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9XG5dO1xuXG5jb25zdCBkcmF3aW5nID0gbmV3IERhbGkoZHJhd0RhdGEpO1xuXG5jb25zdCBjaXJjbGUgPSAoY3R4LCBvcHRpb25zKSA9PiB7XG4gIGRyYXdpbmcucmVuZGVyKClcbiAgY29uc3QgZmlsbENvbG9yID0gb3B0aW9ucy5maWxsQ29sb3IgfHwgJyNmZmZmZmYnO1xuICBjb25zdCBzdHJva2VDb2xvciA9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgfHwgJyNmZmZmZmYnO1xuICBjb25zdCBmaWxsID0gb3B0aW9ucy5maWxsIHx8IGZhbHNlO1xuICBjb25zdCBzdHJva2UgPSBvcHRpb25zLnN0cm9rZSB8fCBmYWxzZTtcbiAgY29uc3QgcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgMTA7XG4gIGNvbnN0IHggPSBvcHRpb25zLnggfHwgMTA7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnkgfHwgMTA7XG4gIGNvbnN0IGxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoIHx8IDI7XG5cbiAgaWYgKGZpbGwgPT0gdHJ1ZSkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyKk1hdGguUEkpXG4gICAgY3R4LmZpbGwoKVxuICB9XG5cbiAgaWYgKHN0cm9rZSA9PSB0cnVlKSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIqTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59O1xuXG5jb25zdCBkcmF3ID0gKGN0eCwgZnJhbWVDb3VudCkgPT4ge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuXG4gIGRyYXdEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjaXJjbGUoY3R4LCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgY29uc3QgdGVzdCA9IHtcbiAgICB0YWc6ICdjaXJjbGUtNycsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjYzE2ZTcwJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDMzMCxcbiAgICB5OiAyNTBcbiAgfVxuXG4gIGNvbnN0IGRUaGV0YSA9IGZyYW1lQ291bnQgLyA4MDtcbiAgY29uc3QgZFggPSBNYXRoLmNvcyhkVGhldGEpICogODA7XG4gIGNvbnN0IGRZID0gTWF0aC5zaW4oZFRoZXRhKSAqIDgwO1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0ZXN0LmZpbGxDb2xvcjtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKDI1MCAtIGRYLCAyNTAgLSBkWSwgdGVzdC5yYWRpdXMsIDAsIDIqTWF0aC5QSSlcbiAgY3R4LmZpbGwoKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYW5kaW5nUGFnZU5hdiAvPlxuICAgICAgPEJhY2tncm91bmQgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubGFuZGluZ1BhZ2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fd3JhcHBlcn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX21haW59PkF0b21pYzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fcHJvbnVuY2lhdGlvbn0+W8mZdMOkbWlrXTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlfT5hZGouPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19kZWZpbml0aW9ufT5cbiAgICAgICAgICBvZiBvciBmb3JtaW5nIGEgc2luZ2xlIGlycmVkdWNpYmxlIHVuaXQgb3IgY29tcG9uZW50IGluIGEgbGFyZ2VyIHN5c3RlbS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0aXRsZT1cImFib3V0XCIgY2xhc3NOYW1lPXtzdHlsZS5hYm91dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHRIZWFkZXJ9PlxuICAgICAgICAgICAgTGVhcm4gZnJvbSBmaXJzdCBwcmluY2lwbGVzLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dFRleHRCb2R5fT5cbiAgICAgICAgICAgIEF0b21zIGFyZSB0aGUgc21hbGxlc3QgZnVuY3Rpb25hbCB1bml0cyBvZiBtYXR0ZXIgZnJvbSB3aGljaCBldmVyeXRoaW5nIGVsc2UgaXMgYnVpbHQgdXBvbi5cbiAgICAgICAgICAgIEF0b21pYyB3YXMgYnVpbHQgb24gdGhlc2UgcHJpbmNpcGxlcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hYm91dEZpZ3VyZX0+XG4gICAgICAgIDxDYW52YXMgY2xhc3NOYW1lPXtzdHlsZS5hYm91dEZpZ3VyZUNhbnZhc30gZHJhdz17ZHJhd30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiB0aXRsZT1cImdldFN0YXJ0ZWRcIiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmdQYWdlfT5cblxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJMYW5kaW5nUGFnZU5hdiIsIkNhbnZhcyIsIkRhbGkiLCJzdHlsZSIsIkJhY2tncm91bmQiLCJzc3IiLCJkcmF3RGF0YSIsInRhZyIsInR5cGUiLCJmaWxsIiwiZmlsbENvbG9yIiwicmFkaXVzIiwieCIsInkiLCJzdHJva2UiLCJzdHJva2VDb2xvciIsImxpbmVXaWR0aCIsImRyYXdpbmciLCJjaXJjbGUiLCJjdHgiLCJvcHRpb25zIiwicmVuZGVyIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZnJhbWVDb3VudCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0ZXN0IiwiZFRoZXRhIiwiZFgiLCJjb3MiLCJkWSIsInNpbiIsIkhvbWUiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibGFuZGluZ1BhZ2UiLCJhdG9taWNEZWZpbml0aW9uX19jb250YWluZXIiLCJhdG9taWNEZWZpbml0aW9uX193cmFwcGVyIiwic3BhbiIsImF0b21pY0RlZmluaXRpb25fX21haW4iLCJhdG9taWNEZWZpbml0aW9uX19wcm9udW5jaWF0aW9uIiwiYXRvbWljRGVmaW5pdGlvbl9fYWRqZWN0aXZlIiwiYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbiIsInRpdGxlIiwiYWJvdXQiLCJhYm91dFRleHQiLCJhYm91dFRleHRIZWFkZXIiLCJhYm91dFRleHRCb2R5IiwiYWJvdXRGaWd1cmUiLCJhYm91dEZpZ3VyZUNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});