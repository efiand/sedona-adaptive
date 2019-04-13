'use strict'; // Диспетчер подключений для сборки javascript-кода из фрагментов с помощью gulp-include
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
(function() {
  // Плагины общего назначения
  var functions = {}; // (Not found!)require ../../gulpfile.js/functions/**/*.both.js
  // Клиентские модули
  // Применение класса к набору DOM-элементов
  var applyClass = function applyClass(selector, Class) {
    var nodeList = document.querySelectorAll(selector);
    for (var i = 0; i < nodeList.length; i++) {
      new Class(nodeList[i]);
    }
  }; // Классы компонентов
  var Button =
    /*#__PURE__*/
    function() {
      function Button(element) {
        _classCallCheck(this, Button);
        this.element = element;
        this.setInitials();
      }
      _createClass(Button, [{
        key: "setInitials",
        value: function setInitials() {
          // Отменяем скрытие кнопок, ненужных без js
          this.element.classList.remove("hidden");
        }
      }]);
      return Button;
    }();
  applyClass(".button", Button);
})();
