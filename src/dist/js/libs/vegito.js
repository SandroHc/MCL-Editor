// Vegito 1.1.0 - https://github.com/egoist/vegito
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vegito = factory());
}(this, (function () { 'use strict';

var index = function (
  tpl,
  data,
  ref
) {
  if ( tpl === void 0 ) tpl = '';
  if ( data === void 0 ) data = {};
  if ( ref === void 0 ) ref = {};
  var delimiters = ref.delimiters; if ( delimiters === void 0 ) delimiters = ['{{', '}}'];
  var safe = ref.safe; if ( safe === void 0 ) safe = false;
  var sanitize = ref.sanitize;

  var re = new RegExp(((delimiters[0]) + "([\\s\\S]+?)" + (delimiters[1])), 'g');

  return tpl.replace(re, function (_, exp) {
    if (!safe) {
      exp = sanitize ? sanitize(exp) : exp;
      return new Function('data', ("with (data) {return " + exp + "}"))(data) // eslint-disable-line no-new-func
    }

    var ret = data;

    for (var i = 0, list = exp.split('.'); i < list.length; i += 1) {
      var prop = list[i];

      ret = ret ? ret[prop] : '';
    }

    return ret || ''
  })
};

return index;

})));
