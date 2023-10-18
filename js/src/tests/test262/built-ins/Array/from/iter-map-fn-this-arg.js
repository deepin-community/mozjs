// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.from
description: >
    `this` value of mapping function with custom `this` argument (traversed via iterator)
info: |
    [...]
    2. If mapfn is undefined, let mapping be false.
    3. else
       a. If IsCallable(mapfn) is false, throw a TypeError exception.
       b. If thisArg was supplied, let T be thisArg; else let T be undefined.
       c. Let mapping be true
    [...]
    6. If usingIterator is not undefined, then
       [...]
       g. Repeat
          [...]
          vii. If mapping is true, then
               1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
features: [Symbol.iterator]
---*/

var thisVals = [];
var nextResult = {
  done: false,
  value: {}
};
var nextNextResult = {
  done: false,
  value: {}
};
var mapFn = function() {
  thisVals.push(this);
};
var items = {};
var thisVal = {};

items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextResult;
      nextResult = nextNextResult;
      nextNextResult = {
        done: true
      };

      return result;
    }
  };
};

Array.from(items, mapFn, thisVal);

assert.sameValue(thisVals.length, 2, 'The value of thisVals.length is expected to be 2');
assert.sameValue(thisVals[0], thisVal, 'The value of thisVals[0] is expected to equal the value of thisVal');
assert.sameValue(thisVals[1], thisVal, 'The value of thisVals[1] is expected to equal the value of thisVal');

reportCompare(0, 0);
