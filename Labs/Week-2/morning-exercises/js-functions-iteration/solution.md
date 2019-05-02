1. Write a function called `each` that takes in an array argument (called `arr`) and a function argument (called `callback`). This will be our version of JavaScript's `forEach`. The function argument (`callback`) should take two arguments: one element from the array, and the index of that element.  The `each` function should loop through the array and call `callback` once for each element. After the loop, `each` should return `arr`, the original array that was passed in.

   ```js
   const each = function(arr, callback){
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        callback(num);
    }
    return arr;
   }
   var lottoNumbers = [18, 14, 15];
   var logMessage = function(element, index){
       console.log("The next number is..... " + element + "!");
   }
   ```

2. Write a function called `partition` that takes in an array and another function (a callback).  The callback should take in an element and an index and return `true` or `false`. `partition` should split the array into two groups: one whose elements all resulted in `true` and one whose elements all resulted in `false`. It should return a new array with the two groups nested inside.

   ```js
   var partition = function(arr, callback){
   // YOUR CODE IN HERE!



   }

   // set up variables for arguments
   var nums = [0, 1, 2, 3, 4, 5];  // our arr
   var isOdd = function(num){      // our truth test
       return num % 2 !== 0;
   };

   partition(nums, isOdd);
   // returns [[1, 3, 5], [0, 2, 4]]
   ```
3. Write a function called `pluck` that takes in an array of objects and a string that is one of their keys. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.  This iteration method won't use a callback.

   ```js
   ```

4. `getPairs(names)`

    Write a function called `getPairs` that takes in an array of names and outputs random pairs of names. How could you use this to generate pairs of students for pair programming?

    ### Solution
   ```js
   // set up names argument
   const tesseract_students = ["Yaakov", "Darrell", "Dan", "Ryan", "Raul", "Rachel", "Ehsanul", "Eryl", "Sean", "Andrey", "Akram", "Supreet", "Jae", "Joel", "Simon", "John", "Alvin", "Troy", "Elyas"];

   const getPairs = function(namesArr){
     let outputArr = [];
     // pick random pairs and add to the output
     while (namesArr.length >= 2){
       outputArr.push([spliceRandom(namesArr), spliceRandom(namesArr)]);
     }
     // if we had an odd number, one will be left over
     // add it to the output alone
     if (namesArr.length === 1){
       outputArr.push(namesArr);
     }
     return outputArr;
   };

   // helper function to splice out and return a random value from the array
   let spliceRandom = function(arr){
     let randomIndex = Math.random() * arr.length;
     let randomlyRemoved = arr.splice(randomIndex, 1);
     return randomlyRemoved[0];
   };
   ```

   ### Darrell's Solution
   ```js
   // set up names argument
   const tesseract_students = ["Yaakov", "Darrell", "Dan", "Ryan", "Raul", "Rachel", "Ehsanul", "Eryl", "Sean", "Andrey", "Akram", "Supreet", "Jae", "Joel", "Simon", "John", "Alvin", "Troy", "Elyas"];
   // call getPairs function
   function getPairs(arr,n) {
       let pairsArray = [];
       function shuffleArray(sourceArray) {
           for (let i = 0; i < sourceArray.length - 1; i++) {
               let randIndex = i + Math.floor(Math.random() * (sourceArray.length - i));
               let temp = sourceArray[randIndex];
               sourceArray[randIndex] = sourceArray[i];
               sourceArray[i] = temp;
           }
           return sourceArray;
       }
       let shufStuds = shuffleArray(arr);
       while (shufStuds.length > 0) {
           let xxx = shufStuds.splice(0, n);
           pairsArray.push(xxx);
       }
       return pairsArray;
   }
   // console.log(getPairs(students));
   // console.table(getPairs(tesseract_students,3));
   ```

5. Write a function to swap two values at two different indicies in an array.

   ```js
   var swap = function (arr, indexOne, indexTwo) {
     if (arr.length === 1) return arr;
     arr.splice(indexTwo, 1, arr.splice(indexOne, 1, arr[indexTwo])[0]);
     return arr;
   // console.log(arr)
   };
   swap(["moe", "larry", "curly"], 0, 2);
   ```

6. Write a function to generate a random number in a specified range.

   ```js
   var getRand = function (low, high) {
     // your work
     let randNum = Math.ceil(Math.random() * (high - low) + low);
     return randNum;
   };
   getRand(5, 6)
   ```

7. Write a function to create a specified number of random numbers from `1` to `100` in an array.


8. Write a function to find the maximum number in an array.
   ```js
   var getMax = function (arr) {
       var max = arr.reduce(function(a, b) {
           return Math.max(a, b);
       });
       return max;
   }
   getMax([1, 2, 88, 34, 22])
   ```

   ```js
   var getMax = function (arr) {
       // YOUR CODE HERE
       let max = -Infinity;
       for (i=0; i< arr.length; i++) {
           if (arr[i] > max) {
               max = arr[i];
       }
     }
     return max;
   }
   console.log(getMax([1,2,88, 34, 22]));
   ```

   ```js
   let getMax = function (arr) {
     return arr.reduce((maxSoFar, num) => (maxSoFar > num ? maxSoFar : num));
   };
   ```
