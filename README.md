### Closure

#### 1. Loaded Die: We want to create a cheat die that would let us predict the next number. Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.

````
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */

  return function() {
    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
````

Exercise 1 – Loaded Die

var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)
However, instead of a random die,

#### 2. Countdown: Implement a function countdownGenerator() that takes in a number x and returns a function that counts down when it is called (see starter code below).

```
var countdownGenerator = function (x) {
  /* your code here */
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...`
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!`
```