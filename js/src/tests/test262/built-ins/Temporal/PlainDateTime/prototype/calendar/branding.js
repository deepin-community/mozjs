// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindatetime.prototype.calendar
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const calendar = Object.getOwnPropertyDescriptor(Temporal.PlainDateTime.prototype, "calendar").get;

assert.sameValue(typeof calendar, "function");

assert.throws(TypeError, () => calendar.call(undefined), "undefined");
assert.throws(TypeError, () => calendar.call(null), "null");
assert.throws(TypeError, () => calendar.call(true), "true");
assert.throws(TypeError, () => calendar.call(""), "empty string");
assert.throws(TypeError, () => calendar.call(Symbol()), "symbol");
assert.throws(TypeError, () => calendar.call(1), "1");
assert.throws(TypeError, () => calendar.call({}), "plain object");
assert.throws(TypeError, () => calendar.call(Temporal.PlainDateTime), "Temporal.PlainDateTime");
assert.throws(TypeError, () => calendar.call(Temporal.PlainDateTime.prototype), "Temporal.PlainDateTime.prototype");

reportCompare(0, 0);
