webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@material-ui/icons/ChevronLeft.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ChevronLeft.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');

exports.default = _default;

/***/ }),

/***/ "./pages/Dashboard.js":
/*!****************************!*\
  !*** ./pages/Dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _DashboardTable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./DashboardTable */ "./pages/DashboardTable.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/Layers */ "./node_modules/@material-ui/icons/Layers.js");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "./node_modules/@material-ui/icons/Assignment.js");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_38__);








var _jsxFileName = "C:\\Git\\mcps\\pages\\Dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

































var mainListItems = __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_33___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Dashboard",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_34___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Orders",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_35___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Customers",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_36___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Reports",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_37___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Integrations",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
})));

var secondaryListItems = __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_32__["default"], {
  inset: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "Saved reports"), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_38___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Current month",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_38___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Last quarter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_29__["default"], {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_30__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_38___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
})), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_31__["default"], {
  primary: "Year-end sale",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
})));

function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, 'Copyright © ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_24__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Mission Creation Progress Tracker"), ' ', new Date().getFullYear(), '.');
}

var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    toolbar: {
      paddingRight: 24 // keep right padding when drawer closed

    },
    toolbarIcon: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none'
    },
    title: {
      flexGrow: 1
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9)
    }),
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    fixedHeight: {
      height: 240
    }
  };
});
function Dashboard() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  var fixedHeightPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.paper, classes.fixedHeight);
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    position: "absolute",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.appBar, open && classes.appBarShift),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.menuButton, open && classes.menuButtonHidden),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Mission Creation Progress Tracker"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_20__["default"], {
    badgeContent: 4,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }))))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "permanent",
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.drawerPaper, !open && classes.drawerPaperClose)
    },
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("div", {
    className: classes.toolbarIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onClick: handleDrawerClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, mainListItems), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, secondaryListItems)), __jsx("main", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("div", {
    className: classes.appBarSpacer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_21__["default"], {
    maxWidth: "lg",
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_23__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(_DashboardTable__WEBPACK_IMPORTED_MODULE_28__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  })))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    pt: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(Copyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./pages/Navigation.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dashboard */ "./pages/Dashboard.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");





var _jsxFileName = "C:\\Git\\mcps\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // import Router from "next/router";



var useStyles = {
  root: {
    display: 'flex'
  }
};
var classes = useStyles;

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    // componentDidMount = () => {
    //   Router.push("/components");
    // };
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx(_Dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.1c2fa51d2b402a48149e.hot-update.js.map