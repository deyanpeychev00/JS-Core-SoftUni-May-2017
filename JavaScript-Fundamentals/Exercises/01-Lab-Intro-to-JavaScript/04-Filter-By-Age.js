/**
 * Created by Deyan Peychev on 06-May-17.
 */
function filterByAge(ageLimit, firstName, firstAge, secondName, secondAge){
    let firstPerson = {
        name: firstName,
        age: Number(firstAge)
    };
    let secondPerson = {
        name: secondName,
        age: Number(secondAge)
    };
    if (firstPerson.age >= Number(ageLimit)){
        console.log(firstPerson);
    }
    if (secondPerson.age >= Number(ageLimit)){
        console.log(secondPerson);
    }

}
filterByAge(['12', 'Ivan', '15', 'Asen', '9']);