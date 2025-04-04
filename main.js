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

const somma2 = (c, d) => {
  return c + d;
};

const res = somma2(7, 6);

console.log(res);

// 2 arrow function per quadrato number in una riga di codice

const square = (num) => num * num;
console.log(square(9));

// 3 funzione operazione callback

const moltiplica = (a, b) => a * b;

const differenza = (a, b) => a - b;
const calculate = (a, b, operazione) => operazione(a, b);

const product = calculate(12, 8, moltiplica);
console.log(product);
// 4 timer function

const timesover = function (time) {
  return function () {
    setTimeout(() => {
      console.log("time is out");
    }, time);
  };
};

const timer = timesover(10000);
timer();

// 5 set interval function
function screenTimeSeconds(message) {
  console.log(`this is setInterval ${message}`);
}

const clock = setInterval(screenTimeSeconds, 2000);

screenTimeSeconds("ehy there!");

clearInterval(clock);

// 6 closure function automatic counter

function superCounter(time) {
  let count = 0;
  return function incrementa() {
    setInterval(() => {
      count++;

      console.log(count);
    }, time);
  };
}

const counter = superCounter(1500);

counter();
