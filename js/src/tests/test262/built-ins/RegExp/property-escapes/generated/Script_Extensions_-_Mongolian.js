// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Mongolian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00202F
  ],
  ranges: [
    [0x001800, 0x001819],
    [0x001820, 0x001878],
    [0x001880, 0x0018AA],
    [0x011660, 0x01166C]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Mongolian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mongolian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mong}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mong}"
);
testPropertyEscapes(
  /^\p{scx=Mongolian}+$/u,
  matchSymbols,
  "\\p{scx=Mongolian}"
);
testPropertyEscapes(
  /^\p{scx=Mong}+$/u,
  matchSymbols,
  "\\p{scx=Mong}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0017FF],
    [0x00181A, 0x00181F],
    [0x001879, 0x00187F],
    [0x0018AB, 0x00202E],
    [0x002030, 0x00DBFF],
    [0x00E000, 0x01165F],
    [0x01166D, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Mongolian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mongolian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mong}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mong}"
);
testPropertyEscapes(
  /^\P{scx=Mongolian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mongolian}"
);
testPropertyEscapes(
  /^\P{scx=Mong}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mong}"
);

reportCompare(0, 0);
