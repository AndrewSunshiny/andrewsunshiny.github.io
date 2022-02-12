/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ (function(module) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var un$Slice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").enforce);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.anchor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.anchor.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt);
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "./src/js/libs/fullpage.js":
/*!*********************************!*\
  !*** ./src/js/libs/fullpage.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");






















function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * fullPage 3.1.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function (root, window, document, factory, undefined) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(function () {
      root.fullpage = factory(window, document);
      return root.fullpage;
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    // Node. Does not work with strict CommonJS.
    module.exports = factory(window, document);
  } else {
    // Browser globals.
    window.fullpage = factory(window, document);
  }
})(undefined, window, document, function (window, document) {
  "use strict"; // keeping central set of classnames and selectors

  var WRAPPER = "fullpage-wrapper";
  var WRAPPER_SEL = "." + WRAPPER; // slimscroll

  var SCROLLABLE = "fp-scrollable";
  var SCROLLABLE_SEL = "." + SCROLLABLE; // util

  var RESPONSIVE = "fp-responsive";
  var NO_TRANSITION = "fp-notransition";
  var DESTROYED = "fp-destroyed";
  var ENABLED = "fp-enabled";
  var VIEWING_PREFIX = "fp-viewing";
  var ACTIVE = "active";
  var ACTIVE_SEL = "." + ACTIVE;
  var COMPLETELY = "fp-completely";
  var COMPLETELY_SEL = "." + COMPLETELY; // section

  var SECTION_DEFAULT_SEL = ".section";
  var SECTION = "fp-section";
  var SECTION_SEL = "." + SECTION;
  var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
  var TABLE_CELL = "fp-tableCell";
  var TABLE_CELL_SEL = "." + TABLE_CELL;
  var AUTO_HEIGHT = "fp-auto-height";
  var AUTO_HEIGHT_SEL = "." + AUTO_HEIGHT;
  var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
  var AUTO_HEIGHT_RESPONSIVE_SEL = "." + AUTO_HEIGHT_RESPONSIVE;
  var NORMAL_SCROLL = "fp-normal-scroll";
  var NORMAL_SCROLL_SEL = "." + NORMAL_SCROLL; // section nav

  var SECTION_NAV = "fp-nav";
  var SECTION_NAV_SEL = "#" + SECTION_NAV;
  var SECTION_NAV_TOOLTIP = "fp-tooltip";
  var SECTION_NAV_TOOLTIP_SEL = "." + SECTION_NAV_TOOLTIP;
  var SHOW_ACTIVE_TOOLTIP = "fp-show-active"; // slide

  var SLIDE_DEFAULT_SEL = ".slide";
  var SLIDE = "fp-slide";
  var SLIDE_SEL = "." + SLIDE;
  var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
  var SLIDES_WRAPPER = "fp-slides";
  var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;
  var SLIDES_CONTAINER = "fp-slidesContainer";
  var SLIDES_CONTAINER_SEL = "." + SLIDES_CONTAINER;
  var TABLE = "fp-table"; // slide nav

  var SLIDES_NAV = "fp-slidesNav";
  var SLIDES_NAV_SEL = "." + SLIDES_NAV;
  var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + " a";
  var SLIDES_ARROW = "fp-controlArrow";
  var SLIDES_ARROW_SEL = "." + SLIDES_ARROW;
  var SLIDES_PREV = "fp-prev";
  var SLIDES_PREV_SEL = "." + SLIDES_PREV;
  var SLIDES_ARROW_PREV = SLIDES_ARROW + " " + SLIDES_PREV;
  var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
  var SLIDES_NEXT = "fp-next";
  var SLIDES_NEXT_SEL = "." + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT = SLIDES_ARROW + " " + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

  function initialise(containerSelector, options) {
    var isOK = options && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(options["li" + "cen" + "seK" + "e" + "y"]) || document.domain.indexOf("al" + "varotri" + "go" + "." + "com") > -1; // cache common elements

    var $htmlBody = $("html, body");
    var $html = $("html")[0];
    var $body = $("body")[0]; //only once my friend!

    if (hasClass($html, ENABLED)) {
      displayWarnings();
      return;
    }

    var FP = {}; // Creating some defaults, extending them with any options that were provided

    options = deepExtend({
      //navigation
      menu: false,
      anchors: [],
      lockAnchors: false,
      navigation: false,
      navigationPosition: "right",
      navigationTooltips: [],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: "bottom",
      scrollBar: false,
      hybrid: false,
      //scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      easing: "easeInOutCubic",
      easingcss3: "ease",
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: null,
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
      scrollOverflowOptions: null,
      touchSensitivity: 5,
      touchWrapper: typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector,
      bigSectionsDestination: null,
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
      //design
      controlArrows: true,
      controlArrowColor: "#fff",
      verticalCentered: true,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      //backwards compabitility with responsiveWiddth
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {
        type: "reveal",
        percentage: 62,
        property: "translate"
      },
      cards: false,
      cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true
      },
      //Custom selectors
      sectionSelector: SECTION_DEFAULT_SEL,
      slideSelector: SLIDE_DEFAULT_SEL,
      //events
      v2compatible: false,
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null,
      afterResponsive: null,
      lazyLoading: true
    }, options); //flag to avoid very fast sliding for landscape sliders

    var slideMoving = false;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
    var container = typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector;
    var windowsHeight = getWindowHeight();
    var windowsWidth = getWindowWidth();
    var isResizing = false;
    var isWindowFocused = true;
    var lastScrolledDestiny;
    var lastScrolledSlide;
    var canScroll = true;
    var scrollings = [];
    var controlPressed;
    var startingSection;
    var isScrollAllowed = {};
    isScrollAllowed.m = {
      up: true,
      down: true,
      left: true,
      right: true
    };
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
    var MSPointer = getMSPointer();
    var events = {
      touchmove: "ontouchmove" in window ? "touchmove" : MSPointer.move,
      touchstart: "ontouchstart" in window ? "touchstart" : MSPointer.down
    };
    var scrollBarHandler; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; //cheks for passive event support

    var g_supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          g_supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {} //timeouts


    var resizeId;
    var resizeHandlerId;
    var afterSectionLoadsId;
    var afterSlideLoadsId;
    var scrollId;
    var scrollId2;
    var keydownId;
    var g_doubleCheckHeightId;
    var originals = deepExtend({}, options); //deep copy

    var activeAnimation;
    var g_initialAnchorsInDom = false;
    var g_canFireMouseEnterNormalScroll = true;
    var g_mediaLoadedId;
    var g_transitionLapseId;
    var extensions = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect"];
    displayWarnings(); //easeInOutCubic animation included in the plugin

    window.fp_easings = deepExtend(window.fp_easings, {
      easeInOutCubic: function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    });
    /**
     * Sets the autoScroll option.
     * It changes the scroll bar visibility and the history of the site as a result.
     */

    function setAutoScrolling(value, type) {
      //removing the transformation
      if (!value) {
        silentScroll(0);
      }

      setVariableState("autoScrolling", value, type);
      var element = $(SECTION_ACTIVE_SEL)[0];

      if (options.autoScrolling && !options.scrollBar) {
        css($htmlBody, {
          overflow: "hidden",
          height: "100%"
        });
        setRecordHistory(originals.recordHistory, "internal"); //for IE touch devices

        css(container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });

        if (element != null) {
          //moving the container up
          silentScroll(element.offsetTop);
        }
      } else {
        css($htmlBody, {
          overflow: "visible",
          height: "initial"
        });
        var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
        setRecordHistory(recordHistory, "internal"); //for IE touch devices

        css(container, {
          "-ms-touch-action": "",
          "touch-action": ""
        }); //scrolling the page to the section with no animation

        if (element != null) {
          var scrollSettings = getScrollSettings(element.offsetTop);
          scrollSettings.element.scrollTo(0, scrollSettings.options);
        }
      }
    }
    /**
     * Defines wheter to record the history for each hash change in the URL.
     */


    function setRecordHistory(value, type) {
      setVariableState("recordHistory", value, type);
    }
    /**
     * Defines the scrolling speed
     */


    function setScrollingSpeed(value, type) {
      setVariableState("scrollingSpeed", value, type);
    }
    /**
     * Sets fitToSection
     */


    function setFitToSection(value, type) {
      setVariableState("fitToSection", value, type);
    }
    /**
     * Sets lockAnchors
     */


    function setLockAnchors(value) {
      options.lockAnchors = value;
    }
    /**
     * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
     */


    function setMouseWheelScrolling(value) {
      if (value) {
        addMouseWheelHandler();
        addMiddleWheelHandler();
      } else {
        removeMouseWheelHandler();
        removeMiddleWheelHandler();
      }
    }
    /**
     * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
     * Optionally a second parameter can be used to specify the direction for which the action will be applied.
     *
     * @param directions string containing the direction or directions separated by comma.
     */


    function setAllowScrolling(value, directions) {
      if (typeof directions !== "undefined") {
        directions = directions.replace(/ /g, "").split(",");
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, "m");
        });
      } else {
        setIsScrollAllowed(value, "all", "m");
      }
    }
    /**
     * Adds or remove the mouse wheel hijacking
     */


    function setMouseHijack(value) {
      if (value) {
        setMouseWheelScrolling(true);
        addTouchHandler();
      } else {
        setMouseWheelScrolling(false);
        removeTouchHandler();
      }
    }
    /**
     * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
     */


    function setKeyboardScrolling(value, directions) {
      if (typeof directions !== "undefined") {
        directions = directions.replace(/ /g, "").split(",");
        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, "k");
        });
      } else {
        setIsScrollAllowed(value, "all", "k");
        options.keyboardScrolling = value;
      }
    }
    /**
     * Moves the page up one section.
     */


    function moveSectionUp() {
      var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); //looping to the bottom if there's no more sections above

      if (!prev && (options.loopTop || options.continuousVertical)) {
        prev = last($(SECTION_SEL));
      }

      if (prev != null) {
        scrollPage(prev, null, true);
      }
    }
    /**
     * Moves the page down one section.
     */


    function moveSectionDown() {
      var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); //looping to the top if there's no more sections below

      if (!next && (options.loopBottom || options.continuousVertical)) {
        next = $(SECTION_SEL)[0];
      }

      if (next != null) {
        scrollPage(next, null, false);
      }
    }
    /**
     * Moves the page to the given section and slide with no animation.
     * Anchors or index positions can be used as params.
     */


    function silentMoveTo(sectionAnchor, slideAnchor) {
      setScrollingSpeed(0, "internal");
      moveTo(sectionAnchor, slideAnchor);
      setScrollingSpeed(originals.scrollingSpeed, "internal");
    }
    /**
     * Moves the page to the given section and slide.
     * Anchors or index positions can be used as params.
     */


    function moveTo(sectionAnchor, slideAnchor) {
      var destiny = getSectionByAnchor(sectionAnchor);

      if (typeof slideAnchor !== "undefined") {
        scrollPageAndSlide(sectionAnchor, slideAnchor);
      } else if (destiny != null) {
        scrollPage(destiny);
      }
    }
    /**
     * Slides right the slider of the active section.
     * Optional `section` param.
     */


    function moveSlideRight(section) {
      moveSlide("right", section);
    }
    /**
     * Slides left the slider of the active section.
     * Optional `section` param.
     */


    function moveSlideLeft(section) {
      moveSlide("left", section);
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */


    function reBuild(resizing) {
      if (hasClass(container, DESTROYED)) {
        return;
      } //nothing to do if the plugin was destroyed


      isResizing = true; //updating global vars

      windowsHeight = getWindowHeight();
      windowsWidth = getWindowWidth();
      var sections = $(SECTION_SEL);

      for (var i = 0; i < sections.length; ++i) {
        var section = sections[i];
        var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
        var slides = $(SLIDE_SEL, section); //adjusting the height of the table-cell for IE and Firefox

        if (options.verticalCentered) {
          css($(TABLE_CELL_SEL, section), {
            height: getTableHeight(section) + "px"
          });
        }

        css(section, {
          height: windowsHeight + "px"
        }); //adjusting the position fo the FULL WIDTH slides...

        if (slides.length > 1) {
          landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
        }
      }

      if (options.scrollOverflow) {
        scrollBarHandler.createScrollBarForAll();
      }

      var activeSection = $(SECTION_ACTIVE_SEL)[0];
      var sectionIndex = index(activeSection, SECTION_SEL); //isn't it the first section?

      if (sectionIndex) {
        //adjusting the position for the current section
        silentMoveTo(sectionIndex + 1);
      }

      isResizing = false;

      if (isFunction(options.afterResize) && resizing) {
        options.afterResize.call(container, window.innerWidth, window.innerHeight);
      }

      if (isFunction(options.afterReBuild) && !resizing) {
        options.afterReBuild.call(container);
      }
    }
    /**
     * Determines whether fullpage.js is in responsive mode or not.
     */


    function isResponsiveMode() {
      return hasClass($body, RESPONSIVE);
    }
    /**
     * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
     * are smaller than the set limit values.
     */


    function setResponsive(active) {
      var isResponsive = isResponsiveMode();

      if (active) {
        if (!isResponsive) {
          setAutoScrolling(false, "internal");
          setFitToSection(false, "internal");
          hide($(SECTION_NAV_SEL));
          addClass($body, RESPONSIVE);

          if (isFunction(options.afterResponsive)) {
            options.afterResponsive.call(container, active);
          } //when on page load, we will remove scrolloverflow if necessary


          if (options.scrollOverflow) {
            scrollBarHandler.createScrollBarForAll();
          }
        }
      } else if (isResponsive) {
        setAutoScrolling(originals.autoScrolling, "internal");
        setFitToSection(originals.autoScrolling, "internal");
        show($(SECTION_NAV_SEL));
        removeClass($body, RESPONSIVE);

        if (isFunction(options.afterResponsive)) {
          options.afterResponsive.call(container, active);
        }
      }
    }

    if (container) {
      //public functions
      FP.version = "3.1.1";
      FP.setAutoScrolling = setAutoScrolling;
      FP.setRecordHistory = setRecordHistory;
      FP.setScrollingSpeed = setScrollingSpeed;
      FP.setFitToSection = setFitToSection;
      FP.setLockAnchors = setLockAnchors;
      FP.setMouseWheelScrolling = setMouseWheelScrolling;
      FP.setAllowScrolling = setAllowScrolling;
      FP.setKeyboardScrolling = setKeyboardScrolling;
      FP.moveSectionUp = moveSectionUp;
      FP.moveSectionDown = moveSectionDown;
      FP.silentMoveTo = silentMoveTo;
      FP.moveTo = moveTo;
      FP.moveSlideRight = moveSlideRight;
      FP.moveSlideLeft = moveSlideLeft;
      FP.fitToSection = fitToSection;
      FP.reBuild = reBuild;
      FP.setResponsive = setResponsive;

      FP.getFullpageData = function () {
        return options;
      };

      FP.destroy = destroy;
      FP.getActiveSection = getActiveSection;
      FP.getActiveSlide = getActiveSlide;
      FP.test = {
        top: "0px",
        translate3d: "translate3d(0px, 0px, 0px)",
        translate3dH: function () {
          var a = [];

          for (var i = 0; i < $(options.sectionSelector, container).length; i++) {
            a.push("translate3d(0px, 0px, 0px)");
          }

          return a;
        }(),
        left: function () {
          var a = [];

          for (var i = 0; i < $(options.sectionSelector, container).length; i++) {
            a.push(0);
          }

          return a;
        }(),
        options: options,
        setAutoScrolling: setAutoScrolling
      }; //functions we want to share across files but which are not
      //mean to be used on their own by developers

      FP.shared = {
        afterRenderActions: afterRenderActions,
        isNormalScrollElement: false
      };
      window.fullpage_api = FP; //using jQuery initialization? Creating the $.fn.fullpage object

      if (options.$) {
        Object.keys(FP).forEach(function (key) {
          options.$.fn.fullpage[key] = FP[key];
        });
      }

      init();
      bindEvents();
    }

    function init() {
      //if css3 is not supported, it will use jQuery animations
      if (options.css3) {
        options.css3 = support3d();
      }

      options.scrollBar = options.scrollBar || options.hybrid;
      setOptionsFromDOM();
      prepareDom();
      setAllowScrolling(true);
      setMouseHijack(true);
      setAutoScrolling(options.autoScrolling, "internal");
      responsive(); //setting the class for the body element

      setBodyClass();

      if (document.readyState === "complete") {
        scrollToAnchor();
      }

      window.addEventListener("load", scrollToAnchor); //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file

      if (!options.scrollOverflow) {
        afterRenderActions();
      }

      doubleCheckHeight();
    }

    function bindEvents() {
      //when scrolling...
      window.addEventListener("scroll", scrollHandler); //detecting any change on the URL to scroll to the given anchor link
      //(a way to detect back history button as we play with the hashes on the URL)

      window.addEventListener("hashchange", hashChangeHandler); // on window focus

      window.addEventListener("focus", focusHandler); //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.

      window.addEventListener("blur", blurHandler); //when resizing the site, we adjust the heights of the sections, slimScroll...

      window.addEventListener("resize", resizeHandler); //Sliding with arrow keys, both, vertical and horizontal

      document.addEventListener("keydown", keydownHandler); //to prevent scrolling while zooming

      document.addEventListener("keyup", keyUpHandler); //Scrolls to the section when clicking the navigation bullet
      //simulating the jQuery .on('click') event using delegation

      ["click", "touchstart"].forEach(function (eventName) {
        document.addEventListener(eventName, delegatedEvents);
      });
      /**
       * Applying normalScroll elements.
       * Ignoring the scrolls over the specified selectors.
       */

      if (options.normalScrollElements) {
        ["mouseenter", "touchstart"].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, false);
        });
        ["mouseleave", "touchend"].forEach(function (eventName) {
          forMouseLeaveOrTouch(eventName, true);
        });
      }
    }

    function delegatedEvents(e) {
      var target = e.target;

      if (target && closest(target, SECTION_NAV_SEL + " a")) {
        sectionBulletHandler.call(target, e);
      } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
        tooltipTextHandler.call(target);
      } else if (matches(target, SLIDES_ARROW_SEL)) {
        slideArrowHandler.call(target, e);
      } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
        slideBulletHandler.call(target, e);
      } else if (closest(target, options.menu + " [data-menuanchor]")) {
        menuItemsHandler.call(target, e);
      }
    }

    function forMouseLeaveOrTouch(eventName, allowScrolling) {
      //a way to pass arguments to the onMouseEnterOrLeave function
      document["fp_" + eventName] = allowScrolling;
      document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
    }

    function onMouseEnterOrLeave(e) {
      var type = e.type;
      var isInsideOneNormalScroll = false;
      var isUsingScrollOverflow = options.scrollOverflow; //onMouseLeave will use the destination target, not the one we are moving away from

      var target = type === "mouseleave" ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?

      if (target == document || !target) {
        setMouseHijack(true);

        if (isUsingScrollOverflow) {
          options.scrollOverflowHandler.setIscroll(target, true);
        }

        return;
      }

      if (type === "touchend") {
        g_canFireMouseEnterNormalScroll = false;
        setTimeout(function () {
          g_canFireMouseEnterNormalScroll = true;
        }, 800);
      } //preventing mouseenter event to do anything when coming from a touchEnd event
      //fixing issue #3576


      if (type === "mouseenter" && !g_canFireMouseEnterNormalScroll) {
        return;
      }

      var normalSelectors = options.normalScrollElements.split(",");
      normalSelectors.forEach(function (normalSelector) {
        if (!isInsideOneNormalScroll) {
          var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

          var isNormalScrollChildFocused = closest(target, normalSelector);

          if (isNormalScrollTarget || isNormalScrollChildFocused) {
            if (!FP.shared.isNormalScrollElement) {
              setMouseHijack(false);

              if (isUsingScrollOverflow) {
                options.scrollOverflowHandler.setIscroll(target, false);
              }
            }

            FP.shared.isNormalScrollElement = true;
            isInsideOneNormalScroll = true;
          }
        }
      }); //not inside a single normal scroll element anymore?

      if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
        setMouseHijack(true);

        if (isUsingScrollOverflow) {
          options.scrollOverflowHandler.setIscroll(target, true);
        }

        FP.shared.isNormalScrollElement = false;
      }
    }
    /**
     * Checks the viewport a few times on a define interval of time to
     * see if it has changed in any of those. If that's the case, it resizes.
     */


    function doubleCheckHeight() {
      for (var i = 1; i < 4; i++) {
        g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
      }
    }
    /**
     * Adjusts a section to the viewport if it has changed.
     */


    function adjustToNewViewport() {
      var newWindowHeight = getWindowHeight();
      var newWindowWidth = getWindowWidth();

      if (windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
        windowsHeight = newWindowHeight;
        windowsWidth = newWindowWidth;
        reBuild(true);
      }
    }
    /**
     * Setting options from DOM elements if they are not provided.
     */


    function setOptionsFromDOM() {
      //no anchors option? Checking for them in the DOM attributes
      if (!options.anchors.length) {
        var anchorsAttribute = "[data-anchor]";
        var anchors = $(options.sectionSelector.split(",").join(anchorsAttribute + ",") + anchorsAttribute, container);

        if (anchors.length && anchors.length === $(options.sectionSelector, container).length) {
          g_initialAnchorsInDom = true;
          anchors.forEach(function (item) {
            options.anchors.push(item.getAttribute("data-anchor").toString());
          });
        }
      } //no tooltips option? Checking for them in the DOM attributes


      if (!options.navigationTooltips.length) {
        var tooltipsAttribute = "[data-tooltip]";
        var tooltips = $(options.sectionSelector.split(",").join(tooltipsAttribute + ",") + tooltipsAttribute, container);

        if (tooltips.length) {
          tooltips.forEach(function (item) {
            options.navigationTooltips.push(item.getAttribute("data-tooltip").toString());
          });
        }
      }
    }
    /**
     * Works over the DOM structure to set it up for the current fullpage options.
     */


    function prepareDom() {
      css(container, {
        height: "100%",
        position: "relative"
      }); //adding a class to recognize the container internally in the code

      addClass(container, WRAPPER);
      addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

      windowsHeight = getWindowHeight();
      removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

      addInternalSelectors();
      var sections = $(SECTION_SEL); //styling the sections / slides / menu

      for (var i = 0; i < sections.length; i++) {
        var sectionIndex = i;
        var section = sections[i];
        var slides = $(SLIDE_SEL, section);
        var numSlides = slides.length; //caching the original styles to add them back on destroy('all')

        section.setAttribute("data-fp-styles", section.getAttribute("style"));
        styleSection(section, sectionIndex);
        styleMenu(section, sectionIndex); // if there's any slide

        if (numSlides > 0) {
          styleSlides(section, slides, numSlides);
        } else {
          if (options.verticalCentered) {
            addTableClass(section);
          }
        }
      } //fixed elements need to be moved out of the plugin container due to problems with CSS3.


      if (options.fixedElements && options.css3) {
        $(options.fixedElements).forEach(function (item) {
          $body.appendChild(item);
        });
      } //vertical centered of the navigation + active bullet


      if (options.navigation) {
        addVerticalNavigation();
      }

      enableYoutubeAPI();

      if (options.scrollOverflow) {
        scrollBarHandler = options.scrollOverflowHandler.init(options);
      }
    }
    /**
     * Styles the horizontal slides for a section.
     */


    function styleSlides(section, slides, numSlides) {
      var sliderWidth = numSlides * 100;
      var slideWidth = 100 / numSlides;
      var slidesWrapper = document.createElement("div");
      slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

      wrapAll(slides, slidesWrapper);
      var slidesContainer = document.createElement("div");
      slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

      wrapAll(slides, slidesContainer);
      css($(SLIDES_CONTAINER_SEL, section), {
        width: sliderWidth + "%"
      });

      if (numSlides > 1) {
        if (options.controlArrows) {
          createSlideArrows(section);
        }

        if (options.slidesNavigation) {
          addSlidesNavigation(section, numSlides);
        }
      }

      slides.forEach(function (slide) {
        css(slide, {
          width: slideWidth + "%"
        });

        if (options.verticalCentered) {
          addTableClass(slide);
        }
      });
      var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0]; //if the slide won't be an starting point, the default will be the first one
      //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

      if (startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0)) {
        silentLandscapeScroll(startingSlide, "internal");
      } else {
        addClass(slides[0], ACTIVE);
      }
    }
    /**
     * Styling vertical sections
     */


    function styleSection(section, index) {
      //if no active section is defined, the 1st one will be the default one
      if (!index && $(SECTION_ACTIVE_SEL)[0] == null) {
        addClass(section, ACTIVE);
      }

      startingSection = $(SECTION_ACTIVE_SEL)[0];
      css(section, {
        height: windowsHeight + "px"
      });

      if (options.paddingTop) {
        css(section, {
          "padding-top": options.paddingTop
        });
      }

      if (options.paddingBottom) {
        css(section, {
          "padding-bottom": options.paddingBottom
        });
      }

      if (typeof options.sectionsColor[index] !== "undefined") {
        css(section, {
          "background-color": options.sectionsColor[index]
        });
      }

      if (typeof options.anchors[index] !== "undefined") {
        section.setAttribute("data-anchor", options.anchors[index]);
      }
    }
    /**
     * Sets the data-anchor attributes to the menu elements and activates the current one.
     */


    function styleMenu(section, index) {
      if (typeof options.anchors[index] !== "undefined") {
        //activating the menu / nav element on load
        if (hasClass(section, ACTIVE)) {
          activateMenuAndNav(options.anchors[index], index);
        }
      } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


      if (options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null) {
        $(options.menu).forEach(function (menu) {
          $body.appendChild(menu);
        });
      }
    }
    /**
     * Adds internal classes to be able to provide customizable selectors
     * keeping the link with the style sheet.
     */


    function addInternalSelectors() {
      addClass($(options.sectionSelector, container), SECTION);
      addClass($(options.slideSelector, container), SLIDE);
    }
    /**
     * Creates the control arrows for the given section
     */


    function createSlideArrows(section) {
      var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
      after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

      if (options.controlArrowColor !== "#fff") {
        css($(SLIDES_ARROW_NEXT_SEL, section), {
          "border-color": "transparent transparent transparent " + options.controlArrowColor
        });
        css($(SLIDES_ARROW_PREV_SEL, section), {
          "border-color": "transparent " + options.controlArrowColor + " transparent transparent"
        });
      }

      if (!options.loopHorizontal) {
        hide($(SLIDES_ARROW_PREV_SEL, section));
      }
    }
    /**
     * Creates a vertical navigation bar.
     */


    function addVerticalNavigation() {
      var navigation = document.createElement("div");
      navigation.setAttribute("id", SECTION_NAV);
      var divUl = document.createElement("ul");
      navigation.appendChild(divUl);
      appendTo(navigation, $body);
      var nav = $(SECTION_NAV_SEL)[0];
      addClass(nav, "fp-" + options.navigationPosition);

      if (options.showActiveTooltip) {
        addClass(nav, SHOW_ACTIVE_TOOLTIP);
      }

      var li = "";

      for (var i = 0; i < $(SECTION_SEL).length; i++) {
        var link = "";

        if (options.anchors.length) {
          link = options.anchors[i];
        }

        li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, "Section") + "</span><span></span></a>"; // Only add tooltip if needed (defined by user)

        var tooltip = options.navigationTooltips[i];

        if (typeof tooltip !== "undefined" && tooltip !== "") {
          li += '<div class="' + SECTION_NAV_TOOLTIP + " fp-" + options.navigationPosition + '">' + tooltip + "</div>";
        }

        li += "</li>";
      }

      $("ul", nav)[0].innerHTML = li; //activating the current active section

      var bullet = $("li", $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
      addClass($("a", bullet), ACTIVE);
    }
    /**
     * Gets the name for screen readers for a section/slide navigation bullet.
     */


    function getBulletLinkName(i, defaultName, item) {
      var anchor = defaultName === "Section" ? options.anchors[i] : item.getAttribute("data-anchor");
      return options.navigationTooltips[i] || anchor || defaultName + " " + (i + 1);
    }
    /*
     * Enables the Youtube videos API so we can control their flow if necessary.
     */


    function enableYoutubeAPI() {
      $('iframe[src*="youtube.com/embed/"]', container).forEach(function (item) {
        addURLParam(item, "enablejsapi=1");
      });
    }
    /**
     * Adds a new parameter and its value to the `src` of a given element
     */


    function addURLParam(element, newParam) {
      var originalSrc = element.getAttribute("src");
      element.setAttribute("src", originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
     * Returns the prefix sign to use for a new parameter in an existen URL.
     *
     * @return {String}  ? | &
     */


    function getUrlParamSign(url) {
      return !/\?/.test(url) ? "?" : "&";
    }
    /**
     * Actions and callbacks to fire afterRender
     */


    function afterRenderActions() {
      var section = $(SECTION_ACTIVE_SEL)[0];
      addClass(section, COMPLETELY);
      lazyLoad(section);
      lazyLoadOthers();
      playMedia(section);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.afterLoad();
      }

      if (isDestinyTheStartingSection() && isFunction(options.afterLoad)) {
        fireCallback("afterLoad", {
          activeSection: section,
          element: section,
          direction: null,
          //for backwards compatibility callback (to be removed in a future!)
          anchorLink: section.getAttribute("data-anchor"),
          sectionIndex: index(section, SECTION_SEL)
        });
      }

      if (isFunction(options.afterRender)) {
        fireCallback("afterRender");
      }
    }
    /**
     * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
     */


    function isDestinyTheStartingSection() {
      var anchor = getAnchorsURL();
      var destinationSection = getSectionByAnchor(anchor.section);
      return !anchor.section || !destinationSection || typeof destinationSection !== "undefined" && index(destinationSection) === index(startingSection);
    }

    var isScrolling = false;
    var lastScroll = 0; //when scrolling...

    function scrollHandler() {
      var currentSection;

      if (isResizing) {
        return;
      }

      if (!options.autoScrolling || options.scrollBar) {
        var currentScroll = getScrollTop();
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + getWindowHeight() / 2.0;
        var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
        var sections = $(SECTION_SEL); //when using `auto-height` for a small last section it won't be centered in the viewport

        if (isAtBottom) {
          visibleSectionIndex = sections.length - 1;
        } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
        else if (!currentScroll) {
          visibleSectionIndex = 0;
        } //taking the section which is showing more content in the viewport
        else {
          for (var i = 0; i < sections.length; ++i) {
            var section = sections[i]; // Pick the the last section which passes the middle line of the screen.

            if (section.offsetTop <= screen_mid) {
              visibleSectionIndex = i;
            }
          }
        }

        if (isCompletelyInViewPort(scrollDirection)) {
          if (!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)) {
            addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
            removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
          }
        } //geting the last one, the current one on the screen


        currentSection = sections[visibleSectionIndex]; //setting the visible section as active when manually scrolling
        //executing only once the first time we reach the section

        if (!hasClass(currentSection, ACTIVE)) {
          isScrolling = true;
          var leavingSection = $(SECTION_ACTIVE_SEL)[0];
          var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
          var yMovement = getYmovement(currentSection);
          var anchorLink = currentSection.getAttribute("data-anchor");
          var sectionIndex = index(currentSection, SECTION_SEL) + 1;
          var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
          var slideIndex;
          var slideAnchorLink;
          var callbacksParams = {
            activeSection: leavingSection,
            sectionIndex: sectionIndex - 1,
            anchorLink: anchorLink,
            element: currentSection,
            leavingSection: leavingSectionIndex,
            direction: yMovement
          };

          if (activeSlide) {
            slideAnchorLink = activeSlide.getAttribute("data-anchor");
            slideIndex = index(activeSlide);
          }

          if (canScroll) {
            addClass(currentSection, ACTIVE);
            removeClass(siblings(currentSection), ACTIVE);

            if (isFunction(options.onLeave)) {
              fireCallback("onLeave", callbacksParams);
            }

            if (isFunction(options.afterLoad)) {
              fireCallback("afterLoad", callbacksParams);
            }

            stopMedia(leavingSection);
            lazyLoad(currentSection);
            playMedia(currentSection);
            activateMenuAndNav(anchorLink, sectionIndex - 1);

            if (options.anchors.length) {
              //needed to enter in hashChange event when using the menu with anchor links
              lastScrolledDestiny = anchorLink;
            }

            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
          } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet


          clearTimeout(scrollId);
          scrollId = setTimeout(function () {
            isScrolling = false;
          }, 100);
        }

        if (options.fitToSection) {
          //for the auto adjust of the viewport to fit a whole section
          clearTimeout(scrollId2);
          scrollId2 = setTimeout(function () {
            //checking it again in case it changed during the delay
            if (options.fitToSection && //is the destination element bigger than the viewport?
            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight) {
              fitToSection();
            }
          }, options.fitToSectionDelay);
        }
      }
    }
    /**
     * Fits the site to the nearest active section
     */


    function fitToSection() {
      //checking fitToSection again in case it was set to false before the timeout delay
      if (canScroll) {
        //allows to scroll to an active section and
        //if the section is already active, we prevent firing callbacks
        isResizing = true;
        scrollPage($(SECTION_ACTIVE_SEL)[0]);
        isResizing = false;
      }
    }
    /**
     * Determines whether the active section has seen in its whole or not.
     */


    function isCompletelyInViewPort(movement) {
      var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
      var bottom = top + getWindowHeight();

      if (movement == "up") {
        return bottom >= getScrollTop() + getWindowHeight();
      }

      return top <= getScrollTop();
    }
    /**
     * Determines whether a section is in the viewport or not.
     */


    function isSectionInViewport(el) {
      var rect = el.getBoundingClientRect();
      var top = rect.top;
      var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the
      //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
      //using this prevents from lazyLoading the section that is not yet visible
      //(only 1 pixel offset is)

      var pixelOffset = 2;
      var isTopInView = top + pixelOffset < windowsHeight && top > 0;
      var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;
      return isTopInView || isBottomInView;
    }
    /**
     * Gets the directon of the the scrolling fired by the scroll event.
     */


    function getScrollDirection(currentScroll) {
      var direction = currentScroll > lastScroll ? "down" : "up";
      lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

      previousDestTop = currentScroll;
      return direction;
    }
    /**
     * Determines the way of scrolling up or down:
     * by 'automatically' scrolling a section or by using the default and normal scrolling.
     */


    function scrolling(type) {
      if (!isScrollAllowed.m[type]) {
        return;
      }

      var scrollSection = type === "down" ? moveSectionDown : moveSectionUp;

      if (options.scrollOverflow) {
        var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
        var check = type === "down" ? "bottom" : "top";

        if (scrollable != null) {
          //is the scrollbar at the start/end of the scroll?
          if (options.scrollOverflowHandler.isScrolled(check, scrollable)) {
            scrollSection();
          } else {
            return true;
          }
        } else {
          // moved up/down
          scrollSection();
        }
      } else {
        // moved up/down
        scrollSection();
      }
    }
    /*
     * Preventing bouncing in iOS #2285
     */


    function preventBouncing(e) {
      if (options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up) {
        //preventing the easing on iOS devices
        preventDefault(e);
      }
    }

    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    /* Detecting touch events
            * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
          * This way, the touchstart and the touch moves shows an small difference between them which is the
          * used one to determine the direction.
          */

    function touchMoveHandler(e) {
      var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];

      if (isReallyTouch(e)) {
        if (options.autoScrolling) {
          //preventing the easing on iOS devices
          preventDefault(e);
        }

        var touchEvents = getEventsPage(e);
        touchEndY = touchEvents.y;
        touchEndX = touchEvents.x; //if movement in the X axys is greater than in the Y and the currect section has slides...

        if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
          //is the movement greater than the minimum resistance to scroll?
          if (!slideMoving && Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * options.touchSensitivity) {
            if (touchStartX > touchEndX) {
              if (isScrollAllowed.m.right) {
                moveSlideRight(activeSection); //next
              }
            } else {
              if (isScrollAllowed.m.left) {
                moveSlideLeft(activeSection); //prev
              }
            }
          }
        } //vertical scrolling (only when autoScrolling is enabled)
        else if (options.autoScrolling && canScroll) {
          //is the movement greater than the minimum resistance to scroll?
          if (Math.abs(touchStartY - touchEndY) > window.innerHeight / 100 * options.touchSensitivity) {
            if (touchStartY > touchEndY) {
              scrolling("down");
            } else if (touchEndY > touchStartY) {
              scrolling("up");
            }
          }
        }
      }
    }
    /**
     * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
     * this way we make sure that is really a touch event what IE is detecting.
     */


    function isReallyTouch(e) {
      //if is not IE   ||  IE is detecting `touch` or `pen`
      return typeof e.pointerType === "undefined" || e.pointerType != "mouse";
    }
    /**
     * Handler for the touch start event.
     */


    function touchStartHandler(e) {
      //stopping the auto scroll to adjust to a section
      if (options.fitToSection) {
        activeAnimation = false;
      }

      if (isReallyTouch(e)) {
        var touchEvents = getEventsPage(e);
        touchStartY = touchEvents.y;
        touchStartX = touchEvents.x;
      }
    }
    /**
     * Gets the average of the last `number` elements of the given array.
     */


    function getAverage(elements, number) {
      var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

      var lastElements = elements.slice(Math.max(elements.length - number, 1));

      for (var i = 0; i < lastElements.length; i++) {
        sum = sum + lastElements[i];
      }

      return Math.ceil(sum / number);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */


    var prevTime = new Date().getTime();

    function MouseWheelHandler(e) {
      var curTime = new Date().getTime();
      var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL); //is scroll allowed?

      if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
        preventDefault(e);
        return false;
      } //autoscrolling and not zooming?


      if (options.autoScrolling && !controlPressed && !isNormalScroll) {
        // cross-browser wheel delta
        e = e || window.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));
        var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
        var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection; //Limiting the array to 150 (lets not waste memory!)

        if (scrollings.length > 149) {
          scrollings.shift();
        } //keeping record of the previous scrollings


        scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

        if (options.scrollBar) {
          preventDefault(e);
        } //time difference between the last scroll and the current one


        var timeDiff = curTime - prevTime;
        prevTime = curTime; //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)

        if (timeDiff > 200) {
          //emptying the array, we dont care about old scrollings for our averages
          scrollings = [];
        }

        if (canScroll) {
          var averageEnd = getAverage(scrollings, 10);
          var averageMiddle = getAverage(scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

          if (isAccelerating && isScrollingVertically) {
            //scrolling down?
            if (delta < 0) {
              scrolling("down"); //scrolling up?
            } else {
              scrolling("up");
            }
          }
        }

        return false;
      }

      if (options.fitToSection) {
        //stopping the auto scroll to adjust to a section
        activeAnimation = false;
      }
    }
    /**
     * Slides a slider to the given direction.
     * Optional `section` param.
     */


    function moveSlide(direction, section) {
      var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
      var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0]; // more than one slide needed and nothing should be sliding

      if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
        return;
      }

      var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
      var destiny = null;

      if (direction === "left") {
        destiny = prevUntil(currentSlide, SLIDE_SEL);
      } else {
        destiny = nextUntil(currentSlide, SLIDE_SEL);
      } //isn't there a next slide in the secuence?


      if (destiny == null) {
        //respect loopHorizontal settin
        if (!options.loopHorizontal) return;
        var slideSiblings = siblings(currentSlide);

        if (direction === "left") {
          destiny = slideSiblings[slideSiblings.length - 1]; //last
        } else {
          destiny = slideSiblings[0]; //first
        }
      }

      slideMoving =  true && !FP.test.isTesting;
      landscapeScroll(slides, destiny, direction);
    }
    /**
     * Maintains the active slides in the viewport
     * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
     */


    function keepSlidesPosition() {
      var activeSlides = $(SLIDE_ACTIVE_SEL);

      for (var i = 0; i < activeSlides.length; i++) {
        silentLandscapeScroll(activeSlides[i], "internal");
      }
    }

    var previousDestTop = 0;
    /**
     * Returns the destination Y position based on the scrolling direction and
     * the height of the section.
     */

    function getDestinationPosition(element) {
      var elementHeight = element.offsetHeight;
      var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport

      var position = elementTop;
      var isScrollingDown = elementTop > previousDestTop;
      var sectionBottom = position - windowsHeight + elementHeight;
      var bigSectionsDestination = options.bigSectionsDestination; //is the destination element bigger than the viewport?

      if (elementHeight > windowsHeight) {
        //scrolling up?
        if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === "bottom") {
          position = sectionBottom;
        }
      } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
      else if (isScrollingDown || isResizing && next(element) == null) {
        //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
      }
      /*
               Keeping record of the last scrolled position to determine the scrolling direction.
               No conventional methods can be used as the scroll bar might not be present
               AND the section might not be active if it is auto-height and didnt reach the middle
               of the viewport.
               */


      previousDestTop = position;
      return position;
    }
    /**
     * Scrolls the site to the given element and scrolls to the slide if a callback is given.
     */


    function scrollPage(element, callback, isMovementUp) {
      if (element == null) {
        return;
      } //there's no element to scroll, leaving the function


      var dtop = getDestinationPosition(element);
      var slideAnchorLink;
      var slideIndex; //local variables

      var v = {
        element: element,
        callback: callback,
        isMovementUp: isMovementUp,
        dtop: dtop,
        yMovement: getYmovement(element),
        anchorLink: element.getAttribute("data-anchor"),
        sectionIndex: index(element, SECTION_SEL),
        activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
        activeSection: $(SECTION_ACTIVE_SEL)[0],
        leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: isResizing
      }; //quiting when destination scroll is the same as the current one

      if (v.activeSection == element && !isResizing || options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
        return;
      }

      if (v.activeSlide != null) {
        slideAnchorLink = v.activeSlide.getAttribute("data-anchor");
        slideIndex = index(v.activeSlide);
      } //callback (onLeave) if the site is not just resizing and readjusting the slides


      if (!v.localIsResizing) {
        var direction = v.yMovement; //required for continousVertical

        if (typeof isMovementUp !== "undefined") {
          direction = isMovementUp ? "up" : "down";
        } //for the callback


        v.direction = direction;

        if (isFunction(options.onLeave)) {
          if (fireCallback("onLeave", v) === false) {
            return;
          }
        }
      } // If continuousVertical && we need to wrap around


      if (options.autoScrolling && options.continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == "up" || // Intending to scroll down but about to go up or
      v.isMovementUp && v.yMovement == "down")) {
        // intending to scroll up but about to go down
        v = createInfiniteSections(v);
      } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


      if (!v.localIsResizing) {
        stopMedia(v.activeSection);
      }

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.beforeLeave();
      }

      addClass(element, ACTIVE);
      removeClass(siblings(element), ACTIVE);
      lazyLoad(element);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.onLeave();
      } //preventing from activating the MouseWheelHandler event
      //more than once if the page is scrolling


      canScroll =  false || FP.test.isTesting;
      setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);
      performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

      lastScrolledDestiny = v.anchorLink; //avoid firing it twice (as it does also on scroll)

      activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }
    /**
     * Dispatch events & callbacks making sure it does it on the right format, depending on
     * whether v2compatible is being used or not.
     */


    function fireCallback(eventName, v) {
      var eventData = getEventData(eventName, v);

      if (!options.v2compatible) {
        trigger(container, eventName, eventData);

        if (options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
          return false;
        }
      } else {
        if (options[eventName].apply(eventData[0], eventData.slice(1)) === false) {
          return false;
        }
      }

      return true;
    }
    /**
     * Makes sure to only create a Panel object if the element exist
     */


    function nullOrSection(el) {
      return el ? new Section(el) : null;
    }

    function nullOrSlide(el) {
      return el ? new Slide(el) : null;
    }
    /**
     * Gets the event's data for the given event on the right format. Depending on whether
     * v2compatible is being used or not.
     */


    function getEventData(eventName, v) {
      var paramsPerEvent;

      if (!options.v2compatible) {
        //using functions to run only the necessary bits within the object
        paramsPerEvent = {
          afterRender: function afterRender() {
            return {
              section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
              slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
            };
          },
          onLeave: function onLeave() {
            return {
              origin: nullOrSection(v.activeSection),
              destination: nullOrSection(v.element),
              direction: v.direction
            };
          },
          afterLoad: function afterLoad() {
            return paramsPerEvent.onLeave();
          },
          afterSlideLoad: function afterSlideLoad() {
            return {
              section: nullOrSection(v.section),
              origin: nullOrSlide(v.prevSlide),
              destination: nullOrSlide(v.destiny),
              direction: v.direction
            };
          },
          onSlideLeave: function onSlideLeave() {
            return paramsPerEvent.afterSlideLoad();
          }
        };
      } else {
        paramsPerEvent = {
          afterRender: function afterRender() {
            return [container];
          },
          onLeave: function onLeave() {
            return [v.activeSection, v.leavingSection, v.sectionIndex + 1, v.direction];
          },
          afterLoad: function afterLoad() {
            return [v.element, v.anchorLink, v.sectionIndex + 1];
          },
          afterSlideLoad: function afterSlideLoad() {
            return [v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex];
          },
          onSlideLeave: function onSlideLeave() {
            return [v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.direction, v.slideIndex];
          }
        };
      }

      return paramsPerEvent[eventName]();
    }
    /**
     * Performs the vertical movement (by CSS3 or by jQuery)
     */


    function performMovement(v) {
      var isFastSpeed = options.scrollingSpeed < 700;
      var transitionLapse = isFastSpeed ? 700 : options.scrollingSpeed; // using CSS3 translate functionality

      if (options.css3 && options.autoScrolling && !options.scrollBar) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = "translate3d(0px, -" + Math.round(v.dtop) + "px, 0px)";
        transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();

        if (options.scrollingSpeed) {
          clearTimeout(afterSectionLoadsId);
          afterSectionLoadsId = setTimeout(function () {
            afterSectionLoads(v); //disabling canScroll when using fastSpeed

            canScroll = !isFastSpeed;
          }, options.scrollingSpeed);
        } else {
          afterSectionLoads(v);
        }
      } // using JS to animate
      else {
        var scrollSettings = getScrollSettings(v.dtop);
        FP.test.top = -v.dtop + "px";
        css($htmlBody, {
          "scroll-behavior": "unset"
        });
        scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function () {
          if (options.scrollBar) {
            /* Hack!
                             The timeout prevents setting the most dominant section in the viewport as "active" when the user
                             scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
                               When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                             */
            setTimeout(function () {
              afterSectionLoads(v);
            }, 30);
          } else {
            afterSectionLoads(v); //disabling canScroll when using fastSpeed

            canScroll = !isFastSpeed;
          }
        });
      } // enabling canScroll after the minimum transition laps


      if (isFastSpeed) {
        clearTimeout(g_transitionLapseId);
        g_transitionLapseId = setTimeout(function () {
          canScroll = true;
        }, transitionLapse);
      }
    }
    /**
     * Gets the scrolling settings depending on the plugin autoScrolling option
     */


    function getScrollSettings(top) {
      var scroll = {}; //top property animation

      if (options.autoScrolling && !options.scrollBar) {
        scroll.options = -top;
        scroll.element = $(WRAPPER_SEL)[0];
      } //window real scrolling
      else {
        scroll.options = top;
        scroll.element = window;
      }

      return scroll;
    }
    /**
     * Adds sections before or after the current one to create the infinite effect.
     */


    function createInfiniteSections(v) {
      // Scrolling down
      if (!v.isMovementUp) {
        // Move all previous sections to after the active section
        after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
      } else {
        // Scrolling up
        // Move all next sections to before the active section
        before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
      } // Maintain the displayed position (now that we changed the element order)


      silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition(); // save for later the elements that still need to be reordered

      v.wrapAroundElements = v.activeSection; // Recalculate animation variables

      v.dtop = v.element.offsetTop;
      v.yMovement = getYmovement(v.element);
      return v;
    }
    /**
     * Fix section order after continuousVertical changes have been animated
     */


    function continuousVerticalFixSectionOrder(v) {
      // If continuousVertical is in effect (and autoScrolling would also be in effect then),
      // finish moving the elements around so the direct navigation will function more simply
      if (v.wrapAroundElements == null) {
        return;
      }

      if (v.isMovementUp) {
        before($(SECTION_SEL)[0], v.wrapAroundElements);
      } else {
        after($(SECTION_SEL)[$(SECTION_SEL).length - 1], v.wrapAroundElements);
      }

      silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); // Maintain the active slides visible in the viewport

      keepSlidesPosition();
    }
    /**
     * Actions to do once the section is loaded.
     */


    function afterSectionLoads(v) {
      continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

      if (isFunction(options.afterLoad) && !v.localIsResizing) {
        fireCallback("afterLoad", v);
      }

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.afterLoad();
      }

      if (!v.localIsResizing) {
        playMedia(v.element);
      }

      addClass(v.element, COMPLETELY);
      removeClass(siblings(v.element), COMPLETELY);
      lazyLoadOthers();
      canScroll = true;

      if (isFunction(v.callback)) {
        v.callback();
      }
    }
    /**
     * Sets the value for the given attribute from the `data-` attribute with the same suffix
     * ie: data-srcset ==> srcset  |  data-src ==> src
     */


    function setSrc(element, attribute) {
      element.setAttribute(attribute, element.getAttribute("data-" + attribute));
      element.removeAttribute("data-" + attribute);
    }
    /**
     * Makes sure lazyload is done for other sections in the viewport that are not the
     * active one.
     */


    function lazyLoadOthers() {
      var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply

      if (!options.lazyLoading || !hasAutoHeightSections) {
        return;
      } //making sure to lazy load auto-height sections that are in the viewport


      $(SECTION_SEL + ":not(" + ACTIVE_SEL + ")").forEach(function (section) {
        if (isSectionInViewport(section)) {
          lazyLoad(section);
        }
      });
    }
    /**
     * Lazy loads image, video and audio elements.
     */


    function lazyLoad(destiny) {
      if (!options.lazyLoading) {
        return;
      }

      var panel = getSlideOrSection(destiny);
      $("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", panel).forEach(function (element) {
        ["src", "srcset"].forEach(function (type) {
          var attribute = element.getAttribute("data-" + type);

          if (attribute != null && attribute) {
            setSrc(element, type);
            element.addEventListener("load", function () {
              onMediaLoad(destiny);
            });
          }
        });

        if (matches(element, "source")) {
          var elementToPlay = closest(element, "video, audio");

          if (elementToPlay) {
            elementToPlay.load();

            elementToPlay.onloadeddata = function () {
              onMediaLoad(destiny);
            };
          }
        }
      });
    }
    /**
     * Callback firing when a lazy load media element has loaded.
     * Making sure it only fires one per section in normal conditions (if load time is not huge)
     */


    function onMediaLoad(section) {
      if (options.scrollOverflow) {
        clearTimeout(g_mediaLoadedId);
        g_mediaLoadedId = setTimeout(function () {
          if (!hasClass($body, RESPONSIVE)) {
            scrollBarHandler.createScrollBar(section);
          }
        }, 200);
      }
    }
    /**
     * Plays video and audio elements.
     */


    function playMedia(destiny) {
      var panel = getSlideOrSection(destiny); //playing HTML5 media elements

      $("video, audio", panel).forEach(function (element) {
        if (element.hasAttribute("data-autoplay") && typeof element.play === "function") {
          element.play();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (element.hasAttribute("data-autoplay")) {
          playYoutube(element);
        } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


        element.onload = function () {
          if (element.hasAttribute("data-autoplay")) {
            playYoutube(element);
          }
        };
      });
    }
    /**
     * Plays a youtube video
     */


    function playYoutube(element) {
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    /**
     * Stops video and audio elements.
     */


    function stopMedia(destiny) {
      var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

      $("video, audio", panel).forEach(function (element) {
        if (!element.hasAttribute("data-keepplaying") && typeof element.pause === "function") {
          element.pause();
        }
      }); //youtube videos

      $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
        if (/youtube\.com\/embed\//.test(element.getAttribute("src")) && !element.hasAttribute("data-keepplaying")) {
          element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        }
      });
    }
    /**
     * Gets the active slide (or section) for the given section
     */


    function getSlideOrSection(destiny) {
      var slide = $(SLIDE_ACTIVE_SEL, destiny);

      if (slide.length) {
        destiny = slide[0];
      }

      return destiny;
    }
    /**
     * Scrolls to the anchor in the URL when loading the site
     */


    function scrollToAnchor() {
      var anchors = getAnchorsURL();
      var sectionAnchor = anchors.section;
      var slideAnchor = anchors.slide;

      if (sectionAnchor) {
        //if theres any #
        if (options.animateAnchor) {
          scrollPageAndSlide(sectionAnchor, slideAnchor);
        } else {
          silentMoveTo(sectionAnchor, slideAnchor);
        }
      }
    }
    /**
     * Detecting any change on the URL to scroll to the given anchor link
     * (a way to detect back history button as we play with the hashes on the URL)
     */


    function hashChangeHandler() {
      if (!isScrolling && !options.lockAnchors) {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

        var isFirstSlideMove = typeof lastScrolledDestiny === "undefined";
        var isFirstScrollMove = typeof lastScrolledDestiny === "undefined" && typeof slideAnchor === "undefined" && !slideMoving;

        if (sectionAnchor && sectionAnchor.length) {
          /*in order to call scrollpage() only once for each destination at a time
                         It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                         event is fired on every scroll too.*/
          if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) {
            scrollPageAndSlide(sectionAnchor, slideAnchor);
          }
        }
      }
    } //gets the URL anchors (section and slide)


    function getAnchorsURL() {
      var section;
      var slide;
      var hash = window.location.hash;

      if (hash.length) {
        //getting the anchor link in the URL and deleting the `#`
        var anchorsParts = hash.replace("#", "").split("/"); //using / for visual reasons and not as a section/slide separator #2803

        var isFunkyAnchor = hash.indexOf("#/") > -1;
        section = isFunkyAnchor ? "/" + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

        if (slideAnchor && slideAnchor.length) {
          slide = decodeURIComponent(slideAnchor);
        }
      }

      return {
        section: section,
        slide: slide
      };
    } //Sliding with arrow keys, both, vertical and horizontal


    function keydownHandler(e) {
      clearTimeout(keydownId);
      var activeElement = document.activeElement;
      var keyCode = e.keyCode; //tab?

      if (keyCode === 9) {
        onTab(e);
      } else if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select") && activeElement.getAttribute("contentEditable") !== "true" && activeElement.getAttribute("contentEditable") !== "" && options.keyboardScrolling && options.autoScrolling) {
        //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
        var keyControls = [40, 38, 32, 33, 34];

        if (keyControls.indexOf(keyCode) > -1) {
          preventDefault(e);
        }

        controlPressed = e.ctrlKey;
        keydownId = setTimeout(function () {
          onkeydown(e);
        }, 150);
      }
    }

    function tooltipTextHandler() {
      /*jshint validthis:true */
      trigger(prev(this), "click");
    } //to prevent scrolling while zooming


    function keyUpHandler(e) {
      if (isWindowFocused) {
        //the keyup gets fired on new tab ctrl + t in Firefox
        controlPressed = e.ctrlKey;
      }
    } //binding the mousemove when the mouse's middle button is released


    function mouseDownHandler(e) {
      //middle button
      if (e.which == 2) {
        oldPageY = e.pageY;
        container.addEventListener("mousemove", mouseMoveHandler);
      }
    } //unbinding the mousemove when the mouse's middle button is released


    function mouseUpHandler(e) {
      //middle button
      if (e.which == 2) {
        container.removeEventListener("mousemove", mouseMoveHandler);
      }
    }
    /**
     * Makes sure the tab key will only focus elements within the current section/slide
     * preventing this way from breaking the page.
     * Based on "Modals and keyboard traps"
     * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
     */


    function onTab(e) {
      var isShiftPressed = e.shiftKey;
      var activeElement = document.activeElement;
      var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));

      function preventAndFocusFirst(e) {
        preventDefault(e);
        return focusableElements[0] ? focusableElements[0].focus() : null;
      } //outside any section or slide? Let's not hijack the tab!


      if (isFocusOutside(e)) {
        return;
      } //is there an element with focus?


      if (activeElement) {
        if (closest(activeElement, SECTION_ACTIVE_SEL + "," + SECTION_ACTIVE_SEL + " " + SLIDE_ACTIVE_SEL) == null) {
          activeElement = preventAndFocusFirst(e);
        }
      } //no element if focused? Let's focus the first one of the section/slide
      else {
        preventAndFocusFirst(e);
      } //when reached the first or last focusable element of the section/slide
      //we prevent the tab action to keep it in the last focusable element


      if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) {
        preventDefault(e);
      }
    }
    /**
     * Gets all the focusable elements inside the passed element.
     */


    function getFocusables(el) {
      return [].slice.call($(focusableElementsString, el)).filter(function (item) {
        return item.getAttribute("tabindex") !== "-1" && //are also not hidden elements (or with hidden parents)
        item.offsetParent !== null;
      });
    }
    /**
     * Determines whether the focus is outside fullpage.js sections/slides or not.
     */


    function isFocusOutside(e) {
      var allFocusables = getFocusables(document);
      var currentFocusIndex = allFocusables.indexOf(document.activeElement);
      var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
      var focusDestination = allFocusables[focusDestinationIndex];
      var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
      var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));
      return !destinationItemSlide && !destinationItemSection;
    } //Scrolling horizontally when clicking on the slider controls.


    function slideArrowHandler() {
      /*jshint validthis:true */
      var section = closest(this, SECTION_SEL);
      /*jshint validthis:true */

      if (hasClass(this, SLIDES_PREV)) {
        if (isScrollAllowed.m.left) {
          moveSlideLeft(section);
        }
      } else {
        if (isScrollAllowed.m.right) {
          moveSlideRight(section);
        }
      }
    } // changing isWindowFocused to true on focus event


    function focusHandler() {
      isWindowFocused = true;
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.


    function blurHandler() {
      isWindowFocused = false;
      controlPressed = false;
    } //Scrolls to the section when clicking the navigation bullet


    function sectionBulletHandler(e) {
      preventDefault(e);
      /*jshint validthis:true */

      var indexBullet = index(closest(this, SECTION_NAV_SEL + " li"));
      scrollPage($(SECTION_SEL)[indexBullet]);
    } //Scrolls the slider to the given slide destination for the given section


    function slideBulletHandler(e) {
      preventDefault(e);
      /*jshint validthis:true */

      var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
      var destiny = $(SLIDE_SEL, slides)[index(closest(this, "li"))];
      landscapeScroll(slides, destiny);
    } //Menu item handler when not using anchors or using lockAnchors:true


    function menuItemsHandler(e) {
      if ($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)) {
        preventDefault(e);
        /*jshint validthis:true */

        moveTo(this.getAttribute("data-menuanchor"));
      }
    }
    /**
     * Keydown event
     */


    function onkeydown(e) {
      var shiftPressed = e.shiftKey;
      var activeElement = document.activeElement;
      var isMediaFocused = matches(activeElement, "video") || matches(activeElement, "audio"); //do nothing if we can not scroll or we are not using horizotnal key arrows.

      if (!canScroll && [37, 39].indexOf(e.keyCode) < 0) {
        return;
      }

      switch (e.keyCode) {
        //up
        case 38:
        case 33:
          if (isScrollAllowed.k.up) {
            moveSectionUp();
          }

          break;
        //down

        case 32:
          //spacebar
          if (shiftPressed && isScrollAllowed.k.up && !isMediaFocused) {
            moveSectionUp();
            break;
          }

        /* falls through */

        case 40:
        case 34:
          if (isScrollAllowed.k.down) {
            // space bar?
            if (e.keyCode !== 32 || !isMediaFocused) {
              moveSectionDown();
            }
          }

          break;
        //Home

        case 36:
          if (isScrollAllowed.k.up) {
            moveTo(1);
          }

          break;
        //End

        case 35:
          if (isScrollAllowed.k.down) {
            moveTo($(SECTION_SEL).length);
          }

          break;
        //left

        case 37:
          if (isScrollAllowed.k.left) {
            moveSlideLeft();
          }

          break;
        //right

        case 39:
          if (isScrollAllowed.k.right) {
            moveSlideRight();
          }

          break;

        default:
          return;
        // exit this handler for other keys
      }
    }
    /**
     * Detecting the direction of the mouse movement.
     * Used only for the middle button of the mouse.
     */


    var oldPageY = 0;

    function mouseMoveHandler(e) {
      if (!options.autoScrolling) {
        return;
      }

      if (canScroll) {
        // moving up
        if (e.pageY < oldPageY && isScrollAllowed.m.up) {
          moveSectionUp();
        } // moving down
        else if (e.pageY > oldPageY && isScrollAllowed.m.down) {
          moveSectionDown();
        }
      }

      oldPageY = e.pageY;
    }
    /**
     * Scrolls horizontal sliders.
     */


    function landscapeScroll(slides, destiny, direction) {
      var section = closest(slides, SECTION_SEL);
      var v = {
        slides: slides,
        destiny: destiny,
        direction: direction,
        destinyPos: {
          left: destiny.offsetLeft
        },
        slideIndex: index(destiny),
        section: section,
        sectionIndex: index(section, SECTION_SEL),
        anchorLink: section.getAttribute("data-anchor"),
        slidesNav: $(SLIDES_NAV_SEL, section)[0],
        slideAnchor: getAnchor(destiny),
        prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
        prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: isResizing
      };
      v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
      v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing

      if (!v.localIsResizing) {
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        canScroll = false;
      }

      if (options.onSlideLeave) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing && v.xMovement !== "none") {
          if (isFunction(options.onSlideLeave)) {
            if (fireCallback("onSlideLeave", v) === false) {
              slideMoving = false;
              return;
            }
          }
        }
      }

      addClass(destiny, ACTIVE);
      removeClass(siblings(destiny), ACTIVE);

      if (!v.localIsResizing) {
        stopMedia(v.prevSlide);
        lazyLoad(destiny);
      }

      if (!options.loopHorizontal && options.controlArrows) {
        //hidding it for the fist slide, showing for the rest
        toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

        toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
      } //only changing the URL if the slides are in the current section (not for resize re-adjusting)


      if (hasClass(section, ACTIVE) && !v.localIsResizing) {
        setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
      }

      performHorizontalMove(slides, v, true);
    }

    function afterSlideLoads(v) {
      activeSlidesNavigation(v.slidesNav, v.slideIndex); //if the site is not just resizing and readjusting the slides

      if (!v.localIsResizing) {
        if (isFunction(options.afterSlideLoad)) {
          fireCallback("afterSlideLoad", v);
        } //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize


        canScroll = true;
        playMedia(v.destiny);
      } //letting them slide again


      slideMoving = false;
    }
    /**
     * Performs the horizontal movement. (CSS3 or jQuery)
     *
     * @param fireCallback {Bool} - determines whether or not to fire the callback
     */


    function performHorizontalMove(slides, v, fireCallback) {
      var destinyPos = v.destinyPos;

      if (options.css3) {
        var translate3d = "translate3d(-" + Math.round(destinyPos.left) + "px, 0px, 0px)";
        FP.test.translate3dH[v.sectionIndex] = translate3d;
        css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
        afterSlideLoadsId = setTimeout(function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        }, options.scrollingSpeed);
      } else {
        FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
        scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function () {
          if (fireCallback) {
            afterSlideLoads(v);
          }
        });
      }
    }
    /**
     * Sets the state for the horizontal bullet navigations.
     */


    function activeSlidesNavigation(slidesNav, slideIndex) {
      if (options.slidesNavigation && slidesNav != null) {
        removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
        addClass($("a", $("li", slidesNav)[slideIndex]), ACTIVE);
      }
    }

    var previousHeight = windowsHeight;
    /*
     * Resize event handler.
     */

    function resizeHandler() {
      clearTimeout(resizeId); //in order to call the functions only when the resize is finished
      //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing

      resizeId = setTimeout(function () {
        //issue #3336
        //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
        //so we check it 3 times with intervals in that case
        for (var i = 0; i < 4; i++) {
          resizeHandlerId = setTimeout(resizeActions, 200 * i);
        }
      }, 200);
    }
    /**
     * When resizing the site, we adjust the heights of the sections, slimScroll...
     */


    function resizeActions() {
      isResizing = true; //checking if it needs to get responsive

      responsive(); // rebuild immediately on touch devices

      if (isTouchDevice) {
        var activeElement = document.activeElement; //if the keyboard is NOT visible

        if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select")) {
          var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

          if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
            reBuild(true);
            previousHeight = currentHeight;
          }
        }
      } else {
        adjustToNewViewport();
      }

      isResizing = false;
    }
    /**
     * Checks if the site needs to get responsive and disables autoScrolling if so.
     * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
     */


    function responsive() {
      var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity

      var heightLimit = options.responsiveHeight; //only calculating what we need. Remember its called on the resize event.

      var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
      var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

      if (widthLimit && heightLimit) {
        setResponsive(isBreakingPointWidth || isBreakingPointHeight);
      } else if (widthLimit) {
        setResponsive(isBreakingPointWidth);
      } else if (heightLimit) {
        setResponsive(isBreakingPointHeight);
      }
    }
    /**
     * Adds transition animations for the given element
     */


    function addAnimation(element) {
      var transition = "all " + options.scrollingSpeed + "ms " + options.easingcss3;
      removeClass(element, NO_TRANSITION);
      return css(element, {
        "-webkit-transition": transition,
        transition: transition
      });
    }
    /**
     * Remove transition animations for the given element
     */


    function removeAnimation(element) {
      return addClass(element, NO_TRANSITION);
    }
    /**
     * Activating the vertical navigation bullets according to the given slide name.
     */


    function activateNavDots(name, sectionIndex) {
      if (options.navigation && $(SECTION_NAV_SEL)[0] != null) {
        removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);

        if (name) {
          addClass($('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
        } else {
          addClass($("a", $("li", $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
        }
      }
    }
    /**
     * Activating the website main menu elements according to the given slide name.
     */


    function activateMenuElement(name) {
      $(options.menu).forEach(function (menu) {
        if (options.menu && menu != null) {
          removeClass($(ACTIVE_SEL, menu), ACTIVE);
          addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
        }
      });
    }
    /**
     * Sets to active the current menu and vertical nav items.
     */


    function activateMenuAndNav(anchor, index) {
      activateMenuElement(anchor);
      activateNavDots(anchor, index);
    }
    /**
     * Retuns `up` or `down` depending on the scrolling movement to reach its destination
     * from the current section.
     */


    function getYmovement(destiny) {
      var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
      var toIndex = index(destiny, SECTION_SEL);

      if (fromIndex == toIndex) {
        return "none";
      }

      if (fromIndex > toIndex) {
        return "up";
      }

      return "down";
    }
    /**
     * Retuns `right` or `left` depending on the scrolling movement to reach its destination
     * from the current slide.
     */


    function getXmovement(fromIndex, toIndex) {
      if (fromIndex == toIndex) {
        return "none";
      }

      if (fromIndex > toIndex) {
        return "left";
      }

      return "right";
    }

    function addTableClass(element) {
      //In case we are styling for the 2nd time as in with reponsiveSlides
      if (!hasClass(element, TABLE)) {
        var wrapper = document.createElement("div");
        wrapper.className = TABLE_CELL;
        wrapper.style.height = getTableHeight(element) + "px";
        addClass(element, TABLE);
        wrapInner(element, wrapper);
      }
    }

    function getTableHeight(element) {
      var sectionHeight = windowsHeight;

      if (options.paddingTop || options.paddingBottom) {
        var section = element;

        if (!hasClass(section, SECTION)) {
          section = closest(element, SECTION_SEL);
        }

        var paddings = parseInt(getComputedStyle(section)["padding-top"]) + parseInt(getComputedStyle(section)["padding-bottom"]);
        sectionHeight = windowsHeight - paddings;
      }

      return sectionHeight;
    }
    /**
     * Adds a css3 transform property to the container class with or without animation depending on the animated param.
     */


    function transformContainer(translate3d, animated) {
      if (animated) {
        addAnimation(container);
      } else {
        removeAnimation(container);
      }

      css(container, getTransforms(translate3d));
      FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.

      setTimeout(function () {
        removeClass(container, NO_TRANSITION);
      }, 10);
    }
    /**
     * Gets a section by its anchor / index
     */


    function getSectionByAnchor(sectionAnchor) {
      var section = $(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]', container)[0];

      if (!section) {
        var sectionIndex = typeof sectionAnchor !== "undefined" ? sectionAnchor - 1 : 0;
        section = $(SECTION_SEL)[sectionIndex];
      }

      return section;
    }
    /**
     * Gets a slide inside a given section by its anchor / index
     */


    function getSlideByAnchor(slideAnchor, section) {
      var slide = $(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]', section)[0];

      if (slide == null) {
        slideAnchor = typeof slideAnchor !== "undefined" ? slideAnchor : 0;
        slide = $(SLIDE_SEL, section)[slideAnchor];
      }

      return slide;
    }
    /**
     * Scrolls to the given section and slide anchors
     */


    function scrollPageAndSlide(sectionAnchor, slideAnchor) {
      var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

      if (section == null) return;
      var slide = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

      if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)) {
        scrollPage(section, function () {
          scrollSlider(slide);
        });
      } //if we were already in the section
      else {
        scrollSlider(slide);
      }
    }
    /**
     * Scrolls the slider to the given slide destination for the given section
     */


    function scrollSlider(slide) {
      if (slide != null) {
        landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
      }
    }
    /**
     * Creates a landscape navigation bar with dots for horizontal sliders.
     */


    function addSlidesNavigation(section, numSlides) {
      appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
      var nav = $(SLIDES_NAV_SEL, section)[0]; //top or bottom

      addClass(nav, "fp-" + options.slidesNavPosition);

      for (var i = 0; i < numSlides; i++) {
        var slide = $(SLIDE_SEL, section)[i];
        appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, "Slide", slide) + "</span><span></span></a></li>"), $("ul", nav)[0]);
      } //centering it


      css(nav, {
        "margin-left": "-" + nav.innerWidth / 2 + "px"
      });
      addClass($("a", $("li", nav)[0]), ACTIVE);
    }
    /**
     * Sets the state of the website depending on the active section/slide.
     * It changes the URL hash when needed and updates the body class.
     */


    function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
      var sectionHash = "";

      if (options.anchors.length && !options.lockAnchors) {
        //isn't it the first slide?
        if (slideIndex) {
          if (anchorLink != null) {
            sectionHash = anchorLink;
          } //slide without anchor link? We take the index instead.


          if (slideAnchor == null) {
            slideAnchor = slideIndex;
          }

          lastScrolledSlide = slideAnchor;
          setUrlHash(sectionHash + "/" + slideAnchor); //first slide won't have slide anchor, just the section one
        } else if (slideIndex != null) {
          lastScrolledSlide = slideAnchor;
          setUrlHash(anchorLink);
        } //section without slides
        else {
          setUrlHash(anchorLink);
        }
      }

      setBodyClass();
    }
    /**
     * Sets the URL hash.
     */


    function setUrlHash(url) {
      if (options.recordHistory) {
        location.hash = url;
      } else {
        //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) {
          window.history.replaceState(undefined, undefined, "#" + url);
        } else {
          var baseUrl = window.location.href.split("#")[0];
          window.location.replace(baseUrl + "#" + url);
        }
      }
    }
    /**
     * Gets the anchor for the given slide / section. Its index will be used if there's none.
     */


    function getAnchor(element) {
      if (!element) {
        return null;
      }

      var anchor = element.getAttribute("data-anchor");
      var elementIndex = index(element); //Slide without anchor link? We take the index instead.

      if (anchor == null) {
        anchor = elementIndex;
      }

      return anchor;
    }
    /**
     * Sets a class for the body of the page depending on the active section / slide
     */


    function setBodyClass() {
      var section = $(SECTION_ACTIVE_SEL)[0];
      var slide = $(SLIDE_ACTIVE_SEL, section)[0];
      var sectionAnchor = getAnchor(section);
      var slideAnchor = getAnchor(slide);
      var text = String(sectionAnchor);

      if (slide) {
        text = text + "-" + slideAnchor;
      } //changing slash for dash to make it a valid CSS style


      text = text.replace("/", "-").replace("#", ""); //removing previous anchor classes

      var classRe = new RegExp("\\b\\s?" + VIEWING_PREFIX + "-[^\\s]+\\b", "g");
      $body.className = $body.className.replace(classRe, ""); //adding the current anchor

      addClass($body, VIEWING_PREFIX + "-" + text);
    }
    /**
     * Checks for translate3d support
     * @return boolean
     * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
     */


    function support3d() {
      var el = document.createElement("p"),
          has3d,
          transforms = {
        webkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        msTransform: "-ms-transform",
        MozTransform: "-moz-transform",
        transform: "transform"
      }; //preventing the style p:empty{display: none;} from returning the wrong result

      el.style.display = "block"; // Add it to the body to get the computed style.

      document.body.insertBefore(el, null);

      for (var t in transforms) {
        if (el.style[t] !== undefined) {
          el.style[t] = "translate3d(1px,1px,1px)";
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
      }

      document.body.removeChild(el);
      return has3d !== undefined && has3d.length > 0 && has3d !== "none";
    }
    /**
     * Removes the auto scrolling action fired by the mouse wheel and trackpad.
     * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
     */


    function removeMouseWheelHandler() {
      if (document.addEventListener) {
        document.removeEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

        document.removeEventListener("wheel", MouseWheelHandler, false); //Firefox

        document.removeEventListener("MozMousePixelScroll", MouseWheelHandler, false); //old Firefox
      } else {
        document.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
      }
    }
    /**
     * Adds the auto scrolling action for the mouse wheel and trackpad.
     * After this function is called, the mousewheel and trackpad movements will scroll through sections
     * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
     */


    function addMouseWheelHandler() {
      var prefix = "";

      var _addEventListener;

      if (window.addEventListener) {
        _addEventListener = "addEventListener";
      } else {
        _addEventListener = "attachEvent";
        prefix = "on";
      } // detect available wheel event


      var support = "onwheel" in document.createElement("div") ? "wheel" // Modern browsers support "wheel"
      : document.onmousewheel !== undefined ? "mousewheel" // Webkit and IE support at least "mousewheel"
      : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

      var passiveEvent = g_supportsPassive ? {
        passive: false
      } : false;

      if (support == "DOMMouseScroll") {
        document[_addEventListener](prefix + "MozMousePixelScroll", MouseWheelHandler, passiveEvent);
      } //handle MozMousePixelScroll in older Firefox
      else {
        document[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
      }
    }
    /**
     * Binding the mousemove when the mouse's middle button is pressed
     */


    function addMiddleWheelHandler() {
      container.addEventListener("mousedown", mouseDownHandler);
      container.addEventListener("mouseup", mouseUpHandler);
    }
    /**
     * Unbinding the mousemove when the mouse's middle button is released
     */


    function removeMiddleWheelHandler() {
      container.removeEventListener("mousedown", mouseDownHandler);
      container.removeEventListener("mouseup", mouseUpHandler);
    }
    /**
     * Adds the possibility to auto scroll through sections on touch devices.
     */


    function addTouchHandler() {
      if (isTouchDevice || isTouch) {
        if (options.autoScrolling) {
          $body.removeEventListener(events.touchmove, preventBouncing, {
            passive: false
          });
          $body.addEventListener(events.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = options.touchWrapper;
        touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
        touchWrapper.addEventListener(events.touchstart, touchStartHandler);
        touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /**
     * Removes the auto scrolling for touch devices.
     */


    function removeTouchHandler() {
      if (isTouchDevice || isTouch) {
        // normalScrollElements requires it off #2691
        if (options.autoScrolling) {
          $body.removeEventListener(events.touchmove, touchMoveHandler, {
            passive: false
          });
          $body.removeEventListener(events.touchmove, preventBouncing, {
            passive: false
          });
        }

        var touchWrapper = options.touchWrapper;
        touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
        touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
      }
    }
    /*
     * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
     * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
     */


    function getMSPointer() {
      var pointer; //IE >= 11 & rest of browsers

      if (window.PointerEvent) {
        pointer = {
          down: "pointerdown",
          move: "pointermove"
        };
      } //IE < 11
      else {
        pointer = {
          down: "MSPointerDown",
          move: "MSPointerMove"
        };
      }

      return pointer;
    }
    /**
     * Gets the pageX and pageY properties depending on the browser.
     * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
     */


    function getEventsPage(e) {
      var events = [];
      events.y = typeof e.pageY !== "undefined" && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
      events.x = typeof e.pageX !== "undefined" && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

      if (isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== "undefined") {
        events.y = e.touches[0].pageY;
        events.x = e.touches[0].pageX;
      }

      return events;
    }
    /**
     * Slides silently (with no animation) the active slider to the given slide.
     * @param noCallback {bool} true or defined -> no callbacks
     */


    function silentLandscapeScroll(activeSlide, noCallbacks) {
      setScrollingSpeed(0, "internal");

      if (typeof noCallbacks !== "undefined") {
        //preventing firing callbacks afterSlideLoad etc.
        isResizing = true;
      }

      landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

      if (typeof noCallbacks !== "undefined") {
        isResizing = false;
      }

      setScrollingSpeed(originals.scrollingSpeed, "internal");
    }
    /**
     * Scrolls silently (with no animation) the page to the given Y position.
     */


    function silentScroll(top) {
      // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
      // that's why we round it to 0.
      var roundedTop = Math.round(top);

      if (options.css3 && options.autoScrolling && !options.scrollBar) {
        var translate3d = "translate3d(0px, -" + roundedTop + "px, 0px)";
        transformContainer(translate3d, false);
      } else if (options.autoScrolling && !options.scrollBar) {
        css(container, {
          top: -roundedTop + "px"
        });
        FP.test.top = -roundedTop + "px";
      } else {
        var scrollSettings = getScrollSettings(roundedTop);
        setScrolling(scrollSettings.element, scrollSettings.options);
      }
    }
    /**
     * Returns the cross-browser transform string.
     */


    function getTransforms(translate3d) {
      return {
        "-webkit-transform": translate3d,
        "-moz-transform": translate3d,
        "-ms-transform": translate3d,
        transform: translate3d
      };
    }
    /**
     * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
     * @type  m (mouse) or k (keyboard)
     */


    function setIsScrollAllowed(value, direction, type) {
      //up, down, left, right
      if (direction !== "all") {
        isScrollAllowed[type][direction] = value;
      } //all directions?
      else {
        Object.keys(isScrollAllowed[type]).forEach(function (key) {
          isScrollAllowed[type][key] = value;
        });
      }
    }
    /*
     * Destroys fullpage.js plugin events and optinally its html markup and styles
     */


    function destroy(all) {
      setAutoScrolling(false, "internal");
      setAllowScrolling(true);
      setMouseHijack(false);
      setKeyboardScrolling(false);
      addClass(container, DESTROYED);
      [afterSlideLoadsId, afterSectionLoadsId, resizeId, scrollId, scrollId2, g_doubleCheckHeightId, resizeHandlerId, g_transitionLapseId].forEach(function (timeoutId) {
        clearTimeout(timeoutId);
      });
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("hashchange", hashChangeHandler);
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener("keydown", keydownHandler);
      document.removeEventListener("keyup", keyUpHandler);
      ["click", "touchstart"].forEach(function (eventName) {
        document.removeEventListener(eventName, delegatedEvents);
      });
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (eventName) {
        document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
      }); //lets make a mess!

      if (all) {
        destroyStructure();
      }
    }
    /*
     * Removes inline styles added by fullpage.js
     */


    function destroyStructure() {
      //reseting the `top` or `translate` properties to 0
      silentScroll(0); //loading all the lazy load content

      $("img[data-src], source[data-src], audio[data-src], iframe[data-src]", container).forEach(function (item) {
        setSrc(item, "src");
      });
      $("img[data-srcset]").forEach(function (item) {
        setSrc(item, "srcset");
      });
      remove($(SECTION_NAV_SEL + ", " + SLIDES_NAV_SEL + ", " + SLIDES_ARROW_SEL)); //removing inline styles

      css($(SECTION_SEL), {
        height: "",
        "background-color": "",
        padding: ""
      });
      css($(SLIDE_SEL), {
        width: ""
      });
      css(container, {
        height: "",
        position: "",
        "-ms-touch-action": "",
        "touch-action": ""
      });
      css($htmlBody, {
        overflow: "",
        height: ""
      }); // remove .fp-enabled class

      removeClass($html, ENABLED); // remove .fp-responsive class

      removeClass($body, RESPONSIVE); // remove all of the .fp-viewing- classes

      $body.className.split(/\s+/).forEach(function (className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
          removeClass($body, className);
        }
      }); //removing added classes

      $(SECTION_SEL + ", " + SLIDE_SEL).forEach(function (item) {
        if (options.scrollOverflowHandler && options.scrollOverflow) {
          options.scrollOverflowHandler.remove(item);
        }

        removeClass(item, TABLE + " " + ACTIVE + " " + COMPLETELY);
        var previousStyles = item.getAttribute("data-fp-styles");

        if (previousStyles) {
          item.setAttribute("style", item.getAttribute("data-fp-styles"));
        } //removing anchors if they were not set using the HTML markup


        if (hasClass(item, SECTION) && !g_initialAnchorsInDom) {
          item.removeAttribute("data-anchor");
        }
      }); //removing the applied transition from the fullpage wrapper

      removeAnimation(container); //Unwrapping content

      [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function (selector) {
        $(selector, container).forEach(function (item) {
          //unwrap not being use in case there's no child element inside and its just text
          unwrap(item);
        });
      }); //removing the applied transition from the fullpage wrapper

      css(container, {
        "-webkit-transition": "none",
        transition: "none"
      }); //scrolling the page to the top with no animation

      window.scrollTo(0, 0); //removing selectors

      var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
      usedSelectors.forEach(function (item) {
        removeClass($("." + item), item);
      });
    }
    /*
     * Sets the state for a variable with multiple states (original, and temporal)
     * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
     * This function is used to keep track of both states, the original and the temporal one.
     * If type is not 'internal', then we assume the user is globally changing the variable.
     */


    function setVariableState(variable, value, type) {
      options[variable] = value;

      if (type !== "internal") {
        originals[variable] = value;
      }
    }
    /**
     * Displays warnings
     */


    function displayWarnings() {
      var l = options["li" + "c" + "enseK" + "e" + "y"];
      var msgStyle = "font-size: 15px;background:yellow;";

      if (!isOK) {
        showError("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:");
        showError("error", "https://github.com/alvarotrigo/fullPage.js#options");
      } else if (l && l.length < 20) {
        console.warn("%c This website was made using fullPage.js slider. More info on the following website:", msgStyle);
        console.warn("%c https://alvarotrigo.com/fullPage/", msgStyle);
      }

      if (hasClass($html, ENABLED)) {
        showError("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
        return;
      } // Disable mutually exclusive settings


      if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
        options.continuousVertical = false;
        showError("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
      }

      if (options.scrollOverflow && (options.scrollBar || !options.autoScrolling)) {
        showError("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox");
      }

      if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
        options.continuousVertical = false;
        showError("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
      }

      if (options.scrollOverflow && options.scrollOverflowHandler == null) {
        options.scrollOverflow = false;
        showError("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.");
      } //using extensions? Wrong file!


      extensions.forEach(function (extension) {
        //is the option set to true?
        if (options[extension]) {
          showError("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + extension);
        }
      }); //anchors can not have the same value as any element ID or NAME

      options.anchors.forEach(function (name) {
        //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
        var nameAttr = [].slice.call($("[name]")).filter(function (item) {
          return item.getAttribute("name") && item.getAttribute("name").toLowerCase() == name.toLowerCase();
        });
        var idAttr = [].slice.call($("[id]")).filter(function (item) {
          return item.getAttribute("id") && item.getAttribute("id").toLowerCase() == name.toLowerCase();
        });

        if (idAttr.length || nameAttr.length) {
          showError("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var propertyName = idAttr.length ? "id" : "name";

          if (idAttr.length || nameAttr.length) {
            showError("error", '"' + name + '" is is being used by another element `' + propertyName + "` property");
          }
        }
      });
    }
    /**
     * Getting the position of the element to scroll when using jQuery animations
     */


    function getScrolledPosition(element) {
      var position; //is not the window element and is a slide?

      if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        position = element.scrollLeft;
      } else if (!options.autoScrolling || options.scrollBar) {
        position = getScrollTop();
      } else {
        position = element.offsetTop;
      } //gets the top property of the wrapper


      return position;
    }
    /**
     * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
     * http://stackoverflow.com/a/16136789/1081396
     */


    function scrollTo(element, to, duration, callback) {
      var start = getScrolledPosition(element);
      var change = to - start;
      var currentTime = 0;
      var increment = 20;
      activeAnimation = true;

      var animateScroll = function animateScroll() {
        if (activeAnimation) {
          //in order to stope it from other function whenever we want
          var val = to;
          currentTime += increment;

          if (duration) {
            val = window.fp_easings[options.easing](currentTime, start, change, duration);
          }

          setScrolling(element, val);

          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          } else if (typeof callback !== "undefined") {
            callback();
          }
        } else if (currentTime < duration) {
          callback();
        }
      };

      animateScroll();
    }
    /**
     * Scrolls the page / slider the given number of pixels.
     * It will do it one or another way dependiong on the library's config.
     */


    function setScrolling(element, val) {
      if (!options.autoScrolling || options.scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        //scrolling horizontally through the slides?
        if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
          element.scrollLeft = val;
        } //vertical scroll
        else {
          element.scrollTo(0, val);
        }
      } else {
        element.style.top = val + "px";
      }
    }
    /**
     * Gets the active slide.
     */


    function getActiveSlide() {
      var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
      return nullOrSlide(activeSlide);
    }
    /**
     * Gets the active section.
     */


    function getActiveSection() {
      return new Section($(SECTION_ACTIVE_SEL)[0]);
    }
    /**
     * Item. Slide or Section objects share the same properties.
     */


    function Item(el, selector) {
      this.anchor = el.getAttribute("data-anchor");
      this.item = el;
      this.index = index(el, selector);
      this.isLast = this.index === el.parentElement.querySelectorAll(selector).length - 1;
      this.isFirst = !this.index;
    }
    /**
     * Section object
     */


    function Section(el) {
      Item.call(this, el, SECTION_SEL);
    }
    /**
     * Slide object
     */


    function Slide(el) {
      Item.call(this, el, SLIDE_SEL);
    }

    return FP;
  } //end of $.fn.fullpage
  //utils

  /**
   * Shows a message in the console of the given type.
   */


  function showError(type, text) {
    window.console && window.console[type] && window.console[type]("fullPage: " + text);
  }
  /**
   * Equivalent of jQuery function $().
   */


  function $(selector, context) {
    context = arguments.length > 1 ? context : document;
    return context ? context.querySelectorAll(selector) : null;
  }
  /**
   * Extends a given Object properties and its childs.
   */


  function deepExtend(out) {
    out = out || {};

    for (var i = 1, len = arguments.length; i < len; ++i) {
      var obj = arguments[i];

      if (!obj) {
        continue;
      }

      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) {
          continue;
        } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


        if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
          out[key] = deepExtend(out[key], obj[key]);
          continue;
        }

        out[key] = obj[key];
      }
    }

    return out;
  }
  /**
   * Checks if the passed element contains the passed class.
   */


  function hasClass(el, className) {
    if (el == null) {
      return false;
    }

    if (el.classList) {
      return el.classList.contains(className);
    }

    return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
  }
  /**
   * Gets the window height. Crossbrowser.
   */


  function getWindowHeight() {
    return "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  }
  /**
   * Gets the window width.
   */


  function getWindowWidth() {
    return window.innerWidth;
  }
  /**
   * Set's the CSS properties for the passed item/s.
   * @param {NodeList|HTMLElement} items
   * @param {Object} props css properties and values.
   */


  function css(items, props) {
    items = getList(items);
    var key;

    for (key in props) {
      if (props.hasOwnProperty(key)) {
        if (key !== null) {
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.style[key] = props[key];
          }
        }
      }
    }

    return items;
  }
  /**
   * Generic function to get the previous or next element.
   */


  function until(item, selector, fn) {
    var sibling = item[fn];

    while (sibling && !matches(sibling, selector)) {
      sibling = sibling[fn];
    }

    return sibling;
  }
  /**
   * Gets the previous element to the passed element that matches the passed selector.
   */


  function prevUntil(item, selector) {
    return until(item, selector, "previousElementSibling");
  }
  /**
   * Gets the next element to the passed element that matches the passed selector.
   */


  function nextUntil(item, selector) {
    return until(item, selector, "nextElementSibling");
  }
  /**
   * Gets the previous element to the passed element.
   */


  function prev(item) {
    return item.previousElementSibling;
  }
  /**
   * Gets the next element to the passed element.
   */


  function next(item) {
    return item.nextElementSibling;
  }
  /**
   * Gets the last element from the passed list of elements.
   */


  function last(item) {
    return item[item.length - 1];
  }
  /**
   * Gets index from the passed element.
   * @param {String} selector is optional.
   */


  function index(item, selector) {
    item = isArrayOrList(item) ? item[0] : item;
    var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
    var num = 0;

    for (var i = 0; i < children.length; i++) {
      if (children[i] == item) return num;
      if (children[i].nodeType == 1) num++;
    }

    return -1;
  }
  /**
   * Gets an iterable element for the passed element/s
   */


  function getList(item) {
    return !isArrayOrList(item) ? [item] : item;
  }
  /**
   * Adds the display=none property for the passed element/s
   */


  function hide(el) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      el[i].style.display = "none";
    }

    return el;
  }
  /**
   * Adds the display=block property for the passed element/s
   */


  function show(el) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      el[i].style.display = "block";
    }

    return el;
  }
  /**
   * Checks if the passed element is an iterable element or not
   */


  function isArrayOrList(el) {
    return Object.prototype.toString.call(el) === "[object Array]" || Object.prototype.toString.call(el) === "[object NodeList]";
  }
  /**
   * Adds the passed class to the passed element/s
   */


  function addClass(el, className) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      var item = el[i];

      if (item.classList) {
        item.classList.add(className);
      } else {
        item.className += " " + className;
      }
    }

    return el;
  }
  /**
   * Removes the passed class to the passed element/s
   * @param {String} `className` can be multiple classnames separated by whitespace
   */


  function removeClass(el, className) {
    el = getList(el);
    var classNames = className.split(" ");

    for (var a = 0; a < classNames.length; a++) {
      className = classNames[a];

      for (var i = 0; i < el.length; i++) {
        var item = el[i];

        if (item.classList) {
          item.classList.remove(className);
        } else {
          item.className = item.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      }
    }

    return el;
  }
  /**
   * Appends the given element ot the given parent.
   */


  function appendTo(el, parent) {
    parent.appendChild(el);
  }
  /**
     Usage:
  
     var wrapper = document.createElement('div');
     wrapper.className = 'fp-slides';
     wrap($('.slide'), wrapper);
  
     https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
     https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
     */


  function wrap(toWrap, wrapper, isWrapAll) {
    var newParent;
    wrapper = wrapper || document.createElement("div");

    for (var i = 0; i < toWrap.length; i++) {
      var item = toWrap[i];

      if (isWrapAll && !i || !isWrapAll) {
        newParent = wrapper.cloneNode(true);
        item.parentNode.insertBefore(newParent, item);
      }

      newParent.appendChild(item);
    }

    return toWrap;
  }
  /**
     Usage:
     var wrapper = document.createElement('div');
     wrapper.className = 'fp-slides';
     wrap($('.slide'), wrapper);
  
     https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
     https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
     */


  function wrapAll(toWrap, wrapper) {
    wrap(toWrap, wrapper, true);
  }
  /**
   * Usage:
   * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
   * wrapInner(document.querySelector('#pepe'), element);
   *
   * https://jsfiddle.net/zexxz0tw/6/
   *
   * https://stackoverflow.com/a/21817590/1081396
   */


  function wrapInner(parent, wrapper) {
    if (typeof wrapper === "string") {
      wrapper = createElementFromHTML(wrapper);
    }

    parent.appendChild(wrapper);

    while (parent.firstChild !== wrapper) {
      wrapper.appendChild(parent.firstChild);
    }
  }
  /**
   * Usage:
   * unwrap(document.querySelector('#pepe'));
   * unwrap(element);
   *
   * https://jsfiddle.net/szjt0hxq/1/
   *
   */


  function unwrap(wrapper) {
    var wrapperContent = document.createDocumentFragment();

    while (wrapper.firstChild) {
      wrapperContent.appendChild(wrapper.firstChild);
    }

    wrapper.parentNode.replaceChild(wrapperContent, wrapper);
  }
  /**
   * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
   * Returns the element or `false` if there's none
   */


  function closest(el, selector) {
    if (el && el.nodeType === 1) {
      if (matches(el, selector)) {
        return el;
      }

      return closest(el.parentNode, selector);
    }

    return null;
  }
  /**
   * Places one element (rel) after another one or group of them (reference).
   * @param {HTMLElement} reference
   * @param {HTMLElement|NodeList|String} el
   * https://jsfiddle.net/9s97hhzv/1/
   */


  function after(reference, el) {
    insertBefore(reference, reference.nextSibling, el);
  }
  /**
   * Places one element (rel) before another one or group of them (reference).
   * @param {HTMLElement} reference
   * @param {HTMLElement|NodeList|String} el
   * https://jsfiddle.net/9s97hhzv/1/
   */


  function before(reference, el) {
    insertBefore(reference, reference, el);
  }
  /**
   * Based in https://stackoverflow.com/a/19316024/1081396
   * and https://stackoverflow.com/a/4793630/1081396
   */


  function insertBefore(reference, beforeElement, el) {
    if (!isArrayOrList(el)) {
      if (typeof el == "string") {
        el = createElementFromHTML(el);
      }

      el = [el];
    }

    for (var i = 0; i < el.length; i++) {
      reference.parentNode.insertBefore(el[i], beforeElement);
    }
  } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll


  function getScrollTop() {
    var doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  /**
   * Gets the siblings of the passed element
   */


  function siblings(el) {
    return Array.prototype.filter.call(el.parentNode.children, function (child) {
      return child !== el;
    });
  } //for IE 9 ?


  function preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
  /**
   * Determines whether the passed item is of function type.
   */


  function isFunction(item) {
    if (typeof item === "function") {
      return true;
    }

    var type = Object.prototype.toString(item);
    return type === "[object Function]" || type === "[object GeneratorFunction]";
  }
  /**
   * Trigger custom events
   */


  function trigger(el, eventName, data) {
    var event;
    data = typeof data === "undefined" ? {} : data; // Native

    if (typeof window.CustomEvent === "function") {
      event = new CustomEvent(eventName, {
        detail: data
      });
    } else {
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
  }
  /**
   * Polyfill of .matches()
   */


  function matches(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
  }
  /**
   * Toggles the visibility of the passed element el.
   */


  function toggle(el, value) {
    if (typeof value === "boolean") {
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = value ? "block" : "none";
      }
    } //we don't use it in other way, so no else :)


    return el;
  }
  /**
   * Creates a HTMLElement from the passed HTML string.
   * https://stackoverflow.com/a/494348/1081396
   */


  function createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

    return div.firstChild;
  }
  /**
   * Removes the passed item/s from the DOM.
   */


  function remove(items) {
    items = getList(items);

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (item && item.parentElement) {
        item.parentNode.removeChild(item);
      }
    }
  }
  /**
   * Filters an array by the passed filter funtion.
   */


  function filter(el, filterFn) {
    Array.prototype.filter.call(el, filterFn);
  } //https://jsfiddle.net/w1rktecz/


  function untilAll(item, selector, fn) {
    var sibling = item[fn];
    var siblings = [];

    while (sibling) {
      if (matches(sibling, selector) || selector == null) {
        siblings.push(sibling);
      }

      sibling = sibling[fn];
    }

    return siblings;
  }
  /**
   * Gets all next elements matching the passed selector.
   */


  function nextAll(item, selector) {
    return untilAll(item, selector, "nextElementSibling");
  }
  /**
   * Gets all previous elements matching the passed selector.
   */


  function prevAll(item, selector) {
    return untilAll(item, selector, "previousElementSibling");
  }
  /**
   * Converts an object to an array.
   */


  function toArray(objectData) {
    return Object.keys(objectData).map(function (key) {
      return objectData[key];
    });
  }
  /**
   * forEach polyfill for IE
   * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
   */


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } //utils are public, so we can use it wherever we want


  window.fp_utils = {
    $: $,
    deepExtend: deepExtend,
    hasClass: hasClass,
    getWindowHeight: getWindowHeight,
    css: css,
    until: until,
    prevUntil: prevUntil,
    nextUntil: nextUntil,
    prev: prev,
    next: next,
    last: last,
    index: index,
    getList: getList,
    hide: hide,
    show: show,
    isArrayOrList: isArrayOrList,
    addClass: addClass,
    removeClass: removeClass,
    appendTo: appendTo,
    wrap: wrap,
    wrapAll: wrapAll,
    wrapInner: wrapInner,
    unwrap: unwrap,
    closest: closest,
    after: after,
    before: before,
    insertBefore: insertBefore,
    getScrollTop: getScrollTop,
    siblings: siblings,
    preventDefault: preventDefault,
    isFunction: isFunction,
    trigger: trigger,
    matches: matches,
    toggle: toggle,
    createElementFromHTML: createElementFromHTML,
    remove: remove,
    filter: filter,
    untilAll: untilAll,
    nextAll: nextAll,
    prevAll: prevAll,
    showError: showError
  };
  return initialise;
});
/**
 * jQuery adapter for fullPage.js 3.0.0
 */


