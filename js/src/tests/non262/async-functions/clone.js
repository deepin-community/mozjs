// |reftest| skip-if(!xulRuntime.shell) -- needs cloneAndExecuteScript, drainJobQueue

// Async function source code scripts can be cloned.
let g = newGlobal();
cloneAndExecuteScript(`
async function f() {
  var a = await 1;
  var b = await 2;
  var c = await 3;
  return a + b + c;
}
var V;
f().then(v => V = v);
drainJobQueue();
`, g);
assertEq(g.V, 6);

if (typeof reportCompare === "function")
    reportCompare(true, true);
