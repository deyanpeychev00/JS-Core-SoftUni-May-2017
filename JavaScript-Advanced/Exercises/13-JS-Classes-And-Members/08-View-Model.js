
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

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
