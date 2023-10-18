// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "valueOf"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "valueOf"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("valueOf"),
  true,
  'Date.prototype.hasOwnProperty("valueOf") must return true'
);

reportCompare(0, 0);
