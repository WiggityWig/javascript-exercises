const findTheOldest = function(pplArray) {
    const agesArray = [];
    for (let i = 0; i < pplArray.length; i ++) {
        if (pplArray[i].yearOfDeath == undefined){
            death = (new Date().getFullYear())
        }
            else {
                death = (pplArray[i].yearOfDeath)
            };
        const birth = (pplArray[i].yearOfBirth);
        const age = death - birth;
        const name = (pplArray[i].name);
      // const death = (pplArray[i].yearOfDeath);
        agesArray.push({name, birth, death, age});
         }
    agesArray.sort(function(a,b){
        let keyA = a.age;
        let keyB = b.age;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
        
    })
   let oldestArray = (agesArray.slice(-1));
   let oldest = Object.assign({}, oldestArray);
   return oldest[0];

  
};
// Do not edit below this line
module.exports = findTheOldest;
