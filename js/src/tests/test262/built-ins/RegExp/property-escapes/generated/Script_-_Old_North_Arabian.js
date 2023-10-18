// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Old_North_Arabian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010A80, 0x010A9F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Old_North_Arabian}+$/u,
  matchSymbols,
  "\\p{Script=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\p{Script=Narb}+$/u,
  matchSymbols,
  "\\p{Script=Narb}"
);
testPropertyEscapes(
  /^\p{sc=Old_North_Arabian}+$/u,
  matchSymbols,
  "\\p{sc=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\p{sc=Narb}+$/u,
  matchSymbols,
  "\\p{sc=Narb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010A7F],
    [0x010AA0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Old_North_Arabian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\P{Script=Narb}+$/u,
  nonMatchSymbols,
  "\\P{Script=Narb}"
);
testPropertyEscapes(
  /^\P{sc=Old_North_Arabian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Old_North_Arabian}"
);
testPropertyEscapes(
  /^\P{sc=Narb}+$/u,
  nonMatchSymbols,
  "\\P{sc=Narb}"
);

reportCompare(0, 0);
