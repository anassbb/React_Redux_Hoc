webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/HOCS/withSpecialMessage.js":
/*!***************************************************!*\
  !*** ./src/components/HOCS/withSpecialMessage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "C:\\Users\\anasa\\Desktop\\work\\React.js\\desining React components\\copy\\copy befor HOC\\src\\components\\HOCS\\withSpecialMessage.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var withSpecialMessage = function withSpecialMessage() {
  return function (Component) {
    return function (props) {
      var specialMessage = 'Talk on Angular Cancelled at 10:30AM';
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, props), {}, {
        specialMessage: specialMessage
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 10
      }, _this);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withSpecialMessage);

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
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_HOCS_witRequest__WEBPACK_IMPORTED_MODULE_8__["default"])('http://localhost:4000', 'speakers'), Object(_HOCS_withSpecialMessage__WEBPACK_IMPORTED_MODULE_9__["default"])())(Speakers));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSE9DUy93aXRoU3BlY2lhbE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIndpdGhTcGVjaWFsTWVzc2FnZSIsIkNvbXBvbmVudCIsInByb3BzIiwic3BlY2lhbE1lc3NhZ2UiLCJTcGVha2VycyIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0IiwiYmdDb2xvciIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyIiwic3BlYWtlclJlYyIsImlzRmF2b3JpdGUiLCJzdWNjZXNzIiwiUkVRVUVTVF9TVEFUVVMiLCJTVUNDRVNTIiwiaXNMb2FkaW5nIiwiTE9BRElORyIsImhhc0Vycm9yZWQiLCJFUlJPUiIsImxlbmd0aCIsIm1lc3NhZ2UiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJjb21wb3NlIiwid2l0aFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFNLFVBQUNDLFNBQUQ7QUFBQSxXQUFlLFVBQUNDLEtBQUQsRUFBVztBQUN6RCxVQUFNQyxjQUFjLEdBQUcsc0NBQXZCO0FBRUEsMEJBQU8scUVBQUMsU0FBRCxrQ0FBZUQsS0FBZjtBQUFzQixzQkFBYyxFQUFFQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUpnQztBQUFBLEdBQU47QUFBQSxDQUEzQjs7QUFNZUgsaUZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUFBO0FBQUE7QUFBQSxhQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQTlERCxDLENBZ0VBOzs7R0FoRU0vQixROztLQUFBQSxRO0FBa0VTZ0MseUhBQU8sQ0FDcEJDLGdFQUFXLENBQUMsdUJBQUQsRUFBMEIsVUFBMUIsQ0FEUyxFQUVwQnJDLHdFQUFrQixFQUZFLENBQVAsQ0FHYkksUUFIYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmI2ZDQxYTMzMTc3MDM3Y2JiN2E4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3aXRoU3BlY2lhbE1lc3NhZ2UgPSAoKSA9PiAoQ29tcG9uZW50KSA9PiAocHJvcHMpID0+IHtcclxuICBjb25zdCBzcGVjaWFsTWVzc2FnZSA9ICdUYWxrIG9uIEFuZ3VsYXIgQ2FuY2VsbGVkIGF0IDEwOjMwQU0nO1xyXG5cclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHNwZWNpYWxNZXNzYWdlPXtzcGVjaWFsTWVzc2FnZX0+PC9Db21wb25lbnQ+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNwZWNpYWxNZXNzYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyL1NlYXJjaEJhcic7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gJy4uL1NwZWFrZXIvU3BlYWtlcic7XHJcblxyXG5pbXBvcnQgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3JlcXVlc3QnO1xyXG5pbXBvcnQgd2l0aFJlcXVlc3QgZnJvbSAnLi4vSE9DUy93aXRSZXF1ZXN0JztcclxuaW1wb3J0IHdpdGhTcGVjaWFsTWVzc2FnZSBmcm9tICcuLi9IT0NTL3dpdGhTcGVjaWFsTWVzc2FnZSc7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoe1xyXG4gIHJlY29yZHM6IHNwZWFrZXJzLFxyXG4gIHN0YXR1cyxcclxuICBlcnJvcixcclxuICBwdXQsXHJcbiAgYmdDb2xvcixcclxuICBzcGVjaWFsTWVzc2FnZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlciA9IGFzeW5jIChzcGVha2VyUmVjKSA9PiB7XHJcbiAgICBwdXQoe1xyXG4gICAgICAuLi5zcGVha2VyUmVjLFxyXG4gICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlYy5pc0Zhdm9yaXRlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XHJcbiAgY29uc3QgaGFzRXJyb3JlZCA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmdDb2xvcn0+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIHtzcGVjaWFsTWVzc2FnZSAmJiBzcGVjaWFsTWVzc2FnZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtMTAwIGJvcmRlci1sLTggYm9yZGVyLW9yYW5nZS01MDAgdGV4dC1vcmFuZ2UtNzAwIHAtNCB0ZXh0LTJ4MVwiXHJcbiAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPiBTcGVjaWFsIE1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICA8cD57c3BlY2lhbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAge2hhc0Vycm9yZWQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uIElzIHRoZSBqc29uLVNlcnZlciBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxyXG4gICAgICAgICAganNvbi1zZXJ2ZXJcIikgYXQgdGVybWluYWwgcHJvbXB0XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7c3BlYWtlcnNcclxuICAgICAgICAgICAgLmZpbHRlcigocmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjLmZpcnN0TmFtZX0ke3JlYy5sYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgICB7Li4uc3BlYWtlcn1cclxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAnLCAnc3BlYWtlcnMnKShTcGVha2Vycyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG4gIHdpdGhSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAnLCAnc3BlYWtlcnMnKSxcclxuICB3aXRoU3BlY2lhbE1lc3NhZ2UoKSxcclxuKShTcGVha2Vycyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=