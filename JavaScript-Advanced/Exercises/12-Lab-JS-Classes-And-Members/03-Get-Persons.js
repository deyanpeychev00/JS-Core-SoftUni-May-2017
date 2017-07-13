/**
 * Created by Deyan Peychev on 11-Jul-17.
 */
function getPersons(){
    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let output = [];
    output.push(new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'));
    output.push(new Person('SoftUni'));
    output.push(new Person('Stephan', 'Nikolov', 25));
    output.push(new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'));

    return output;
}


console.log(getPersons());