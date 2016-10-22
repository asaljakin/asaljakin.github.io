/**
 * Created by andrew on 21.10.16.
 */

/*split

 Синтаксис

 var arr = str.split([separator][, limit]);
 Аргументы

 separator
 регулярное выражение или строка, по которой делить str
 limit
 максимальное количество кусков, на которые может быть разбита строка
 Описание, примеры

 Метод split возвращает новый массив.

 Строка бьется по separator, при разбивании separator пропадает:

 arr = "a,b,c".split(',')  // массив ["a", "b", "c"]
*/

var animals = "dog , cat, elephant ,  wolf  , fox, rabbit";
var sep = /\s*,\s*/;
var animalList = animals.split(sep,4);
console.log("Primer 1: split ");
console.dir(animals);
console.log(animalList.toString()); //  ["dog" "cat" "elephant" "wolf"]



/*push

 Синтаксис

 array.push( elem1, elem2, ... )
 Аргументы

 elem1, elem2, ...
 Эти элементы будут добавлены в конец массива
 */

var addAnimals = ["fox", "rabbit"];
for (var i =0; i < addAnimals.length; i++)
{
  animalList.push(addAnimals[i]);
}
console.log("Primer 2: push ");
console.log(addAnimals);
console.log(animalList.toString()); //["dog", "cat", "elephant", "wolf", "fox", "rabbit"]



/*sort

 Синтаксис

 arrayObj.sort( [sortFunction] )
 Аргументы

 sortFunction
 Необязательный параметр - функция сортировки.
 Если указана функция, то элементы массива будут отсортированы согласно значениям, возвращаемых функцией. Условия на функцию можно записать следующим образом:

 function sortFunction(a, b){
 if(a меньше, чем b по некоторому критерию)
 return -1 // Или любое число, меньшее нуля
 if(a больше, чем b по некоторому критерию)
 return 1  // Или любое число, большее нуля
 // в случае а = b вернуть 0
 return 0
 }

 Если параметр не указан, массив будет отсортирован в лексикографическом порядке (возрастающий порядок следования символов в таблице ASCII).

 */
animalList.sort();
console.log("Primer 3: sort ");
console.log(animalList.toString()); //["dog", "cat", "elephant", "wolf", "fox", "rabbit"]



/*reverse

 Синтаксис

 arrayObj.sort( [sortFunction] )
 Аргументы

 sortFunction
 Необязательный параметр - функция сортировки.
 Если указана функция, то элементы массива будут отсортированы согласно значениям, возвращаемых функцией. Условия на функцию можно записать следующим образом:

 function sortFunction(a, b){
 if(a меньше, чем b по некоторому критерию)
 return -1 // Или любое число, меньшее нуля
 if(a больше, чем b по некоторому критерию)
 return 1  // Или любое число, большее нуля
 // в случае а = b вернуть 0
 return 0
 }

 Если параметр не указан, массив будет отсортирован в лексикографическом порядке (возрастающий порядок следования символов в таблице ASCII).
*/

animalList.reverse();
console.log("Primer 4: reverse ");
console.log(animalList.toString()); //["dog", "cat", "elephant", "wolf", "fox", "rabbit"]



/*pop
 Пример:
    myFish = ["angel", "clown", "mandarin", "surgeon"];
    popped = myFish.pop();

    // теперь popped = "surgeon"
    // myFish = ["angel", "clown", "mandarin"]

 */

delAnimal =animalList.pop();
console.log("Primer 5: pop ");
console.log(delAnimal);
console.log(animalList.toString()); //["dog", "cat", "elephant", "wolf", "fox", "rabbit"]



/*join

 Синтаксис

 arrayObj.join( [glue] )
 Аргументы

 glue
 Строковый аргумент, с помощью которого будут соединены в строку все элементы массива. Если аргумент не задан, элементы будут соединены запятыми.
 */

//animalList.join();
console.log("Primer 6: join ");
console.dir(animalList);
console.dir(animalList.join()); //["dog", "cat", "elephant", "wolf", "fox", "rabbit"]



/*splice

 Синтаксис

 arrayObj.splice( start, deleteCount, [elem1[, elem2[, ...[, elemN]]]] )
 Аргументы

 start
 Индекс в массиве, с которого начинать удаление.
 deleteCount
 Кол-во элементов, которое требуется удалить, начиная с индекса start.

 elem1, elem2, ..., elemN
 Добавляемые элементы в массив. Добавление начинается с позиции start.
 */

//animalList.join();
console.log("Primer 7: splice ");
animalList.splice(0,animalList.length);
console.dir(animalList.toString());
//console.dir(animalList.join()); //["dog", "cat", "elephant", "wolf", "fox", "rabbit"]