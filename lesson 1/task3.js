alert('Задание 3: Вывести в консоль значения выражений и объяснить почему получились такие значения, используя комментарии к каждому выражению:');
console.log(10 + 10 + '10'); // 10 + 10(равно 20) + строчная 10, 20 приводится к строке и получается '20'+'10' = '2010';
console.log(10 + '10' + 10); // 10 + '10', неявное приведение к строке, получается '1010' + 10 , опять к строке, '101010';
console.log(10 + 10 + +'10'); // +'10' явно приводится к числу, 10+10+10=30;
console.log(10 / -''); // пустая строка == 0, 10/-0 = -infinity;
console.log(10 / +'2,5'); // пытается привести к числу '2,5', не получается, NaN. Если бы было '2.5'(даже без +), привело бы и получилось бы 4;
alert('Результаты вычислений находятся в консоли');