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

### 2.3 Higher-order functions

- Takes in a function or passes out a function

#### Callbacks and Higher Order Functions simplify our code and keep it DRY

- **Declarative readable code**: Map, filter, reduce - the most readable way to write
code to work with data
- **Pro interview prep**: One of the most popular topics to test in interview both for Codesmith and mid/senior level job interviews
- **Asynchronous JavaScript**: Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, async/await

### 2.4 Arrow Function

```javascript
function multiplyBy2(input) { return input * 2; }
=>
const multiplyBy2 = (input) => { return input*2 }
=>
const multiplyBy2 = (input) => input*2
=>
const multiplyBy2 = input => input*2

const output = multiplyBy2(3) //6
```

#### Updating our callback function as an arrow function

```javascript
function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}
const multiplyBy2 = input => input*2
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

#### We can even pass in multiplyBy2 directly without a name

```javascript
const result = copyArrayAndManipulate([1, 2, 3], input => input*2);
```

#### Anonymous and arrow functions

- Improve immediate legibility of the code
- Understanding how they’re working under the-hood is vital to avoid confusion

## 3. Closure (scope and execution context)

- Closure is the most esoteric of JavaScript concepts
- Enables powerful pro-level functions like "once" and "memoize"
- Many JavaScript design patterns including the module pattern use closure
- Build iterators, handle partial application and maintain state in an asynchronous world

### Functions get a new memory every run/invocation

```javascript
function multiplyBy2 (inputNumber){
const result = inputNumber*2;
return result;
}
const output = multiplyBy2(7);
const newOutput = multiplyBy2(10);
```

### Functions with memories

- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function’s execution context.
- When the function finishes executing, its local memory is deleted (except the returned value)
- But what if our functions could hold on to live data between executions?
- This would let our function definitions have an associated cache/persistent memory
- But it all starts with us **returning a function from another function**

### Functions can be returned from other functions in JavaScript

```javascript
function createFunction() {
 function multiplyBy2 (num){
 return num*2;
 }
 return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3); // 6
```

### Calling a function in the same function call as it was defined

```javascript
function outer (){
 let counter = 0;
 function incrementCounter (){
 counter ++;
 }
 incrementCounter();
}
outer();
```

> Where you define your functions determines what data it has access to when you call it

### Calling a function outside of the function call in which it was defined

```javascript
function outer (){
 let counter = 0;
 function incrementCounter (){ counter ++; }
 return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();
```

### The bond

When a function is defined, it gets a bond to the surrounding Local Memory ("Variable Environment") in which it has been defined

### The "backpack"

- We return "incrementCounter’s code" (function definition) out of outer into global and give it a new name `myNewFunction`
- We maintain the bond to outer’s live local memory - it gets 'returned out' attached on the back of incrementCounter’s function definition.
- So outer’s local memory is now stored attached to `myNewFunction` - even though outer’s execution context is long gone
- When we run `myNewFunction` in global, it will first look in its own local memory first (as we’d expect), but then in `myNewFunction`’s "backpack"

### What can we call this "backpack"?

- Closed over ‘Variable Environment’ (C.O.V.E.)
- Persistent Lexical Scope Referenced Data (P.L.S.R.D.)
- ‘Backpack’
- ‘Closure’

> The **"backpack"** (or **"closure"**) of live data is attached `incrementCounter` (then to `myNewFunction`) through a hidden property known as `[[scope]]` which persists when the inner function is returned out

### Individual backpacks

If we run `outer` again and store the returned `incrementCounter` function definition in "anotherFunction", this new `incrementCounter` function was created in a **new execution context** and therefore has a brand **new independent backpack**

```javascript
function outer (){
 let counter = 0;
 function incrementCounter (){
 counter ++;
 }
 return incrementCounter;
}

// 1st new individual backpack that will be created
const myNewFunction = outer();
myNewFunction();
myNewFunction();

// 2nd new individual backpack that will be created
const anotherFunction = outer();
anotherFunction();
anotherFunction();
```

### Closure gives our functions persistent memories and entirely new toolkit for writing professional code

- **Helper functions**: Everyday professional helper functions like **"once"** and **"memoize"**
- **Iterators and generators**: Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript
- **Module pattern**: Preserve state for the life of an application without polluting the global namespace
- **Asynchronous JavaScript**: Callbacks and Promises rely on closure to persist state in an asynchronous environment

## 4. Asynchronous JavaScript & the event loop

### 4.1 Asynchronous JavaScript

- Promises - the most signficant ES6 feature
- Asynchronicity - the feature that makes dynamic web applications possible
- The event loop - JavaScript’s triage
- Microtask queue, Callback queue and Web Browser features (APIs)

#### A reminder of how JavaScript executes code

```javascript
// Single Threaded Execution
const num = 3;
function multiplyBy2 (inputNumber){
const result = inputNumber*2;
return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

#### Asynchronicity is the backbone of modern web development in JavaScript yet...

JavaScript is:

- Single threaded (one command runs at a time)
- Synchronously executed (each line is run in order the code appears)

So what if we have a task:

- Accessing Twitter’s server to get new tweets that takes a long time
- Code we want to run using those tweets

**Challenge**: We want to wait for the tweets to be stored in tweets so that they’re there
to run displayTweets on - but no code can run in the meantime

#### Slow function blocks further code running

```javascript
const tweets = getTweets("http://twitter.com/will/1")
// ⛔350ms wait while a request is sent to Twitter HQ
displayTweets(tweets)
// more code to run
console.log("I want to runnnn!")
```

#### What if we try to delay a function directly using setTimeout?

setTimeout is a built in function - its first argument is the function to delay followed by ms to delay by

```javascript
function printHello(){
 console.log("Hello");
}
setTimeout(printHello,1000);
console.log("Me first!");
```

In what order will our console logs appear?

#### So what about a delay of 0ms

```javascript
function printHello(){
 console.log("Hello");
}
setTimeout(printHello,0);
console.log("Me first!");
```

#### JavaScript is not enough - We need new pieces (some of which aren’t JavaScript at all)

Our core JavaScript engine has 3 main parts:

- Thread of execution
- Memory/variable environment
- Call stack

We need to add some new components:

- Web Browser APIs/Node background APIs
- Promises
- Event loop, Callback/Task queue and micro task queue

#### ES5 solution: Introducing 'callback functions", and Web Browser APIs

```javascript
function printHello(){ console.log("Hello"); }
setTimeout(printHello,1000);
console.log("Me first!");
```

#### We’re interacting with a world outside of JavaScript now - so we need rules

```javascript
function printHello(){ console.log("Hello"); }
function blockFor1Sec(){ //blocks in the JavaScript thread for
1 sec }
setTimeout(printHello,0);
blockFor1Sec()
console.log("Me first!");
```

#### ES5 Web Browser APIs with callback functions

**Problems**

- Our response data is only available in the callback function - Callback hell
- Maybe it feels a little odd to think of passing a function into another function only for it
to run much later

**Benefits**

- Super explicit once you understand how it works under-the-hood

### 4.2 Promises

#### ES6+ Solution (Promises)

Using two-pronged ‘facade’ functions that both:

- Initiate background web browser work and
- Return a placeholder object (promise) immediately in JavaScript

#### ES6+ Promises

```javascript
function display(data){
 console.log(data)
}
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display);

console.log("Me first!");
```

Special objects built into JavaScript that get returned immediately when we make
a call to a web browser API/feature (e.g. fetch) that’s set up to return promises
(not all are)

Promises act as a placeholder for the data we expect to get back from the web
browser feature’s background work

## Credits

All credits goes for front end master course javascript-hard-parts-v2/ by Will Sentance
