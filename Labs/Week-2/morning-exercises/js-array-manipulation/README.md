# Array Manipulation

## Challenge Set A: `for` ##

### Challenge 1 ###

Use your Chrome console (`cmd+opt+j`) to perform the following activities.
Each of the following tasks can be accomplished using a single Array method in 1 line of code.

1. Create an array: `let cacti = ['barrel', 'columnar', 'hedgehog', 'cluster', 'prickly pear'];`
1. Print out the 3rd element (`'hedgehog'`) to the console.
1. Print out the length of the array to the console.
1. Print out the last element (`'prickly pear'`) - can you find two different ways to do this?
1. Put `'epiphytic'` on the end of the array.
1. Use `indexOf` to find the index of `'columnar'` and print it out.
1. Remove `'barrel'` (the first element) from the list.
1. Add `'barrel'` back to the **front** of the list
1. Remove the 4th element of the list (hint: use `splice`).

### Challenge 2a ###

1. Use `for` to print out each fruit from the list.

    ```js
    let fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry',
    'Fig', 'Guava', 'Huckleberry', 'Ice plant', 'Jackfruit'];
    ```
    
### Challenge 2b ###

1. Print the same list items as above, in reverse order. 

### Challenge 2c ###

1. Use a `for` loop to print out every *third* fruit. The output should be `'Cherry'`, `'Fig'`, `'Ice plant'`.

### Challenge 3 ###

1. *Dig Inn* has a line wrapped around the block! It takes about two minutes per delicious Charred Chicken Marketbowl. Output the customer's name & their expected wait time.
    
    ```js
    // warning -- below is pseudo-code!
    let customers:   Derick, Brian, Daniel, Leo, Tara, Soleil, Bruno, Celeste, Drake, Jason
    customers.forEach(fn);
    
    /* sample output:
       Derick: 2 minutes
       Brian: 4 minutes
       Daniel: 6 minutes
       Leo: 8 minutes
       Tara: 10 minutes
       ...
       Jason: 20 minutes
    */
    ```

## Challenge Set B: `forEach` ##

### Challenge 1a ###

```js
let dogs = ['Snoopy', 'Scooby', 'Pluto', 'Goofy', 'Astro', 'Mr. Peabody', 'Odie', 'Santa's Little Helper', 'Brian'];
```

Use `forEach` to print each character in the list of famous cartoon dogs.

### Challenge 1b ###

Use `forEach` and `String.toUpperCase` method to convert the list of characters into all capitals.  That is, you should replace each character in the array with an all UPPERCASE version of that character's name.

Use `console.log( dogs )` to verify your solution has changed the `dogs` array.

### Challenge 2 ###
  
Rewrite Challenge 3 using `forEach`. You may want to check out <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">documentation about `forEach`</a>'s callback method arguments.

### Challenge 3 ###

```js
let cohorts = ['peloton', 'jeopardy', 'arcadia', 'lambda', 'rover',  'terabyte', 'octonion'];
```

Use `forEach` to `console.log` every cohort that has an even index (including 0);
