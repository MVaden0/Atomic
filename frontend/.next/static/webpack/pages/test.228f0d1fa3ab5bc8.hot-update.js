"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/DrawingSurface.jsx":
/*!***************************************!*\
  !*** ./components/DrawingSurface.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DrawingSurface.module.css */ \"./styles/DrawingSurface.module.css\");\n/* harmony import */ var _styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DrawingSurface = function(props) {\n    _s();\n    var draw = props.draw, rest = _objectWithoutProperties(props, [\n        \"draw\"\n    ]);\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isResizing = ref3[0], setIsResizing = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), width = ref1[0], setWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), height = ref2[0], setHeight = ref2[1];\n    var checkEdge = function(pos, bounds, offset) {\n        return pos < bounds + offset && pos > bounds - offset;\n    };\n    var checkCorner = function(xPos, yPos, xBounds, yBounds, offset) {\n        return xPos < xBounds + offset && xPos > xBounds - offset && yPos < yBounds + offset && yPos > yBounds - offset;\n    };\n    var handleMouseMove = function(event) {\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if ((checkCorner(event.pageX, event.pageY, left, top, 20) || checkCorner(event.pageX, event.pageY, right, bottom, 20)) && !isResizing) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if ((checkCorner(event.pageX, event.pageY, left, bottom, 20) || checkCorner(event.pageX, event.pageY, right, top, 20)) && !isResizing) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if ((checkEdge(event.pageY, top, 20) || checkEdge(event.pageY, bottom, 20)) && !isResizing) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if ((checkEdge(event.pageX, left, 20) || checkEdge(event.pageX, right, 20)) && !isResizing) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (!isResizing) {\n            document.body.style.cursor = \"alias\";\n        }\n    };\n    var handleMouseDown = function(event) {\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) || checkCorner(event.pageX, event.pageY, right, bottom, 20)) {\n            setIsResizing(true);\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) || checkCorner(event.pageX, event.pageY, right, top, 20)) {\n            setIsResizing(true);\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageY, top, 20) || checkEdge(event.pageY, bottom, 20)) {\n            setIsResizing(true);\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageX, left, 20) || checkEdge(event.pageX, right, 20)) {\n            setIsResizing(true);\n            document.body.style.cursor = \"grabbing\";\n        }\n    };\n    var handleMouseUp = function(event) {\n        setIsResizing(false);\n        if ((checkCorner(event.pageX, event.pageY, left, top, 20) || checkCorner(event.pageX, event.pageY, right, bottom, 20)) && !isResizing) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if ((checkCorner(event.pageX, event.pageY, left, bottom, 20) || checkCorner(event.pageX, event.pageY, right, top, 20)) && !isResizing) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if ((checkEdge(event.pageY, top, 20) || checkEdge(event.pageY, bottom, 20)) && !isResizing) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if ((checkEdge(event.pageX, left, 20) || checkEdge(event.pageX, right, 20)) && !isResizing) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (!isResizing) {\n            document.body.style.cursor = \"alias\";\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(props.width);\n        setHeight(props.height);\n        var canvas = canvasRef.current;\n        var frameCount = 0;\n        var animationFrameId;\n        var render = function() {\n            frameCount++;\n            draw(canvas, frameCount);\n            animationFrameId = window.requestAnimationFrame(render);\n        };\n        render();\n        window.addEventListener('mousemove', handleMouseMove);\n        window.addEventListener('mousedown', handleMouseDown);\n        window.addEventListener('mouseup', handleMouseUp);\n        return function() {\n            window.cancelAnimationFrame(animationFrameId);\n        };\n    }, [\n        draw,\n        isResizing\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: width,\n            height: height\n        },\n        className: (_styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)\n    }, void 0, false, {\n        fileName: \"/home/michael/code/Atomic/frontend/components/DrawingSurface.jsx\",\n        lineNumber: 122,\n        columnNumber: 7\n    }, _this);\n};\n_s(DrawingSurface, \"kPRS5/NF+xLlWr/BgLprvJSqtOk=\");\n_c = DrawingSurface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawingSurface);\nvar _c;\n$RefreshReg$(_c, \"DrawingSurface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsTUFBTTtRQUMxRCxDQUFDO1FBQ0RBLE1BQU07UUFFTkMsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFXLFlBQUV0QixlQUFlLENBQUMsQ0FBQztRQUN0RG9CLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsQ0FBVyxZQUFFUixlQUFlLENBQUMsQ0FBQztRQUN0RE0sTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFTLFVBQUVQLGFBQWEsQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWkssTUFBTSxDQUFDRyxvQkFBb0IsQ0FBQ0wsZ0JBQWdCO1FBQzlDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ3JDO1FBQUFBLElBQUk7UUFBRUksVUFBVTtJQUFBLENBQUM7SUFFckIsTUFBTSw2RUFDRHVDLENBQUc7UUFBQ0MsR0FBRyxFQUFFMUMsWUFBWTtRQUFFTCxLQUFLLEVBQUUsQ0FBQ1M7WUFBQUEsS0FBSyxFQUFFQSxLQUFLO1lBQUVFLE1BQU0sRUFBRUEsTUFBTTtRQUFBLENBQUM7UUFBRXFDLFNBQVMsRUFBRWhELG9GQUFlOzs7Ozs7QUFRL0YsQ0FBQztHQTlIS0MsY0FBYztLQUFkQSxjQUFjO0FBZ0lwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRHJhd2luZ1N1cmZhY2UuanN4P2NmOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvRHJhd2luZ1N1cmZhY2UubW9kdWxlLmNzcydcblxuY29uc3QgRHJhd2luZ1N1cmZhY2UgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IHsgZHJhdywgLi4ucmVzdCB9ID0gcHJvcHNcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgW2lzUmVzaXppbmcsIHNldElzUmVzaXppbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMTAwKVxuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMTAwKVxuXG4gIGNvbnN0IGNoZWNrRWRnZSA9IChwb3MsIGJvdW5kcywgb2Zmc2V0KSA9PiB7XG4gICAgcmV0dXJuIHBvcyA8IGJvdW5kcyArIG9mZnNldCAmJiBwb3MgPiBib3VuZHMgLSBvZmZzZXQ7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tDb3JuZXIgPSAoeFBvcywgeVBvcywgeEJvdW5kcywgeUJvdW5kcywgb2Zmc2V0KSA9PiB7XG4gICAgcmV0dXJuIHhQb3MgPCB4Qm91bmRzICsgb2Zmc2V0ICYmIHhQb3MgPiB4Qm91bmRzIC0gb2Zmc2V0ICYmIHlQb3MgPCB5Qm91bmRzICsgb2Zmc2V0ICYmIHlQb3MgPiB5Qm91bmRzIC0gb2Zmc2V0O1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgIC8vIGdldCByZWZlcmVuY2UgdG8gY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAvLyBnZXQgcG9zaXRpb25pbmcgb2YgY29udGFpbmVyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQgfSA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgLy8gY2hhbmdlIGN1cnNvciBiYXNlZCBvbiBwb3NpdGlvblxuICAgIGlmICgoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBsZWZ0LCB0b3AsIDIwKSB8fCBjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCBib3R0b20sIDIwKSkgJiYgIWlzUmVzaXppbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJud3NlLXJlc2l6ZVwiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgYm90dG9tLCAyMCkgfHwgY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCByaWdodCwgdG9wLCAyMCkpICYmICFpc1Jlc2l6aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibmVzdy1yZXNpemVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKChjaGVja0VkZ2UoZXZlbnQucGFnZVksIHRvcCwgMjApIHx8IGNoZWNrRWRnZShldmVudC5wYWdlWSwgYm90dG9tLCAyMCkpICYmICFpc1Jlc2l6aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibnMtcmVzaXplXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmICgoY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCBsZWZ0LCAyMCkgfHwgY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCByaWdodCwgMjApKSAmJiAhaXNSZXNpemluZykge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImV3LXJlc2l6ZVwiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoIWlzUmVzaXppbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhbGlhc1wiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuXG4gICAgLy8gZ2V0IHBvc2l0aW9uaW5nIG9mIGNvbnRhaW5lclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH0gPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIC8vIGNoYW5nZSBjdXJzb3IgYmFzZWQgb24gcG9zaXRpb25cbiAgICBpZiAoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBsZWZ0LCB0b3AsIDIwKSB8fCBjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCBib3R0b20sIDIwKSkge1xuICAgICAgc2V0SXNSZXNpemluZyh0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBsZWZ0LCBib3R0b20sIDIwKSB8fCBjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCB0b3AsIDIwKSkge1xuICAgICAgc2V0SXNSZXNpemluZyh0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VZLCB0b3AsIDIwKSB8fCBjaGVja0VkZ2UoZXZlbnQucGFnZVksIGJvdHRvbSwgMjApKSB7XG4gICAgICBzZXRJc1Jlc2l6aW5nKHRydWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVgsIGxlZnQsIDIwKSB8fCBjaGVja0VkZ2UoZXZlbnQucGFnZVgsIHJpZ2h0LCAyMCkpIHtcbiAgICAgIHNldElzUmVzaXppbmcodHJ1ZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZ3JhYmJpbmdcIjtcbiAgICB9IFxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldmVudCkgPT4ge1xuICAgIHNldElzUmVzaXppbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmICgoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBsZWZ0LCB0b3AsIDIwKSB8fCBjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCBib3R0b20sIDIwKSkgJiYgIWlzUmVzaXppbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJud3NlLXJlc2l6ZVwiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgYm90dG9tLCAyMCkgfHwgY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCByaWdodCwgdG9wLCAyMCkpICYmICFpc1Jlc2l6aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibmVzdy1yZXNpemVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKChjaGVja0VkZ2UoZXZlbnQucGFnZVksIHRvcCwgMjApIHx8IGNoZWNrRWRnZShldmVudC5wYWdlWSwgYm90dG9tLCAyMCkpICYmICFpc1Jlc2l6aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibnMtcmVzaXplXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmICgoY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCBsZWZ0LCAyMCkgfHwgY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCByaWdodCwgMjApKSAmJiAhaXNSZXNpemluZykge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImV3LXJlc2l6ZVwiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoIWlzUmVzaXppbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhbGlhc1wiO1xuICAgIH1cbiAgfTsgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgocHJvcHMud2lkdGgpXG4gICAgc2V0SGVpZ2h0KHByb3BzLmhlaWdodClcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50XG5cbiAgICBsZXQgZnJhbWVDb3VudCA9IDBcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZFxuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICAgIGZyYW1lQ291bnQrK1xuICAgICAgICBkcmF3KGNhbnZhcywgZnJhbWVDb3VudClcbiAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgIH1cbiAgICByZW5kZXIoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpXG4gICAgfVxuICB9LCBbZHJhdywgaXNSZXNpemluZ10pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IHN0eWxlPXt7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH19IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICB7LypcbiAgICAgICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGNsYXNzTmFtZT17c3R5bGUuY2FudmFzfSByZWY9e2NhbnZhc1JlZn0+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjEwMFwiIHN0cm9rZT1cImdyZWVuXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIGZpbGw9XCJ5ZWxsb3dcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICovfVxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdTdXJmYWNlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJEcmF3aW5nU3VyZmFjZSIsInByb3BzIiwiZHJhdyIsInJlc3QiLCJjb250YWluZXJSZWYiLCJjYW52YXNSZWYiLCJpc1Jlc2l6aW5nIiwic2V0SXNSZXNpemluZyIsIndpZHRoIiwic2V0V2lkdGgiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJjaGVja0VkZ2UiLCJwb3MiLCJib3VuZHMiLCJvZmZzZXQiLCJjaGVja0Nvcm5lciIsInhQb3MiLCJ5UG9zIiwieEJvdW5kcyIsInlCb3VuZHMiLCJoYW5kbGVNb3VzZU1vdmUiLCJldmVudCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJwYWdlWCIsInBhZ2VZIiwiZG9jdW1lbnQiLCJib2R5IiwiY3Vyc29yIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImNhbnZhcyIsImZyYW1lQ291bnQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingSurface.jsx\n");

/***/ })

});