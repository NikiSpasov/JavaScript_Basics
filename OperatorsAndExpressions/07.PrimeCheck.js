function primeCheck(num) {
    let prime = true;
    if (num <= 1) {
        console.log("false");
        return;
    }
    for (i = num - 1; i > 1; i = i - 1){
        if(num % i === 0){
            prime = false;
            console.log(prime);
            return;
        }
    }
    console.log(prime);
}
primeCheck(23);