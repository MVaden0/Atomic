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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/DrawingSurface.module.css */ \"./styles/DrawingSurface.module.css\");\n/* harmony import */ var _styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DrawingSurface = function(props) {\n    _s();\n    var draw = props.draw, rest = _objectWithoutProperties(props, [\n        \"draw\"\n    ]);\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //const [isResizing, setIsResizing] = useState(false);\n    var isResizing = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), width = ref2[0], setWidth = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), height = ref1[0], setHeight = ref1[1];\n    var checkEdge = function(pos, bounds, offset) {\n        return pos < bounds + offset && pos > bounds - offset;\n    };\n    var checkCorner = function(xPos, yPos, xBounds, yBounds, offset) {\n        return xPos < xBounds + offset && xPos > xBounds - offset && yPos < yBounds + offset && yPos > yBounds - offset;\n    };\n    var handleMouseMove = function(event) {\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (!isResizing) {\n            document.body.style.cursor = \"alias\";\n        }\n        ;\n    };\n    var handleMouseDown = function(event) {\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        } else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {\n            isResizing.current = true;\n            document.body.style.cursor = \"grabbing\";\n        }\n        ;\n    };\n    var handleMouseUp = function(event) {\n        // denotes resizing has ceased\n        isResizing.current = false;\n        // get reference to container\n        var container = containerRef.current;\n        // get positioning of container\n        var ref = container.getBoundingClientRect(), top = ref.top, left = ref.left, bottom = ref.bottom, right = ref.right;\n        // change cursor based on position\n        if (checkCorner(event.pageX, event.pageY, left, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nwse-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, left, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkCorner(event.pageX, event.pageY, right, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"nesw-resize\";\n        } else if (checkEdge(event.pageY, top, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, left, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (checkEdge(event.pageY, bottom, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ns-resize\";\n        } else if (checkEdge(event.pageX, right, 20) && !isResizing.current) {\n            document.body.style.cursor = \"ew-resize\";\n        } else if (!isResizing) {\n            document.body.style.cursor = \"alias\";\n        }\n        ;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setWidth(props.width);\n        setHeight(props.height);\n        var canvas = canvasRef.current;\n        var frameCount = 0;\n        var animationFrameId;\n        var render = function() {\n            frameCount++;\n            draw(canvas, frameCount);\n            animationFrameId = window.requestAnimationFrame(render);\n        };\n        render();\n        window.addEventListener('mousemove', handleMouseMove);\n        window.addEventListener('mousedown', handleMouseDown);\n        window.addEventListener('mouseup', handleMouseUp);\n        return function() {\n            window.cancelAnimationFrame(animationFrameId);\n        };\n    }, [\n        draw,\n        isResizing\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: width,\n            height: height\n        },\n        className: (_styles_DrawingSurface_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)\n    }, void 0, false, {\n        fileName: \"/home/michael/code/Atomic/frontend/components/DrawingSurface.jsx\",\n        lineNumber: 171,\n        columnNumber: 7\n    }, _this);\n};\n_s(DrawingSurface, \"bTtyc9/RK6FQnfiI+W9d0uvD2lk=\");\n_c = DrawingSurface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawingSurface);\nvar _c;\n$RefreshReg$(_c, \"DrawingSurface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNRLE1BQU07UUFFdEIsR0FBSyxDQUFDMkIsTUFBTSxHQUFHL0IsU0FBUyxDQUFDa0IsT0FBTztRQUVoQyxHQUFHLENBQUNjLFVBQVUsR0FBRyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQ0MsZ0JBQWdCO1FBRXBCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQ25CLEdBRHlCLENBQUM7WUFFbEJGLFVBQVU7WUFDVm5DLElBQUksQ0FBQ2tDLE1BQU0sRUFBRUMsVUFBVTtZQUN2QkMsZ0JBQWdCLEdBQUdFLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUNGLE1BQU07UUFDMUQsQ0FBQztRQUNEQSxNQUFNO1FBRU5DLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsQ0FBVyxZQUFFdEIsZUFBZSxDQUFDLENBQUM7UUFDdERvQixNQUFNLENBQUNFLGdCQUFnQixDQUFDLENBQVcsWUFBRVIsZUFBZSxDQUFDLENBQUM7UUFDdERNLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsQ0FBUyxVQUFFUCxhQUFhLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsUUFDWCxHQURpQixDQUFDO1lBQ1pLLE1BQU0sQ0FBQ0csb0JBQW9CLENBQUNMLGdCQUFnQjtRQUM5QyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNwQztRQUFBQSxJQUFJO1FBQUVJLFVBQVU7SUFBQSxDQUFDO0lBRXJCLE1BQU0sNkVBQ0RzQyxDQUFHO1FBQUNDLEdBQUcsRUFBRXpDLFlBQVk7UUFBRUwsS0FBSyxFQUFFLENBQUNRO1lBQUFBLEtBQUssRUFBRUEsS0FBSztZQUFFRSxNQUFNLEVBQUVBLE1BQU07UUFBQSxDQUFDO1FBQUVxQyxTQUFTLEVBQUUvQyxvRkFBZTs7Ozs7O0FBUS9GLENBQUM7R0EvS0tDLGNBQWM7S0FBZEEsY0FBYztBQWlMcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RyYXdpbmdTdXJmYWNlLmpzeD9jZjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0RyYXdpbmdTdXJmYWNlLm1vZHVsZS5jc3MnXG5cbmNvbnN0IERyYXdpbmdTdXJmYWNlID0gKHByb3BzKSA9PiB7XG4gIFxuICBjb25zdCB7IGRyYXcsIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKVxuXG4gIC8vY29uc3QgW2lzUmVzaXppbmcsIHNldElzUmVzaXppbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpc1Jlc2l6aW5nID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDEwMClcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDEwMClcblxuICBjb25zdCBjaGVja0VkZ2UgPSAocG9zLCBib3VuZHMsIG9mZnNldCkgPT4ge1xuICAgIHJldHVybiBwb3MgPCBib3VuZHMgKyBvZmZzZXQgJiYgcG9zID4gYm91bmRzIC0gb2Zmc2V0O1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQ29ybmVyID0gKHhQb3MsIHlQb3MsIHhCb3VuZHMsIHlCb3VuZHMsIG9mZnNldCkgPT4ge1xuICAgIHJldHVybiB4UG9zIDwgeEJvdW5kcyArIG9mZnNldCAmJiB4UG9zID4geEJvdW5kcyAtIG9mZnNldCAmJiB5UG9zIDwgeUJvdW5kcyArIG9mZnNldCAmJiB5UG9zID4geUJvdW5kcyAtIG9mZnNldDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuXG4gICAgLy8gZ2V0IHBvc2l0aW9uaW5nIG9mIGNvbnRhaW5lclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH0gPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIC8vIGNoYW5nZSBjdXJzb3IgYmFzZWQgb24gcG9zaXRpb25cbiAgICBpZiAoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBsZWZ0LCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgLy8gdG9wIGxlZnQgY29ybmVyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibndzZS1yZXNpemVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgcmlnaHQsIGJvdHRvbSwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibmVzdy1yZXNpemVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgcmlnaHQsIHRvcCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgLy8gdG9wIHJpZ2h0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWSwgdG9wLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9wIGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJucy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCBsZWZ0LCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0IGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJldy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VZLCBib3R0b20sIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3R0b20gZWRnZVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm5zLXJlc2l6ZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVgsIHJpZ2h0LCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJldy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzUmVzaXppbmcpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gZWRnZSBvciBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhbGlhc1wiO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcblxuICAgIC8vIGdldCBwb3NpdGlvbmluZyBvZiBjb250YWluZXJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAvLyBjaGFuZ2UgY3Vyc29yIGJhc2VkIG9uIHBvc2l0aW9uXG4gICAgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgdG9wLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgIC8vIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoY2hlY2tDb3JuZXIoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCByaWdodCwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAvLyBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgICBpc1Jlc2l6aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXG4gICAgICBpc1Jlc2l6aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgIC8vIHRvcCByaWdodCBjb3JuZXJcbiAgICAgIGlzUmVzaXppbmcuY3VycmVudCA9IHRydWU7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZ3JhYmJpbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VZLCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b3AgZWRnZVxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVgsIGxlZnQsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxlZnQgZWRnZVxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVksIGJvdHRvbSwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvdHRvbSBlZGdlXG4gICAgICBpc1Jlc2l6aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWCwgcmlnaHQsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQgZWRnZVxuICAgICAgaXNSZXNpemluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJncmFiYmluZ1wiO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldmVudCkgPT4ge1xuICAgIC8vIGRlbm90ZXMgcmVzaXppbmcgaGFzIGNlYXNlZFxuICAgIGlzUmVzaXppbmcuY3VycmVudCA9IGZhbHNlO1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcblxuICAgIC8vIGdldCBwb3NpdGlvbmluZyBvZiBjb250YWluZXJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAvLyBjaGFuZ2UgY3Vyc29yIGJhc2VkIG9uIHBvc2l0aW9uXG4gICAgaWYgKGNoZWNrQ29ybmVyKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSwgbGVmdCwgdG9wLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgIC8vIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm53c2UtcmVzaXplXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCBib3R0b20sIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgIC8vIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJud3NlLXJlc2l6ZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIGxlZnQsIGJvdHRvbSwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgIC8vIGJvdHRvbSBsZWZ0IGNvcm5lclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIm5lc3ctcmVzaXplXCI7XG4gICAgfSBcbiAgICBlbHNlIGlmIChjaGVja0Nvcm5lcihldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIHJpZ2h0LCB0b3AsIDIwKSAmJiAhaXNSZXNpemluZy5jdXJyZW50KSB7ICAgICAgIC8vIHRvcCByaWdodCBjb3JuZXJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJuZXN3LXJlc2l6ZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGVja0VkZ2UoZXZlbnQucGFnZVksIHRvcCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvcCBlZGdlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwibnMtcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWCwgbGVmdCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGVmdCBlZGdlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZXctcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrRWRnZShldmVudC5wYWdlWSwgYm90dG9tLCAyMCkgJiYgIWlzUmVzaXppbmcuY3VycmVudCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm90dG9tIGVkZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJucy1yZXNpemVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tFZGdlKGV2ZW50LnBhZ2VYLCByaWdodCwgMjApICYmICFpc1Jlc2l6aW5nLmN1cnJlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByaWdodCBlZGdlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiZXctcmVzaXplXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc1Jlc2l6aW5nKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vIGVkZ2Ugb3IgY29ybmVyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiYWxpYXNcIjtcbiAgICB9O1xuICB9OyAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaWR0aChwcm9wcy53aWR0aClcbiAgICBzZXRIZWlnaHQocHJvcHMuaGVpZ2h0KVxuXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnRcblxuICAgIGxldCBmcmFtZUNvdW50ID0gMFxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkXG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgZnJhbWVDb3VudCsrXG4gICAgICAgIGRyYXcoY2FudmFzLCBmcmFtZUNvdW50KVxuICAgICAgICBhbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpXG4gICAgfVxuICAgIHJlbmRlcigpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlTW91c2VEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZClcbiAgICB9XG4gIH0sIFtkcmF3LCBpc1Jlc2l6aW5nXSlcblxuICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gc3R5bGU9e3t3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fX0gY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICAgIHsvKlxuICAgICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gY2xhc3NOYW1lPXtzdHlsZS5jYW52YXN9IHJlZj17Y2FudmFzUmVmfT5cbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjBcIiBjeT1cIjBcIiByPVwiMTAwXCIgc3Ryb2tlPVwiZ3JlZW5cIiBzdHJva2Utd2lkdGg9XCI0XCIgZmlsbD1cInllbGxvd1wiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKi99XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZ1N1cmZhY2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsIkRyYXdpbmdTdXJmYWNlIiwicHJvcHMiLCJkcmF3IiwicmVzdCIsImNvbnRhaW5lclJlZiIsImNhbnZhc1JlZiIsImlzUmVzaXppbmciLCJ3aWR0aCIsInNldFdpZHRoIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiY2hlY2tFZGdlIiwicG9zIiwiYm91bmRzIiwib2Zmc2V0IiwiY2hlY2tDb3JuZXIiLCJ4UG9zIiwieVBvcyIsInhCb3VuZHMiLCJ5Qm91bmRzIiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwicGFnZVgiLCJwYWdlWSIsImRvY3VtZW50IiwiYm9keSIsImN1cnNvciIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZU1vdXNlVXAiLCJjYW52YXMiLCJmcmFtZUNvdW50IiwiYW5pbWF0aW9uRnJhbWVJZCIsInJlbmRlciIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingSurface.jsx\n");

/***/ })

});