// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-map.prototype.delete
description: >
  Throws a TypeError if `this` does not have a [[MapData]] internal slot.
info: |
  Map.prototype.delete ( key )

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  Map.prototype.delete.call({}, 'attr');
});

assert.throws(TypeError, function() {
  Map.prototype.delete.call([], 'attr');
});

reportCompare(0, 0);
