/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat) {
        if(rat instanceof Rat){
            this.unitedRats.push(rat)
        }
    };

    getRats() {
        return this.unitedRats;
    }
    toString(){
        if(this.unitedRats.length === 0){
            return this.name;
        }else{
            let result = this.name + '\n';
            for (let rat of this.unitedRats) {
                result += `##${rat}\n`;
            }
            return result;
        }
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]
console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho

