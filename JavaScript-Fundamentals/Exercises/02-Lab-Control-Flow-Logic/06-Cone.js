/**
 * Created by Deyan Peychev on 08-May-17.
 */
function cone([radius, height]) {
    [radius, height] = [radius, height].map(Number);
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let area = Math.PI*radius*(radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));
    console.log("volume: " + volume);
    console.log("area: " + area);
}
cone(['3','5']);