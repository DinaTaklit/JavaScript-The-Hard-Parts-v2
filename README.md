# JavaScript: The Hard Parts, v2

JavaScript principles, Callbacks & Higher Order functions, Closure,
Classes/Prototypes & Asynchronicity

- Go under the hood of some of the most important aspects of JavaScript!
- Learn what you need to know to become a sought-after, versatile, problem-solving developer.
- Combining mental models of JavaScript's inner workings and hands-on programming challenges,
- Get a solid understanding of callbacks and higher-order functions, closure, asynchronous JavaScript, and object-oriented JavaScript! - - Is for developers with a basic to intermediate knowledge of JavaScript who wants to deepen their understanding of the fundamentals to the next level.

Slide Link: https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf

The workshop focus on:

- Analytical problem solving
- Technical communication
- Engineering approach
- Non-technical communication
- JavaScript and programming experience

## Junior vs Mid-level vs Senoior Engineer

- Junior Engineer takes any features they're given to build, And if they've seen technology or maybe the solution before, they can solve it.
- Mid-level engineer takes any feature they're given to build and even they've not seen the technology or solution before, they can figure it out because they've learned how to learn, they're problem solving strong.
- Senior engineer is sombody who can take any given features, and not only just figure out for themselves, but enable the rest of their team to figure it out. Because they have technical communication, the ability to explain what their code is doing to somebody else in their team, in a clear and cordial manner.

## 1. JavaScript principles

### Thread of execution

- When JavaScript code runs, it: Goes through the code line-by-line and runs/ **executes** each line - known as the **thread of execution**
- Saves **data** like strings and arrays so we can use that data later - in its memory
- We can even save code (**functions**)

### Functions

#### Functions => Functions

- Code we save (**define**) functions & can use (call/invoke/execute/run) later with the function’s name & ( )

#### Execution context

- Created to run the code of a function - has 2 parts (we’ve
already seen them!)
  - Thread of execution
  - Memory

### Call stack

- JavaScript keeps track of what function is currently running
(where’s the thread of execution)
- Run a function - add to call stack
- Finish running the function - JS removes it from call stack
- Whatever is top of the call stack => that’s the function we’re currently running

## 2. Functions & Callbacks

### 2.1 Callbacks & Higher Order Functions

- Enables powerful pro-level functions like map, filter, reduce (a core aspect of
functional programming)
- Makes our code more declarative and readable
- We can generalize the function to make it reusable

### 2.2 Generalizing functions

- "Parameters" (placeholders) mean we don’t need to decide what data to run our functionality on and what exactly is our functionality until we run the function
- Then provide an actual value ("argument") when we run the function.

Functions in javascript = first class objects
They can co-exist with and can be treated like any other javascript object

1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

```javascript
function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}
function multiplyBy2(input) {return input * 2;}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

- Which is our Higher Order Function? => The outer function that takes in a function
- Which is our Callback Function? The inner function we insert inside the outer function

## Credits

All credits goes for front end master course javascript-hard-parts-v2/ by Will Sentance
