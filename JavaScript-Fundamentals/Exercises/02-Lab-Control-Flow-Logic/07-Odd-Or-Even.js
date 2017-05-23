/**
 * Created by Deyan Peychev on 08-May-17.
 */
function oddOrEven(number) {
    let reminder = Number(number) % 2;
    if (reminder === 0){
        console.log("even");
    }else if (Math.abs(reminder) === 1){
        console.log("odd");
    }else{
        console.log("invalid");
    }
}
oddOrEven(['2']);
oddOrEven(['3']);
oddOrEven(['2.5']);
oddOrEven(['pesho']);