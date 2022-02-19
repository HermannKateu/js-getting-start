function longestString(arr) {
    const len=arr[0].length;
    const nur=arr[0];
    for(let i=1; i<arr.length; i++){
        let max=arr[i].length;
        if(max>len){
            nur=arr[i];
            max=len;
        }
    }
    return nur;
} 