console.log("Hello, JS!");

// 1 funzione dichiarativa
function Sum(num1, num2) {
  return num1 + num2;
}

const result = Sum(8, 7);
console.log(result);

//  funzione anonima
const somma = function (a, b) {
  return a + b;
};

console.log(somma(4, 8));

// sintassi di una funzione a freccia

const somma2 = (c, d) => c + d;

const res = somma2(7, 6);

console.log(res);

// 2 arrow function per quadrato number in una riga di codice

const square = (num) => num * num; // n** 2
console.log(square(9));

// 3 funzione operazione callback

const moltiplica = (a, b) => a * b;

const differenza = (a, b) => a - b;
const calculate = (a, b, operazione) => operazione(a, b);

const product = calculate(12, 8, moltiplica);
console.log(product);
// 4 timer function

/*
const timesover = function (time) {
  return function () {
    setTimeout(() => {
      console.log("the time is over");
    }, time);
  };
};

const timer = timesover(2000);
timer();
*/

/*
// 5 set interval function

function screenTimeSeconds(message) {
  setInterval(() => {
    console.log(message);
  }, 1000);
}

screenTimeSeconds("every tot seconds on screen!");
*/

// 6 closure function automatic counter

function superCounter(time) {
  let count = 0;
  return function () {
    setInterval(() => {
      count++;
      console.log(`The number of counter is : ${count}`);
    }, time);
  };
}

const autoCounter = superCounter(1000);
autoCounter(); // Start the counter immediately

// clearInterval(autoCounter); // Stop the counter immediately

/*
// 7

const samplesTest = function goAndStop(test, startTime, stopTime) {
  let count = 0;

  return function () {
    count++;
    const clock = setInterval(() => {
      console.log(test);
    }, startTime);

    if (test) {
      setTimeout(() => {
        console.log("stop timer");
      }, stopTime);
      clearInterval(clock);
    }
  };
};

const timer = samplesTest("hello", 1000, 9000);
timer(); // Start the timer immediately

*/
