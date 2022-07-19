/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/cv-block-icons/icons.js":
/*!****************************************!*\
  !*** ./assets/cv-block-icons/icons.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Blocks Icons
 */
var Icons = {};
Icons.Grid = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "grid"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.504 0h13.045c0.279 0 0.505 0.226 0.505 0.504v13.045c0 0.279-0.226 0.505-0.505 0.505h-13.045c-0.279 0-0.504-0.226-0.504-0.505v-13.045c0-0.279 0.226-0.504 0.504-0.504z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M18.45 0h13.045c0.279 0 0.505 0.226 0.505 0.504v13.045c0 0.279-0.226 0.505-0.505 0.505h-13.045c-0.279 0-0.505-0.226-0.505-0.505v-13.045c0-0.279 0.226-0.504 0.505-0.504z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.504 17.946h13.045c0.279 0 0.505 0.226 0.505 0.505v13.045c0 0.279-0.226 0.505-0.505 0.505h-13.045c-0.279 0-0.504-0.226-0.504-0.505v-13.045c0-0.279 0.226-0.505 0.504-0.505z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M18.45 17.946h13.045c0.279 0 0.505 0.226 0.505 0.505v13.045c0 0.279-0.226 0.505-0.505 0.505h-13.045c-0.279 0-0.505-0.226-0.505-0.505v-13.045c0-0.279 0.226-0.505 0.505-0.505z"
}));
Icons.List = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "list"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M29.188 1.875h-15.125c-1.551 0-2.813 1.262-2.813 2.813s1.262 2.813 2.813 2.813h15.125c1.551 0 2.813-1.262 2.813-2.813s-1.262-2.813-2.813-2.813z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M29.188 13.125h-15.125c-1.551 0-2.813 1.324-2.813 2.875s1.262 2.813 2.813 2.813h15.125c1.551 0 2.813-1.262 2.813-2.813s-1.262-2.875-2.813-2.875z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M29.188 24.5h-15.125c-1.551 0-2.813 1.262-2.813 2.813s1.262 2.813 2.813 2.813h15.125c1.551 0 2.813-1.262 2.813-2.813s-1.262-2.813-2.813-2.813z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.938 32h7.5c0.518 0 0.938-0.419 0.938-0.938v-7.5c0-0.518-0.419-0.938-0.938-0.938h-7.5c-0.518 0-0.938 0.419-0.938 0.938v7.5c0 0.518 0.419 0.938 0.938 0.938z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.938 20.75h7.5c0.518 0 0.938-0.419 0.938-0.938v-7.625c0-0.518-0.419-0.938-0.938-0.938h-7.5c-0.518 0-0.938 0.419-0.938 0.938v7.625c0 0.518 0.419 0.938 0.938 0.938z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.938 9.375h7.5c0.518 0 0.938-0.419 0.938-0.938v-7.5c0-0.518-0.419-0.938-0.938-0.938h-7.5c-0.518 0-0.938 0.419-0.938 0.938v7.5c0 0.518 0.419 0.938 0.938 0.938z"
}));
Icons.Masonry = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, "masonary"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.508 0h13.134c0.281 0 0.508 0.175 0.508 0.39v10.104c0 0.218-0.227 0.39-0.508 0.39h-13.134c-0.281 0-0.508-0.175-0.508-0.39v-10.104c0-0.215 0.227-0.39 0.508-0.39z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0.508 14.585h13.134c0.281 0 0.508 0.28 0.508 0.626v16.164c0 0.345-0.227 0.626-0.508 0.626h-13.134c-0.281 0-0.508-0.28-0.508-0.625v-16.164c0-0.345 0.227-0.626 0.508-0.626z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M31.71 32h-13.134c-0.281 0-0.508-0.175-0.508-0.39v-10.104c0-0.218 0.227-0.39 0.508-0.39h13.134c0.281 0 0.508 0.175 0.508 0.39v10.104c0 0.215-0.227 0.39-0.508 0.39z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M31.71 17.415h-13.134c-0.281 0-0.508-0.28-0.508-0.625v-16.164c0-0.345 0.227-0.625 0.508-0.625h13.134c0.281 0 0.508 0.28 0.508 0.625v16.164c0 0.345-0.227 0.625-0.508 0.625z"
}));
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/batch-processor/src/batch-processor.js":
/*!*************************************************************!*\
  !*** ./node_modules/batch-processor/src/batch-processor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/batch-processor/src/utils.js");

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ "./node_modules/batch-processor/src/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/batch-processor/src/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "./node_modules/create-react-class/factory.js":
/*!****************************************************!*\
  !*** ./node_modules/create-react-class/factory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");

if (true) {
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (true) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (true) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (true) {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (true) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (true) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (true) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ "./node_modules/create-react-class/index.js":
/*!**************************************************!*\
  !*** ./node_modules/create-react-class/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(/*! react */ "react");
var factory = __webpack_require__(/*! ./factory */ "./node_modules/create-react-class/factory.js");

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ "./node_modules/cssbeautify/cssbeautify.js":
/*!*************************************************!*\
  !*** ./node_modules/cssbeautify/cssbeautify.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 Copyright (C) 2013 Sencha Inc.
 Copyright (C) 2012 Sencha Inc.
 Copyright (C) 2011 Sencha Inc.

 Author: Ariya Hidayat.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/*jslint continue: true, indent: 4 */
/*global exports:true, module:true, window:true */

(function () {

    'use strict';

    function cssbeautify(style, opt) {

        var options, index = 0, length = style.length, blocks, formatted = '',
            ch, ch2, str, state, State, depth, quote, comment,
            openbracesuffix = true,
            autosemicolon = false,
            trimRight;

        options = arguments.length > 1 ? opt : {};
        if (typeof options.indent === 'undefined') {
            options.indent = '    ';
        }
        if (typeof options.openbrace === 'string') {
            openbracesuffix = (options.openbrace === 'end-of-line');
        }
        if (typeof options.autosemicolon === 'boolean') {
            autosemicolon = options.autosemicolon;
        }

        function isWhitespace(c) {
            return (c === ' ') || (c === '\n') || (c === '\t') || (c === '\r') || (c === '\f');
        }

        function isQuote(c) {
            return (c === '\'') || (c === '"');
        }

        // FIXME: handle Unicode characters
        function isName(c) {
            return (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9') ||
                '-_*.:#[]'.indexOf(c) >= 0;
        }

        function appendIndent() {
            var i;
            for (i = depth; i > 0; i -= 1) {
                formatted += options.indent;
            }
        }

        function openBlock() {
            formatted = trimRight(formatted);
            if (openbracesuffix) {
                formatted += ' {';
            } else {
                formatted += '\n';
                appendIndent();
                formatted += '{';
            }
            if (ch2 !== '\n') {
                formatted += '\n';
            }
            depth += 1;
        }

        function closeBlock() {
            var last;
            depth -= 1;
            formatted = trimRight(formatted);

            if (formatted.length > 0 && autosemicolon) {
                last = formatted.charAt(formatted.length - 1);
                if (last !== ';' && last !== '{') {
                    formatted += ';';
                }
            }

            formatted += '\n';
            appendIndent();
            formatted += '}';
            blocks.push(formatted);
            formatted = '';
        }

        if (String.prototype.trimRight) {
            trimRight = function (s) {
                return s.trimRight();
            };
        } else {
            // old Internet Explorer
            trimRight = function (s) {
                return s.replace(/\s+$/, '');
            };
        }

        State = {
            Start: 0,
            AtRule: 1,
            Block: 2,
            Selector: 3,
            Ruleset: 4,
            Property: 5,
            Separator: 6,
            Expression: 7,
            URL: 8
        };

        depth = 0;
        state = State.Start;
        comment = false;
        blocks = [];

        // We want to deal with LF (\n) only
        style = style.replace(/\r\n/g, '\n');

        while (index < length) {
            ch = style.charAt(index);
            ch2 = style.charAt(index + 1);
            index += 1;

            // Inside a string literal?
            if (isQuote(quote)) {
                formatted += ch;
                if (ch === quote) {
                    quote = null;
                }
                if (ch === '\\' && ch2 === quote) {
                    // Don't treat escaped character as the closing quote
                    formatted += ch2;
                    index += 1;
                }
                continue;
            }

            // Starting a string literal?
            if (isQuote(ch)) {
                formatted += ch;
                quote = ch;
                continue;
            }

            // Comment
            if (comment) {
                formatted += ch;
                if (ch === '*' && ch2 === '/') {
                    comment = false;
                    formatted += ch2;
                    index += 1;
                }
                continue;
            }
            if (ch === '/' && ch2 === '*') {
                comment = true;
                formatted += ch;
                formatted += ch2;
                index += 1;
                continue;
            }

            if (state === State.Start) {

                if (blocks.length === 0) {
                    if (isWhitespace(ch) && formatted.length === 0) {
                        continue;
                    }
                }

                // Copy white spaces and control characters
                if (ch <= ' ' || ch.charCodeAt(0) >= 128) {
                    state = State.Start;
                    formatted += ch;
                    continue;
                }

                // Selector or at-rule
                if (isName(ch) || (ch === '@')) {

                    // Clear trailing whitespaces and linefeeds.
                    str = trimRight(formatted);

                    if (str.length === 0) {
                        // If we have empty string after removing all the trailing
                        // spaces, that means we are right after a block.
                        // Ensure a blank line as the separator.
                        if (blocks.length > 0) {
                            formatted = '\n\n';
                        }
                    } else {
                        // After finishing a ruleset or directive statement,
                        // there should be one blank line.
                        if (str.charAt(str.length - 1) === '}' ||
                                str.charAt(str.length - 1) === ';') {

                            formatted = str + '\n\n';
                        } else {
                            // After block comment, keep all the linefeeds but
                            // start from the first column (remove whitespaces prefix).
                            while (true) {
                                ch2 = formatted.charAt(formatted.length - 1);
                                if (ch2 !== ' ' && ch2.charCodeAt(0) !== 9) {
                                    break;
                                }
                                formatted = formatted.substr(0, formatted.length - 1);
                            }
                        }
                    }
                    formatted += ch;
                    state = (ch === '@') ? State.AtRule : State.Selector;
                    continue;
                }
            }

            if (state === State.AtRule) {

                // ';' terminates a statement.
                if (ch === ';') {
                    formatted += ch;
                    state = State.Start;
                    continue;
                }

                // '{' starts a block
                if (ch === '{') {
                    str = trimRight(formatted);
                    openBlock();
                    state = (str === '@font-face') ? State.Ruleset : State.Block;
                    continue;
                }

                formatted += ch;
                continue;
            }

            if (state === State.Block) {

                // Selector
                if (isName(ch)) {

                    // Clear trailing whitespaces and linefeeds.
                    str = trimRight(formatted);

                    if (str.length === 0) {
                        // If we have empty string after removing all the trailing
                        // spaces, that means we are right after a block.
                        // Ensure a blank line as the separator.
                        if (blocks.length > 0) {
                            formatted = '\n\n';
                        }
                    } else {
                        // Insert blank line if necessary.
                        if (str.charAt(str.length - 1) === '}') {
                            formatted = str + '\n\n';
                        } else {
                            // After block comment, keep all the linefeeds but
                            // start from the first column (remove whitespaces prefix).
                            while (true) {
                                ch2 = formatted.charAt(formatted.length - 1);
                                if (ch2 !== ' ' && ch2.charCodeAt(0) !== 9) {
                                    break;
                                }
                                formatted = formatted.substr(0, formatted.length - 1);
                            }
                        }
                    }

                    appendIndent();
                    formatted += ch;
                    state = State.Selector;
                    continue;
                }

                // '}' resets the state.
                if (ch === '}') {
                    closeBlock();
                    state = State.Start;
                    continue;
                }

                formatted += ch;
                continue;
            }

            if (state === State.Selector) {

                // '{' starts the ruleset.
                if (ch === '{') {
                    openBlock();
                    state = State.Ruleset;
                    continue;
                }

                // '}' resets the state.
                if (ch === '}') {
                    closeBlock();
                    state = State.Start;
                    continue;
                }

                formatted += ch;
                continue;
            }

            if (state === State.Ruleset) {

                // '}' finishes the ruleset.
                if (ch === '}') {
                    closeBlock();
                    state = State.Start;
                    if (depth > 0) {
                        state = State.Block;
                    }
                    continue;
                }

                // Make sure there is no blank line or trailing spaces inbetween
                if (ch === '\n') {
                    formatted = trimRight(formatted);
                    formatted += '\n';
                    continue;
                }

                // property name
                if (!isWhitespace(ch)) {
                    formatted = trimRight(formatted);
                    formatted += '\n';
                    appendIndent();
                    formatted += ch;
                    state = State.Property;
                    continue;
                }
                formatted += ch;
                continue;
            }

            if (state === State.Property) {

                // ':' concludes the property.
                if (ch === ':') {
                    formatted = trimRight(formatted);
                    formatted += ': ';
                    state = State.Expression;
                    if (isWhitespace(ch2)) {
                        state = State.Separator;
                    }
                    continue;
                }

                // '}' finishes the ruleset.
                if (ch === '}') {
                    closeBlock();
                    state = State.Start;
                    if (depth > 0) {
                        state = State.Block;
                    }
                    continue;
                }

                formatted += ch;
                continue;
            }

            if (state === State.Separator) {

                // Non-whitespace starts the expression.
                if (!isWhitespace(ch)) {
                    formatted += ch;
                    state = State.Expression;
                    continue;
                }

                // Anticipate string literal.
                if (isQuote(ch2)) {
                    state = State.Expression;
                }

                continue;
            }

            if (state === State.Expression) {

                // '}' finishes the ruleset.
                if (ch === '}') {
                    closeBlock();
                    state = State.Start;
                    if (depth > 0) {
                        state = State.Block;
                    }
                    continue;
                }

                // ';' completes the declaration.
                if (ch === ';') {
                    formatted = trimRight(formatted);
                    formatted += ';\n';
                    state = State.Ruleset;
                    continue;
                }

                formatted += ch;

                if (ch === '(') {
                    if (formatted.charAt(formatted.length - 2) === 'l' &&
                            formatted.charAt(formatted.length - 3) === 'r' &&
                            formatted.charAt(formatted.length - 4) === 'u') {

                        // URL starts with '(' and closes with ')'.
                        state = State.URL;
                        continue;
                    }
                }

                continue;
            }

            if (state === State.URL) {


                // ')' finishes the URL (only if it is not escaped).
                if (ch === ')' && formatted.charAt(formatted.length - 1 !== '\\')) {
                    formatted += ch;
                    state = State.Expression;
                    continue;
                }
            }

            // The default action is to copy the character (to prevent
            // infinite loop).
            formatted += ch;
        }

        formatted = blocks.join('') + formatted;

        return formatted;
    }

    if (true) {
        // Node.js module.
        module.exports = exports = cssbeautify;
    } else {}

}());


/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/element-resize-detector/src/browser-detector.js":
/*!**********************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/browser-detector.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/collection-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/collection-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/detection-strategy/object.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/detection-strategy/object.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(/*! ../browser-detector */ "./node_modules/element-resize-detector/src/browser-detector.js");

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);

            if(!object) {
                throw new Error("Element is not detectable by this strategy.");
            }

            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]);

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.setProperty("position", "relative", options.important ? "important" : "");

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style.setProperty(property, "0", options.important ? "important" : "");
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            var state = getState(element);
                            if (state.checkForObjectDocumentTimeoutId) {
                                window.clearTimeout(state.checkForObjectDocumentTimeoutId);
                            }
                            state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                                state.checkForObjectDocumentTimeoutId = 0;
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.setAttribute("aria-hidden", "true");
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                if (!getState(element)) {
                    // The element has been uninstalled before the actual loading happened.
                    return;
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if (!getState(element)) {
            return;
        }

        var object = getObject(element);

        if (!object) {
            return;
        }

        if (browserDetector.isIE(8)) {
            element.detachEvent("onresize", object.proxy);
        } else {
            element.removeChild(object);
        }

        if (getState(element).checkForObjectDocumentTimeoutId) {
            window.clearTimeout(getState(element).checkForObjectDocumentTimeoutId);
        }

        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/detection-strategy/scroll.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/detection-strategy/scroll.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(/*! ../collection-utils */ "./node_modules/element-resize-detector/src/collection-utils.js").forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";

    function initDocument(targetDocument) {
        // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
        // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
        injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }

    initDocument(window.document);

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = buildCssTextString(["position: absolute", "width: " + width*2 + "px", "height: " + height*2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        var container = document.createElement("div");
        container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width*3 + "px", "left: " + -height*3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(targetDocument, styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                targetDocument.head.appendChild(element);
            };

            var styleElement = targetDocument.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!targetDocument.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
            style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = window.getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.setProperty("position", "relative",options.important ? "important" : "");

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom];
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
            var containerStyle          = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
            var expandStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var shrinkStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var expandChildStyle        = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
            var shrinkChildStyle        = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.setProperty("width", expandWidth + "px", options.important ? "important" : "");
                expandChild.style.setProperty("height", expandHeight + "px", options.important ? "important" : "");
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                // Check whether the size has actually changed since last time the algorithm ran. If not, some steps may be skipped.
                var sizeChanged = width !== getState(element).lastWidth || height !== getState(element).lastHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!sizeChanged) {
                        return;
                    }

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    // This function needs to be invoked event though the size is unchanged. The element could have been resized very quickly and then
                    // been restored to the original size, which will have changed the scrollbar positions.

                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (sizeChanged && done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                updateDetectorElements(notifyListenersIfNeeded);
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall,
        initDocument: initDocument
    };
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/element-resize-detector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/element-resize-detector.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(/*! ./collection-utils */ "./node_modules/element-resize-detector/src/collection-utils.js").forEach;
var elementUtilsMaker       = __webpack_require__(/*! ./element-utils */ "./node_modules/element-resize-detector/src/element-utils.js");
var listenerHandlerMaker    = __webpack_require__(/*! ./listener-handler */ "./node_modules/element-resize-detector/src/listener-handler.js");
var idGeneratorMaker        = __webpack_require__(/*! ./id-generator */ "./node_modules/element-resize-detector/src/id-generator.js");
var idHandlerMaker          = __webpack_require__(/*! ./id-handler */ "./node_modules/element-resize-detector/src/id-handler.js");
var reporterMaker           = __webpack_require__(/*! ./reporter */ "./node_modules/element-resize-detector/src/reporter.js");
var browserDetector         = __webpack_require__(/*! ./browser-detector */ "./node_modules/element-resize-detector/src/browser-detector.js");
var batchProcessorMaker     = __webpack_require__(/*! batch-processor */ "./node_modules/batch-processor/src/batch-processor.js");
var stateHandler            = __webpack_require__(/*! ./state-handler */ "./node_modules/element-resize-detector/src/state-handler.js");

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(/*! ./detection-strategy/object.js */ "./node_modules/element-resize-detector/src/detection-strategy/object.js");
var scrollStrategyMaker     = __webpack_require__(/*! ./detection-strategy/scroll.js */ "./node_modules/element-resize-detector/src/detection-strategy/scroll.js");

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler,
        important: importantCssRules
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug, important: importantCssRules }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    function initDocument(targetDocument) {
        detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall,
        initDocument: initDocument
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "./node_modules/element-resize-detector/src/element-utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/element-utils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/id-generator.js":
/*!******************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/id-generator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/id-handler.js":
/*!****************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/id-handler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/listener-handler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/listener-handler.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ "./node_modules/element-resize-detector/src/reporter.js":
/*!**************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/reporter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ "./node_modules/element-resize-detector/src/state-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/element-resize-detector/src/state-handler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/masonry-layout/masonry.js":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/outlayer/item.js":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/outlayer/outlayer.js":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-masonry-component/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-masonry-component/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBrowser = typeof window !== 'undefined';
var Masonry = isBrowser ? window.Masonry || __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js") : null;
var imagesloaded = isBrowser ? __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js") : null;
var assign = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
var elementResizeDetectorMaker = __webpack_require__(/*! element-resize-detector */ "./node_modules/element-resize-detector/src/element-resize-detector.js");
var debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
var omit = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var React = __webpack_require__(/*! react */ "react");
var createReactClass = __webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js");

var propTypes = {
  enableResizableChildren: PropTypes.bool,
  disableImagesLoaded: PropTypes.bool,
  onImagesLoaded: PropTypes.func,
  updateOnEachImageLoad: PropTypes.bool,
  options: PropTypes.object,
  imagesLoadedOptions: PropTypes.object,
  elementType: PropTypes.string,
  onLayoutComplete: PropTypes.func,
  onRemoveComplete: PropTypes.func
};

var MasonryComponent = createReactClass({
  masonry: false,
  erd: undefined,
  latestKnownDomChildren: [],
  displayName: 'MasonryComponent',
  imagesLoadedCancelRef: undefined,
  propTypes: propTypes,

  getDefaultProps: function() {
    return {
      enableResizableChildren: false,
      disableImagesLoaded: false,
      updateOnEachImageLoad: false,
      options: {},
      imagesLoadedOptions: {},
      className: '',
      elementType: 'div',
      onLayoutComplete: function() {
      },
      onRemoveComplete: function() {
      }
    };
  },

  initializeMasonry: function(force) {
    if (!this.masonry || force) {
      this.masonry = new Masonry(
        this.masonryContainer,
        this.props.options
      );

      if (this.props.onLayoutComplete) {
        this.masonry.on('layoutComplete', this.props.onLayoutComplete);
      }

      if (this.props.onRemoveComplete) {
        this.masonry.on('removeComplete', this.props.onRemoveComplete);
      }

      this.latestKnownDomChildren = this.getCurrentDomChildren();
    }
  },

  getCurrentDomChildren: function() {
    var node = this.masonryContainer;
    var children = this.props.options.itemSelector ? node.querySelectorAll(this.props.options.itemSelector) : node.children;
    return Array.prototype.slice.call(children);
  },

  diffDomChildren: function() {
    var forceItemReload = false;

    var knownChildrenStillAttached = this.latestKnownDomChildren.filter(function(element) {
      /*
       * take only elements attached to DOM
       * (aka the parent is the masonry container, not null)
       * otherwise masonry would try to "remove it" again from the DOM
       */
      return !!element.parentNode;
    });

    /*
     * If not all known children are attached to the dom - we have no other way of notifying
     * masonry to remove the ones not still attached besides invoking a complete item reload.
     * basically all the rest of the code below does not matter in that case.
     */
    if (knownChildrenStillAttached.length !== this.latestKnownDomChildren.length) {
      forceItemReload = true;
    }

    var currentDomChildren = this.getCurrentDomChildren();

    /*
     * Since we are looking for a known child which is also attached to the dom AND
     * not attached to the dom at the same time - this would *always* produce an empty array.
     */
    var removed = knownChildrenStillAttached.filter(function(attachedKnownChild) {
      return !~currentDomChildren.indexOf(attachedKnownChild);
    });

    /*
     * This would get any children which are attached to the dom but are *unkown* to us
     * from previous renders
     */
    var newDomChildren = currentDomChildren.filter(function(currentChild) {
      return !~knownChildrenStillAttached.indexOf(currentChild);
    });

    var beginningIndex = 0;

    // get everything added to the beginning of the DOMNode list
    var prepended = newDomChildren.filter(function(newChild) {
      var prepend = (beginningIndex === currentDomChildren.indexOf(newChild));

      if (prepend) {
        // increase the index
        beginningIndex++;
      }

      return prepend;
    });

    // we assume that everything else is appended
    var appended = newDomChildren.filter(function(el) {
      return prepended.indexOf(el) === -1;
    });

    /*
     * otherwise we reverse it because so we're going through the list picking off the items that
     * have been added at the end of the list. this complex logic is preserved in case it needs to be
     * invoked
     *
     * var endingIndex = currentDomChildren.length - 1;
     *
     * newDomChildren.reverse().filter(function(newChild, i){
     *     var append = endingIndex == currentDomChildren.indexOf(newChild);
     *
     *     if (append) {
     *         endingIndex--;
     *     }
     *
     *     return append;
     * });
     */

    // get everything added to the end of the DOMNode list
    var moved = [];

    /*
     * This would always be true (see above about the lofic for "removed")
     */
    if (removed.length === 0) {
      /*
       * 'moved' will contain some random elements (if any) since the "knownChildrenStillAttached" is a filter
       * of the "known" children which are still attached - All indexes could basically change. (for example
       * if the first element is not attached)
       * Don't trust this array.
       */
      moved = knownChildrenStillAttached.filter(function(child, index) {
        return index !== currentDomChildren.indexOf(child);
      });
    }

    this.latestKnownDomChildren = currentDomChildren;

    return {
      old: knownChildrenStillAttached, // Not used
      new: currentDomChildren, // Not used
      removed: removed,
      appended: appended,
      prepended: prepended,
      moved: moved,
      forceItemReload: forceItemReload
    };
  },

  performLayout: function() {
    var diff = this.diffDomChildren();
    var reloadItems = diff.forceItemReload || diff.moved.length > 0;

    // Would never be true. (see comments of 'diffDomChildren' about 'removed')
    if (diff.removed.length > 0) {
      if (this.props.enableResizableChildren) {
        diff.removed.forEach(this.erd.removeAllListeners, this.erd);
      }
      this.masonry.remove(diff.removed);
      reloadItems = true;
    }

    if (diff.appended.length > 0) {
      this.masonry.appended(diff.appended);

      if (diff.prepended.length === 0) {
        reloadItems = true;
      }

      if (this.props.enableResizableChildren) {
        diff.appended.forEach(this.listenToElementResize, this);
      }
    }

    if (diff.prepended.length > 0) {
      this.masonry.prepended(diff.prepended);

      if (this.props.enableResizableChildren) {
        diff.prepended.forEach(this.listenToElementResize, this);
      }
    }

    if (reloadItems) {
      this.masonry.reloadItems();
    }

    this.masonry.layout();
  },

  derefImagesLoaded: function() {
    this.imagesLoadedCancelRef();
    this.imagesLoadedCancelRef = undefined;
  },

  imagesLoaded: function() {
    if (this.props.disableImagesLoaded) {
      return;
    }

    if (this.imagesLoadedCancelRef) {
      this.derefImagesLoaded();
    }

    var event = this.props.updateOnEachImageLoad ? 'progress' : 'always';
    var handler = debounce(
      function(instance) {
        if (this.props.onImagesLoaded) {
          this.props.onImagesLoaded(instance);
        }
        this.masonry.layout();
      }.bind(this), 100);

    var imgLoad = imagesloaded(this.masonryContainer, this.props.imagesLoadedOptions).on(event, handler);

    this.imagesLoadedCancelRef = function() {
      imgLoad.off(event, handler);
      handler.cancel();
    };
  },

  initializeResizableChildren: function() {
    if (!this.props.enableResizableChildren) {
      return;
    }

    this.erd = elementResizeDetectorMaker({
      strategy: 'scroll'
    });

    this.latestKnownDomChildren.forEach(this.listenToElementResize, this);
  },

  listenToElementResize: function(el) {
    this.erd.listenTo(el, function() {
      this.masonry.layout()
    }.bind(this))
  },

  destroyErd: function() {
    if (this.erd) {
      this.latestKnownDomChildren.forEach(this.erd.uninstall, this.erd);
    }
  },

  componentDidMount: function() {
    this.initializeMasonry();
    this.initializeResizableChildren();
    this.imagesLoaded();
  },

  componentDidUpdate: function() {
    this.performLayout();
    this.imagesLoaded();
  },

  componentWillUnmount: function() {
    this.destroyErd();

    // unregister events
    if (this.props.onLayoutComplete) {
      this.masonry.off('layoutComplete', this.props.onLayoutComplete);
    }

    if (this.props.onRemoveComplete) {
      this.masonry.off('removeComplete', this.props.onRemoveComplete);
    }

    if (this.imagesLoadedCancelRef) {
      this.derefImagesLoaded();
    }
    this.masonry.destroy();
  },
  
  setRef: function(n) {
    this.masonryContainer = n;
  },

  render: function() {
    var props = omit(this.props, Object.keys(propTypes));
    return React.createElement(this.props.elementType, assign({}, props, {ref: this.setRef}), this.props.children);
  }
});

