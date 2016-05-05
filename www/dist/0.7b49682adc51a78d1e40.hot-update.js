webpackHotUpdate(0,{

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(35);\n\nvar _actions = __webpack_require__(53);\n\nvar _RaisedButton = __webpack_require__(273);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _TextField = __webpack_require__(279);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddTodo = function (_Component) {\n  _inherits(AddTodo, _Component);\n\n  function AddTodo(props) {\n    _classCallCheck(this, AddTodo);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodo).call(this, props));\n\n    _this.state = {\n      value: ''\n    };\n    _this.onSubmit = _this.onSubmit.bind(_this);\n    _this.onChange = _this.onChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(AddTodo, [{\n    key: 'onChange',\n    value: function onChange(event) {\n      this.setState({\n        value: event.target.value\n      });\n    }\n  }, {\n    key: 'onSubmit',\n    value: function onSubmit(event) {\n      event.preventDefault();\n      if (!this.state.value.trim()) {\n        return;\n      }\n      this.props.dispatch((0, _actions.addTodo)(this.state.value));\n      this.setState({\n        value: ''\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'form',\n          { onSubmit: this.onSubmit },\n          _react2.default.createElement(_TextField2.default, { value: this.state.value, onChange: this.onChange, hintText: 'Cordovaつー' }),\n          _react2.default.createElement(_RaisedButton2.default, { label: 'Todo追加', type: 'submit' })\n        )\n      );\n    }\n  }]);\n\n  return AddTodo;\n}(_react.Component);\n\nAddTodo.propTypes = {\n  dispatch: _react.PropTypes.func.isRequired\n};\n\nexports.default = (0, _reactRedux.connect)()(AddTodo);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"AddTodo.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdC9jb250YWluZXJzL0FkZFRvZG8uanM/NmEyNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJTSxPOzs7QUFDSixtQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkZBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxhQUFPO0FBREksS0FBYjtBQUdBLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7QUFOaUI7QUFPbEI7Ozs7NkJBRVEsSyxFQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWM7QUFDWixlQUFPLE1BQU0sTUFBTixDQUFhO0FBRFIsT0FBZDtBQUdEOzs7NkJBRVEsSyxFQUFPO0FBQ2QsWUFBTSxjQUFOO0FBQ0EsVUFBSSxDQUFDLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsSUFBakIsRUFBTCxFQUE4QjtBQUM1QjtBQUNEO0FBQ0QsV0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixzQkFBUSxLQUFLLEtBQUwsQ0FBVyxLQUFuQixDQUFwQjtBQUNBLFdBQUssUUFBTCxDQUFjO0FBQ1osZUFBTztBQURLLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO1FBQUE7UUFDRTtBQUFBO1VBQUEsRUFBTSxVQUFVLEtBQUssUUFBckI7VUFDRSxxREFBVyxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQTdCLEVBQW9DLFVBQVUsS0FBSyxRQUFuRCxFQUE2RCxVQUFTLFdBQXRFLEdBREY7VUFHRSx3REFBYyxPQUFNLFFBQXBCLEVBQTZCLE1BQUssUUFBbEM7QUFIRjtBQURGLE9BREY7QUFTRDs7Ozs7O0FBR0gsUUFBUSxTQUFSLEdBQW9CO0FBQ2xCLFlBQVUsaUJBQVUsSUFBVixDQUFlO0FBRFAsQ0FBcEI7O2tCQUllLDJCQUFVLE9BQVYsQyIsImZpbGUiOiIzMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFRvZG8gfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCdcblxuXG5cbmNsYXNzIEFkZFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF0aGlzLnN0YXRlLnZhbHVlLnRyaW0oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkVG9kbyh0aGlzLnN0YXRlLnZhbHVlKSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGhpbnRUZXh0PVwiQ29yZG92YeOBpOODvFwiIC8+XG5cbiAgICAgICAgICA8UmFpc2VkQnV0dG9uIGxhYmVsPVwiVG9kb+i/veWKoFwiIHR5cGU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5BZGRUb2RvLnByb3BUeXBlcyA9IHtcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEFkZFRvZG8pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3JlYWN0L2NvbnRhaW5lcnMvQWRkVG9kby5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})