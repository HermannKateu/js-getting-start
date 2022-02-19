const largestInt = (arr) => {
    let firstINdex=[0];
    for(let i=0; i<arr.length; i++){
        if(firstINdex>arr[i]){
            firstINdex=arr[i];
        }
    }
    return firstINdex;
}