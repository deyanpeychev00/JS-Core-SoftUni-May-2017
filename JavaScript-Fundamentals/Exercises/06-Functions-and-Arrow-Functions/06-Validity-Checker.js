/**
 * Created by Deyan Peychev on 28-May-17.
 */
function solve([x1, y1, x2, y2] ) {
    let firstPoint = {
        x: x1,
        y: y1
    };
    let secondPoint = {
        x: x2,
        y: y2
    };
    let coordinateSystemStart = {
        x: 0,
        y: 0
    };

    function getDistance(firstPoint, secondPoint) {
       let distance = Math.sqrt(Math.pow((secondPoint.x - firstPoint.x),2) + Math.pow((secondPoint.y - firstPoint.y),2));

       if (Number.isInteger(distance)){
           return `{${firstPoint.x}, ${firstPoint.y}} to {${secondPoint.x}, ${secondPoint.y}} is valid`;
       }else{
           return `{${firstPoint.x}, ${firstPoint.y}} to {${secondPoint.x}, ${secondPoint.y}} is invalid`;
       }
    }

    console.log(getDistance(firstPoint, coordinateSystemStart));
    console.log(getDistance(secondPoint, coordinateSystemStart));
    console.log(getDistance(firstPoint, secondPoint));
}
/*
solve(['3','0','0','4']);
solve(['2','1','1','1']);*/
