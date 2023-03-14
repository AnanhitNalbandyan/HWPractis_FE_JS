'use strict'
alert ('Anahit you have to do your home work');
alert('Hello');
[1, 2].forEach(alert);

//! Напишите цикл for,
//! который выводит числа в консоль от 0 до 10.
console.log("который выводит числа в консоль от 0 до 10:");
for (let i = 0; i <= 10; i++){
   console.log(i); 
}


//!Напишите цикл for,
//!который выводит числа в консоль от 0 до 10 c шагом 2.
console.log("выводит числа в консоль от 0 до 10 c шагом 2:");
for (let i = 0; i <= 10; i+=2) {
   console.log(i);
   
}
//!Напишите цикл for,
//!который выводит числа в консоль от 5 до 10.
console.log('выводит числа в консоль от 5 до 10');

for(let i=5; i<=10; i++){
   console.log(i);
}

//!Напишите цикл for,
//!который выводит числа в консоль от 10 до 0.
console.log('который выводит числа в консоль от 10 до 0:');
for (let i = 10; i>=0; i--) {
   console.log(i);
}

//!В программе заданы две переменные
//! n и m с числовым значением каждая.
//!Напишите цикл, который выводит в консоль
//! числа от большего числа до меньшего,
//todo 1 способ
console.log('выводит в консоль числа от большего числа до меньшего');

function range(n, m) {
   const arr = [];
   if (n > m){
      for (let i = n; i >= m; i--){
         arr.push(i);
      }
   } else {
      for (let i = n; i <= m; i++){
         arr.push(i);
      }
   }
   return arr;
}
console.log(range(1, 20));
//todo 2 способ
console.log('выводит в консоль числа от большего числа до меньшего');
console.log('n=10,m=2');

let n = 10;
let m = 2;

if (n > m) {
   for (let i = n; i >= m; i--) {
      console.log(i);
   }
   } else {
   for (let i = n; i <= m; i++) {
      console.log(i);
   }
   }
   console.log('выводит в консоль числа от большего числа до меньшего');
   console.log('n=2,m=10');
n = 2;
m = 10;

if (n > m) {
   for (let i = n; i >= m; i--) {
      console.log(i);
   }
   } else {
   for (let i = n; i <= m; i++) {
      console.log(i);
   }
}
console.log('выводит в консоль числа от большего числа до меньшего');
console.log('n=2,m=5');
n = 2;
m = 5;

if (n > m) {
for (let i = n; i >= m; i--) {
   console.log(i);
}
} else {
for (let i = n; i <= m; i++) {
   console.log(i);
   }
}

//!Фибаначи
function fibonacci(n) {
   if (n <= 1) {
   return n;
   }

   let x = 0;
   let y = 1;
   let z;

   for (let i = 2; i <= n; i++) {
   z = x + y;
   x = y;
   y = z;
   }

   return y;
}

//

function multiply(a, b){
   return a * b
}
console.log(multiply(2, 5))

// !  Write a function "greet" that returns
//! "hello world!"
function greet(){
   return 'hello world!';
}
console.log(greet())


/*
todo:Это правильная версия sum функция. 
!Он принимает массив чисел в качестве входных данных, складывает все числа и возвращает сумму в качестве выходных данных. Если входной массив пуст или не содержит чисел, функция возвращает 0.

!Вот как работает код:
!Тем sum функция принимает один параметр, 
!numbers, который должен представлять собой массив чисел.
!Он инициализирует переменную под названием 'accumulator до 0.
!Он использует for Цикл для итерации по каждому элементу numbers массив.
!Для каждого элемента он проверяет, принадлежит ли он number 
!Тип данных с использованием typeof оператор.
!Если элемент является числом, он добавляет 
!его в 'аккумулятор переменная.
!После того, как все элементы были обработаны, 'sum функция возвращает значение accumulator переменная.
!Этот код является корректной реализацией функции суммирования для массивов чисел и должен работать должным образом.

* */

function sum (numbers) {
let accumulator = 0;
for (let i =0; i<numbers.length; i++){
   if (typeof numbers[i]==="number"){
      accumulator += numbers[i];
   }
}
return accumulator;
};


