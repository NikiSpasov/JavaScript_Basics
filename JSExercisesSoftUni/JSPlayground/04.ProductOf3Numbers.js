/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    args = args.map(Number);
    let cnt = 0;
    for(let num of args){
        if(num < 0){
            cnt++;
        }
    }
    if (cnt % 2 === 0){
        console.log(
           'Positive'
        );
    }
    else {
        console.log('Negative');
    }
}
solve(['6', '0']);