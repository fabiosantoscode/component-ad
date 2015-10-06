'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Ad = (function (_React$Component) {
  _inherits(Ad, _React$Component);

  function Ad() {
    _classCallCheck(this, Ad);

    _React$Component.apply(this, arguments);
  }

  Ad.prototype.render = function render() {
    var size = Ad.formats[this.props.format];
    var uri = 'http://placecage.com/' + size.x + '/' + size.y;
    return _react2['default'].createElement('img', { src: uri });
  };

  _createClass(Ad, null, [{
    key: 'propTypes',
    value: {
      format: _react2['default'].PropTypes.oneOf(['mrec', 'halfpage'])
    },
    enumerable: true
  }, {
    key: 'formats',
    value: {
      mrec: { x: 300, y: 250 },
      halfpage: { x: 300, y: 500 }
    },
    enumerable: true
  }]);

  return Ad;
})(_react2['default'].Component);

exports['default'] = Ad;
module.exports = exports['default'];