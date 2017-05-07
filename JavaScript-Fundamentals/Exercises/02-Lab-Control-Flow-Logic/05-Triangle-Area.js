/**
 * Created by Deyan Peychev on 08-May-17.
 */
function triangleArea([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    let halfPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(halfPerimeter*(halfPerimeter-a)*(halfPerimeter-b)*(halfPerimeter-c));
    console.log(area);
}
triangleArea(['2', '3.5', '4']);