function Sort3nums(arr) {
    a = +arr[0];
    b = +arr[1];
    c = +arr[2];

    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a + " " + b + " " + c)
            return;
        }
        else if (c > b) {
            console.log(a + " " + c + " " + b)
        }
    }
    if (b >= a && b >= c) {
        if (a >= c) {
            console.log(b + " " + a + " " + c)
        }
        else if (c > a) {
            console.log(b + " " + c + " " + a)
        }
    }
    if (c >= a && c >= b) {
        if (a >= b) {
            console.log(c + " " + a + " " + b)
        }
        else if (b > a) {
            console.log(c + " " + b + " " + a)
        }
    }
}


Sort3nums(['-2', '-2', '-5']);