const palindromes = function (string) {
    let lowerCase = string.toLowerCase();
    let punctuationLess = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString = punctuationLess.replaceAll(" ",'');
    let str = finalString;
    const characterArray = str.split("");
    let reverseArray = characterArray.reverse();
    let reversedStr = reverseArray.join("");
    if (((finalString > reversedStr) == false) && ((finalString < reversedStr) == false)) {
        return true;
    }
        else {
            return false;
        }    
}

// Do not edit below this line
module.exports = palindromes;
