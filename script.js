
// 1
let input1 = prompt("Введіть текст")
let input2 = prompt("Введіть текст")
let message;

if (input1 && input2) {
    message = "Обидва поля заповнені";
} else {
    message = "Не всі поля заповнені";
}
console.log(message);
// 2
let input3 = Number(prompt("Введіть число"))
let input4 = Number(prompt("Введіть число"))
let sum = input3 + input4;
console.log(sum);
let text1;

if (sum > 10) {
    text1 = "Сумма більше 10";
} else {
    text1 = "Сумма менше, або дорівнює 10";
}
console.log(text1);
// 3
let text = ("Менi подобается JavaSript")
alert("Check")
let answer3 = (text.includes("JavaScript"))
if (answer3) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4

const text4 = Number(prompt("Напиши Число"))
let result3;

if (text4 > 10 && text4 < 20) {
    result3 = "Число входить в діапазон від 10 до 20";
} else {
    result3 = "Число не входить в діапазон від 10 до 20";
}
console.log(result3);

// 5

const name1 = prompt("Введіть ім'я")
const email1 = prompt("Введіть email")
const password1 = prompt("Введіть пароль")

if(name1.length > 3 && email1.includes("@") &&  email1.includes(".") && password1.length > 6) {
     console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}