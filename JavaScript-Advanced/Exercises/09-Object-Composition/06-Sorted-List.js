/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
function returnList() {
    return {
        list: [],
        size: 0,
        sort: function () {
          this.list = this.list.sort((a,b) => a-b);
        },
        add: function (element) {
            this.list.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if(index < this.list.length && index >= 0){
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if(index < this.list.length && index >= 0){
                return this.list[index];
            }
        }

    }
}
/*
    let sortedList = returnList();

    console.log(sortedList.size);
    console.log(`List: ${sortedList.list}`);
    console.log('--------------------------------');

    sortedList.add(2);
    sortedList.add(-1);
    sortedList.add(100);
    sortedList.add(54);

    console.log(sortedList.size);
    console.log(`List: ${sortedList.list}`);
    console.log('--------------------------------');
    sortedList.remove(2);
    console.log(`List: ${sortedList.list}`);
    console.log('--------------------------------');
    console.log(sortedList.get(2));
    console.log(`List: ${sortedList.list}`);
    console.log('--------------------------------');
    console.log(`Size: ${sortedList.size}`);
*/
