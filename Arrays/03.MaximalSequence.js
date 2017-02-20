function maxSequence (num){
    let i;
        let cnt = 1;
        let max = -1; 
    for ( i = 0; i < num.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
           cnt++; 
           if (max < cnt) {
               max = cnt;
           }
        }     
    }
    console.log(max);
}
maxSequence ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];