/*
console.log(fibonacci(10)); 
//!
function createEmptyArray(length = 0) {
   const result = [];
   for (let i = 0; i < length; i++) {
   result.push(undefined);
   }
   return result;
}

const fibonacci = (n) =>
   createEmptyArray(n + 1)
   .map((el, index) => index)
   .reduce(
      (result, current, index) =>
         result.push(
         index < 2 ? current : result[index - 1] + result[index - 2]
         ) && result,
      []
   )[n];

const fibonacci2 = n =>
   createEmptyArray(n+1)
   .map((el, index) => index)
   .reduce(
      [...result, index < 2 ? current : result[index - 1] + result[index - 2]],
      []
   )[n];

/*
//!function eachCons(array, n) {
	const r = [];
   for (let i =0; i<=array.length-n; i++) {
   r.push(array.slice(i, i+n));
   }
   return r;
}
each_cons([1,2,3,4], 2)
#=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
#=> [[1,2,3],[2,3,4]]


function countSheeps(arrayOfSheep) {
const newArr = arrayOfSheep.filter(el => (el === true))
return newArr.length;
}
*/
// !функция duplicateString принимает на вход строку и
//!возвращает её удвоенный вариант.
//!Если строка пустая, то возвращает "String is empty"
function duplicateString(str) {
   
   if (str== false) {
      return "String is empty"
   } else {
      return str + str
   }

}
//
function duplicateString(str) {

   if (!str) {
      return "String is empty"
   } else {
      return str + str
   }

}
//
console.log(duplicateString("aaa")); // "aaaaaa"
console.log(duplicateString("abcxyz")); // "abcxyzabcxyz"
console.log(duplicateString("")); // "String is empty"

//
   function duplicateString(str) {
      return str ? str + str : "String is empty";
   }
console.log(duplicateString("aaa")); // "aaaaaa"
console.log(duplicateString("abcxyz")); // "abcxyzabcxyz"
console.log(duplicateString("")); // "String is empty"
// !функция normalize принимает на вход массив arr
//! и нормализует его, выводя значения 
//!в диапозон от - 1 до 1
function normalize2(arr) {
   let maxEl = -Infinity;
   for (let i = 0; i < arr.length; i++) {
      const absItem = Math.abs(arr[i]);
      if (maxEl < absItem) {
         maxEl = absItem;
      }
   }

   if (maxEl === 0) {
      return arr;
   }

   const res = [];

   for (let i = 0; i < arr.length; i++) {
      res.push(arr[i] / maxEl);
   }

   return res;
}
console.log(normalize([5, 10, 15])); // [0.33333, 0.66666, 1]
console.log(normalize([-6, 0, 3])); // [-1, 0, 0.5]
console.log(normalize([100, 1, 0])); // [1, 0.01, 0]
//
function normalize(arr) {
   let maxEl = -Infinity;
   arr.forEach(function (item) {
      const absItem = Math.abs(item);
      if (maxEl < absItem) {
         maxEl = absItem;
      }
   });

   if (maxEl === 0) {
      return arr;
   }

   return arr.map(function (item) {
      return item / maxEl;
   });
}
//! функция maxEvenNumber принимает на вход 
//!массив чисел arr и возвращает наибольшее чётное число
//! в массиве
function maxEvenNumber(arr) {
   const newArr = [];
   for (let i = 0; i< arr.length; i++) {
   if (arr[i]%2===0) {
      newArr.push(arr[i]);
   }
   return newArr
   }
   let minEl = -Infinity;
   for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > minEl) {
         minEl = newArr[i];
      }
      return newArr.length === 0 ? undefined : minEl; 
   }

}

console.log(maxEvenNumber([ 0, 10, 11 ])); // 10
console.log(maxEvenNumber([-2, 0, Math.PI])); // 0
console.log(maxEvenNumber([])); // undefined

//!
function maxEvenNumber(arr) {
   const num = arr.filter(function (item) {
      return item % 2 === 0;
   }).reduce(function (accumulator, value) {
      if (value > accumulator) {
         return value;
      }

      return accumulator;
   }, -Infinity);

   return isFinite(num) ? num : undefined;
}

