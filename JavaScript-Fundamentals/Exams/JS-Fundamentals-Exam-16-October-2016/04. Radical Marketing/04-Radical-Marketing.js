/**
 * Created by Deyan Peychev on 16-Jun-17.
 */
function radicalMarketing(input) {
    let peopleWithSubscribers = new Map();
    let subscriptions = new Map();
    for (let dataRow of input) {
        if(dataRow.indexOf('-') === -1){
            if(!peopleWithSubscribers.has(dataRow)){
                peopleWithSubscribers.set(dataRow, new Set);
                subscriptions.set(dataRow, new Set);
            }
        }else{
            [person, subscriber] = dataRow.split('-');
            let subscribers;
            if(peopleWithSubscribers.has(subscriber)
                && [...peopleWithSubscribers.keys()].indexOf(person) !== -1
                && person!==subscriber){

                subscribers = peopleWithSubscribers.get(subscriber);
                peopleWithSubscribers.set(subscriber, subscribers.add(person));
            }
            if(subscriptions.has(person)
                && [...subscriptions.keys()].indexOf(subscriber) !== -1
                && person!==subscriber){

                subscribers = subscriptions.get(person);
                subscriptions.set(person, subscribers.add(subscriber));
            }
        }
    }
    let stats = [...peopleWithSubscribers].sort((a,b) => {
        let result = [...a[1]].length < [...b[1]].length;
        if(result!==0){
          return result;
        }else{
            result = [...subscriptions.get(a[0])].length  -  [...subscriptions.get(b[0])].length;
            return result;
        }
    })[0];

    [person, subscribers] = stats;
    console.log(person);
    for (let i = 0; i < [...subscribers].length; i++) {
        console.log(`${i+1}. ${[...subscribers][i]}`);
    }
}
radicalMarketing([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J',
]);