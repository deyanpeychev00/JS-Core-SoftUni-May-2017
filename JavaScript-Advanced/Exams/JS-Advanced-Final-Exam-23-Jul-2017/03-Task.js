/**
 * Created by Deyan Peychev on 23-Jul-17.
 */
class Task {
    constructor(title, deadline){
        if(Date.now() <= deadline.getTime()){
            this.title = title;
            this.deadline = deadline;
            this.status = 'Open';
            this.icon = '\u2731';
            this._isOverdue = true;
        }else{
            throw new Error('invalid content!');
        }
    }

    get isOverdue() {
       if(this.deadline < Date.now()){
           this.isOverdue = true;
       }

       return this._isOverdue;
    }

    set isOverdue(value) {
        if(this.status === 'Complete'){
            this._isOverdue = false;
        }else{
            this._isOverdue = value;
        }
    }

    set _status(status) {
        if(!this.isOverdue){
            this.status = status;
        }else{
            this.status = 'Overdue';
        }
    }
    set _deadline(value) {
        if(value.getTime() < Date.now()){
            throw new Error('invalid deadline set');
        }

        this.deadline = value;
    }
    get position(){
        if(this.deadline.getTime() < Date.now() && this.status !== 'Complete'){
            this._isOverdue = true;
            this.status = 'Overdue';
        }else{
            this._isOverdue = false;
        }

        if(this.status === 'Overdue'){
            return 4;
        }else if(this.status === 'In Progress'){
            return 3;
        }else if(this.status === 'Open'){
            return 2;
        }else if(this.status === 'Complete'){
            return 0;
        }
    }

    static comparator(a,b) {

        if(a.position > b.position){
            return -1;
        }else if(b.position > a.position){
            return 1;
        }else{
            if(a.deadline.getTime() > b.deadline.getTime()){
                return 1;
            }else if(b.deadline.getTime() > a.deadline.getTime()){
                return -1;
            }else{
                return 0;
            }
        }
    }

    toString(){

        let statusIcons = {
            'Open': "\u2731",
            'In Progress': "\u219D",
            'Complete': "\u2714",
            'Overdue': "\u26A0"
        };

        this.icon = statusIcons[this.status];

        if(this.status === 'Overdue'){
            return `[${this.icon}] ${this.title} (overdue)`;
        }else if(this.status === 'Complete'){
            return `[${this.icon}] ${this.title}`;
        }else{
            return `[${this.icon}] ${this.title} (deadline: ${this.deadline})`;
        }
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);

let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);

console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);

// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let task6 = new Task('Task 6', new Date(2020, '4', '20'));
let task7 = new Task('Task 7', date1);
task7.status = 'In Progress';
let tasks = [task1, task2, task3, task4, task5, task6, task7];

console.log();

setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
// let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
//  task1.deadline = new Date(2005, '4', '20');
