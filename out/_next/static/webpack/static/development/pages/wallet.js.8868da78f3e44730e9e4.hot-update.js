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
          lineNumber: 20
        },
        __self: this
      }, __jsx(_src_containers_WalletSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx(_src_containers_FooterSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
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

/***/ }),

/***/ "./src/containers/BannerSection/index.js":
false,

/***/ "./src/containers/WalletSection/index.js":
/*!***********************************************!*\
  !*** ./src/containers/WalletSection/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_RegisterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/RegisterForm */ "./src/components/RegisterForm/index.js");
/* harmony import */ var _components_OurArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/OurArea */ "./src/components/OurArea/index.js");
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SectionTitle */ "./src/components/SectionTitle/index.js");
var _jsxFileName = "C:\\Users\\husen\\OneDrive\\Desktop\\Ousanas Foundation\\ousanasfoundation.github.io\\src\\containers\\WalletSection\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var WalletBanner = function WalletBanner() {
  return __jsx("div", {
    id: "banner",
    className: "banner-area banner-area-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    className: "entry-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Ousanas Foundation ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), "Blockchain for East-Africa"), __jsx("h2", {
    className: "entry-sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "The Ousanas Foundation works to improve the access and awareness of cryptocurrencies and blockchains technology in East-Africa"), __jsx("a", {
    className: "btn btn-white",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Learn More about our project")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 5,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "register-form text-center mg-bottom-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "work with us"), __jsx("h4", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Register Now !"), __jsx(_components_RegisterForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "row-eq-rs-height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Currently Working On",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(_components_OurArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (WalletBanner);

/***/ })

})
//# sourceMappingURL=wallet.js.8868da78f3e44730e9e4.hot-update.js.map