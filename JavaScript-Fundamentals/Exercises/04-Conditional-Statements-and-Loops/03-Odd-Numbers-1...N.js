/**
 * Created by Deyan Peychev on 09-May-17.
 */
function printOdds([limiter]) {
    for(let i =1; i<=limiter; i+=2){
        console.log(i);
    }
}
printOdds(['5']);
printOdds(['10']);