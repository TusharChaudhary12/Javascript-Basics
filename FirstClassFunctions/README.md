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

when functions are treated as a value , when function are passed as an arugemnt to another function , when function are returned as value from other function .



-------------------********************-------------------------

Types of functions in javascript

1) named function
2) unnamed function
3) Function statement (Function declarations)
4) function expressions (function assigment)
5) IIFE
6) Arrow functions
7) factory functions
8) contsructor function
9) Pure and impure function
10) lambda function
11) map function
12) Generator functions
13) Method functions

You've listed various types of functions in JavaScript! Here's a brief description of each one:

1. **Named Function:**
   - A function declaration that has a name and can be reused throughout the code.

2. **Unnamed Function:**
   - Also known as anonymous functions, these are functions without a name. They are often used as callbacks or immediately invoked.

3. **Function Statement (Function Declarations):**
   - A way to declare a function with the `function` keyword. It's hoisted and can be used before it's declared.

4. **Function Expressions (Function Assignment):**
   - Defining a function as part of an expression, often used when assigning a function to a variable.

5. **IIFE (Immediately Invoked Function Expression):**
   - A function that is executed immediately after it's created. It's wrapped in parentheses to ensure it's treated as an expression.

6. **Arrow Functions:**
   - Introduced in ES6, arrow functions provide a concise syntax for writing functions in JavaScript.

7. **Factory Functions:**
   - Functions that return an object (often used for creating multiple instances of similar objects).

8. **Constructor Function:**
   - Functions used with the `new` keyword to create objects with properties and methods.

9. **Pure and Impure Functions:**
   - **Pure Functions:** Functions that always return the same output for the same input, without modifying external state.
   - **Impure Functions:** Functions that can produce different outputs for the same input or have side effects like modifying external state.

10. **Lambda Function:**
    - A term sometimes used interchangeably with anonymous functions or arrow functions, especially in contexts where functions are treated as data.

11. **Map Function:**
    - Refers to the `map()` method available on arrays in JavaScript, used for iterating over an array and transforming its elements.

12. **Generator Functions:**
    - Functions that can be paused and resumed, yielding multiple values over time using the `yield` keyword.

13. **Method Functions:**
    - Functions that are properties of objects. When a function is defined as a property of an object, it is called a method of that object.

Each type of function serves different purposes in JavaScript, from basic reusable functions to advanced constructs like generators and methods.



