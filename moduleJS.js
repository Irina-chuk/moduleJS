//1. удалить дубликаты

const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]; 
function deleteDublikate (arr) {
    return newArr = [...new Set (arr)];
}

//2. Объедините 2 объекта в один: const obj1 = { id: 1, name: ‘userName’ } и const obj2 = { id: 1, password: ‘qwerty’ } 

function joinObj(obj1, obj2) {
    return newObj = {...obj1, ...obj2}
}

//3. Сократите объявление функции в одну строку, используя новый синтаксис ES6: const add = function (x, y) { return x + y } 

const add = (x, y) => x + y 

//4. Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой Функция, которую нужно реализовать: 
// const sleep = ms => { ... } 
// Её использование для выполнения действия с задержкой 5 секунд 
// sleep(5000).then(() => { console.log('Выполнилось через 5 секунд!'); 
// });

function sleep(ms) {
    return new Promise (resolve => resolve(setTimeout, ms))
}
sleep(5000).then(() => { console.log('Выполнилось через 5 секунд!');
});