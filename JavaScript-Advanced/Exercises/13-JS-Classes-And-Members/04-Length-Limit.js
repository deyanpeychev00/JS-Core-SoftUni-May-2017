/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if(value < 0){
            this._innerLength = 0;
        }else{
            this._innerLength = value;
        }
    }
    increase(length){
        this.innerLength +=length;
    }
    decrease(length){
        this.innerLength -=length;
    }
    toString(){
        if(this.innerLength >= this.innerString.length){
            return this.innerString;
        }else{
            return this.innerString.substring(0, this.innerLength) + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
