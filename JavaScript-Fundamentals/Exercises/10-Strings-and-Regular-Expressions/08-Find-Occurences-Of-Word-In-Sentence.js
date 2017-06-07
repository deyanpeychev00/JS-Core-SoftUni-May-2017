/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function find(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    sentence = sentence.match(regex);
    console.log(sentence!== null ? sentence.length : 0);
}
// find('The waterfall was so high, that the child couldn’t see its peak therefore.','grandma');
