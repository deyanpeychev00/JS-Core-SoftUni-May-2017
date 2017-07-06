/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
function carFactory(car) {
    let newObj = {model: car.model};
    let smallEngine = {power: 90, volume: 1800};
    let normalEngine = {power: 120, volume:2400};
    let monsterEngine = {power: 200, volume: 3500};
    let hatchback = {type: 'hatchback', color: car.color};
    let coupe = {type: 'coupe', color: car.color};

    car.wheelsize%2 ===0 ? car.wheelsize-- : car.wheelsize;

    if(car.power <=90){
        newObj.engine = smallEngine;
    }else if(car.power <=120){
        newObj.engine = normalEngine;
    }else{
        newObj.engine = monsterEngine;
    }
    switch (car.carriage){
        case 'hatchback':{
            newObj.carriage = hatchback;
            break;
        }
        case 'coupe':{
            newObj.carriage = coupe;
        }
    }
    newObj.wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];
    return newObj;
}
console.log(carFactory({model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));