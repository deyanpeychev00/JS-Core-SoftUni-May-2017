/**
 * Created by Deyan Peychev on 28-May-17.
 */
function solve(args) {
    let num = args[0];
    for (let i = 1; i < args.length; i++) {

        switch(args[i]){
            case 'chop': num/=2; break;
            case 'dice': num=Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num*=3; break;
            case 'fillet': num-=num*20/100; break;

        }
        console.log(num);
    }
}
/*solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);*/
