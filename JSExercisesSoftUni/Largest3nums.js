/**
 * Created by nspasov on 22.3.2017 г..
 */
function solve(args) {

    args.sort((a, b) => b - a );

    let lenght = Math.min(3, args.length);
        for (let i=0; i<lenght; i++){
            console.log(args[i])
        }
}
solve([6, 9, 4, 5, 3, 3]);