// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.subtract
description: Mixed positive and negative values or missing properties always throw
features: [Temporal]
---*/

const plainTime = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
assert.throws(RangeError, () => plainTime.subtract({ hours: 1, minutes: -6 }), "mixed signs");
assert.throws(TypeError, () => plainTime.subtract({}), "no properties");
assert.throws(TypeError, () => plainTime.subtract({ hour: 12 }), "only singular 'hour' property");

reportCompare(0, 0);
