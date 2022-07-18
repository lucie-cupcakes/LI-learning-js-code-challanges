const numPermutations = (letters) => {
    // iterative solution:
    // let total = null;
    // for (let i = 1; i <= letters.length; i++) {
    //     if (total === null) {
    //         total = i;
    //     }
    //     total = total * i;
    // }
    // return total;

    // recursive solution:
    if (letters.length === 1) { 
        return 1;
    }

    return letters.length * numPermutations(letters.slice(1));
};

const scrabble = (str) => numPermutations(Array.from(new Set(str)));

const showScrabbleForWord = (word) => `The word "${word}" has ${scrabble(word)} possible combinations.`

const words = ["tree", "apple", "car", "scrabble", "methamorphosis"];

for (const word of words) {
    console.log(showScrabbleForWord(word));
}
