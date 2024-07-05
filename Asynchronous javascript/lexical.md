Scope :
a) where we can access the variable
b) Is variable inside the scope

scope is directly dependent on the lexical environment

Lexical Environment :
a) when JS program run.
b) GEC is created and its pushed into the stack.
whenever an EC is created , lexical environment is also created.
lexical environment is the local memory along with lexical environment of its parent.

**Scope chain** : Chain of Parent parent lexical Environment

Scope chain define whether a variable or function is present inside the scope or not.If the scope chain is exhausted and variable is not found so it is not inside the scope chain.


Lexical Environment : Execution context local memory + reference to lexical environment of its parent.

lexical environment of its parent is the scope where a function is physically present.

The JS Engine first searches a variable inside the local memory if its not found in the local memory so it will search that variable in the lexical environment of its parent and if it still not found there then it will searches that variable in the subsequent lexical environment and sequence goes on until the variable is found in some lexical environment or lexical environment becomes NULL.


