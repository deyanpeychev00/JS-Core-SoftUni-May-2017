/**
 * Created by Deyan Peychev on 08-May-17.
 */
function calcAreaAndPerimeter(fisrtSide, secondSide) {
    [fisrtSide, secondSide] = [fisrtSide, secondSide].map(Number);
    console.log(fisrtSide*secondSide);
    console.log((2*fisrtSide)+(2*secondSide));
}
calcAreaAndPerimeter(['1','3']);