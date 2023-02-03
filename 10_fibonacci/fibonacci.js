const fibonacci = function(number){
    let i =0 
    Number(number);
    const array = [0,1,1];
    if (number >0){
        for ( i = 3; i <= 25; i++) {
            array[i] = array[i-2] + array[i-1];
        }
            return array[number];
            } 
            else if (number < 0) {
                return "OOPS";
            }
    };

// Do not edit below this line
module.exports = fibonacci;
