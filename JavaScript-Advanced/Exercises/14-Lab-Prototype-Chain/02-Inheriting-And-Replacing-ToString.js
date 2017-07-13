/**
 * Created by Deyan Peychev on 13-Jul-17.
 */
function returnClasses(){
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
        toString(){
            let base = super.toString().slice(0,-1);
            return base + `, subject: ${this.subject})`;
        }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            let base = super.toString().slice(0,-1);
            return base + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}
let solve = returnClasses();

let Person = solve.Person;
let Teacher = solve.Teacher;
let Student = solve.Student;

// console.log(Person);
// console.log(Teacher);
// console.log(Student);


let person = new Person('Ivan', 'ivan@ivan.iv');
let teacher = new Teacher('Maria', 'maria@mim.m', "Maths");
let student = new Student('Mitko', 'mitko@mit.m', 'JS');

console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());