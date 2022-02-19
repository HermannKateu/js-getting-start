function multAndDiv(X,Y) {
    let Div,Mult
       if(Y !== 0 ){
           Mult=X*Y;
           Div=X/Y;
       }
       else if(Y == 0){
        Mult= X*Y;
        Div='Impossible'
       }
   
       return {Mult,Div};
   }
   console.log(multAndDiv(3,0))