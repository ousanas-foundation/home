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
          lineNumber: 19
        },
        __self: this
      }, __jsx(_src_containers_InnerPageSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Katanga Wallet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx("div", {
        className: "main-blog-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        lg: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("div", {
        className: "single-post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "post-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("div", {
        className: "entry-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "What is Ousanas Foundation")), __jsx("p", {
        className: "entry-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Hodl Hodl is a global P2P Bitcoin trading platform, that allows users to trade directly with each other and it doesn't hold user\u2019s funds \u2014 locking it in multisig escrow instead. This minimizes the possibility of Bitcoin assets theft and reduces trading time. Because Hodl Hodl does not hold any money (neither Bitcoin, nor fiat) it is not subject to complex compliance procedures. This allows trades to happen directly between users' wallets and without having to submit your identity to the trading platform."), __jsx("div", {
        className: "entry-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "What is Katanga Wallet")), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "How we are different The main difference between Hodl Hodl and other P2P Bitcoin trading platforms is that we care about your privacy and do not hold user\u2019s funds. Hodl Hodl is also cheaper than most of the other P2P trading platforms, with a maximum fee of 0.3% per trade. Another important feature of Hodl Hodl is that you can trade Bitcoin in any location in the world, use any payment method, and be paid in any currency. OTC trading desk Hodl Hodl helps customers that request trading large amounts find a counterparty, in partnership with licensed European broker Tenbagger. We have our own OTC trading desk, providing non-custodial escrow services for trading Bitcoin. OTC trading with us gives you: Secure transactions Competitive rates Same day settlement Private and personalized trading experience 24/7 personalized support"))))))), __jsx(_src_containers_FooterSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
//# sourceMappingURL=wallet.js.c1314018333810ede5ab.hot-update.js.map