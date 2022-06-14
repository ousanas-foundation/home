webpackHotUpdate("static\\development\\pages\\wallet.js",{

/***/ "./pages/wallet.js":
/*!*************************!*\
  !*** ./pages/wallet.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_actions_blog_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/actions/blog.actions */ "./src/actions/blog.actions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _src_containers_InnerPageSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/containers/InnerPageSection */ "./src/containers/InnerPageSection/index.js");
/* harmony import */ var _src_containers_FooterSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/containers/FooterSection */ "./src/containers/FooterSection/index.js");
/* harmony import */ var _src_containers_WalletSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/containers/WalletSection */ "./src/containers/WalletSection/index.js");
/* harmony import */ var _src_containers_WorkSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/containers/WorkSection */ "./src/containers/WorkSection/index.js");
/* harmony import */ var _src_containers_BuySection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/containers/BuySection.js */ "./src/containers/BuySection.js/index.js");
/* harmony import */ var _src_containers_FeatureSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/containers/FeatureSection */ "./src/containers/FeatureSection/index.js");





var _jsxFileName = "C:\\Users\\husen\\OneDrive\\Desktop\\Ousanas Foundation\\ousanasfoundation.github.io\\pages\\wallet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;













var wallet =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(wallet, _Component);

  function wallet() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, wallet);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(wallet).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(wallet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAllBlogInfo();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(_src_containers_WalletSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx(_src_containers_BuySection_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(_src_containers_WorkSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx(_src_containers_FeatureSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx(_src_containers_FooterSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return wallet;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

wallet.getInitialProps = function () {
  return {};
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogInfo: state.blogInfo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllBlogInfo: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_src_actions_blog_actions__WEBPACK_IMPORTED_MODULE_8__["getAllBlogInfo"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(wallet));

/***/ })

})
//# sourceMappingURL=wallet.js.3aa44cc40ac1c612ba4f.hot-update.js.map