module.exports = MasonryComponent;
module.exports.default = MasonryComponent;


/***/ }),

/***/ "./node_modules/react-parm/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-parm/es/index.js ***!
  \*********************************************/
/*! exports provided: createCombinedRef, createComponentRef, createElementRef, createMethod, createComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCombinedRef", function() { return createCombinedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentRef", function() { return createComponentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementRef", function() { return createElementRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMethod", function() { return createMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-parm/es/utils.js");
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// external dependencies



// utils


/**
 * @function createCombinedRef
 *
 * @description
 * create a ref that assigns both the raw component and the underlying HTML element to the instance on a namespace
 *
 * @param {ReactComponent} instance the instance to assign to
 * @param {string} ref the instance value name
 * @returns {{component: ReactComponent, element: HTMLElement}} the combined ref
 */
var createCombinedRef = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createRefCreator"])(_utils__WEBPACK_IMPORTED_MODULE_2__["getNamespacedRef"]);

/**
 * @function createComponentRef
 *
 * @description
 * create a ref that assigns the component itself to the instance
 *
 * @param {ReactComponent} instance the instance to assign to
 * @param {string} ref the instance value name
 * @returns {ReactComponent} the component ref
 */
var createComponentRef = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createRefCreator"])(_utils__WEBPACK_IMPORTED_MODULE_2__["identity"]);

/**
 * @function createElementRef
 *
 * @description
 * create a ref that assigns the component's underlying HTML element to the instance
 *
 * @param {ReactComponent} instance the instance to assign to
 * @param {string} ref the instance value name
 * @returns {HTMLElement} the element ref
 */
var createElementRef = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createRefCreator"])(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"]);

/**
 * @function createMethod
 *
 * @description
 * create a method that is a pure version of the lifecycle / instance method passed to it
 *
 * the conditional function return is to ensure the method is called with as performant a way as possible
 *
 * @param {ReactComponent} instance the instance the method is assigned to
 * @param {function} method the instance method
 * @param {Array<any>} extraArgs additional args to pass to the method
 * @returns {function(...Array<any>): any} the method with the instance passed as value
 */
var createMethod = function createMethod(instance, method) {
  for (var _len = arguments.length, extraArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    extraArgs[_key - 2] = arguments[_key];
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isClassComponent"])(instance) ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["bindSetState"])(instance) && function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return method.call(instance, instance, args, extraArgs);
  } : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["logInvalidInstanceError"])('method');
}; // eslint-disable-line no-console

/**
 * @function createComponent
 *
 * @description
 * create a component from the render method and any options passed
 *
 * @param {function} render the function to render the component
 * @param {Object} [options={}] the options to render the component with
 * @param {function} [getInitialState] the method to get the initial state with
 * @param {boolean} [isPure] is PureComponent used
 * @param {Object} [state] the initial state
 * @returns {ReactComponent} the component class
 */
var createComponent = function createComponent(render) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var getInitialState = _ref.getInitialState,
      isPure = _ref.isPure,
      state = _ref.state,
      options = _objectWithoutProperties(_ref, ['getInitialState', 'isPure', 'state']);

  var Constructor = isPure ? react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent : react__WEBPACK_IMPORTED_MODULE_0___default.a.Component;

  function ParmComponent(initialProps) {
    var _this = this;

    Constructor.call(this, initialProps);

    this.state = typeof getInitialState === 'function' ? createMethod(this, getInitialState)() : state || null;

    Object.keys(options).forEach(function (key) {
      _this[key] = typeof options[key] === 'function' ? createMethod(_this, options[key]) : options[key];
    });

    this.render = createMethod(this, render);

    return this;
  }

  ParmComponent.prototype = Object.create(Constructor.prototype);

  ParmComponent.displayName = render.displayName || render.name || 'ParmComponent';
  ParmComponent.propTypes = render.propTypes;
  ParmComponent.contextTypes = render.contextTypes;
  ParmComponent.childContextTypes = render.childContextTypes;
  ParmComponent.defaultProps = render.defaultProps;

  return ParmComponent;
};


/***/ }),

/***/ "./node_modules/react-parm/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/react-parm/es/utils.js ***!
  \*********************************************/
/*! exports provided: bindSetState, isClassComponent, logInvalidInstanceError, createRefCreator, getNamespacedRef, identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSetState", function() { return bindSetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInvalidInstanceError", function() { return logInvalidInstanceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRefCreator", function() { return createRefCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamespacedRef", function() { return getNamespacedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// external dependencies



/**
 * @function bindSetState
 *
 * @description
 * bind the setState method to the component instance to ensure it can be used in a functional way
 *
 * @param {ReactComponent} instance the instance to bind setState to
 * @returns {void}
 */
var bindSetState = function bindSetState(instance) {
  return instance.setState = instance.setState.bind(instance);
};

/**
 * @function isClassComponent
 *
 * @description
 * is the value passed a valid react component class instance
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value a react component instance
 */
var isClassComponent = function isClassComponent(value) {
  return !!value && value instanceof react__WEBPACK_IMPORTED_MODULE_0___default.a.Component;
};

/**
 * @function logInvalidInstanceError
 *
 * @description
 * notify the user that the instance passed is invalid
 *
 * @param {string} type the type of creator being called
 * @returns {void}
 */
var logInvalidInstanceError = function logInvalidInstanceError(type) {
  return console.error('The instance provided for use with the ' + type + ' is not a valid React component instance.');
}; // eslint-disable-line no-console

/**
 * @function createRefCreator
 *
 * @description
 * create a method that will assign a ref value to the instance passed
 *
 * @param {function} getter the function that gets the component value for the ref
 * @returns {function(ReactComponent, string): function((HTMLElement|Component)): void} the ref create
 */
var createRefCreator = function createRefCreator(getter) {
  return function (instance, ref) {
    return isClassComponent(instance) ? function (component) {
      return instance[ref] = getter(component);
    } : logInvalidInstanceError('ref');
  };
};

/**
 * @function getNamespacedRef
 *
 * @description
 * get the ref that is a combination of the raw component and the component's underlying HTML element
 *
 * @param {ReactComponent} component the component to assin
 * @returns {{component: ReactComponent, element: HTMLElement}} the namespaced ref
 */
var getNamespacedRef = function getNamespacedRef(component) {
  return { component: component, element: Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(component) };
};

/**
 * @function identity
 *
 * @description
 * return the first parameter passed
 *
 * @param {any} value the value to pass through
 * @returns {any} the first parameter passed
 */
var identity = function identity(value) {
  return value;
};

/***/ }),

/***/ "./node_modules/react-style-tag/es/Style.js":
/*!**************************************************!*\
  !*** ./node_modules/react-style-tag/es/Style.js ***!
  \**************************************************/
/*! exports provided: componentDidMount, getSnapshotBeforeUpdate, componentDidUpdate, componentWillUnmount, getStyleForState, relocateNode, returnNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDidMount", function() { return componentDidMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnapshotBeforeUpdate", function() { return getSnapshotBeforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDidUpdate", function() { return componentDidUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentWillUnmount", function() { return componentWillUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleForState", function() { return getStyleForState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relocateNode", function() { return relocateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnNode", function() { return returnNode; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parm */ "./node_modules/react-parm/es/index.js");
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blob */ "./node_modules/react-style-tag/es/blob.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/react-style-tag/es/constants.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "./node_modules/react-style-tag/es/options.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/react-style-tag/es/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// external dependencies




// blob


// constants


// options


// styles


/**
 * @function componentDidMount
 *
 * @description
 * on mount, relocate the node
 *
 * @param {ReactComponent} instance the component instance
 * @param {HTMLElement} instance.node the node to render the styles into
 * @param {function} instance.relocateNote the method to relocate the node to the head
 * @returns {void}
 */
var componentDidMount = function componentDidMount(_ref) {
  var node = _ref.node,
      relocateNode = _ref.relocateNode;
  return relocateNode(node);
};

/**
 * @function getSnapshotBeforeUpdate
 *
 * @description
 * before the update occurs, if the sourceMap requirements have changed, return the node to its original position
 *
 * @param {ReactComponent} instance the component instance
 * @param {HTMLElement} instance.node the node to render the styles into
 * @param {function} instance.returnNode the method to return the node to its original parent
 * @returns {null}
 */
var getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(_ref2) {
  var node = _ref2.node,
      returnNode = _ref2.returnNode;

  returnNode(node);

  return null;
};

/**
 * @function componentDidUpdate
 *
 * @description
 * on update, if the sourceMap requirements have changed then relocate the new node to the head,
 * and if the styles have changed then set them in staet
 *
 * @param {ReactComponent} instance the component instance
 * @param {function} instance.getStyleForState the method to get the new rendered style
 * @param {HTMLElement} instance.node the node to render the styles into
 * @param {function} instance.relocateNote the method to relocate the node to the head
 * @param {Object} instance.props the new props of the component
 * @param {function} instance.setState the method to set the state of the component
 * @param {Array<any>} args the arguments passed to the function
 * @param {Object} previousProps the previous props of the component
 */
var componentDidUpdate = function componentDidUpdate(_ref3, _ref4) {
  var getStyleForState = _ref3.getStyleForState,
      node = _ref3.node,
      relocateNode = _ref3.relocateNode,
      props = _ref3.props,
      setState = _ref3.setState;
  var previousProps = _ref4[0];

  relocateNode(node);

  if (props.children !== previousProps.children) {
    setState(getStyleForState);
  }
};

/**
 * @function componentWillUnmount
 *
 * @description
 * prior to unmount, return the node to its original parent
 *
 * @param {ReactComponent} instance the component instance
 * @param {HTMLElement} instance.node the node to render the styles into
 * @param {function} instance.returnNode the method to return the node to its original parent
 * @returns {void}
 */
var componentWillUnmount = function componentWillUnmount(_ref5) {
  var node = _ref5.node,
      returnNode = _ref5.returnNode;
  return returnNode(node);
};

/**
 * @function getStyleForState
 *
 * @description
 * get the styles to be used for the rendered tag
 *
 * @param {ReactComponent} instance the component instance
 * @param {Object} instance.props the new props of the component
 * @returns {{style: string}} the style strng to use in the rendered tag
 */
var getStyleForState = function getStyleForState(_ref6) {
  var props = _ref6.props;
  return {
    style: Object(_styles__WEBPACK_IMPORTED_MODULE_6__["getRenderedStyles"])(props.children, {
      isCompressed: Object(_options__WEBPACK_IMPORTED_MODULE_5__["getCoalescedOption"])(props, 'isCompressed'),
      isMinified: Object(_options__WEBPACK_IMPORTED_MODULE_5__["getCoalescedOption"])(props, 'isMinified'),
      isPrefixed: Object(_options__WEBPACK_IMPORTED_MODULE_5__["getCoalescedOption"])(props, 'isPrefixed')
    })
  };
};

/**
 * @function relocateNode
 *
 * @description
 * relocate the node to the bottom of the head
 *
 * @param {ReactComponent} instance the component instance
 * @param {Array<any>} args the arguments passed to the function
 * @param {HTMLElement} node the node to render the styles into
 */
var relocateNode = function relocateNode(instance, _ref7) {
  var node = _ref7[0];

  if (typeof document !== 'undefined' && node) {
    instance.originalParent = node.parentNode;

    instance.originalParent.removeChild(node);
    document.head.appendChild(node);
  }
};

/**
 * @function returnNode
 *
 * @description
 * return the node to the original parent
 *
 * @param {ReactComponent} instance the component instance
 * @param {Array<any>} args the arguments passed to the function
 * @param {HTMLElement} node the node to render the styles into
 */
var returnNode = function returnNode(instance, _ref8) {
  var node = _ref8[0];

  if (typeof document !== 'undefined' && node) {
    try {
      document.head.removeChild(node);
      instance.originalParent.appendChild(node);
    } catch (error) {
      // ignore the error
    } finally {
      instance.node = null;
      instance.originalParent = null;
    }
  }
};

var Style = function (_PureComponent) {
  _inherits(Style, _PureComponent);

  function Style(props) {
    _classCallCheck(this, Style);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.componentDidMount = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, componentDidMount);
    _this.componentDidUpdate = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, componentDidUpdate);
    _this[_constants__WEBPACK_IMPORTED_MODULE_4__["SUPPORTS_BEFORE_UPDATE_SNAPSHOT"] ? 'getSnapshotBeforeUpdate' : 'componentWillUpdate'] = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, getSnapshotBeforeUpdate);
    _this.componentWillUnmount = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, componentWillUnmount);
    _this.linkHref = null;
    _this.node = null;
    _this.originalParent = null;
    _this.getCachedLinkHref = Object(_blob__WEBPACK_IMPORTED_MODULE_3__["createGetCachedLinkHref"])();
    _this.getStyleForState = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, getStyleForState);
    _this.relocateNode = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, relocateNode);
    _this.returnNode = Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createMethod"])(_this, returnNode);


    _this.state = getStyleForState({ props: props });
    return _this;
  }

  // lifecycle methods

  /* eslint-disable react/sort-comp */

  /* eslint-enable */


  // instance values


  // static methods


  // instance methods


  Style.prototype.render = function render() {
    var _props = this.props,
        childrenIgnored = _props.children,
        hasSourceMapIgnored = _props.hasSourceMap,
        isMinifiedIgnored = _props.isCompressed,
        isPrefixedIgnored = _props.isPrefixed,
        props = _objectWithoutProperties(_props, ['children', 'hasSourceMap', 'isCompressed', 'isPrefixed']);

    var style = this.state.style;


    if (Object(_options__WEBPACK_IMPORTED_MODULE_5__["getCoalescedOption"])(this.props, 'hasSourceMap')) {
      if (Object(_blob__WEBPACK_IMPORTED_MODULE_3__["hasBlobSupport"])()) {
        return (
          /* eslint-disable prettier */
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('link', _extends({}, props, {
            href: this.getCachedLinkHref(style),
            ref: Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createElementRef"])(this, 'node'),
            rel: 'stylesheet'
          }))
          /* eslint-enable */

        );
      }

      /* eslint-disable no-console */
      console.error('To support sourcemaps for react-style-tag you need Blob support, and the browser you are using does not currently support it. You should include a polyfill prior to the rendering of this component.');
      /* eslint-enable */
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'style',
      _extends({
        ref: Object(react_parm__WEBPACK_IMPORTED_MODULE_2__["createElementRef"])(this, 'node')
      }, props),
      style
    );
  };

  return Style;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

Style.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  hasSourceMap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isCompressed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMinified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isPrefixed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
Style.setGlobalOptions = _options__WEBPACK_IMPORTED_MODULE_5__["setGlobalOptions"];


/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./node_modules/react-style-tag/es/blob.js":
/*!*************************************************!*\
  !*** ./node_modules/react-style-tag/es/blob.js ***!
  \*************************************************/
/*! exports provided: getUrl, getHasBlobSupport, hasBlobSupport, getLinkHref, createGetCachedLinkHref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrl", function() { return getUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHasBlobSupport", function() { return getHasBlobSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBlobSupport", function() { return hasBlobSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkHref", function() { return getLinkHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGetCachedLinkHref", function() { return createGetCachedLinkHref; });
/**
 * @function getUrl
 *
 * @description
 * get the URL used to generate blobs
 *
 * @returns {Object} the URL object to generate blobs with
 */
var getUrl = function () {
  var defaultObject = {};

  var URL = defaultObject;

  var getUrl = function getUrl() {
    return URL !== defaultObject ? URL : URL = typeof window !== 'undefined' ? window.URL || window.webkitURL : defaultObject;
  };

  getUrl.reset = function () {
    return URL = defaultObject;
  };

  return getUrl;
}();

/**
 * @function getHasBlobSupport
 *
 * @description
 * get whether Blobs are supported in the runtime
 *
 * @returns {boolean} are Blobs supported
 */
var getHasBlobSupport = function getHasBlobSupport() {
  return typeof window !== 'undefined' && typeof window.Blob === 'function' && typeof getUrl().createObjectURL === 'function' && function () {
    try {
      new window.Blob();

      return true;
    } catch (error) {
      return false;
    }
  }();
};

/**
 * @function hasBlobSupport
 *
 * @description
 * a cached reference to determine Blob support in the runtime
 *
 * @returns {boolean} are Blobs supported
 */
var hasBlobSupport = function () {
  var support = false;

  var hasBlobSupport = function hasBlobSupport() {
    return support || (support = getHasBlobSupport());
  };

  hasBlobSupport.reset = function () {
    return support = false;
  };

  return hasBlobSupport;
}();

/**
 * @function getLinkHref
 *
 * @description
 * get the href of the link based on the style string Blob
 *
 * @param {string} style the style to create the Blob from
 * @returns {string} the data URI built from the Blob
 */
var getLinkHref = function getLinkHref(style) {
  return hasBlobSupport() ? getUrl().createObjectURL(new window.Blob([style], { type: 'text/css' })) : null;
};

/**
 * @function createGetCachedLinkHref
 *
 * @description
 * create a cached version of the getLinkHref
 *
 * @returns {function(string): string} the cached version of getLinkHref
 */
var createGetCachedLinkHref = function createGetCachedLinkHref() {
  return function () {
    var href = null,
        currentStyle = null;

    return function (style) {
      return style === currentStyle ? href : (currentStyle = style) ? href = getLinkHref(style) : href = null;
    };
  }();
};

/***/ }),

/***/ "./node_modules/react-style-tag/es/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/react-style-tag/es/constants.js ***!
  \******************************************************/
/*! exports provided: BEAUTIFY_OPTIONS, IS_PRODUCTION, REACT_MINOR_VERSION, SUPPORTS_BEFORE_UPDATE_SNAPSHOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEAUTIFY_OPTIONS", function() { return BEAUTIFY_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_PRODUCTION", function() { return IS_PRODUCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_MINOR_VERSION", function() { return REACT_MINOR_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTS_BEFORE_UPDATE_SNAPSHOT", function() { return SUPPORTS_BEFORE_UPDATE_SNAPSHOT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// external dependencies


/**
 * @constant {Object} BEAUTIFY_OPTIONS the options to pass to cssbeautify
 */
var BEAUTIFY_OPTIONS = {
  autosemicolon: true,
  indent: '  '
};

/**
 * @constant {boolean} IS_PRODUCTION is the runtime in the production environment
 */
var IS_PRODUCTION = !!(process && process.env && "development" === 'production');

/**
 * @constant {number} REACT_MINOR_VERSION the numeric major.minor version of React
 */
var REACT_MINOR_VERSION = +react__WEBPACK_IMPORTED_MODULE_0___default.a.version.split('.').slice(0, 2).join('.');

/**
 * @constant {boolean} SUPPORTS_BEFORE_UPDATE_SNAPSHOT is getSnapshotBeforeUpdate supported by the React version
 */
var SUPPORTS_BEFORE_UPDATE_SNAPSHOT = !isNaN(REACT_MINOR_VERSION) && REACT_MINOR_VERSION >= 16.3;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-style-tag/es/hash.js":
/*!*************************************************!*\
  !*** ./node_modules/react-style-tag/es/hash.js ***!
  \*************************************************/
/*! exports provided: hash, hashKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashKeys", function() { return hashKeys; });
var counter = 0;

/**
 * @function hash
 *
 * @description
 * simple bitwise hash of string value
 *
 * @param {string} key ASCII only
 * @return {number} 32-bit positive integer hash
 */
var hash = function hash(key) {
  var stringToHash = key + "-" + counter;

  var hashValue = 5381,
      index = stringToHash.length;

  while (index) {
    hashValue = hashValue * 33 ^ stringToHash.charCodeAt(--index);
  }

  return "scoped__" + key + "__" + (hashValue >>> 0);
};

/**
 * @function hashKeys
 *
 * @description
 * create a hash map based on the keys passed
 *
 * @param {Array<string>} keys the keys to hash
 * @returns {Object} the hashmap of key => has pairs
 */
var hashKeys = function hashKeys(keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = hash(key);

    return hashMap;
  }, {});
};

/***/ }),

/***/ "./node_modules/react-style-tag/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-style-tag/es/index.js ***!
  \**************************************************/
/*! exports provided: hashKeys, setGlobalOptions, Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style */ "./node_modules/react-style-tag/es/Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _Style__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hash */ "./node_modules/react-style-tag/es/hash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashKeys", function() { return _hash__WEBPACK_IMPORTED_MODULE_1__["hashKeys"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./node_modules/react-style-tag/es/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setGlobalOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_2__["setGlobalOptions"]; });

// components


// hash


// options




/***/ }),

/***/ "./node_modules/react-style-tag/es/options.js":
/*!****************************************************!*\
  !*** ./node_modules/react-style-tag/es/options.js ***!
  \****************************************************/
/*! exports provided: GLOBAL_OPTIONS, getCoalescedOption, setGlobalOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_OPTIONS", function() { return GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoalescedOption", function() { return getCoalescedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalOptions", function() { return setGlobalOptions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/react-style-tag/es/constants.js");
// constants


/**
 * @constant {Object} GLOBAL_OPTIONS the global options to apply as fallback to local props
 */
