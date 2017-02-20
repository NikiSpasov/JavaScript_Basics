function lexComp (char1) {
if (char1[0] < char1[1]) {
    console.log("<");
}
else if (char1[0] === char1[1]) {
    console.log("=")
} else {
     console.log(">");
}
}
lexComp (['food', 'food']);