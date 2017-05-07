/**
 * Created by Deyan Peychev on 08-May-17.
 */
function binaryLogarithm(numbers){
    for (num of numbers){
        console.log(Math.log2(num));
    }
}
binaryLogarithm(['1024', '1048576', '256', '1', '2','50','100']);