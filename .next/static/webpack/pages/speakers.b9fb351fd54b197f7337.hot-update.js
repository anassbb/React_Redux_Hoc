webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/HOCS/withSpecialMessage.js":
/*!***************************************************!*\
  !*** ./src/components/HOCS/withSpecialMessage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _reactJsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _jsxFileName = "C:\\Users\\anasa\\Desktop\\work\\React.js\\desining React components\\copy\\copy befor HOC\\src\\components\\HOCS\\withSpecialMessage.js",
    _this = this;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var withSpecialMessage = function withSpecialMessage() {
  return function (Component) {
    return function (props) {
      var specialMessage = 'Talk on Angular Cancelled at 10:30AM';
      return /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(Component, _objectSpread(_objectSpread({}, props), {}, {
        specialMessage: specialMessage
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 10
      }, _this);
    };
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchBar/SearchBar */ "./src/components/SearchBar/SearchBar.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _reducers_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/request */ "./src/reducers/request.js");
/* harmony import */ var _HOCS_witRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../HOCS/witRequest */ "./src/components/HOCS/witRequest.js");
/* harmony import */ var _HOCS_withSpecialMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../HOCS/withSpecialMessage */ "./src/components/HOCS/withSpecialMessage.js");
/* harmony import */ var _HOCS_withSpecialMessage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_HOCS_withSpecialMessage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");





var _jsxFileName = "C:\\Users\\anasa\\Desktop\\work\\React.js\\desining React components\\copy\\copy befor HOC\\src\\components\\Speakers\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Speakers = function Speakers(_ref) {
  _s();

  var speakers = _ref.records,
      status = _ref.status,
      error = _ref.error,
      put = _ref.put,
      bgColor = _ref.bgColor,
      specialMessage = _ref.specialMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var onFavoriteToggleHandler = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(speakerRec) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put(_objectSpread(_objectSpread({}, speakerRec), {}, {
                isFavorite: !speakerRec.isFavorite
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onFavoriteToggleHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var success = status === _reducers_request__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers_request__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].LOADING;
  var hasErrored = status === _reducers_request__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].ERROR;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: bgColor,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2x1",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "font-bold",
        children: " Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }, _this), hasErrored && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-Server running? (try \"npm run json-server\") at terminal prompt", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (rec) {
        var targetString = "".concat(rec.firstName).concat(rec.lastName).toLowerCase();
        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, speaker), {}, {
          onFavoriteToggle: function onFavoriteToggle() {
            return onFavoriteToggleHandler(speaker);
          }
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
}; // export default withRequest('http://localhost:4000', 'speakers')(Speakers);


_s(Speakers, "uixqA8hxOTN7LqZPWxVzG2fnyhQ=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_HOCS_witRequest__WEBPACK_IMPORTED_MODULE_8__["default"])('http://localhost:4000', 'speakers'), _HOCS_withSpecialMessage__WEBPACK_IMPORTED_MODULE_9___default()())(Speakers));

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSE9DUy93aXRoU3BlY2lhbE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIndpdGhTcGVjaWFsTWVzc2FnZSIsIkNvbXBvbmVudCIsInByb3BzIiwic3BlY2lhbE1lc3NhZ2UiLCJTcGVha2VycyIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0IiwiYmdDb2xvciIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyIiwic3BlYWtlclJlYyIsImlzRmF2b3JpdGUiLCJzdWNjZXNzIiwiUkVRVUVTVF9TVEFUVVMiLCJTVUNDRVNTIiwiaXNMb2FkaW5nIiwiTE9BRElORyIsImhhc0Vycm9yZWQiLCJFUlJPUiIsImxlbmd0aCIsIm1lc3NhZ2UiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJjb21wb3NlIiwid2l0aFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQU0sVUFBQ0MsU0FBRDtBQUFBLFdBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3pELFVBQU1DLGNBQWMsR0FBRyxzQ0FBdkI7QUFFQSwwQkFBTywyQkFBQyxTQUFELGtDQUFlRCxLQUFmO0FBQXNCLHNCQUFjLEVBQUVDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBSmdDO0FBQUEsR0FBTjtBQUFBLENBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGFBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBOURELEMsQ0FnRUE7OztHQWhFTS9CLFE7O0tBQUFBLFE7QUFrRVNnQyx5SEFBTyxDQUNwQkMsZ0VBQVcsQ0FBQyx1QkFBRCxFQUEwQixVQUExQixDQURTLEVBRXBCckMsK0RBQWtCLEVBRkUsQ0FBUCxDQUdiSSxRQUhhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYjlmYjM1MWZkNTRiMTk3ZjczMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdpdGhTcGVjaWFsTWVzc2FnZSA9ICgpID0+IChDb21wb25lbnQpID0+IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNwZWNpYWxNZXNzYWdlID0gJ1RhbGsgb24gQW5ndWxhciBDYW5jZWxsZWQgYXQgMTA6MzBBTSc7XHJcblxyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gc3BlY2lhbE1lc3NhZ2U9e3NwZWNpYWxNZXNzYWdlfT48L0NvbXBvbmVudD47XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9TZWFyY2hCYXIvU2VhcmNoQmFyJztcclxuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi4vU3BlYWtlci9TcGVha2VyJztcclxuXHJcbmltcG9ydCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmVxdWVzdCc7XHJcbmltcG9ydCB3aXRoUmVxdWVzdCBmcm9tICcuLi9IT0NTL3dpdFJlcXVlc3QnO1xyXG5pbXBvcnQgd2l0aFNwZWNpYWxNZXNzYWdlIGZyb20gJy4uL0hPQ1Mvd2l0aFNwZWNpYWxNZXNzYWdlJztcclxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICh7XHJcbiAgcmVjb3Jkczogc3BlYWtlcnMsXHJcbiAgc3RhdHVzLFxyXG4gIGVycm9yLFxyXG4gIHB1dCxcclxuICBiZ0NvbG9yLFxyXG4gIHNwZWNpYWxNZXNzYWdlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWMpID0+IHtcclxuICAgIHB1dCh7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWMsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjLmlzRmF2b3JpdGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcclxuICBjb25zdCBoYXNFcnJvcmVkID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtiZ0NvbG9yfT5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuICAgICAge3NwZWNpYWxNZXNzYWdlICYmIHNwZWNpYWxNZXNzYWdlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW9yYW5nZS0xMDAgYm9yZGVyLWwtOCBib3JkZXItb3JhbmdlLTUwMCB0ZXh0LW9yYW5nZS03MDAgcC00IHRleHQtMngxXCJcclxuICAgICAgICAgIHJvbGU9XCJhbGVydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+IFNwZWNpYWwgTWVzc2FnZTwvcD5cclxuICAgICAgICAgIDxwPntzcGVjaWFsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICB7aGFzRXJyb3JlZCAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tU2VydmVyIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXHJcbiAgICAgICAgICBqc29uLXNlcnZlclwiKSBhdCB0ZXJtaW5hbCBwcm9tcHRcclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICAgIHtzcGVha2Vyc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChyZWMpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWMuZmlyc3ROYW1lfSR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChzcGVha2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgIHsuLi5zcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcsICdzcGVha2VycycpKFNwZWFrZXJzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgd2l0aFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcsICdzcGVha2VycycpLFxyXG4gIHdpdGhTcGVjaWFsTWVzc2FnZSgpLFxyXG4pKFNwZWFrZXJzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==