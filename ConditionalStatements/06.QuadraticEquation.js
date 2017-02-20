function QuadEquat(arr) {
    a = +arr[0];
    b = +arr[1];
    c = +arr[2];
    let d = 0;
    let root1 = 0;
    let root2 = 0;

    d = b * b - 4.0 * a * c;
    if (d >= 0.0) {
        d = Math.sqrt(d);
        root1 = (-b + d) / (2.0 * a);
        root2 = (-b - d) / (2.0 * a);
        if (root1 == root2) {
            console.log("x1=x2=" + root1.toFixed(2));
        }
        else if (root1 > root2) {
            console.log("x1=" + root2.toFixed(2) + "; " + "x2=" + root1.toFixed(2));
        }
        else{
             console.log("x1=" + root1.toFixed(2) + "; " + "x2=" + root2.toFixed(2));
        }
    }
    else {
        console.log("no real roots");
    }
}
QuadEquat(['-0.5', '4', '-8']);


