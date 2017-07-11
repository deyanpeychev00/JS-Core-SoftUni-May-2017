/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width*this.height;
    }
}

let rect = new Rectangle(4, 5, 'red'); // create object
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // red
console.log(rect.calcArea()); // 20
