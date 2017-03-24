/**
 * Created by nspasov on 23.3.2017 г..
 */

function solve(args) {
    args = args.map(Number);
    let num = args[0];
    for(let i = 0; i < num; i++){
        console.log(num - i);
    }
}
solve(['6']);