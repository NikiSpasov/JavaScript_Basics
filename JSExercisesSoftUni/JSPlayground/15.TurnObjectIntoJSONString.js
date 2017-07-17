/**
 * Created by nspasov on 24.3.2017 г..
 */
function solve(args) {
    let objJSON = {};
    for(let i = 0; i < args.length; i++){
        let keyValue = args[i].split(' -> ');
        if(i === 2 || i === 3){
            let key = keyValue[0];
            objJSON[key] =  Number(keyValue[1]);
        }else{
            let key = keyValue[0];
            objJSON[key] =  keyValue[1];
        }

        }
    console.log(JSON.stringify(objJSON));
    }

solve(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);