if (window.jQuery && window.fullpage) {
  (function ($, fullpage) {
    "use strict"; // No jQuery No Go

    if (!$ || !fullpage) {
      window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
      return;
    }

    $.fn.fullpage = function (options) {
      options = $.extend({}, options, {
        $: $
      });
      var instance = new fullpage(this[0], options);
    };
  })(window.jQuery, window.fullpage);
}

/***/ }),

/***/ "./src/js/libs/scrolloverflow.js":
/*!***************************************!*\
  !*** ./src/js/libs/scrolloverflow.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















/*!
* Scrolloverflow 2.0.6 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
*/

/**
* Customized version of iScroll.js 0.1.3
* It fixes bugs affecting its integration with fullpage.js
* @license
*/

/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
  var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

  var utils = function () {
    var me = {};
    var _elementStyle = document.createElement('div').style;

    var _vendor = function () {
      var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
          transform,
          i = 0,
          l = vendors.length;

      for (; i < l; i++) {
        transform = vendors[i] + 'ransform';
        if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
      }

      return false;
    }();

    function _prefixStyle(style) {
      if (_vendor === false) return false;
      if (_vendor === '') return style;
      return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.getTime = Date.now || function getTime() {
      return new Date().getTime();
    };

    me.extend = function (target, obj) {
      for (var i in obj) {
        target[i] = obj[i];
      }
    };

    me.addEvent = function (el, type, fn, capture) {
      el.addEventListener(type, fn, !!capture);
    };

    me.removeEvent = function (el, type, fn, capture) {
      el.removeEventListener(type, fn, !!capture);
    };

    me.prefixPointerEvent = function (pointerEvent) {
      return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
      var distance = current - start,
          speed = Math.abs(distance) / time,
          destination,
          duration;
      deceleration = deceleration === undefined ? 0.0006 : deceleration;
      destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
      duration = speed / deceleration;

      if (destination < lowerMargin) {
        destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
        distance = Math.abs(destination - current);
        duration = distance / speed;
      } else if (destination > 0) {
        destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
        distance = Math.abs(current) + destination;
        duration = distance / speed;
      }

      return {
        destination: Math.round(destination),
        duration: duration
      };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
      hasTransform: _transform !== false,
      hasPerspective: _prefixStyle('perspective') in _elementStyle,
      hasTouch: 'ontouchstart' in window,
      hasPointer: !!(window.PointerEvent || window.MSPointerEvent),
      // IE10 is prefixed
      hasTransition: _prefixStyle('transition') in _elementStyle
    });
    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
    - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
    - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
    - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
    - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
    */

    me.isBadAndroid = function () {
      var appVersion = window.navigator.appVersion; // Android browser is not a chrome browser.

      if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);

        if (safariVersion && _typeof(safariVersion) === "object" && safariVersion.length >= 2) {
          return parseFloat(safariVersion[1]) < 535.19;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }();

    me.extend(me.style = {}, {
      transform: _transform,
      transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
      transitionDuration: _prefixStyle('transitionDuration'),
      transitionDelay: _prefixStyle('transitionDelay'),
      transformOrigin: _prefixStyle('transformOrigin')
    });

    me.hasClass = function (e, c) {
      var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
      return re.test(e.className);
    };

    me.addClass = function (e, c) {
      if (me.hasClass(e, c)) {
        return;
      }

      var newclass = e.className.split(' ');
      newclass.push(c);
      e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
      if (!me.hasClass(e, c)) {
        return;
      }

      var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
      e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
      var left = -el.offsetLeft,
          top = -el.offsetTop; // jshint -W084

      while (el = el.offsetParent) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
      } // jshint +W084


      return {
        left: left,
        top: top
      };
    };

    me.preventDefaultException = function (el, exceptions) {
      for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
          return true;
        }
      }

      return false;
    };

    me.extend(me.eventType = {}, {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2,
      pointerdown: 3,
      pointermove: 3,
      pointerup: 3,
      MSPointerDown: 3,
      MSPointerMove: 3,
      MSPointerUp: 3
    });
    me.extend(me.ease = {}, {
      quadratic: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function fn(k) {
          return k * (2 - k);
        }
      },
      circular: {
        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
        // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
        fn: function fn(k) {
          return Math.sqrt(1 - --k * k);
        }
      },
      back: {
        style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fn: function fn(k) {
          var b = 4;
          return (k = k - 1) * k * ((b + 1) * k + b) + 1;
        }
      },
      bounce: {
        style: '',
        fn: function fn(k) {
          if ((k /= 1) < 1 / 2.75) {
            return 7.5625 * k * k;
          } else if (k < 2 / 2.75) {
            return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
          } else if (k < 2.5 / 2.75) {
            return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
          } else {
            return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
          }
        }
      },
      elastic: {
        style: '',
        fn: function fn(k) {
          var f = 0.22,
              e = 0.4;

          if (k === 0) {
            return 0;
          }

          if (k == 1) {
            return 1;
          }

          return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
        }
      }
    });

    me.tap = function (e, eventName) {
      var ev = document.createEvent('Event');
      ev.initEvent(eventName, true, true);
      ev.pageX = e.pageX;
      ev.pageY = e.pageY;
      e.target.dispatchEvent(ev);
    };

    me.click = function (e) {
      var target = e.target,
          ev;

      if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
        // initMouseEvent is deprecated.
        ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
        ev.initEvent('click', true, true);
        ev.view = e.view || window;
        ev.detail = 1;
        ev.screenX = target.screenX || 0;
        ev.screenY = target.screenY || 0;
        ev.clientX = target.clientX || 0;
        ev.clientY = target.clientY || 0;
        ev.ctrlKey = !!e.ctrlKey;
        ev.altKey = !!e.altKey;
        ev.shiftKey = !!e.shiftKey;
        ev.metaKey = !!e.metaKey;
        ev.button = 0;
        ev.relatedTarget = null;
        ev._constructed = true;
        target.dispatchEvent(ev);
      }
    };

    return me;
  }();

  function IScroll(el, options) {
    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style; // cache style for better performance

    this.options = {
      resizeScrollbars: true,
      mouseWheelSpeed: 20,
      snapThreshold: 0.334,
      // INSERT POINT: OPTIONS
      disablePointer: !utils.hasPointer,
      disableTouch: utils.hasPointer || !utils.hasTouch,
      disableMouse: utils.hasPointer || utils.hasTouch,
      startX: 0,
      startY: 0,
      scrollY: true,
      directionLockThreshold: 5,
      momentum: true,
      bounce: true,
      bounceTime: 600,
      bounceEasing: '',
      preventDefault: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
      },
      HWCompositing: true,
      useTransition: true,
      useTransform: true,
      bindToWrapper: typeof window.onmousedown === "undefined"
    };

    for (var i in options) {
      this.options[i] = options[i];
    } // Normalize options


    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;
    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault; // If you want eventPassthrough I have to lock one of the axes

    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX; // With eventPassthrough we also need lockDirection mechanism

    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    } // https://github.com/cubiq/iscroll/issues/1029


    if (!this.options.useTransition && !this.options.useTransform) {
      if (!/relative|absolute/i.test(this.scrollerStyle.position)) {
        this.scrollerStyle.position = "relative";
      }
    }

    if (this.options.shrinkScrollbars == 'scale') {
      this.options.useTransition = false;
    }

    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1; // INSERT POINT: NORMALIZATION
    // Some defaults

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {}; // INSERT POINT: DEFAULTS

    this._init();

    this.refresh();
    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
  }

  IScroll.prototype = {
    version: '5.2.0',
    _init: function _init() {
      this._initEvents();

      if (this.options.scrollbars || this.options.indicators) {
        this._initIndicators();
      }

      if (this.options.mouseWheel) {
        this._initWheel();
      }

      if (this.options.snap) {
        this._initSnap();
      }

      if (this.options.keyBindings) {
        this._initKeys();
      } // INSERT POINT: _init

    },
    destroy: function destroy() {
      this._initEvents(true);

      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;

      this._execEvent('destroy');
    },
    _transitionEnd: function _transitionEnd(e) {
      if (e.target != this.scroller || !this.isInTransition) {
        return;
      }

      this._transitionTime();

      if (!this.resetPosition(this.options.bounceTime)) {
        this.isInTransition = false;

        this._execEvent('scrollEnd');
      }
    },
    _start: function _start(e) {
      // React to left mouse button only
      if (utils.eventType[e.type] != 1) {
        // for button property
        // http://unixpapa.com/js/mouse.html
        var button;

        if (!e.which) {
          /* IE case */
          button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
        } else {
          /* All others */
          button = e.button;
        }

        if (button !== 0) {
          return;
        }
      }

      if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
        e.preventDefault();
      }

      var point = e.touches ? e.touches[0] : e,
          pos;
      this.initiated = utils.eventType[e.type];
      this.moved = false;
      this.distX = 0;
      this.distY = 0;
      this.directionX = 0;
      this.directionY = 0;
      this.directionLocked = 0;
      this.startTime = utils.getTime();

      if (this.options.useTransition && this.isInTransition) {
        this._transitionTime();

        this.isInTransition = false;
        pos = this.getComputedPosition();

        this._translate(Math.round(pos.x), Math.round(pos.y));

        this._execEvent('scrollEnd');
      } else if (!this.options.useTransition && this.isAnimating) {
        this.isAnimating = false;

        this._execEvent('scrollEnd');
      }

      this.startX = this.x;
      this.startY = this.y;
      this.absStartX = this.x;
      this.absStartY = this.y;
      this.pointX = point.pageX;
      this.pointY = point.pageY;

      this._execEvent('beforeScrollStart');
    },
    _move: function _move(e) {
      if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault) {
        // increases performance on Android? TODO: check!
        e.preventDefault();
      }

      var point = e.touches ? e.touches[0] : e,
          deltaX = point.pageX - this.pointX,
          deltaY = point.pageY - this.pointY,
          timestamp = utils.getTime(),
          newX,
          newY,
          absDistX,
          absDistY;
      this.pointX = point.pageX;
      this.pointY = point.pageY;
      this.distX += deltaX;
      this.distY += deltaY;
      absDistX = Math.abs(this.distX);
      absDistY = Math.abs(this.distY); // We need to move at least 10 pixels for the scrolling to initiate

      if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
        return;
      } // If you are scrolling in one direction lock the other


      if (!this.directionLocked && !this.options.freeScroll) {
        if (absDistX > absDistY + this.options.directionLockThreshold) {
          this.directionLocked = 'h'; // lock horizontally
        } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
          this.directionLocked = 'v'; // lock vertically
        } else {
          this.directionLocked = 'n'; // no lock
        }
      }

      if (this.directionLocked == 'h') {
        if (this.options.eventPassthrough == 'vertical') {
          e.preventDefault();
        } else if (this.options.eventPassthrough == 'horizontal') {
          this.initiated = false;
          return;
        }

        deltaY = 0;
      } else if (this.directionLocked == 'v') {
        if (this.options.eventPassthrough == 'horizontal') {
          e.preventDefault();
        } else if (this.options.eventPassthrough == 'vertical') {
          this.initiated = false;
          return;
        }

        deltaX = 0;
      }

      deltaX = this.hasHorizontalScroll ? deltaX : 0;
      deltaY = this.hasVerticalScroll ? deltaY : 0;
      newX = this.x + deltaX;
      newY = this.y + deltaY; // Slow down if outside of the boundaries

      if (newX > 0 || newX < this.maxScrollX) {
        newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
      }

      if (newY > 0 || newY < this.maxScrollY) {
        newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
      }

      this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
      this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

      if (!this.moved) {
        this._execEvent('scrollStart');
      }

      this.moved = true;

      this._translate(newX, newY);
      /* REPLACE START: _move */


      if (timestamp - this.startTime > 300) {
        this.startTime = timestamp;
        this.startX = this.x;
        this.startY = this.y;
      }
      /* REPLACE END: _move */

    },
    _end: function _end(e) {
      if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
        e.preventDefault();
      }

      var point = e.changedTouches ? e.changedTouches[0] : e,
          momentumX,
          momentumY,
          duration = utils.getTime() - this.startTime,
          newX = Math.round(this.x),
          newY = Math.round(this.y),
          distanceX = Math.abs(newX - this.startX),
          distanceY = Math.abs(newY - this.startY),
          time = 0,
          easing = '';
      this.isInTransition = 0;
      this.initiated = 0;
      this.endTime = utils.getTime(); // reset if we are outside of the boundaries

      if (this.resetPosition(this.options.bounceTime)) {
        return;
      }

      this.scrollTo(newX, newY); // ensures that the last position is rounded
      // we scrolled less than 10 pixels

      if (!this.moved) {
        if (this.options.tap) {
          utils.tap(e, this.options.tap);
        }

        if (this.options.click) {
          utils.click(e);
        }

        this._execEvent('scrollCancel');

        return;
      }

      if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
        this._execEvent('flick');

        return;
      } // start momentum animation if needed


      if (this.options.momentum && duration < 300) {
        momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
          destination: newX,
          duration: 0
        };
        momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
          destination: newY,
          duration: 0
        };
        newX = momentumX.destination;
        newY = momentumY.destination;
        time = Math.max(momentumX.duration, momentumY.duration);
        this.isInTransition = 1;
      }

      if (this.options.snap) {
        var snap = this._nearestSnap(newX, newY);

        this.currentPage = snap;
        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
        newX = snap.x;
        newY = snap.y;
        this.directionX = 0;
        this.directionY = 0;
        easing = this.options.bounceEasing;
      } // INSERT POINT: _end


      if (newX != this.x || newY != this.y) {
        // change easing function when scroller goes out of the boundaries
        if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
          easing = utils.ease.quadratic;
        }

        this.scrollTo(newX, newY, time, easing);
        return;
      }

      this._execEvent('scrollEnd');
    },
    _resize: function _resize() {
      var that = this;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(function () {
        that.refresh();
      }, this.options.resizePolling);
    },
    resetPosition: function resetPosition(time) {
      var x = this.x,
          y = this.y;
      time = time || 0;

      if (!this.hasHorizontalScroll || this.x > 0) {
        x = 0;
      } else if (this.x < this.maxScrollX) {
        x = this.maxScrollX;
      }

      if (!this.hasVerticalScroll || this.y > 0) {
        y = 0;
      } else if (this.y < this.maxScrollY) {
        y = this.maxScrollY;
      }

      if (x == this.x && y == this.y) {
        return false;
      }

      this.scrollTo(x, y, time, this.options.bounceEasing);
      return true;
    },
    disable: function disable() {
      this.enabled = false;
    },
    enable: function enable() {
      this.enabled = true;
    },
    refresh: function refresh() {
      var rf = this.wrapper.offsetHeight; // Force reflow

      this.wrapperWidth = this.wrapper.clientWidth;
      this.wrapperHeight = this.wrapper.clientHeight;
      /* REPLACE START: refresh */

      this.scrollerWidth = this.scroller.offsetWidth;
      this.scrollerHeight = this.scroller.offsetHeight;
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      /* REPLACE END: refresh */

      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

      if (!this.hasHorizontalScroll) {
        this.maxScrollX = 0;
        this.scrollerWidth = this.wrapperWidth;
      }

      if (!this.hasVerticalScroll) {
        this.maxScrollY = 0;
        this.scrollerHeight = this.wrapperHeight;
      }

      this.endTime = 0;
      this.directionX = 0;
      this.directionY = 0;
      this.wrapperOffset = utils.offset(this.wrapper);

      this._execEvent('refresh');

      this.resetPosition(); // INSERT POINT: _refresh
    },
    on: function on(type, fn) {
      if (!this._events[type]) {
        this._events[type] = [];
      }

      this._events[type].push(fn);
    },
    off: function off(type, fn) {
      if (!this._events[type]) {
        return;
      }

      var index = this._events[type].indexOf(fn);

      if (index > -1) {
        this._events[type].splice(index, 1);
      }
    },
    _execEvent: function _execEvent(type) {
      if (!this._events[type]) {
        return;
      }

      var i = 0,
          l = this._events[type].length;

      if (!l) {
        return;
      }

      for (; i < l; i++) {
        this._events[type][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function scrollBy(x, y, time, easing) {
      x = this.x + x;
      y = this.y + y;
      time = time || 0;
      this.scrollTo(x, y, time, easing);
    },
    scrollTo: function scrollTo(x, y, time, easing) {
      easing = easing || utils.ease.circular;
      this.isInTransition = this.options.useTransition && time > 0;
      var transitionType = this.options.useTransition && easing.style;

      if (!time || transitionType) {
        if (transitionType) {
          this._transitionTimingFunction(easing.style);

          this._transitionTime(time);
        }

        this._translate(x, y);
      } else {
        this._animate(x, y, time, easing.fn);
      }
    },
    scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
      el = el.nodeType ? el : this.scroller.querySelector(el);

      if (!el) {
        return;
      }

      var pos = utils.offset(el);
      pos.left -= this.wrapperOffset.left;
      pos.top -= this.wrapperOffset.top; // if offsetX/Y are true we center the element to the screen

      if (offsetX === true) {
        offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
      }

      if (offsetY === true) {
        offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
      }

      pos.left -= offsetX || 0;
      pos.top -= offsetY || 0;
      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
      pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
      time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
      this.scrollTo(pos.left, pos.top, time, easing);
    },
    _transitionTime: function _transitionTime(time) {
      if (!this.options.useTransition) {
        return;
      }

      time = time || 0;
      var durationProp = utils.style.transitionDuration;

      if (!durationProp) {
        return;
      }

      this.scrollerStyle[durationProp] = time + 'ms';

      if (!time && utils.isBadAndroid) {
        this.scrollerStyle[durationProp] = '0.0001ms'; // remove 0.0001ms

        var self = this;
        rAF(function () {
          if (self.scrollerStyle[durationProp] === '0.0001ms') {
            self.scrollerStyle[durationProp] = '0s';
          }
        });
      }

      if (this.indicators) {
        for (var i = this.indicators.length; i--;) {
          this.indicators[i].transitionTime(time);
        }
      } // INSERT POINT: _transitionTime

    },
    _transitionTimingFunction: function _transitionTimingFunction(easing) {
      this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

      if (this.indicators) {
        for (var i = this.indicators.length; i--;) {
          this.indicators[i].transitionTimingFunction(easing);
        }
      } // INSERT POINT: _transitionTimingFunction

    },
    _translate: function _translate(x, y) {
      if (this.options.useTransform) {
        /* REPLACE START: _translate */
        this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
        /* REPLACE END: _translate */
      } else {
        x = Math.round(x);
        y = Math.round(y);
        this.scrollerStyle.left = x + 'px';
        this.scrollerStyle.top = y + 'px';
      }

      this.x = x;
      this.y = y;

      if (this.indicators) {
        for (var i = this.indicators.length; i--;) {
          this.indicators[i].updatePosition();
        }
      } // INSERT POINT: _translate

    },
    _initEvents: function _initEvents(remove) {
      var eventType = remove ? utils.removeEvent : utils.addEvent,
          target = this.options.bindToWrapper ? this.wrapper : window;
      eventType(window, 'orientationchange', this);
      eventType(window, 'resize', this);

      if (this.options.click) {
        eventType(this.wrapper, 'click', this, true);
      }

      if (!this.options.disableMouse) {
        eventType(this.wrapper, 'mousedown', this);
        eventType(target, 'mousemove', this);
        eventType(target, 'mousecancel', this);
        eventType(target, 'mouseup', this);
      }

      if (utils.hasPointer && !this.options.disablePointer) {
        eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
        eventType(target, utils.prefixPointerEvent('pointermove'), this);
        eventType(target, utils.prefixPointerEvent('pointercancel'), this);
        eventType(target, utils.prefixPointerEvent('pointerup'), this);
      }

      if (utils.hasTouch && !this.options.disableTouch) {
        eventType(this.wrapper, 'touchstart', this);
        eventType(target, 'touchmove', this);
        eventType(target, 'touchcancel', this);
        eventType(target, 'touchend', this);
      }

      eventType(this.scroller, 'transitionend', this);
      eventType(this.scroller, 'webkitTransitionEnd', this);
      eventType(this.scroller, 'oTransitionEnd', this);
      eventType(this.scroller, 'MSTransitionEnd', this);
    },
    getComputedPosition: function getComputedPosition() {
      var matrix = window.getComputedStyle(this.scroller, null),
          x,
          y;

      if (this.options.useTransform) {
        matrix = matrix[utils.style.transform].split(')')[0].split(', ');
        x = +(matrix[12] || matrix[4]);
        y = +(matrix[13] || matrix[5]);
      } else {
        x = +matrix.left.replace(/[^-\d.]/g, '');
        y = +matrix.top.replace(/[^-\d.]/g, '');
      }

      return {
        x: x,
        y: y
      };
    },
    _initIndicators: function _initIndicators() {
      var interactive = this.options.interactiveScrollbars,
          customStyle = typeof this.options.scrollbars != 'string',
          indicators = [],
          indicator;
      var that = this;
      this.indicators = [];

      if (this.options.scrollbars) {
        // Vertical scrollbar
        if (this.options.scrollY) {
          indicator = {
            el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
            interactive: interactive,
            defaultScrollbars: true,
            customStyle: customStyle,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenX: false
          };
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        } // Horizontal scrollbar


        if (this.options.scrollX) {
          indicator = {
            el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
            interactive: interactive,
            defaultScrollbars: true,
            customStyle: customStyle,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenY: false
          };
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        }
      }

      if (this.options.indicators) {
        // TODO: check concat compatibility
        indicators = indicators.concat(this.options.indicators);
      }

      for (var i = indicators.length; i--;) {
        this.indicators.push(new Indicator(this, indicators[i]));
      } // TODO: check if we can use array.map (wide compatibility and performance issues)


      function _indicatorsMap(fn) {
        if (that.indicators) {
          for (var i = that.indicators.length; i--;) {
            fn.call(that.indicators[i]);
          }
        }
      }

      if (this.options.fadeScrollbars) {
        this.on('scrollEnd', function () {
          _indicatorsMap(function () {
            this.fade();
          });
        });
        this.on('scrollCancel', function () {
          _indicatorsMap(function () {
            this.fade();
          });
        });
        this.on('scrollStart', function () {
          _indicatorsMap(function () {
            this.fade(1);
          });
        });
        this.on('beforeScrollStart', function () {
          _indicatorsMap(function () {
            this.fade(1, true);
          });
        });
      }

      this.on('refresh', function () {
        _indicatorsMap(function () {
          this.refresh();
        });
      });
      this.on('destroy', function () {
        _indicatorsMap(function () {
          this.destroy();
        });

        delete this.indicators;
      });
    },
    _initWheel: function _initWheel() {
      utils.addEvent(this.wrapper, 'wheel', this);
      utils.addEvent(this.wrapper, 'mousewheel', this);
      utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
      this.on('destroy', function () {
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = null;
        utils.removeEvent(this.wrapper, 'wheel', this);
        utils.removeEvent(this.wrapper, 'mousewheel', this);
        utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
      });
    },
    _wheel: function _wheel(e) {
      if (!this.enabled) {
        return;
      } // in IE we can not preventDefault() or otherwise it won't scroll to the prev/next section.
      // I commented on it here back then: https://github.com/cubiq/iscroll/issues/980
      // isIE taken from: https://stackoverflow.com/a/49986758/1081396


      var isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);

      if (!isIE) {
        e.preventDefault();
      }

      var wheelDeltaX,
          wheelDeltaY,
          newX,
          newY,
          that = this;

      if (this.wheelTimeout === undefined) {
        that._execEvent('scrollStart');
      } // Execute the scrollEnd event after 400ms the wheel stopped scrolling


      clearTimeout(this.wheelTimeout);
      this.wheelTimeout = setTimeout(function () {
        if (!that.options.snap) {
          that._execEvent('scrollEnd');
        }

        that.wheelTimeout = undefined;
      }, 400);

      if ('deltaX' in e) {
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
          wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
      } else if ('wheelDeltaX' in e) {
        wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
        wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
      } else if ('wheelDelta' in e) {
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
      } else if ('detail' in e) {
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
      } else {
        return;
      }

      wheelDeltaX *= this.options.invertWheelDirection;
      wheelDeltaY *= this.options.invertWheelDirection;

      if (!this.hasVerticalScroll) {
        wheelDeltaX = wheelDeltaY;
        wheelDeltaY = 0;
      }

      if (this.options.snap) {
        newX = this.currentPage.pageX;
        newY = this.currentPage.pageY;

        if (wheelDeltaX > 0) {
          newX--;
        } else if (wheelDeltaX < 0) {
          newX++;
        }

        if (wheelDeltaY > 0) {
          newY--;
        } else if (wheelDeltaY < 0) {
          newY++;
        }

        this.goToPage(newX, newY);
        return;
      }

      newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
      newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
      this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
      this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

      if (newX > 0) {
        newX = 0;
      } else if (newX < this.maxScrollX) {
        newX = this.maxScrollX;
      }

      if (newY > 0) {
        newY = 0;
      } else if (newY < this.maxScrollY) {
        newY = this.maxScrollY;
      }

      this.scrollTo(newX, newY, 0); // INSERT POINT: _wheel
    },
    _initSnap: function _initSnap() {
      this.currentPage = {};

      if (typeof this.options.snap == 'string') {
        this.options.snap = this.scroller.querySelectorAll(this.options.snap);
      }

      this.on('refresh', function () {
        var i = 0,
            l,
            m = 0,
            n,
            cx,
            cy,
            x = 0,
            y,
            stepX = this.options.snapStepX || this.wrapperWidth,
            stepY = this.options.snapStepY || this.wrapperHeight,
            el;
        this.pages = [];

        if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
          return;
        }

        if (this.options.snap === true) {
          cx = Math.round(stepX / 2);
          cy = Math.round(stepY / 2);

          while (x > -this.scrollerWidth) {
            this.pages[i] = [];
            l = 0;
            y = 0;

            while (y > -this.scrollerHeight) {
              this.pages[i][l] = {
                x: Math.max(x, this.maxScrollX),
                y: Math.max(y, this.maxScrollY),
                width: stepX,
                height: stepY,
                cx: x - cx,
                cy: y - cy
              };
              y -= stepY;
              l++;
            }

            x -= stepX;
            i++;
          }
        } else {
          el = this.options.snap;
          l = el.length;
          n = -1;

          for (; i < l; i++) {
            if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
              m = 0;
              n++;
            }

            if (!this.pages[m]) {
              this.pages[m] = [];
            }

            x = Math.max(-el[i].offsetLeft, this.maxScrollX);
            y = Math.max(-el[i].offsetTop, this.maxScrollY);
            cx = x - Math.round(el[i].offsetWidth / 2);
            cy = y - Math.round(el[i].offsetHeight / 2);
            this.pages[m][n] = {
              x: x,
              y: y,
              width: el[i].offsetWidth,
              height: el[i].offsetHeight,
              cx: cx,
              cy: cy
            };

            if (x > this.maxScrollX) {
              m++;
            }
          }
        }

        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0); // Update snap threshold if needed

        if (this.options.snapThreshold % 1 === 0) {
          this.snapThresholdX = this.options.snapThreshold;
          this.snapThresholdY = this.options.snapThreshold;
        } else {
          this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
          this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
        }
      });
      this.on('flick', function () {
        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
      });
    },
    _nearestSnap: function _nearestSnap(x, y) {
      if (!this.pages.length) {
        return {
          x: 0,
          y: 0,
          pageX: 0,
          pageY: 0
        };
      }

      var i = 0,
          l = this.pages.length,
          m = 0; // Check if we exceeded the snap threshold

      if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
        return this.currentPage;
      }

      if (x > 0) {
        x = 0;
      } else if (x < this.maxScrollX) {
        x = this.maxScrollX;
      }

      if (y > 0) {
        y = 0;
      } else if (y < this.maxScrollY) {
        y = this.maxScrollY;
      }

      for (; i < l; i++) {
        if (x >= this.pages[i][0].cx) {
          x = this.pages[i][0].x;
          break;
        }
      }

      l = this.pages[i].length;

      for (; m < l; m++) {
        if (y >= this.pages[0][m].cy) {
          y = this.pages[0][m].y;
          break;
        }
      }

      if (i == this.currentPage.pageX) {
        i += this.directionX;

        if (i < 0) {
          i = 0;
        } else if (i >= this.pages.length) {
          i = this.pages.length - 1;
        }

        x = this.pages[i][0].x;
      }

      if (m == this.currentPage.pageY) {
        m += this.directionY;

        if (m < 0) {
          m = 0;
        } else if (m >= this.pages[0].length) {
          m = this.pages[0].length - 1;
        }

        y = this.pages[0][m].y;
      }

      return {
        x: x,
        y: y,
        pageX: i,
        pageY: m
      };
    },
    goToPage: function goToPage(x, y, time, easing) {
      easing = easing || this.options.bounceEasing;

      if (x >= this.pages.length) {
        x = this.pages.length - 1;
      } else if (x < 0) {
        x = 0;
      }

      if (y >= this.pages[x].length) {
        y = this.pages[x].length - 1;
      } else if (y < 0) {
        y = 0;
      }

      var posX = this.pages[x][y].x,
          posY = this.pages[x][y].y;
      time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
      this.currentPage = {
        x: posX,
        y: posY,
        pageX: x,
        pageY: y
      };
      this.scrollTo(posX, posY, time, easing);
    },
    next: function next(time, easing) {
      var x = this.currentPage.pageX,
          y = this.currentPage.pageY;
      x++;

      if (x >= this.pages.length && this.hasVerticalScroll) {
        x = 0;
        y++;
      }

      this.goToPage(x, y, time, easing);
    },
    prev: function prev(time, easing) {
      var x = this.currentPage.pageX,
          y = this.currentPage.pageY;
      x--;

      if (x < 0 && this.hasVerticalScroll) {
        x = 0;
        y--;
      }

      this.goToPage(x, y, time, easing);
    },
    _initKeys: function _initKeys(e) {
      // default key bindings
      var keys = {
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
      };
      var i; // if you give me characters I give you keycode

      if (_typeof(this.options.keyBindings) == 'object') {
        for (i in this.options.keyBindings) {
          if (typeof this.options.keyBindings[i] == 'string') {
            this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
          }
        }
      } else {
        this.options.keyBindings = {};
      }

      for (i in keys) {
        this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
      }

      utils.addEvent(window, 'keydown', this);
      this.on('destroy', function () {
        utils.removeEvent(window, 'keydown', this);
      });
    },
    _key: function _key(e) {
      if (!this.enabled) {
        return;
      }

      var snap = this.options.snap,
          // we are using this alot, better to cache it
      newX = snap ? this.currentPage.pageX : this.x,
          newY = snap ? this.currentPage.pageY : this.y,
          now = utils.getTime(),
          prevTime = this.keyTime || 0,
          acceleration = 0.250,
          pos;

      if (this.options.useTransition && this.isInTransition) {
        pos = this.getComputedPosition();

        this._translate(Math.round(pos.x), Math.round(pos.y));

        this.isInTransition = false;
      }

      this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

      switch (e.keyCode) {
        case this.options.keyBindings.pageUp:
          if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
            newX += snap ? 1 : this.wrapperWidth;
          } else {
            newY += snap ? 1 : this.wrapperHeight;
          }

          break;

        case this.options.keyBindings.pageDown:
          if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
            newX -= snap ? 1 : this.wrapperWidth;
          } else {
            newY -= snap ? 1 : this.wrapperHeight;
          }

          break;

        case this.options.keyBindings.end:
          newX = snap ? this.pages.length - 1 : this.maxScrollX;
          newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
          break;

        case this.options.keyBindings.home:
          newX = 0;
          newY = 0;
          break;

        case this.options.keyBindings.left:
          newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
          break;

        case this.options.keyBindings.up:
          newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
          break;

        case this.options.keyBindings.right:
          newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
          break;

        case this.options.keyBindings.down:
          newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
          break;

        default:
          return;
      }

      if (snap) {
        this.goToPage(newX, newY);
        return;
      }

      if (newX > 0) {
        newX = 0;
        this.keyAcceleration = 0;
      } else if (newX < this.maxScrollX) {
        newX = this.maxScrollX;
        this.keyAcceleration = 0;
      }

      if (newY > 0) {
        newY = 0;
        this.keyAcceleration = 0;
      } else if (newY < this.maxScrollY) {
        newY = this.maxScrollY;
        this.keyAcceleration = 0;
      }

      this.scrollTo(newX, newY, 0);
      this.keyTime = now;
    },
    _animate: function _animate(destX, destY, duration, easingFn) {
      var that = this,
          startX = this.x,
          startY = this.y,
          startTime = utils.getTime(),
          destTime = startTime + duration;

      function step() {
        var now = utils.getTime(),
            newX,
            newY,
            easing;

        if (now >= destTime) {
          that.isAnimating = false;

          that._translate(destX, destY);

          if (!that.resetPosition(that.options.bounceTime)) {
            that._execEvent('scrollEnd');
          }

          return;
        }

        now = (now - startTime) / duration;
        easing = easingFn(now);
        newX = (destX - startX) * easing + startX;
        newY = (destY - startY) * easing + startY;

        that._translate(newX, newY);

        if (that.isAnimating) {
          rAF(step);
        }
      }

      this.isAnimating = true;
      step();
    },
    handleEvent: function handleEvent(e) {
      switch (e.type) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(e);

          break;

        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(e);

          break;

        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(e);

          break;

        case 'orientationchange':
        case 'resize':
          this._resize();

          break;

        case 'transitionend':
        case 'webkitTransitionEnd':
        case 'oTransitionEnd':
        case 'MSTransitionEnd':
          this._transitionEnd(e);

          break;

        case 'wheel':
        case 'DOMMouseScroll':
        case 'mousewheel':
          this._wheel(e);

          break;

        case 'keydown':
          this._key(e);

          break;

        case 'click':
          if (this.enabled && !e._constructed) {
            e.preventDefault();
            e.stopPropagation();
          }

          break;
      }
    }
  };

  function createDefaultScrollbar(direction, interactive, type) {
    var scrollbar = document.createElement('div'),
        indicator = document.createElement('div');

    if (type === true) {
      scrollbar.style.cssText = 'position:absolute;z-index:9999';
      indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
    }

    indicator.className = 'iScrollIndicator';

    if (direction == 'h') {
      if (type === true) {
        scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
        indicator.style.height = '100%';
      }

      scrollbar.className = 'iScrollHorizontalScrollbar';
    } else {
      if (type === true) {
        scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
        indicator.style.width = '100%';
      }

      scrollbar.className = 'iScrollVerticalScrollbar';
    }

    scrollbar.style.cssText += ';overflow:hidden';

    if (!interactive) {
      scrollbar.style.pointerEvents = 'none';
    }

    scrollbar.appendChild(indicator);
    return scrollbar;
  }

  function Indicator(scroller, options) {
    this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;
    this.options = {
      listenX: true,
      listenY: true,
      interactive: false,
      resize: true,
      defaultScrollbars: false,
      shrink: false,
      fade: false,
      speedRatioX: 0,
      speedRatioY: 0
    };

    for (var i in options) {
      this.options[i] = options[i];
    }

    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;

    if (this.options.interactive) {
      if (!this.options.disableTouch) {
        utils.addEvent(this.indicator, 'touchstart', this);
        utils.addEvent(window, 'touchend', this);
      }

      if (!this.options.disablePointer) {
        utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
        utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
      }

      if (!this.options.disableMouse) {
        utils.addEvent(this.indicator, 'mousedown', this);
        utils.addEvent(window, 'mouseup', this);
      }
    }

    if (this.options.fade) {
      this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
      var durationProp = utils.style.transitionDuration;

      if (!durationProp) {
        return;
      }

      this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms'; // remove 0.0001ms

      var self = this;

      if (utils.isBadAndroid) {
        rAF(function () {
          if (self.wrapperStyle[durationProp] === '0.0001ms') {
            self.wrapperStyle[durationProp] = '0s';
          }
        });
      }

      this.wrapperStyle.opacity = '0';
    }
  }

  Indicator.prototype = {
    handleEvent: function handleEvent(e) {
      switch (e.type) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(e);

          break;

        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(e);

          break;

        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(e);

          break;
      }
    },
    destroy: function destroy() {
      if (this.options.fadeScrollbars) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;
      }

      if (this.options.interactive) {
        utils.removeEvent(this.indicator, 'touchstart', this);
        utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
        utils.removeEvent(this.indicator, 'mousedown', this);
        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);
        utils.removeEvent(window, 'touchend', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
        utils.removeEvent(window, 'mouseup', this);
      }

      if (this.options.defaultScrollbars) {
        this.wrapper.parentNode.removeChild(this.wrapper);
      }
    },
    _start: function _start(e) {
      var point = e.touches ? e.touches[0] : e;
      e.preventDefault();
      e.stopPropagation();
      this.transitionTime();
      this.initiated = true;
      this.moved = false;
      this.lastPointX = point.pageX;
      this.lastPointY = point.pageY;
      this.startTime = utils.getTime();

      if (!this.options.disableTouch) {
        utils.addEvent(window, 'touchmove', this);
      }

      if (!this.options.disablePointer) {
        utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
      }

      if (!this.options.disableMouse) {
        utils.addEvent(window, 'mousemove', this);
      }

      this.scroller._execEvent('beforeScrollStart');
    },
    _move: function _move(e) {
      var point = e.touches ? e.touches[0] : e,
          deltaX,
          deltaY,
          newX,
          newY,
          timestamp = utils.getTime();

      if (!this.moved) {
        this.scroller._execEvent('scrollStart');
      }

      this.moved = true;
      deltaX = point.pageX - this.lastPointX;
      this.lastPointX = point.pageX;
      deltaY = point.pageY - this.lastPointY;
      this.lastPointY = point.pageY;
      newX = this.x + deltaX;
      newY = this.y + deltaY;

      this._pos(newX, newY); // INSERT POINT: indicator._move


      e.preventDefault();
      e.stopPropagation();
    },
    _end: function _end(e) {
      if (!this.initiated) {
        return;
      }

      this.initiated = false;
      e.preventDefault();
      e.stopPropagation();
      utils.removeEvent(window, 'touchmove', this);
      utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
      utils.removeEvent(window, 'mousemove', this);

      if (this.scroller.options.snap) {
        var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

        if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
          this.scroller.directionX = 0;
          this.scroller.directionY = 0;
          this.scroller.currentPage = snap;
          this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
        }
      }

      if (this.moved) {
        this.scroller._execEvent('scrollEnd');
      }
    },
    transitionTime: function transitionTime(time) {
      time = time || 0;
      var durationProp = utils.style.transitionDuration;

      if (!durationProp) {
        return;
      }

      this.indicatorStyle[durationProp] = time + 'ms';

      if (!time && utils.isBadAndroid) {
        this.indicatorStyle[durationProp] = '0.0001ms'; // remove 0.0001ms

        var self = this;
        rAF(function () {
          if (self.indicatorStyle[durationProp] === '0.0001ms') {
            self.indicatorStyle[durationProp] = '0s';
          }
        });
      }
    },
    transitionTimingFunction: function transitionTimingFunction(easing) {
      this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },
    refresh: function refresh() {
      this.transitionTime();

      if (this.options.listenX && !this.options.listenY) {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
      } else if (this.options.listenY && !this.options.listenX) {
        this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
      } else {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
      }

      if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
        utils.addClass(this.wrapper, 'iScrollBothScrollbars');
        utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

        if (this.options.defaultScrollbars && this.options.customStyle) {
          if (this.options.listenX) {
            this.wrapper.style.right = '8px';
          } else {
            this.wrapper.style.bottom = '8px';
          }
        }
      } else {
        utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
        utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

        if (this.options.defaultScrollbars && this.options.customStyle) {
          if (this.options.listenX) {
            this.wrapper.style.right = '2px';
          } else {
            this.wrapper.style.bottom = '2px';
          }
        }
      }

      var r = this.wrapper.offsetHeight; // force refresh

      if (this.options.listenX) {
        this.wrapperWidth = this.wrapper.clientWidth;

        if (this.options.resize) {
          this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
          this.indicatorStyle.width = this.indicatorWidth + 'px';
        } else {
          this.indicatorWidth = this.indicator.clientWidth;
        }

        this.maxPosX = this.wrapperWidth - this.indicatorWidth;

        if (this.options.shrink == 'clip') {
          this.minBoundaryX = -this.indicatorWidth + 8;
          this.maxBoundaryX = this.wrapperWidth - 8;
        } else {
          this.minBoundaryX = 0;
          this.maxBoundaryX = this.maxPosX;
        }

        this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
      }

      if (this.options.listenY) {
        this.wrapperHeight = this.wrapper.clientHeight;

        if (this.options.resize) {
          this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
          this.indicatorStyle.height = this.indicatorHeight + 'px';
        } else {
          this.indicatorHeight = this.indicator.clientHeight;
        }

        this.maxPosY = this.wrapperHeight - this.indicatorHeight;

        if (this.options.shrink == 'clip') {
          this.minBoundaryY = -this.indicatorHeight + 8;
          this.maxBoundaryY = this.wrapperHeight - 8;
        } else {
          this.minBoundaryY = 0;
          this.maxBoundaryY = this.maxPosY;
        }

        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
        this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
      }

      this.updatePosition();
    },
    updatePosition: function updatePosition() {
      var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
          y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

      if (!this.options.ignoreBoundaries) {
        if (x < this.minBoundaryX) {
          if (this.options.shrink == 'scale') {
            this.width = Math.max(this.indicatorWidth + x, 8);
            this.indicatorStyle.width = this.width + 'px';
          }

          x = this.minBoundaryX;
        } else if (x > this.maxBoundaryX) {
          if (this.options.shrink == 'scale') {
            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
            this.indicatorStyle.width = this.width + 'px';
            x = this.maxPosX + this.indicatorWidth - this.width;
          } else {
            x = this.maxBoundaryX;
          }
        } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
          this.width = this.indicatorWidth;
          this.indicatorStyle.width = this.width + 'px';
        }

        if (y < this.minBoundaryY) {
          if (this.options.shrink == 'scale') {
            this.height = Math.max(this.indicatorHeight + y * 3, 8);
            this.indicatorStyle.height = this.height + 'px';
          }

          y = this.minBoundaryY;
        } else if (y > this.maxBoundaryY) {
          if (this.options.shrink == 'scale') {
            this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
            this.indicatorStyle.height = this.height + 'px';
            y = this.maxPosY + this.indicatorHeight - this.height;
          } else {
            y = this.maxBoundaryY;
          }
        } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
          this.height = this.indicatorHeight;
          this.indicatorStyle.height = this.height + 'px';
        }
      }

      this.x = x;
      this.y = y;

      if (this.scroller.options.useTransform) {
        this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
      } else {
        this.indicatorStyle.left = x + 'px';
        this.indicatorStyle.top = y + 'px';
      }
    },
    _pos: function _pos(x, y) {
      if (x < 0) {
        x = 0;
      } else if (x > this.maxPosX) {
        x = this.maxPosX;
      }

      if (y < 0) {
        y = 0;
      } else if (y > this.maxPosY) {
        y = this.maxPosY;
      }

      x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
      y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
      this.scroller.scrollTo(x, y);
    },
    fade: function fade(val, hold) {
      if (hold && !this.visible) {
        return;
      }

      clearTimeout(this.fadeTimeout);
      this.fadeTimeout = null;
      var time = val ? 250 : 500,
          delay = val ? 0 : 300;
      val = val ? '1' : '0';
      this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
      this.fadeTimeout = setTimeout(function (val) {
        this.wrapperStyle.opacity = val;
        this.visible = +val;
      }.bind(this, val), delay);
    }
  };
  IScroll.utils = utils;

  if (typeof module != 'undefined' && module.exports) {
    module.exports = IScroll;
  } else if (typeof define == 'function' && define.amd) {
    define(function () {
      return IScroll;
    }); //making sure scrollOverflow works when using Require.js
    //in the browser

    if (typeof window !== 'undefined') {
      window.IScroll = IScroll;
    }
  } else {
    window.IScroll = IScroll;
  }
})(window, document, Math);
/*!
* Scrolloverflow 2.0.6 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
* @license MIT licensed
*
* Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
*/


