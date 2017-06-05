/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function match(text) {
    let regex = new RegExp('[a-zA-Z0-9_]+', 'g');
    console.log((text.match(regex)).join('|'));
}
// match('_(Underscores) are also word characters');