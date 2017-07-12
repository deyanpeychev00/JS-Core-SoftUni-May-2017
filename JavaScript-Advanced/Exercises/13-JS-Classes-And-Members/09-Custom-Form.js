/**
 * Created by Deyan Peychev on 12-Jul-17.
 */
let result = (function() {

    class Textbox {
        constructor(selector, regex){
            this._elements = $(selector);
            this._value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this.onInput();
        }

        onInput(){
            this.elements.on('input', (event) => {
                let text = $(event.target).val();
                this.value = text;
            });
        }

        get elements(){
            return this._elements;
        }

        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
            for (let element of this.elements) {
                $(element).val(value);
            }
        }

        isValid(){
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor(){
            this._element = $('<div>').addClass('form');
            this.textboxes = arguments;
        }

        get textboxes() {
            return this._textboxes;
        }
        set textboxes(args) {
            for (let arg of args) {
                if(!arg instanceof Textbox){
                    throw new Error('The given parameter is not a textbox!');
                }
            }

            this._textboxes = args;

            for (let textbox of this._textboxes) {
                for (let el of textbox._elements) {
                    this._element.append($(el));
                }
            }
        }

        submit(){
            let allValid = true;
            for (let textbox of this._textboxes) {
                if(textbox.isValid()){
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid green');
                    }
                }else{
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid red');
                    }
                    allValid = false;
                }
            }

            return allValid;
        }

        attach(selector){
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");