(function (window, document) {
  window.fp_scrolloverflow = function () {
    // check if IScroll is available in global scope
    if (!window.IScroll) {
      // otherwise create local one from module.exports
      window.IScroll = module.exports;
    } // keeping central set of classnames and selectors


    var SCROLLABLE = 'fp-scrollable';
    var SCROLLABLE_SEL = '.' + SCROLLABLE;
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var RESPONSIVE = 'fp-responsive';
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    /*
    * Turns iScroll `mousewheel` option off dynamically
    * https://github.com/cubiq/iscroll/issues/1036
    */

    IScroll.prototype.wheelOn = function () {
      this.wrapper.addEventListener('wheel', this);
      this.wrapper.addEventListener('mousewheel', this);
      this.wrapper.addEventListener('DOMMouseScroll', this);
    };
    /*
    * Turns iScroll `mousewheel` option on dynamically
    * https://github.com/cubiq/iscroll/issues/1036
    */


    IScroll.prototype.wheelOff = function () {
      this.wrapper.removeEventListener('wheel', this);
      this.wrapper.removeEventListener('mousewheel', this);
      this.wrapper.removeEventListener('DOMMouseScroll', this);
    };
    /**
    * Returns an integer representing the padding dimensions in px.
    */


    function getPaddings(element) {
      var section = fp_utils.closest(element, SECTION_SEL);

      if (section != null) {
        return parseInt(getComputedStyle(section)['padding-bottom']) + parseInt(getComputedStyle(section)['padding-top']);
      }

      return 0;
    }

    function scrollBarHandler() {
      var self = this;
      self.options = null;

      self.init = function (options, iscrollOptions) {
        self.options = options;
        self.iscrollOptions = iscrollOptions;

        if (document.readyState === 'complete') {
          createScrollBarForAll();
          fullpage_api.shared.afterRenderActions();
        } //after DOM and images are loaded


        window.addEventListener('load', function () {
          createScrollBarForAll();
          fullpage_api.shared.afterRenderActions();
        });
        return self;
      };
      /**
      * Creates the scrollbar for the sections and slides in the site
      */


      function createScrollBarForAll() {
        if (fp_utils.hasClass(document.body, RESPONSIVE)) {
          forEachSectionAndSlide(removeScrollBar);
        } else {
          forEachSectionAndSlide(createScrollBar);
        }
      }
      /**
      * Checks if the element needs scrollbar and if the user wants to apply it.
      * If so it creates it.
      *
      * @param {Object} element   jQuery object of the section or slide
      */


      function createScrollBar(element) {
        //User doesn't want scrollbar here? Sayonara baby!
        if (fp_utils.hasClass(element, 'fp-noscroll')) return; //necessary to make `scrollHeight` work under Opera 12

        fp_utils.css(element, {
          'overflow': 'hidden'
        });
        var scrollOverflowHandler = self.options.scrollOverflowHandler;
        var wrap = scrollOverflowHandler.wrapContent();
        var section = fp_utils.closest(element, SECTION_SEL); //in case element is a slide

        var scrollable = scrollOverflowHandler.scrollable(element);
        var contentHeight;
        var paddings = getPaddings(section); //if there was scroll, the contentHeight will be the one in the scrollable section

        if (scrollable != null) {
          contentHeight = scrollOverflowHandler.scrollHeight(element);
        } else {
          contentHeight = element.scrollHeight;

          if (self.options.verticalCentered) {
            contentHeight = $(TABLE_CELL_SEL, element)[0].scrollHeight;
          }
        }

        var scrollHeight = fp_utils.getWindowHeight();
        var contentHeightWidthPaddings = contentHeight + paddings;
        var scrollHeightWidthoutPaddings = scrollHeight - paddings; //needs scroll?

        if (contentHeightWidthPaddings > scrollHeight) {
          //did we already have an scrollbar ? Updating it
          if (scrollable != null) {
            scrollOverflowHandler.update(element, scrollHeightWidthoutPaddings);
          } //creating the scrolling
          else {
            if (self.options.verticalCentered) {
              fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scroller);
              fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scrollable);
            } else {
              fp_utils.wrapInner(element, wrap.scroller);
              fp_utils.wrapInner(element, wrap.scrollable);
            }

            scrollOverflowHandler.create(element, scrollHeightWidthoutPaddings, self.iscrollOptions);
          }
        } //removing the scrolling when it is not necessary anymore
        else {
          scrollOverflowHandler.remove(element);
        } //undo


        fp_utils.css(element, {
          'overflow': ''
        });
      }
      /**
      * Applies a callback function to each section in the site
      * or the slides within them
      */


      function forEachSectionAndSlide(callback) {
        $(SECTION_SEL).forEach(function (section) {
          var slides = $(SLIDE_SEL, section);

          if (slides.length) {
            slides.forEach(function (slide) {
              callback(slide);
            });
          } else {
            callback(section);
          }
        });
      }
      /**
      * Removes scrollOverflow for sections using the class `fp-auto-height-responsive`
      */


      function removeScrollBar(element) {
        var scrollOverflowHandler = self.options.scrollOverflowHandler;

        if (fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), AUTO_HEIGHT_RESPONSIVE)) {
          scrollOverflowHandler.remove(element);
        }
      } //public functions


      self.createScrollBarForAll = createScrollBarForAll;
      self.createScrollBar = createScrollBar;
    }
    /**
     * An object to handle overflow scrolling.
     * This uses jquery.slimScroll to accomplish overflow scrolling.
     * It is possible to pass in an alternate scrollOverflowHandler
     * to the fullpage.js option that implements the same functions
     * as this handler.
     *
     * @type {Object}
     */


    var $ = null;
    var g_fullpageOptions = null;
    var iscrollHandler = {
      refreshId: null,
      iScrollInstances: [],
      lastScrollY: null,
      hasBeenInit: false,
      // Default options for iScroll.js used when using scrollOverflow
      iscrollOptions: {
        scrollbars: true,
        mouseWheel: true,
        hideScrollbars: false,
        fadeScrollbars: false,
        disableMouse: true,
        interactiveScrollbars: true
      },
      init: function init(options) {
        $ = fp_utils.$;
        g_fullpageOptions = options;
        var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints; //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783

        iscrollHandler.iscrollOptions.click = isTouch; // see #2035

        iscrollHandler.hasBeenInit = true; //extending iScroll options with the user custom ones

        iscrollHandler.iscrollOptions = fp_utils.deepExtend(iscrollHandler.iscrollOptions, options.scrollOverflowOptions);
        return new scrollBarHandler().init(options, iscrollHandler.iscrollOptions);
      },
      // Enables or disables the mouse wheel for the active section or all slides in it
      toggleWheel: function toggleWheel(value) {
        var scrollable = $(SCROLLABLE_SEL, $(SECTION_ACTIVE_SEL)[0]);
        scrollable.forEach(function (item) {
          var iScrollInstance = item.fp_iscrollInstance;

          if (iScrollInstance != null) {
            if (value) {
              iScrollInstance.wheelOn();
            } else {
              iScrollInstance.wheelOff();
            }
          }
        });
      },
      // Enables or disables the whole iScroll feature based on the given parameter.
      setIscroll: function setIscroll(target, enable) {
        if (!iscrollHandler.hasBeenInit || !target) {
          return;
        }

        var scrollable = fp_utils.closest(target, SCROLLABLE_SEL) || $(SCROLLABLE_SEL, target) && $(SCROLLABLE_SEL, target)[0];
        var action = enable ? 'enable' : 'disable';

        if (scrollable) {
          scrollable.fp_iscrollInstance[action]();
        }
      },

      /**
      * Turns off iScroll for the destination section.
      * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
      * scroll the destination section/slide before the sections animations ends.
      */
      onLeave: function onLeave() {
        iscrollHandler.toggleWheel(false);
      },
      // Turns off iScroll for the leaving section
      beforeLeave: function beforeLeave() {
        iscrollHandler.onLeave();
      },
      // Turns on iScroll on section load
      afterLoad: function afterLoad() {
        iscrollHandler.toggleWheel(true);
      },

      /**
       * Called when overflow scrolling is needed for a section.
       *
       * @param  {Object} element      jQuery object containing current section
       * @param  {Number} scrollHeight Current window height in pixels
       */
      create: function create(element, scrollHeight, iscrollOptions) {
        var scrollable = $(SCROLLABLE_SEL, element);
        scrollable.forEach(function (item) {
          fp_utils.css(item, {
            'height': scrollHeight + 'px'
          });
          var iScrollInstance = item.fp_iscrollInstance;

          if (iScrollInstance != null) {
            iscrollHandler.iScrollInstances.forEach(function (instance) {
              instance.destroy();
            });
          }

          iScrollInstance = new IScroll(item, iscrollOptions);
          iscrollHandler.iScrollInstances.push(iScrollInstance);

          if (!fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), ACTIVE)) {
            //off by default until the section gets active
            iScrollInstance.wheelOff();
          }

          item.fp_iscrollInstance = iScrollInstance;
        });
      },

      /**
       * Return a boolean depending on whether the scrollable element is a
       * the end or at the start of the scrolling depending on the given type.
       *
       * @param  {String}  type       Either 'top' or 'bottom'
       * @param  {Object}  scrollable jQuery object for the scrollable element
       * @return {Boolean}
       */
      isScrolled: function isScrolled(type, scrollable) {
        var scroller = scrollable.fp_iscrollInstance; //no scroller?

        if (!scroller) {
          return true;
        } // two times reporting the same Y position ? 
        // that means we are on the top or on the bottom of the scroller


        if (type === 'top') {
          return scroller.y >= 0 && !fp_utils.getScrollTop(scrollable);
        } else if (type === 'bottom') {
          // Checking the same position twice? We are at the very bottom (at least on Desktop)
          var isDoubleChecking = iscrollHandler.lastScrollY === scroller.y;
          iscrollHandler.lastScrollY = scroller.y; // An offset of 1px is required for IE / Edge to work

          var offset = isDoubleChecking ? 1 : 0;
          return offset + (0 - scroller.y) + fp_utils.getScrollTop(scrollable) + scrollable.offsetHeight >= scrollable.scrollHeight;
        }
      },

      /**
       * Returns the scrollable element for the given section.
       * If there are landscape slides, will only return a scrollable element
       * if it is in the active slide.
       *
       * @param  {Object}  activeSection jQuery object containing current section
       * @return {Boolean}
       */
      scrollable: function scrollable(activeSection) {
        // if there are landscape slides, we check if the scrolling bar is in the current one or not
        if ($(SLIDES_WRAPPER_SEL, activeSection).length) {
          return $(SCROLLABLE_SEL, $(SLIDE_ACTIVE_SEL, activeSection)[0])[0];
        }

        return $(SCROLLABLE_SEL, activeSection)[0];
      },

      /**
       * Returns the scroll height of the wrapped content.
       * If this is larger than the window height minus section padding,
       * overflow scrolling is needed.
       *
       * @param  {Object} element jQuery object containing current section
       * @return {Number}
       */
      scrollHeight: function scrollHeight(element) {
        return $('.fp-scroller', $(SCROLLABLE_SEL, element)[0])[0].scrollHeight;
      },

      /**
       * Called when overflow scrolling is no longer needed for a section.
       *
       * @param  {Object} element      jQuery object containing current section
       */
      remove: function remove(element) {
        if (element == null) return;
        var scrollable = $(SCROLLABLE_SEL, element)[0];

        if (scrollable != null) {
          var iScrollInstance = scrollable.fp_iscrollInstance;

          if (iScrollInstance != null) {
            iScrollInstance.destroy();
          }

          scrollable.fp_iscrollInstance = null; //unwrapping...

          fp_utils.unwrap($('.fp-scroller', element)[0]);
          fp_utils.unwrap($(SCROLLABLE_SEL, element)[0]);
        }
      },

      /**
       * Called when overflow scrolling has already been setup but the
       * window height has potentially changed.
       *
       * @param  {Object} element      jQuery object containing current section
       * @param  {Number} scrollHeight Current window height in pixels
       */
      update: function update(element, scrollHeight) {
        //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
        //short period of time.
        //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
        clearTimeout(iscrollHandler.refreshId);
        iscrollHandler.refreshId = setTimeout(function () {
          iscrollHandler.iScrollInstances.forEach(function (instance) {
            instance.refresh(); //ugly hack that we are forced to use due to the timeout delay
            //otherwise done on the fullpage.js reBuild function

            fullpage_api.silentMoveTo(fp_utils.index($(SECTION_ACTIVE_SEL)[0]) + 1);
          });
        }, 150); //updating the wrappers height

        fp_utils.css($(SCROLLABLE_SEL, element)[0], {
          'height': scrollHeight + 'px'
        });

        if (g_fullpageOptions.verticalCentered) {
          fp_utils.css($(SCROLLABLE_SEL, element)[0].parentNode, {
            'height': scrollHeight + 'px'
          });
        }
      },

      /**
       * Called to get any additional elements needed to wrap the section
       * content in order to facilitate overflow scrolling.
       *
       * @return {String|Object} Can be a string containing HTML,
       *                         a DOM element, or jQuery object.
       */
      wrapContent: function wrapContent() {
        var scrollable = document.createElement('div');
        scrollable.className = SCROLLABLE;
        var scroller = document.createElement('div');
        scroller.className = 'fp-scroller';
        return {
          scrollable: scrollable,
          scroller: scroller
        };
      }
    };
    return {
      iscrollHandler: iscrollHandler
    };
  }();
})(window, document);

