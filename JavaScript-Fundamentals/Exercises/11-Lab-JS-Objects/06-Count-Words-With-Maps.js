/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function count([text]) {
    let regex = /[a-zA-Z0-9_]+/gi;
    text = text.toLowerCase();
    let matches = text.match(regex);
    // console.log(matches);
    let words = new Map();
    for (let match of matches) {
        let matchRegEx = new RegExp(`\\b${match}\\b`, 'gi');
        words.set(match, (text.match(matchRegEx)).length);
    }
    words = [...words.entries()].sort();
    for (let [key, value] of words) {
        console.log(`'${key}' -> ${value} times`)
    }
}
// count(['Far too slow, you\'re far too slow.']);
// count(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);
// count(['The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.']);