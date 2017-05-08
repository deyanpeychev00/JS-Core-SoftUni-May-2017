/**
 * Created by Deyan Peychev on 08-May-17.
 */
function assignProperties([propName1, prop1, propName2, prop2, propName3, prop3]) {

    let obj = {};
    obj[propName1] = prop1;
    obj[propName2] = prop2;
    obj[propName3] = prop3;

    console.log(obj);
}
assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);