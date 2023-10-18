// |reftest| skip-if(release_or_beta) -- Intl.NumberFormat-v3 is not released yet
// Copyright 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: Tests that the option useGrouping is processed correctly.
info: |
  The "Intl.NumberFormat v3" proposal contradicts the behavior required by the
  latest revision of ECMA402. Likewise, this test contradicts
  test-option-useGrouping.js. Until the proposal is included in a published
  standard (when the tests' discrepancies can be resolved), implementations
  should only expect to pass one of these two tests.
features: [Intl.NumberFormat-v3]
---*/

function render(options) {
  var nf = new Intl.NumberFormat(undefined, options);
  return nf.resolvedOptions().useGrouping;
}

assert.sameValue(render({}), 'auto', '(omitted)');
assert.sameValue(render({useGrouping: undefined}), 'auto', 'undefined');
assert.sameValue(render({useGrouping: 'auto'}), 'auto', '"auto"');
assert.sameValue(render({useGrouping: true}), 'always', 'true');
assert.sameValue(render({useGrouping: 'always'}), 'always', '"always"');
assert.sameValue(render({useGrouping: false}), false, 'false');
assert.sameValue(render({useGrouping: null}), false, 'null');
assert.sameValue(render({useGrouping: 'min2'}), 'min2', '"min2"');

assert.sameValue(render({notation: 'compact'}), 'min2', 'compact, (omitted)');
assert.sameValue(render({notation: 'compact', useGrouping: undefined}), 'min2', 'compact, undefined');
assert.sameValue(render({notation: 'compact', useGrouping: 'auto'}), 'auto', 'compact, "auto"');
assert.sameValue(render({notation: 'compact', useGrouping: true}), 'always', 'compact, true');
assert.sameValue(render({notation: 'compact', useGrouping: 'always'}), 'always', 'compact, "always"');
assert.sameValue(render({notation: 'compact', useGrouping: false}), false, 'compact, false');
assert.sameValue(render({notation: 'compact', useGrouping: null}), false, 'compact, null');
assert.sameValue(render({notation: 'compact', useGrouping: 'min2'}), 'min2', 'compact, "min2"');

assert.throws(RangeError, function() {
  new Intl.NumberFormat(undefined, {useGrouping: 'undefined'});
}, '"undefined"');

assert.throws(RangeError, function() {
  new Intl.NumberFormat(undefined, {useGrouping: 'false'});
}, '"false"');

assert.throws(RangeError, function() {
  new Intl.NumberFormat(undefined, {useGrouping: 'true'});
}, '"true"');

assert.throws(RangeError, function() {
  new Intl.NumberFormat(undefined, {useGrouping: 'min3'});
}, '"min3"');

reportCompare(0, 0);
