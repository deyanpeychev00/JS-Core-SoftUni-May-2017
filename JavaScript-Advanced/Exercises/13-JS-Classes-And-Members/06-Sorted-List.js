/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
function returnList() {
    return class List{
        constructor(){
            this.list = [];
            this.size = 0;
        }

        sort() {
            this.list = this.list.sort((a,b) => a-b);
        };
        add(element) {
            this.list.push(element);
            this.size++;
            this.sort();
        };
        remove(index) {
            if(index < this.list.length && index >= 0){
                this.list.splice(index, 1);
                this.size--;
            }
        };
        get(index) {
            if(index < this.list.length && index >= 0){
                return this.list[index];
            }
        }

    }
}