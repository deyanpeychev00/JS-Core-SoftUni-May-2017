/**
 * Created by Deyan Peychev on 27-May-17.
 */
function solve(args) {
   let inVolume = (x,y,z) => {
     let x1=10, x2=50,
         y1=20, y2=80,
         z1=15, z2=50;

     return (x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2);
   };

    for (let i = 0; i < args.length; i+=3) {
        let x = args[i], y=args[i+1]; z=args[i+2];

        if(inVolume(x,y,z)){
            console.log('inside');
        }else{
            console.log('outside');
        }
    }
}
/*

solve([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);
console.log('-------------------');
solve([8, 20, 22]);*/
