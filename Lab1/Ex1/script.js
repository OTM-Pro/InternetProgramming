let firstPrice = NaN;
while (true)
{
    firstPrice = parseInt(prompt('Какова цена первого товара?', ''));
    if (!isNaN(firstPrice)) break;
    else alert('Пожалуйста введите цену правильно!');
}

let secondPrice = NaN;
while (true)
{
    secondPrice = parseInt(prompt('Какова цена второго товара?', ''));
    if (!isNaN(secondPrice)) break;
    else alert('Пожалуйста введите цену правильно!');
}

let discount = NaN;
while (true)
{
    discount = parseInt(prompt('Введите скидку в процентах (от 1 до 5)', ''));
    if (!isNaN(discount) && (discount >= 1 && discount <= 5)) break;
    else alert('Пожалуйста введите скидку правильно!');
}

document.write('<div style="width:260px;border:1px solid;padding:5px">');
document.write('<p style="margin:0;">ООО "Евроторг"</p>');
document.write('<p style="margin:0;text-align:center;font-size:19px;"><b>СПАСИБО ЗА ПОКУПКУ!</b></p>');

let date = new Date();
document.write('<p style="margin:0;">Дата покупки: ' + date.toLocaleString() + '</p>');

document.write('<p>Наименование товара</p>');
document.write('<p style="margin:0;text-align:right;">= ' + firstPrice + '</p>');
document.write('<p style="margin:0;">Наименование товара</p>');
document.write('<p style="margin:0;text-align:right;">= ' + secondPrice + '</p>');

document.write('<p style="margin:0;font-size:19px;"><b>ИТОГО</b></p>');
let fullPrice = firstPrice + secondPrice;
document.write('<p style="margin:0;text-align:center;font-size:19px;"><b>' + fullPrice + '.00 BYN</b></p>');

document.write('<p style="margin:0;">Ваша скидка: ' + discount + '%</p>');
let discountSize = fullPrice / 100 * 5;
document.write('<p style="margin:0;text-align:center;font-size:19px;">' + discountSize + '.00 BYN</p>');

document.write('<p style="margin:0;font-size:19px;"><b>СУММА СО СКИДКОЙ</b></p>');
let totalPrice = fullPrice - discountSize;
document.write('<p style="margin:0;text-align:center;font-size:19px;"><b>' + totalPrice + '.00 BYN</b></p>');
document.write('</div>');
document.write('<a href="https://otm-pro.github.io/InternetProgramming/lab1/task2">Exercise 2</a>');