var GLOBAL_OPTIONS = {
  hasSourceMap: !_constants__WEBPACK_IMPORTED_MODULE_0__["IS_PRODUCTION"],
  isCompressed: true,
  isMinified: _constants__WEBPACK_IMPORTED_MODULE_0__["IS_PRODUCTION"],
  isPrefixed: true
};

/**
 * @function getCoalescedOption
 *
 * @description
 * get the option either from props if it exists, or globally
 *
 * @param {Object} props the props to the specific instance
 * @param {string} option the option to coalesce
 * @returns {boolean} the coalesced option
 */
var getCoalescedOption = function getCoalescedOption(props, option) {
  return typeof props[option] === 'boolean' ? props[option] : GLOBAL_OPTIONS[option];
};

/**
 * @function setGlobalOptions
 *
 * @description
 * set the options passed to be global
 *
 * @param {Object} options the objects to apply globally
 * @returns {void}
 */
var setGlobalOptions = function setGlobalOptions(options) {
  return Object.keys(options).forEach(function (option) {
    return GLOBAL_OPTIONS.hasOwnProperty(option) && typeof options[option] === 'boolean' && (GLOBAL_OPTIONS[option] = options[option]);
  });
};

/***/ }),

/***/ "./node_modules/react-style-tag/es/styles.js":
/*!***************************************************!*\
  !*** ./node_modules/react-style-tag/es/styles.js ***!
  \***************************************************/
/*! exports provided: getProcessedStyles, getRenderedStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessedStyles", function() { return getProcessedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderedStyles", function() { return getRenderedStyles; });
/* harmony import */ var cssbeautify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cssbeautify */ "./node_modules/cssbeautify/cssbeautify.js");
/* harmony import */ var cssbeautify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cssbeautify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/stylis.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-style-tag/es/constants.js");
// external dependencies



// constants


/**
 * @function getProcessedStyles
 *
 * @description
 * get the styles processed by stylis
 *
 * @param {string} rawStyle the style to process
 * @param {Object} props the props passed to the component
 * @param {boolean} props.isCompressed is compressed CSS output requested
 * @param {boolean} props.isPrefixed is vendor-prefixed CSS requested
 * @returns {string} the processed styles
 */
var getProcessedStyles = function getProcessedStyles(rawStyle, _ref) {
  var isCompressed = _ref.isCompressed,
      isPrefixed = _ref.isPrefixed;
  return new stylis__WEBPACK_IMPORTED_MODULE_1___default.a({
    compress: isCompressed,
    global: false,
    keyframe: false,
    prefix: isPrefixed
  })('', rawStyle);
};

/**
 * @function getRenderedStyles
 *
 * @description
 * get the styles rendered in the HTML tag
 *
 * @param {string} rawStyle the style to process
 * @param {Object} props the props passed to the component
 * @param {boolean} props.isMinified is minified CSS output requested
 * @returns {string} the styles to use in the rendered tag
 */
var getRenderedStyles = function getRenderedStyles(rawStyle, props) {
  return props.isMinified ? getProcessedStyles(rawStyle, props) : cssbeautify__WEBPACK_IMPORTED_MODULE_0___default()(getProcessedStyles(rawStyle, props), _constants__WEBPACK_IMPORTED_MODULE_2__["BEAUTIFY_OPTIONS"]);
};

/***/ }),

/***/ "./node_modules/stylis/stylis.js":
/*!***************************************!*\
  !*** ./node_modules/stylis/stylis.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	 true ? (module['exports'] = factory(null)) :
		undefined
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shifted to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE:
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}
		if (out !== content) {
		  return out
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				if (typeof plugin === 'function') {
					plugins[plugged++] = plugin
				}	else if (typeof plugin === 'object') {
					for (var i = 0, length = plugin.length; i < length; ++i) {
						use(plugin[i])
					}
				} else {
					unkwn = !!plugin|0
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/block-base/block-base.js":
/*!**************************************!*\
  !*** ./src/block-base/block-base.js ***!
  \**************************************/
/*! exports provided: getCommonAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonAttributes", function() { return getCommonAttributes; });
/**
 * Contains the base functions, hooks or components
 * 
 * @since 1.0.5
 */
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var getCommonAttributes = function getCommonAttributes() {
  return {
    blockID: {
      type: 'string',
      default: ''
    },
    blockTitle: {
      type: 'string',
      default: ''
    },
    blockTitleLayout: {
      type: 'string',
      default: 'one'
    },
    posttype: {
      type: 'string',
      default: 'post'
    },
    postCategory: {
      type: 'string',
      default: ''
    },
    postCount: {
      type: 'integer',
      default: 4
    },
    contentType: {
      type: 'string',
      default: 'excerpt'
    },
    wordCount: {
      type: 'integer',
      default: 15
    },
    buttonLabel: {
      type: 'string',
      default: escapeHTML(__('Read more', 'wp-blog-post-layouts'))
    },
    orderBy: {
      type: 'string',
      default: 'date'
    },
    order: {
      type: 'string',
      default: 'desc'
    },
    dateOption: {
      type: 'boolean',
      default: true
    },
    authorOption: {
      type: 'boolean',
      default: true
    },
    categoryOption: {
      type: 'boolean',
      default: true
    },
    tagsOption: {
      type: 'boolean',
      default: true
    },
    commentOption: {
      type: 'boolean',
      default: true
    },
    layoutOption: {
      type: 'string',
      default: 'layout-one'
    },
    postFormatIcon: {
      type: 'boolean',
      default: true
    },
    postButtonIcon: {
      type: 'boolean',
      default: true
    },
    blockColumn: {
      type: 'string',
      default: 'two'
    },
    postMargin: {
      type: 'boolean',
      default: true
    },
    typographyOption: {
      type: 'boolean',
      default: true
    },
    blockTitleAlign: {
      type: 'string',
      default: 'left'
    },
    blockTitleFontFamily: {
      type: 'string',
      default: 'Yanone Kaffeesatz'
    },
    blockTitleFontWeight: {
      type: 'string',
      default: '700'
    },
    blockTitleFontSize: {
      type: 'number',
      default: 32
    },
    blockTitleFontStyle: {
      type: 'string',
      default: 'normal'
    },
    blockTitleTextTransform: {
      type: 'string',
      default: 'Uppercase'
    },
    blockTitleTextDecoration: {
      type: 'string',
      default: 'none'
    },
    blockTitleColor: {
      type: 'string',
      default: '#3b3b3b'
    },
    blockTitleLineHeight: {
      type: 'number',
      default: 1.5
    },
    blockTitleBorderColor: {
      type: 'string',
      default: '#f47e00'
    },
    titleTextAlign: {
      type: 'string',
      default: 'left'
    },
    titleFontFamily: {
      type: 'string',
      default: 'Yanone Kaffeesatz'
    },
    titleFontWeight: {
      type: 'string',
      default: '700'
    },
    titleFontSize: {
      type: 'number',
      default: 28
    },
    titleFontStyle: {
      type: 'string',
      default: 'normal'
    },
    titleTextTransform: {
      type: 'string',
      default: 'capitalize'
    },
    titleTextDecoration: {
      type: 'string',
      default: 'none'
    },
    titleFontColor: {
      type: 'string',
      default: '#333333'
    },
    titleHoverColor: {
      type: 'string',
      default: '#f47e00'
    },
    titlelineHeight: {
      type: 'number',
      default: 1.5
    },
    metaTextAlign: {
      type: 'string',
      default: 'left'
    },
    metaFontFamily: {
      type: 'string',
      default: 'Roboto'
    },
    metaFontWeight: {
      type: 'string',
      default: '400'
    },
    metaFontSize: {
      type: 'number',
      default: 14
    },
    metaFontStyle: {
      type: 'string',
      default: 'normal'
    },
    metaTextTransform: {
      type: 'string',
      default: 'capitalize'
    },
    metaTextDecoration: {
      type: 'string',
      default: 'none'
    },
    metaFontColor: {
      type: 'string',
      default: '#434343'
    },
    metaHoverColor: {
      type: 'string',
      default: '#f47e00'
    },
    metalineHeight: {
      type: 'number',
      default: 1.8
    },
    descTextAlign: {
      type: 'string',
      default: 'left'
    },
    descFontFamily: {
      type: 'string',
      default: 'Roboto'
    },
    descFontWeight: {
      type: 'string',
      default: '400'
    },
    descFontSize: {
      type: 'number',
      default: 15
    },
    descFontStyle: {
      type: 'string',
      default: 'normal'
    },
    descTextTransform: {
      type: 'string',
      default: 'none'
    },
    descTextDecoration: {
      type: 'string',
      default: 'none'
    },
    descFontColor: {
      type: 'string',
      default: '#3b3b3b'
    },
    desclineHeight: {
      type: 'number',
      default: 2
    },
    buttonTextAlign: {
      type: 'string',
      default: 'left'
    },
    buttonFontFamily: {
      type: 'string',
      default: 'Roboto'
    },
    buttonFontWeight: {
      type: 'string',
      default: '400'
    },
    buttonFontSize: {
      type: 'number',
      default: 15
    },
    buttonTextTransform: {
      type: 'string',
      default: 'none'
    },
    buttonFontColor: {
      type: 'string',
      default: '#3b3b3b'
    },
    buttonHoverColor: {
      type: 'string',
      default: '#3b3b3b'
    },
    buttonBackgroundColor: {
      type: 'string',
      default: 'transparent'
    },
    buttonBackgroundHoverColor: {
      type: 'string',
      default: '#f47e00'
    },
    buttonPaddingTop: {
      type: 'string',
      default: '2'
    },
    buttonPaddingRight: {
      type: 'string',
      default: '10'
    },
    buttonPaddingBottom: {
      type: 'string',
      default: '2'
    },
    buttonPaddingLeft: {
      type: 'string',
      default: '10'
    },
    buttonBorderType: {
      type: 'string',
      default: 'solid'
    },
    buttonBorderWeight: {
      type: 'string',
      default: '1'
    },
    buttonBorderColor: {
      type: 'string',
      default: 'transparent'
    },
    buttonBorderHoverColor: {
      type: 'string',
      default: '#f47e00'
    }
  };
};

/***/ }),

/***/ "./src/block-base/googlefonts.json":
/*!*****************************************!*\
  !*** ./src/block-base/googlefonts.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"family\":\"Roboto\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"]},{\"family\":\"Yanone Kaffeesatz\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"]},{\"family\":\"Open Sans\",\"variants\":[\"300\",\"regular\",\"600\",\"700\",\"800\"]},{\"family\":\"Roboto Slab\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"]},{\"family\":\"Poppins\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"]}]");

/***/ }),

/***/ "./src/grid/block.js":
/*!***************************!*\
  !*** ./src/grid/block.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inspector */ "./src/grid/components/inspector.js");
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./src/grid/components/edit.js");
/* harmony import */ var _assets_cv_block_icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/cv-block-icons/icons */ "./assets/cv-block-icons/icons.js");
/* harmony import */ var _block_base_block_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-base/block-base */ "./src/block-base/block-base.js");


/**
 * Register grid post layout block. 
 */




var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var registerBlockType = wp.blocks.registerBlockType; // block attributes

var gridlayoutAttributes = Object(_block_base_block_base__WEBPACK_IMPORTED_MODULE_4__["getCommonAttributes"])();
registerBlockType('wpblog-post-layouts/cv-grid-blog-post-layout', {
  title: escapeHTML(__('CV Grid Post Layout', 'wp-blog-post-layouts')),
  description: escapeHTML(__('Post collection with grid layout', 'wp-blog-post-layouts')),
  icon: {
    background: '#fff',
    foreground: 'rgba(212,51,93,1)',
    src: _assets_cv_block_icons_icons__WEBPACK_IMPORTED_MODULE_3__["default"].Grid
  },
  keywords: [escapeHTML(__('blog', 'wp-blog-post-layouts')), escapeHTML(__('grid', 'wp-blog-post-layouts')), escapeHTML(__('post', 'wp-blog-post-layouts')), escapeHTML(__('layout', 'wp-blog-post-layouts'))],
  category: 'wpblog-post-layouts-blocks',
  attributes: gridlayoutAttributes,
  supports: {
    align: ["wide", "full"]
  },
  example: {
    attributes: {
      'blockColumn': 'two',
      'postCount': 4,
      'dateOption': false,
      'authorOption': false,
      'categoryOption': false,
      'tagsOption': false,
      'commentOption': false,
      'contentOption': false,
      'buttonLabel': '',
      'postFormatIcon': false
    }
  },
  edit: function edit(props) {
    props.attributes.blockID = props.clientId;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_edit__WEBPACK_IMPORTED_MODULE_2__["default"], props)];
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/grid/components/edit.js":
/*!*************************************!*\
  !*** ./src/grid/components/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_one_layout_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-one/layout-one */ "./src/grid/layout-one/layout-one.js");
/* harmony import */ var _layout_two_layout_two__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout-two/layout-two */ "./src/grid/layout-two/layout-two.js");
/* harmony import */ var _layout_three_layout_three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout-three/layout-three */ "./src/grid/layout-three/layout-three.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_style_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-style-tag */ "./node_modules/react-style-tag/es/index.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Block View wrapper
 */



var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;



var Edit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "enqueueGooglefonts",
    value: function enqueueGooglefonts() {
      var _this$props$attribute = this.props.attributes,
          typographyOption = _this$props$attribute.typographyOption,
          blockTitleFontFamily = _this$props$attribute.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute.blockTitleFontWeight,
          titleFontFamily = _this$props$attribute.titleFontFamily,
          titleFontWeight = _this$props$attribute.titleFontWeight,
          metaFontFamily = _this$props$attribute.metaFontFamily,
          metaFontWeight = _this$props$attribute.metaFontWeight,
          descFontFamily = _this$props$attribute.descFontFamily,
          descFontWeight = _this$props$attribute.descFontWeight,
          buttonFontFamily = _this$props$attribute.buttonFontFamily,
          buttonFontWeight = _this$props$attribute.buttonFontWeight;
      {
        typographyOption == false && blockTitleFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(blockTitleFontFamily, ":").concat(blockTitleFontWeight)]
          }
        });
        titleFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(titleFontFamily, ":").concat(titleFontWeight)]
          }
        });
        metaFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(metaFontFamily, ":").concat(metaFontWeight)]
          }
        });
        descFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(descFontFamily, ":").concat(descFontWeight)]
          }
        });
        buttonFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(buttonFontFamily, ":").concat(buttonFontWeight)]
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.enqueueGooglefonts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.enqueueGooglefonts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$attribute2 = this.props.attributes,
          blockID = _this$props$attribute2.blockID,
          blockTitle = _this$props$attribute2.blockTitle,
          blockTitleLayout = _this$props$attribute2.blockTitleLayout,
          layoutOption = _this$props$attribute2.layoutOption,
          typographyOption = _this$props$attribute2.typographyOption,
          blockTitleAlign = _this$props$attribute2.blockTitleAlign,
          blockTitleFontFamily = _this$props$attribute2.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute2.blockTitleFontWeight,
          blockTitleFontSize = _this$props$attribute2.blockTitleFontSize,
          blockTitleFontStyle = _this$props$attribute2.blockTitleFontStyle,
          blockTitleTextTransform = _this$props$attribute2.blockTitleTextTransform,
          blockTitleTextDecoration = _this$props$attribute2.blockTitleTextDecoration,
          blockTitleColor = _this$props$attribute2.blockTitleColor,
          blockTitleLineHeight = _this$props$attribute2.blockTitleLineHeight,
          blockTitleBorderColor = _this$props$attribute2.blockTitleBorderColor,
          titleTextAlign = _this$props$attribute2.titleTextAlign,
          titleFontFamily = _this$props$attribute2.titleFontFamily,
          titleFontWeight = _this$props$attribute2.titleFontWeight,
          titleFontSize = _this$props$attribute2.titleFontSize,
          titleFontStyle = _this$props$attribute2.titleFontStyle,
          titleTextTransform = _this$props$attribute2.titleTextTransform,
          titleTextDecoration = _this$props$attribute2.titleTextDecoration,
          titleFontColor = _this$props$attribute2.titleFontColor,
          titleHoverColor = _this$props$attribute2.titleHoverColor,
          titlelineHeight = _this$props$attribute2.titlelineHeight,
          metaTextAlign = _this$props$attribute2.metaTextAlign,
          metaFontFamily = _this$props$attribute2.metaFontFamily,
          metaFontWeight = _this$props$attribute2.metaFontWeight,
          metaFontSize = _this$props$attribute2.metaFontSize,
          metaFontStyle = _this$props$attribute2.metaFontStyle,
          metaTextTransform = _this$props$attribute2.metaTextTransform,
          metaTextDecoration = _this$props$attribute2.metaTextDecoration,
          metaFontColor = _this$props$attribute2.metaFontColor,
          metaHoverColor = _this$props$attribute2.metaHoverColor,
          metalineHeight = _this$props$attribute2.metalineHeight,
          descTextAlign = _this$props$attribute2.descTextAlign,
          descFontFamily = _this$props$attribute2.descFontFamily,
          descFontWeight = _this$props$attribute2.descFontWeight,
          descFontSize = _this$props$attribute2.descFontSize,
          descFontStyle = _this$props$attribute2.descFontStyle,
          descTextTransform = _this$props$attribute2.descTextTransform,
          descTextDecoration = _this$props$attribute2.descTextDecoration,
          descFontColor = _this$props$attribute2.descFontColor,
          desclineHeight = _this$props$attribute2.desclineHeight,
          buttonTextAlign = _this$props$attribute2.buttonTextAlign,
          buttonFontFamily = _this$props$attribute2.buttonFontFamily,
          buttonFontWeight = _this$props$attribute2.buttonFontWeight,
          buttonFontSize = _this$props$attribute2.buttonFontSize,
          buttonTextTransform = _this$props$attribute2.buttonTextTransform,
          buttonFontColor = _this$props$attribute2.buttonFontColor,
          buttonHoverColor = _this$props$attribute2.buttonHoverColor,
          buttonBackgroundColor = _this$props$attribute2.buttonBackgroundColor,
          buttonBackgroundHoverColor = _this$props$attribute2.buttonBackgroundHoverColor,
          buttonPaddingTop = _this$props$attribute2.buttonPaddingTop,
          buttonPaddingRight = _this$props$attribute2.buttonPaddingRight,
          buttonPaddingBottom = _this$props$attribute2.buttonPaddingBottom,
          buttonPaddingLeft = _this$props$attribute2.buttonPaddingLeft,
          buttonBorderType = _this$props$attribute2.buttonBorderType,
          buttonBorderWeight = _this$props$attribute2.buttonBorderWeight,
          buttonBorderColor = _this$props$attribute2.buttonBorderColor,
          buttonBorderHoverColor = _this$props$attribute2.buttonBorderHoverColor;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_style_tag__WEBPACK_IMPORTED_MODULE_10__["Style"], {
        id: "".concat(blockID, "-block-title-style")
      }, "\n                        .block-".concat(blockID, " .cv-block-title{\n                            text-align: ").concat(blockTitleAlign, "\n                        }\n                    ")), typographyOption == false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_style_tag__WEBPACK_IMPORTED_MODULE_10__["Style"], {
        id: "".concat(blockID, "-block-style")
      }, "\n                        .block-".concat(blockID, " .cv-block-title{\n                            font-family: ").concat(blockTitleFontFamily, "\n                            font-weight: ").concat(blockTitleFontWeight, "\n                            font-size: ").concat(blockTitleFontSize, "px\n                            font-style: ").concat(blockTitleFontStyle, "\n                            text-transform: ").concat(blockTitleTextTransform, "\n                            text-decoration: ").concat(blockTitleTextDecoration, "\n                            color: ").concat(blockTitleColor, "\n                            line-height: ").concat(blockTitleLineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title span::before{\n                            background: ").concat(blockTitleBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title span::after{\n                            background: ").concat(blockTitleBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--four span{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--four span:after{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--five span:before{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            border-left: none;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--five span:after{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            border-left: none;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-post-title a{\n                            text-align: ").concat(titleTextAlign, "\n                            font-family: ").concat(titleFontFamily, "\n                            font-weight: ").concat(titleFontWeight, "\n                            font-size: ").concat(titleFontSize, "px\n                            font-style: ").concat(titleFontStyle, "\n                            text-transform: ").concat(titleTextTransform, "\n                            text-decoration: ").concat(titleTextDecoration, "\n                            color: ").concat(titleFontColor, "\n                            line-height: ").concat(titlelineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-title a:hover{\n                            color: ").concat(titleHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta a{\n                            text-align: ").concat(metaTextAlign, "\n                            font-family: ").concat(metaFontFamily, "\n                            font-weight: ").concat(metaFontWeight, "\n                            font-size: ").concat(metaFontSize, "px\n                            font-style: ").concat(metaFontStyle, "\n                            text-transform: ").concat(metaTextTransform, "\n                            text-decoration: ").concat(metaTextDecoration, "\n                            color: ").concat(metaFontColor, "\n                            line-height: ").concat(metalineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta > span{\n                            text-align: ").concat(metaTextAlign, "\n                            font-family: ").concat(metaFontFamily, "\n                            font-weight: ").concat(metaFontWeight, "\n                            font-size: ").concat(metaFontSize, "px\n                            font-style: ").concat(metaFontStyle, "\n                            text-transform: ").concat(metaTextTransform, "\n                            text-decoration: ").concat(metaTextDecoration, "\n                            color: ").concat(metaFontColor, "\n                            line-height: ").concat(metalineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta a:hover{\n                            color: ").concat(metaHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta > span:hover{\n                            color: ").concat(metaHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-content p{\n                            text-align: ").concat(descTextAlign, "\n                            font-family: ").concat(descFontFamily, "\n                            font-weight: ").concat(descFontWeight, "\n                            font-size: ").concat(descFontSize, "px\n                            font-style: ").concat(descFontStyle, "\n                            text-transform: ").concat(descTextTransform, "\n                            text-decoration: ").concat(descTextDecoration, "\n                            color: ").concat(descFontColor, "\n                            line-height: ").concat(desclineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more a{\n                            font-family: ").concat(buttonFontFamily, "\n                            font-weight: ").concat(buttonFontWeight, "\n                            font-size: ").concat(buttonFontSize, "px\n                            text-transform: ").concat(buttonTextTransform, "\n                            color: ").concat(buttonFontColor, "\n                            background-color: ").concat(buttonBackgroundColor, "\n                            padding-top: ").concat(buttonPaddingTop, "px\n                            padding-right: ").concat(buttonPaddingRight, "px\n                            padding-bottom: ").concat(buttonPaddingBottom, "px\n                            padding-left: ").concat(buttonPaddingLeft, "px\n                            border-style: ").concat(buttonBorderType, "\n                            border-width: ").concat(buttonBorderWeight, "px\n                            border-color: ").concat(buttonBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more{\n                            text-align: ").concat(buttonTextAlign, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more a:hover{\n                            color: ").concat(buttonHoverColor, "\n                            background-color: ").concat(buttonBackgroundHoverColor, "\n                            border-color: ").concat(buttonBorderHoverColor, "\n                        }\n                    ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        id: "cv-grid-post-layout",
        className: "block-".concat(blockID, " cv-block cv-block-grid--").concat(layoutOption)
      }, function () {
        if (!!blockTitle) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
            className: "cv-block-title align--".concat(blockTitleAlign, " layout--").concat(blockTitleLayout)
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, blockTitle));
        }
      }(), function () {
        switch (layoutOption) {
          case 'layout-two':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_two_layout_two__WEBPACK_IMPORTED_MODULE_7__["default"], _this.props);

          case 'layout-three':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_three_layout_three__WEBPACK_IMPORTED_MODULE_8__["default"], _this.props);

          default:
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_one_layout_one__WEBPACK_IMPORTED_MODULE_6__["default"], _this.props);
        }
      }()));
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./src/grid/components/general-inspector.js":
/*!**************************************************!*\
  !*** ./src/grid/components/general-inspector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * General Tab Tnspector controls wrapper controls.
 * 
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl;
var withSelect = wp.data.withSelect;

var GeneralInspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GeneralInspector, _Component);

  var _super = _createSuper(GeneralInspector);

  function GeneralInspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GeneralInspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GeneralInspector, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          blockTitle = _this$props$attribute.blockTitle,
          blockTitleLayout = _this$props$attribute.blockTitleLayout,
          blockTitleAlign = _this$props$attribute.blockTitleAlign,
          posttype = _this$props$attribute.posttype,
          postCategory = _this$props$attribute.postCategory,
          postCount = _this$props$attribute.postCount,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          buttonLabel = _this$props$attribute.buttonLabel,
          orderBy = _this$props$attribute.orderBy,
          order = _this$props$attribute.order,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption;
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          postTypesList = _this$props.postTypesList,
          categoriesList = _this$props.categoriesList;
      var hascategoriesList = Array.isArray(categoriesList) && categoriesList.length;
      var allCategories = [];

      if (hascategoriesList) {
        allCategories.push({
          label: escapeHTML(__('All', 'wp-blog-post-layouts')),
          value: ''
        });
        categoriesList.forEach(function (category) {
          allCategories.push({
            label: category.name + ' (' + category.count + ')',
            value: category.id
          });
        });
      } else {
        allCategories.push({
          label: escapeHTML(__('All', 'wp-blog-post-layouts')),
          value: ''
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Basic Settings', 'wp-blog-post-layouts'))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Block Title', 'wp-blog-post-layouts')),
        value: blockTitle,
        placeholder: escapeHTML(__('Add title here..', 'wp-blog-post-layouts')),
        onChange: function onChange(newblockTitle) {
          return setAttributes({
            blockTitle: newblockTitle
          });
        }
      }), blockTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Block Title Layout', 'wp-blog-post-layouts')),
        value: blockTitleLayout,
        options: [{
          value: 'one',
          label: 'One'
        }, {
          value: 'two',
          label: 'Two'
        }, {
          value: 'three',
          label: 'Three'
        }],
        onChange: function onChange(newblockTitleLayout) {
          return setAttributes({
            blockTitleLayout: newblockTitleLayout
          });
        }
      }), blockTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: blockTitleAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleAlign) {
          return setAttributes({
            blockTitleAlign: newblockTitleAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Category', 'wp-blog-post-layouts')),
        value: postCategory,
        options: allCategories,
        onChange: function onChange(newpostCategory) {
          return setAttributes({
            postCategory: newpostCategory
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Post Count', 'wp-blog-post-layouts')),
        value: postCount,
        onChange: function onChange(newpostCount) {
          return setAttributes({
            postCount: newpostCount
          });
        },
        min: 1,
        max: 200
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Content Type', 'wp-blog-post-layouts')),
        value: contentType,
        options: [{
          value: 'excerpt',
          label: 'Excerpt'
        }, {
          value: 'content',
          label: 'Content'
        }],
        onChange: function onChange(newcontentType) {
          return setAttributes({
            contentType: newcontentType
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Content Length', 'wp-blog-post-layouts')),
        value: wordCount,
        onChange: function onChange(newwordCount) {
          return setAttributes({
            wordCount: newwordCount
          });
        },
        min: 1,
        max: 500
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Button Label', 'wp-blog-post-layouts')),
        value: buttonLabel,
        placeholder: escapeHTML(__('Add label here..', 'wp-blog-post-layouts')),
        onChange: function onChange(newbuttonLabel) {
          return setAttributes({
            buttonLabel: newbuttonLabel
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Query Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Order By', 'wp-blog-post-layouts')),
        value: orderBy,
        options: [{
          value: 'date',
          label: 'Date'
        }, {
          value: 'title',
          label: 'Title'
        }],
        onChange: function onChange(neworderBy) {
          return setAttributes({
            orderBy: neworderBy
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Order', 'wp-blog-post-layouts')),
        value: order,
        options: [{
          value: 'asc',
          label: 'Ascending'
        }, {
          value: 'desc',
          label: 'Descending'
        }],
        onChange: function onChange(neworder) {
          return setAttributes({
            order: neworder
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show date', 'wp-blog-post-layouts')),
        checked: dateOption,
        onChange: function onChange(newdateOption) {
          return setAttributes({
            dateOption: newdateOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show author', 'wp-blog-post-layouts')),
        checked: authorOption,
        onChange: function onChange(newauthorOption) {
          return setAttributes({
            authorOption: newauthorOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show categories', 'wp-blog-post-layouts')),
        checked: categoryOption,
        onChange: function onChange(newcategoryOption) {
          return setAttributes({
            categoryOption: newcategoryOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show tags', 'wp-blog-post-layouts')),
        checked: tagsOption,
        onChange: function onChange(newtagsOption) {
          return setAttributes({
            tagsOption: newtagsOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show comments number', 'wp-blog-post-layouts')),
        checked: commentOption,
        onChange: function onChange(newcommentOption) {
          return setAttributes({
            commentOption: newcommentOption
          });
        }
      })));
    }
  }]);

  return GeneralInspector;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var posttype = props.attributes.posttype;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getPostTypes = _select.getPostTypes;

  var allpostTypesList = getPostTypes();
  var filterpostTypesList = [];
  var taxonomnyName;

  if (allpostTypesList) {
    allpostTypesList.forEach(function (allpostType) {
      if (allpostType.slug != 'page' && allpostType.slug != 'wp_block' && allpostType.slug != 'attachment') {
        filterpostTypesList.push({
          label: allpostType.name,
          value: allpostType.slug
        });

        if (allpostType.slug == posttype) {
          taxonomnyName = allpostType.taxonomies[0];
        }
      }
    });
  }

  var taxonomyQuery = {
    hide_empty: true,
    per_page: 100
  };
  return {
    postTypesList: filterpostTypesList,
    categoriesList: getEntityRecords('taxonomy', taxonomnyName, taxonomyQuery)
  };
})(GeneralInspector));

/***/ }),

