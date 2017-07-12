/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
class CheckingAccount {
    constructor(clientID, email, firstName, lastName){
        this.clientID = clientID;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    get clientID() {
        return this._clientID;
    }
    set clientID(value) {
        let clientIDRegex = /^\d{6}$/g;
        if(!clientIDRegex.test(value)){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientID = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        let emailRegex = /^[A-Za-z\d]+\@[A-Za-z\.]+$/g;
        if(!emailRegex.test(value)){
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if(value.length<3 || value.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if(!/^[a-zA-Z]{3,20}$/g.test(value)){
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        if(value.length<3 || value.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if(!/^[a-zA-Z]{3,20}$/g.test(value)){
            throw new TypeError('Last name must contain only Latin characters')
        }
        this._lastName = value;
    }
}

let acc4 = new CheckingAccount('423415', 'petkan@another.co.uk', 'Petkan', 'Draganov');