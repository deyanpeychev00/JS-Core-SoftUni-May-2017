/*
*
 * Created by Deyan Peychev on 16-Jul-17.
*/
class TrainingCourse{
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date){
        for (let topic of this.topics) {
            if(topic.date.toString().substring(0,15) === date.toString().substring(0,15)){
                throw new Error('No more than 1 topic on a single date!');
            }
        }
        this.topics.push({title: title, date:date});
        this.topics = this.topics.sort((a,b) => a.date > b.date);
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic(){
        return this.topics[this.topics.length-1];
    }

    toString(){
        if(this.topics.length > 0) {
            let base = `Course "${this.title}" by ${this.trainer}` + '\n';
            base+= this.topics.map(t => ` * ${t.title} - ${t.date}`).join('\n');
            return base;
        }else{
            return `Course "${this.title}" by ${this.trainer}\n`;
        }
    }
}

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov");
    php.addTopic("Strings", new Date(2017, 2, 16, 18, 0));
    php.addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0));
    php.addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
    php.addTopic("Test", new Date(2017, 3, 14, 19, 0));
console.log(php.toString());