/***/ }),

/***/ "./src/js/modules/animate.js":
/*!***********************************!*\
  !*** ./src/js/modules/animate.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animate(_ref) {
  var timing = _ref.timing,
      draw = _ref.draw,
      duration = _ref.duration,
      _ref$onStart = _ref.onStart,
      onStart = _ref$onStart === void 0 ? null : _ref$onStart,
      _ref$onEnd = _ref.onEnd,
      onEnd = _ref$onEnd === void 0 ? null : _ref$onEnd;
  var start = performance.now();
  if (onStart) onStart();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    var timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1; // вычисление текущего состояния анимации

    var progress = timing(timeFraction);
    draw(progress); // отрисовать её

    if (timeFraction < 1) requestAnimationFrame(animate);else if (onEnd) onEnd();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (animate);

/***/ }),

/***/ "./src/js/modules/barsFunction.js":
/*!****************************************!*\
  !*** ./src/js/modules/barsFunction.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");



var barsFunction = function barsFunction() {
  var percentage = document.querySelectorAll(".skills__bar-percentage"),
      lines = document.querySelectorAll(".skills__bar-line");
  percentage.forEach(function (item, i) {
    lines[i].style.width = item.innerHTML;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (barsFunction);

/***/ }),

/***/ "./src/js/modules/fullpageInit.js":
/*!****************************************!*\
  !*** ./src/js/modules/fullpageInit.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var _libs_scrolloverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/scrolloverflow.js */ "./src/js/libs/scrolloverflow.js");
