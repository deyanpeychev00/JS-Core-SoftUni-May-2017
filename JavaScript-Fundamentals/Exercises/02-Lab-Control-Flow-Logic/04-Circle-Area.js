/**
 * Created by Deyan Peychev on 08-May-17.
 */
function circleArea([radius]) {
    let area = Math.PI * Number(radius) * Number(radius);
    console.log(area);
    console.log(area.toFixed(2));
}
circleArea(['5']);