//! фунция getRoute принимает на вход три точки a, b, c
//! точка - массив из 2 элементов, нулевой элемент массива будем считать х, первый элемент - у
//! пример: [ 0.5, 3 ] x = 0.5, y = 3
//! задача: вернуть массив из трёх элементов, указывающий в каком порядке надо проходить точки,
// !чтобы пройденное расстояние было наименьшим
function getRoute(arr1, arr2, arr3) {
   function getDistance(p1, p2) {
      const c = Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
      return c;
   }
   const distances = [];
   distances.push(getDistance(arr2, arr3));
   distances.push(getDistance(arr1, arr3));
   distances.push(getDistance(arr2, arr1));

   let l = 0;
   for (let i = 0; i < distances.length; i++) {
      if (distances[i] > 1) {
         l = distances[i];
      }
   }
   const centerPoint = distances.indexOf(l);
   return [(2 + centerPoint) % 3, centerPoint, (centerPoint + 1) % 3];
}


console.log(getRoute([0, 5], [-1, 0], [1, 4]));

//!
function getRoute(arr1, arr2, arr3) {
   function getDistance(p1, p2) {
      const c = Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
      return c;
   }
   const distances = [
      getDistance(arr2, arr3),
      getDistance(arr1, arr3),
      getDistance(arr2, arr1),
   ];

   let l = 0;
   let centerPoint;
   for (let i = 0; i < distances.length; i++) {
      if (distances[i] > 1) {
         l = distances[i];
         centerPoint = i
      }
   }

   return [(2 + centerPoint) % 3, centerPoint, (centerPoint + 1) % 3];
}


console.log(getRoute([0, 5], [-1, 0], [1, 4]));

//! функция convertToBitwise принимает натуральное число
//! и возвращает строку в которой это число представлено
// !в двоичном формате

function convertToBitwise(n) {
   const arr = [];
   let b = n;
   while (b>0) {
      const a = b % 2;
      arr.push(a)
      b = Math.floor(b / 2)
   }
   return arr.reverse().join('')
}
console.log(convertToBitwise(12));
/** // передано число 24
// 1. делим 24 на 2. остаток от деления 0, целая часть от деления 12
// 2. делим 12 на 2. остаток от деления 0, целая часть - 6
// 3. делим 6 на 2. остаток от деления 0, целая часть - 3
// 4. делим 3 на 2. остаток от деления 1, целая часть 1
// 5. делим 1 на 2. остаток от деления 1, целая часть 0.
// 6. ответ "11000" */


//!Создайте функцию, которая 
//!возвращает массив целых чисел от n до 1, где n > 0.
const reverseSeq = n => {
   let arr = [];
   for (let i = n; i > 0; i--) {
   arr.push(i);
   }
   return arr;
}

console.log(reverseSeq(5));

//!
const reverseSeq1 = num => {
   return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};

//!Завершите решение так,
//!чтобы оно перевернуло переданную в него строку.
//!'мир' => 'рим'
//!'слово' => 'оволс'

function reverseString(str) {
   return str.split('').reverse().join('');
}

console.log(reverseString('word'));
//!
function reverseString1(str){
   let word = '';
   for (let i = str.length - 1; i >= 0; i--)
   word += str[i];
   return word;
}
console.log(reverseString1('peace'));

//!Описание
//!Нам нужна функция, которая может преобразовать
//!строку в число.Какие способы достижения этого
//!вы знаете ?

//!Примечание. Не беспокойтесь,
//! все входные данные будут строками,
//!а каждая строка является абсолютно допустимым
//!представлением целого числа.

const stringToNumber = function(str){
   return Number(str);
   return null;
}
console.log(stringToNumber('12356'));



//!

const stringToNumber1 = function(str){
   return parseInt(str);
   return null;
}
console.log(stringToNumber1('-12356'));
console.log(stringToNumber1('12356'));
console.log(stringToNumber1('0'));


//!Сможете ли вы найти иголку в стоге сена?
//!Напишите функцию findNeedle(), которая принимает массив, 
//!полный мусора, но содержащий одну «иглу».
//!После того, как ваша функция найдет иглу, 
//!она должна вернуть сообщение(в виде строки), в котором говорится:
//!"найдена игла в положении " плюс индекс, в котором она нашла иглу, поэтому:
//!["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] -
function findNeedle(haystack) {
   for (let i = 0; i < haystack.length; i++) {
   if (haystack[i] === "needle") {
      return "Found the needle at position: " + i;
      } else (haystack[i] === 0); {
      return "Your function didn't return anything";
   }
   }
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]));

