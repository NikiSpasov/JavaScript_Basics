function TrapezoidArea(string) {
    a = +string[0];
    b = +string[1];
    h = +string[2];
    const area = (a + b) / 2 * h;
    console.log(area.toFixed(7));
}
TrapezoidArea(['8.5', '4.3', '2.7']);