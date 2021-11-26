(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-command"] = factory(require("vue"));
	else
		root["vue-command"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0857":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "188a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3c30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Stdout_vue_vue_type_style_index_0_id_7025453b_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("188a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Stdout_vue_vue_type_style_index_0_id_7025453b_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Stdout_vue_vue_type_style_index_0_id_7025453b_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4795":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "677c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Search_vue_vue_type_style_index_0_id_34fef60e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0857");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Search_vue_vue_type_style_index_0_id_34fef60e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Search_vue_vue_type_style_index_0_id_34fef60e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "6ebd":
/***/ (function(module, exports) {

const EMPTYARR = []
const SHORTSPLIT = /$|[!-@[-`{-~][\s\S]*/g
const isArray = Array.isArray

const parseValue = function (any) {
  if (any === "") return ""
  if (any === "false") return false
  const maybe = +any
  return maybe * 0 === 0 ? maybe : any
}

const parseAlias = function (aliases) {
  let out = {},
    alias,
    prev,
    any

  for (let key in aliases) {
    any = aliases[key]
    alias = out[key] = isArray(any) ? any : [any]

    for (let i = 0; i < alias.length; i++) {
      prev = out[alias[i]] = [key]

      for (let k = 0; k < alias.length; k++) {
        if (i !== k) prev.push(alias[k])
      }
    }
  }

  return out
}

const parseDefault = function (aliases, defaults) {
  let out = {},
    alias,
    value

  for (let key in defaults) {
    alias = aliases[key]
    value = defaults[key]

    out[key] = value

    if (alias === undefined) {
      aliases[key] = EMPTYARR
    } else {
      for (let i = 0; i < alias.length; i++) {
        out[alias[i]] = value
      }
    }
  }

  return out
}

const parseOptions = function (aliases, options, value) {
  let out = {},
    key,
    alias

  if (options !== undefined) {
    for (let i = 0; i < options.length; i++) {
      key = options[i]
      alias = aliases[key]

      out[key] = value

      if (alias === undefined) {
        aliases[key] = EMPTYARR
      } else {
        for (let k = 0, end = alias.length; k < end; k++) {
          out[alias[k]] = value
        }
      }
    }
  }

  return out
}

const write = function (out, key, value, aliases, unknown) {
  let prev,
    alias = aliases[key],
    len = alias === undefined ? -1 : alias.length

  if (len >= 0 || unknown === undefined || unknown(key)) {
    prev = out[key]

    if (prev === undefined) {
      out[key] = value
    } else {
      if (isArray(prev)) {
        prev.push(value)
      } else {
        out[key] = [prev, value]
      }
    }

    for (let i = 0; i < len; i++) {
      out[alias[i]] = out[key]
    }
  }
}

module.exports = function (argv, opts) {
  let unknown = (opts = opts || {}).unknown,
    aliases = parseAlias(opts.alias),
    strings = parseOptions(aliases, opts.string, ""),
    values = parseDefault(aliases, opts.default),
    bools = parseOptions(aliases, opts.boolean, false),
    stopEarly = opts.stopEarly,
    _ = [],
    out = { _ },
    key,
    arg,
    end,
    match,
    value

  for (let i = 0, len = argv.length; i < len; i++) {
    arg = argv[i]

    if (arg[0] !== "-" || arg === "-") {
      if (stopEarly) {
        while (i < len) {
          _.push(argv[i++])
        }
      } else {
        _.push(arg)
      }
    } else if (arg === "--") {
      while (++i < len) {
        _.push(argv[i])
      }
    } else if (arg[1] === "-") {
      end = arg.indexOf("=", 2)
      if (arg[2] === "n" && arg[3] === "o" && arg[4] === "-") {
        key = arg.slice(5, end >= 0 ? end : undefined)
        value = false
      } else if (end >= 0) {
        key = arg.slice(2, end)
        value =
          bools[key] !== undefined ||
          (strings[key] === undefined
            ? parseValue(arg.slice(end + 1))
            : arg.slice(end + 1))
      } else {
        key = arg.slice(2)
        value =
          bools[key] !== undefined ||
          (len === i + 1 || argv[i + 1][0] === "-"
            ? strings[key] === undefined
              ? true
              : ""
            : strings[key] === undefined
            ? parseValue(argv[++i])
            : argv[++i])
      }
      write(out, key, value, aliases, unknown)
    } else {
      SHORTSPLIT.lastIndex = 2
      match = SHORTSPLIT.exec(arg)
      end = match.index
      value = match[0]

      for (let k = 1; k < end; k++) {
        write(
          out,
          (key = arg[k]),
          k + 1 < end
            ? strings[key] === undefined ||
                arg.substring(k + 1, (k = end)) + value
            : value === ""
            ? len === i + 1 || argv[i + 1][0] === "-"
              ? strings[key] === undefined || ""
              : bools[key] !== undefined ||
                (strings[key] === undefined ? parseValue(argv[++i]) : argv[++i])
            : bools[key] !== undefined ||
              (strings[key] === undefined ? parseValue(value) : value),
          aliases,
          unknown
        )
      }
    }
  }

  for (let key in values) if (out[key] === undefined) out[key] = values[key]
  for (let key in bools) if (out[key] === undefined) out[key] = false
  for (let key in strings) if (out[key] === undefined) out[key] = ""

  return out
}


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "88f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_VueCommand_vue_vue_type_style_index_0_id_72e698d4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb8e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_VueCommand_vue_vue_type_style_index_0_id_72e698d4_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_VueCommand_vue_vue_type_style_index_0_id_72e698d4_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "bdf8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Stdin_vue_vue_type_style_index_0_id_bc04a684_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb52");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Stdin_vue_vue_type_style_index_0_id_bc04a684_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Stdin_vue_vue_type_style_index_0_id_bc04a684_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cb8e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eb52":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createStdout", function() { return /* reexport */ library_createStdout; });
__webpack_require__.d(__webpack_exports__, "createStderr", function() { return /* reexport */ library_createStderr; });
__webpack_require__.d(__webpack_exports__, "createDummyStdout", function() { return /* reexport */ library_createDummyStdout; });
__webpack_require__.d(__webpack_exports__, "EVENT_LISTENERS", function() { return /* reexport */ EVENT_LISTENERS; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("4795");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/VueCommand.vue?vue&type=template&id=72e698d4

var _hoisted_1 = {
  ref: "vue-command",
  class: "vue-command"
};
var _hoisted_2 = {
  key: 0,
  class: "term-bar"
};
var _hoisted_3 = {
  key: 0,
  class: "term-title"
};
var _hoisted_4 = {
  ref: "term-std",
  class: "term-std"
};
var _hoisted_5 = {
  key: 0
};
function VueCommandvue_type_template_id_72e698d4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_search = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("search");

  var _component_stdout = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("stdout");

  var _component_stdin = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("stdin");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "bar", {}, function () {
    return [!$props.hideBar ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_2, [!$props.hideTitle ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [_ctx.isSearch ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_search, {
    key: 0,
    ref: "search",
    "is-search": _ctx.isSearch,
    "onUpdate:is-search": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.isSearch = $event;
    }),
    bus: this.bus,
    executed: _ctx.local.executed,
    stdin: $props.stdin,
    onClick: $options.focus,
    onHandle: _ctx.handle
  }, null, 8, ["is-search", "bus", "executed", "stdin", "onClick", "onHandle"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    ref: "term-cont",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'term-cont-fullscreen': _ctx.local.isFullscreen
    }, "term-cont"]),
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.focus && $options.focus.apply($options, arguments);
    })
  }, [$props.showIntro ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.intro), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.local.history, function (stdout, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: index,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["term-hist", {
        'term-hist-fullscreen': _ctx.local.isFullscreen && index === _ctx.local.history.length - 1
      }])
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_stdout, {
      component: stdout,
      class: "term-stdout"
    }, null, 8, ["component"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.local.isFullscreen || index === _ctx.local.history.length - 1]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_stdin, {
      ref: 'stdin' + index,
      stdin: _ctx.local.stdin,
      "onUpdate:stdin": _cache[1] || (_cache[1] = function ($event) {
        return _ctx.local.stdin = $event;
      }),
      bus: _this.bus,
      cursor: _ctx.local.cursor,
      "hide-prompt": $props.hidePrompt,
      "is-fullscreen": _ctx.local.isFullscreen,
      "is-in-progress": _ctx.local.isInProgress,
      "is-last": index === _ctx.local.history.length - 1,
      prompt: $props.prompt,
      "help-text": $props.helpText,
      "help-timeout": $props.helpTimeout,
      "show-help": $props.showHelp,
      uid: _ctx._uid,
      onHandle: _ctx.handle
    }, {
      prompt: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "prompt")];
      }),
      _: 2
    }, 1032, ["stdin", "bus", "cursor", "hide-prompt", "is-fullscreen", "is-in-progress", "is-last", "prompt", "help-text", "help-timeout", "show-help", "uid", "onHandle"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], index === 0 && !_ctx.local.isFullscreen || !(index === _ctx.local.history.length - 1 && _ctx.local.isInProgress) && !_ctx.local.isFullscreen]])], 2);
  }), 128))], 2), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isSearch]])], 512)], 512);
}
// CONCATENATED MODULE: ./src/components/VueCommand.vue?vue&type=template&id=72e698d4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Search.vue?vue&type=template&id=34fef60e

var Searchvue_type_template_id_34fef60e_hoisted_1 = {
  class: "term-search-container"
};
var Searchvue_type_template_id_34fef60e_hoisted_2 = {
  class: "term-search"
};

var Searchvue_type_template_id_34fef60e_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" (reverse-i-search)`");

function Searchvue_type_template_id_34fef60e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    ref: "term-cont",
    class: "term-cont term-cont-fullscreen",
    onKeydown: [_cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.setIsSearch(false);
    }, ["exact", "prevent"]), ["tab"])), _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return $options.setIsSearch(false);
    }, ["exact", "prevent"]), ["esc"])), _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.sigint && $options.sigint.apply($options, arguments);
    }, ["ctrl", "exact", "prevent"]), ["67"]))]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Searchvue_type_template_id_34fef60e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Searchvue_type_template_id_34fef60e_hoisted_2, [Searchvue_type_template_id_34fef60e_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.search = $event;
    }),
    autofocus: "",
    type: "text",
    autocorrect: "off",
    autocapitalize: "none",
    onKeyup: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.handle && $options.handle.apply($options, arguments);
    }, ["exact"]), ["enter"]))
  }, null, 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.search]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("': " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.command), 1)])])], 544);
}
// CONCATENATED MODULE: ./src/components/Search.vue?vue&type=template&id=34fef60e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Search.vue?vue&type=script&lang=js
/* harmony default export */ var Searchvue_type_script_lang_js = ({
  inject: ['setStdin'],
  props: {
    bus: {
      required: true,
      type: Object
    },
    executed: {
      required: true,
      type: Set
    },
    // Indicates if search is visible
    isSearch: {
      required: true,
      type: Boolean
    },
    // Current Stdin
    stdin: {
      required: true,
      type: String
    }
  },
  emits: ['update:isSearch'],
  data: function data() {
    return {
      // Suggested command
      command: '',
      // Users input
      search: ''
    };
  },
  watch: {
    search: function search() {
      var _this = this;

      // Search in executed commands
      this.executed.forEach(function (executed) {
        if (executed.startsWith(_this.search)) {
          _this.command = executed; // Set the new Stdin

          _this.setStdin(executed);
        }
      });
    }
  },
  created: function created() {
    this.command = this.stdin;
  },
  mounted: function mounted() {
    // Force autofocus
    this.focus(); // Resize input about characters

    function resize() {
      this.style.width = "".concat(this.value.length, "ch");
    }

    var input = this.$refs.input;
    input.addEventListener('input', resize);
    resize.call(input);
  },
  methods: {
    handle: function handle() {
      this.$emit('update:isSearch', false); // Request to handle the current search

      this.$emit('handle', this.command);
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    setIsSearch: function setIsSearch(isSearch) {
      this.$emit('update:isSearch', isSearch);
    },
    // Terminate search after cancellation
    sigint: function sigint() {
      this.setStdin('');
      this.$emit('update:isSearch', false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Search.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Search.vue?vue&type=style&index=0&id=34fef60e&lang=scss
var Searchvue_type_style_index_0_id_34fef60e_lang_scss = __webpack_require__("677c");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Search.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Searchvue_type_script_lang_js, [['render',Searchvue_type_template_id_34fef60e_render]])

/* harmony default export */ var Search = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Stdin.vue?vue&type=template&id=bc04a684

var Stdinvue_type_template_id_bc04a684_hoisted_1 = {
  class: "term-stdin-container"
};
var Stdinvue_type_template_id_bc04a684_hoisted_2 = {
  key: 0,
  class: "term-ps"
};
var Stdinvue_type_template_id_bc04a684_hoisted_3 = {
  class: "term-stdin"
};
var Stdinvue_type_template_id_bc04a684_hoisted_4 = ["autofocus", "disabled", "placeholder"];
function Stdinvue_type_template_id_bc04a684_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Stdinvue_type_template_id_bc04a684_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "prompt", {}, function () {
    return [!$props.hidePrompt ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", Stdinvue_type_template_id_bc04a684_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.local.prompt), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Stdinvue_type_template_id_bc04a684_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.local.stdin = $event;
    }),
    autofocus: $props.isLast,
    disabled: !$props.isLast || $props.isInProgress,
    placeholder: _ctx.placeholder,
    type: "text",
    autocorrect: "off",
    autocapitalize: "none",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.setCursor(_ctx.$refs.input.selectionStart);
    }),
    onKeyup: [_cache[2] || (_cache[2] = function ($event) {
      return $options.setCursor(_ctx.$refs.input.selectionStart);
    }), _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return $options.handle && $options.handle.apply($options, arguments);
    }, ["exact"]), ["enter"]))]
  }, null, 40, Stdinvue_type_template_id_bc04a684_hoisted_4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.local.stdin]])])]);
}
// CONCATENATED MODULE: ./src/components/Stdin.vue?vue&type=template&id=bc04a684

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Stdin.vue?vue&type=script&lang=js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ var Stdinvue_type_script_lang_js = ({
  inject: ['setCursor', 'setStdin'],
  props: {
    bus: {
      required: true,
      type: Object
    },
    cursor: {
      default: 0,
      required: true,
      type: Number
    },
    helpText: {
      default: '',
      type: String
    },
    helpTimeout: {
      default: 0,
      type: Number
    },
    hidePrompt: {
      default: false,
      type: Boolean
    },
    isInProgress: {
      default: false,
      required: true,
      type: Boolean
    },
    isLast: {
      default: false,
      required: true,
      type: Boolean
    },
    isFullscreen: {
      default: false,
      required: true,
      type: Boolean
    },
    prompt: {
      default: '',
      type: String
    },
    showHelp: {
      default: false,
      type: Boolean
    },
    stdin: {
      default: '',
      required: true,
      type: String
    },
    uid: {
      required: true,
      type: Number
    }
  },
  emits: ['update:stdin'],
  data: function data() {
    return {
      placeholder: '',
      local: {
        // This makes it possible to change the prompt during runtime
        prompt: '',
        stdin: ''
      }
    };
  },
  watch: {
    cursor: function cursor() {
      if (this.isLast) {
        // Mirror the cursor position to the real cursor position
        this.$refs.input.setSelectionRange(this.cursor, this.cursor);
      }
    },
    isInProgress: function isInProgress() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this.isInProgress && _this.isLast)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 3:
                _this.scrollIntoView();

                _this.focus();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    isLast: function isLast(_isLast, wasLast) {
      if (wasLast && !_isLast) {
        // Allow components to get into focus
        this.blur();
      }
    },
    stdin: function stdin() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Only last Stdin is allowed to mutate
                if (_this2.isLast && !_this2.isInProgress) {
                  _this2.local.stdin = _this2.stdin;
                }

                _context2.next = 3;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 3:
                // Set current cursor position
                _this2.setCursor(_this2.$refs.input.selectionStart);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    'local.stdin': function localStdin() {
      // Set current Stdin
      this.$emit('update:stdin', this.local.stdin); // Set current cursor position

      this.setCursor(this.$refs.input.selectionStart);
    },
    helpText: function helpText() {
      if (this.isLast && this.showHelp) {
        this.setPlaceholder(this.helpText);
      }
    }
  },
  created: function created() {
    this.local.prompt = this.prompt;
    this.local.stdin = this.stdin;
  },
  mounted: function mounted() {
    var _this3 = this;

    // Scroll to current input
    this.scrollIntoView(); // Focus new Stdin

    this.focus();
    setTimeout(function () {
      if (_this3.isLast && _this3.showHelp) {
        _this3.setPlaceholder(_this3.helpText);
      }
    }, this.helpTimeout);
  },
  methods: {
    // Handle current command
    handle: function handle() {
      // Persist the current prompt
      this.setPrompt(this.prompt); // Request to handle the current Stdin

      this.$emit('handle', this.local.stdin); // Hide the current placeholder

      this.setPlaceholder('');
    },
    setPlaceholder: function setPlaceholder(placeholder) {
      this.placeholder = placeholder;
    },
    setPrompt: function setPrompt(prompt) {
      this.local.prompt = prompt;
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    scrollIntoView: function scrollIntoView() {
      this.$refs.input.scrollIntoView();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Stdin.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Stdin.vue?vue&type=style&index=0&id=bc04a684&lang=scss
var Stdinvue_type_style_index_0_id_bc04a684_lang_scss = __webpack_require__("bdf8");

// CONCATENATED MODULE: ./src/components/Stdin.vue







const Stdin_exports_ = /*#__PURE__*/exportHelper_default()(Stdinvue_type_script_lang_js, [['render',Stdinvue_type_template_id_bc04a684_render]])

/* harmony default export */ var Stdin = (Stdin_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Stdout.vue?vue&type=template&id=7025453b

function Stdoutvue_type_template_id_7025453b_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($props.component));
}
// CONCATENATED MODULE: ./src/components/Stdout.vue?vue&type=template&id=7025453b

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Stdout.vue?vue&type=script&lang=js
/* harmony default export */ var Stdoutvue_type_script_lang_js = ({
  props: {
    component: {
      required: true,
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./src/components/Stdout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Stdout.vue?vue&type=style&index=0&id=7025453b&lang=scss
var Stdoutvue_type_style_index_0_id_7025453b_lang_scss = __webpack_require__("3c30");

// CONCATENATED MODULE: ./src/components/Stdout.vue







const Stdout_exports_ = /*#__PURE__*/exportHelper_default()(Stdoutvue_type_script_lang_js, [['render',Stdoutvue_type_template_id_7025453b_render]])

/* harmony default export */ var Stdout = (Stdout_exports_);
// CONCATENATED MODULE: ./src/mixins/autocomplete.js
// @vue/component
/* harmony default export */ var mixins_autocomplete = ({
  provide: function provide() {
    return {
      setCursor: this.setCursor
    };
  },
  data: function data() {
    return {
      local: {
        // Current cursor position at Stdin
        cursor: 0
      }
    };
  },
  emits: ['update:cursor'],
  watch: {
    cursor: function cursor() {
      this.local.cursor = this.cursor;
    },
    'local.cursor': function localCursor() {
      this.$emit('update:cursor', this.local.cursor);
    }
  },
  methods: {
    // Calls the user given autocompletion resolver
    autocomplete: function autocomplete() {
      // Check if autocompletion resolver is given
      if (typeof this.autocompletionResolver === 'function') {
        // Call user autocompletion function
        this.autocompletionResolver();
      }
    },
    setCursor: function setCursor(cursor) {
      this.local.cursor = cursor;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/getopts/index.cjs
var getopts = __webpack_require__("6ebd");
var getopts_default = /*#__PURE__*/__webpack_require__.n(getopts);

// CONCATENATED MODULE: ./src/mixins/handle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function handle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function handle_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { handle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { handle_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // Split Stdin into chunks to parse it correctly.
// See: https://stackoverflow.com/a/18647776 and see: https://github.com/ndabAP/vue-command/issues/176

var accommodateTokens = function accommodateTokens(stdin) {
  // Contains the tokens to merge option-value pairs
  var tokens = []; // Contains the current token pair for each iteration

  var tokenPairs = [];
  var tokenPairsExpression = /[^\s"]+|"([^"]*)"/gi; // Iterate through all tokens

  do {
    tokenPairs = tokenPairsExpression.exec(stdin);

    if (tokenPairs != null) {
      tokens.push(tokenPairs[1] ? tokenPairs[1] : tokenPairs[0]);
    }
  } while (tokenPairs != null); // Contains accommodated tokens to parse


  var accommodatedTokens = [];
  var isNextTokenOptionValue = false;
  tokens.forEach(function (token, index) {
    // Check if next token is option value
    if (isNextTokenOptionValue) {
      isNextTokenOptionValue = false;
      return;
    } // Check if option has value assigned


    if (token.endsWith('=')) {
      // Merge option with value
      accommodatedTokens.push(token + tokens[index + 1]);
      isNextTokenOptionValue = true;
    } else {
      // Token is not part of option-value pair
      accommodatedTokens.push(token);
    }
  });
  return accommodatedTokens;
}; // @vue/component


/* harmony default export */ var mixins_handle = ({
  provide: function provide() {
    return {
      terminate: this.terminate
    };
  },
  emits: ['update:executed', 'update:history'],
  methods: {
    // Handles the command
    handle: function handle(stdin) {
      var _this = this;

      return handle_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var program;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // First token is program
                program = stdin.trim().split(' ')[0]; // Check if command is regular command

                if (!(typeof _this.commands[program] === 'function')) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return Promise.resolve(_this.execute(stdin));

              case 4:
                return _context.abrupt("return");

              case 5:
                if (!(typeof _this.builtIn === 'function')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return Promise.resolve(_this.builtIn(stdin, _this));

              case 8:
                return _context.abrupt("return");

              case 9:
                // Command must be empty or can't be found
                _this.commandNotFound(stdin);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Executes a regular command
    execute: function execute(stdin) {
      var _this2 = this;

      return handle_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var program, component, accommodatedTokens, parsed, executed, history;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Remove leading and trailing whitespace
                stdin = stdin.trim();
                program = getopts_default()(stdin.split(' '), _this2.parserOptions)._[0]; // Create empty component in case no program has been found

                component = library_createDummyStdout();
                accommodatedTokens = accommodateTokens(stdin);
                parsed = getopts_default()(accommodatedTokens, _this2.parserOptions);
                _context2.next = 7;
                return Promise.resolve(_this2.commands[program](parsed));

              case 7:
                component = _context2.sent;
                component = _this2.setupComponent(component, _this2.local.history.length, parsed); // Disallow empty Stdin in history

                if (stdin !== '') {
                  // Remove duplicate commands to push to latest entry
                  executed = new Set(_this2.local.executed);
                  executed.delete(stdin);
                  executed.add(stdin); // Mutate property

                  _this2.$emit('update:executed', executed);

                  _this2.setExecuted(executed);
                } // Point history to new command


                _this2.setPointer(_this2.local.executed.size);

                history = _toConsumableArray(_this2.local.history);
                history.push(component); // Emit command executing started

                _this2.emitExecute(); // Tell terminal there is a command in progress


                _this2.setIsInProgress(true);

                _this2.setHistory(history); // Update the history property


                _this2.$emit('update:history', _toConsumableArray(history));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // Command is empty or not found
    commandNotFound: function commandNotFound(stdin) {
      var component = library_createDummyStdout(); // Only non empty commands should be

      if (stdin !== '') {
        // No command found
        component = library_createStderr("".concat(stdin, ": ").concat(this.notFound), true);
        component = this.setupComponent(component, this.local.history.length); // Remove duplicate commands to push to latest entry

        var executed = new Set(this.local.executed);
        executed.delete(stdin);
        executed.add(stdin); // Mutate property

        this.$emit('update:executed', executed);
        this.setExecuted(executed); // Point history to new command

        this.setPointer(this.local.executed.size);
      }

      var history = _toConsumableArray(this.local.history);

      history.push(component); // Emit command executing started

      this.emitExecute(); // Tell terminal there is a command in progress

      this.setIsInProgress(true);
      this.setHistory(history); // Update the history property

      this.$emit('update:history', _toConsumableArray(history));
    },
    // Add environment and context and instantly terminate
    setupComponent: function setupComponent(component) {
      var _this3 = this;

      var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parsed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // Prevent to work with same reference
      component = _objectSpread({}, component);

      if (!hasOwnProperty.call(component, 'computed')) {
        component.computed = {};
      } // Create copies


      var cursor = this.local.cursor;
      var executed = new Set(this.local.executed);

      var history = _toConsumableArray(this.local.history);

      var pointer = this.local.pointer;
      var stdin = this.local.stdin;
      component.computed = _objectSpread({
        environment: function environment() {
          return {
            isExecuting: _this3.local.isInProgress && _this3.local.history.length - 1 === entries,
            isFullscreen: _this3.local.isFullscreen,
            isInProgress: _this3.local.isInProgress
          };
        },
        context: function context() {
          return {
            cursor: cursor,
            executed: executed,
            history: history,
            parsed: parsed,
            pointer: pointer,
            stdin: stdin
          };
        }
      }, component.computed);
      return component;
    },
    // Executes common final tasks after command has been finished
    terminate: function terminate() {
      // Set new Stdin to empty
      this.setStdin(''); // Exit fullscreen if necessary

      this.setIsFullscreen(false); // Indicate end of command

      this.$emit('executed'); // Allow new Stdin

      this.setIsInProgress(false);
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/history.js
function history_toConsumableArray(arr) { return history_arrayWithoutHoles(arr) || history_iterableToArray(arr) || history_unsupportedIterableToArray(arr) || history_nonIterableSpread(); }

function history_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function history_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return history_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return history_arrayLikeToArray(o, minLen); }

function history_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function history_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return history_arrayLikeToArray(arr); }

function history_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// @vue/component
/* harmony default export */ var mixins_history = ({
  provide: function provide() {
    return {
      setPointer: this.setPointer
    };
  },
  data: function data() {
    return {
      local: {
        executed: new Set(),
        // All executed commands
        history: [],
        // History command pointer
        pointer: 0
      }
    };
  },
  watch: {
    history: {
      handler: function handler() {
        // Creates a new copy to prevent mutation
        this.setHistory(history_toConsumableArray(this.history));
      },
      deep: true
    },
    'local.pointer': function localPointer() {
      this.bus.emit('update:pointer', this.local.pointer);
    },
    pointer: function pointer() {
      this.setPointer(this.pointer);
    }
  },
  methods: {
    increaseHistory: function increaseHistory() {
      // Check if pointer is mutable
      if (this.local.executed !== undefined && this.local.pointer < this.local.executed.size - 1) {
        this.local.pointer++; // Set new pointed Stdin

        this.local.stdin = history_toConsumableArray(this.local.executed)[this.local.pointer];
      }
    },
    decreaseHistory: function decreaseHistory() {
      // Check if pointer is mutable
      if (this.local.pointer > 0) {
        this.local.pointer--; // Set new pointed Stdin

        this.local.stdin = history_toConsumableArray(this.local.executed)[this.local.pointer];
      }
    },
    setExecuted: function setExecuted(executed) {
      this.local.executed = executed;
    },
    setHistory: function setHistory(history) {
      this.local.history = history;
    },
    setPointer: function setPointer(pointer) {
      this.local.pointer = pointer;
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/search.js


function search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function search_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// @vue/component

/* harmony default export */ var mixins_search = ({
  data: function data() {
    return {
      isSearch: false
    };
  },
  watch: {
    isSearch: function isSearch() {
      var _this = this;

      return search_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var stdin;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.isSearch) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 3:
                // Latest Stdin is latest history entry
                stdin = _this.$refs["stdin".concat(_this.local.history.length - 1)]; // Call component method

                stdin.focus();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    // Let the user search inside the "executed" "Set"
    setIsSearchHandler: function setIsSearchHandler() {
      if (!this.isInProgress) {
        this.setIsSearch(true);
      }
    },
    setIsSearch: function setIsSearch(isSearch) {
      this.isSearch = isSearch;
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/ui.js
// @vue/component
/* harmony default export */ var ui = ({
  provide: function provide() {
    return {
      setIsFullscreen: this.setIsFullscreen,
      setIsInProgress: this.setIsInProgress
    };
  },
  data: function data() {
    return {
      local: {
        // Run command in fullscreen
        isFullscreen: false,
        // Indicates if a command is in progress
        isInProgress: false
      }
    };
  },
  emits: ['update:isFullscreen', 'update:isInProgress'],
  watch: {
    isFullscreen: function isFullscreen() {
      this.setIsFullscreen(this.isFullscreen);
    },
    isInProgress: function isInProgress() {
      this.setIsInProgress(this.isInProgress);
    },
    'local.isFullscreen': function localIsFullscreen() {
      this.$emit('update:isFullscreen', this.local.isFullscreen);
    },
    'local.isInProgress': function localIsInProgress() {
      this.$emit('update:isInProgress', this.local.isInProgress);
    }
  },
  methods: {
    setIsFullscreen: function setIsFullscreen(isFullscreen) {
      this.local.isFullscreen = isFullscreen;
    },
    setIsInProgress: function setIsInProgress(isInProgress) {
      this.local.isInProgress = isInProgress;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.mjs
/* harmony default export */ var mitt = (function(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}});
//# sourceMappingURL=mitt.mjs.map

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/VueCommand.vue?vue&type=script&lang=js
function VueCommandvue_type_script_lang_js_toConsumableArray(arr) { return VueCommandvue_type_script_lang_js_arrayWithoutHoles(arr) || VueCommandvue_type_script_lang_js_iterableToArray(arr) || VueCommandvue_type_script_lang_js_unsupportedIterableToArray(arr) || VueCommandvue_type_script_lang_js_nonIterableSpread(); }

function VueCommandvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function VueCommandvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return VueCommandvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return VueCommandvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function VueCommandvue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function VueCommandvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return VueCommandvue_type_script_lang_js_arrayLikeToArray(arr); }

function VueCommandvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function VueCommandvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function VueCommandvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { VueCommandvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { VueCommandvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











/* harmony default export */ var VueCommandvue_type_script_lang_js = ({
  emits: ['update:cursor', 'update:history', 'update:stdin', 'execute', 'executed', 'input'],
  components: {
    Search: Search,
    Stdin: Stdin,
    Stdout: Stdout
  },
  mixins: [mixins_autocomplete, mixins_handle, mixins_history, mixins_search, ui],
  provide: function provide() {
    return {
      emitExecute: this.emitExecute,
      emitExecuted: this.emitExecuted,
      emitInput: this.emitInput,
      setStdin: this.setStdin
    };
  },
  props: {
    autocompletionResolver: {
      default: undefined,
      type: Function
    },
    builtIn: {
      default: undefined,
      type: Function
    },
    commands: {
      default: function _default() {
        return {};
      },
      type: Object
    },
    cursor: {
      default: 0,
      type: Number
    },
    // Default event listeners
    eventListeners: {
      default: function _default() {
        return [EVENT_LISTENERS.autocomplete, EVENT_LISTENERS.history, EVENT_LISTENERS.search];
      },
      type: Array
    },
    // Non-empty executed commands
    executed: {
      default: function _default() {
        return new Set();
      },
      type: Set
    },
    helpTimeout: {
      default: 4000,
      type: Number
    },
    hideBar: {
      default: false,
      type: Boolean
    },
    hidePrompt: {
      default: false,
      type: Boolean
    },
    hideTitle: {
      default: false,
      type: Boolean
    },
    helpText: {
      default: 'Type help',
      type: String
    },
    // All executed commands
    history: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    intro: {
      default: 'Fasten your seatbelts!',
      type: String
    },
    isFullscreen: {
      default: false,
      type: Boolean
    },
    isInProgress: {
      default: false,
      type: Boolean
    },
    notFound: {
      default: 'command not found',
      type: String
    },
    // Options when parsing Stdin
    parserOptions: {
      default: function _default() {
        return {};
      },
      type: Object
    },
    // History command pointer
    pointer: {
      default: 0,
      type: Number
    },
    prompt: {
      default: '~neil@moon:#/',
      type: String
    },
    showHelp: {
      default: false,
      type: Boolean
    },
    showIntro: {
      default: false,
      type: Boolean
    },
    // Current Stdin
    stdin: {
      default: '',
      type: String
    },
    title: {
      default: 'neil@moon: ~',
      type: String
    }
  },
  data: function data() {
    return {
      // Bus for communication
      bus: mitt(),
      // A local copy to allow the absence of properties
      local: {
        // Current Stdin
        stdin: ''
      },
      // Detect scroll and resize events
      scroll: {
        eventListener: undefined,
        // Determine if scrolled to bottom
        isBottom: true,
        resizeObserver: undefined
      }
    };
  },
  watch: {
    stdin: function stdin() {
      this.setStdin(this.stdin);
    },
    'local.stdin': function localStdin() {
      // Emit the current Stdin as an event
      this.$emit('input', this.local.stdin); // Update given property

      this.$emit('update:stdin', this.local.stdin); // Make searching history work again

      if (this.local.stdin === '') {
        this.setPointer(this.local.executed.size);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Scroll to bottom if Stdout mutates terminal height
    this.scroll.resizeObserver = new ResizeObserver( /*#__PURE__*/function () {
      var _ref = VueCommandvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee(event) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$nextTick();

              case 2:
                // Only scroll to bottom if it was scrolled to bottom before
                if (_this.scroll.isBottom) {
                  _this.$refs['term-std'].scrollTop = _this.$refs['term-std'].scrollHeight;
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.scroll.resizeObserver.observe(this.$refs['term-cont']); // Check if scrolled to bottom

    this.scroll.eventListener = function () {
      var terminal = _this.$refs['term-std'];
      _this.scroll.isBottom = terminal.scrollHeight - terminal.scrollTop - terminal.clientHeight === 0;
    };

    this.$refs['term-std'].addEventListener('scroll', this.scroll.eventListener); // Bind given event listeners

    this.eventListeners.forEach(function (eventListener) {
      return eventListener(_this);
    });
  },
  created: function created() {
    // Observe "executed" changes since Vue.js can't watch a "Set". See: https://github.com/ndabAP/vue-command/issues/151
    this.executed.add = function () {
      var _this$local$executed, _Object$getPrototypeO;

      for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
        x[_key] = arguments[_key];
      }

      (_this$local$executed = this.local.executed).add.apply(_this$local$executed, x);

      (_Object$getPrototypeO = Object.getPrototypeOf(this).add).call.apply(_Object$getPrototypeO, [this].concat(x));
    };

    this.executed.clear = function () {
      this.local.executed.clear();
      Object.getPrototypeOf(this).add.call(this);
    };

    this.executed.delete = function () {
      var _this$local$executed2, _Object$getPrototypeO2;

      for (var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        x[_key2] = arguments[_key2];
      }

      (_this$local$executed2 = this.local.executed).delete.apply(_this$local$executed2, x);

      (_Object$getPrototypeO2 = Object.getPrototypeOf(this).delete).call.apply(_Object$getPrototypeO2, [this].concat(x));
    }; // Apply user given properties


    this.setCursor(this.cursor);
    this.setPointer(this.pointer);
    this.setStdin(this.stdin);
    this.setIsInProgress(this.isInProgress);
    this.setIsFullscreen(this.isFullscreen);

    var history = VueCommandvue_type_script_lang_js_toConsumableArray(this.history); // If there is no entry push dummy Stdout to show Stdin


    if (history.length === 0) {
      // Push dummy Stdout without termination
      history.push(library_createDummyStdout()); // Update the history property

      this.$emit('update:history', VueCommandvue_type_script_lang_js_toConsumableArray(history));
    }

    this.setHistory(VueCommandvue_type_script_lang_js_toConsumableArray(history));
  },
  methods: {
    emitInput: function emitInput(input) {
      this.$emit('input', input);
    },
    emitExecute: function emitExecute() {
      this.$emit('execute');
    },
    emitExecuted: function emitExecuted() {
      this.$emit('executed');
    },
    // Focus on last Stdin or search
    focus: function focus() {
      // If user selected any text skip setting focus as otherwise the selection gets removed
      if (window.getSelection().toString() !== '') return; // Check if search mode

      if (this.isSearch) {
        this.$refs.search.focus();
        return;
      } // Latest Stdin is latest history entry


      var stdin = this.$refs["stdin".concat(this.local.history.length - 1)]; // Call component method

      stdin.focus();
    },
    setStdin: function setStdin(stdin) {
      this.local.stdin = stdin;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueCommand.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VueCommand.vue?vue&type=style&index=0&id=72e698d4&lang=scss
var VueCommandvue_type_style_index_0_id_72e698d4_lang_scss = __webpack_require__("88f8");

// CONCATENATED MODULE: ./src/components/VueCommand.vue







const VueCommand_exports_ = /*#__PURE__*/exportHelper_default()(VueCommandvue_type_script_lang_js, [['render',VueCommandvue_type_template_id_72e698d4_render]])

/* harmony default export */ var VueCommand = (VueCommand_exports_);
// CONCATENATED MODULE: ./src/constants/keys.js
// Suffix "KEY" is added to avoid JavaScript collisions
var ARROW_UP_KEY = 38;
var ARROW_DOWN_KEY = 40;
var C_KEY = 67;
var R_KEY = 82;
var TAB_KEY = 9;
// CONCATENATED MODULE: ./src/library.js


function library_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function library_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { library_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { library_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // Returns a Stdout component containing a span element with given inner content

var library_createStdout = function createStdout(content) {
  var isInnerText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isEscapeHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'VueCommandStdout';

  for (var _len = arguments.length, mixins = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    mixins[_key - 4] = arguments[_key];
  }

  return {
    name: name,
    mixins: mixins,
    inject: ['terminate'],
    mounted: function mounted() {
      var _this = this;

      return library_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 2:
                _this.terminate();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    render: function render() {
      if (isEscapeHtml) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {}, content);
      }

      if (isInnerText) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {
          innerText: content
        });
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {
        innerHTML: content
      });
    }
  };
}; // Returns a Stderr component containing a span element with given inner content

var library_createStderr = function createStderr(content) {
  var isInnerText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isEscapeHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'VueCommandStderr';

  for (var _len2 = arguments.length, mixins = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
    mixins[_key2 - 4] = arguments[_key2];
  }

  return {
    name: name,
    mixins: mixins,
    inject: ['terminate'],
    mounted: function mounted() {
      var _this2 = this;

      return library_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 2:
                _this2.terminate();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    render: function render() {
      if (isEscapeHtml) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {}, content);
      }

      if (isInnerText) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {
          innerText: content
        });
      }

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {
        innerHTML: content
      });
    }
  };
}; // Returns a dummy Stdout component to not show a Stdin

var library_createDummyStdout = function createDummyStdout() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'VueCommandDummyStdout';

  for (var _len3 = arguments.length, mixins = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    mixins[_key3 - 1] = arguments[_key3];
  }

  return {
    name: name,
    mixins: mixins,
    inject: ['terminate'],
    mounted: function mounted() {
      var _this3 = this;

      return library_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 2:
                _this3.terminate();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    render: function render() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('span', {}, '');
    }
  };
}; // Default event listeners to opt-in

var EVENT_LISTENERS = {
  // Autocompletion when pressing "Tab" key
  autocomplete: function autocomplete(terminal) {
    terminal.$refs['term-cont'].addEventListener('keydown', function (event) {
      if (event.keyCode === TAB_KEY && !terminal.local.isInProgress) {
        event.preventDefault();
        terminal.autocomplete();
      }
    });
  },
  // Cycle through history with "Arrow up key" and "Arrow down key"
  history: function history(terminal) {
    terminal.$refs['term-cont'].addEventListener('keydown', function (event) {
      if (terminal.local.isInProgress) {
        return;
      }

      if (event.keyCode === ARROW_UP_KEY) {
        event.preventDefault();
        terminal.decreaseHistory();
      }

      if (event.keyCode === ARROW_DOWN_KEY) {
        event.preventDefault();
        terminal.increaseHistory();
      }
    });
  },
  // Search history with "Ctrl" and "r"
  search: function search(terminal) {
    terminal.$refs['term-cont'].addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.keyCode === R_KEY && !terminal.local.isInProgress) {
        event.preventDefault();
        terminal.setIsSearchHandler();
      }
    });
  }
};
/* harmony default export */ var library = (VueCommand);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (library);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-command.umd.js.map