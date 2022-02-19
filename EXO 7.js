/*const sumOfCubes = max => {
    let result=[];
    let final=[]
    let sum=0;
    for(let i=1; i<(max+1); i++){
      result.push(Math.pow(i,3))
  }
  for(let i=0; i<result.length; i++){
      final = sum+=result[i]
  }
    return final;
  }
  console.log(sumOfCubes(5))*/

  function sumOfCubes(max){
    let sum=0;
    for(let i=0; i<(max+1); i++){
       sum += Math.pow(i,3)
    }
    return sum
  }
  console.log(sumOfCubes(3))
  