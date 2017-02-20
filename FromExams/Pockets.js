function solve(args) {
    "use strict";
    let pockets = args[0].split(' ')
        .map(Number),
        result = 0,
        len = pockets.length,
        sum = 0,
        index = 0;

    for (let i = 2; i < len - 1; i += 1) {
        if ((pockets[i] < pockets[i - 1]) && 
        (pockets[i] < pockets[i + 1])) {
            if ((pockets[i - 1] > pockets[i - 2]) && 
            (pockets[i + 1] > pockets[i + 2])) {
                 sum += pockets[i];
            }          
        }
       
    }
     console.log(sum);
}

solve( ["53 20 1 30 2 40 3 3 10 1"] );