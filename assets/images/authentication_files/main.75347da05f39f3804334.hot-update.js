webpackHotUpdate("main",{

/***/ "./src/components/SecureRoute.js":
/*!***************************************!*\
  !*** ./src/components/SecureRoute.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/fire */ "./src/config/fire.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./General */ "./src/components/General.js");





var _jsxFileName = "/Users/mouhoub/Desktop/authentication/src/components/SecureRoute.js";





var SecureRoute =
/*#__PURE__*/
function (_Component) {
  Object(_Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SecureRoute, _Component);

  function SecureRoute() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SecureRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SecureRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      user: []
    };
    return _this;
  }

  Object(_Users_mouhoub_Desktop_authentication_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SecureRoute, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.authListener();
    }
  }, {
    key: "authListener",
    value: function authListener() {
      var _this2 = this;

      _config_fire__WEBPACK_IMPORTED_MODULE_6__["default"].auth().onAuthStateChanged(function (user) {
        console.log(user);

        if (user) {
          _this2.setState({
            user: user
          });

          localStorage.setItem('user', user.uid);
        } else {
          _this2.setState({
            user: null
          });

          localStorage.removeItem('user');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.user);
      console.log(this.state.user);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.user ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_General__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }]);

  return SecureRoute;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SecureRoute);

/***/ })

})
//# sourceMappingURL=main.75347da05f39f3804334.hot-update.js.map