//! method forEach
function findNeedle(haystack) {
   let position = -1;
   haystack.forEach((el, indx) => {
   if (el === "needle") {
      position = indx;
   }
   });
   return position >= 0 ? "Found the needle at position: " + position : "Needle not found";
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]));

/*
//!
function findNeedle(haystack) {
   let position = -1;
   haystack.forEach((el, indx) => {
   if (el === 'needle') {
      position = indx;
   }
   });
   return position !== -1 ? `found the needle at position ${position}` : 'needle not found';
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]));
*/
//! filter

function findNeedle(haystack) {
   const foundNeedles = haystack.filter((el) => el === "needle");
   if (foundNeedles.length > 0) {
   return "Found the needle at position: " + haystack.indexOf("needle");
   } else {
   return "Needle not found";
   }
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]));

//!
function findNeedle(haystack) {
   return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]));
//!Это довольно просто. Ваша цель — создать функцию,
//!которая удаляет первый и последний символы строки.
//!Вам дан один параметр, исходная строка.
//!Вам не нужно беспокоиться о строках,
//!содержащих менее двух символов.

function removeChar(str) {
   let newStr = '';
   for (let i = 1; i < str.length - 1; i++) {
   newStr += str[i];
   }
   return newStr;
}
console.log(removeChar('assimilation'));

//! forEach
function removeChar(str) {
   let newStr = '';
   str.split('').forEach((char, index) => {
   if (index !== 0 && index !== str.length - 1) {
      newStr += char;
   }
   });
   return newStr;
}
console.log(removeChar('anassimilatione'));

//! map
function removeChar(str) {
   const charArray = str.split('');
   const newStrArray = charArray.map((char, index) => {
   if (index !== 0 && index !== charArray.length - 1) {
      return char;
   }
   });
   return newStrArray.join('');
}
console.log(removeChar('anassimilatione'));

//! filter
function removeChar(str) {
   const charArray = str.split('');
   const newCharArray = charArray.filter((char, index) => {
   return index !== 0 && index !== charArray.length - 1;
   });
   return newCharArray.join('');
}
console.log(removeChar('anassimilatione'));

//! reverse

function removeChar(str) {
   const reversedStr = str.split('').reverse().join('');
   const newStr = reversedStr.substring(1, reversedStr.length - 1);
   return newStr;
}
console.log(removeChar('anyassimilationene'));

//!
function removeChar(str) {
   return str.slice(1, -1);
}
console.log(removeChar('anyassimilationene'));

//!
function removeChar(str){
   return str.substring(1, str.length-1);
};
console.log(removeChar('anyassimilationene'));

//!Напишите функцию RemoveExclamationMarks,
//!которая удаляет все восклицательные
//!знаки из заданной строки.
function removeExclamationMarks(s) {
   let newS = '';
   for ( let i = 0; i < s.length; i++){
   if (s[i] !== "!"){
   newS += s[i];
   }
   }
   return newS;
}
console.log(removeExclamationMarks('Hello my dear Anahit!!!'));

//!
function removeExclamationMarks(s) {
   return s.replace(/!/g, '');
}
console.log(removeExclamationMarks('Hello my dear Anahit!!!'));

//!
function removeExclamationMarks(s) {
   return s.split('!').join('');
}
console.log(removeExclamationMarks('Hello my dear Anahit!!!'));

//!Завершите решение так, чтобы оно возвращало true,
//!если первый переданный аргумент(строка)
//!заканчивается вторым аргументом(тоже строкой).
function solution(str, ending) {
   return str.endsWith(ending);
}

console.log(solution("abced", "ed")); // true
console.log(solution("abced", "goodbye")); // false


//!
function solution(str, ending){
   return str.substr(-ending.length) == ending;
}
console.log(solution("abced", "ed")); // true
console.log(solution("abced", "goodbye")); // false

//!В этом простом задании вам дается число, и вы должны сделать его отрицательным.
//! А может быть, число уже отрицательное ?
function makeNegative(num) {
   return num < 0 ? num : num * -1;
}

console.log(makeNegative(-5));
console.log(makeNegative(6));

console.log(makeNegative(0));


//!
function makeNegative(num) {
   return -Math.abs(num);
}

