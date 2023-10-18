// |jit-test| skip-if: !wasmSimdEnabled()

/* Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ./test/core/simd/simd_i32x4_dot_i16x8.wast

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:4
let $0 = instantiate(`(module
  (func (export "i32x4.dot_i16x8_s") (param v128 v128) (result v128) (i32x4.dot_i16x8_s (local.get 0) (local.get 1)))
)`);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:10
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:13
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:16
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:19
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:22
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0xfffffffe, 0xfffffffe, 0xfffffffe, 0xfffffffe])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:25
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:28
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff]),
      i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    ]),
  [i32x4([0x1fff8000, 0x1fff8000, 0x1fff8000, 0x1fff8000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:31
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
      i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    ]),
  [i32x4([0x20000000, 0x20000000, 0x20000000, 0x20000000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:34
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001]),
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    ]),
  [i32x4([0x1fff8000, 0x1fff8000, 0x1fff8000, 0x1fff8000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:37
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    ]),
  [i32x4([0x20000000, 0x20000000, 0x20000000, 0x20000000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:40
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff]),
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    ]),
  [i32x4([0x20008000, 0x20008000, 0x20008000, 0x20008000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:43
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i32x4([0xfffa, 0xfffa, 0xfffa, 0xfffa])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:46
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i32x4([0xfffc, 0xfffc, 0xfffc, 0xfffc])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:49
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i32x4([0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:52
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0xfffc, 0xfffc, 0xfffc, 0xfffc])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:55
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0xfffe, 0xfffe, 0xfffe, 0xfffe])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:58
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0x10000, 0x10000, 0x10000, 0x10000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:61
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
      i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    ]),
  [i32x4([0x7ffe0002, 0x7ffe0002, 0x7ffe0002, 0x7ffe0002])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:64
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:67
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
    ]),
  [i32x4([0x7fff0000, 0x7fff0000, 0x7fff0000, 0x7fff0000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:70
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:73
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i32x4([0xfffffffe, 0xfffffffe, 0xfffffffe, 0xfffffffe])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:76
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:79
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    ]),
  [i32x4([0xffff0002, 0xffff0002, 0xffff0002, 0xffff0002])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:82
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    ]),
  [i32x4([0x10000, 0x10000, 0x10000, 0x10000])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:85
assert_return(
  () =>
    invoke($0, `i32x4.dot_i16x8_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:90
assert_invalid(
  () =>
    instantiate(
      `(module (func (result v128) (i32x4.dot_i16x8_s (i32.const 0) (f32.const 0.0))))`,
    ),
  `type mismatch`,
);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:94
assert_invalid(() =>
  instantiate(`(module
    (func $$i32x4.dot_i16x8_s-1st-arg-empty (result v128)
      (i32x4.dot_i16x8_s (v128.const i32x4 0 0 0 0))
    )
  )`), `type mismatch`);

// ./test/core/simd/simd_i32x4_dot_i16x8.wast:102
assert_invalid(() =>
  instantiate(`(module
    (func $$i32x4.dot_i16x8_s-arg-empty (result v128)
      (i32x4.dot_i16x8_s)
    )
  )`), `type mismatch`);
