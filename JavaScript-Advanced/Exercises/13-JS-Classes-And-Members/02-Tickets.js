/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
function tickets(tickets, sortingCriteria){
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    function sort(a,b){
        switch (sortingCriteria){
            case 'price':{
                return a.price - b.price;
            }
            case 'destination':{
                return a.destination.localeCompare(b.destination)
            }
            case 'status':{
                return a.status.localeCompare(b.status)
            }
        }
    }
    let ticketsArr = [];

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        ticketsArr.push(new Ticket(destination, price, status));
    }
    ticketsArr.sort(sort);
    return ticketsArr
}
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));