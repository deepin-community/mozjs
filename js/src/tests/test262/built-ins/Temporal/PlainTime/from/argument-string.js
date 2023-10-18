// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.from
description: Various ISO strings supported
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const tests = [
  ["15:23", 15, 23, 0, 0, 0, 0],
  ["15:23:30", 15, 23, 30, 0, 0, 0],
  ["15:23:30.123", 15, 23, 30, 123, 0, 0],
  ["15:23:30.123456", 15, 23, 30, 123, 456, 0],
  ["15:23:30.123456789", 15, 23, 30, 123, 456, 789],
  ["1976-11-18T15:23:30.1", 15, 23, 30, 100, 0, 0],
  ["1976-11-18T15:23:30.12", 15, 23, 30, 120, 0, 0],
  ["1976-11-18T15:23:30.123", 15, 23, 30, 123, 0, 0],
  ["1976-11-18T15:23:30.1234", 15, 23, 30, 123, 400, 0],
  ["1976-11-18T15:23:30.12345", 15, 23, 30, 123, 450, 0],
  ["1976-11-18T15:23:30.123456", 15, 23, 30, 123, 456, 0],
  ["1976-11-18T15:23:30.1234567", 15, 23, 30, 123, 456, 700],
  ["1976-11-18T15:23:30.12345678", 15, 23, 30, 123, 456, 780],
  ["1976-11-18T15:23:30.123456789", 15, 23, 30, 123, 456, 789],
  ["1976-11-18T15:23:30,12", 15, 23, 30, 120, 0, 0],
  ["1976-11-18T15:23:30.12\u221202:00", 15, 23, 30, 120, 0, 0],
  ["152330", 15, 23, 30, 0, 0, 0],
  ["152330.1", 15, 23, 30, 100, 0, 0],
  ["152330-08", 15, 23, 30, 0, 0, 0],
  ["152330.1-08", 15, 23, 30, 100, 0, 0],
  ["152330-0800", 15, 23, 30, 0, 0, 0],
  ["152330.1-0800", 15, 23, 30, 100, 0, 0],
  ["1976-11-18T152330.1+00:00", 15, 23, 30, 100, 0, 0],
  ["19761118T15:23:30.1+00:00", 15, 23, 30, 100, 0, 0],
  ["1976-11-18T15:23:30.1+0000", 15, 23, 30, 100, 0, 0],
  ["1976-11-18T152330.1+0000", 15, 23, 30, 100, 0, 0],
  ["19761118T15:23:30.1+0000", 15, 23, 30, 100, 0, 0],
  ["19761118T152330.1+00:00", 15, 23, 30, 100, 0, 0],
  ["19761118T152330.1+0000", 15, 23, 30, 100, 0, 0],
  ["+001976-11-18T152330.1+00:00", 15, 23, 30, 100, 0, 0],
  ["+0019761118T15:23:30.1+00:00", 15, 23, 30, 100, 0, 0],
  ["+001976-11-18T15:23:30.1+0000", 15, 23, 30, 100, 0, 0],
  ["+001976-11-18T152330.1+0000", 15, 23, 30, 100, 0, 0],
  ["+0019761118T15:23:30.1+0000", 15, 23, 30, 100, 0, 0],
  ["+0019761118T152330.1+00:00", 15, 23, 30, 100, 0, 0],
  ["+0019761118T152330.1+0000", 15, 23, 30, 100, 0, 0],
  ["15", 15, 0, 0, 0, 0, 0],
  ["T15:23:30", 15, 23, 30, 0, 0, 0],
  ["t152330", 15, 23, 30, 0, 0, 0],
];

for (const [input, ...expected] of tests) {
  const result = Temporal.PlainTime.from(input);
  assert.sameValue(expected.length, 6, input);
  TemporalHelpers.assertPlainTime(result, ...expected, input);
}

reportCompare(0, 0);
