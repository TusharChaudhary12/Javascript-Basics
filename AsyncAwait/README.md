**what is async?**

Async is a keyword that is used to create async function .

Async function return a promise by itself , if it return a value so it automatically be wrapup inside the promise and it will return a promise.
inside promise and return promise.

The parameter inside the function represents the resolved value from promise. 

-------------------*******************-------------------

**what is await?**

Await is a keyword that can only be used inside async function.
we can write this await keyword infront of a promise and it resolve the promise.

Async and Await are used to handle promises.

How we used to handle promise before async await?
why do we need async await?



when we call fetch function ,it send an HTTP request to the specifies URL
and fetch function returns a promise object immediately.This promise 
represents the results of an async operation of making the HTTP request.
If the request succesful ,promise resolves with a Response Object and we can use 
that data using .then method but if the request doesnot complete sucessfully
due to network issue ,servers errors etc so promise rejected and will give error which
will be handle by using .catch method.