//!
function makeNegative(num) {
   if ( num > 0 ) {
         return -num;
   } else {
         return num;
   }
}

//!
function makeNegative(num) {
   if(num>0){
   return -num;
   } else if(num<0) {
   return num;
   } else if(num===0){
   return 0;
   }
}


//!Напишите программу, которая находит сумму
//! всех чисел от 1 до num.
//!Число всегда будет положительным целым числом больше 0.
function summation(num) {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
   sum += i;
   }
   return sum;
}
console.log(summation(63));


//!Очень просто, по заданному целому числу или числу
//!с плавающей запятой найти его противоположность.
function opposite(number) {
   return number * -1;
}
console.log(opposite(56));

//!
function opposite(number) {
   return(-number);
}

//!
function opposite(number) {
   return number > 0 ? -number : Math.abs(number);
}

//!Учитывая массив целых чисел,
//!вернуть новый массив с удвоением каждого значения.
function maps(x){
   let newArr = [];
   for (let i = 0; i < x.length; i++){
      newArr.push(x[i]*2);
   }
   return newArr
}
   console.log(maps([4,9,6,23,47,58]));
//!
function maps(x){
   return x.map(el => el * 2);
}

console.log(maps([4, 9, 6, 23, 47, 58]));

//!Добро пожаловать. 
//!В этой ката вас просят возвести 
//!в квадрат каждую цифру числа и соединить их.
//!Например, если мы пропустим через функцию 9119, получится 811181, 
//!потому что 92 — это 81, а 12 — это 1.(81 - 1 - 1 - 81)
//!Пример #2: Ввод 765 будет/должен вернуть 493625,
//! потому что 72 равно 49, 62 равно 36, а 52 равно 25.(49 - 36 - 25)
//!Примечание.Функция принимает целое число и 
//!возвращает целое число.

function squareDigits(num) {
   // преобразовать число в строку, разбить строку на массив символов,
   // преобразовать каждый символ обратно в число и возвести в квадрат
   let squaredDigits = num.toString().split('').map((n) => {
     let sq = n * n;
   return sq;
   });
   // соединить квадраты цифр в строку и преобразовать обратно в число
   let result = parseInt(squaredDigits.join(''));
   return result;
}
console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
//!
function squareDigits(num){
   let squareDigits = num.toString()
   .split('')
   .map((el) => {  
     return el ** 2;
   });
   let result = parseInt(squareDigits.join(''));
   return result;
}
console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));

//!Реализуйте функцию, которая складывает два числа и
//! возвращает их сумму в двоичном виде.
//!Преобразование может быть выполнено до или после добавления.
//!Возвращаемое двоичное число должно быть строкой.

function addBinary(a,b) {
   const sum = a+b
   return (sum >>> 0).toString(2);
}

console.log(addBinary(96, 4));


//! Написать функция которая принимает строку и
//!возвращает новую строку без гласних

function disemvowel(str) {
   const arr = ["a", "e", "i", "o", "u"];
   return str.split("")
      .filter(el => !arr.includes(el.toLowerCase()))
      .join("");
}
   
//!соьдать функцию с двумя аргументами которая будет возвраюать
//!массив первъх n кратних x

function countBy(x, n) {
   let z = [];
   for (i = 1; i <= n; i++){
      z.push(x*i);
   }
   return z;
}

countBy(22, 3);

//!написать функцию, которая принимает строку и возвращает новую строку
//! с удаленными всеми гласными.
//!Например, строка «Этот сайт для неудачников LOL!» станет «Ths wbst s fr lsrs LL!».
//!Примечание: для этого ката не считается гласной.y
function disemvowel(str) {
   const arr = ['a','i', 'o', 'u', 'e', 'A', 'I','O','U', 'E'];
   return str.split('').filter(el => !arr.includes(el)).join(''); 
}
//!
function disemvowel(str) {
   const array = ['a', 'e', 'i', 'o', 'u'];
   
   return str.split('').filter(function(el) {
   return array.indexOf(el.toLowerCase()) == -1;
   }).join('');
}

//!Изограмма — это слово, в котором нет повторяющихся букв, 
//!последовательных или непоследовательных. Реализуйте функцию,
//!определяющую, является ли строка, содержащая только буквы, изограммой. 
//!Предположим, что пустая строка является изограммой. Игнорировать регистр букв.












































































































