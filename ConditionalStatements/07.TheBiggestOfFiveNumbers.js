function TheBiggestOfFive(arr) {
    a = +arr[0];
    b = +arr[1];
    c = +arr[2];
    d = +arr[3];
    e = +arr[4];

    if (a >= b && a >= c && a >= d && a >= e) {
        console.log(a);
    }
    else if (b >= a && b >= c && b >= d && b >= e) {
        console.log(b);
    }
    else if (c >= a && c >= b && c >= d && c >= e) {
        console.log(c);
    }
      else if (d >= a && d >= b && d >= c && d >= e) {
        console.log(d);
    }
      else if (e >= a && e >= b && e >= c && e >= d) {
        console.log(e);
    }
}

TheBiggestOfFive(['-3', '-0.5', '-1.1', '-2', '-0.1']);