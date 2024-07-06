Before promise we used to depend on callback function whcih have two disadvantages

1)callback hell(pyramid of doom)
2)Inversion of control

Promise resolved the problem of inversion of control

what is Promise?
Promise object is a placeholder for a certain period of time we receive a value from async operation.
Promise object is the container for future value.
A Promise is an object that represents an eventual completion or failure of an async operation.

A promise has 3 states

1) Pending  : Promise is waiting for async operation to complete.
2) fulfilled : Promise has successfully completed its operation.
3) rejected : error during execution of an async operation

Promise is a special object which has 2 properties
Promise Result is used to hold data which eventually get filled whcih is assigned undefined in pending state.

Promisestate:Pending
PromiseResult:Undefined

Promisestate:fulfilled
PromiseResult:Response

Promisestate:Rejected
PromiseResult:Error

As soon as promise is fullfilled or rejected , it updates the empty object which is assigned undefined in pending state.

A promise resolves only once and it is immutable.

then method is used to attach callback function with promise object.
This callback function will execute once promise is fulfilled and used fetched data.

const user=fetch("url");


Fetch is a web API that performs asynchronous operations, such as fetching data from a server. When we call fetch, it returns a Promise object immediately. Initially, this Promise object is in a pending state, represented by undefined, indicating that it is waiting for the asynchronous operation to complete.

Once the asynchronous operation inside fetch completes, the Promise resolves and updates its state with the resulting data.then method is used to attach a callback function to a promise object.This callback function will execute once the promise is fulfilled,indicating that the async operation it represents has completed successfully and we can proceed to use the fetched data.

A Promise represents the eventual completion of an asynchronous operation. It helps solve the problem of callback hell by providing a cleaner way to handle asynchronous code, avoiding deeply nested callbacks.

- To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
- A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

catch method is used to attach a failback callback function with the promise object.
The primary purpose of catch is to gracefully handle error.

