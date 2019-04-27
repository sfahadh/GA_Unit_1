# Iteration Practice Lab YAY

_ During this exercise students will practice:_
- Using both `for` and `while` loops to solve basic coding tasks
- Incrementally write code to pass unit tests and verify that they pass
- Given more challenging tasks and problems, strategically use loops to tackle more complex iterations
- Breaking apart a difficult problem into smaller, debuggable steps

### Intro

In this lab you'll get practice using `while` and `for` loops to solve basic programming problems.  There are also tests for your coding convenience!  Here's a brief rundown of what's to come:

- `console.log` all the *even* numbers between 1 and 100
- `console.log` all *odd* numbers from 3 up to 103
- `console.log` all numbers starting from some number down to 1
- Compute the sum from 1 up to a given number
- Compute the [Factorial!](https://en.wikipedia.org/wiki/Factorial) of a given number
- Find the *least common multiple* of two numbers
- Find the _nth_ [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci)

Feel free to use "driver" code to test each individual function in addition to running the unit tests.

Some of these are tough problems, so don't sweat it if you don't make it all the way through.  Just plow through as much as possible!

### Get Set Up

You know the drill.

- `Fork` this repo

- `Clone` it down

- `cd` into the directory

- Since there are tests, go ahead and run this install command: ```npm install```

- Open `loop.js` with your favorite text editor through the terminal.

- Then run the test scripts with this command: ```npm test```

- When done, `git add .`, `git commit -m 'message'`, `git push origin master` your work to your forked repo

- Open a PR

- Celebrate!


### The Problems
The tests should provide some guidance for what is required.  

Start with `manyEvens`.  Using a `for` loop `console.log` all even numbers between 1 and 100, including 100.

For `manyOdds` use a `while` loop and `console.log` all odd numbers between 3 and 103, inclusive.

`countDown` will be the last `console.log` type function.  Given some number _n_, loop from _n_ down to 1 using either a `for` or a `while` loop and `console.log` each number

Next, in `sumToN` using either a `for` or `while` loop compute the sum of all the digits from 1 up to some number, _n_.  *Hint:* For this and the remaining problems, it may help to declare a variable at the start of the function and then update it in a loop before returning it at the end of the function.

Next, `factorial` should return the factorial, e.g., 3!, for a given number.  To compute a factorial, take all the digits from 1 up to the number and multiple them together.  Thus, for 5, we would have to multiple 1 * 2 * 3 * 4 * 5 which gives 120 as the answer.  

In `lcm` you will compute the _least common multiple_ of two numbers.  For example, since 8 * 2 = 16 and 4 * 4 is 16, then 16 is a multiple of both 4 and 8 (not including each other).  24 and 32 are also multiples of 8 and 4, but since 16 is the smallest, it gets the coveted title of _least common multiple_. *Hint:* It may help to write a `for` loop starting with whichever of the two arguments is larger, and then incrementing by the same larger argument.  In the body of the. loop, check if the current number is a multiple of both arguments, but not equal to either of them.

Lastly, `fib` should compute the _nth_ Fibonacci number, beginning with 0.  So `fib(1)` should return 0.  This is a tough one!  Check out the [wikipedia article for Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number) for a refresher if need be.  A good strategy for tackling this problem is manually checking for the first few numbers in the sequence, and then set a `last` and `secondToLast` variables.  Start a loop and each time, calculate the sum of `last` and `secondToLast` before updating those two variables.  When you've reached the `nth` digit, return it and you're done!
