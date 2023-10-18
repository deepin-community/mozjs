// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Deleting property using "eval" statement containing "with" statement
es5id: 12.10_A5_T4
description: Deleting object property
flags: [noStrict]
---*/

this.p1 = 'a';
var myObj = {
  p1: {a:"hello"},
  del:false 
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
if(myObj.p1.a === "hello"){
  throw new Test262Error('#1: myObj.p1.a !== "hello" ');
}
}catch(e){var x=1};
if(x !== 1){
  throw new Test262Error('#1: x === 1. Actual:  x ==='+ x  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  throw new Test262Error('#2: myObj.p1 === undefined . Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  throw new Test262Error('#3: myObj.del === true . Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 'a'){
  throw new Test262Error('#4: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);
