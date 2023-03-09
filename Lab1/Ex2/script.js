let radius = NaN;
while (true)
{
    radius = parseInt(prompt('Введите радиус шара', '10'));
    if (!isNaN(radius)) break;
    else alert('Пожалуйста введите радиус правильно!');
}

let x = NaN;
while (true)
{
    x = parseInt(prompt('Введите значение X', '10'));
    if (!isNaN(x)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let y = NaN;
while (true)
{
    y = parseInt(prompt('Введите значение Y', '20'));
    if (!isNaN(y)) break;
    else alert('Пожалуйста введите значение правильно!');
}

let z = NaN;
while (true)
{
    z = parseInt(prompt('Введите значение Z', '30'));
    if (!isNaN(z)) break;
    else alert('Пожалуйста введите значение правильно!');
}

document.write('<p>(Вариант 17)</p>');
document.write('<p><b>Площадь поверхности и объем шара радиуса ' + radius + ':</b></p>');
document.write('<p>S = ' + (4 * 3.14 * radius * radius) + '</p>');
document.write('<p>V = ' + (4 / 3 * 3.14 * radius * radius * radius) + '</b></p>');

document.write('<p><b>Значение переменной b, при условии:</b></p>');
document.write('<img src="images/expression.png" />');
let b = Math.log(Math.sqrt(Math.pow(2.72, (x - y)) + Math.pow(x, Math.abs(y)) + z));
document.write('<p>b = ' + b + '</p>');
