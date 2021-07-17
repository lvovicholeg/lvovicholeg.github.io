let pas = prompt('Придумайте пароль для входу на сайт');
let pasRepet = prompt('Повторіть ваш пароль');
var end = false;

if (pas == "" || pasRepet == "" || pasRepet == null || pas == null || pas != pasRepet) {
    alert('Ви ввели некоректні дані');
    end = true;
}

else if (pas == pasRepet) {
    alert('Пароль успішно створено, Натисніть "ОК" щоб зайти на сайт.');
    pas = undefined;
    let countEnter = 4;
    do {
        pas = prompt(`Введіть пароль для входу, у вас залишилось ${countEnter} спроби/спроба`);
        countEnter--;
    }
    while (pas != pasRepet && countEnter > 0);

    if (pas === pasRepet) {
        end = false;
        alert('Вхід успішний! Вітаємо вас на сайті!');
    }

    else {
        end = true;
        alert('Ви ввели невірний пароль, спробуйте пізніше.');
    }
}


if (end == false) {
    let factorial = +prompt('Введіть число від якого потрібно вирахувати факторіал.');
    let factorialRezalt = factorial;

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
        let i = factorial;
        while (i >= 2) {
            factorialRezalt = factorialRezalt * (i - 1);
            i--;
        }
        document.write(`<h1 style="color:green">Результат по вашому запиту ${factorial}! = ${factorialRezalt} <\h1>`);
    }

    document.write(`<hr><h3 style="color:red">Друге завдання, всі чотиризначні числа з кроком +3:<\h3>`)
    let i = 1000;
    while (i <= 9999) {
        document.write(`${i} `);
        i += 3;
    }

    document.write(`<br> <h3 style="color:red">Третє завдання, перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17.....:<\h3>`)
    let sequence = -1;
    let u = 1;
    while (u <= 55) {
        sequence = sequence + 2;
        document.write(`${sequence} `)
        u++;
    }

    document.write(`<br> <h3 style="color:red">Четверте завдання, всі невід'ємні елементи послідовності 90 85 80 75 70 65 60.....:<\h3>`)
    let y = 90;
    while (y >= 0) {
        document.write(`${y} `);
        y -= 5;
    }

    document.write(`<br> <h3 style="color:red">П'яте завдання, геометрична прогресія:<\h3>`)
    let progression = 1;
    let t = 1
    while (t <= 20) {
        progression = progression * 2;
        document.write(`${progression} `);
        t++;
    }


    document.write(`<br> <h3 style="color:red">Шосте завдання, крок 2a-1 <\h3>`)
    let a = 2;
    let r = a;
    while (r <= 9999) {
        document.write(`${r} `)
        r = 2 * r - 1;
    }


    document.write(`<br> <h3 style="color:red">Сьоме завдання, крок 2a+200 <\h3>`)
    let a1 = -166;
    let r1 = a1;
    while (r1 <= 9999) {
        if (r1 > 0) {
            document.write(`${r1} `);
        }
        r1 = 2 * r1 + 200;
    }
}
