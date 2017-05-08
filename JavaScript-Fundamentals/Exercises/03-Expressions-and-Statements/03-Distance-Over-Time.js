/**
 * Created by Deyan Peychev on 08-May-17.
 */
function calcDistance([v1,v2,t]) {
    [v1,v2,t] = [v1,v2,t].map(Number);
    let dist1= v1*t;
    let dist2= v2*t;
    let distance = Math.abs(dist1-dist2);
    console.log(distance/3.6);
}
calcDistance(['0', '60', '3600']);