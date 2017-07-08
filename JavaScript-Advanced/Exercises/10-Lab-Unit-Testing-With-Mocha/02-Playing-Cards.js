/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
function makeCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];
    let suitsSymbols = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if(!validFaces.includes(face)){
        throw new Error;
    }
    if(!validSuits.includes(suit)){
        throw new Error;
    }
    let card = face + suitsSymbols[suit];

    return card;
}
console.log('' + makeCard('A', 'S')); // A♠
console.log('' + makeCard('10', 'H'));	//10♥
// console.log('' + makeCard('1', 'C'));	// Error
