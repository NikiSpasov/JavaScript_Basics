function increaseArrayMemebersByFive(num) {
    let increase = 0;
    let arr = new Array(+num);
    for (var i = 0; i < arr.length; i++) {
         arr[i] = increase;
         increase += 5;
         console.log(arr[i]);  
    }
}
increaseArrayMemebersByFive(20);