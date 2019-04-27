function manyEvens() {
  // print all the even numbers between 1 and 100
  // use a for loop
  for(let i = 2; i <= 100; i+=2) {
    console.log(i);
  }
}

function manyOdds() {
  // use a while loop
  let oddNum = 3;
  while(oddNum <= 103) {
    if(oddNum % 2 === 1) {
      console.log(oddNum);
    }
    oddNum++;
  }
}

function countDown(n) {
  for(let i = n; i > 0; i--) {
    console.log(i);
  }
}

function sumToN(n) {
  let total = 0;
  for(let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function factorial(n) {
  let total = 1;
  for(let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
}

function leastCommonMult(a, b) {
  for(let i = Math.max(a,b); ; i+=Math.max(a,b)) {
    if((i % a === 0) && (i % b === 0)) {
      if(!(i === a) && !(i === b)) {
        // console.log(i, a, b);
        return i;
      }
    } 
  }
}


function fib(n) {
  let last = ;
  let secondToLast = 0;
  for(let i = 0; i < n; i++) {
    console.log(i);
  }

}
/*
Lastly, fib should compute the nth Fibonacci number, beginning with 0. So fib(1) should return 0. A good strategy for tackling this problem is manually checking for the first few numbers in the sequence, and then set a last and secondToLast variables. Start a loop and each time, calculate the sum of last and secondToLast before updating those two variables. When you've reached the nth digit, return it and you're done!
*/

export {
  manyOdds,
  manyEvens,
  factorial,
  sumToN,
  leastCommonMult,
  fib,
  countDown
};

