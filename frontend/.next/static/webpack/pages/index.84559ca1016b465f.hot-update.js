/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/hephaestus.js":
/*!**********************************!*\
  !*** ./components/hephaestus.js ***!
  \**********************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar Hephaestus = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Hephaestus(options) {\n        _classCallCheck(this, Hephaestus);\n        this.options = options;\n        this.allowedTypes = [\n            'circle'\n        ];\n    }\n    _createClass(Hephaestus, [\n        {\n            key: \"render\",\n            value: function render(frameCount) {\n                var _this = this;\n                this.options.forEach(function(element) {\n                    var type = options.type;\n                    // check if type is in defined types\n                    if (!_this.allowedTypes.includes(type)) {\n                        throw new Error(\"'\".concat(type, \"' is not an allowed type.\"));\n                    }\n                });\n                var fillColor = options.fillColor || '#ffffff';\n                var strokeColor = options.strokeColor || '#ffffff';\n                var fill = options.fill || false;\n                var stroke = options.stroke || false;\n                var radius = options.radius || 10;\n                var x = options.x || 10;\n                var y = options.y || 10;\n                var lineWidth = options.lineWidth || 2;\n            }\n        }\n    ]);\n    return Hephaestus;\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcGhhZXN0dXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEdBQUssQ0FBQ0EsVUFBVSxpQkFBaEIsUUFBUTs7YUFBRkEsVUFBVSxDQUNBQyxPQUFPOztRQUNmLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsQ0FBQztZQUNqQixDQUFRO1FBQ1osQ0FBQyxDQUFDOzs7O1lBR05DLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLFVBQVUsRUFBRSxDQUFDOztnQkFDaEIsSUFBSSxDQUFDSCxPQUFPLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO29CQUMvQixHQUFLLENBQUNDLElBQUksR0FBR04sT0FBTyxDQUFDTSxJQUFJO29CQUV6QixFQUFvQztvQkFDcEMsRUFBRSxTQUFRTCxZQUFZLENBQUNNLFFBQVEsQ0FBQ0QsSUFBSSxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUNFLEtBQUssQ0FBRSxDQUFDLEdBQU8sTUFBeUIsQ0FBOUJGLElBQUksRUFBQyxDQUF5QjtvQkFDdEQsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFFSCxHQUFLLENBQUNHLFNBQVMsR0FBR1QsT0FBTyxDQUFDUyxTQUFTLElBQUksQ0FBUztnQkFDaEQsR0FBSyxDQUFDQyxXQUFXLEdBQUdWLE9BQU8sQ0FBQ1UsV0FBVyxJQUFJLENBQVM7Z0JBQ3BELEdBQUssQ0FBQ0MsSUFBSSxHQUFHWCxPQUFPLENBQUNXLElBQUksSUFBSSxLQUFLO2dCQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBR1osT0FBTyxDQUFDWSxNQUFNLElBQUksS0FBSztnQkFDdEMsR0FBSyxDQUFDQyxNQUFNLEdBQUdiLE9BQU8sQ0FBQ2EsTUFBTSxJQUFJLEVBQUU7Z0JBQ25DLEdBQUssQ0FBQ0MsQ0FBQyxHQUFHZCxPQUFPLENBQUNjLENBQUMsSUFBSSxFQUFFO2dCQUN6QixHQUFLLENBQUNDLENBQUMsR0FBR2YsT0FBTyxDQUFDZSxDQUFDLElBQUksRUFBRTtnQkFDekIsR0FBSyxDQUFDQyxTQUFTLEdBQUdoQixPQUFPLENBQUNnQixTQUFTLElBQUksQ0FBQztZQUM1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVwaGFlc3R1cy5qcz81YjM3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhlcGhhZXN0dXMge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLmFsbG93ZWRUeXBlcyA9IFtcbiAgICAgICAgICAgICdjaXJjbGUnXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lQ291bnQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgaW4gZGVmaW5lZCB0eXBlc1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dHlwZX0nIGlzIG5vdCBhbiBhbGxvd2VkIHR5cGUuYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlsbENvbG9yID0gb3B0aW9ucy5maWxsQ29sb3IgfHwgJyNmZmZmZmYnO1xuICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgfHwgJyNmZmZmZmYnO1xuICAgICAgICBjb25zdCBmaWxsID0gb3B0aW9ucy5maWxsIHx8IGZhbHNlO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBvcHRpb25zLnN0cm9rZSB8fCBmYWxzZTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgMTA7XG4gICAgICAgIGNvbnN0IHggPSBvcHRpb25zLnggfHwgMTA7XG4gICAgICAgIGNvbnN0IHkgPSBvcHRpb25zLnkgfHwgMTA7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoIHx8IDI7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJIZXBoYWVzdHVzIiwib3B0aW9ucyIsImFsbG93ZWRUeXBlcyIsInJlbmRlciIsImZyYW1lQ291bnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInR5cGUiLCJpbmNsdWRlcyIsIkVycm9yIiwiZmlsbENvbG9yIiwic3Ryb2tlQ29sb3IiLCJmaWxsIiwic3Ryb2tlIiwicmFkaXVzIiwieCIsInkiLCJsaW5lV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hephaestus.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPageNav */ \"./components/LandingPageNav.jsx\");\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Canvas */ \"./components/Canvas.jsx\");\n/* harmony import */ var _components_hephaestus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hephaestus.js */ \"./components/hephaestus.js\");\n/* harmony import */ var _components_hephaestus_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_hephaestus_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_Background_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Background */ \"./components/Background.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Background\"\n        ]\n    },\n    ssr: false\n});\n_c = Background;\nvar drawData = [\n    {\n        tag: 'circle-1',\n        type: 'circle',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 20,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-2',\n        type: 'circle',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        lineWidth: 2,\n        radius: 80,\n        x: 250,\n        y: 250\n    },\n    {\n        tag: 'circle-3',\n        type: 'circle',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-4',\n        type: 'circle',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 160\n    },\n    {\n        tag: 'circle-5',\n        type: 'circle',\n        fill: true,\n        fillColor: '#1a1a1a',\n        radius: 10,\n        x: 170,\n        y: 340\n    },\n    {\n        tag: 'circle-6',\n        type: 'circle',\n        stroke: true,\n        strokeColor: '#1a1a1a',\n        radius: 40,\n        x: 170,\n        y: 340\n    }\n];\nvar drawing = new _components_hephaestus_js__WEBPACK_IMPORTED_MODULE_4__.Hephaestus(drawData);\nvar circle = function(ctx, options) {\n    var fillColor = options.fillColor || '#ffffff';\n    var strokeColor = options.strokeColor || '#ffffff';\n    var fill = options.fill || false;\n    var stroke = options.stroke || false;\n    var radius = options.radius || 10;\n    var x = options.x || 10;\n    var y = options.y || 10;\n    var lineWidth = options.lineWidth || 2;\n    if (fill == true) {\n        ctx.fillStyle = fillColor;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.fill();\n    }\n    if (stroke == true) {\n        ctx.strokeStyle = strokeColor;\n        ctx.lineWidth = lineWidth;\n        ctx.beginPath();\n        ctx.arc(x, y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n    }\n};\nvar draw = function(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    drawData.forEach(function(element) {\n        circle(ctx, element);\n    });\n    var test = {\n        tag: 'circle-7',\n        fill: true,\n        fillColor: '#c16e70',\n        radius: 10,\n        x: 330,\n        y: 250\n    };\n    var dTheta = frameCount / 80;\n    var dX = Math.cos(dTheta) * 80;\n    var dY = Math.sin(dTheta) * 80;\n    ctx.fillStyle = test.fillColor;\n    ctx.beginPath();\n    ctx.arc(250 - dX, 250 - dY, test.radius, 0, 2 * Math.PI);\n    ctx.fill();\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandingPageNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {}, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().landingPage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__wrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__main),\n                                    children: \"Atomic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__pronunciation),\n                                    children: \"[ət\\xe4mik]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__adjective),\n                                    children: \"adj.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().atomicDefinition__definition),\n                            children: \"of or forming a single irreducible unit or component in a larger system.\"\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"about\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().about),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutTextHeader),\n                                children: \"Learn from first principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutTextBody),\n                                children: \"Atoms are the smallest functional units of matter from which everything else is built upon. Atomic was built on these principles.\"\n                            }, void 0, false, {\n                                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                                lineNumber: 147,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutFigure),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutFigureCanvas),\n                            draw: draw\n                        }, void 0, false, {\n                            fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                            lineNumber: 153,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                title: \"getStarted\",\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().landingPage)\n            }, void 0, false, {\n                fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/michael/code/Atomic/frontend/pages/index.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Background\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixTQUFTLEVBQUV6Qyw0RkFBaUM7OENBQUUsQ0FBSTs7Ozs7Ozs7Ozs7O29HQUV6RHVDLENBQUc7NEJBQUNFLFNBQVMsRUFBRXpDLDZGQUFrQztzQ0FBRSxDQUVwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR0h3QyxDQUFPO2dCQUFDVSxLQUFLLEVBQUMsQ0FBTztnQkFBQ1QsU0FBUyxFQUFFekMsc0VBQVc7O2dHQUMxQ3VDLENBQUc7d0JBQUNFLFNBQVMsRUFBRXpDLDBFQUFlOzt3R0FDNUJ1QyxDQUFHO2dDQUFDRSxTQUFTLEVBQUV6QyxnRkFBcUI7MENBQUUsQ0FFdkM7Ozs7Ozt3R0FDQ3VDLENBQUc7Z0NBQUNFLFNBQVMsRUFBRXpDLDhFQUFtQjswQ0FBRSxDQUdyQzs7Ozs7Ozs7Ozs7O2dHQUVEdUMsQ0FBRzt3QkFBQ0UsU0FBUyxFQUFFekMsNEVBQWlCOzhHQUNoQ0YsMERBQU07NEJBQUMyQyxTQUFTLEVBQUV6QyxrRkFBdUI7NEJBQUV3QixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUd2RGdCLENBQU87Z0JBQUNVLEtBQUssRUFBQyxDQUFZO2dCQUFDVCxTQUFTLEVBQUV6Qyw0RUFBaUI7Ozs7Ozs7Ozs7OztBQUs5RCxDQUFDO01BcEN1QnNDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEJhY2tncm91bmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQmFja2dyb3VuZFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5pbXBvcnQgTGFuZGluZ1BhZ2VOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kaW5nUGFnZU5hdidcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FudmFzXCI7XG5cbmltcG9ydCB7IEhlcGhhZXN0dXMgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlcGhhZXN0dXMuanMnXG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBkcmF3RGF0YSA9IFtcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0xJyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMjAsXG4gICAgeDogMjUwLFxuICAgIHk6IDI1MCBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS0yJyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgcmFkaXVzOiA4MCxcbiAgICB4OiAyNTAsXG4gICAgeTogMjUwXG4gIH0sXG4gIHtcbiAgICB0YWc6ICdjaXJjbGUtMycsXG4gICAgdHlwZTogJ2NpcmNsZScsXG4gICAgZmlsbDogdHJ1ZSxcbiAgICBmaWxsQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDEwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS00JyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBzdHJva2U6IHRydWUsXG4gICAgc3Ryb2tlQ29sb3I6ICcjMWExYTFhJyxcbiAgICByYWRpdXM6IDQwLFxuICAgIHg6IDE3MCxcbiAgICB5OiAxNjBcbiAgfSxcbiAge1xuICAgIHRhZzogJ2NpcmNsZS01JyxcbiAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICBmaWxsOiB0cnVlLFxuICAgIGZpbGxDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogMTAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9LFxuICB7XG4gICAgdGFnOiAnY2lyY2xlLTYnLFxuICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgIHN0cm9rZTogdHJ1ZSxcbiAgICBzdHJva2VDb2xvcjogJyMxYTFhMWEnLFxuICAgIHJhZGl1czogNDAsXG4gICAgeDogMTcwLFxuICAgIHk6IDM0MFxuICB9XG5dO1xuXG5jb25zdCBkcmF3aW5nID0gbmV3IEhlcGhhZXN0dXMoZHJhd0RhdGEpO1xuXG5jb25zdCBjaXJjbGUgPSAoY3R4LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGZpbGxDb2xvciA9IG9wdGlvbnMuZmlsbENvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3Qgc3Ryb2tlQ29sb3IgPSBvcHRpb25zLnN0cm9rZUNvbG9yIHx8ICcjZmZmZmZmJztcbiAgY29uc3QgZmlsbCA9IG9wdGlvbnMuZmlsbCB8fCBmYWxzZTtcbiAgY29uc3Qgc3Ryb2tlID0gb3B0aW9ucy5zdHJva2UgfHwgZmFsc2U7XG4gIGNvbnN0IHJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDEwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDEwO1xuICBjb25zdCB5ID0gb3B0aW9ucy55IHx8IDEwO1xuICBjb25zdCBsaW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCB8fCAyO1xuXG4gIGlmIChmaWxsID09IHRydWUpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJKVxuICAgIGN0eC5maWxsKClcbiAgfVxuXG4gIGlmIChzdHJva2UgPT0gdHJ1ZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyKk1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufTtcblxuY29uc3QgZHJhdyA9IChjdHgsIGZyYW1lQ291bnQpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcblxuICBkcmF3RGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY2lyY2xlKGN0eCwgZWxlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IHRlc3QgPSB7XG4gICAgdGFnOiAnY2lyY2xlLTcnLFxuICAgIGZpbGw6IHRydWUsXG4gICAgZmlsbENvbG9yOiAnI2MxNmU3MCcsXG4gICAgcmFkaXVzOiAxMCxcbiAgICB4OiAzMzAsXG4gICAgeTogMjUwXG4gIH1cblxuICBjb25zdCBkVGhldGEgPSBmcmFtZUNvdW50IC8gODA7XG4gIGNvbnN0IGRYID0gTWF0aC5jb3MoZFRoZXRhKSAqIDgwO1xuICBjb25zdCBkWSA9IE1hdGguc2luKGRUaGV0YSkgKiA4MDtcblxuICBjdHguZmlsbFN0eWxlID0gdGVzdC5maWxsQ29sb3I7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYygyNTAgLSBkWCwgMjUwIC0gZFksIHRlc3QucmFkaXVzLCAwLCAyKk1hdGguUEkpXG4gIGN0eC5maWxsKClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGFuZGluZ1BhZ2VOYXYgLz5cbiAgICAgIDxCYWNrZ3JvdW5kIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmxhbmRpbmdQYWdlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX3dyYXBwZXJ9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hdG9taWNEZWZpbml0aW9uX19tYWlufT5BdG9taWM8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX3Byb251bmNpYXRpb259PlvJmXTDpG1pa108L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmF0b21pY0RlZmluaXRpb25fX2FkamVjdGl2ZX0+YWRqLjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXRvbWljRGVmaW5pdGlvbl9fZGVmaW5pdGlvbn0+XG4gICAgICAgICAgb2Ygb3IgZm9ybWluZyBhIHNpbmdsZSBpcnJlZHVjaWJsZSB1bml0IG9yIGNvbXBvbmVudCBpbiBhIGxhcmdlciBzeXN0ZW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdGl0bGU9XCJhYm91dFwiIGNsYXNzTmFtZT17c3R5bGUuYWJvdXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0SGVhZGVyfT5cbiAgICAgICAgICAgIExlYXJuIGZyb20gZmlyc3QgcHJpbmNpcGxlcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRUZXh0Qm9keX0+XG4gICAgICAgICAgICBBdG9tcyBhcmUgdGhlIHNtYWxsZXN0IGZ1bmN0aW9uYWwgdW5pdHMgb2YgbWF0dGVyIGZyb20gd2hpY2ggZXZlcnl0aGluZyBlbHNlIGlzIGJ1aWx0IHVwb24uXG4gICAgICAgICAgICBBdG9taWMgd2FzIGJ1aWx0IG9uIHRoZXNlIHByaW5jaXBsZXMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWJvdXRGaWd1cmV9PlxuICAgICAgICA8Q2FudmFzIGNsYXNzTmFtZT17c3R5bGUuYWJvdXRGaWd1cmVDYW52YXN9IGRyYXc9e2RyYXd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gdGl0bGU9XCJnZXRTdGFydGVkXCIgY2xhc3NOYW1lPXtzdHlsZS5sYW5kaW5nUGFnZX0+XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiTGFuZGluZ1BhZ2VOYXYiLCJDYW52YXMiLCJIZXBoYWVzdHVzIiwic3R5bGUiLCJCYWNrZ3JvdW5kIiwic3NyIiwiZHJhd0RhdGEiLCJ0YWciLCJ0eXBlIiwiZmlsbCIsImZpbGxDb2xvciIsInJhZGl1cyIsIngiLCJ5Iiwic3Ryb2tlIiwic3Ryb2tlQ29sb3IiLCJsaW5lV2lkdGgiLCJkcmF3aW5nIiwiY2lyY2xlIiwiY3R4Iiwib3B0aW9ucyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImZyYW1lQ291bnQiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJlbGVtZW50IiwidGVzdCIsImRUaGV0YSIsImRYIiwiY29zIiwiZFkiLCJzaW4iLCJIb21lIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImxhbmRpbmdQYWdlIiwiYXRvbWljRGVmaW5pdGlvbl9fY29udGFpbmVyIiwiYXRvbWljRGVmaW5pdGlvbl9fd3JhcHBlciIsInNwYW4iLCJhdG9taWNEZWZpbml0aW9uX19tYWluIiwiYXRvbWljRGVmaW5pdGlvbl9fcHJvbnVuY2lhdGlvbiIsImF0b21pY0RlZmluaXRpb25fX2FkamVjdGl2ZSIsImF0b21pY0RlZmluaXRpb25fX2RlZmluaXRpb24iLCJ0aXRsZSIsImFib3V0IiwiYWJvdXRUZXh0IiwiYWJvdXRUZXh0SGVhZGVyIiwiYWJvdXRUZXh0Qm9keSIsImFib3V0RmlndXJlIiwiYWJvdXRGaWd1cmVDYW52YXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});