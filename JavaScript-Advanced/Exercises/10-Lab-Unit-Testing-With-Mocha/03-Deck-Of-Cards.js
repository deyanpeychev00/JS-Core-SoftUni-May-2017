/**
 * Created by Deyan Peychev on 08-Jul-17.
 */
function printDeckOfCards(cardsArray) {

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

    let deck = [];
    for (let card of cardsArray) {
        let suit = card.substr(-1);
        let face = card.substring(0, card.length-1);

        try{
            deck.push(makeCard(face,suit));
        }catch(error){
            console.log(`Invalid card: ${face}${suit}`);
            return;
        }
    }

    console.log(deck.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);	//A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']); //Invalid card: 1C
