/* Написать функции filter и map массива через метод reduce. 
Они должны делать то же, что и методы массива filter, map, 
но принимая сам массив в качестве 1го аргумента.
 */
function filter(array, callback) {

    return array.reduce((accumulator, currentElement)=> {
        if(callback(currentElement)){
            accumulator.push(currentElement);
        }
        return accumulator;
      },[]);
}

//test
function isBigEnough(value) {
    return value >= 10;
  }
let arr = [12, 5, 8, 130, 44];
console.log(filter(arr, isBigEnough));
console.log(arr.filter(isBigEnough));
console.log(filter(arr, isBigEnough) === arr.filter(isBigEnough));

//==========================================================
function map (array, callback){
    return array.reduce((accumulator, currentElement)=> {
            accumulator.push(callback(currentElement));
        return accumulator;
      },[]);
}

//test
function roots(num) {
    return Math.sqrt(num);
    }
let numbers = [1, 4, 9];
console.log(map(numbers, roots));
console.log(numbers.map(roots));
console.log(map(numbers, roots) === numbers.map(roots));
//==========================================================
/* Написать функцию getRange(), принимающую от 1 до 3 аргументов
и возвращающую массив целых чисел. 
1 аргумент – количество элементов
2 аргумент – значение первого элемента
3 аргумент – шаг
getRange(3) // [1, 2, 3]
getRange(2, 2) // [2, 3]
getRange(3, 2, 2) // [2, 4, 6]*/

function getRange(length, value=1, step=1){
    let arr =[];
    for (let index = 0; index < length; index++) {
        arr.push(value);
        value+=step;
    }
    return arr;
}
console.log(getRange(3, 2, 2));
console.log(getRange(2, 2));
console.log(getRange(3));

