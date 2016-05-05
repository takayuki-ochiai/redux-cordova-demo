webpackHotUpdate(0,{

/***/ 318:
/*!*************************************!*\
  !*** ./react/containers/AddTodo.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 8), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 9), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 35);
	
	var _actions = __webpack_require__(/*! ../actions */ 53);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 273);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 279);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddTodo = function (_Component) {
	  _inherits(AddTodo, _Component);
	
	  function AddTodo(props) {
	    _classCallCheck(this, AddTodo);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodo).call(this, props));
	
	    _this.state = {
	      value: ''
	    };
	    _this.onSubmit = _this.onSubmit.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(AddTodo, [{
	    key: 'onChange',
	    value: function onChange(event) {
	      this.setState({
	        value: event.target.value
	      });
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(event) {
	      event.preventDefault();
	      if (!this.state.value.trim()) {
	        return;
	      }
	      this.props.dispatch((0, _actions.addTodo)(this.state.value));
	      this.setState({
	        value: ''
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.onSubmit },
	          _react2.default.createElement(_TextField2.default, { value: this.state.value, onChange: this.onChange, hintText: 'Todoを入力してください' }),
	          _react2.default.createElement(_RaisedButton2.default, { label: 'Todo追加', type: 'submit' })
	        )
	      );
	    }
	  }]);
	
	  return AddTodo;
	}(_react.Component);
	
	AddTodo.propTypes = {
	  dispatch: _react.PropTypes.func.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)()(AddTodo);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AddTodo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 5)(module)))

/***/ }

})
//# sourceMappingURL=0.5401e9f11a6428fdafba.hot-update.js.map