    const guesting= (guestNumber) => {
        const max=10;
        const min=1;
        const randomNumber= Math.floor(Math.random() * (max - min + 1) + min);
          min = Math.ceil(min);
          max = Math.floor(max);
            if(guestNumber == randomNumber){
                return 'GOOD WORK!!!!!!!';
            }
            else{
                return 'NOT MATCHED';
            }
         }
         
        console.log(guesting());
