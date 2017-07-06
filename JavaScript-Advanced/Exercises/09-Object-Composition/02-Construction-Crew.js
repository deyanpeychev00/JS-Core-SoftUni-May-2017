/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
function solve(object) {

    let kg = object.weight;
    let experience = object.experience;
    let handsShaking = object.handsShaking;

    if(handsShaking){
        object.bloodAlcoholLevel += kg*experience/10;
        object.handsShaking = false;
    }

    return object;
}

console.log(solve({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));

console.log(solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
));