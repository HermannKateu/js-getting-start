const deleteOfCharacter = (str) => {
    const splitedStrin= str.split('');
    const container=[];
    for(let i=0; i<splitedStrin.length; i++){
        if(str.indexOf(splitedStrin[i]) == str.lastIndexOf(splitedStrin[i])){
            container.push(splitedStrin[i])
        }
    }
    return container.join("");
} 
console.log(deleteOfCharacter('dundcosdsonsnsdndsno'))