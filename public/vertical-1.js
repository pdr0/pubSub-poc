(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  'lotto.main.header.expanded': 'lotto.main.header.expanded',
  'lotto.container-1.click': 'lotto.container-1.click',
  'lotto.container-2.click': 'lotto.container-2.click',
  'lotto.container-3.click': 'lotto.container-3.click',
  'lotto.container-4.click': 'lotto.container-4.click',
  'lotto.main.loaded': 'lotto.main.loaded',
  'lotto.container-1.loaded': 'lotto.container-1.loaded',
  'lotto.main.search.click': 'lotto.main.search.click',
  'lotto.main.help.click': 'lotto.main.help.click',
  'lotto.main.login.click': 'lotto.main.login.click'
};
exports["default"] = _default;
},{}],2:[function(require,module,exports){
"use strict";

var _topics = _interopRequireDefault(require("../topics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var container = document.querySelector('#vertical-1');

var onMessage = function onMessage(msg, data) {
  console.log("TOPIC: ".concat(msg, " - payload: ").concat(data));

  if (msg === _topics["default"]["lotto.main.search.click"]) {
    container.className = '';
    container.classList.add('on-search');
  }

  if (msg === _topics["default"]["lotto.container-2.click"]) {
    container.className = '';
    container.classList.add('on-payment');
  }
};

container.addEventListener('click', function (evt) {
  window.messages.publishSync(_topics["default"]["lotto.container-1.click"], true);
});
window.messages.subscribe(_topics["default"]["lotto.main.search.click"], onMessage);
window.messages.subscribe(_topics["default"]["lotto.container-2.click"], onMessage);
window.messages.publishSync(_topics["default"]["lotto.container-1.loaded"], true);
},{"../topics":1}]},{},[2]);
