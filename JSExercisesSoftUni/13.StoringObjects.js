/**
 * Created by nspasov on 24.3.2017 г..
 */
function solve(args) {
    for (let i = 0; i<args.length; i++){
        let arrFromInput = args[i].split(' -> ');
        let obj = {
            Name: arrFromInput[0],
            Age: arrFromInput[1],
            Grade: arrFromInput[2]
        }
        for(let key in obj){
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


solve(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);

/*
 Name: Pesho
 Age: 13
 Grade: 6.00

**/