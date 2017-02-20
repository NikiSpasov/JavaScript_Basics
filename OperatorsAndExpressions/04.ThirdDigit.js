function thirdDigit(number) {
    const a = Math.trunc(number / 100);
    const b = a % 10;
    if(b === 7){
        console.log(true)
    }
    else{
    console.log("false " + b);
    }
}