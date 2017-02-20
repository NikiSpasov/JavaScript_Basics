function ExchangeIfGreater(arr) {
    a = +arr[0];
    b = +arr[1];
    if (a > b) {
        tempA = b;
        b = a;
        a = tempA;
    }
    console.log(a + " " + b);
    
}
ExchangeIfGreater([18, 13]);