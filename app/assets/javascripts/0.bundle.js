(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./frontend/components/album/album_audio_player.js":
/*!*********************************************************!*\
  !*** ./frontend/components/album/album_audio_player.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var AlbumAudioPlayer = /*#__PURE__*/function (_React$Component) {
  _inherits(AlbumAudioPlayer, _React$Component);

  var _super = _createSuper(AlbumAudioPlayer);

  function AlbumAudioPlayer(props) {
    var _this;

    _classCallCheck(this, AlbumAudioPlayer);

    _this = _super.call(this, props);
    _this.state = {
      currentTime: 0,
      // current time in song
      duration: 0,
      // lists full time of song
      user: false,
      counter: 0,
      // tracks songs in album
      loaded: false,
      // flip to true after first to satisfy conditional in componentDidUpdate which loads song
      loading: false,
      // tracks whether to show buffer symbol
      btn: false
    };
    _this.nextSong = _this.nextSong.bind(_assertThisInitialized(_this));
    _this.previousSong = _this.previousSong.bind(_assertThisInitialized(_this));
    _this.getTime = _this.getTime.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AlbumAudioPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var aud = document.getElementById("audio-track2");
      aud.value = "0";
      this.audio1.addEventListener('loadedmetadata', function (e) {
        _this2.setState({
          duration: e.target.duration
        });
      });
      this.audio1.addEventListener("timeupdate", function (e) {
        _this2.setState({
          currentTime: e.target.currentTime
        });
      });
      this.audio1.addEventListener("timeupdate", function (e) {
        _this2.seekbar1.value = e.target.currentTime;
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.audio1.removeEventListener("timeupdate", function () {});
      this.audio1.removeEventListener("loadedmetadata", function () {});
    }
  }, {
    key: "playTrack",
    value: function playTrack() {
      if (this.source1.src.split("http://localhost:3000/")[1] !== "") {
        this.audio1.play();
        this.flipAudiobtn();
      }
    }
  }, {
    key: "pauseTrack",
    value: function pauseTrack() {
      this.audio1.pause();
      this.flipAudiobtn();
    }
  }, {
    key: "flipAudiobtn",
    value: function flipAudiobtn() {
      this.setState({
        btn: !this.state.btn
      });
    }
  }, {
    key: "getTime",
    value: function getTime(time) {
      if (!isNaN(time)) {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
      }
    }
  }, {
    key: "nextSong",
    value: function nextSong(songListLength) {
      if (this.state.counter < songListLength - 1) {
        this.setState({
          counter: this.state.counter + 1,
          loaded: false,
          loading: true
        });
      }
    }
  }, {
    key: "previousSong",
    value: function previousSong() {
      if (this.state.counter >= 1) {
        this.setState({
          counter: this.state.counter - 1,
          loaded: false,
          loading: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var src_url = this.props.songs.length ? this.props.songs[this.state.counter].song_url : "";

      if (this.state.loaded && this.props.songs.length === 0) {
        this.setState({
          loaded: false
        });
      }

      if (this.source1 && src_url !== "" && this.state.loaded === false) {
        this.source1.src = src_url;
        this.audio1.pause();
        this.audio1.load();
        this.pauseTrack();
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          loaded: true
        }));
      }

      if (this.audio1.buffered.length === 1 && this.state.loading) {
        this.setState({
          loading: false
        });
      }

      if (this.props.songs.length === 0 && this.state.counter !== 0) {
        this.setState({
          counter: 0
        });
      } // loads audio to remove buffered audio (no TimeRanges obj) and sets duration to 0 so
      // upon changing albums song duration === to '0:00' instead of the duration of buffered song


      if (this.props.songs.length === 0 && this.audio1.buffered.length === 1 && this.source1) {
        this.audio1.load();
        this.setState({
          duration: 0
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dur = this.getTime(this.state.duration);
      var ct = this.getTime(this.state.currentTime);
      var AlLength = this.props.songs.length;
      var src_url = this.props.songs.length ? this.props.songs[this.state.counter].song_url : "";

      if (this.state.counter === this.props.songs.length && this.props.songs) {
        var _src_url = this.props.songs.length ? this.props.songs[this.state.counter - 1].song_url : "";
      }

      if (document.getElementById('ply1')) {
        if (this.audio1.ended) {
          this.audio1.currentTime = 0;
          this.flipPausebtn();
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "audio-player2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        id: "ply1",
        ref: function ref(_ref2) {
          return _this3.audio1 = _ref2;
        },
        type: "audio/mpeg",
        preload: "auto",
        onLoadedMetadata: function onLoadedMetadata() {
          return _this3.seekbar1.max = _this3.audio1.duration;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        ref: function ref(_ref) {
          return _this3.source1 = _ref;
        },
        id: "src2",
        src: src_url
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btns2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "timer2"
      }), !this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.btn ? "disappear" : "",
        id: "play-btn2",
        onClick: function onClick() {
          _this3.playTrack(); // this.flipAudiobtn();

        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSpinner"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.btn ? "" : "disappear",
        id: "pause-btn2",
        onClick: function onClick() {
          _this3.pauseTrack(); // this.flipAudiobtn();

        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "audio-label2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weekly-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "timer2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "curTimeText"
      }, ct), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "durTimeText"
      }, dur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "weekly"
      }, "Title: ", this.props.titles[this.state.counter]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "space-it-out"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "next-song-arrow",
        onClick: function onClick() {
          return _this3.previousSong();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "next-song-arrow",
        onClick: function onClick() {
          return _this3.nextSong(AlLength);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"]
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lower-label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: function ref(_ref3) {
          return _this3.seekbar1 = _ref3;
        },
        type: "range",
        min: "0",
        step: "0.01",
        id: "audio-track2",
        onChange: function onChange() {
          return _this3.audio1.currentTime = _this3.seekbar1.value;
        }
      })))));
    }
  }]);

  return AlbumAudioPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlbumAudioPlayer);

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map