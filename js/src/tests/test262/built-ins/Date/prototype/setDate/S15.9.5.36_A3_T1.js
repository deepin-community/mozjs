// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setDate property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
esid: sec-date.prototype.setdate
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

var x = Date.prototype.setDate.length;
verifyNotWritable(Date.prototype.setDate, "length", null, 1);

assert.sameValue(
  Date.prototype.setDate.length,
  x,
  'The value of Date.prototype.setDate.length is expected to equal the value of x'
);

// TODO: Convert to verifyProperty() format.

reportCompare(0, 0);
