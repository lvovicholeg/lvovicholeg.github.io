
let factorial = +prompt('Введіть число від якого потрібно вирахувати факторіал.');
let factorialRezalt = factorial;

// Хотів зробити так, щоб при введенні числа більше ніж 21 тип даних змінної змінювався на "BigInt", але при такому коді вибиває помилку.
// if (factorial > 20) {
//     for (let i = BigInt(factorial); i >= 2; i--) {
//         let bigFactorial = BigInt(factorial);
//         bigFactorial = bigFactorial * (i - 1);
//     }
//     document.write(`Результат по вашому запиту ${factorial}! = ${bigFactorial} `);
// }

if (factorial <= 0) {
    document.write(`<h1 style="color:green">Результат по вашому запиту ${factorial}! = 1<\h1>`);
}
else if (factorial != 0 && factorial < 0 == false && factorial > 0 == false) {
    document.write(`<h1 style="color:orange">Неможливо вирахувати факторіал з символів<\h1>`);
}
else if (factorial > 21) {
    document.write(`<h1 style="color:orange">Ви ввели занадто велике число, максимальне число для підрахунку "21"<\h1>`);

}
else if (factorial > 0) {
    for (let i = factorial; i >= 2; i--) {
        factorialRezalt = factorialRezalt * (i - 1);
    }
    document.write(`<h1 style="color:green">Результат по вашому запиту ${factorial}! = ${factorialRezalt} <\h1>`);
}

document.write(`<hr><h3 style="color:red">Друге завдання, всі чотиризначні числа з кроком +3:<\h3>`)
for (let i = 1000; i <= 9999; i += 3) {
    document.write(`${i} `)
}

document.write(`<br> <h3 style="color:red">Третє завдання, перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17.....:<\h3>`)
let sequence = -1;
for (let i = 1; i <= 55; i++) {
    sequence = sequence + 2;
    document.write(`${sequence} `)
}

document.write(`<br> <h3 style="color:red">Четверте завдання, всі невід'ємні елементи послідовності 90 85 80 75 70 65 60.....:<\h3>`)
for (let i = 90; i >= 0; i -= 5) {
    document.write(`${i} `)
}

document.write(`<br> <h3 style="color:red">П'яте завдання, геометрична прогресія:<\h3>`)
let progression = 1;
for (let i = 1; i <= 20; i++) {
    progression = progression * 2;
    document.write(`${progression} `)
}


document.write(`<br> <h3 style="color:red">Шосте завдання, крок 2a-1 <\h3>`)
let a = 2;
for (let i = a; i <= 9999; i = 2 * i - 1) {
    document.write(`${i} `)
}


document.write(`<br> <h3 style="color:red">Сьоме завдання, крок 2a+200 <\h3>`)
let a1 = -166;
for (let i = a1; i <= 9999; i = 2 * i + 200) {
    if (i > 0) {
        document.write(`${i} `)
    }
}

document.write(` <hr><h3 style="color:red"> Восьме завдання можна переглянути в папці "8" <\h3> <hr>`)
