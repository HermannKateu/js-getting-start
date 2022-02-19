function comparism(obj1,obj2) {


    if(obj1.name == obj2.name || obj1.numLegs == obj2.numLegs){
        return true;
    }
    else{
        return false;
    }
}
console.log(comparism(
  {name: "Aflac",
  numLegs: 2
  },
  {name: "Aflac",
  numLegs: 2,}
  ))