/**
 * Created by Deyan Peychev on 13-Jul-17.
 */
function returnClasses() {
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}