/* harmony import */ var _libs_fullpage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/fullpage.js */ "./src/js/libs/fullpage.js");






var fullpageInit = function fullpageInit() {
  var fullPageInstance = new fullpage('#fullpage', {
    anchors: ['promo', 'about', // "resume",
    'skills', 'portfolio', // "prices",
    'contacts'],
    scrollOverflow: true,
    scrollOverflowOptions: {
      scroll: false,
      click: false,
      scrollbars: false
    },
    menu: '#menu',
    navigation: false,
    navigationPosition: 'right',
    touchSensitivity: 15,
    animateAnchor: true,
    onLeave: function onLeave(origin, destination) {
      var menuLinks = document.querySelectorAll('.menu__item');
      menuLinks.forEach(function (link) {
        link.classList.remove('active');

        if (link.getAttribute('data-menuanchor') === destination.anchor) {
          link.classList.add('active');
        }
      });
    }
  });
  fullpage_api.setAllowScrolling(true);
  fullpage_api.setKeyboardScrolling(false, 'right, left');
  return fullPageInstance;
};

/* harmony default export */ __webpack_exports__["default"] = (fullpageInit);

/***/ }),

/***/ "./src/js/modules/handleMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/handleMenu.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");



var handleMenu = function handleMenu() {
  var menu = document.querySelector(".menu"),
      menuItem = document.querySelectorAll(".menu__item a"),
      hamburger = document.querySelector(".hamburger"),
      overlay = document.querySelector(".menu__overlay");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger_active");
    hamburger.style.animationDuration = "1s";
    menu.classList.toggle("menu_active");
    handleScrolling();
  });
  overlay.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger_active");
    hamburger.style.animationDuration = "1s";
    menu.classList.toggle("menu_active");
    handleScrolling();
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });

  function handleScrolling() {
    if (menu.classList.contains("menu_active")) {
      fullpage_api.setAllowScrolling(false);
      fullpage_api.setKeyboardScrolling(false);
    } else {
      fullpage_api.setAllowScrolling(true);
      fullpage_api.setKeyboardScrolling(true);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handleMenu);

/***/ }),

