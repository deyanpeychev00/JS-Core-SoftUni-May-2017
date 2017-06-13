/**
 * Created by Deyan Peychev on 13-Jun-17.
 */
function solve([startingYield]){
    startingYield = Number(startingYield);
    let days = 0;
    let spice = 0;

    while(startingYield >= 100){
        spice+=startingYield-26;
        startingYield -=10;
        days++;
    }
    console.log(days);
    if(spice >=26){
        spice -=26;
    }
    console.log(spice);

}
// solve(['50']);