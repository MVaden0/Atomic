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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DrawingSurface.module.css */ \"./styles/DrawingSurface.module.css\");\n/* harmony import */ var _styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DrawingSurface = function(props) {\n    _s();\n    var draw = props.draw, rest = _objectWithoutProperties(props, [\n        \"draw\"\n    ]);\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //const [isResizing, setIsResizing] = useState(false);\n    var isResizing = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var topPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var leftPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), width = ref2[0], setWidth = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), height = ref1[0], setHeight = ref1[1];\n    var checkEdge = function(pos, bounds, offset) {\n        return pos < bounds + offset && pos > bounds - offset;\n    };\n    var checkCorner = function(xPos, yPos, xBounds, yBounds, offset) {\n        return xPos < xBounds + offset && xPos > xBounds - offset && yPos < yBounds + offset && yPos > yBounds - offset;\n    };\n    var handleMouseMove = function(event) {\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (!isResizing) {\n            document.body.style.cursor = \"alias\";\n        }\n        ;\n    };\n    var handleMouseDown = function(event) {\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n            topPosition.current = 60;\n            container.style.top = '60px';\n        } else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        }\n        ;\n    };\n    var handleMouseUp = function(event) {\n        // denotes resizing has ceased\n        isResizing.current = false;\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (!isResizing.current) {\n            document.body.style.cursor = \"alias\";\n        }\n        ;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(props.width);\n        setHeight(props.height);\n        var container = containerRef.current;\n        var canvas = canvasRef.current;\n        var parent = container.parentElement;\n        var ref = parent.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        var frameCount = 0;\n        var animationFrameId;\n        var render = function() {\n            frameCount++;\n            draw(canvas, frameCount);\n            animationFrameId = window.requestAnimationFrame(render);\n        };\n        render();\n        window.addEventListener('mousemove', handleMouseMove);\n        window.addEventListener('mousedown', handleMouseDown);\n        window.addEventListener('mouseup', handleMouseUp);\n        return function() {\n            window.cancelAnimationFrame(animationFrameId);\n        };\n    }, [\n        draw,\n        isResizing,\n        topPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: width,\n            height: height,\n            position: 'relative',\n            left: \"\".concat(leftPosition.current, \"px\")\n        },\n        className: (_styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)\n    }, void 0, false, {\n        fileName: \"/home/michael/code/Atomic/frontend/components/DrawingSurface.jsx\",\n        lineNumber: 181,\n        columnNumber: 7\n    }, _this);\n};\n_s(DrawingSurface, \"BPlXfSpLv+T9zlaXpu1JTNjweoo=\");\n_c = DrawingSurface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawingSurface);\nvar _c;\n$RefreshReg$(_c, \"DrawingSurface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWk8sTUFBTSxDQUFDRyxvQkFBb0IsQ0FBQ0wsZ0JBQWdCO1FBQzlDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ3hDO1FBQUFBLElBQUk7UUFBRUksVUFBVTtRQUFFQyxXQUFXO0lBQUEsQ0FBQztJQUVsQyxNQUFNLDZFQUNEeUMsQ0FBRztRQUFDQyxHQUFHLEVBQUU3QyxZQUFZO1FBQUVMLEtBQUssRUFBRSxDQUFDVTtZQUFBQSxLQUFLLEVBQUVBLEtBQUs7WUFBRUUsTUFBTSxFQUFFQSxNQUFNO1lBQUV1QyxRQUFRLEVBQUUsQ0FBVTtZQUFFdEIsSUFBSSxFQUFHLEdBQXVCLE1BQUUsQ0FBdkJwQixZQUFZLENBQUNpQixPQUFPLEVBQUMsQ0FBRTtRQUFDLENBQUM7UUFBRTBCLFNBQVMsRUFBRXBELG9GQUFlOzs7Ozs7QUFReEosQ0FBQztHQXpMS0MsY0FBYztLQUFkQSxjQUFjO0FBMkxwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRHJhd2luZ1N1cmZhY2UuanN4P2NmOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvRHJhd2luZ1N1cmZhY2UubW9kdWxlLmNzcydcblxuY29uc3QgRHJhd2luZ1N1cmZhY2UgPSAocHJvcHMpID0+IHtcbiAgXG4gIGNvbnN0IHsgZHJhdywgLi4ucmVzdCB9ID0gcHJvcHNcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgLy9jb25zdCBbaXNSZXNpemluZywgc2V0SXNSZXNpemluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlzUmVzaXppbmcgPSB1c2VSZWYoZmFsc2UpO1xuICBcbiAgY29uc3QgdG9wUG9zaXRpb24gPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGxlZnRQb3NpdGlvbiA9IHVzZVJlZigwKTtcblxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDEwMClcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDEwMClcblxuICBjb25zdCBjaGVja0VkZ2UgPSAocG9zLCBib3VuZHMsIG9mZnNldCkgPT4ge1xuICAgIHJldHVybiBwb3MgPCBib3VuZHMgKyBvZmZzZXQgJiYgcG9zID4gYm91bmRzIC0gb2Zmc2V0O1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQ29ybmVyID0gKHhQb3MsIHlQb3MsIHhCb3VuZHMsIHlCb3VuZHMsIG9mZnNldCkgPT4ge1xuICAgIHJldHVybiB4UG9zIDwgeEJvdW5kcyArIG9mZnNldCAmJiB4UG9zID4geEJvdW5kcyAtIG9mZnNldCAmJiB5UG9zIDwgeUJvdW5kcyArIG9mZnNldCAmJiB5UG9zID4geUJvdW5kcyAtIG9mZnNldDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuXG4gICAgLy8gZ2V0IHBvc2l0aW9uaW5nIG9mIGNvbnRhaW5lclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH0gPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIC8vIGNoYW5nZSBjdXJzb3IgYmFzZWQgb24gcG9zaXRpb25cbiAgICBpZiAoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBsZWZ0LCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgLy8gdG9wIGxlZnQgY29ybmVyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibndzZS1yZXNpemVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgcmlnaHQsIGJvdHRvbSwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibmVzdy1yZXNpemVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgcmlnaHQsIHRvcCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgLy8gdG9wIHJpZ2h0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWSwgdG9wLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9wIGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJucy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCBsZWZ0LCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0IGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJldy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VZLCBib3R0b20sIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3R0b20gZWRnZVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm5zLXJlc2l6ZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVgsIHJpZ2h0LCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJldy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzUmVzaXppbmcpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gZWRnZSBvciBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhbGlhc1wiO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcblxuICAgIC8vIGdldCBwb3NpdGlvbmluZyBvZiBjb250YWluZXJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAvLyBjaGFuZ2UgY3Vyc29yIGJhc2VkIG9uIHBvc2l0aW9uXG4gICAgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgdG9wLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgIC8vIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCByaWdodCwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAvLyBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICBpc1Jlc2l6aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICBpc1Jlc2l6aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgIC8vIHRvcCByaWdodCBjb3JuZXJcbiAgICAgIGlzUmVzaXppbmcuY3VycmVudCA9IHRydWU7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZ3JhYmJpbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VZLCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b3AgZWRnZVxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgICAgdG9wUG9zaXRpb24uY3VycmVudCA9IDYwO1xuICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9ICc2MHB4J1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVgsIGxlZnQsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxlZnQgZWRnZVxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVksIGJvdHRvbSwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvdHRvbSBlZGdlXG4gICAgICBpc1Jlc2l6aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWCwgcmlnaHQsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQgZWRnZVxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldmVudCkgPT4ge1xuICAgIC8vIGRlbm90ZXMgcmVzaXppbmcgaGFzIGNlYXNlZFxuICAgIGlzUmVzaXppbmcuY3VycmVudCA9IGZhbHNlO1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcblxuICAgIC8vIGdldCBwb3NpdGlvbmluZyBvZiBjb250YWluZXJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAvLyBjaGFuZ2UgY3Vyc29yIGJhc2VkIG9uIHBvc2l0aW9uXG4gICAgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgdG9wLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgIC8vIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCBib3R0b20sIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgIC8vIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJud3NlLXJlc2l6ZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIGxlZnQsIGJvdHRvbSwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgIC8vIGJvdHRvbSBsZWZ0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgIC8vIHRvcCByaWdodCBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJuZXN3LXJlc2l6ZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVksIHRvcCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvcCBlZGdlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibnMtcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWCwgbGVmdCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGVmdCBlZGdlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZXctcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWSwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tIGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJucy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCByaWdodCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByaWdodCBlZGdlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZXctcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gZWRnZSBvciBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhbGlhc1wiO1xuICAgIH07XG4gIH07ICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpZHRoKHByb3BzLndpZHRoKVxuICAgIHNldEhlaWdodChwcm9wcy5oZWlnaHQpXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICAgIFxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH0gPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBsZXQgZnJhbWVDb3VudCA9IDBcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZFxuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICAgIGZyYW1lQ291bnQrK1xuICAgICAgICBkcmF3KGNhbnZhcywgZnJhbWVDb3VudClcbiAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgIH1cbiAgICByZW5kZXIoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKTtcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpXG4gICAgfVxuICB9LCBbZHJhdywgaXNSZXNpemluZywgdG9wUG9zaXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBzdHlsZT17e3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsZWZ0OiBgJHtsZWZ0UG9zaXRpb24uY3VycmVudH1weGB9fSBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgey8qXG4gICAgICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBjbGFzc05hbWU9e3N0eWxlLmNhbnZhc30gcmVmPXtjYW52YXNSZWZ9PlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMFwiIGN5PVwiMFwiIHI9XCIxMDBcIiBzdHJva2U9XCJncmVlblwiIHN0cm9rZS13aWR0aD1cIjRcIiBmaWxsPVwieWVsbG93XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAqL31cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nU3VyZmFjZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiRHJhd2luZ1N1cmZhY2UiLCJwcm9wcyIsImRyYXciLCJyZXN0IiwiY29udGFpbmVyUmVmIiwiY2FudmFzUmVmIiwiaXNSZXNpemluZyIsInRvcFBvc2l0aW9uIiwibGVmdFBvc2l0aW9uIiwid2lkdGgiLCJzZXRXaWR0aCIsImhlaWdodCIsInNldEhlaWdodCIsImNoZWNrRWRnZSIsInBvcyIsImJvdW5kcyIsIm9mZnNldCIsImNoZWNrQ29ybmVyIiwieFBvcyIsInlQb3MiLCJ4Qm91bmRzIiwieUJvdW5kcyIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY29udGFpbmVyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInBhZ2VYIiwicGFnZVkiLCJkb2N1bWVudCIsImJvZHkiLCJjdXJzb3IiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZVVwIiwiY2FudmFzIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImZyYW1lQ291bnQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGl2IiwicmVmIiwicG9zaXRpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingSurface.jsx\n");

/***/ })

});