(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./frontend/components/bandchampdaily/daily_item.js":
/*!**********************************************************!*\
  !*** ./frontend/components/bandchampdaily/daily_item.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var DailyItem = function DailyItem(props) {
  debugger;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    id: "showcase",
    to: {
      pathname: "/songPage/".concat(props.album.id)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.album.photo_url,
    id: "showcase-pic"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "frame"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "main-title"
  }, props.descrip), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "by-title"
  }, " Title: ", props.album.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "paragraph"
  }, "Cowboy Bebop, one of the most critically acclaimed anime, will definitely knock your socks off with its unique style of music. One of the best examples of this is the show's opening\u2015Tank!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature"
  }, "FEATURE")));
};

/* harmony default export */ __webpack_exports__["default"] = (DailyItem);

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map