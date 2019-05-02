# More JavaScript Iterators

## [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) -- (10 minutes / 0:10)
Write code using `.map()` to have the following input and output:

- `getSquares` – takes in an array of numbers and returns an array of their squares
  - ex: `getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]`

- `isDivisibleBy3` – takes in an array of numbers and returns an array of booleans indicating whether each element is divisible by 3
  - ex: `isDivisibleBy3([1, 3, 4, 6, 7, 8, 9]) => [false, true, false, true, false, false true]`

## [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) -- (15 minutes / 0:15)
Write code using `.filter()` to have the following input and output:

- `getOdds` – takes in an array of numbers and returns an array of only odd numbers
  - ex: `getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [1, 3, 5, 7, 9]`

- `getEvens` – takes in an array of numbers and returns an array of only even numbers
  - ex: `getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]`
  
- `getDivisibleBy4` – takes in an array of numbers and returns an array of only numbers that are divisible by 4
  - ex: `getDivisibleBy4([1, 4, 6, 8, 12, 13]) => [4, 8, 12]`

## [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Write code using `.reduce()` to have the following input and output:

- `addUpAll` – add up all numbers in a given array
  - ex. `addUpAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => 55` 

- `multiplyAllNums` – multiply all numbers in a given array
  - ex. `multiplyAllNums([1, 2, 3, 4, 5]) => 120`
  
- `squareAllNums` – power up all numbers in a given array
  - ex. `squareAllNums([3, 2, 3]) => 729, bc (3 ^ 2) = 9, and (9 ^ 3) = 729`

- `addUpAllAges` – add up all the ages in an array of objects
  - ex. `addUpAllAges([{name: 'Carl', age: 30}, {name: 'Cara', age: 10}, {name: 'Carmen', age: 15}]) => 55`