/***/ "./src/js/modules/portfolio/portfolio.js":
/*!***********************************************!*\
  !*** ./src/js/modules/portfolio/portfolio.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portfolioItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioItem.js */ "./src/js/modules/portfolio/portfolioItem.js");


function portfolio(containerSelector) {
  var container = document.querySelector(containerSelector);
  new _portfolioItem_js__WEBPACK_IMPORTED_MODULE_0__.PortfolioItem({
    container: container,
    title: 'bringitup',
    repo: 'https://andrewsunshiny.github.io/loanprojct',
    promoImg: '/assets/img/works/bringitup.jpg',
    previewImg: '/assets/img/works/bringitup-preview.jpg',
    columns: 2
  }).mount();
  new _portfolioItem_js__WEBPACK_IMPORTED_MODULE_0__.PortfolioItem({
    container: container,
    repo: 'https://andrewsunshiny.github.io/newprovidence',
    promoImg: '/assets/img/works/newprovidence.jpg',
    previewImg: '/assets/img/works/newprovidence-preview.jpg',
    title: 'newprovidence',
    columns: 2
  }).mount();
  new _portfolioItem_js__WEBPACK_IMPORTED_MODULE_0__.PortfolioItem({
    container: container,
    repo: 'https://andrewsunshiny.github.io/roxy',
    promoImg: '/assets/img/works/roxy.jpg',
    previewImg: '/assets/img/works/roxy-preview.jpg',
    title: 'roxyy',
    columns: 2
  }).mount();
  new _portfolioItem_js__WEBPACK_IMPORTED_MODULE_0__.PortfolioItem({
    container: container,
    repo: 'https://andrewsunshiny.github.io/global',
    promoImg: '/assets/img/works/global.jpg',
    previewImg: '/assets/img/works/global-preview.jpg',
    title: 'roxyy',
    columns: 2
  }).mount();
}

