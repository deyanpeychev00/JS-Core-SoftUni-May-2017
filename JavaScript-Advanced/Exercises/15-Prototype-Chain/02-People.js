/**
 * Created by Deyan Peychev on 14-Jul-17.
 */
function people() {
    class Employee{
        constructor(name, age){
            if(new.target === Employee){
                throw new Error('This class cannot be instantiated directly!');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = []
        }


        set _salary(value) {
            this.salary = value;
        }

        work(){
            let task = this.tasks.shift();
            console.log(task);
            this.tasks.push(task);
        }

        collectSalary(){
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(this.name + ' is working on a simple task.');
        }
    }
    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(this.name + ' is working on a complicated task.');
            this.tasks.push(this.name + ' is taking time off work.');
            this.tasks.push(this.name + ' is supervising junior workers.');
        }
    }
    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(this.name + ' scheduled a meeting.');
            this.tasks.push(this. name + ' is preparing a quarterly report.');
            this.dividend = 0;
        }

        set _dividend(value) {
            this.dividend = value;
        }

        collectSalary(){
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

let result = people();

let junior = new result.Junior('Ivan', 20);
let senior = new result.Senior('Pesho',30);
let manager = new result.Manager('Gosho', 40);

console.log(junior.salary = 2);
console.log(junior);
console.log(senior);
console.log(manager);