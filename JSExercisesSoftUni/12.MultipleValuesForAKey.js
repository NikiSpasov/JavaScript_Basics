/**
 * Created by nspasov on 24.3.2017 г..
 */
function solve(args) {
    let pair = {};

    for (let i = 0; i < args.length - 1; i++) {
        let keyValue = args[i].split(' ');
        let key = keyValue[0];
        let values = keyValue[1];

        if(key in pair){
            pair[key] += ' ' + values;
        }else{
            pair[key] = keyValue[1];
        }
    }
    key = args[args.length - 1];
    if (key in pair){
        let arr = pair[key].split(' ');
        for (let k of arr){
            console.log(k);
        }
    }
    else {
        console.log('None')
    }
}
solve(['key value', 'key eulav', 'key aiiii', 'test tset', 'key']);