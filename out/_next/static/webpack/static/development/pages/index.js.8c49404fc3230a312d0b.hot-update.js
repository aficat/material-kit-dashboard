webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/create-react-context/lib/implementation.js":
false,

/***/ "./node_modules/create-react-context/lib/index.js":
false,

/***/ "./node_modules/deep-equal/index.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/es-abstract/GetIntrinsic.js":
false,

/***/ "./node_modules/es-abstract/helpers/callBind.js":
false,

/***/ "./node_modules/focus-trap-react/dist/focus-trap-react.js":
false,

/***/ "./node_modules/focus-trap/index.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/has-symbols/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/is-arguments/index.js":
false,

/***/ "./node_modules/is-date-object/index.js":
false,

/***/ "./node_modules/is-regex/index.js":
false,

/***/ "./node_modules/mdbreact/dist/mdbreact.esm.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/object-is/index.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/react-numeric-input/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
false,

/***/ "./node_modules/react-popper/lib/esm/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/utils.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
false,

/***/ "./node_modules/regexp.prototype.flags/index.js":
false,

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
false,

/***/ "./node_modules/regexp.prototype.flags/shim.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tabbable/index.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Face */ "./node_modules/@material-ui/icons/Face.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var _components_Header_Header_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var _components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CustomDropdown/CustomDropdown.js */ "./components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var _assets_jss_nextjs_material_kit_pages_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js");





var _jsxFileName = "C:\\Git\\mcps\\pages\\Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // @material-ui/core components



 // @material-ui/icons


 // core components







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(_assets_jss_nextjs_material_kit_pages_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
var classes = useStyles();

var Navigation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _Component);

  function Navigation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        xs: 12,
        sm: 12,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: classes.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Menu with Icons")), __jsx(_components_Header_Header_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        brand: "Icons",
        color: "info",
        rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: classes.list,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.listItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          color: "transparent",
          className: classes.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: classes.icons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.listItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          color: "transparent",
          className: classes.navLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, __jsx(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: classes.icons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.listItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx(_components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          left: true,
          navDropdown: true,
          hoverColor: "info",
          dropdownHeader: "Dropdown Header",
          buttonIcon: "settings",
          buttonProps: {
            className: classes.navLink,
            color: "transparent"
          },
          dropdownList: ["Action", "Another action", "Something else here", {
            divider: true
          }, "Separated link", {
            divider: true
          }, "One more separated link"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.8c49404fc3230a312d0b.hot-update.js.map