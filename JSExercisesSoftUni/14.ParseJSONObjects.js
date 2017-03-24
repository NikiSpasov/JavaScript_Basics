/**
 * Created by nspasov on 24.3.2017 г..
 */
function solve(args) {
    for(let i = 0; i < args.length; i++){
        let objJSON = JSON.parse(args[i]);
        for(let key in objJSON){
            console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${objJSON[key]}`);
        }
    }
}
solve(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
'{"name":"Tosho","age":11,"date":"04/04/2005"}']);

/*
 Name: Gosho
 Age: 10
 Date: 19/06/2005
 **/