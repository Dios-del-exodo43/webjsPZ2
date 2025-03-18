"use strict";
console.log("");

//1
function greet() {
    console.log("Привіт, світ!");
}
greet();
greet();

//2
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(10, 10)); // 100

//3
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // 5

// Завдання 3:

//1
function square(x) {
    return x * x;
}
console.log(square(6)); // 36

//2
if (true) {
    let localVar = "Я в блоці";
    console.log(localVar); 
}


// Завдання 4:
//1
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(counter());

//2
const person = {
    name: "Муххаммад",
    sayHello() {
        console.log(`Привіт, мене звуть ${this.name}`);
    }
};
person.sayHello();

//3
function add(a) {
    return function(b) {
        return a + b;
    };
}
const addTen = add(70);
console.log(addTen(4)); 

//5.1:
function createSurvey() {
    const name = prompt("Введіть ваше ім’я:");
    const age = Number(prompt("Введіть ваш вік:"));
    const city = prompt("Введіть ваше місто:");
    const isAdult = age >= 18;
    return { name, age, city, isAdult };
}

function displaySurvey(surveyData) {
    console.log(`Ім’я: ${surveyData.name}, Вік: ${surveyData.age}, Місто: ${surveyData.city}, Повнолітній: ${surveyData.isAdult ? "Так" : "Ні"}`);
    alert(`Ім’я: ${surveyData.name}\nВік: ${surveyData.age}\nМісто: ${surveyData.city}\nПовнолітній: ${surveyData.isAdult ? "Так" : "Ні"}`);
}

const survey = createSurvey();
displaySurvey(survey);

//5.2:
function createConverter(factor, offset) {
    return function(temp) {
        return temp * factor + offset;
    };
}

const cToF = createConverter(9/5, 32);
const fToC = createConverter(5/9, -32 * (5/9));

const tempValue = Number(prompt("Введіть температуру:"));
const conversionType = prompt("Введіть напрямок конвертації: C to F або F to C");

if (conversionType === "C to F") {
    alert(`Результат: ${cToF(tempValue)}°F`);
    console.log(`Результат: ${cToF(tempValue)}°F`);
} else if (conversionType === "F to C") {
    alert(`Результат: ${fToC(tempValue)}°C`);
    console.log(`Результат: ${fToC(tempValue)}°C`);
} else {
    alert("Невірний формат введення");
}
