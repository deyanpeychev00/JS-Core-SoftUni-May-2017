/**
 * Created by Deyan Peychev on 09-May-17.
 */
function quadraticEquation(a,b,c){
    [a,b,c] = [a,b,c].map(Number);

    let D = Math.pow(b,2)-4*a*c;
    if(D>0){
        let x1 = (-b+Math.sqrt(D))/(2*a);
        let x2 = (-b-Math.sqrt(D))/(2*a);
        console.log(x2);
        console.log(x1);
    }else if(D===0){
        let x = (-b)/(2*a);
        console.log(x);
    }else{
        console.log("No");
    }
}
quadraticEquation(['6','11','-35']);
quadraticEquation(['1','-12','36']);
quadraticEquation(['5','2','1']);