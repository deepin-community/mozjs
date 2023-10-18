// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Deleting property using "eval" statement containing "with" statement
es5id: 12.10_A5_T1
description: Deleting string property
flags: [noStrict]
---*/

this.p1 = 1;
var myObj = {
  p1: 'a', 
  del:false
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 === 'a'){
  throw new Test262Error('#1: myObj.p1 !== "a"');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  throw new Test262Error('#2: myObj.p1 === undefined. Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  throw new Test262Error('#3: myObj.del === true. Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 1){
  throw new Test262Error('#4: myObj.p1 !== 1');
}
//
//////////////////////////////////////////////////////////////////////////////

reportCompare(0, 0);
