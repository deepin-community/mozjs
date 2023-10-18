// |reftest| error:SyntaxError module
// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-semantics-static-semantics-early-errors
description: Early error when referencing privatename outside of class
info: |
  Static Semantics: Early Errors
  Module : ModuleBody
    It is a Syntax Error if AllPrivateNamesValid of ModuleBody with an empty List as an argument is false.
features: [class, class-fields-private]
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  #x;
}

new C().#x;
