/**
 * Created by Deyan Peychev on 08-May-17.
 */
function convert(input){

    let feet = Math.floor(input / 12);
    let inches = input % 12;

    console.log(`${feet}'-${inches}"`)
}
convert([36]);
convert([55]);
convert([11]);