/* harmony default export */ __webpack_exports__["default"] = (portfolio);

/***/ }),

/***/ "./src/js/modules/portfolio/portfolioItem.js":
/*!***************************************************!*\
  !*** ./src/js/modules/portfolio/portfolioItem.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioItem": function() { return /* binding */ PortfolioItem; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PortfolioItem = /*#__PURE__*/function () {
  function PortfolioItem(_ref) {
    var container = _ref.container,
        title = _ref.title,
        repo = _ref.repo,
        promoImg = _ref.promoImg,
        previewImg = _ref.previewImg,
        description = _ref.description,
        _ref$columns = _ref.columns,
        columns = _ref$columns === void 0 ? 1 : _ref$columns,
        _ref$rows = _ref.rows,
        rows = _ref$rows === void 0 ? 1 : _ref$rows;

    _classCallCheck(this, PortfolioItem);

    this.container = container;
    this.title = title;
    this.repo = repo;
    this.promoImg = promoImg;
    this.previewImg = previewImg;
    this.description = description;
    this.rows = rows;
    this.columns = columns;
  }

  _createClass(PortfolioItem, [{
    key: "mount",
    value: function mount() {
      this.container.innerHTML += "\n\t\t\t<a \n\t\t\t\thref=".concat(this.repo, "\n\t\t\t\tclass=\"\n\t\t\t\t\tportfolio__item\n\t\t\t\t\t").concat(this.columns ? 'portfolio__item_c' + this.columns : null, "\n\t\t\t\t\t").concat(this.rows ? 'portfolio__item_r' + this.rows : null, "\n\t\t\t\t\"\n\t\t\t>\n\t\t\t\t<img\n\t\t\t\t\tsrc=").concat(this.promoImg, "\n\t\t\t\t\talt=").concat(this.title, "\n\t\t\t\t\tclass=\"portfolio__item-promoImg\"\n\t\t\t\t/>\n\t\t\t\t<img\n\t\t\t\t\tsrc=").concat(this.previewImg, "\n\t\t\t\t\talt=").concat(this.title, "\n\t\t\t\t\tclass=\"portfolio__item-previewImg animate__animated animate__fadeIn\"\n\t\t\t\t/>\n\t\t\t</a>\n\t\t"); // <div class="portfolio__item-description">
      // 	${this.description}
      // </div>
      // <button class="btn btn_hollow">preview</button>
    }
  }]);

  return PortfolioItem;
}();



