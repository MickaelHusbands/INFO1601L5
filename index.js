let pi = 3.14;
let radius = 7;

let area = radius + radius * pi;

let name = "mickael";
let age = 21;

console.log(typeof(name))
console.log(typeof(age))

for(let i = 1; i <= 50; i++){
  if(i%3 === 0){
    console.log("fizz");
  }
  else if(i%5 === 0){
    console.log("buzz");
  }
  else if(i%3 === 0 && i%5 === 0){
    console.log("fizzbuzz");
  }else{
    console.log(i);
  }
}

function randInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hello(){
  console.log("hello")
}

function happyPrint(string){
  console.log("😂: "+string);
}

function sadPrint(string){
  console.log("🥲: "+string);
}

function add(a, b, callback){
  let ans = a + b;
  callback(ans);
}

add(6, 7, sadPrint);
add(60, 7, happyPrint);

function printDate(){
  console.log(Date().toLocaleTieString());
}

setInterval(printDate, 1000)

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));

arr.push(11);

console.log(arr);

let lastItem = arr.pop();
console.log(lastItem, arr);

arr.unshift(22); //Adds Item to the front
console.log(arr);

let firtItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse();
console.log(reversed);
console.log(arr.join('-'));

arr = [12, 33, 4, 5, -4, 8, 19, 25];

let doubleArr = arr.map(double);
console.log(doubleArr);

function isOdd(num){
  return element%2 !== 0;
}

let odds = arr.filter(isOdd);
console.log(odds);

function has5Factor(){
  return ele % 5 ===0;
}
let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
  return a - b;
}

let ascending = arr.sort(intCompare);
console.log(ascending);

function createPerson(name, height, weight){
  return {name: name, height: height, weight: weight};
}

function calcBMI(weight, height){
  return weight/ (height * height);
}

function avgBMI(people){
  let sum = 0;
  for(let person of people){
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 176, 60),
  createPerson("Henry", 181, 80),
  createPerson("Mickael", 179, 61)
];

console.log(avgBMI(people));