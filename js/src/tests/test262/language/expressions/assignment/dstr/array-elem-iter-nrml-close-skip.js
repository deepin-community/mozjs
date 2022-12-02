// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-iter-nrml-close-skip.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: IteratorClose is not called when assignment evaluation has exhausted the iterator (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [Symbol.iterator, destructuring-binding]
flags: [generated]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.

    ArrayAssignmentPattern : [ AssignmentElementList ]

    [...]
    5. If iteratorRecord.[[done]] is false, return IteratorClose(iterator, result).
    6. Return result.

---*/
var nextCount = 0;
var returnCount = 0;
var _;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;
    return {};
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};

var result;
var vals = iterable;

result = [ _ ] = vals;

assert.sameValue(nextCount, 1);
assert.sameValue(returnCount, 0);

assert.sameValue(result, vals);

reportCompare(0, 0);
