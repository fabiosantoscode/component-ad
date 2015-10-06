'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'p',
    null,
    'Mrec:'
  ),
  _react2['default'].createElement(_index2['default'], { format: 'mrec' }),
  _react2['default'].createElement(
    'p',
    null,
    'Halfpage:'
  ),
  _react2['default'].createElement(_index2['default'], { format: 'halfpage' })
);
module.exports = exports['default'];