First class functions

1) function statement(function declaration)

A Normal function that we create using naming convention and by this we can do the hoisting.

xyz();
function xyz(){
  console.log("function statement");
}

2) function Expression (function Assignment)
 when we assign a function into a variable that is funtion expression and we cannot do hoisting by this because it acts like a variable.

var a=function (){
  console.log("Function expression");
}

3) Named function Expression

 when we assign a function into a variable and function having a name that is called named function expression.

var a=function xyz(){
  console.log("Named Function expression");
}
a();

4) Anonymous function

Anonymous function is a function that doesn't have a name and we assign that function to a variable.
    Anonymous function is used in a place where function is used a a value.
  we cannnot do hositing in Anonymous function.

5) Parameters
when we define a function and pass some variables in the brackets() that is our parameters.

6) Arguments

when we invoke(Call) a function and pass some variables in the brackets() that is our arguments.

first class functions

The ability of function to be used as values , can be passed as an arguments to another function and can be retuend from the function.

1)function can be assigned to a variable.
2)function can be passed as an arguments to other functions
3)function can be returned as values from other functions.

when functions are treated as a value , when function are passed as an arugemnt to another function , when function are returned as value from other function 



