function PointInACircle([x, y]) {
    const r = 2;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (distance > r)
    {
        console.log("no " + distance.toFixed(2));
    }
    else{
        console.log("yes " + distance.toFixed(2));
    }
}