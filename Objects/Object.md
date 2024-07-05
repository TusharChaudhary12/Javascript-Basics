what are objects?

Object is a collection properties and each property consists of key and corresponding value where key are strings and symbols and value can be of any primitive and reference datatype.

properties/features of Object

1) object is a property which consists of key and value.
2) we define functions inside the object which is called method
3) Object are dynamic means properties can be added,deleted and modified after the object is created.
4) By using this keyword inside the object,we can access the properties

const student=new Object();   //singleton object
const obj={};       // non singleton object

what is symbol and what is the benefit of using symbol?give one example

Symbol provide a way to create unique key in javascript


-------------------------------------------------------------------
## ways to create an object

1) **Using Object Constructor**
    a) use case :This method is useful when you need to add properties and methods to an object dynamically after its initial creation.
    b) Also known as singleton object.
    c) syntax :const student=new Object();

2) **Using Object Literal Syntax:**
   a) use case : Object literals are ideal for creating objects with static properties and methods at the time of object creation.
   b) Also known as non singleton object.
   c) const obj={};

   ## Its depends on us whether we want to add properties dynamically '{new Object()}' or at the time of object creation '{}'
