function TheBiggestOfThree(arr) {
    a = +arr[0];
    b = +arr[1];
    c = +arr[2];

    if (a >= b && a >= c) {
       console.log(a);
    }
    else if (b >= a && b >= c) {
        console.log(b);
    }
    else if (c >= a && c >= b) {
         console.log(c);
}
}

TheBiggestOfThree(['-2', '-2', '-5']);