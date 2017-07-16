/**
 * Created by Deyan Peychev on 16-Jul-17.
 */
function elemelons(){
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.sorts = ['Water', 'Fire', 'Earth', 'Air'];
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get _elementIndex() {
            return this.elementIndex;
        }

        toString(){
            return `Element: Water` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`;
        }
    }
    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get _elementIndex() {
            return this.elementIndex;
        }

        toString(){
            return `Element: Fire` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`;
        }
    }
    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get _elementIndex() {
            return this.elementIndex;
        }

        toString(){
            return `Element: Earth` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`;
        }
    }
    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get _elementIndex() {
            return this.elementIndex;
        }

        toString(){
            return `Element: Earth` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`;
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.sort = this.sorts.shift();
            this.sorts.push(this.sort);
        }
        morph(){
            let currentSort = this.sorts.shift();
            this.sort = currentSort;
            this.sorts.push(currentSort);
        }
        toString(){
            return `Element: ${this.sort}` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`;
        }
    }

    return {
        Melon,
        Watermelon,
        Earthmelon,
        Firemelon,
        Airmelon,
        Melolemonmelon
    }
}
let classes = elemelons();

let test = new classes.Melolemonmelon(150, "Melo");
test.morph();
test.morph();

console.log(test.toString());