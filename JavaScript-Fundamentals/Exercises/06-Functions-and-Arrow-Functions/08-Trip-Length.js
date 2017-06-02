/**
 * Created by Deyan Peychev on 31-May-17.
 */
function solve([x1, y1, x2, y2, x3, y3]) {

    function getDistance(firstX,firstY,secondX,secondY) {
        return Math.sqrt(Math.pow((firstX - secondX), 2) + Math.pow((firstY - secondY), 2));
    }

    let distance1to2 = getDistance(x1,y1,x2,y2);
    let distance1to3 = getDistance(x1,y1,x3,y3);
    let distance2to3 = getDistance(x2,y2,x3,y3);

 /*   console.log(distance1to2);
    console.log(distance1to3);
    console.log(distance2to3);*/

    if (distance1to2 <= distance1to3 && distance1to3>=distance2to3){
        console.log(`1->2->3: ${distance1to2+distance2to3}`);
    }else if ((distance1to2 <= distance2to3) && (distance1to3 < distance2to3)) {
        let b = distance1to3 + distance1to2;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance2to3 + distance1to3;
        console.log('1->3->2: ' + c);
    }
}
/*
solve([-1, -2, 3.5, 0, 0, 2]);
solve([0, 0, 2, 0, 4, 0]);*/
