1) Javascript is a synchronous singlethreaded language.
2) It has one call stack.
3) It can do one task at a time and in the specific order.

4) The call stack is present inside the JS Engine and JS engine is present inside the call Browser.

5) when any JS program run,Global Execution context is created and is pushed inside the call stack.
6) Anything comes inside the call stack ,it directly execute.

7) what are Web APIs?
-> Web APIs are browser superpowers.Web APIs provide tools and functionalities to interact with the browser environment.
   
   web API 

**Types of Web APIs**

1) setTimeout() :setTimeout allows other javascript code to continue executing while       waiting for the specified delay to pass. This helps in enhancing the interactivity and responsiveness of user web application. 
2) DOM APIs  : to manipulate web pages.
   Document manipulation and Event handling .
3) fetch()   : making network request
4) Local storage : store data locally
5) console : print 
6) location : to obtain device location

DOM (Document Object Model) API provided by browsers for manipulating web pages, the Fetch API for making HTTP requests, the Geolocation API for obtaining device location, etc.

Browser give access to Js engine to use these superpowers.

Some important Points

1) In javascript , the event loop , microtask queue , callback queue and call stack are the key components that helps to manage the asynchronous nature of the language.

2) Call stack
Call stack is a data structure that keeps the track of the function calls .
It follow the lastin firstout principle.
Anything comes inside the callstack it directly executes.

3) callback queue(task queue)

call back queue holds the task(callback or events) that are ready to be exceuted.These tasks are usually comes from asynchronous operations such DOM events , HTTp requests and timers.

4) Microtask Queue
Microtask queue also holds task that are ready to be exceuted but has highr priority than callback queue.Microtask are usually scheduled by Javascript promises and mutuation observer.

when an async operation is encountered such as settimeout or promise so the callback associated with that operation is sent to the callback or queue or microtask queue after a specified time or when the promise settles.

3) Event loop
Event loop is responsible for continiously checking the call stack,callback queue and microtask queue.If the callback is empty then event loop takes the first task from microtask queue and pushed into the callstack for execution.

if the microtsak queue is empty then event loop takes task from the callback queue and pushed inside the callstack to execute.

This process repeats , allowing javascript to handle async operations , managing order of execution without blocking the main thread.



