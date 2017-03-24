/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    if (args[0] <= args[1]){
        console.log(
            Number(args[0]) * args[1]
        )
    }
    else {
        console.log(
            Number(args[0]) / args[1]
        )
    }
}
solve(['6', '4']);