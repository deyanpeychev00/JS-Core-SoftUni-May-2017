/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint){
        const deltaX = firstPoint.x - secondPoint.x;
        const deltaY = firstPoint.y - secondPoint.y;

        return Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

