/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
function createObj() {
    let obj = {
        extend: function (template) {
            for (let property in template) {
                if(template.hasOwnProperty(property)){
                    let value = template[property];
                    if(typeof value === "function"){
                        obj.__proto__[property] = value;
                    }else{
                        obj[property] = value;
                    }
                }
            }
        }
    };

    return obj;
}

let obj = createObj();
let templateObj = {
    extensionMethod: function () {
        console.log('func test');
    },
    extensionProperty: 'prop test'
};

obj.extend(templateObj);
console.log(obj);
console.log(obj.__proto__);