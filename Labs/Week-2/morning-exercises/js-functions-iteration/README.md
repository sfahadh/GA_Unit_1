## Functions & Iteration Methods

JavaScript's built-in iteration methods look like `arr.forEach(callback)` or `arr.reduce(callback)`. The array being worked on is in front, and the callback function that says what to do is inside the parentheses. We don't know the syntax to create that setup quite yet, so we'll make the array an argument of our homemade iteration methods.  We'll also implement a few that don't come built in to JavaScript: `pluck` and `partition`.

1. Write a function called `each` that takes in an array argument (called `arr`) and a function argument (called `callback`). This will be our version of JavaScript's `forEach`. The function argument (`callback`) should take two arguments: one element from the array, and the index of that element.  The `each` function should loop through the array and call `callback` once for each element. After the loop, `each` should return `arr`, the original array that was passed in.  

    ```js
    // starter structure for OUR each
    let each = function(lottoNumbers, logMessage) {
    // YOUR CODE IN HERE!
      lottoNumbers.forEach(function(element) {
        callback(lottoNumbers[element], element);
      });    
    }

    // set up variables for arguments
    let lottoNumbers = [18, 14, 15];             // our arr
    let logMessage = function(element, index){   // our cb
        console.log("The next number is..... " + element + "!");
    }

    each(lottoNumbers, logMessage);
    // logs to the console:
    //   "The next number is..... 18!"
    //   "The next number is..... 14!"
    //   "The next number is..... 15!"
    // returns [18, 14, 15]

    ```



2. Write a function called `partition` that takes in an array and another function (a callback).  The callback should take in an element and an index and return `true` or `false`. `partition` should split the array into two groups: one whose elements all resulted in `true` and one whose elements all resulted in `false`. It should return a new array with the two groups nested inside.

    ```js
    // starter structure for our partition
    let partition = function(arr, callback){
    // YOUR CODE IN HERE!
      for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
      }
    }

    // set up variables for arguments
    let nums = [0, 1, 2, 3, 4, 5];  // our arr
    let isOdd = function(num){      // our truth test
        return num % 2 !== 0;
    };

    partition(nums, isOdd);
    // returns [[1, 3, 5], [0, 2, 4]]
    ```




3. Write a function called `pluck` that takes in an array of objects and a string that is one of their keys. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.  This iteration method won't use a callback.

    ```js
    // starter structure for our pluck
    let pluck = function(arr, key){
    // YOUR CODE IN HERE!
    
    
    
    }

    // set up variable for arguments
    let grandparents = [
        {first: "June", last: "Crane", age: 74},
        {first: "Jim", last: "Crane", age:76},
        {first: "Linda", last: "Fuentes", age: 62},
        {first: "Panfilo", last: "Fuentes", age: 76}
        ];

    // call the pluck function, asking for the key 'first'
    pluck(grandparents, 'first');
    // returns ["June", "Jim", "Linda", "Panfilo"]
    ```


4. `getPairs(names)`

    Write a function called `getPairs` that takes in an array of names and outputs random pairs of names. How could you use this to generate pairs of students for pair programming?

    ```js
    // Example of getPairs!

    // set up names argument
    let students = ["Johnny", "Emily A", "Ling", "Jason", "Franchesca"];
    // call getPairs function
    getPair(students);
    // returns [["Emily A", "Ling"], ["Franchesca", "Jason"] , ["Johnny"]]
    ```


5. Write a function to swap two values at two different indicies in an array.

```
let swap = function (arr, indexOne, indexTwo) {
  // swap values 

  return arr;
};

swap(["moe", "larry", "curly"], 0, 2);
// => ["curly", "larry", "moe"]
```


6. Write a function to generate a random number in a specified range.

```
let getRand = function (low, high) {
  // your work

  return randNum;
};

getRand(5, 6)
// => 5 or 6
getRand(5, 10)
// => 6 or some other num between 5 and 10
```


7. Write a function to create a specified number of random numbers from `1` to `100` in an array.

```
let randArr = function (size) {
  // your work;

  return arr; 
}

randArr(3)
//=> [23, 11, 82];
randArr(2)
//=> [88, 42];
```


8. Write a function to find the maximum number in an array.

```
let getMax = function (arr) {
  // your work
  
  return max;
}

getMax([1,2,88, 34, 22])
```
