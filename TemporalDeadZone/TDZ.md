-> what is Syntax Error?
-> const b;
Syntax error :Missing initializer in const declaration

-> let a=10;
   let a=20;
  Syntax error : Identifier 'a'a has already been declared

what is Type error?
-> const b=10;
   b=200;
   Type Error : Assignment to constant variable

what is Reference error?
-> when JS Engine tries to find the variable inside the memory space and you cannot access it.
console.log(a);
let a=10;

reference error : cannot access 'a' before initilization.

At this point of time,a is in tempral dead zone.

Temporal dead zone is the time since when let is hoisted and till it is assigned some value.Time between them is called temporal dead zone.

Important Points

1) let and const are hoisted but its memeory is allocated at different place than window object(global) which cannot be access before initilization as a result of temporal dead zone.

2) JS use different memory other than global execution context to store let and const which is the reason behind the temporal dead zone.

3) level of strictness  var << let << const
 a) No temporal zead zone,can redeclare and reinitilialize ,stored in GES.
 b) use TDZ,cannot redeclare ,can reinitialize , stored in GES.
 c) use TDZ , cannot redeclare ,cannot reinitialize , stored in separate memeory
