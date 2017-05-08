/**
 * Created by Deyan Peychev on 08-May-17.
 */
function distanceIn3D([x1,y1,z1,x2,y2,z2]){
    [x1,y1,z1,x2,y2,z2] = [x1,y1,z1,x2,y2,z2].map(Number);
    let distance = Math.sqrt(
        Math.pow((x1-x2),2)+
        Math.pow((y1-y2),2)+
        Math.pow((z1-z2),2)
    );
    console.log(distance);
}
distanceIn3D([3.5, 0, 1, 0, 2, -1]);