/***/ "./src/grid/components/inspector.js":
/*!******************************************!*\
  !*** ./src/grid/components/inspector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _general_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-inspector */ "./src/grid/components/general-inspector.js");
/* harmony import */ var _style_inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style-inspector */ "./src/grid/components/style-inspector.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Tnspector controls wrapper controls.
 * 
 */


var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var InspectorControls = wp.blockEditor.InspectorControls;
var TabPanel = wp.components.TabPanel;

var Inspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
        className: "cv-tabs-panel",
        activeClass: "active-tab",
        tabs: [{
          name: "generalInspector",
          title: escapeHTML(__("General", "blog-post-layouts")),
          className: "tab-panel"
        }, {
          name: "styleInspector",
          title: escapeHTML(__("Style", "blog-post-layouts")),
          className: "tab-panel"
        }]
      }, function (tab) {
        if (tab.name == "generalInspector") {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_general_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], _this.props);
        } else if (tab.name == "styleInspector") {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_style_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], _this.props);
        }
      }));
    }
  }]);

  return Inspector;
}(Component);



/***/ }),

/***/ "./src/grid/components/style-inspector.js":
/*!************************************************!*\
  !*** ./src/grid/components/style-inspector.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleInspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../block-base/googlefonts.json */ "./src/block-base/googlefonts.json");
var _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../block-base/googlefonts.json */ "./src/block-base/googlefonts.json", 1);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Style Tab Tnspector controls wrapper controls.
 * 
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    ColorPalette = _wp$components.ColorPalette,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;


var StyleInspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StyleInspector, _Component);

  var _super = _createSuper(StyleInspector);

  function StyleInspector(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StyleInspector);

    _this = _super.apply(this, arguments);
    _this.state = {
      google_fonts: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StyleInspector, [{
    key: "get_google_fonts",
    value: function get_google_fonts() {
      var GoogleFontsLists = _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6__;
      this.setState({
        google_fonts: GoogleFontsLists
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.get_google_fonts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          layoutOption = _this$props$attribute.layoutOption,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin,
          typographyOption = _this$props$attribute.typographyOption,
          blockTitleFontFamily = _this$props$attribute.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute.blockTitleFontWeight,
          blockTitleFontSize = _this$props$attribute.blockTitleFontSize,
          blockTitleFontStyle = _this$props$attribute.blockTitleFontStyle,
          blockTitleTextTransform = _this$props$attribute.blockTitleTextTransform,
          blockTitleTextDecoration = _this$props$attribute.blockTitleTextDecoration,
          blockTitleColor = _this$props$attribute.blockTitleColor,
          blockTitleLineHeight = _this$props$attribute.blockTitleLineHeight,
          blockTitleBorderColor = _this$props$attribute.blockTitleBorderColor,
          titleTextAlign = _this$props$attribute.titleTextAlign,
          titleFontFamily = _this$props$attribute.titleFontFamily,
          titleFontSize = _this$props$attribute.titleFontSize,
          titleFontStyle = _this$props$attribute.titleFontStyle,
          titleTextTransform = _this$props$attribute.titleTextTransform,
          titleTextDecoration = _this$props$attribute.titleTextDecoration,
          titleFontColor = _this$props$attribute.titleFontColor,
          titleHoverColor = _this$props$attribute.titleHoverColor,
          titlelineHeight = _this$props$attribute.titlelineHeight,
          metaTextAlign = _this$props$attribute.metaTextAlign,
          metaFontFamily = _this$props$attribute.metaFontFamily,
          metaFontSize = _this$props$attribute.metaFontSize,
          metaFontStyle = _this$props$attribute.metaFontStyle,
          metaTextTransform = _this$props$attribute.metaTextTransform,
          metaTextDecoration = _this$props$attribute.metaTextDecoration,
          metaFontColor = _this$props$attribute.metaFontColor,
          metaHoverColor = _this$props$attribute.metaHoverColor,
          metalineHeight = _this$props$attribute.metalineHeight,
          descTextAlign = _this$props$attribute.descTextAlign,
          descFontFamily = _this$props$attribute.descFontFamily,
          descFontSize = _this$props$attribute.descFontSize,
          descFontStyle = _this$props$attribute.descFontStyle,
          descTextTransform = _this$props$attribute.descTextTransform,
          descTextDecoration = _this$props$attribute.descTextDecoration,
          descFontColor = _this$props$attribute.descFontColor,
          desclineHeight = _this$props$attribute.desclineHeight,
          buttonTextAlign = _this$props$attribute.buttonTextAlign,
          buttonFontFamily = _this$props$attribute.buttonFontFamily,
          buttonFontSize = _this$props$attribute.buttonFontSize,
          buttonTextTransform = _this$props$attribute.buttonTextTransform,
          buttonFontColor = _this$props$attribute.buttonFontColor,
          buttonHoverColor = _this$props$attribute.buttonHoverColor,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonBackgroundHoverColor = _this$props$attribute.buttonBackgroundHoverColor,
          buttonPaddingTop = _this$props$attribute.buttonPaddingTop,
          buttonPaddingRight = _this$props$attribute.buttonPaddingRight,
          buttonPaddingBottom = _this$props$attribute.buttonPaddingBottom,
          buttonPaddingLeft = _this$props$attribute.buttonPaddingLeft,
          buttonBorderType = _this$props$attribute.buttonBorderType,
          buttonBorderWeight = _this$props$attribute.buttonBorderWeight,
          buttonBorderColor = _this$props$attribute.buttonBorderColor,
          buttonBorderHoverColor = _this$props$attribute.buttonBorderHoverColor;
      var _this$props$attribute2 = this.props.attributes,
          titleFontWeight = _this$props$attribute2.titleFontWeight,
          metaFontWeight = _this$props$attribute2.metaFontWeight,
          descFontWeight = _this$props$attribute2.descFontWeight,
          buttonFontWeight = _this$props$attribute2.buttonFontWeight;
      var setAttributes = this.props.setAttributes;
      var googleFontsOptions = this.state.google_fonts.map(function (google_font, fontindex) {
        return {
          value: google_font.family,
          label: google_font.family
        };
      });
      var google_fonts = this.state.google_fonts;

      function setfontWeight(FontFamily, google_fonts) {
        var i;
        var googleFontWeight;

        for (i = 0; i < google_fonts.length; i++) {
          if (google_fonts[i].family === FontFamily) {
            var variants = google_fonts[i].variants;
            googleFontWeight = variants.map(function (variant) {
              var converted_variant = convert_google_font_variant(variant);
              return {
                value: converted_variant,
                label: converted_variant
              };
            });
            break;
          }
        }

        return googleFontWeight;
      }

      function convert_google_font_variant(variant) {
        switch (variant) {
          case '100':
            return escapeHTML(__('100', 'wp-blog-post-layouts'));
            break;

          case '100italic':
            return escapeHTML(__('100 Italic', 'wp-blog-post-layouts'));
            break;

          case '200':
            return escapeHTML(__('200', 'wp-blog-post-layouts'));
            break;

          case '200italic':
            return escapeHTML(__('200 Italic', 'wp-blog-post-layouts'));
            break;

          case '300':
            return escapeHTML(__('300', 'wp-blog-post-layouts'));
            break;

          case '300italic':
            return escapeHTML(__('300 Italic', 'wp-blog-post-layouts'));
            break;

          case 'regular':
            return escapeHTML(__('400', 'wp-blog-post-layouts'));
            break;

          case '400':
            return escapeHTML(__('400', 'wp-blog-post-layouts'));
            break;

          case '400italic':
            return escapeHTML(__('400 Italic', 'wp-blog-post-layouts'));
            break;

          case 'italic':
            return escapeHTML(__('400 Italic', 'wp-blog-post-layouts'));
            break;

          case '500':
            return escapeHTML(__('500', 'wp-blog-post-layouts'));
            break;

          case '500italic':
            return escapeHTML(__('500 Italic', 'wp-blog-post-layouts'));
            break;

          case '600':
            return escapeHTML(__('600', 'wp-blog-post-layouts'));
            break;

          case '600italic':
            return escapeHTML(__('600 Italic', 'wp-blog-post-layouts'));
            break;

          case '700':
            return escapeHTML(__('700', 'wp-blog-post-layouts'));
            break;

          case '700italic':
            return escapeHTML(__('700 Italic', 'wp-blog-post-layouts'));
            break;

          case '800':
            return escapeHTML(__('800', 'wp-blog-post-layouts'));
            break;

          case '800italic':
            return escapeHTML(__('800 Italic', 'wp-blog-post-layouts'));
            break;

          case '900':
            return escapeHTML(__('900', 'wp-blog-post-layouts'));
            break;

          case '900italic':
            return escapeHTML(__('900 Italic', 'wp-blog-post-layouts'));
            break;

          default:
            break;
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Layout Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wpblog-layout-button-group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Grid Layout Variations', 'blog-post-layouts')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-one' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-one'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.gridLayoutOne
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-two' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-two'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.gridLayoutTwo
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-three' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-three'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.gridLayoutThree
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show post format icon', 'wp-blog-post-layouts')),
        checked: postFormatIcon,
        onChange: function onChange(newpostFormatIcon) {
          return setAttributes({
            postFormatIcon: newpostFormatIcon
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show read more button icon', 'wp-blog-post-layouts')),
        checked: postButtonIcon,
        onChange: function onChange(newpostButtonIcon) {
          return setAttributes({
            postButtonIcon: newpostButtonIcon
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Block Column', 'wp-blog-post-layouts')),
        value: blockColumn,
        options: [{
          value: 'one',
          label: escapeHTML(__('One', 'wp-blog-post-layouts'))
        }, {
          value: 'two',
          label: escapeHTML(__('Two', 'wp-blog-post-layouts'))
        }, {
          value: 'three',
          label: escapeHTML(__('Three', 'wp-blog-post-layouts'))
        }, {
          value: 'four',
          label: escapeHTML(__('Four', 'wp-blog-post-layouts'))
        }, {
          value: 'five',
          label: escapeHTML(__('Five', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockColumn) {
          return setAttributes({
            blockColumn: newblockColumn
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Allow margin between each post', 'wp-blog-post-layouts')),
        checked: postMargin,
        onChange: function onChange(newpostMargin) {
          return setAttributes({
            postMargin: newpostMargin
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Typography Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Inherit default from plugin typography', 'wp-blog-post-layouts')),
        checked: typographyOption,
        onChange: function onChange(newtypographyOption) {
          return setAttributes({
            typographyOption: newtypographyOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Block Title', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: blockTitleFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newblockTitleFontFamily) {
          return setAttributes({
            blockTitleFontFamily: newblockTitleFontFamily,
            blockTitleFontWeight: setfontWeight(newblockTitleFontFamily, google_fonts)[0].value
          });
        }
      }), blockTitleFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: blockTitleFontWeight,
        options: setfontWeight(blockTitleFontFamily, google_fonts),
        onChange: function onChange(newblockTitleFontWeight) {
          return setAttributes({
            blockTitleFontWeight: newblockTitleFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: blockTitleFontSize,
        onChange: function onChange(newblockTitleFontSize) {
          return setAttributes({
            blockTitleFontSize: newblockTitleFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: blockTitleFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleFontStyle) {
          return setAttributes({
            blockTitleFontStyle: newblockTitleFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: blockTitleTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleTextTransform) {
          return setAttributes({
            blockTitleTextTransform: newblockTitleTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: blockTitleTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleTextDecoration) {
          return setAttributes({
            blockTitleTextDecoration: newblockTitleTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-block-title-color-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: blockTitleColor,
        onChange: function onChange(newblockTitleColor) {
          return setAttributes({
            blockTitleColor: newblockTitleColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Border Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: blockTitleBorderColor,
        onChange: function onChange(newblockTitleBorderColor) {
          return setAttributes({
            blockTitleBorderColor: newblockTitleBorderColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: blockTitleLineHeight,
        onChange: function onChange(newblockTitleLineHeight) {
          return setAttributes({
            blockTitleLineHeight: newblockTitleLineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Title', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: titleTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextAlign) {
          return setAttributes({
            titleTextAlign: newtitleTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: titleFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newtitleFontFamily) {
          return setAttributes({
            titleFontFamily: newtitleFontFamily,
            titleFontWeight: setfontWeight(newtitleFontFamily, google_fonts)[0].value
          });
        }
      }), titleFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: titleFontWeight,
        options: setfontWeight(titleFontFamily, google_fonts),
        onChange: function onChange(newtitleFontWeight) {
          return setAttributes({
            titleFontWeight: newtitleFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: titleFontSize,
        onChange: function onChange(newtitleFontSize) {
          return setAttributes({
            titleFontSize: newtitleFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: titleFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleFontStyle) {
          return setAttributes({
            titleFontStyle: newtitleFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: titleTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextTransform) {
          return setAttributes({
            titleTextTransform: newtitleTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: titleTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextDecoration) {
          return setAttributes({
            titleTextDecoration: newtitleTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-title-color-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: titleFontColor,
        onChange: function onChange(newtitleFontColor) {
          return setAttributes({
            titleFontColor: newtitleFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: titleHoverColor,
        onChange: function onChange(newtitleHoverColor) {
          return setAttributes({
            titleHoverColor: newtitleHoverColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: titlelineHeight,
        onChange: function onChange(newtitlelineHeight) {
          return setAttributes({
            titlelineHeight: newtitlelineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Meta', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: metaTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextAlign) {
          return setAttributes({
            metaTextAlign: newmetaTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: metaFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newmetaFontFamily) {
          return setAttributes({
            metaFontFamily: newmetaFontFamily,
            metaFontWeight: setfontWeight(newmetaFontFamily, google_fonts)[0].value
          });
        }
      }), metaFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: metaFontWeight,
        options: setfontWeight(metaFontFamily, google_fonts),
        onChange: function onChange(newmetaFontWeight) {
          return setAttributes({
            metaFontWeight: newmetaFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: metaFontSize,
        onChange: function onChange(newmetaFontSize) {
          return setAttributes({
            metaFontSize: newmetaFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: metaFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaFontStyle) {
          return setAttributes({
            metaFontStyle: newmetaFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: metaTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextTransform) {
          return setAttributes({
            metaTextTransform: newmetaTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: metaTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextDecoration) {
          return setAttributes({
            metaTextDecoration: newmetaTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-meta-color"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: metaFontColor,
        onChange: function onChange(newmetaFontColor) {
          return setAttributes({
            metaFontColor: newmetaFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: metaHoverColor,
        onChange: function onChange(newmetaHoverColor) {
          return setAttributes({
            metaHoverColor: newmetaHoverColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: metalineHeight,
        onChange: function onChange(newmetalineHeight) {
          return setAttributes({
            metalineHeight: newmetalineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Content/Excerpt', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: descTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextAlign) {
          return setAttributes({
            descTextAlign: newdescTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: descFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newdescFontFamily) {
          return setAttributes({
            descFontFamily: newdescFontFamily,
            descFontWeight: setfontWeight(newdescFontFamily, google_fonts)[0].value
          });
        }
      }), descFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: descFontWeight,
        options: setfontWeight(descFontFamily, google_fonts),
        onChange: function onChange(newdescFontWeight) {
          return setAttributes({
            descFontWeight: newdescFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: descFontSize,
        onChange: function onChange(newdescFontSize) {
          return setAttributes({
            descFontSize: newdescFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: descFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescFontStyle) {
          return setAttributes({
            descFontStyle: newdescFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: descTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextTransform) {
          return setAttributes({
            descTextTransform: newdescTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: descTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextDecoration) {
          return setAttributes({
            descTextDecoration: newdescTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: descFontColor,
        onChange: function onChange(newdescFontColor) {
          return setAttributes({
            descFontColor: newdescFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: desclineHeight,
        onChange: function onChange(newdesclineHeight) {
          return setAttributes({
            desclineHeight: newdesclineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Button', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: buttonTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newbuttonTextAlign) {
          return setAttributes({
            buttonTextAlign: newbuttonTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: buttonFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newbuttonFontFamily) {
          return setAttributes({
            buttonFontFamily: newbuttonFontFamily,
            buttonFontWeight: setfontWeight(newbuttonFontFamily, google_fonts)[0].value
          });
        }
      }), buttonFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: buttonFontWeight,
        options: setfontWeight(buttonFontFamily, google_fonts),
        onChange: function onChange(newbuttonFontWeight) {
          return setAttributes({
            buttonFontWeight: newbuttonFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: buttonFontSize,
        onChange: function onChange(newbuttonFontSize) {
          return setAttributes({
            buttonFontSize: newbuttonFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: buttonTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newbuttonTextTransform) {
          return setAttributes({
            buttonTextTransform: newbuttonTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonFontColor
      }, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonFontColor,
        onChange: function onChange(newbuttonFontColor) {
          return setAttributes({
            buttonFontColor: newbuttonFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonHoverColor
      }, escapeHTML(__('Hover Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonHoverColor,
        onChange: function onChange(newbuttonHoverColor) {
          return setAttributes({
            buttonHoverColor: newbuttonHoverColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBackgroundColor
      }, escapeHTML(__('Background Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBackgroundColor,
        onChange: function onChange(newbuttonBackgroundColor) {
          return setAttributes({
            buttonBackgroundColor: newbuttonBackgroundColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBackgroundHoverColor
      }, escapeHTML(__('Background Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBackgroundHoverColor,
        onChange: function onChange(newbuttonBackgroundHoverColor) {
          return setAttributes({
            buttonBackgroundHoverColor: newbuttonBackgroundHoverColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-padding-control-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: "button-padding"
      }, escapeHTML(__('Padding', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Top', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingTop,
        onChange: function onChange(newbuttonPaddingTop) {
          return setAttributes({
            buttonPaddingTop: newbuttonPaddingTop
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Right', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingRight,
        onChange: function onChange(newbuttonPaddingRight) {
          return setAttributes({
            buttonPaddingRight: newbuttonPaddingRight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Bottom', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingBottom,
        onChange: function onChange(newbuttonPaddingBottom) {
          return setAttributes({
            buttonPaddingBottom: newbuttonPaddingBottom
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Left', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingLeft,
        onChange: function onChange(newbuttonPaddingLeft) {
          return setAttributes({
            buttonPaddingLeft: newbuttonPaddingLeft
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Border Type', 'wp-blog-post-layouts')),
        value: buttonBorderType,
        options: [{
          value: 'none',
          label: 'None'
        }, {
          value: 'solid',
          label: 'Solid'
        }, {
          value: 'dotted',
          label: 'Dotted'
        }, {
          value: 'dashed',
          label: 'Dashed'
        }],
        onChange: function onChange(newbuttonBorderType) {
          return setAttributes({
            buttonBorderType: newbuttonBorderType
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Border Weight', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 10,
        value: buttonBorderWeight,
        onChange: function onChange(newbuttonBorderWeight) {
          return setAttributes({
            buttonBorderWeight: newbuttonBorderWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBorderColor
      }, escapeHTML(__('Border Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBorderColor,
        onChange: function onChange(newbuttonBorderColor) {
          return setAttributes({
            buttonBorderColor: newbuttonBorderColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBorderHoverColor
      }, escapeHTML(__('Border Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBorderHoverColor,
        onChange: function onChange(newbuttonBorderHoverColor) {
          return setAttributes({
            buttonBorderHoverColor: newbuttonBorderHoverColor
          });
        }
      }))));
    }
  }]);

  return StyleInspector;
}(Component);



/***/ }),

/***/ "./src/grid/layout-one/layout-one.js":
/*!*******************************************!*\
  !*** ./src/grid/layout-one/layout-one.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Grid block layout one(default) - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var decodeEntities = wp.htmlEntities.decodeEntities;

var GridOne = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GridOne, _Component);

  var _super = _createSuper(GridOne);

  function GridOne(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GridOne);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GridOne, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        return escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(decodeEntities(post.title.rendered.trim())))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('MMMM DD, Y'))), typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name cv-post-meta-item"
        }, escapeHTML(__('By:', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name)), function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-cats-wrap cv-post-meta-item"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }(), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-tag"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name));
            }));
          }
        }(), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts')))))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return GridOne;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(GridOne));

/***/ }),

/***/ "./src/grid/layout-three/layout-three.js":
/*!***********************************************!*\
  !*** ./src/grid/layout-three/layout-three.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Grid block layout three - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var Fragment = wp.element.Fragment;
var decodeEntities = wp.htmlEntities.decodeEntities;

var GridOne = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GridOne, _Component);

  var _super = _createSuper(GridOne);

  function GridOne(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GridOne);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GridOne, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var getPostAuthorImage = function getPostAuthorImage(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].avatar_urls['96'];
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;
        var author_image;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
          author_image = getPostAuthorImage(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })), dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-date"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('DD MMM')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-cat-tag-wrap cv-clearfix"
        }, function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }(), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, escapeHTML(__(',', 'wp-blog-post-layouts')), " "));
            }));
          }
        }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-author-meta cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-author-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: author_image,
          alt: author_name
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name"
        }, escapeHTML(__('By ', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name))), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts')))))), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return GridOne;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(GridOne));

/***/ }),

/***/ "./src/grid/layout-two/layout-two.js":
/*!*******************************************!*\
  !*** ./src/grid/layout-two/layout-two.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Grid block layout two - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var Fragment = wp.element.Fragment;
var decodeEntities = wp.htmlEntities.decodeEntities;

var GridTwo = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GridTwo, _Component);

  var _super = _createSuper(GridTwo);

  function GridTwo(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GridTwo);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GridTwo, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })), function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('MMMM DD, Y'))), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts'))))), typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name cv-post-meta-item"
        }, escapeHTML(__('By:', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name)), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, escapeHTML(__(',', 'wp-blog-post-layouts'))));
            }));
          }
        }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return GridTwo;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(GridTwo));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid/block */ "./src/grid/block.js");
/* harmony import */ var _list_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/block */ "./src/list/block.js");
/* harmony import */ var _masonry_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masonry/block */ "./src/masonry/block.js");






/***/ }),

/***/ "./src/list/block.js":
/*!***************************!*\
  !*** ./src/list/block.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inspector */ "./src/list/components/inspector.js");
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit */ "./src/list/components/edit.js");
/* harmony import */ var _assets_cv_block_icons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/cv-block-icons/icons */ "./assets/cv-block-icons/icons.js");


var _listlayoutAttributes;



/**
 * Register list post layout block. 
 */



var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var registerBlockType = wp.blocks.registerBlockType; // block attributes

var listlayoutAttributes = (_listlayoutAttributes = {
  blockID: {
    type: 'string',
    default: ''
  },
  blockTitle: {
    type: 'string',
    default: ''
  },
  blockTitleLayout: {
    type: 'string',
    default: 'one'
  },
  blockTitleAlign: {
    type: 'string',
    default: 'left'
  },
  posttype: {
    type: 'string',
    default: 'post'
  },
  postCategory: {
    type: 'string',
    default: ''
  },
  postCount: {
    type: 'integer',
    default: 4
  },
  contentType: {
    type: 'string',
    default: 'excerpt'
  },
  wordCount: {
    type: 'integer',
    default: 15
  },
  buttonLabel: {
    type: 'string',
    default: escapeHTML(__('Read more', 'wp-blog-post-layouts'))
  },
  orderBy: {
    type: 'string',
    default: 'date'
  },
  order: {
    type: 'string',
    default: 'desc'
  },
  dateOption: {
    type: 'boolean',
    default: true
  },
  authorOption: {
    type: 'boolean',
    default: true
  },
  categoryOption: {
    type: 'boolean',
    default: true
  },
  tagsOption: {
    type: 'boolean',
    default: true
  },
  commentOption: {
    type: 'boolean',
    default: true
  },
  layoutOption: {
    type: 'string',
    default: 'layout-one'
  },
  postFormatIcon: {
    type: 'boolean',
    default: true
  },
  postButtonIcon: {
    type: 'boolean',
    default: true
  },
  blockColumn: {
    type: 'string',
    default: 'two'
  },
  postMargin: {
    type: 'boolean',
    default: true
  },
  typographyOption: {
    type: 'boolean',
    default: true
  }
}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleAlign", {
  type: 'string',
  default: 'left'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleFontFamily", {
  type: 'string',
  default: 'Yanone Kaffeesatz'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleFontWeight", {
  type: 'string',
  default: '700'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleFontSize", {
  type: 'number',
  default: 32
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleFontStyle", {
  type: 'string',
  default: 'normal'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleTextTransform", {
  type: 'string',
  default: 'Uppercase'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleTextDecoration", {
  type: 'string',
  default: 'none'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleColor", {
  type: 'string',
  default: '#3b3b3b'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleLineHeight", {
  type: 'number',
  default: 1.5
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "blockTitleBorderColor", {
  type: 'string',
  default: '#f47e00'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleTextAlign", {
  type: 'string',
  default: 'left'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleFontFamily", {
  type: 'string',
  default: 'Yanone Kaffeesatz'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleFontWeight", {
  type: 'string',
  default: '700'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleFontSize", {
  type: 'number',
  default: 28
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleFontStyle", {
  type: 'string',
  default: 'normal'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleTextTransform", {
  type: 'string',
  default: 'capitalize'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleTextDecoration", {
  type: 'string',
  default: 'none'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleFontColor", {
  type: 'string',
  default: '#333333'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titleHoverColor", {
  type: 'string',
  default: '#f47e00'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "titlelineHeight", {
  type: 'number',
  default: 1.5
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaTextAlign", {
  type: 'string',
  default: 'left'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaFontFamily", {
  type: 'string',
  default: 'Roboto'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaFontWeight", {
  type: 'string',
  default: '400'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaFontSize", {
  type: 'number',
  default: 14
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaFontStyle", {
  type: 'string',
  default: 'normal'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaTextTransform", {
  type: 'string',
  default: 'capitalize'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaTextDecoration", {
  type: 'string',
  default: 'none'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaFontColor", {
  type: 'string',
  default: '#434343'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metaHoverColor", {
  type: 'string',
  default: '#f47e00'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "metalineHeight", {
  type: 'number',
  default: 1.8
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descTextAlign", {
  type: 'string',
  default: 'left'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descFontFamily", {
  type: 'string',
  default: 'Roboto'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descFontWeight", {
  type: 'string',
  default: '400'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descFontSize", {
  type: 'number',
  default: 15
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descFontStyle", {
  type: 'string',
  default: 'normal'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descTextTransform", {
  type: 'string',
  default: 'none'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descTextDecoration", {
  type: 'string',
  default: 'none'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "descFontColor", {
  type: 'string',
  default: '#3b3b3b'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "desclineHeight", {
  type: 'number',
  default: 2
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonTextAlign", {
  type: 'string',
  default: 'left'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonFontFamily", {
  type: 'string',
  default: 'Roboto'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonFontWeight", {
  type: 'string',
  default: '400'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonFontSize", {
  type: 'number',
  default: 15
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonTextTransform", {
  type: 'string',
  default: 'none'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonFontColor", {
  type: 'string',
  default: '#3b3b3b'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonHoverColor", {
  type: 'string',
  default: '#3b3b3b'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonBackgroundColor", {
  type: 'string',
  default: 'transparent'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonBackgroundHoverColor", {
  type: 'string',
  default: '#f47e00'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonPaddingTop", {
  type: 'string',
  default: '2'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonPaddingRight", {
  type: 'string',
  default: '10'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonPaddingBottom", {
  type: 'string',
  default: '2'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonPaddingLeft", {
  type: 'string',
  default: '10'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonBorderType", {
  type: 'string',
  default: 'solid'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonBorderWeight", {
  type: 'string',
  default: '1'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonBorderColor", {
  type: 'string',
  default: 'transparent'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_listlayoutAttributes, "buttonBorderHoverColor", {
  type: 'string',
  default: '#f47e00'
}), _listlayoutAttributes);
registerBlockType('wpblog-post-layouts/cv-list-blog-post-layout', {
  title: escapeHTML(__('CV List Post Layout', 'wp-blog-post-layouts')),
  description: escapeHTML(__('Post collection with list layout', 'wp-blog-post-layouts')),
  icon: {
    background: '#fff',
    foreground: 'rgba(212,51,93,1)',
    src: _assets_cv_block_icons_icons__WEBPACK_IMPORTED_MODULE_4__["default"].List
  },
  keywords: [escapeHTML(__('blog', 'wp-blog-post-layouts')), escapeHTML(__('list', 'wp-blog-post-layouts')), escapeHTML(__('post', 'wp-blog-post-layouts')), escapeHTML(__('layout', 'wp-blog-post-layouts'))],
  category: 'wpblog-post-layouts-blocks',
  attributes: listlayoutAttributes,
  supports: {
    align: ["wide", "full"]
  },
  example: {
    attributes: {
      'blockColumn': 'one',
      'postCount': 2,
      'dateOption': false,
      'authorOption': false,
      'categoryOption': false,
      'tagsOption': false,
      'commentOption': false,
      'contentOption': false,
      'buttonLabel': '',
      'postFormatIcon': false
    }
  },
  edit: function edit(props) {
    props.attributes.blockID = props.clientId;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_edit__WEBPACK_IMPORTED_MODULE_3__["default"], props)];
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/list/components/edit.js":
/*!*************************************!*\
  !*** ./src/list/components/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_one_layout_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-one/layout-one */ "./src/list/layout-one/layout-one.js");
/* harmony import */ var _layout_two_layout_two__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout-two/layout-two */ "./src/list/layout-two/layout-two.js");
/* harmony import */ var _layout_three_layout_three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout-three/layout-three */ "./src/list/layout-three/layout-three.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_style_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-style-tag */ "./node_modules/react-style-tag/es/index.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Block View wrapper
 */



var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;



var Edit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "enqueueGooglefonts",
    value: function enqueueGooglefonts() {
      var _this$props$attribute = this.props.attributes,
          typographyOption = _this$props$attribute.typographyOption,
          blockTitleFontFamily = _this$props$attribute.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute.blockTitleFontWeight,
          titleFontFamily = _this$props$attribute.titleFontFamily,
          titleFontWeight = _this$props$attribute.titleFontWeight,
          metaFontFamily = _this$props$attribute.metaFontFamily,
          metaFontWeight = _this$props$attribute.metaFontWeight,
          descFontFamily = _this$props$attribute.descFontFamily,
          descFontWeight = _this$props$attribute.descFontWeight,
          buttonFontFamily = _this$props$attribute.buttonFontFamily,
          buttonFontWeight = _this$props$attribute.buttonFontWeight;
      {
        typographyOption == false && blockTitleFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(blockTitleFontFamily, ":").concat(blockTitleFontWeight)]
          }
        });
        titleFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(titleFontFamily, ":").concat(titleFontWeight)]
          }
        });
        metaFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(metaFontFamily, ":").concat(metaFontWeight)]
          }
        });
        descFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(descFontFamily, ":").concat(descFontWeight)]
          }
        });
        buttonFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(buttonFontFamily, ":").concat(buttonFontWeight)]
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.enqueueGooglefonts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.enqueueGooglefonts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$attribute2 = this.props.attributes,
          blockID = _this$props$attribute2.blockID,
          blockTitle = _this$props$attribute2.blockTitle,
          blockTitleLayout = _this$props$attribute2.blockTitleLayout,
          layoutOption = _this$props$attribute2.layoutOption,
          typographyOption = _this$props$attribute2.typographyOption,
          blockTitleAlign = _this$props$attribute2.blockTitleAlign,
          blockTitleFontFamily = _this$props$attribute2.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute2.blockTitleFontWeight,
          blockTitleFontSize = _this$props$attribute2.blockTitleFontSize,
          blockTitleFontStyle = _this$props$attribute2.blockTitleFontStyle,
          blockTitleTextTransform = _this$props$attribute2.blockTitleTextTransform,
          blockTitleTextDecoration = _this$props$attribute2.blockTitleTextDecoration,
          blockTitleColor = _this$props$attribute2.blockTitleColor,
          blockTitleLineHeight = _this$props$attribute2.blockTitleLineHeight,
          blockTitleBorderColor = _this$props$attribute2.blockTitleBorderColor,
          titleTextAlign = _this$props$attribute2.titleTextAlign,
          titleFontFamily = _this$props$attribute2.titleFontFamily,
          titleFontWeight = _this$props$attribute2.titleFontWeight,
          titleFontSize = _this$props$attribute2.titleFontSize,
          titleFontStyle = _this$props$attribute2.titleFontStyle,
          titleTextTransform = _this$props$attribute2.titleTextTransform,
          titleTextDecoration = _this$props$attribute2.titleTextDecoration,
          titleFontColor = _this$props$attribute2.titleFontColor,
          titleHoverColor = _this$props$attribute2.titleHoverColor,
          titlelineHeight = _this$props$attribute2.titlelineHeight,
          metaTextAlign = _this$props$attribute2.metaTextAlign,
          metaFontFamily = _this$props$attribute2.metaFontFamily,
          metaFontWeight = _this$props$attribute2.metaFontWeight,
          metaFontSize = _this$props$attribute2.metaFontSize,
          metaFontStyle = _this$props$attribute2.metaFontStyle,
          metaTextTransform = _this$props$attribute2.metaTextTransform,
          metaTextDecoration = _this$props$attribute2.metaTextDecoration,
          metaFontColor = _this$props$attribute2.metaFontColor,
          metaHoverColor = _this$props$attribute2.metaHoverColor,
          metalineHeight = _this$props$attribute2.metalineHeight,
          descTextAlign = _this$props$attribute2.descTextAlign,
          descFontFamily = _this$props$attribute2.descFontFamily,
          descFontWeight = _this$props$attribute2.descFontWeight,
          descFontSize = _this$props$attribute2.descFontSize,
          descFontStyle = _this$props$attribute2.descFontStyle,
          descTextTransform = _this$props$attribute2.descTextTransform,
          descTextDecoration = _this$props$attribute2.descTextDecoration,
          descFontColor = _this$props$attribute2.descFontColor,
          desclineHeight = _this$props$attribute2.desclineHeight,
          buttonTextAlign = _this$props$attribute2.buttonTextAlign,
          buttonFontFamily = _this$props$attribute2.buttonFontFamily,
          buttonFontSize = _this$props$attribute2.buttonFontSize,
          buttonFontWeight = _this$props$attribute2.buttonFontWeight,
          buttonTextTransform = _this$props$attribute2.buttonTextTransform,
          buttonFontColor = _this$props$attribute2.buttonFontColor,
          buttonHoverColor = _this$props$attribute2.buttonHoverColor,
          buttonBackgroundColor = _this$props$attribute2.buttonBackgroundColor,
          buttonBackgroundHoverColor = _this$props$attribute2.buttonBackgroundHoverColor,
          buttonPaddingTop = _this$props$attribute2.buttonPaddingTop,
          buttonPaddingRight = _this$props$attribute2.buttonPaddingRight,
          buttonPaddingBottom = _this$props$attribute2.buttonPaddingBottom,
          buttonPaddingLeft = _this$props$attribute2.buttonPaddingLeft,
          buttonBorderType = _this$props$attribute2.buttonBorderType,
          buttonBorderWeight = _this$props$attribute2.buttonBorderWeight,
          buttonBorderColor = _this$props$attribute2.buttonBorderColor,
          buttonBorderHoverColor = _this$props$attribute2.buttonBorderHoverColor;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_style_tag__WEBPACK_IMPORTED_MODULE_10__["Style"], {
        id: "".concat(blockID, "-block-title-style")
      }, "\n                        .block-".concat(blockID, " .cv-block-title{\n                            text-align: ").concat(blockTitleAlign, "\n                        }\n                    ")), typographyOption == false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_style_tag__WEBPACK_IMPORTED_MODULE_10__["Style"], {
        id: "".concat(blockID, "-block-style")
      }, "\n                        .block-".concat(blockID, " .cv-block-title{\n                            font-family: ").concat(blockTitleFontFamily, "\n                            font-weight: ").concat(blockTitleFontWeight, "\n                            font-size: ").concat(blockTitleFontSize, "px\n                            font-style: ").concat(blockTitleFontStyle, "\n                            text-transform: ").concat(blockTitleTextTransform, "\n                            text-decoration: ").concat(blockTitleTextDecoration, "\n                            color: ").concat(blockTitleColor, "\n                            line-height: ").concat(blockTitleLineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title span::before{\n                            background: ").concat(blockTitleBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title span::after{\n                            background: ").concat(blockTitleBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--four span{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--four span:after{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--five span:before{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            border-left: none;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--five span:after{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            border-left: none;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-post-title a{\n                            text-align: ").concat(titleTextAlign, "\n                            font-family: ").concat(titleFontFamily, "\n                            font-weight: ").concat(titleFontWeight, "\n                            font-size: ").concat(titleFontSize, "px\n                            font-style: ").concat(titleFontStyle, "\n                            text-transform: ").concat(titleTextTransform, "\n                            text-decoration: ").concat(titleTextDecoration, "\n                            color: ").concat(titleFontColor, "\n                            line-height: ").concat(titlelineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-title a:hover{\n                            color: ").concat(titleHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta a{\n                            text-align: ").concat(metaTextAlign, "\n                            font-family: ").concat(metaFontFamily, "\n                            font-weight: ").concat(metaFontWeight, "\n                            font-size: ").concat(metaFontSize, "px\n                            font-style: ").concat(metaFontStyle, "\n                            text-transform: ").concat(metaTextTransform, "\n                            text-decoration: ").concat(metaTextDecoration, "\n                            color: ").concat(metaFontColor, "\n                            line-height: ").concat(metalineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta > span{\n                            text-align: ").concat(metaTextAlign, "\n                            font-family: ").concat(metaFontFamily, "\n                            font-weight: ").concat(metaFontWeight, "\n                            font-size: ").concat(metaFontSize, "px\n                            font-style: ").concat(metaFontStyle, "\n                            text-transform: ").concat(metaTextTransform, "\n                            text-decoration: ").concat(metaTextDecoration, "\n                            color: ").concat(metaFontColor, "\n                            line-height: ").concat(metalineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta a:hover{\n                            color: ").concat(metaHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta > span:hover{\n                            color: ").concat(metaHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-content p{\n                            text-align: ").concat(descTextAlign, "\n                            font-family: ").concat(descFontFamily, "\n                            font-weight: ").concat(descFontWeight, "\n                            font-size: ").concat(descFontSize, "px\n                            font-style: ").concat(descFontStyle, "\n                            text-transform: ").concat(descTextTransform, "\n                            text-decoration: ").concat(descTextDecoration, "\n                            color: ").concat(descFontColor, "\n                            line-height: ").concat(desclineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more a{\n                            font-family: ").concat(buttonFontFamily, "\n                            font-weight: ").concat(buttonFontWeight, "\n                            font-size: ").concat(buttonFontSize, "px\n                            text-transform: ").concat(buttonTextTransform, "\n                            color: ").concat(buttonFontColor, "\n                            background-color: ").concat(buttonBackgroundColor, "\n                            padding-top: ").concat(buttonPaddingTop, "px\n                            padding-right: ").concat(buttonPaddingRight, "px\n                            padding-bottom: ").concat(buttonPaddingBottom, "px\n                            padding-left: ").concat(buttonPaddingLeft, "px\n                            border-style: ").concat(buttonBorderType, "\n                            border-width: ").concat(buttonBorderWeight, "px\n                            border-color: ").concat(buttonBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more{\n                            text-align: ").concat(buttonTextAlign, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more a:hover{\n                            color: ").concat(buttonHoverColor, "\n                            background-color: ").concat(buttonBackgroundHoverColor, "\n                            border-color: ").concat(buttonBorderHoverColor, "\n                        }\n                    ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        id: "cv-list-post-layout",
        className: "block-".concat(blockID, " cv-block cv-block-list--").concat(layoutOption)
      }, function () {
        if (!!blockTitle) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
            className: "cv-block-title align--".concat(blockTitleAlign, " layout--").concat(blockTitleLayout)
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, blockTitle));
        }
      }(), function () {
        switch (layoutOption) {
          case 'layout-two':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_two_layout_two__WEBPACK_IMPORTED_MODULE_7__["default"], _this.props);

          case 'layout-three':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_three_layout_three__WEBPACK_IMPORTED_MODULE_8__["default"], _this.props);

          default:
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_one_layout_one__WEBPACK_IMPORTED_MODULE_6__["default"], _this.props);
        }
      }()));
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./src/list/components/general-inspector.js":
/*!**************************************************!*\
  !*** ./src/list/components/general-inspector.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * General Tab Tnspector controls wrapper controls.
 * 
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl;
var withSelect = wp.data.withSelect;

var GeneralInspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GeneralInspector, _Component);

  var _super = _createSuper(GeneralInspector);

  function GeneralInspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GeneralInspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GeneralInspector, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          blockTitle = _this$props$attribute.blockTitle,
          blockTitleLayout = _this$props$attribute.blockTitleLayout,
          blockTitleAlign = _this$props$attribute.blockTitleAlign,
          posttype = _this$props$attribute.posttype,
          postCategory = _this$props$attribute.postCategory,
          postCount = _this$props$attribute.postCount,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          buttonLabel = _this$props$attribute.buttonLabel,
          orderBy = _this$props$attribute.orderBy,
          order = _this$props$attribute.order,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption;
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          postTypesList = _this$props.postTypesList,
          categoriesList = _this$props.categoriesList;
      var hascategoriesList = Array.isArray(categoriesList) && categoriesList.length;
      var allCategories = [];

      if (hascategoriesList) {
        allCategories.push({
          label: escapeHTML(__('All', 'wp-blog-post-layouts')),
          value: ''
        });
        categoriesList.forEach(function (category) {
          allCategories.push({
            label: category.name + ' (' + category.count + ')',
            value: category.id
          });
        });
      } else {
        allCategories.push({
          label: escapeHTML(__('All', 'wp-blog-post-layouts')),
          value: ''
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Basic Settings', 'wp-blog-post-layouts'))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Block Title', 'wp-blog-post-layouts')),
        value: blockTitle,
        placeholder: escapeHTML(__('Add title here..', 'wp-blog-post-layouts')),
        onChange: function onChange(newblockTitle) {
          return setAttributes({
            blockTitle: newblockTitle
          });
        }
      }), blockTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Block Title Layout', 'wp-blog-post-layouts')),
        value: blockTitleLayout,
        options: [{
          value: 'one',
          label: 'One'
        }, {
          value: 'two',
          label: 'Two'
        }, {
          value: 'three',
          label: 'Three'
        }],
        onChange: function onChange(newblockTitleLayout) {
          return setAttributes({
            blockTitleLayout: newblockTitleLayout
          });
        }
      }), blockTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: blockTitleAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleAlign) {
          return setAttributes({
            blockTitleAlign: newblockTitleAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Category', 'wp-blog-post-layouts')),
        value: postCategory,
        options: allCategories,
        onChange: function onChange(newpostCategory) {
          return setAttributes({
            postCategory: newpostCategory
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Post Count', 'wp-blog-post-layouts')),
        value: postCount,
        onChange: function onChange(newpostCount) {
          return setAttributes({
            postCount: newpostCount
          });
        },
        min: 1,
        max: 200
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Content Type', 'wp-blog-post-layouts')),
        value: contentType,
        options: [{
          value: 'excerpt',
          label: 'Excerpt'
        }, {
          value: 'content',
          label: 'Content'
        }],
        onChange: function onChange(newcontentType) {
          return setAttributes({
            contentType: newcontentType
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Content Length', 'wp-blog-post-layouts')),
        value: wordCount,
        onChange: function onChange(newwordCount) {
          return setAttributes({
            wordCount: newwordCount
          });
        },
        min: 1,
        max: 500
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Button Label', 'wp-blog-post-layouts')),
        value: buttonLabel,
        placeholder: escapeHTML(__('Add label here..', 'wp-blog-post-layouts')),
        onChange: function onChange(newbuttonLabel) {
          return setAttributes({
            buttonLabel: newbuttonLabel
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Query Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Order By', 'wp-blog-post-layouts')),
        value: orderBy,
        options: [{
          value: 'date',
          label: 'Date'
        }, {
          value: 'title',
          label: 'Title'
        }],
        onChange: function onChange(neworderBy) {
          return setAttributes({
            orderBy: neworderBy
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Order', 'wp-blog-post-layouts')),
        value: order,
        options: [{
          value: 'asc',
          label: 'Ascending'
        }, {
          value: 'desc',
          label: 'Descending'
        }],
        onChange: function onChange(neworder) {
          return setAttributes({
            order: neworder
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show date', 'wp-blog-post-layouts')),
        checked: dateOption,
        onChange: function onChange(newdateOption) {
          return setAttributes({
            dateOption: newdateOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show author', 'wp-blog-post-layouts')),
        checked: authorOption,
        onChange: function onChange(newauthorOption) {
          return setAttributes({
            authorOption: newauthorOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show categories', 'wp-blog-post-layouts')),
        checked: categoryOption,
        onChange: function onChange(newcategoryOption) {
          return setAttributes({
            categoryOption: newcategoryOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show tags', 'wp-blog-post-layouts')),
        checked: tagsOption,
        onChange: function onChange(newtagsOption) {
          return setAttributes({
            tagsOption: newtagsOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show comments number', 'wp-blog-post-layouts')),
        checked: commentOption,
        onChange: function onChange(newcommentOption) {
          return setAttributes({
            commentOption: newcommentOption
          });
        }
      })));
    }
  }]);

  return GeneralInspector;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var posttype = props.attributes.posttype;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getPostTypes = _select.getPostTypes;

  var allpostTypesList = getPostTypes();
  var filterpostTypesList = [];
  var taxonomnyName;

  if (allpostTypesList) {
    allpostTypesList.forEach(function (allpostType) {
      if (allpostType.slug != 'page' && allpostType.slug != 'wp_block' && allpostType.slug != 'attachment') {
        filterpostTypesList.push({
          label: allpostType.name,
          value: allpostType.slug
        });

        if (allpostType.slug == posttype) {
          taxonomnyName = allpostType.taxonomies[0];
        }
      }
    });
  }

  var taxonomyQuery = {
    hide_empty: true,
    per_page: 100
  };
  return {
    postTypesList: filterpostTypesList,
    categoriesList: getEntityRecords('taxonomy', taxonomnyName, taxonomyQuery)
  };
})(GeneralInspector));

/***/ }),

/***/ "./src/list/components/inspector.js":
/*!******************************************!*\
  !*** ./src/list/components/inspector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _general_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-inspector */ "./src/list/components/general-inspector.js");
/* harmony import */ var _style_inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style-inspector */ "./src/list/components/style-inspector.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Tnspector controls wrapper controls.
 * 
 */


var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var InspectorControls = wp.blockEditor.InspectorControls;
var TabPanel = wp.components.TabPanel;

var Inspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
        className: "cv-tabs-panel",
        activeClass: "active-tab",
        tabs: [{
          name: "generalInspector",
          title: escapeHTML(__("General", "blog-post-layouts")),
          className: "tab-panel"
        }, {
          name: "styleInspector",
          title: escapeHTML(__("Style", "blog-post-layouts")),
          className: "tab-panel"
        }]
      }, function (tab) {
        if (tab.name == "generalInspector") {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_general_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], _this.props);
        } else if (tab.name == "styleInspector") {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_style_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], _this.props);
        }
      }));
    }
  }]);

  return Inspector;
}(Component);



/***/ }),

/***/ "./src/list/components/style-inspector.js":
/*!************************************************!*\
  !*** ./src/list/components/style-inspector.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleInspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../block-base/googlefonts.json */ "./src/block-base/googlefonts.json");
var _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../block-base/googlefonts.json */ "./src/block-base/googlefonts.json", 1);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Style Tab Tnspector controls wrapper controls.
 * 
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    ColorPalette = _wp$components.ColorPalette,
    TextControl = _wp$components.TextControl,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button;


var StyleInspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StyleInspector, _Component);

  var _super = _createSuper(StyleInspector);

  function StyleInspector(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StyleInspector);

    _this = _super.apply(this, arguments);
    _this.state = {
      google_fonts: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StyleInspector, [{
    key: "get_google_fonts",
    value: function get_google_fonts() {
      var GoogleFontsLists = _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6__;
      this.setState({
        google_fonts: GoogleFontsLists
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.get_google_fonts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          layoutOption = _this$props$attribute.layoutOption,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin,
          typographyOption = _this$props$attribute.typographyOption,
          blockTitleFontFamily = _this$props$attribute.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute.blockTitleFontWeight,
          blockTitleFontSize = _this$props$attribute.blockTitleFontSize,
          blockTitleFontStyle = _this$props$attribute.blockTitleFontStyle,
          blockTitleTextTransform = _this$props$attribute.blockTitleTextTransform,
          blockTitleTextDecoration = _this$props$attribute.blockTitleTextDecoration,
          blockTitleColor = _this$props$attribute.blockTitleColor,
          blockTitleLineHeight = _this$props$attribute.blockTitleLineHeight,
          blockTitleBorderColor = _this$props$attribute.blockTitleBorderColor,
          titleTextAlign = _this$props$attribute.titleTextAlign,
          titleFontFamily = _this$props$attribute.titleFontFamily,
          titleFontSize = _this$props$attribute.titleFontSize,
          titleFontStyle = _this$props$attribute.titleFontStyle,
          titleTextTransform = _this$props$attribute.titleTextTransform,
          titleTextDecoration = _this$props$attribute.titleTextDecoration,
          titleFontColor = _this$props$attribute.titleFontColor,
          titleHoverColor = _this$props$attribute.titleHoverColor,
          titlelineHeight = _this$props$attribute.titlelineHeight,
          metaTextAlign = _this$props$attribute.metaTextAlign,
          metaFontFamily = _this$props$attribute.metaFontFamily,
          metaFontSize = _this$props$attribute.metaFontSize,
          metaFontStyle = _this$props$attribute.metaFontStyle,
          metaTextTransform = _this$props$attribute.metaTextTransform,
          metaTextDecoration = _this$props$attribute.metaTextDecoration,
          metaFontColor = _this$props$attribute.metaFontColor,
          metaHoverColor = _this$props$attribute.metaHoverColor,
          metalineHeight = _this$props$attribute.metalineHeight,
          descTextAlign = _this$props$attribute.descTextAlign,
          descFontFamily = _this$props$attribute.descFontFamily,
          descFontSize = _this$props$attribute.descFontSize,
          descFontStyle = _this$props$attribute.descFontStyle,
          descTextTransform = _this$props$attribute.descTextTransform,
          descTextDecoration = _this$props$attribute.descTextDecoration,
          descFontColor = _this$props$attribute.descFontColor,
          desclineHeight = _this$props$attribute.desclineHeight,
          buttonTextAlign = _this$props$attribute.buttonTextAlign,
          buttonFontFamily = _this$props$attribute.buttonFontFamily,
          buttonFontSize = _this$props$attribute.buttonFontSize,
          buttonTextTransform = _this$props$attribute.buttonTextTransform,
          buttonFontColor = _this$props$attribute.buttonFontColor,
          buttonHoverColor = _this$props$attribute.buttonHoverColor,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonBackgroundHoverColor = _this$props$attribute.buttonBackgroundHoverColor,
          buttonPaddingTop = _this$props$attribute.buttonPaddingTop,
          buttonPaddingRight = _this$props$attribute.buttonPaddingRight,
          buttonPaddingBottom = _this$props$attribute.buttonPaddingBottom,
          buttonPaddingLeft = _this$props$attribute.buttonPaddingLeft,
          buttonBorderType = _this$props$attribute.buttonBorderType,
          buttonBorderWeight = _this$props$attribute.buttonBorderWeight,
          buttonBorderColor = _this$props$attribute.buttonBorderColor,
          buttonBorderHoverColor = _this$props$attribute.buttonBorderHoverColor;
      var _this$props$attribute2 = this.props.attributes,
          titleFontWeight = _this$props$attribute2.titleFontWeight,
          metaFontWeight = _this$props$attribute2.metaFontWeight,
          descFontWeight = _this$props$attribute2.descFontWeight,
          buttonFontWeight = _this$props$attribute2.buttonFontWeight;
      var setAttributes = this.props.setAttributes;
      var googleFontsOptions = this.state.google_fonts.map(function (google_font, fontindex) {
        return {
          value: google_font.family,
          label: google_font.family
        };
      });
      var google_fonts = this.state.google_fonts;

      function setfontWeight(FontFamily, google_fonts) {
        var i;
        var googleFontWeight;

        for (i = 0; i < google_fonts.length; i++) {
          if (google_fonts[i].family === FontFamily) {
            var variants = google_fonts[i].variants;
            googleFontWeight = variants.map(function (variant) {
              var converted_variant = convert_google_font_variant(variant);
              return {
                value: converted_variant,
                label: converted_variant
              };
            });
            break;
          }
        }

        return googleFontWeight;
      }

      function convert_google_font_variant(variant) {
        switch (variant) {
          case '100':
            return escapeHTML(__('100', 'wp-blog-post-layouts'));
            break;

          case '100italic':
            return escapeHTML(__('100 Italic', 'wp-blog-post-layouts'));
            break;

          case '200':
            return escapeHTML(__('200', 'wp-blog-post-layouts'));
            break;

          case '200italic':
            return escapeHTML(__('200 Italic', 'wp-blog-post-layouts'));
            break;

          case '300':
            return escapeHTML(__('300', 'wp-blog-post-layouts'));
            break;

          case '300italic':
            return escapeHTML(__('300 Italic', 'wp-blog-post-layouts'));
            break;

          case 'regular':
            return escapeHTML(__('400', 'wp-blog-post-layouts'));
            break;

          case '400':
            return escapeHTML(__('400', 'wp-blog-post-layouts'));
            break;

          case '400italic':
            return escapeHTML(__('400 Italic', 'wp-blog-post-layouts'));
            break;

          case 'italic':
            return escapeHTML(__('400 Italic', 'wp-blog-post-layouts'));
            break;

          case '500':
            return escapeHTML(__('500', 'wp-blog-post-layouts'));
            break;

          case '500italic':
            return escapeHTML(__('500 Italic', 'wp-blog-post-layouts'));
            break;

          case '600':
            return escapeHTML(__('600', 'wp-blog-post-layouts'));
            break;

          case '600italic':
            return escapeHTML(__('600 Italic', 'wp-blog-post-layouts'));
            break;

          case '700':
            return escapeHTML(__('700', 'wp-blog-post-layouts'));
            break;

          case '700italic':
            return escapeHTML(__('700 Italic', 'wp-blog-post-layouts'));
            break;

          case '800':
            return escapeHTML(__('800', 'wp-blog-post-layouts'));
            break;

          case '800italic':
            return escapeHTML(__('800 Italic', 'wp-blog-post-layouts'));
            break;

          case '900':
            return escapeHTML(__('900', 'wp-blog-post-layouts'));
            break;

          case '900italic':
            return escapeHTML(__('900 Italic', 'wp-blog-post-layouts'));
            break;

          default:
            break;
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Layout Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wpblog-layout-button-group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('List Layout Variations', 'blog-post-layouts')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-one' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-one'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.listLayoutOne
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-two' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-two'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.listLayoutTwo
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-three' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-three'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.listLayoutThree
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show post format icon', 'wp-blog-post-layouts')),
        checked: postFormatIcon,
        onChange: function onChange(newpostFormatIcon) {
          return setAttributes({
            postFormatIcon: newpostFormatIcon
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show read more button icon', 'wp-blog-post-layouts')),
        checked: postButtonIcon,
        onChange: function onChange(newpostButtonIcon) {
          return setAttributes({
            postButtonIcon: newpostButtonIcon
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Block Column', 'wp-blog-post-layouts')),
        value: blockColumn,
        options: [{
          value: 'one',
          label: escapeHTML(__('One', 'wp-blog-post-layouts'))
        }, {
          value: 'two',
          label: escapeHTML(__('Two', 'wp-blog-post-layouts'))
        }, {
          value: 'three',
          label: escapeHTML(__('Three', 'wp-blog-post-layouts'))
        }, {
          value: 'four',
          label: escapeHTML(__('Four', 'wp-blog-post-layouts'))
        }, {
          value: 'five',
          label: escapeHTML(__('Five', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockColumn) {
          return setAttributes({
            blockColumn: newblockColumn
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Allow margin between each post', 'wp-blog-post-layouts')),
        checked: postMargin,
        onChange: function onChange(newpostMargin) {
          return setAttributes({
            postMargin: newpostMargin
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Typography Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Inherit default from plugin typography', 'wp-blog-post-layouts')),
        checked: typographyOption,
        onChange: function onChange(newtypographyOption) {
          return setAttributes({
            typographyOption: newtypographyOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Block Title', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: blockTitleFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newblockTitleFontFamily) {
          return setAttributes({
            blockTitleFontFamily: newblockTitleFontFamily,
            blockTitleFontWeight: setfontWeight(newblockTitleFontFamily, google_fonts)[0].value
          });
        }
      }), blockTitleFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: blockTitleFontWeight,
        options: setfontWeight(blockTitleFontFamily, google_fonts),
        onChange: function onChange(newblockTitleFontWeight) {
          return setAttributes({
            blockTitleFontWeight: newblockTitleFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: blockTitleFontSize,
        onChange: function onChange(newblockTitleFontSize) {
          return setAttributes({
            blockTitleFontSize: newblockTitleFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: blockTitleFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleFontStyle) {
          return setAttributes({
            blockTitleFontStyle: newblockTitleFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: blockTitleTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleTextTransform) {
          return setAttributes({
            blockTitleTextTransform: newblockTitleTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: blockTitleTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleTextDecoration) {
          return setAttributes({
            blockTitleTextDecoration: newblockTitleTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-block-title-color-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: blockTitleColor,
        onChange: function onChange(newblockTitleColor) {
          return setAttributes({
            blockTitleColor: newblockTitleColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Border Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: blockTitleBorderColor,
        onChange: function onChange(newblockTitleBorderColor) {
          return setAttributes({
            blockTitleBorderColor: newblockTitleBorderColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: blockTitleLineHeight,
        onChange: function onChange(newblockTitleLineHeight) {
          return setAttributes({
            blockTitleLineHeight: newblockTitleLineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Title', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: titleTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextAlign) {
          return setAttributes({
            titleTextAlign: newtitleTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: titleFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newtitleFontFamily) {
          return setAttributes({
            titleFontFamily: newtitleFontFamily,
            titleFontWeight: setfontWeight(newtitleFontFamily, google_fonts)[0].value
          });
        }
      }), titleFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: titleFontWeight,
        options: setfontWeight(titleFontFamily, google_fonts),
        onChange: function onChange(newtitleFontWeight) {
          return setAttributes({
            titleFontWeight: newtitleFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: titleFontSize,
        onChange: function onChange(newtitleFontSize) {
          return setAttributes({
            titleFontSize: newtitleFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: titleFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleFontStyle) {
          return setAttributes({
            titleFontStyle: newtitleFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: titleTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextTransform) {
          return setAttributes({
            titleTextTransform: newtitleTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: titleTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextDecoration) {
          return setAttributes({
            titleTextDecoration: newtitleTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-title-color-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: titleFontColor,
        onChange: function onChange(newtitleFontColor) {
          return setAttributes({
            titleFontColor: newtitleFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: titleHoverColor,
        onChange: function onChange(newtitleHoverColor) {
          return setAttributes({
            titleHoverColor: newtitleHoverColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: titlelineHeight,
        onChange: function onChange(newtitlelineHeight) {
          return setAttributes({
            titlelineHeight: newtitlelineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Meta', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: metaTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextAlign) {
          return setAttributes({
            metaTextAlign: newmetaTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: metaFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newmetaFontFamily) {
          return setAttributes({
            metaFontFamily: newmetaFontFamily,
            metaFontWeight: setfontWeight(newmetaFontFamily, google_fonts)[0].value
          });
        }
      }), metaFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: metaFontWeight,
        options: setfontWeight(metaFontFamily, google_fonts),
        onChange: function onChange(newmetaFontWeight) {
          return setAttributes({
            metaFontWeight: newmetaFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: metaFontSize,
        onChange: function onChange(newmetaFontSize) {
          return setAttributes({
            metaFontSize: newmetaFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: metaFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaFontStyle) {
          return setAttributes({
            metaFontStyle: newmetaFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: metaTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextTransform) {
          return setAttributes({
            metaTextTransform: newmetaTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: metaTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextDecoration) {
          return setAttributes({
            metaTextDecoration: newmetaTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-meta-color"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: metaFontColor,
        onChange: function onChange(newmetaFontColor) {
          return setAttributes({
            metaFontColor: newmetaFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: metaHoverColor,
        onChange: function onChange(newmetaHoverColor) {
          return setAttributes({
            metaHoverColor: newmetaHoverColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: metalineHeight,
        onChange: function onChange(newmetalineHeight) {
          return setAttributes({
            metalineHeight: newmetalineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Content/Excerpt', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: descTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextAlign) {
          return setAttributes({
            descTextAlign: newdescTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: descFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newdescFontFamily) {
          return setAttributes({
            descFontFamily: newdescFontFamily,
            descFontWeight: setfontWeight(newdescFontFamily, google_fonts)[0].value
          });
        }
      }), descFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: descFontWeight,
        options: setfontWeight(descFontFamily, google_fonts),
        onChange: function onChange(newdescFontWeight) {
          return setAttributes({
            descFontWeight: newdescFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: descFontSize,
        onChange: function onChange(newdescFontSize) {
          return setAttributes({
            descFontSize: newdescFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: descFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescFontStyle) {
          return setAttributes({
            descFontStyle: newdescFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: descTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextTransform) {
          return setAttributes({
            descTextTransform: newdescTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: descTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextDecoration) {
          return setAttributes({
            descTextDecoration: newdescTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: descFontColor,
        onChange: function onChange(newdescFontColor) {
          return setAttributes({
            descFontColor: newdescFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: desclineHeight,
        onChange: function onChange(newdesclineHeight) {
          return setAttributes({
            desclineHeight: newdesclineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Button', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: buttonTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newbuttonTextAlign) {
          return setAttributes({
            buttonTextAlign: newbuttonTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: buttonFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newbuttonFontFamily) {
          return setAttributes({
            buttonFontFamily: newbuttonFontFamily,
            buttonFontWeight: setfontWeight(newbuttonFontFamily, google_fonts)[0].value
          });
        }
      }), buttonFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: buttonFontWeight,
        options: setfontWeight(buttonFontFamily, google_fonts),
        onChange: function onChange(newbuttonFontWeight) {
          return setAttributes({
            buttonFontWeight: newbuttonFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: buttonFontSize,
        onChange: function onChange(newbuttonFontSize) {
          return setAttributes({
            buttonFontSize: newbuttonFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: buttonTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newbuttonTextTransform) {
          return setAttributes({
            buttonTextTransform: newbuttonTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonFontColor
      }, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonFontColor,
        onChange: function onChange(newbuttonFontColor) {
          return setAttributes({
            buttonFontColor: newbuttonFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonHoverColor
      }, escapeHTML(__('Hover Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonHoverColor,
        onChange: function onChange(newbuttonHoverColor) {
          return setAttributes({
            buttonHoverColor: newbuttonHoverColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBackgroundColor
      }, escapeHTML(__('Background Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBackgroundColor,
        onChange: function onChange(newbuttonBackgroundColor) {
          return setAttributes({
            buttonBackgroundColor: newbuttonBackgroundColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBackgroundHoverColor
      }, escapeHTML(__('Background Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBackgroundHoverColor,
        onChange: function onChange(newbuttonBackgroundHoverColor) {
          return setAttributes({
            buttonBackgroundHoverColor: newbuttonBackgroundHoverColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-padding-control-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: "button-padding"
      }, escapeHTML(__('Padding', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Top', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingTop,
        onChange: function onChange(newbuttonPaddingTop) {
          return setAttributes({
            buttonPaddingTop: newbuttonPaddingTop
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Right', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingRight,
        onChange: function onChange(newbuttonPaddingRight) {
          return setAttributes({
            buttonPaddingRight: newbuttonPaddingRight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Bottom', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingBottom,
        onChange: function onChange(newbuttonPaddingBottom) {
          return setAttributes({
            buttonPaddingBottom: newbuttonPaddingBottom
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Left', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingLeft,
        onChange: function onChange(newbuttonPaddingLeft) {
          return setAttributes({
            buttonPaddingLeft: newbuttonPaddingLeft
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Border Type', 'wp-blog-post-layouts')),
        value: buttonBorderType,
        options: [{
          value: 'none',
          label: 'None'
        }, {
          value: 'solid',
          label: 'Solid'
        }, {
          value: 'dotted',
          label: 'Dotted'
        }, {
          value: 'dashed',
          label: 'Dashed'
        }],
        onChange: function onChange(newbuttonBorderType) {
          return setAttributes({
            buttonBorderType: newbuttonBorderType
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Border Weight', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 10,
        value: buttonBorderWeight,
        onChange: function onChange(newbuttonBorderWeight) {
          return setAttributes({
            buttonBorderWeight: newbuttonBorderWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBorderColor
      }, escapeHTML(__('Border Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBorderColor,
        onChange: function onChange(newbuttonBorderColor) {
          return setAttributes({
            buttonBorderColor: newbuttonBorderColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBorderHoverColor
      }, escapeHTML(__('Border Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBorderHoverColor,
        onChange: function onChange(newbuttonBorderHoverColor) {
          return setAttributes({
            buttonBorderHoverColor: newbuttonBorderHoverColor
          });
        }
      }))));
    }
  }]);

  return StyleInspector;
}(Component);



/***/ }),

/***/ "./src/list/layout-one/layout-one.js":
/*!*******************************************!*\
  !*** ./src/list/layout-one/layout-one.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * List block layout one(default) - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var decodeEntities = wp.htmlEntities.decodeEntities;

var ListOne = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ListOne, _Component);

  var _super = _createSuper(ListOne);

  function ListOne(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListOne);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListOne, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-left-wrap"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-right-wrap"
        }, function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('MMMM DD, Y'))), typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name cv-post-meta-item"
        }, escapeHTML(__('By:', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name)), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-tag"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name));
            }));
          }
        }(), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts')))))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        })))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return ListOne;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(ListOne));

/***/ }),

/***/ "./src/list/layout-three/layout-three.js":
/*!***********************************************!*\
  !*** ./src/list/layout-three/layout-three.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * List block layout three - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var Fragment = wp.element.Fragment;
var decodeEntities = wp.htmlEntities.decodeEntities;

var ListThree = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ListThree, _Component);

  var _super = _createSuper(ListThree);

  function ListThree(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListThree);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListThree, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var getPostAuthorImage = function getPostAuthorImage(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].avatar_urls['96'];
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;
        var author_image;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
          author_image = getPostAuthorImage(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-left-wrap"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })), dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('DD MMM'))), function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }())), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-right-wrap"
        }, function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, escapeHTML(__(',', 'wp-blog-post-layouts'))));
            }));
          }
        }(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-author-meta cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-author-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: author_image,
          alt: author_name
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name))), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts'))))))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return ListThree;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(ListThree));

/***/ }),

/***/ "./src/list/layout-two/layout-two.js":
/*!*******************************************!*\
  !*** ./src/list/layout-two/layout-two.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * List block layout two - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var decodeEntities = wp.htmlEntities.decodeEntities;

var ListTwo = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ListTwo, _Component);

  var _super = _createSuper(ListTwo);

  function ListTwo(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListTwo);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ListTwo, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-left-wrap"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-right-wrap"
        }, function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('MMMM DD, Y'))), typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name cv-post-meta-item"
        }, escapeHTML(__('By:', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name)), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-tag"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name));
            }));
          }
        }(), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts')))))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        })))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return ListTwo;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(ListTwo));

/***/ }),

/***/ "./src/masonry/block.js":
/*!******************************!*\
  !*** ./src/masonry/block.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inspector */ "./src/masonry/components/inspector.js");
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./src/masonry/components/edit.js");
/* harmony import */ var _assets_cv_block_icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/cv-block-icons/icons */ "./assets/cv-block-icons/icons.js");
/* harmony import */ var _block_base_block_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././block-base/block-base */ "./src/block-base/block-base.js");


/**
 * Register masnory post layout block. 
 */




var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var registerBlockType = wp.blocks.registerBlockType; // block attributes

var masonrylayoutAttributes = Object(_block_base_block_base__WEBPACK_IMPORTED_MODULE_4__["getCommonAttributes"])();
registerBlockType('wpblog-post-layouts/cv-masonry-blog-post-layout', {
  title: escapeHTML(__('CV Masonry Post Layout', 'wp-blog-post-layouts')),
  description: escapeHTML(__('Post collection with masonry layout', 'wp-blog-post-layouts')),
  icon: {
    background: '#fff',
    foreground: 'rgba(212,51,93,1)',
    src: _assets_cv_block_icons_icons__WEBPACK_IMPORTED_MODULE_3__["default"].Masonry
  },
  keywords: [escapeHTML(__('blog', 'wp-blog-post-layouts')), escapeHTML(__('masonry', 'wp-blog-post-layouts')), escapeHTML(__('post', 'wp-blog-post-layouts')), escapeHTML(__('layout', 'wp-blog-post-layouts'))],
  category: 'wpblog-post-layouts-blocks',
  attributes: masonrylayoutAttributes,
  supports: {
    align: ["wide", "full"]
  },
  example: {
    attributes: {
      'blockColumn': 'two',
      'postCount': 4,
      'dateOption': false,
      'authorOption': false,
      'categoryOption': false,
      'tagsOption': false,
      'commentOption': false,
      'contentOption': false,
      'buttonLabel': '',
      'postFormatIcon': false
    }
  },
  edit: function edit(props) {
    props.attributes.blockID = props.clientId;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_edit__WEBPACK_IMPORTED_MODULE_2__["default"], props)];
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/masonry/components/edit.js":
/*!****************************************!*\
  !*** ./src/masonry/components/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_one_layout_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-one/layout-one */ "./src/masonry/layout-one/layout-one.js");
/* harmony import */ var _layout_two_layout_two__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout-two/layout-two */ "./src/masonry/layout-two/layout-two.js");
/* harmony import */ var _layout_three_layout_three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout-three/layout-three */ "./src/masonry/layout-three/layout-three.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_style_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-style-tag */ "./node_modules/react-style-tag/es/index.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Block View wrapper
 */



var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;



var Edit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "enqueueGooglefonts",
    value: function enqueueGooglefonts() {
      var _this$props$attribute = this.props.attributes,
          typographyOption = _this$props$attribute.typographyOption,
          blockTitleFontFamily = _this$props$attribute.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute.blockTitleFontWeight,
          titleFontFamily = _this$props$attribute.titleFontFamily,
          titleFontWeight = _this$props$attribute.titleFontWeight,
          metaFontFamily = _this$props$attribute.metaFontFamily,
          metaFontWeight = _this$props$attribute.metaFontWeight,
          descFontFamily = _this$props$attribute.descFontFamily,
          descFontWeight = _this$props$attribute.descFontWeight,
          buttonFontFamily = _this$props$attribute.buttonFontFamily,
          buttonFontWeight = _this$props$attribute.buttonFontWeight;
      {
        typographyOption == false && blockTitleFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(blockTitleFontFamily, ":").concat(blockTitleFontWeight)]
          }
        });
        titleFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(titleFontFamily, ":").concat(titleFontWeight)]
          }
        });
        metaFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(metaFontFamily, ":").concat(metaFontWeight)]
          }
        });
        descFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(descFontFamily, ":").concat(descFontWeight)]
          }
        });
        buttonFontFamily && webfontloader__WEBPACK_IMPORTED_MODULE_9___default.a.load({
          google: {
            families: ["".concat(buttonFontFamily, ":").concat(buttonFontWeight)]
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.enqueueGooglefonts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.enqueueGooglefonts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$attribute2 = this.props.attributes,
          blockID = _this$props$attribute2.blockID,
          blockTitle = _this$props$attribute2.blockTitle,
          blockTitleLayout = _this$props$attribute2.blockTitleLayout,
          layoutOption = _this$props$attribute2.layoutOption,
          typographyOption = _this$props$attribute2.typographyOption,
          blockTitleAlign = _this$props$attribute2.blockTitleAlign,
          blockTitleFontFamily = _this$props$attribute2.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute2.blockTitleFontWeight,
          blockTitleFontSize = _this$props$attribute2.blockTitleFontSize,
          blockTitleFontStyle = _this$props$attribute2.blockTitleFontStyle,
          blockTitleTextTransform = _this$props$attribute2.blockTitleTextTransform,
          blockTitleTextDecoration = _this$props$attribute2.blockTitleTextDecoration,
          blockTitleColor = _this$props$attribute2.blockTitleColor,
          blockTitleLineHeight = _this$props$attribute2.blockTitleLineHeight,
          blockTitleBorderColor = _this$props$attribute2.blockTitleBorderColor,
          titleTextAlign = _this$props$attribute2.titleTextAlign,
          titleFontFamily = _this$props$attribute2.titleFontFamily,
          titleFontWeight = _this$props$attribute2.titleFontWeight,
          titleFontSize = _this$props$attribute2.titleFontSize,
          titleFontStyle = _this$props$attribute2.titleFontStyle,
          titleTextTransform = _this$props$attribute2.titleTextTransform,
          titleTextDecoration = _this$props$attribute2.titleTextDecoration,
          titleFontColor = _this$props$attribute2.titleFontColor,
          titleHoverColor = _this$props$attribute2.titleHoverColor,
          titlelineHeight = _this$props$attribute2.titlelineHeight,
          metaTextAlign = _this$props$attribute2.metaTextAlign,
          metaFontFamily = _this$props$attribute2.metaFontFamily,
          metaFontWeight = _this$props$attribute2.metaFontWeight,
          metaFontSize = _this$props$attribute2.metaFontSize,
          metaFontStyle = _this$props$attribute2.metaFontStyle,
          metaTextTransform = _this$props$attribute2.metaTextTransform,
          metaTextDecoration = _this$props$attribute2.metaTextDecoration,
          metaFontColor = _this$props$attribute2.metaFontColor,
          metaHoverColor = _this$props$attribute2.metaHoverColor,
          metalineHeight = _this$props$attribute2.metalineHeight,
          descTextAlign = _this$props$attribute2.descTextAlign,
          descFontFamily = _this$props$attribute2.descFontFamily,
          descFontWeight = _this$props$attribute2.descFontWeight,
          descFontSize = _this$props$attribute2.descFontSize,
          descFontStyle = _this$props$attribute2.descFontStyle,
          descTextTransform = _this$props$attribute2.descTextTransform,
          descTextDecoration = _this$props$attribute2.descTextDecoration,
          descFontColor = _this$props$attribute2.descFontColor,
          desclineHeight = _this$props$attribute2.desclineHeight,
          buttonTextAlign = _this$props$attribute2.buttonTextAlign,
          buttonFontFamily = _this$props$attribute2.buttonFontFamily,
          buttonFontSize = _this$props$attribute2.buttonFontSize,
          buttonFontWeight = _this$props$attribute2.buttonFontWeight,
          buttonTextTransform = _this$props$attribute2.buttonTextTransform,
          buttonFontColor = _this$props$attribute2.buttonFontColor,
          buttonHoverColor = _this$props$attribute2.buttonHoverColor,
          buttonBackgroundColor = _this$props$attribute2.buttonBackgroundColor,
          buttonBackgroundHoverColor = _this$props$attribute2.buttonBackgroundHoverColor,
          buttonPaddingTop = _this$props$attribute2.buttonPaddingTop,
          buttonPaddingRight = _this$props$attribute2.buttonPaddingRight,
          buttonPaddingBottom = _this$props$attribute2.buttonPaddingBottom,
          buttonPaddingLeft = _this$props$attribute2.buttonPaddingLeft,
          buttonBorderType = _this$props$attribute2.buttonBorderType,
          buttonBorderWeight = _this$props$attribute2.buttonBorderWeight,
          buttonBorderColor = _this$props$attribute2.buttonBorderColor,
          buttonBorderHoverColor = _this$props$attribute2.buttonBorderHoverColor;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_style_tag__WEBPACK_IMPORTED_MODULE_10__["Style"], {
        id: "".concat(blockID, "-block-title-style")
      }, "\n                        .block-".concat(blockID, " .cv-block-title{\n                            text-align: ").concat(blockTitleAlign, "\n                        }\n                    ")), typographyOption == false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_style_tag__WEBPACK_IMPORTED_MODULE_10__["Style"], {
        id: "".concat(blockID, "-block-style")
      }, "\n                        .block-".concat(blockID, " h2.cv-block-title{\n                            font-family: ").concat(blockTitleFontFamily, "\n                            font-weight: ").concat(blockTitleFontWeight, "\n                            font-size: ").concat(blockTitleFontSize, "px\n                            font-style: ").concat(blockTitleFontStyle, "\n                            text-transform: ").concat(blockTitleTextTransform, "\n                            text-decoration: ").concat(blockTitleTextDecoration, "\n                            color: ").concat(blockTitleColor, "\n                            line-height: ").concat(blockTitleLineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title span::before{\n                            background: ").concat(blockTitleBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title span::after{\n                            background: ").concat(blockTitleBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--four span{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--four span:after{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--five span:before{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            border-left: none;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-block-title.layout--five span:after{\n                            border-color: ").concat(blockTitleBorderColor, " !important;\n                            border-left: none;\n                            background: #ffffff !important;\n                        }\n\n                        .block-").concat(blockID, " .cv-post-title a{\n                            text-align: ").concat(titleTextAlign, "\n                            font-family: ").concat(titleFontFamily, "\n                            font-weight: ").concat(titleFontWeight, "\n                            font-size: ").concat(titleFontSize, "px\n                            font-style: ").concat(titleFontStyle, "\n                            text-transform: ").concat(titleTextTransform, "\n                            text-decoration: ").concat(titleTextDecoration, "\n                            color: ").concat(titleFontColor, "\n                            line-height: ").concat(titlelineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-title a:hover{\n                            color: ").concat(titleHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta a{\n                            text-align: ").concat(metaTextAlign, "\n                            font-family: ").concat(metaFontFamily, "\n                            font-weight: ").concat(metaFontWeight, "\n                            font-size: ").concat(metaFontSize, "px\n                            font-style: ").concat(metaFontStyle, "\n                            text-transform: ").concat(metaTextTransform, "\n                            text-decoration: ").concat(metaTextDecoration, "\n                            color: ").concat(metaFontColor, "\n                            line-height: ").concat(metalineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta > span{\n                            text-align: ").concat(metaTextAlign, "\n                            font-family: ").concat(metaFontFamily, "\n                            font-weight: ").concat(metaFontWeight, "\n                            font-size: ").concat(metaFontSize, "px\n                            font-style: ").concat(metaFontStyle, "\n                            text-transform: ").concat(metaTextTransform, "\n                            text-decoration: ").concat(metaTextDecoration, "\n                            color: ").concat(metaFontColor, "\n                            line-height: ").concat(metalineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta a:hover{\n                            color: ").concat(metaHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-meta > span:hover{\n                            color: ").concat(metaHoverColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-post-content p{\n                            text-align: ").concat(descTextAlign, "\n                            font-family: ").concat(descFontFamily, "\n                            font-weight: ").concat(descFontWeight, "\n                            font-size: ").concat(descFontSize, "px\n                            font-style: ").concat(descFontStyle, "\n                            text-transform: ").concat(descTextTransform, "\n                            text-decoration: ").concat(descTextDecoration, "\n                            color: ").concat(descFontColor, "\n                            line-height: ").concat(desclineHeight, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more a{\n                            font-family: ").concat(buttonFontFamily, "\n                            font-weight: ").concat(buttonFontWeight, "\n                            font-size: ").concat(buttonFontSize, "px\n                            text-transform: ").concat(buttonTextTransform, "\n                            color: ").concat(buttonFontColor, "\n                            background-color: ").concat(buttonBackgroundColor, "\n                            padding-top: ").concat(buttonPaddingTop, "px\n                            padding-right: ").concat(buttonPaddingRight, "px\n                            padding-bottom: ").concat(buttonPaddingBottom, "px\n                            padding-left: ").concat(buttonPaddingLeft, "px\n                            border-style: ").concat(buttonBorderType, "\n                            border-width: ").concat(buttonBorderWeight, "px\n                            border-color: ").concat(buttonBorderColor, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more{\n                            text-align: ").concat(buttonTextAlign, "\n                        }\n\n                        .block-").concat(blockID, " .cv-read-more a:hover{\n                            color: ").concat(buttonHoverColor, "\n                            background-color: ").concat(buttonBackgroundHoverColor, "\n                            border-color: ").concat(buttonBorderHoverColor, "\n                        }\n                    ")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        id: "cv-masonry-post-layout",
        className: "block-".concat(blockID, " cv-block cv-block-masonry--").concat(layoutOption, " cv-block-grid--").concat(layoutOption)
      }, function () {
        if (!!blockTitle) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
            className: "cv-block-title align--".concat(blockTitleAlign, " layout--").concat(blockTitleLayout)
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, blockTitle));
        }
      }(), function () {
        switch (layoutOption) {
          case 'layout-two':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_two_layout_two__WEBPACK_IMPORTED_MODULE_7__["default"], _this.props);

          case 'layout-three':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_three_layout_three__WEBPACK_IMPORTED_MODULE_8__["default"], _this.props);

          default:
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_layout_one_layout_one__WEBPACK_IMPORTED_MODULE_6__["default"], _this.props);
        }
      }()));
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./src/masonry/components/general-inspector.js":
/*!*****************************************************!*\
  !*** ./src/masonry/components/general-inspector.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * General Tab Tnspector controls wrapper controls.
 * 
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl;
var withSelect = wp.data.withSelect;

var GeneralInspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(GeneralInspector, _Component);

  var _super = _createSuper(GeneralInspector);

  function GeneralInspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GeneralInspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GeneralInspector, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          blockTitle = _this$props$attribute.blockTitle,
          blockTitleLayout = _this$props$attribute.blockTitleLayout,
          blockTitleAlign = _this$props$attribute.blockTitleAlign,
          posttype = _this$props$attribute.posttype,
          postCategory = _this$props$attribute.postCategory,
          postCount = _this$props$attribute.postCount,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          buttonLabel = _this$props$attribute.buttonLabel,
          orderBy = _this$props$attribute.orderBy,
          order = _this$props$attribute.order,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption;
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          postTypesList = _this$props.postTypesList,
          categoriesList = _this$props.categoriesList;
      var hascategoriesList = Array.isArray(categoriesList) && categoriesList.length;
      var allCategories = [];

      if (hascategoriesList) {
        allCategories.push({
          label: escapeHTML(__('All', 'wp-blog-post-layouts')),
          value: ''
        });
        categoriesList.forEach(function (category) {
          allCategories.push({
            label: category.name + ' (' + category.count + ')',
            value: category.id
          });
        });
      } else {
        allCategories.push({
          label: escapeHTML(__('All', 'wp-blog-post-layouts')),
          value: ''
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Basic Settings', 'wp-blog-post-layouts'))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Block Title', 'wp-blog-post-layouts')),
        value: blockTitle,
        placeholder: escapeHTML(__('Add title here..', 'wp-blog-post-layouts')),
        onChange: function onChange(newblockTitle) {
          return setAttributes({
            blockTitle: newblockTitle
          });
        }
      }), blockTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Block Title Layout', 'wp-blog-post-layouts')),
        value: blockTitleLayout,
        options: [{
          value: 'one',
          label: 'One'
        }, {
          value: 'two',
          label: 'Two'
        }, {
          value: 'three',
          label: 'Three'
        }],
        onChange: function onChange(newblockTitleLayout) {
          return setAttributes({
            blockTitleLayout: newblockTitleLayout
          });
        }
      }), blockTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: blockTitleAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleAlign) {
          return setAttributes({
            blockTitleAlign: newblockTitleAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Category', 'wp-blog-post-layouts')),
        value: postCategory,
        options: allCategories,
        onChange: function onChange(newpostCategory) {
          return setAttributes({
            postCategory: newpostCategory
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Post Count', 'wp-blog-post-layouts')),
        value: postCount,
        onChange: function onChange(newpostCount) {
          return setAttributes({
            postCount: newpostCount
          });
        },
        min: 1,
        max: 200
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Content Type', 'wp-blog-post-layouts')),
        value: contentType,
        options: [{
          value: 'excerpt',
          label: 'Excerpt'
        }, {
          value: 'content',
          label: 'Content'
        }],
        onChange: function onChange(newcontentType) {
          return setAttributes({
            contentType: newcontentType
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Content Length', 'wp-blog-post-layouts')),
        value: wordCount,
        onChange: function onChange(newwordCount) {
          return setAttributes({
            wordCount: newwordCount
          });
        },
        min: 1,
        max: 500
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Button Label', 'wp-blog-post-layouts')),
        value: buttonLabel,
        placeholder: escapeHTML(__('Add label here..', 'wp-blog-post-layouts')),
        onChange: function onChange(newbuttonLabel) {
          return setAttributes({
            buttonLabel: newbuttonLabel
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Query Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Order By', 'wp-blog-post-layouts')),
        value: orderBy,
        options: [{
          value: 'date',
          label: 'Date'
        }, {
          value: 'title',
          label: 'Title'
        }],
        onChange: function onChange(neworderBy) {
          return setAttributes({
            orderBy: neworderBy
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Order', 'wp-blog-post-layouts')),
        value: order,
        options: [{
          value: 'asc',
          label: 'Ascending'
        }, {
          value: 'desc',
          label: 'Descending'
        }],
        onChange: function onChange(neworder) {
          return setAttributes({
            order: neworder
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show date', 'wp-blog-post-layouts')),
        checked: dateOption,
        onChange: function onChange(newdateOption) {
          return setAttributes({
            dateOption: newdateOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show author', 'wp-blog-post-layouts')),
        checked: authorOption,
        onChange: function onChange(newauthorOption) {
          return setAttributes({
            authorOption: newauthorOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show categories', 'wp-blog-post-layouts')),
        checked: categoryOption,
        onChange: function onChange(newcategoryOption) {
          return setAttributes({
            categoryOption: newcategoryOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show tags', 'wp-blog-post-layouts')),
        checked: tagsOption,
        onChange: function onChange(newtagsOption) {
          return setAttributes({
            tagsOption: newtagsOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show comments number', 'wp-blog-post-layouts')),
        checked: commentOption,
        onChange: function onChange(newcommentOption) {
          return setAttributes({
            commentOption: newcommentOption
          });
        }
      })));
    }
  }]);

  return GeneralInspector;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var posttype = props.attributes.posttype;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getPostTypes = _select.getPostTypes;

  var allpostTypesList = getPostTypes();
  var filterpostTypesList = [];
  var taxonomnyName;

  if (allpostTypesList) {
    allpostTypesList.forEach(function (allpostType) {
      if (allpostType.slug != 'page' && allpostType.slug != 'wp_block' && allpostType.slug != 'attachment') {
        filterpostTypesList.push({
          label: allpostType.name,
          value: allpostType.slug
        });

        if (allpostType.slug == posttype) {
          taxonomnyName = allpostType.taxonomies[0];
        }
      }
    });
  }

  var taxonomyQuery = {
    hide_empty: true,
    per_page: 100
  };
  return {
    postTypesList: filterpostTypesList,
    categoriesList: getEntityRecords('taxonomy', taxonomnyName, taxonomyQuery)
  };
})(GeneralInspector));

/***/ }),

/***/ "./src/masonry/components/inspector.js":
/*!*********************************************!*\
  !*** ./src/masonry/components/inspector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _general_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-inspector */ "./src/masonry/components/general-inspector.js");
/* harmony import */ var _style_inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style-inspector */ "./src/masonry/components/style-inspector.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Inspector controls wrapper controls.
 * 
 */


var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var InspectorControls = wp.blockEditor.InspectorControls;
var TabPanel = wp.components.TabPanel;

var Inspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
        className: "cv-tabs-panel",
        activeClass: "active-tab",
        tabs: [{
          name: "generalInspector",
          title: escapeHTML(__("General", "blog-post-layouts")),
          className: "tab-panel"
        }, {
          name: "styleInspector",
          title: escapeHTML(__("Style", "blog-post-layouts")),
          className: "tab-panel"
        }]
      }, function (tab) {
        if (tab.name == "generalInspector") {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_general_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], _this.props);
        } else if (tab.name == "styleInspector") {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_style_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], _this.props);
        }
      }));
    }
  }]);

  return Inspector;
}(Component);



/***/ }),

/***/ "./src/masonry/components/style-inspector.js":
/*!***************************************************!*\
  !*** ./src/masonry/components/style-inspector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleInspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../block-base/googlefonts.json */ "./src/block-base/googlefonts.json");
var _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../block-base/googlefonts.json */ "./src/block-base/googlefonts.json", 1);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Style Tab Tnspector controls wrapper controls.
 * 
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    ColorPalette = _wp$components.ColorPalette,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button;


var StyleInspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StyleInspector, _Component);

  var _super = _createSuper(StyleInspector);

  function StyleInspector(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StyleInspector);

    _this = _super.apply(this, arguments);
    _this.state = {
      google_fonts: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StyleInspector, [{
    key: "get_google_fonts",
    value: function get_google_fonts() {
      var GoogleFontsLists = _block_base_googlefonts_json__WEBPACK_IMPORTED_MODULE_6__;
      this.setState({
        google_fonts: GoogleFontsLists
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.get_google_fonts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          layoutOption = _this$props$attribute.layoutOption,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin,
          typographyOption = _this$props$attribute.typographyOption,
          blockTitleFontFamily = _this$props$attribute.blockTitleFontFamily,
          blockTitleFontWeight = _this$props$attribute.blockTitleFontWeight,
          blockTitleFontSize = _this$props$attribute.blockTitleFontSize,
          blockTitleFontStyle = _this$props$attribute.blockTitleFontStyle,
          blockTitleTextTransform = _this$props$attribute.blockTitleTextTransform,
          blockTitleTextDecoration = _this$props$attribute.blockTitleTextDecoration,
          blockTitleColor = _this$props$attribute.blockTitleColor,
          blockTitleLineHeight = _this$props$attribute.blockTitleLineHeight,
          blockTitleBorderColor = _this$props$attribute.blockTitleBorderColor,
          titleTextAlign = _this$props$attribute.titleTextAlign,
          titleFontFamily = _this$props$attribute.titleFontFamily,
          titleFontSize = _this$props$attribute.titleFontSize,
          titleFontStyle = _this$props$attribute.titleFontStyle,
          titleTextTransform = _this$props$attribute.titleTextTransform,
          titleTextDecoration = _this$props$attribute.titleTextDecoration,
          titleFontColor = _this$props$attribute.titleFontColor,
          titleHoverColor = _this$props$attribute.titleHoverColor,
          titlelineHeight = _this$props$attribute.titlelineHeight,
          metaTextAlign = _this$props$attribute.metaTextAlign,
          metaFontFamily = _this$props$attribute.metaFontFamily,
          metaFontSize = _this$props$attribute.metaFontSize,
          metaFontStyle = _this$props$attribute.metaFontStyle,
          metaTextTransform = _this$props$attribute.metaTextTransform,
          metaTextDecoration = _this$props$attribute.metaTextDecoration,
          metaFontColor = _this$props$attribute.metaFontColor,
          metaHoverColor = _this$props$attribute.metaHoverColor,
          metalineHeight = _this$props$attribute.metalineHeight,
          descTextAlign = _this$props$attribute.descTextAlign,
          descFontFamily = _this$props$attribute.descFontFamily,
          descFontSize = _this$props$attribute.descFontSize,
          descFontStyle = _this$props$attribute.descFontStyle,
          descTextTransform = _this$props$attribute.descTextTransform,
          descTextDecoration = _this$props$attribute.descTextDecoration,
          descFontColor = _this$props$attribute.descFontColor,
          desclineHeight = _this$props$attribute.desclineHeight,
          buttonTextAlign = _this$props$attribute.buttonTextAlign,
          buttonFontFamily = _this$props$attribute.buttonFontFamily,
          buttonFontSize = _this$props$attribute.buttonFontSize,
          buttonTextTransform = _this$props$attribute.buttonTextTransform,
          buttonFontColor = _this$props$attribute.buttonFontColor,
          buttonHoverColor = _this$props$attribute.buttonHoverColor,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonBackgroundHoverColor = _this$props$attribute.buttonBackgroundHoverColor,
          buttonPaddingTop = _this$props$attribute.buttonPaddingTop,
          buttonPaddingRight = _this$props$attribute.buttonPaddingRight,
          buttonPaddingBottom = _this$props$attribute.buttonPaddingBottom,
          buttonPaddingLeft = _this$props$attribute.buttonPaddingLeft,
          buttonBorderType = _this$props$attribute.buttonBorderType,
          buttonBorderWeight = _this$props$attribute.buttonBorderWeight,
          buttonBorderColor = _this$props$attribute.buttonBorderColor,
          buttonBorderHoverColor = _this$props$attribute.buttonBorderHoverColor;
      var _this$props$attribute2 = this.props.attributes,
          titleFontWeight = _this$props$attribute2.titleFontWeight,
          metaFontWeight = _this$props$attribute2.metaFontWeight,
          descFontWeight = _this$props$attribute2.descFontWeight,
          buttonFontWeight = _this$props$attribute2.buttonFontWeight;
      var setAttributes = this.props.setAttributes;
      var googleFontsOptions = this.state.google_fonts.map(function (google_font, fontindex) {
        return {
          value: google_font.family,
          label: google_font.family
        };
      });
      var google_fonts = this.state.google_fonts;

      function setfontWeight(FontFamily, google_fonts) {
        var i;
        var googleFontWeight;

        for (i = 0; i < google_fonts.length; i++) {
          if (google_fonts[i].family === FontFamily) {
            var variants = google_fonts[i].variants;
            googleFontWeight = variants.map(function (variant) {
              var converted_variant = convert_google_font_variant(variant);
              return {
                value: converted_variant,
                label: converted_variant
              };
            });
            break;
          }
        }

        return googleFontWeight;
      }

      function convert_google_font_variant(variant) {
        switch (variant) {
          case '100':
            return escapeHTML(__('100', 'wp-blog-post-layouts'));
            break;

          case '100italic':
            return escapeHTML(__('100 Italic', 'wp-blog-post-layouts'));
            break;

          case '200':
            return escapeHTML(__('200', 'wp-blog-post-layouts'));
            break;

          case '200italic':
            return escapeHTML(__('200 Italic', 'wp-blog-post-layouts'));
            break;

          case '300':
            return escapeHTML(__('300', 'wp-blog-post-layouts'));
            break;

          case '300italic':
            return escapeHTML(__('300 Italic', 'wp-blog-post-layouts'));
            break;

          case 'regular':
            return escapeHTML(__('400', 'wp-blog-post-layouts'));
            break;

          case '400':
            return escapeHTML(__('400', 'wp-blog-post-layouts'));
            break;

          case '400italic':
            return escapeHTML(__('400 Italic', 'wp-blog-post-layouts'));
            break;

          case 'italic':
            return escapeHTML(__('400 Italic', 'wp-blog-post-layouts'));
            break;

          case '500':
            return escapeHTML(__('500', 'wp-blog-post-layouts'));
            break;

          case '500italic':
            return escapeHTML(__('500 Italic', 'wp-blog-post-layouts'));
            break;

          case '600':
            return escapeHTML(__('600', 'wp-blog-post-layouts'));
            break;

          case '600italic':
            return escapeHTML(__('600 Italic', 'wp-blog-post-layouts'));
            break;

          case '700':
            return escapeHTML(__('700', 'wp-blog-post-layouts'));
            break;

          case '700italic':
            return escapeHTML(__('700 Italic', 'wp-blog-post-layouts'));
            break;

          case '800':
            return escapeHTML(__('800', 'wp-blog-post-layouts'));
            break;

          case '800italic':
            return escapeHTML(__('800 Italic', 'wp-blog-post-layouts'));
            break;

          case '900':
            return escapeHTML(__('900', 'wp-blog-post-layouts'));
            break;

          case '900italic':
            return escapeHTML(__('900 Italic', 'wp-blog-post-layouts'));
            break;

          default:
            break;
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Layout Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wpblog-layout-button-group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Masonry Layout Variations', 'blog-post-layouts')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-one' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-one'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.gridLayoutOne
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-two' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-two'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.gridLayoutTwo
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        className: "".concat(layoutOption == 'layout-three' ? "isActive" : ""),
        onClick: function onClick(e) {
          return setAttributes({
            layoutOption: 'layout-three'
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: BlocksBuildObject.gridLayoutThree
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show post format icon', 'wp-blog-post-layouts')),
        checked: postFormatIcon,
        onChange: function onChange(newpostFormatIcon) {
          return setAttributes({
            postFormatIcon: newpostFormatIcon
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Show read more button icon', 'wp-blog-post-layouts')),
        checked: postButtonIcon,
        onChange: function onChange(newpostButtonIcon) {
          return setAttributes({
            postButtonIcon: newpostButtonIcon
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Block Column', 'wp-blog-post-layouts')),
        value: blockColumn,
        options: [{
          value: 'one',
          label: escapeHTML(__('One', 'wp-blog-post-layouts'))
        }, {
          value: 'two',
          label: escapeHTML(__('Two', 'wp-blog-post-layouts'))
        }, {
          value: 'three',
          label: escapeHTML(__('Three', 'wp-blog-post-layouts'))
        }, {
          value: 'four',
          label: escapeHTML(__('Four', 'wp-blog-post-layouts'))
        }, {
          value: 'five',
          label: escapeHTML(__('Five', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockColumn) {
          return setAttributes({
            blockColumn: newblockColumn
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Allow margin between each post', 'wp-blog-post-layouts')),
        checked: postMargin,
        onChange: function onChange(newpostMargin) {
          return setAttributes({
            postMargin: newpostMargin
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: escapeHTML(__('Typography Settings', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: escapeHTML(__('Inherit default from plugin typography', 'wp-blog-post-layouts')),
        checked: typographyOption,
        onChange: function onChange(newtypographyOption) {
          return setAttributes({
            typographyOption: newtypographyOption
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Block Title', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: blockTitleFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newblockTitleFontFamily) {
          return setAttributes({
            blockTitleFontFamily: newblockTitleFontFamily,
            blockTitleFontWeight: setfontWeight(newblockTitleFontFamily, google_fonts)[0].value
          });
        }
      }), blockTitleFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: blockTitleFontWeight,
        options: setfontWeight(blockTitleFontFamily, google_fonts),
        onChange: function onChange(newblockTitleFontWeight) {
          return setAttributes({
            blockTitleFontWeight: newblockTitleFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: blockTitleFontSize,
        onChange: function onChange(newblockTitleFontSize) {
          return setAttributes({
            blockTitleFontSize: newblockTitleFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: blockTitleFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleFontStyle) {
          return setAttributes({
            blockTitleFontStyle: newblockTitleFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: blockTitleTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleTextTransform) {
          return setAttributes({
            blockTitleTextTransform: newblockTitleTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: blockTitleTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newblockTitleTextDecoration) {
          return setAttributes({
            blockTitleTextDecoration: newblockTitleTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-block-title-color-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: blockTitleColor,
        onChange: function onChange(newblockTitleColor) {
          return setAttributes({
            blockTitleColor: newblockTitleColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Border Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: blockTitleBorderColor,
        onChange: function onChange(newblockTitleBorderColor) {
          return setAttributes({
            blockTitleBorderColor: newblockTitleBorderColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: blockTitleLineHeight,
        onChange: function onChange(newblockTitleLineHeight) {
          return setAttributes({
            blockTitleLineHeight: newblockTitleLineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Title', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: titleTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextAlign) {
          return setAttributes({
            titleTextAlign: newtitleTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: titleFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newtitleFontFamily) {
          return setAttributes({
            titleFontFamily: newtitleFontFamily,
            titleFontWeight: setfontWeight(newtitleFontFamily, google_fonts)[0].value
          });
        }
      }), titleFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: titleFontWeight,
        options: setfontWeight(titleFontFamily, google_fonts),
        onChange: function onChange(newtitleFontWeight) {
          return setAttributes({
            titleFontWeight: newtitleFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: titleFontSize,
        onChange: function onChange(newtitleFontSize) {
          return setAttributes({
            titleFontSize: newtitleFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: titleFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleFontStyle) {
          return setAttributes({
            titleFontStyle: newtitleFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: titleTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextTransform) {
          return setAttributes({
            titleTextTransform: newtitleTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: titleTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newtitleTextDecoration) {
          return setAttributes({
            titleTextDecoration: newtitleTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-title-color-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: titleFontColor,
        onChange: function onChange(newtitleFontColor) {
          return setAttributes({
            titleFontColor: newtitleFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: titleHoverColor,
        onChange: function onChange(newtitleHoverColor) {
          return setAttributes({
            titleHoverColor: newtitleHoverColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: titlelineHeight,
        onChange: function onChange(newtitlelineHeight) {
          return setAttributes({
            titlelineHeight: newtitlelineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Meta', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: metaTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextAlign) {
          return setAttributes({
            metaTextAlign: newmetaTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: metaFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newmetaFontFamily) {
          return setAttributes({
            metaFontFamily: newmetaFontFamily,
            metaFontWeight: setfontWeight(newmetaFontFamily, google_fonts)[0].value
          });
        }
      }), metaFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: metaFontWeight,
        options: setfontWeight(metaFontFamily, google_fonts),
        onChange: function onChange(newmetaFontWeight) {
          return setAttributes({
            metaFontWeight: newmetaFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: metaFontSize,
        onChange: function onChange(newmetaFontSize) {
          return setAttributes({
            metaFontSize: newmetaFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: metaFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaFontStyle) {
          return setAttributes({
            metaFontStyle: newmetaFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: metaTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextTransform) {
          return setAttributes({
            metaTextTransform: newmetaTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: metaTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newmetaTextDecoration) {
          return setAttributes({
            metaTextDecoration: newmetaTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-meta-color"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: metaFontColor,
        onChange: function onChange(newmetaFontColor) {
          return setAttributes({
            metaFontColor: newmetaFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, escapeHTML(__('Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: metaHoverColor,
        onChange: function onChange(newmetaHoverColor) {
          return setAttributes({
            metaHoverColor: newmetaHoverColor
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: metalineHeight,
        onChange: function onChange(newmetalineHeight) {
          return setAttributes({
            metalineHeight: newmetalineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Content/Excerpt', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: descTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextAlign) {
          return setAttributes({
            descTextAlign: newdescTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: descFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newdescFontFamily) {
          return setAttributes({
            descFontFamily: newdescFontFamily,
            descFontWeight: setfontWeight(newdescFontFamily, google_fonts)[0].value
          });
        }
      }), descFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: descFontWeight,
        options: setfontWeight(descFontFamily, google_fonts),
        onChange: function onChange(newdescFontWeight) {
          return setAttributes({
            descFontWeight: newdescFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: descFontSize,
        onChange: function onChange(newdescFontSize) {
          return setAttributes({
            descFontSize: newdescFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Style', 'wp-blog-post-layouts')),
        value: descFontStyle,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'normal',
          label: escapeHTML(__('Normal', 'wp-blog-post-layouts'))
        }, {
          value: 'italic',
          label: escapeHTML(__('Italic', 'wp-blog-post-layouts'))
        }, {
          value: 'oblique',
          label: escapeHTML(__('Oblique', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescFontStyle) {
          return setAttributes({
            descFontStyle: newdescFontStyle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: descTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextTransform) {
          return setAttributes({
            descTextTransform: newdescTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Decoration', 'wp-blog-post-layouts')),
        value: descTextDecoration,
        options: [{
          value: 'none',
          label: escapeHTML(__('None', 'wp-blog-post-layouts'))
        }, {
          value: 'underline',
          label: escapeHTML(__('Underline', 'wp-blog-post-layouts'))
        }, {
          value: 'line-through',
          label: escapeHTML(__('Line-through', 'wp-blog-post-layouts'))
        }, {
          value: 'overline',
          label: escapeHTML(__('Overline', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newdescTextDecoration) {
          return setAttributes({
            descTextDecoration: newdescTextDecoration
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: descFontColor,
        onChange: function onChange(newdescFontColor) {
          return setAttributes({
            descFontColor: newdescFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Line Height', 'wp-blog-post-layouts')),
        value: desclineHeight,
        onChange: function onChange(newdesclineHeight) {
          return setAttributes({
            desclineHeight: newdesclineHeight
          });
        },
        step: 0.1,
        min: 0.1,
        max: 10,
        allowReset: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        className: "cv-editor-component-sub-panel_body",
        title: escapeHTML(__('Button', 'wp-blog-post-layouts')),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Align', 'wp-blog-post-layouts')),
        value: buttonTextAlign,
        options: [{
          value: 'left',
          label: escapeHTML(__('Left', 'wp-blog-post-layouts'))
        }, {
          value: 'center',
          label: escapeHTML(__('Center', 'wp-blog-post-layouts'))
        }, {
          value: 'right',
          label: escapeHTML(__('Right', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newbuttonTextAlign) {
          return setAttributes({
            buttonTextAlign: newbuttonTextAlign
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Family', 'wp-blog-post-layouts')),
        value: buttonFontFamily,
        options: googleFontsOptions,
        onChange: function onChange(newbuttonFontFamily) {
          return setAttributes({
            buttonFontFamily: newbuttonFontFamily,
            buttonFontWeight: setfontWeight(newbuttonFontFamily, google_fonts)[0].value
          });
        }
      }), buttonFontFamily && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Font Weight', 'wp-blog-post-layouts')),
        value: buttonFontWeight,
        options: setfontWeight(buttonFontFamily, google_fonts),
        onChange: function onChange(newbuttonFontWeight) {
          return setAttributes({
            buttonFontWeight: newbuttonFontWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: escapeHTML(__('Font Size', 'wp-blog-post-layouts')),
        value: buttonFontSize,
        onChange: function onChange(newbuttonFontSize) {
          return setAttributes({
            buttonFontSize: newbuttonFontSize
          });
        },
        min: 1,
        max: 200,
        allowReset: true,
        initialPosition: 0
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Text Transform', 'wp-blog-post-layouts')),
        value: buttonTextTransform,
        options: [{
          value: '',
          label: escapeHTML(__('Default', 'wp-blog-post-layouts'))
        }, {
          value: 'uppercase',
          label: escapeHTML(__('Uppercase', 'wp-blog-post-layouts'))
        }, {
          value: 'lowercase',
          label: escapeHTML(__('Lowercase', 'wp-blog-post-layouts'))
        }, {
          value: 'capitalize',
          label: escapeHTML(__('Capitalize', 'wp-blog-post-layouts'))
        }],
        onChange: function onChange(newbuttonTextTransform) {
          return setAttributes({
            buttonTextTransform: newbuttonTextTransform
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonFontColor
      }, escapeHTML(__('Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonFontColor,
        onChange: function onChange(newbuttonFontColor) {
          return setAttributes({
            buttonFontColor: newbuttonFontColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonHoverColor
      }, escapeHTML(__('Hover Font Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonHoverColor,
        onChange: function onChange(newbuttonHoverColor) {
          return setAttributes({
            buttonHoverColor: newbuttonHoverColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBackgroundColor
      }, escapeHTML(__('Background Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBackgroundColor,
        onChange: function onChange(newbuttonBackgroundColor) {
          return setAttributes({
            buttonBackgroundColor: newbuttonBackgroundColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBackgroundHoverColor
      }, escapeHTML(__('Background Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBackgroundHoverColor,
        onChange: function onChange(newbuttonBackgroundHoverColor) {
          return setAttributes({
            buttonBackgroundHoverColor: newbuttonBackgroundHoverColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "cv-padding-control-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: "button-padding"
      }, escapeHTML(__('Padding', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Top', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingTop,
        onChange: function onChange(newbuttonPaddingTop) {
          return setAttributes({
            buttonPaddingTop: newbuttonPaddingTop
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Right', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingRight,
        onChange: function onChange(newbuttonPaddingRight) {
          return setAttributes({
            buttonPaddingRight: newbuttonPaddingRight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Bottom', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingBottom,
        onChange: function onChange(newbuttonPaddingBottom) {
          return setAttributes({
            buttonPaddingBottom: newbuttonPaddingBottom
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Left', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 100,
        value: buttonPaddingLeft,
        onChange: function onChange(newbuttonPaddingLeft) {
          return setAttributes({
            buttonPaddingLeft: newbuttonPaddingLeft
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: escapeHTML(__('Border Type', 'wp-blog-post-layouts')),
        value: buttonBorderType,
        options: [{
          value: 'none',
          label: 'None'
        }, {
          value: 'solid',
          label: 'Solid'
        }, {
          value: 'dotted',
          label: 'Dotted'
        }, {
          value: 'dashed',
          label: 'Dashed'
        }],
        onChange: function onChange(newbuttonBorderType) {
          return setAttributes({
            buttonBorderType: newbuttonBorderType
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: escapeHTML(__('Border Weight', 'wp-blog-post-layouts')),
        type: "number",
        min: 0,
        max: 10,
        value: buttonBorderWeight,
        onChange: function onChange(newbuttonBorderWeight) {
          return setAttributes({
            buttonBorderWeight: newbuttonBorderWeight
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBorderColor
      }, escapeHTML(__('Border Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBorderColor,
        onChange: function onChange(newbuttonBorderColor) {
          return setAttributes({
            buttonBorderColor: newbuttonBorderColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", {
        for: buttonBorderHoverColor
      }, escapeHTML(__('Border Hover Color', 'wp-blog-post-layouts'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        value: buttonBorderHoverColor,
        onChange: function onChange(newbuttonBorderHoverColor) {
          return setAttributes({
            buttonBorderHoverColor: newbuttonBorderHoverColor
          });
        }
      }))));
    }
  }]);

  return StyleInspector;
}(Component);



/***/ }),

/***/ "./src/masonry/layout-one/layout-one.js":
/*!**********************************************!*\
  !*** ./src/masonry/layout-one/layout-one.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Masonry block layout one(default) - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var decodeEntities = wp.htmlEntities.decodeEntities;


var MasonryOne = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(MasonryOne, _Component);

  var _super = _createSuper(MasonryOne);

  function MasonryOne(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MasonryOne);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MasonryOne, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        return escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(decodeEntities(post.title.rendered.trim())))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('MMMM DD, Y'))), typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name cv-post-meta-item"
        }, escapeHTML(__('By:', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name)), function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-cats-wrap cv-post-meta-item"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }(), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-tag"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name));
            }));
          }
        }(), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts')))))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return MasonryOne;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(MasonryOne));

/***/ }),

/***/ "./src/masonry/layout-three/layout-three.js":
/*!**************************************************!*\
  !*** ./src/masonry/layout-three/layout-three.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Masonry block layout three - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var Fragment = wp.element.Fragment;
var decodeEntities = wp.htmlEntities.decodeEntities;


var MasonryOne = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(MasonryOne, _Component);

  var _super = _createSuper(MasonryOne);

  function MasonryOne(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MasonryOne);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MasonryOne, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var getPostAuthorImage = function getPostAuthorImage(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].avatar_urls['96'];
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;
        var author_image;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
          author_image = getPostAuthorImage(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })), dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-date"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('DD MMM')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-cat-tag-wrap cv-clearfix"
        }, function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }(), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, escapeHTML(__(',', 'wp-blog-post-layouts')), " "));
            }));
          }
        }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-author-meta cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-author-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: author_image,
          alt: author_name
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name"
        }, escapeHTML(__('By ', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name))), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts')))))), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return MasonryOne;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(MasonryOne));

/***/ }),

/***/ "./src/masonry/layout-two/layout-two.js":
/*!**********************************************!*\
  !*** ./src/masonry/layout-two/layout-two.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Masonry block layout two - editor preview
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var escapeHTML = wp.escapeHtml.escapeHTML;
var withSelect = wp.data.withSelect;
var Fragment = wp.element.Fragment;

var decodeEntities = wp.htmlEntities.decodeEntities;

var MasonryTwo = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(MasonryTwo, _Component);

  var _super = _createSuper(MasonryTwo);

  function MasonryTwo(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MasonryTwo);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MasonryTwo, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          contentType = _this$props$attribute.contentType,
          wordCount = _this$props$attribute.wordCount,
          dateOption = _this$props$attribute.dateOption,
          authorOption = _this$props$attribute.authorOption,
          categoryOption = _this$props$attribute.categoryOption,
          tagsOption = _this$props$attribute.tagsOption,
          commentOption = _this$props$attribute.commentOption,
          buttonLabel = _this$props$attribute.buttonLabel,
          postFormatIcon = _this$props$attribute.postFormatIcon,
          postButtonIcon = _this$props$attribute.postButtonIcon,
          blockColumn = _this$props$attribute.blockColumn,
          postMargin = _this$props$attribute.postMargin;
      var _this$props = this.props,
          posts = _this$props.posts,
          authors = _this$props.authors;

      if (!posts) {
        escapeHTML(__('Loading posts', 'wp-blog-post-layouts'));
      }

      var hasPosts = Array.isArray(posts) && posts.length;

      if (!hasPosts) {
        return escapeHTML(__('No posts found', 'wp-blog-post-layouts'));
      }

      var getPostAuthorName = function getPostAuthorName(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].name;
          }
        }
      };

      var getPostAuthorUrl = function getPostAuthorUrl(author_id) {
        for (var author in authors) {
          if (authors[author].id === author_id) {
            return authors[author].link;
          }
        }
      };

      var content = posts.map(function (post, index) {
        var image_url = post.blog_post_layout_featured_media_urls.full['0'];

        if (typeof image_url === 'undefined') {
          image_url = BlocksBuildObject.defaultImage;
        }

        var author_name;
        var author_url;

        if (typeof post.author !== 'undefined') {
          author_name = getPostAuthorName(post.author);
          author_url = getPostAuthorUrl(post.author);
        }

        var getcategoryids = post.categories;
        var getcategories;

        if (typeof post.categories !== 'undefined' && post.categories != null) {
          getcategories = post.categories_names;
        }

        var gettagids = post.tags;
        var gettags;

        if (typeof post.tags !== 'undefined') {
          gettags = post.tags_names;
        }

        var getformat;

        if (typeof post.tags !== 'undefined') {
          getformat = post.format;
        }

        if (postFormatIcon) {
          getformat += ' cv-icon';
        }

        var getmetaIcon = " cv-meta-icon-show";
        var hascategories = Array.isArray(getcategoryids) && getcategoryids.length && categoryOption;
        var hastags = Array.isArray(gettagids) && gettagids.length && tagsOption;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("article", {
          id: "post-".concat(post.id),
          class: "cv-post post-format--".concat(getformat)
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-thumb"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: image_url,
          alt: decodeEntities(post.title.rendered.trim())
        })), function () {
          if (hascategories) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-cats-wrap"
            }, getcategoryids.map(function (getcategoryid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
                class: "cv-post-cat"
              }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: getcategories[getcategoryid].link
              }, getcategories[getcategoryid].name));
            }));
          }
        }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-meta".concat(getmetaIcon)
        }, dateOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-date cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link)
        }, moment(post.date_gmt).local().format('MMMM DD, Y'))), typeof post.comments_number !== 'undefined' && commentOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-comments-wrap cv-post-meta-item"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "".concat(post.link, "/#comments")
        }, post.comments_number, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-comment-txt"
        }, escapeHTML(__('Comments', 'wp-blog-post-layouts'))))), typeof post.author !== 'undefined' && authorOption && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
          class: "cv-post-author-name cv-post-meta-item"
        }, escapeHTML(__('By:', 'wp-blog-post-layouts')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: author_url
        }, author_name)), function () {
          if (hastags) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              class: "cv-post-tags-wrap cv-post-meta-item"
            }, gettagids.map(function (gettagid) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: gettags[gettagid].link
              }, gettags[gettagid].name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, escapeHTML(__(',', 'wp-blog-post-layouts'))));
            }));
          }
        }()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          class: "cv-post-title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link,
          target: "_self"
        }, decodeEntities(post.title.rendered.trim()))), typeof post[contentType] !== 'undefined' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-post-content",
          dangerouslySetInnerHTML: {
            __html: post[contentType].rendered.trim().split(' ').slice(0, wordCount).join(' ')
          }
        }), buttonLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          class: "cv-read-more"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: post.link
        }, buttonLabel, postButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", {
          class: "fas fa-arrow-right"
        }))));
      });
      var postClass;

      if (postMargin) {
        postClass = "cv-post--imagemargin column--".concat(blockColumn);
      } else {
        postClass = "cv-post-no--imagemargin column--".concat(blockColumn);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_masonry_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "cv-post-wrapper ".concat(postClass)
      }, content);
    }
  }]);

  return MasonryTwo;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      postCount = _props$attributes.postCount,
      posttype = _props$attributes.posttype,
      postCategory = _props$attributes.postCategory,
      orderBy = _props$attributes.orderBy,
      order = _props$attributes.order;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getAuthors = _select.getAuthors,
      getTaxonomies = _select.getTaxonomies;

  var registeredCategories = getTaxonomies();
  var taxonomy_name = [];
  var restBase = null;

  if (registeredCategories) {
    registeredCategories.map(function (item) {
      if (item.types.includes(posttype)) {
        taxonomy_name.push(item.slug);

        if (taxonomy_name.length === 1) {
          restBase = item.rest_base;
        }
      }
    });
  }

  var PostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postCount
  };

  if (postCategory) {
    PostsQuery[restBase] = postCategory;
  }

  return {
    posts: getEntityRecords('postType', posttype, PostsQuery),
    authors: getAuthors()
  };
})(MasonryTwo));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map