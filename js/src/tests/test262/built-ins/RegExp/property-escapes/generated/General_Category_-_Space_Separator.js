// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Space_Separator`
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
    0x0000A0,
    0x001680,
    0x00202F,
    0x00205F,
    0x003000
  ],
  ranges: [
    [0x002000, 0x00200A]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Space_Separator}+$/u,
  matchSymbols,
  "\\p{General_Category=Space_Separator}"
);
testPropertyEscapes(
  /^\p{General_Category=Zs}+$/u,
  matchSymbols,
  "\\p{General_Category=Zs}"
);
testPropertyEscapes(
  /^\p{gc=Space_Separator}+$/u,
  matchSymbols,
  "\\p{gc=Space_Separator}"
);
testPropertyEscapes(
  /^\p{gc=Zs}+$/u,
  matchSymbols,
  "\\p{gc=Zs}"
);
testPropertyEscapes(
  /^\p{Space_Separator}+$/u,
  matchSymbols,
  "\\p{Space_Separator}"
);
testPropertyEscapes(
  /^\p{Zs}+$/u,
  matchSymbols,
  "\\p{Zs}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00001F],
    [0x000021, 0x00009F],
    [0x0000A1, 0x00167F],
    [0x001681, 0x001FFF],
    [0x00200B, 0x00202E],
    [0x002030, 0x00205E],
    [0x002060, 0x002FFF],
    [0x003001, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Space_Separator}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Space_Separator}"
);
testPropertyEscapes(
  /^\P{General_Category=Zs}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Zs}"
);
testPropertyEscapes(
  /^\P{gc=Space_Separator}+$/u,
  nonMatchSymbols,
  "\\P{gc=Space_Separator}"
);
testPropertyEscapes(
  /^\P{gc=Zs}+$/u,
  nonMatchSymbols,
  "\\P{gc=Zs}"
);
testPropertyEscapes(
  /^\P{Space_Separator}+$/u,
  nonMatchSymbols,
  "\\P{Space_Separator}"
);
testPropertyEscapes(
  /^\P{Zs}+$/u,
  nonMatchSymbols,
  "\\P{Zs}"
);

reportCompare(0, 0);
