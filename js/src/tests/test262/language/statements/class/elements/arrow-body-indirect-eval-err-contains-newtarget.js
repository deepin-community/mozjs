// This file was procedurally generated from the following sources:
// - src/class-elements/eval-err-contains-newtarget.case
// - src/class-elements/initializer-eval-newtarget/cls-decl-fields-indirect-eval-arrow-body.template
/*---
description: error if `new.target` in StatementList of eval (indirect eval)
esid: sec-performeval-rules-in-initializer
features: [class, new.target, class-fields-public]
flags: [generated]
info: |
    Additional Early Error Rules for Eval Inside Initializer
    These static semantics are applied by PerformEval when a direct eval call occurs inside a class field initializer.
    ScriptBody : StatementList

      ...
      The remaining eval rules apply as outside a constructor, inside a method, and inside a function.

    Additional Early Error Rules for Eval Outside Functions
    These static semantics are applied by PerformEval when a direct eval call occurs outside of any function.
    ScriptBody : StatementList

      It is a Syntax Error if StatementList Contains NewTarget.

---*/


class C {
  x = (0, eval)('() => new.target;');
}

assert.throws(SyntaxError, function() {
  new C().x();
});


reportCompare(0, 0);
