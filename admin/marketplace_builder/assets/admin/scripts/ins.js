(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(['buoy'], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory();
	} else {
		root.ins = factory();
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (){

  'use strict';
  var supports = !!document.querySelector;
  var isValidParams = function (params, message) {
    if (!params) {
      console.error(message);
      return;
    }
    return params;
  }

  var ins = function (element, root) {

    if (!supports) return;
    if (element) {
      var get_params = isValidParams(element, 'Please include element id.');
      if (root){
        var el = root.document.querySelectorAll(get_params);
      } else {
        var el = document.querySelectorAll(get_params);
      }

      if (el.length == 1) {
        return el[0];
      }

      return el;
    }

  }
  return ins;
});

var insRouter = new ((function () {
    function Insites() {
    }
    Insites.prototype.url = function () {
        return window.location;
    };
    Insites.prototype.go = function (path) {
        return document.location.href = path
    };
    return Insites;
}()));
