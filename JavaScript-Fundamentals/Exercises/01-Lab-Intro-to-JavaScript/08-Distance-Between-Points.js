/**
 * Created by Deyan Peychev on 06-May-17.
 */

function distanceBetweenPoints(x1,y1,x2,y2) {
    console.log(Math.sqrt(Math.pow((Number(x1)-Number(x2)),2) + Math.pow((Number(y1) - Number(y2)),2)));
}
distanceBetweenPoints(['2', '4', '5', '0']);