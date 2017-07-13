/**
 * Created by Deyan Peychev on 13-Jul-17.
 */
function returnClasses(){
    class Figure{
        constructor(){
            if(new.target === Figure){
                throw new Error('Class Figure cannot be instantiated directly!');
            }
        }
    }
    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString(){
            return `${this.constructor.name} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString(){
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return{
        Figure,
        Circle,
        Rectangle
    }
}

let solve = returnClasses();

let Figure = solve.Figure;
let Circle = solve.Circle;
let Rectangle = solve.Rectangle;

let c = new Circle(5);
let r = new Rectangle(3,4);

console.log(c.area);
console.log(c.toString());
console.log(r.area);
console.log(r.toString());
