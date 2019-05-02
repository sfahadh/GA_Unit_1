## `.map()`

1. `getSquares` – takes in an array of numbers and returns an array of their squares.

   ```js
   const getSquares = (arr) => {
       return arr.map(function (num) {
           console.log(num)
           return Math.pow(num, 2)
       })
   }
   getSquares([1, 2, 3, 4, 5])
   ```

2. `isDivisibleBy3` – takes in an array of numbers and returns an array of booleans indicating whether each element is divisible by 3
   ```js
   const isDivisibleBy3 = (arr) => {
       return arr.map(function(num){
           if (num % 3 === 0) {
               return true
           } else {
               return false
           }
       })
   }
   isDivisibleBy3([1, 3, 4, 6, 7, 8, 9])
   ```
## `.filter()`

3. `getOdds` – takes in an array of numbers and returns an array of only odd numbers

   ```js
   const getOdds = (arr) => {
       return arr.filter(function(num){
           return num % 2 !== 0;
       })
   }
   getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
   ```

4. `getEvens` – takes in an array of numbers and returns an array of only even numbers

   ```js
   const getEvens = (arr) => {
       return arr.filter(function(num){
           return num % 2 === 0;
       })
   }
   getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
   ```

5. `getDivisibleBy4` – takes in an array of numbers and returns an array of only numbers that are divisible by 4
   ```js
   const getDivisibleBy4 = (arr) => {
       return arr.filter(function(num){
           return num % 4 === 0
       })
   }
   getDivisibleBy4([1, 4, 6, 8, 12, 13])
   ```

## `.reduce()`

6. `addUpAll` – add up all numbers in a given array

   ```js
   const addUpAll = (arr) => {
       return arr.reduce(function(a, b){
           return a + b
       })
   }
   addUpAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
   ```

7. `multiplyAllNums` – multiply all numbers in a given array

   ```js
   const multiplyAllNums = (arr) => {
       return arr.reduce(function(a, b){
           return a * b
       })
   }
   multiplyAllNums([1, 2, 3, 4, 5])
   ```

8. `squareAllNums` – power up all numbers in a given array
   ```js
   const squareAllNums = (arr) => {
       return arr.reduce(function(acc, val){
           return Math.pow(acc, val)
       })
   }
   squareAllNums([3, 2, 3])
   ```

9. `addUpAllAges` – add up all the ages in an array of objects
   
   ```js
   const addUpAllAges = (arr) => {
       return arr.reduce(function(acc, val){
           console.log(acc, val)
           return acc.age + val.age
       })
   }
   addUpAllAges([{name: 'Carl', age: 30}, {name: 'Cara', age: 10}, {name: 'Carmen', age: 15}])
   ```
