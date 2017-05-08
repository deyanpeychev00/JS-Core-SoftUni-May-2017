/**
 * Created by Deyan Peychev on 08-May-17.
 */
function round([number, fixed]) {
    [number, fixed] = [number, fixed].map(Number);

    let denominator = Math.pow(10,fixed);

    let res = Math.round(number * denominator) / denominator;
    console.log(res);
}
round([10.5, 3]);