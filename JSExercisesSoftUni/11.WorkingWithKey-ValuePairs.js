/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    let pair = {};

    for (let i = 0; i < args.length - 1; i++) {
        let keyValue = args[i].split(' ');
        pair[keyValue[0]] = keyValue[1];
    }
    let finalCommand = args[args.length - 1];
    if (finalCommand in pair){
        console.log(pair[finalCommand]);
    }
    else {
        console.log('None')
    }
}
solve(['key value', 'key eulav', 'key aiiii', 'test tset', 'key']);