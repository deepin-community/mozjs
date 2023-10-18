// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Devanagari`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0020F0
  ],
  ranges: [
    [0x000900, 0x000952],
    [0x000955, 0x00097F],
    [0x001CD0, 0x001CF6],
    [0x001CF8, 0x001CF9],
    [0x00A830, 0x00A839],
    [0x00A8E0, 0x00A8FF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Devanagari}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Devanagari}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Deva}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Deva}"
);
testPropertyEscapes(
  /^\p{scx=Devanagari}+$/u,
  matchSymbols,
  "\\p{scx=Devanagari}"
);
testPropertyEscapes(
  /^\p{scx=Deva}+$/u,
  matchSymbols,
  "\\p{scx=Deva}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x001CF7
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0008FF],
    [0x000953, 0x000954],
    [0x000980, 0x001CCF],
    [0x001CFA, 0x0020EF],
    [0x0020F1, 0x00A82F],
    [0x00A83A, 0x00A8DF],
    [0x00A900, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Devanagari}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Devanagari}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Deva}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Deva}"
);
testPropertyEscapes(
  /^\P{scx=Devanagari}+$/u,
  nonMatchSymbols,
  "\\P{scx=Devanagari}"
);
testPropertyEscapes(
  /^\P{scx=Deva}+$/u,
  nonMatchSymbols,
  "\\P{scx=Deva}"
);

reportCompare(0, 0);
