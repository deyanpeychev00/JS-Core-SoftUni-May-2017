/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
let extensible = (function () {
    let id = 0;

    return class Extensible{
        constructor(){
            this.id = id++;
        }

        extend(template) {
            for (let property in template) {
                if(template.hasOwnProperty(property)){
                    let value = template[property];
                    if(typeof value === "function"){
                        Extensible.prototype[property] = value;
                    }else{
                        this[property] = value;
                    }
                }
            }
        }
    }

})();

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();
obj3.extend(template = {
    extensionMethod: function(){
        console.log('Hello');
    },
    extensionProperty: 'someString'
});

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
console.log(obj3);
