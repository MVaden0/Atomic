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

/***/ "./dali/Dali.js":
/*!**********************!*\
  !*** ./dali/Dali.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar Dali = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Dali(options) {\n        _classCallCheck(this, Dali);\n        this.options = options;\n        this.allowedTypes = [\n            'circle'\n        ];\n    }\n    _createClass(Dali, [\n        {\n            key: \"render\",\n            value: function render(frameCount) {\n                var _this = this;\n                this.options.forEach(function(element) {\n                    var type = element.type;\n                    // check if type is in defined types\n                    if (!_this.allowedTypes.includes(type)) {\n                        throw new Error(\"'\".concat(type, \"' is not an allowed type.\"));\n                    }\n                });\n                var fillColor = options.fillColor || '#ffffff';\n                var strokeColor = options.strokeColor || '#ffffff';\n                var fill = options.fill || false;\n                var stroke = options.stroke || false;\n                var radius = options.radius || 10;\n                var x = options.x || 10;\n                var y = options.y || 10;\n                var lineWidth = options.lineWidth || 2;\n            }\n        }\n    ]);\n    return Dali;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dali);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYWxpL0RhbGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFLLENBQUNBLElBQUksaUJBQVYsUUFBUTs7YUFBRkEsSUFBSSxDQUNNQyxPQUFPOztRQUNmLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsQ0FBQztZQUNqQixDQUFRO1FBQ1osQ0FBQyxDQUFDOzs7O1lBR05DLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLFVBQVUsRUFBRSxDQUFDOztnQkFDaEIsSUFBSSxDQUFDSCxPQUFPLENBQUNJLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO29CQUMvQixHQUFLLENBQUNDLElBQUksR0FBR0QsT0FBTyxDQUFDQyxJQUFJO29CQUV6QixFQUFvQztvQkFDcEMsRUFBRSxTQUFRTCxZQUFZLENBQUNNLFFBQVEsQ0FBQ0QsSUFBSSxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUNFLEtBQUssQ0FBRSxDQUFDLEdBQU8sTUFBeUIsQ0FBOUJGLElBQUksRUFBQyxDQUF5QjtvQkFDdEQsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFFSCxHQUFLLENBQUNHLFNBQVMsR0FBR1QsT0FBTyxDQUFDUyxTQUFTLElBQUksQ0FBUztnQkFDaEQsR0FBSyxDQUFDQyxXQUFXLEdBQUdWLE9BQU8sQ0FBQ1UsV0FBVyxJQUFJLENBQVM7Z0JBQ3BELEdBQUssQ0FBQ0MsSUFBSSxHQUFHWCxPQUFPLENBQUNXLElBQUksSUFBSSxLQUFLO2dCQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBR1osT0FBTyxDQUFDWSxNQUFNLElBQUksS0FBSztnQkFDdEMsR0FBSyxDQUFDQyxNQUFNLEdBQUdiLE9BQU8sQ0FBQ2EsTUFBTSxJQUFJLEVBQUU7Z0JBQ25DLEdBQUssQ0FBQ0MsQ0FBQyxHQUFHZCxPQUFPLENBQUNjLENBQUMsSUFBSSxFQUFFO2dCQUN6QixHQUFLLENBQUNDLENBQUMsR0FBR2YsT0FBTyxDQUFDZSxDQUFDLElBQUksRUFBRTtnQkFDekIsR0FBSyxDQUFDQyxTQUFTLEdBQUdoQixPQUFPLENBQUNnQixTQUFTLElBQUksQ0FBQztZQUM1QyxDQUFDOzs7OztBQUdMLCtEQUFlakIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhbGkvRGFsaS5qcz9kZTNmIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERhbGkge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLmFsbG93ZWRUeXBlcyA9IFtcbiAgICAgICAgICAgICdjaXJjbGUnXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lQ291bnQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgaW4gZGVmaW5lZCB0eXBlc1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbG93ZWRUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dHlwZX0nIGlzIG5vdCBhbiBhbGxvd2VkIHR5cGUuYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlsbENvbG9yID0gb3B0aW9ucy5maWxsQ29sb3IgfHwgJyNmZmZmZmYnO1xuICAgICAgICBjb25zdCBzdHJva2VDb2xvciA9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgfHwgJyNmZmZmZmYnO1xuICAgICAgICBjb25zdCBmaWxsID0gb3B0aW9ucy5maWxsIHx8IGZhbHNlO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBvcHRpb25zLnN0cm9rZSB8fCBmYWxzZTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgMTA7XG4gICAgICAgIGNvbnN0IHggPSBvcHRpb25zLnggfHwgMTA7XG4gICAgICAgIGNvbnN0IHkgPSBvcHRpb25zLnkgfHwgMTA7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IG9wdGlvbnMubGluZVdpZHRoIHx8IDI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYWxpOyJdLCJuYW1lcyI6WyJEYWxpIiwib3B0aW9ucyIsImFsbG93ZWRUeXBlcyIsInJlbmRlciIsImZyYW1lQ291bnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInR5cGUiLCJpbmNsdWRlcyIsIkVycm9yIiwiZmlsbENvbG9yIiwic3Ryb2tlQ29sb3IiLCJmaWxsIiwic3Ryb2tlIiwicmFkaXVzIiwieCIsInkiLCJsaW5lV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dali/Dali.js\n");

/***/ })

});