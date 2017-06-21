/**
 * Created by Deyan Peychev on 18-Jun-17.
 */
function solve(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapizLazuli = 0;
    let gold = 0;
    let currentHeight =0;

    for (let step = base; step>2; step-=2) {
        currentHeight++;
       let size = step*step;
       // console.log(`size: ${size}`);
       let currentStone = (step-2)*(step-2);
       // console.log(`currentStone: ${currentStone}`);
       let otherMaterial = size-currentStone;
        // console.log(`otherMaterial: ${otherMaterial}`);
       if(currentHeight%5===0){
           lapizLazuli+=otherMaterial*increment;
       }else{
           marble+=otherMaterial*increment;
       }
        stone+=currentStone*increment;
    }
    // check gold needed:
    if(base%2===0){
        gold = Math.ceil(4*increment);
    }else{
        gold = Math.ceil(1*increment);
    }
    currentHeight++;
    let finalHeight = Math.floor(currentHeight*increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapizLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.ceil(finalHeight)}`);
}
solve(11,1);
// solve(12,1);