/**
 * Created by Deyan Peychev on 07-Jun-17.
 */
function find(sentence) {
    let regex = /\b_[a-zA-Z0-9]+\b/g;
    sentence = sentence.match(regex);
    console.log(sentence.map(word => word.substring(1)).join(','));
}
// find('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
// find('Calculate the _area of the _perfectRectangle object.');