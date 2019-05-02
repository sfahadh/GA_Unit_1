let lottoNumbers = [18, 14, 15];  
let each = function(arr, callback) {
    // YOUR CODE IN HERE!
      for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
      }  
    }

    // set up variables for arguments
           // our arr
    let logMessage = function(element){   // our cb
        console.log("The next number is..... " + element + "!");
    }

    each(lottoNumbers, logMessage);

    // 2. Write a function called `partition` that takes in an array and another function (a callback).  The callback should take in an element and an index and return `true` or `false`. `partition` should split the array into two groups: one whose elements all resulted in `true` and one whose elements all resulted in `false`. It should return a new array with the two groups nested inside.

    // ```js
    let trueArr = [];
    let falseArr = [];
    let partition = function(arr, callback){
        // YOUR CODE IN HERE!
        for(let i = 0; i < arr.length; i++) {
        // callback(arr[i], i);
        callback(arr[i], i) === true ? falseArr.push(arr[i]) : trueArr.push(arr[i]);
        }
    }
    console.log(trueArr);
    console.log(falseArr);

    // set up variables for arguments
    let nums = [0, 1, 2, 3, 4, 5];  // our arr
    let isOdd = function(num){      // our truth test
        return num % 2 !== 0;
    };

    partition(nums, isOdd);
    // returns [[1, 3, 5], [0, 2, 4]]
