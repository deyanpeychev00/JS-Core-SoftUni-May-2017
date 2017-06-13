/**
 * Created by Deyan Peychev on 13-Jun-17.
 */
function formatHelper([input]) { // single string parameter
    function obligatoryFormat(text) {
        return text.replace(/\s*([.,!?:;])\s*/g, ch => {
            ch = ch.trim();
            return `${ch} `;
        });
    }
    function fobiddenFormat(text) {
        return text.replace(/\s*([.,!?:;])/g, ch => {
            ch = ch.trim();
            return `${ch}`;
        });
    }
    function dotNumberFormat(text) {
        return text.replace(/\.\s*\d/g, ch => {
            return `${ch[0]}${ch[ch.length-1]}`;
        });
    }
    function quotesFormat(text) {
        return text.replace(/\".*?\"/g, ch => {

            return ch.replace(/\s*\"\s*/g, e=> e.trim());
            // return `${ch[0]}${ch[ch.length-1]}`;
        });
    }
    let result = obligatoryFormat(input);
    result = fobiddenFormat(result);
    result = dotNumberFormat(result);
    result = quotesFormat(result);
    console.log(result);
}
// formatHelper(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 . ']);
// formatHelper(['. . . . . !']);
// formatHelper(['Make,sure to give:proper spacing where is needed... !']);