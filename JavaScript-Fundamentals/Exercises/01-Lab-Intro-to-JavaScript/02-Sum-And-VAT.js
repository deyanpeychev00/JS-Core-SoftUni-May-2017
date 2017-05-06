/**
 * Created by Deyan Peychev on 06-May-17.
 */
function sumAndVat(args){
    "use strict";
    let sum=0;
    for( let arg of args){
        sum+=Number(arg);
    }
    let vat = sum*0.2;
    let total = sum*1.2;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}

sumAndVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);