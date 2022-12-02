// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `White_Space`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000020,
    0x000085,
    0x0000A0,
    0x001680,
    0x00202F,
    0x00205F,
    0x003000
  ],
  ranges: [
    [0x000009, 0x00000D],
    [0x002000, 0x00200A],
    [0x002028, 0x002029]
  ]
});
testPropertyEscapes(
  /^\p{White_Space}+$/u,
  matchSymbols,
  "\\p{White_Space}"
);
testPropertyEscapes(
  /^\p{space}+$/u,
  matchSymbols,
  "\\p{space}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000008],
    [0x00000E, 0x00001F],
    [0x000021, 0x000084],
    [0x000086, 0x00009F],
    [0x0000A1, 0x00167F],
    [0x001681, 0x001FFF],
    [0x00200B, 0x002027],
    [0x00202A, 0x00202E],
    [0x002030, 0x00205E],
    [0x002060, 0x002FFF],
    [0x003001, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{White_Space}+$/u,
  nonMatchSymbols,
  "\\P{White_Space}"
);
testPropertyEscapes(
  /^\P{space}+$/u,
  nonMatchSymbols,
  "\\P{space}"
);

reportCompare(0, 0);
