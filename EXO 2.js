const christMas= (year) =>{
    const today= new Date();
    let nextChrist= new Date(`${year}`,11,25);
    if((nextChrist-today) < 0){
      return `${-1*Math.ceil((nextChrist-today)/(3600000*24))} days had alredy passed since ${year}`
    }
        return `Reamaning ${Math.ceil((nextChrist-today)/(24 * 3600000))} days for the next Christmas`
   } 
   console.log(christMas(2022))
   
   
