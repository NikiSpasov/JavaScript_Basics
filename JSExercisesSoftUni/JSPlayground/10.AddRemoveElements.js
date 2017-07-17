function solve(args) {
    let arr = [];

    for(let i = 0; i < args.length; i++){
        let commandValue = args[i].split(' ');
        let command = commandValue[0];
        let value = Number(commandValue[1]);
        if(command === 'add'){
            arr.push(value);
        }
        else {
            arr.splice(value, 1);
        }
    }
    for(let num of arr){
       console.log(num);
    }
}
//solve(['add 3', 'add 5', 'add 7' ]);
solve(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7']);