"use strict"
function solve(arr) {
    let numbers = [];
    let command;
    let number;
    for (let i = 0; i < arr.length - 1; i++) {
        let pair = arr[i].split(' ');
        command = pair[0];
        number = pair[1];
        numbers[command] = number;
    }
    let key = arr[arr.length - 1]
    if (numbers[key] === undefined) {
        console.log("None")
    }
    else(
        console.log(numbers[key]))
}
solve(['key value', 'key eulav', 'test tset', 'key']);