let a = +prompt('Введіть число.');
let b = +prompt('ВВедіть степінь');
let result = 1;
document.write(`<h1 style="color:red">Піднесення до степені за допомогою циклу: <\h1>`);
if (a != 0 && a < 0 == false && a > 0 == false || b != 0 && b < 0 == false && b > 0 == false) {
    document.write(` Ви ввели некоректні дані ! `);
}
else {
    if (b < 0) {
        for (let i = 1; i <= -b; i++) {
            result *= a;
        }
        result = 1 / result;
    }
    else if (a == 0 && b == 0) {
        result = 1;
    }
    else if (b > 0) {
        for (let i = 1; i <= b; i++) {
            result *= a;
        }
    }
    document.write(` ${a} а степені ${b} = ${result} `);
}