const getTheTitles = function(bookArray) {
    let titleArray = [];
    for (let i = 0; i < (bookArray.length); i++) {
        let title = bookArray[i].title;
        titleArray.push(title);
    }
    return titleArray;
}
// Do not edit below this line
module.exports = getTheTitles;
