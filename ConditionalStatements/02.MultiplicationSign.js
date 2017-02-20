function ExchangeIfGreater(arr) {
    a = +arr[0];
    b = +arr[1];
    c = +arr[2];

    if (a == 0 || b == 0 || c == 0) {
       console.log("0");
    }
    else if (a < 0 && b < 0 && c > 0) {
        console.log("+");
    }
    else if (a > 0 && b > 0 && c > 0) {
         console.log("+");
    }
    else if (a < 0 && b > 0 && c < 0) {
         console.log("+");
    }
    else if (a > 0 && b < 0 && c < 0) {
         console.log("+");
    }
  
    else  {
        console.log("-");
    }  
}

ExchangeIfGreater(['0', '-2.5', '4']);
