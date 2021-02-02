Ramda
Ramda is a library of functions that help JavaScript developers write better Functional code. Where RxJS is a whole new way to think about and interact with data streams and events, Ramda’s goal is to do an excellent job of providing JavaScript developers with truly Functional tools, and a lot of developers think they have done a really good job at that.

Some cool things about Ramda:

Each function is self-contained, pure, side effect free, and does not mutate anything
Each function is written in JavaScript, so with the amount of JavaScript you know now, you can go to the source code and be able to understand how they built their function
Some cool functions in Ramda:

If you felt robbed when you learned that push, pop, etc. weren’t allowed in Functional programming - Ramda gives them back to you! Their array Update, Tail, Take, and TakeLast are all great options.
Ramda even takes it one step further and allows you to leave specific values out of an array using the function Without
Remember how we struggled with Object.assign not being functional? Well with Ramda’s Merge function - it can be. Merge does exactly the same as Object.assign, except it returns a new object.
Ramda Pluck is another great example. Knowing that developers often work with long arrays of objects, Pluck allows you to choose one property those objects share and will return a new array of just those values.
In the edge cases where you really want a functional method, but the pure JavaScript doesn’t support it, Ramda will be a great resource. So if you end up writing more Functional code, keep Ramda in mind as a great option for adding more Functional utility without changing your workflow.

https://buzzdecafe.github.io/code/2014/05/16/introducing-ramda