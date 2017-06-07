/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function capitalizeWords(string) {
    string = string.split(' ');
    let result = [];
    for (let word of string) {
        word = word[0].toUpperCase()+word.substring(1).toLowerCase();
        result.push(word);
    }
    console.log(result.join(' '));
}
// capitalizeWords('Capitalize these words');
// capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');