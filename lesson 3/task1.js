{
    /* 1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
    включительно, чтобы результат выглядел так:
    0 – это ноль
    1 – нечетное число
    2 – четное число
    3 – нечетное число
    …
    10 – четное число */

    'use strict';
    console.log('Задание 1');
    let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i <= a.length; i++) {
        if (a[i] === 0) {
            console.log(a[i] + ' - это ноль');
        } else if ((a[i] % 2) === 1) {
            console.log(a[i] + ' - нечетное число');
        } else if ((a[i] % 2) === 0) {
            console.log(a[i] + ' - четное число');
        }

    }
}