**The spread operator (...) is used for for create shallow copy of an array and concatenate the array.
Spread operator is used for Convert Iterables(string) into Array.
Spread operator is used for Concatenate the objects and create shallow copy of object

1) What does the JavaScript spread operator (...) primarily do?

a) Concatenates two arrays
b) Copies the elements of an array or object
c) Combines two objects
d) Performs exponentiation on a numeric value

Ans : b

The spread operator (...) in JavaScript is used to 
a)merge/concatenate values from two or more arrays into a new array.
b)create a shallow copy of an array
c)"unpacks" the elements from the arrays
d)merge/concatenate properties from two or more objects into a new object.
e)create clone/copy of the properties of an object



2)How can you use the spread operator to concatenate two arrays?

a) newArray = array1.concat(array2)
b) newArray = [...array1, ...array2]
c) newArray = array1 + array2
d) newArray = array1.spread(array2)

Ans : b

3)const arr1 = [1, 2, 3];
 const arr2 = [...arr1, 4, 5];

a) [1, 2, 3, 4, 5]
b) [1, 2, 3]
c) [1, 2, 3, [4, 5]]
d) [1, 2, 3, 4, 5, [4, 5]]

Ans : a

4)const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
a) Merges two objects
b) Creates a new object with the same properties
c) Adds a new property to an object
d) Removes a property from an object

Ans: a 

Explanation : The spread operator in this context is used to merge the properties of obj1 into a new object (obj2) and add an additional property c: 3.

5) What happens if you use the spread operator on a string?

a) Converts the string to an array
b) Copies the string
c) Spreads the characters into an array
d) Throws an error

Ans : c

Explanation : When you use the spread operator on a string, it spreads the characters of the string into an array.

6)const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, age: 31 };
a) Creates a new object with the same properties
b) Adds a new property to an object
c) Updates the value of an existing property
d) Deletes a property from an object

Ans : c

Explanation : The spread operator in this context is used to create a new object (updatedPerson) by spreading the properties of the original person object and updating the value of the age property. 

7)How can you use the spread operator to create a shallow copy of an array?

a) const newArray = [...oldArray]
b) const newArray = [oldArray]
c) const newArray = {...oldArray}
d) const newArray = oldArray.clone()

Ans : a

Explanation : The spread operator can be used to create a shallow copy of an array by spreading its elements into a new array

8)What happens when you use the spread operator on null or undefined?

a) Creates an empty object
b) Throws an error
c) Results in null
d) Results in undefined

Ans : b
 When you use the spread operator on null or undefined, it will result in an error. The spread operator is primarily designed to work with iterable values, and null and undefined are not iterable.

 9)Which of the following is a valid use of the spread operator?

a) Math.max(...[1, 2, 3])
b) new Date(...[2022, 1, 23])
c) console.log(..."Hello")