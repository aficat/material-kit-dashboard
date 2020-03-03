webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Navigation.js":
/*!*****************************!*\
  !*** ./pages/Navigation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Git\\mcps\\pages\\Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var Navigation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      collapseID: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleCollapse", function (collapseID) {
      return function () {
        return _this.setState(function (prevState) {
          return {
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
          };
        });
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeCollapse", function (collapseID) {
      return function () {
        window.scrollTo(0, 0);
        _this.state.collapseID === collapseID && _this.setState({
          collapseID: ""
        });
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var overlay = __jsx("div", {
        id: "sidenav-overlay",
        style: {
          backgroundColor: "transparent"
        },
        onClick: this.toggleCollapse("mainNavbarCollapse"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });

      var collapseID = this.state.collapseID;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbar"], {
        color: "indigo",
        dark: true,
        expand: "md",
        scrolling: true,
        fixed: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarBrand"], {
        href: "/",
        className: "py-0 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-school",
        style: {
          height: "1.5rem",
          width: "2rem",
          paddingRight: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("strong", {
        className: "align-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "MODREG")), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarToggler"], {
        onClick: this.toggleCollapse("mainNavbarCollapse"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBCollapse"], {
        id: "mainNavbarCollapse",
        isOpen: this.state.collapseID,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavbarNav"], {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavItem"], {
        style: {
          paddingRight: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavLink"], {
        exact: true,
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Home"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavItem"], {
        style: {
          paddingRight: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_7__["MDBNavLink"], {
        to: "/student",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "My Classes")))))), collapseID && overlay);
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.051da6d935e66dff11ab.hot-update.js.map