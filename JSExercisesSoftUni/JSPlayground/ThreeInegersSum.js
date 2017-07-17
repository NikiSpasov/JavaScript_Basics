/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    args = args.map(Number);

    console.log(
        checkForSum(args[0], args[1], args[2]) ||
        checkForSum(args[1], args[2], args[0]) ||
        checkForSum(args[2], args[0], args[1]) ||
        'No'
    );

    function checkForSum (first, second, sum){
        if(first + second !=sum) {
            return false;
    };
        if(first > second){
        [first, second] = [second, first];
        }
        return `${first} + ${second} = ${sum}`
    }
}
solve(['4', '5', '8']);