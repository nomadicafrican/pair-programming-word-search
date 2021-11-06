const transpose = function (word) {
    let rowArr = [];
    let resultArr = [];
    for (let i = 0; i < word[0].length; i++) {
        for (let row = 0; row < word.length; row++) {
            rowArr.push(word[row][i]);
        }
        resultArr.push(rowArr);
        rowArr = [];
    }
    return resultArr;
};
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    // console.log(horizontalJoin);
    for (i of horizontalJoin) {
        // console.log(l);
        if (i.includes(word) || i === word) {
            return true;
        }
    }
    const vertical = transpose(letters);
    const verticalJoin = vertical.map((ls) => ls.join(""));
    console.log(verticalJoin);
    for (let i of verticalJoin) {
        // console.log(l);
        if (i.includes(word) || i === word) {
            return true;
        }
    }
    return false
};
console.log(
    wordSearch(
        [
            ["A", "W", "C", "F", "Q", "U", "A", "L"],
            ["S", "E", "I", "N", "F", "E", "L", "D"],
            ["Y", "F", "C", "F", "K", "U", "A", "L"],
            ["H", "M", "J", "T", "I", "V", "R", "G"],
            ["W", "H", "C", "S", "N", "E", "R", "L"],
            ["B", "F", "R", "E", "G", "E", "Y", "B"],
            ["U", "B", "T", "W", "A", "P", "A", "I"],
            ["O", "D", "C", "A", "K", "U", "A", "S"],
            ["E", "Z", "K", "F", "Q", "U", "A", "L"],
        ],
        "SEINFELD")
);

module.exports = wordSearch;