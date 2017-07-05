/**
 * Created by Deyan Peychev on 05-Jul-17.
 */
function orderRectangles(array){
    let objects = [];

    function createRectangle(width, height) {
        return {
            width: width,
            height: height,
            area: function () {
              return this.width * this.height;
            },
            compareTo: function (anotherRect) {
                let result = anotherRect.area() - this.area();
                if (result !== 0){
                    return result;
                }else {
                    return anotherRect.width - this.width;
                }
            }
        };
    }

    for (let [width, height] of array) {
        objects.push(createRectangle(width, height));
    }

    return objects.sort((a,b) => a.compareTo(b));
}
console.log(orderRectangles([[10, 5], [5, 12]]));
console.log(orderRectangles([[10,5], [3,20], [5,12]]));