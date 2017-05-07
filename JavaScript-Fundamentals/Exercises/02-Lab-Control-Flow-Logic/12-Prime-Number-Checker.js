/**
 * Created by Deyan Peychev on 08-May-17.
 */
function primeNumCheck([number]) {
    let prime = true;
    if (number <= 0 || Number(number) === 1){
        prime = false;
    }
    for(let i = 2; i<Math.sqrt(number); i++){
        if (number%i === 0){
            prime = false;
            break;
        }
    }

    console.log(prime);
}