/***/ }),

/***/ "./src/js/modules/skills/skills.js":
/*!*****************************************!*\
  !*** ./src/js/modules/skills/skills.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var _skillsData_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./skillsData.js */ "./src/js/modules/skills/skillsData.js");
/* harmony import */ var _skillsBlock_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./skillsBlock.js */ "./src/js/modules/skills/skillsBlock.js");
/* harmony import */ var _skillsContainer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./skillsContainer.js */ "./src/js/modules/skills/skillsContainer.js");
/* harmony import */ var _animate_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../animate.js */ "./src/js/modules/animate.js");
/* harmony import */ var _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../timingFunc.js */ "./src/js/modules/timingFunc.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function skills() {
  var wrapper = document.querySelector('.skills__wrapper');
  window.addEventListener('optimizedResize', function () {
    pageData.pageWidth = document.documentElement.scrollWidth;
    pageData.endLeft = (main.offsetWidth - 270) / 2;
    pageData.fr = parseInt(window.getComputedStyle(main.childNodes[0]).width);
  });

  for (var key in _skillsData_js__WEBPACK_IMPORTED_MODULE_16__["default"]) {
    var container = new _skillsContainer_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
      skill: key
    }).mount();

    if (key !== 'main' && _skillsData_js__WEBPACK_IMPORTED_MODULE_16__["default"][key][0].type !== 'descr') {
      var invisible = new _skillsBlock_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
        type: 'invisible'
      }).mount();
      container.appendChild(invisible);
    }

    for (var i = 0; i < _skillsData_js__WEBPACK_IMPORTED_MODULE_16__["default"][key].length; i++) {
      var item = new _skillsBlock_js__WEBPACK_IMPORTED_MODULE_17__["default"](_objectSpread({}, _skillsData_js__WEBPACK_IMPORTED_MODULE_16__["default"][key][i])).mount();
      container.appendChild(item);
    }

    wrapper.appendChild(container);
    if (key !== 'main') container.style.display = 'none';
  }

  var main = wrapper.querySelector('.skills__blocks');
  var pageData = {
    ready: true,
    pageWidth: document.documentElement.scrollWidth,
    mainWidth: main.offsetWidth <= 320 ? main.offsetWidth : 270,
    endLeft: (wrapper.offsetWidth - 270) / 2,
    fr: parseInt(window.getComputedStyle(main.childNodes[0]).width)
  };
  wrapper.addEventListener('click', function (event) {
    var target = event.target.closest('.skills__block:not(.description)');
    if (!target || !target.classList.contains('skills__block') || !pageData.ready) return;
    var targetData = {
      skill: target.dataset.skill,
      styles: getComputedStyle(target),
      offsetLeft: target.offsetLeft,
      offsetTop: target.offsetTop,
      other: _toConsumableArray(target.parentNode.childNodes).filter(function (n) {
        return n !== target;
      }),
      subskills: null,
      isActive: target.classList.contains('active'),
      text: pageData.pageWidth <= 768 ? target.querySelector('.skills__block-text') : null,
      title: pageData.pageWidth <= 410 ? target.querySelector('.skills__block-subtitle') : null,
      hidden: [],
      activePast: _toConsumableArray(target.parentNode.childNodes).filter(function (n) {
        return n !== target && n.classList.contains('active');
      })[0]
    };
    targetData.height = parseInt(targetData.styles.height);
    targetData.width = parseInt(targetData.styles.width);
    targetData.top = parseInt(targetData.styles.top);
    targetData.left = parseInt(targetData.styles.left);
    if (!targetData.subskills && pageData.pageWidth <= 768) targetData.hidden = _toConsumableArray(target.parentNode.childNodes).filter(function (n) {
      return n !== target && n.offsetTop === target.offsetTop;
    });
    targetData.subskills = document.querySelector(".skills__blocks[data-skills=".concat(targetData.skill, "]"));

    if (targetData.activePast && targetData.text) {
      targetData.textPast = targetData.activePast.querySelector('.skills__block-text');
    }

    if (targetData.activePast && targetData.title) {
      targetData.titlePast = targetData.activePast.querySelector('.skills__block-subtitle');
    }

    if (targetData.subskills) {
      if (!targetData.isActive) {
        toTop(target, targetData);
      } else {
        toOrigin(target, targetData);
      }
    } else {
      if (pageData.pageWidth > 768) return;
      detail(target, targetData);
    }

    fullpage_api.reBuild();
  });

  function toTop(elem, elemData) {
    var offsetTop = elemData.offsetTop,
        offsetLeft = elemData.offsetLeft,
        other = elemData.other,
        subskills = elemData.subskills,
        height = elemData.height,
        width = elemData.width,
        text = elemData.text,
        title = elemData.title,
        pageWidth = pageData.pageWidth,
        mainWidth = pageData.mainWidth,
        endLeft = pageData.endLeft;

    if (pageWidth > 1200) {
      (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
        duration: 500,
        timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
        draw: function draw(progress) {
          elem.style.left = -offsetLeft * progress + 'px';
        }
      });
    } else {
      (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
        duration: 500,
        timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
        draw: function draw(progress) {
          elem.style.left = (endLeft - offsetLeft) * progress + 'px';
        }
      });

      if (text) {
        (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
          duration: 500,
          timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
          draw: function draw(progress) {
            elem.style.height = height + (mainWidth - height) * progress + 'px';
            elem.style.width = width + (mainWidth - width) * progress + 'px';
          }
        });
      }
    }

    (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
      duration: 500,
      timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
      draw: function draw(progress) {
        elem.style.top = -offsetTop * progress + 'px';
      },
      onStart: function onStart() {
        pageData.ready = false;
        main.style.position = 'absolute';
        elem.classList.add('active');
        other.forEach(function (block) {
          block.classList.add('animate__zoomOut');
          block.classList.remove('animate__zoomIn');
        });
        subskills.style = '';
        subskills.classList.add('animate__fadeInUp');
        subskills.classList.remove('animate__fadeOutDown');
        subskills.childNodes.forEach(function (block) {
          if (block.classList.contains('skills__block')) {
            block.style = '';
            block.querySelector('.skills__block-text').style = '';
            block.querySelector('.skills__block-subtitle').style = '';
            block.classList.remove('active', 'animate__zoomOut');
          }
        });

        if (text) {
          text.style.display = 'block';
          text.style.animationDelay = '250ms';
          text.classList.add('animate__animated', 'animate__fadeInUp');
          text.classList.remove('animate__fadeOutDown', 'animate__faster');
        }

        if (title) {
          title.style.display = 'block';
          title.style.animationDelay = '250ms';
          title.classList.add('animate__animated', 'animate__fadeInUp');
          title.classList.remove('animate__fadeOutDown', 'animate__faster');
        }
      },
      onEnd: function onEnd() {
        pageData.ready = true;
      }
    });
  }

  function toOrigin(elem, elemData) {
    var fr = pageData.fr,
        left = elemData.left,
        top = elemData.top,
        other = elemData.other,
        subskills = elemData.subskills,
        text = elemData.text,
        title = elemData.title,
        activePast = elemData.activePast,
        titlePast = elemData.titlePast,
        textPast = elemData.textPast;

    if (text) {
      (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
        duration: 500,
        timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
        draw: function draw(progress) {
          elem.style.height = 270 - (270 - fr) * progress + 'px';
          elem.style.width = 270 - (270 - fr) * progress + 'px';
        }
      });
    }

    (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
      duration: 500,
      timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
      draw: function draw(progress) {
        elem.style.top = top * (1 - progress) + 'px';
        elem.style.left = left * (1 - progress) + 'px';
      },
      onStart: function onStart() {
        pageData.ready = false;
        main.style = '';
        other.forEach(function (block) {
          block.classList.add('animate__zoomIn');
          block.classList.remove('animate__zoomOut');
        });

        if (text) {
          text.style = '';
          text.classList.remove('animate__fadeInUp');
          text.classList.add('animate__fadeOutDown', 'animate__faster');
        }

        if (title) {
          title.style = '';
          title.classList.remove('animate__fadeInUp');
          title.classList.add('animate__fadeOutDown', 'animate__faster');
        }

        subskills.style.position = 'absolute';
        subskills.classList.add('animate__fadeOutDown');
        subskills.classList.remove('animate__fadeInUp');

        if (activePast) {
          activePast.style = '';
          titlePast.style = '';
          textPast.style = '';
        }
      },
      onEnd: function onEnd() {
        elem.classList.remove('active');
        subskills.style.display = 'none';
        pageData.ready = true;
      }
    });
  }

  function detail(elem, elemData) {
    var pageWidth = pageData.pageWidth,
        mainWidth = pageData.mainWidth;
    if (pageWidth > 768) return;
    var endLeft = pageData.endLeft,
        fr = pageData.fr,
        offsetLeft = elemData.offsetLeft,
        hidden = elemData.hidden,
        isActive = elemData.isActive,
        text = elemData.text,
        title = elemData.title,
        activePast = elemData.activePast,
        textPast = elemData.textPast,
        titlePast = elemData.titlePast;
    var left = activePast ? parseInt(activePast.style.left) : parseInt(elem.style.left),
        hiddenPast = activePast ? _toConsumableArray(activePast.parentNode.childNodes).filter(function (n) {
      return n !== activePast && n.offsetTop === activePast.offsetTop;
    }) : null;

    if (isActive) {
      (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
        duration: 500,
        timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
        draw: function draw(progress) {
          elem.style.height = mainWidth - (mainWidth - fr) * progress + 'px';
          elem.style.width = mainWidth - (mainWidth - fr) * progress + 'px';
          elem.style.left = left * (1 - progress) + 'px';
        },
        onStart: function onStart() {
          text.style.animationDelay = '0s';
          text.classList.remove('animate__fadeInUp');
          text.classList.add('animate__fadeOutDown', 'animate__faster');

          if (title) {
            title.style.animationDelay = '0s';
            title.classList.remove('animate__fadeInUp');
            title.classList.add('animate__fadeOutDown', 'animate__faster');
          }

          hidden.forEach(function (block) {
            block.classList.add('animate__zoomIn');
            block.classList.remove('animate__zoomOut');
          });
        },
        onEnd: function onEnd() {
          elem.classList.remove('active');
        }
      });
    } else {
      (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
        duration: 500,
        timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
        draw: function draw(progress) {
          elem.style.height = fr + (mainWidth - fr) * progress + 'px';
          elem.style.width = fr + (mainWidth - fr) * progress + 'px';
          elem.style.left = -offsetLeft * progress + endLeft * progress + 'px';
        },
        onStart: function onStart() {
          elem.classList.add('active');
          text.style.display = 'block';
          text.style.animationDelay = '250ms';
          text.classList.add('animate__animated', 'animate__fadeInUp');
          text.classList.remove('animate__fadeOutDown', 'animate__faster');

          if (title) {
            title.style.display = 'block';
            title.style.animationDelay = '250ms';
            title.classList.add('animate__animated', 'animate__fadeInUp');
            title.classList.remove('animate__fadeOutDown', 'animate__faster');
          }

          hidden.forEach(function (block) {
            block.classList.add('animate__animated', 'animate__zoomOut');
            block.classList.remove('animate__zoomIn');
          });
        }
      });

      if (activePast) {
        (0,_animate_js__WEBPACK_IMPORTED_MODULE_19__["default"])({
          duration: 500,
          timing: _timingFunc_js__WEBPACK_IMPORTED_MODULE_20__.easeInOut,
          draw: function draw(progress) {
            activePast.style.height = mainWidth - (mainWidth - fr) * progress + 'px';
            activePast.style.width = mainWidth - (mainWidth - fr) * progress + 'px';
            activePast.style.left = -left * (progress - 1) + 'px';
          },
          onStart: function onStart() {
            hiddenPast.forEach(function (block) {
              block.classList.add('animate__zoomIn');
              block.classList.remove('animate__zoomOut');
            });
            textPast.style.animationDelay = '0s';
            textPast.classList.remove('animate__fadeInUp');
            textPast.classList.add('animate__fadeOutDown', 'animate__faster');

            if (titlePast) {
              titlePast.style.animationDelay = '0s';
              titlePast.classList.remove('animate__fadeInUp');
              titlePast.classList.add('animate__fadeOutDown', 'animate__faster');
            }

            pageData.ready = false;
          },
          onEnd: function onEnd() {
            activePast.classList.remove('active');
            pageData.ready = true;
          }
        });
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (skills);

/***/ }),

/***/ "./src/js/modules/skills/skillsBlock.js":
/*!**********************************************!*\
  !*** ./src/js/modules/skills/skillsBlock.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SkillsBlock = /*#__PURE__*/function () {
  function SkillsBlock(_ref) {
    var _ref$skill = _ref.skill,
        skill = _ref$skill === void 0 ? null : _ref$skill,
        color = _ref.color,
        title = _ref.title,
        img = _ref.img,
        text = _ref.text,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? skill : _ref$type;

    _classCallCheck(this, SkillsBlock);

    this.skill = skill;
    this.color = color;
    this.title = title;
    this.img = img;
    this.text = text;
    this.type = type;
  }

  _createClass(SkillsBlock, [{
    key: "mount",
    value: function mount() {
      var block = document.createElement('div');

      switch (this.type) {
        case 'invisible':
          block.classList.add('invisible');
          break;

        case 'descr':
          block.classList.add('skills__block', 'description');
          block.innerHTML = "\n\t\t\t\t\t<h3 class=\"\n\t\t\t\t\t\tsubtitle\n\t\t\t\t\t\tsubtitle_fz14\n\t\t\t\t\t\tskills__block-subtitle\"\n\t\t\t\t\t>\n\t\t\t\t\t\t".concat(this.title, "\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p class=\"skills__block-text\">\n\t\t\t\t\t\t").concat(this.text, "\n\t\t\t\t\t</p>\t\n\t\t\t\t");
          break;

        default:
          if (this.skill) block.setAttribute('data-skill', this.skill);
          block.classList.add('skills__block', 'animate__animated');
          block.innerHTML = "\n\t\t\t\t\t<img\n\t\t\t\t\t\tclass=\"skills__block-img\"\n\t\t\t\t\t\tsrc=".concat(this.img, "\n\t\t\t\t\t\talt=").concat(this.title, "\n\t\t\t\t\t/>\n\t\t\t\t\t<h3 class=\"\n\t\t\t\t\t\tsubtitle\n\t\t\t\t\t\tsubtitle_fz14\n\t\t\t\t\t\tskills__block-subtitle\"\n\t\t\t\t\t>\n\t\t\t\t\t\t").concat(this.title, "\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p class=\"skills__block-text\">\n\t\t\t\t\t\t").concat(this.text, "\n\t\t\t\t\t</p>\n\t\t\t\t\t").concat(this.skill ? "\n\t\t\t\t\t\t\t<div class=\"skills__block-line skills__block-line_1\" style=\"background-color: ".concat(this.color, "\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"skills__block-line skills__block-line_2\" style=\"background-color: ").concat(this.color, "\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t") : '', "\n\t\t\t\t");
          break;
      }

      return block;
    }
  }]);

  return SkillsBlock;
}();

/* harmony default export */ __webpack_exports__["default"] = (SkillsBlock);

/***/ }),

/***/ "./src/js/modules/skills/skillsContainer.js":
/*!**************************************************!*\
  !*** ./src/js/modules/skills/skillsContainer.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SkillsContainer = /*#__PURE__*/function () {
  function SkillsContainer(_ref) {
    var _ref$skill = _ref.skill,
        skill = _ref$skill === void 0 ? null : _ref$skill,
        _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children;

    _classCallCheck(this, SkillsContainer);

    this.skill = skill;
    this.children = children;
  }

  _createClass(SkillsContainer, [{
    key: "mount",
    value: function mount() {
      var container = document.createElement('div');
      container.setAttribute('data-skills', this.skill);
      container.classList.add('skills__blocks', 'animate__animated');
      return container;
    }
  }]);

  return SkillsContainer;
}();

/* harmony default export */ __webpack_exports__["default"] = (SkillsContainer);

/***/ }),

/***/ "./src/js/modules/skills/skillsData.js":
/*!*********************************************!*\
  !*** ./src/js/modules/skills/skillsData.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var skillsData = {
  main: [{
    skill: 'html',
    img: '/assets/icons/skills/html5.svg',
    title: 'HTML5',
    text: 'It is he who creates the skeleton of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product',
    color: '#e44d26'
  }, {
    skill: 'css',
    img: '/assets/icons/skills/css3.svg',
    title: 'CSS3',
    text: 'This style language allows me to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!',
    color: '#1572b6'
  }, {
    skill: 'js',
    img: '/assets/icons/skills/js.svg',
    title: 'JavaScript',
    text: 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.',
    color: '#f7df1e'
  }, {
    img: '/assets/icons/skills/react.svg',
    title: 'React.js',
    text: 'This library allows you to create web applications. We can create the most interactive product specifically for your goals.',
    color: '#53c1de'
  }, {
    img: '/assets/icons/skills/svelte.svg',
    title: 'Svelte.js',
    text: 'Rather than a compiler than a framework, it compiles code when building an app and creates a very lightweight and handy code that can be used with other libraries or frameworks.',
    color: '#53c1de'
  }, {
    skill: 'additionals',
    img: '/assets/icons/skills/additionals.svg',
    title: 'Additional technologies',
    text: 'Applications, technologies, and everything else that I also use while working.',
    color: '#6b69d6'
  }],
  html: [{
    img: '/assets/icons/skills/pug.svg',
    title: 'Pug/Jade',
    text: 'The preprocessor which greatly speeds up and simplifies the writing of HTML templates.',
    color: '#56332b'
  }, {
    img: '/assets/icons/skills/bootstrap.svg',
    title: 'Bootstrap',
    text: 'The most popular HTML, CSS and JS library in the world, helps to quickly and efficiently create projects with responsive design.',
    color: '#8512fb'
  }, {
    img: '/assets/icons/skills/materialize.svg',
    title: 'Materialize',
    text: 'Library for responsive design based on Material Design from Google.',
    color: '#eb7077'
  }],
  css: [{
    img: '/assets/icons/skills/sass.svg',
    title: 'Sass',
    text: 'A preprocessor that superpowers CSS, it is very easy to scale an existing stylesheet with it',
    color: '#cb6699'
  }, {
    img: '/assets/icons/skills/less.svg',
    title: 'Less',
    text: "It is a dynamic style language for CSS. To put it simply, it's the same Sass, but simpler and easier.",
    color: '#2a4d80'
  }],
  js: [{
    img: '/assets/icons/skills/ts.svg',
    title: 'TypeScript',
    text: 'A strongly typed programming language that builds on JavaScript and gives better tooling and error catching',
    color: '#007acc'
  }, {
    img: '/assets/icons/skills/eslint.svg',
    title: 'ESLint',
    text: 'It is a JavaScript linter that analyzes my code and helps me prevent different errors.',
    color: '#007acc'
  }, {
    img: '/assets/icons/skills/babel.svg',
    title: 'Babel',
    text: 'The Jquery library will speed up development. We will not integrate it into the project without the need to integrate it, but the skill of working with it is present.',
    color: '#f9dc3e'
  }, {
    img: '/assets/icons/skills/jquery.svg',
    title: 'Jquery',
    text: 'The Jquery library will speed up development. We will not integrate it into the project without the need to integrate it, but the skill of working with it is present.',
    color: '#21609b'
  }, {
    img: '/assets/icons/skills/rollup.svg',
    title: 'Rollup',
    text: 'A JavaScript module bundler allows compiling code from much of different minor pieces to one single file.',
    color: '#3c99d4'
  }],
  additionals: [{
    img: '/assets/icons/skills/vscode.svg',
    title: 'VS Code',
    text: 'The main code editor that I use in my work. Constant support, many plugins and built-in terminal have made it a favorite of many developers.',
    color: '#3c99d4'
  }, {
    img: '/assets/icons/skills/prettier.svg',
    title: 'Prettier',
    text: 'One of the most popular code formatter allows writing a better-looking readable code and saves a lot of time. Supports many languages.',
    color: '#3c99d4'
  }, {
    img: '/assets/icons/skills/webpack.svg',
    title: 'Webpack',
    text: 'A module collector with a lot of possibilities, in particular, it can parse JavaScript and other code.',
    color: '#8ed6fb'
  }, {
    img: '/assets/icons/skills/gulp.svg',
    title: 'Gulp',
    text: 'A task manager for automatically performing frequently used tasks, written in the JavaScript programming language. Makes work very easy.',
    color: '#eb4a4b'
  }, {
    img: '/assets/icons/skills/git.svg',
    title: 'Git',
    text: 'Version control system, a very powerful tool without which no large project can do.',
    color: '#8ed6fb'
  }, {
    img: '/assets/icons/skills/redux.svg',
    title: 'Redux',
    text: 'This library is a store or state manager, used in conjunction with React to create an application whose elements must behave in a variety of ways.',
    color: '#764abc'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (skillsData);

/***/ }),

/***/ "./src/js/modules/throttle.js":
/*!************************************!*\
  !*** ./src/js/modules/throttle.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var throttle = function throttle(type, name, obj) {
  obj = obj || window;
  var running = false;

  var func = function func() {
    if (running) {
      return;
    }

    running = true;
    requestAnimationFrame(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  obj.addEventListener(type, func);
};

/* harmony default export */ __webpack_exports__["default"] = (throttle);

/***/ }),

/***/ "./src/js/modules/timingFunc.js":
/*!**************************************!*\
  !*** ./src/js/modules/timingFunc.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quad": function() { return /* binding */ quad; },
/* harmony export */   "circ": function() { return /* binding */ circ; },
/* harmony export */   "easeInOut": function() { return /* binding */ easeInOut; }
/* harmony export */ });
function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}

function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}

var easeInOut = makeEaseInOut(circ);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_throttle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/throttle.js */ "./src/js/modules/throttle.js");
/* harmony import */ var _modules_handleMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleMenu.js */ "./src/js/modules/handleMenu.js");
/* harmony import */ var _modules_barsFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/barsFunction.js */ "./src/js/modules/barsFunction.js");
/* harmony import */ var _modules_fullpageInit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fullpageInit.js */ "./src/js/modules/fullpageInit.js");
/* harmony import */ var _modules_skills_skills_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/skills/skills.js */ "./src/js/modules/skills/skills.js");
/* harmony import */ var _modules_portfolio_portfolio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/portfolio/portfolio.js */ "./src/js/modules/portfolio/portfolio.js");






window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  (0,_modules_throttle_js__WEBPACK_IMPORTED_MODULE_0__["default"])('resize', 'optimizedResize');
  (0,_modules_barsFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_fullpageInit_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_handleMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_skills_skills_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_portfolio_portfolio_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.portfolio__wrapper');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map