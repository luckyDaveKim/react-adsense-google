'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleAdsense = function (_React$Component) {
	_inherits(GoogleAdsense, _React$Component);

	function GoogleAdsense() {
		_classCallCheck(this, GoogleAdsense);

		return _possibleConstructorReturn(this, (GoogleAdsense.__proto__ || Object.getPrototypeOf(GoogleAdsense)).apply(this, arguments));
	}

	_createClass(GoogleAdsense, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('ins', { className: 'adsbygoogle ' + this.props.className,
				style: this.props.style,
				'data-ad-client': this.props.adClient,
				'data-ad-slot': this.props.adSlot,
				'data-ad-layout': this.props.adLayout,
				'data-ad-layout-key': this.props.adLayoutKey,
				'data-ad-format': this.props.adFormat,
				'data-full-width-responsive': this.props.fullWidthResponsive });
		}
	}]);

	return GoogleAdsense;
}(_react2.default.Component);

GoogleAdsense.propTypes = {
	className: _propTypes2.default.string,
	style: _propTypes2.default.object,
	adClient: _propTypes2.default.string.isRequired,
	adSlot: _propTypes2.default.string.isRequired,
	adLayout: _propTypes2.default.string,
	adLayoutKey: _propTypes2.default.string,
	adFormat: _propTypes2.default.string,
	fullWidthResponsive: _propTypes2.default.string
};

GoogleAdsense.defaultProps = {
	className: '',
	style: { display: 'block' },
	adLayout: '',
	adLayoutKey: '',
	adFormat: 'auto',
	fullWidthResponsive: 'false'
};

exports.default = GoogleAdsense;