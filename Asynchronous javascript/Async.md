Synchronous means code runs in a particular sequence of instructions given in the program.each instruction waits for the previous instruction to complete.

Example:
console.log("one");
console.log("Two");
console.log("Three");

Due to synchronous programming , some important instructions get blocked due to previous instructions which causes a delay in UI.
Async code allows to execute next instructions immediately and doesn't block the flow.
This helps to enhance interactivity and user experience.

console.log("one");
setTimeout(function cb(){
  console.log("hello")
},4000)
console.log("Two");

**setTimeout**

setTimeout is browser superpower.

setTimeout takes 2 arguments ,first is JS code and second argument is timer which will tell us after how many seconds code will run. 

 setTimeout is a webAPI and comes under async operations,when any async operation is encountered such as setTimeout so setTimeout register the callback function in webAPI and attach a timer to it,when the timer is finished,callback function pushed into the callback queue,now the task is ready to be executed.Event loop is conitniously checking the call stack is empty or not , if call stack is empty then event loop takes first task and pushed inside the call stack to execute.
call back queue holds the task that comes from async operations such as setTiemout,DOM APIs. 







