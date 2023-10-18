// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.subtract
description: relativeTo with years.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const d1 = new Temporal.Duration(0, 2, 1, 4);
const d2 = new Temporal.Duration(0, 1, 1, 1);
const relativeTo = new Temporal.PlainDate(2000, 1, 1);
TemporalHelpers.assertDuration(d1.subtract(d2, { relativeTo }),
  0, 1, 0, 3, 0, 0, 0, 0, 0, 0,
  "first this is resolved against relativeTo, then the argument against relativeTo + this");

reportCompare(0, 0);
