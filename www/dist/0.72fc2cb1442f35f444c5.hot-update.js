webpackHotUpdate(0,{

/***/ 311:
/*!*********************************!*\
  !*** ./react/components/App.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 8), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 9), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Footer = __webpack_require__(/*! ./Footer */ 312);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _NavLink = __webpack_require__(/*! ../containers/NavLink */ 137);
	
	var _NavLink2 = _interopRequireDefault(_NavLink);
	
	var _AddTodo = __webpack_require__(/*! ../containers/AddTodo */ 318);
	
	var _AddTodo2 = _interopRequireDefault(_AddTodo);
	
	var _VisibleTodoList = __webpack_require__(/*! ../containers/VisibleTodoList */ 321);
	
	var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);
	
	var _constants = __webpack_require__(/*! ../actions/constants */ 26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: this.props.style },
	        _react2.default.createElement(_AddTodo2.default, null),
	        _react2.default.createElement(_VisibleTodoList2.default, null),
	        _react2.default.createElement(
	          _NavLink2.default,
	          { transitionActionType: _constants.ROUTER_TRANSITION_ACTIONS.TRANSITION_POP, to: '/', onlyActiveOnIndex: true },
	          'Home'
	        ),
	        _react2.default.createElement(
	          _NavLink2.default,
	          { transitionActionType: _constants.ROUTER_TRANSITION_ACTIONS.TRANSITION_SLIDE_LEFT, to: '/about' },
	          'About'
	        ),
	        _react2.default.createElement(
	          _NavLink2.default,
	          { transitionActionType: _constants.ROUTER_TRANSITION_ACTIONS.TRANSITION_FADE, to: '/motion-practice' },
	          'MotionPractice'
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 5)(module)))

/***/ }

})
//# sourceMappingURL=0.72fc2cb1442f35f444c5.hot-update.js.map