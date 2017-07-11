/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
let func = (function() {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };

class Card{

    constructor(face, suit){
        this.face = face;
        this.suit = suit;
    }

    get face() {
        return this._face;
    }

    get suit() {
        return this._suit;
    }

    set face(value) {
        if(!Card.validFaces.includes(value)){
            throw new Error('Invalid face!');
        }
       this._face = value;
    }

    set suit(value) {
        if(!Object.keys(Suits).map(el => Suits[el]).includes(value)){
            throw new Error('Invalid suit!');
        }
        this._suit = value;
    }

    static get validFaces(){
        return Card._validFaces;
    }

    toString() {
        return this.face + this.suit;
    }
}
Card._validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    return {Suits, Card};
})();

// let Suits = func.Suits;
// let Card = func.Card;

// let card = new Card('J', Suits.SPADES);
// console.log(card.toString());