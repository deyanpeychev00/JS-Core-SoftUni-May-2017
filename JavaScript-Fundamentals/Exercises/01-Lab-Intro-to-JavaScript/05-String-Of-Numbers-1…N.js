/**
 * Created by Deyan Peychev on 06-May-17.
 */
function stringOfNumbers([limiter]){
    let str = '';
    for(let i =1; i<=limiter; i++){
        str+=i;
    }
    console.log(str);
}
stringOfNumbers(['11']);