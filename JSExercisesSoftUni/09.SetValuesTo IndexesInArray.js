/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    let arr = new Array(args[0]);
    for(let i = 1; i < args.length; i++){
        let indexValue = args[i].split(' - ').map(Number);
        arr.splice(indexValue[0], 1, indexValue[1])
    }
    for(let num of arr){
        if (num === undefined){
            num = 0;
        }
        console.log(num);
    }
}
solve([2, '0 - 5', '0 - 6', '0 - 7']);