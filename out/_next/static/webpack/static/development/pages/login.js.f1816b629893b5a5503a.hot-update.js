webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var _components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var _components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var _components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var _components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var _assets_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/jss/nextjs-material-kit/pages/loginPage.js */ "./assets/jss/nextjs-material-kit/pages/loginPage.js");


var _jsxFileName = "C:\\Git\\mcps\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // @material-ui/core components



 // @material-ui/icons


 // core components










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_nextjs_material_kit_pages_loginPage_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
function LoginPage(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("cardHidden"),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  var rest = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + "https://www.htmlcsscolor.com/preview/gallery/00ACC1.png" + ")",
      backgroundPosition: "top center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes[cardAnimaton],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("form", {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "default",
    className: classes.cardHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Login"), __jsx("div", {
    className: classes.socialLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-google-plus-g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))), __jsx("p", {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Or Be Classical"), __jsx(_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "First Name...",
    id: "first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.inputIconsColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.inputIconsColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Password",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "password",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.inputIconsColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "lock_outline")),
      autoComplete: "off"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.cardFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Get started")))))))));
}

/***/ })

})
//# sourceMappingURL=login.js.f1816b629893b5a5503a.hot-update.js.map