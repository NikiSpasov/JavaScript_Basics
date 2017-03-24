/**
 * Created by nspasov on 22.3.2017 г..
 */
function solve() {
    let obj = {
        name: 'Sofia',
        income: 100
    };
    console.log (obj.name);
    let isIn = 6;
    if (obj.name === "Sofia") {
        console.log(isIn);
    }
    else{
        console.log('5');
    }


}
//solve();
function arrTest() {
    let arr = [10, 20, 30];
    for (let num in arr){
        console.log(num);
    }

}
/*arrTest(); //0, 1, 2 - т.е. с 'in' връща индексите
function arrTest1() {
    let arr = [10, 20, 30];
    for (let num of arr){
        console.log(num);
    }

}**/
//arrTest1();//10, 20, 30 - т.е. с 'of' връща стойностите;



function testObj() {
    //за обекти работи само с in:
    let obj = {
        name: 'Pesho',
        age: 13
    };
    for (let key in obj){
        //console.log(key);//name, age; (понеже показва индексите,
        // а тук индексите са самите ключове);
    }
    for (let key in obj){
        //console.log(obj[key]);//Pesho, 13;(тук показва obj[name] и след
        //това obj[age] -върти през стойностите на ключовете )
    }
    obj.color = "red";
    console.log (obj.name);
    console.log (obj.color);
    console.log(`${obj.color} ${obj.name} ${obj.age}`);
}
//testObj();

function date() {
    let a = new Date();
    //console.log(a)

}
date();
let matrix = [
    [5, 6, 11],
    [7, 8, 9],
    [2, 6, 7]
];
//console.log (matrix[0][2]); //11

let numbers = [1, 2, 3, 4, 5];
let edited = numbers.join('-');
//console.log(edited); //1-2-3-4-5;
let newEdit = edited.split('-').map(Number);
//console.log(newEdit);//[ 1, 2, 3, 4, 5 ]
newEdit.push(67);
//console.log(newEdit);//[ 1, 2, 3, 4, 5, 67 ]
let testFilter = newEdit.filter(x => x > 2);
console.log(testFilter);//[ 3, 4, 5, 67 ]
let lastElement = newEdit.pop(); //вади посления елемент!
//console.log(lastElement); //67
//console.log(newEdit); //[ 1, 2, 3, 4, 5 ]

newEdit.shift();
//console.log(newEdit);//[ 2, 3, 4, 5 ]
newEdit.unshift(345);
//console.log(newEdit);//[ 345, 2, 3, 4, 5 ]

newEdit.splice(2, 1);
//console.log(newEdit);//[ 345, 2, 4, 5 ] - няма я 3-та,
//т.е. е започнало от 2-ри индекс и е изтрило 1 елемент (2, 1);

newEdit.splice(2, 0, 66, 77); //на втори индекс изтрии 0 елемента
//и вкарай два нови - 66, 77;
//console.log(newEdit);//[ 345, 2, 66, 77, 4, 5 ]
let removed = newEdit.splice(3, 2, 99, 44);
//console.log(removed);//[77, 4] - масив от премахнатите елементи;
//console.log(newEdit);//[ 345, 2, 66, 99, 44, 5 ]
//!!! ВАЖНО!
// ЗАБЕЛЕЖИ:
// Въпреки, че към промеливата removed
// се закача newEdit.Splice, newEditSplice се променя!?!

let langs = 'C#, JAVA, JS, PHP, HTML'; //string;
arrFromLangs = langs.split(', ');//забележи, сплитва по повече от един чар!
console.log(arrFromLangs);//[ 'C#', 'JAVA', 'JS', 'PHP', 'HTML' ];
console.log(arrFromLangs.join('>>'));//C#>>JAVA>>JS>>PHP>>HTML
console.log(arrFromLangs); //[ 'C#', 'JAVA', 'JS', 'PHP', 'HTML' ]
//TУк не са джойнати, не е приложило операцията както /виж ред 102/;
