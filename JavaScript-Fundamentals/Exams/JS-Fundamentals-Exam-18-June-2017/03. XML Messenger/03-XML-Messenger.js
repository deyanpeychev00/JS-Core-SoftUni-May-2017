/**
 * Created by Deyan Peychev on 18-Jun-17.
 */
function solve(xml) {

    if(xml!==''){
        xml = xml.split('\n');
        let errStr = '';
        let html = `<article>\n`;
        if (xml.length === 1) {
            xml = xml[0];
            let regex = /(<message.*?>)(.*?)(<\/message>)(.*)/g;
            let matches = regex.exec(xml);
            // shit after the message tag:
            if(matches!==null){
                if (matches[4] !== '') {
                    errStr = 'Invalid message format';
                }// check for shit in the opening message tag:
                else {
                    let openingTag = matches[1];
                    // console.log(openingTag);
                    let toRegex = /to="([a-zA-Z0-9\s\.]+|[a-zA-Z0-9]+)"/g;
                    let toMatches = toRegex.exec(openingTag);
                    let fromRegex = /from="([a-zA-Z0-9\s\.]+|[a-zA-Z0-9]+)"/g;
                    let fromMatches = fromRegex.exec(openingTag);
                    if (fromMatches !== null) {
                        html += `  <div>From: <span class="sender">${fromMatches[1]}</span></div>\n`
                    } else {
                        errStr = 'Missing attributes';
                    }
                    if (toMatches !== null) {
                        html += `  <div>To: <span class="recipient">${toMatches[1]}</span></div>\n`
                    } else {
                        errStr = 'Missing attributes';
                    }
                    let openingTagContent = openingTag.substr(8);
                    openingTagContent = openingTagContent.substring(0, openingTagContent.length - 1);
                    let openingTagContentRegex = /\s*[a-z]+="([a-zA-Z0-9\s\.]+|[a-zA-Z0-9]+)"\s*/g;
                    let content = openingTagContent.replace(openingTagContentRegex, '').trim();
                    if (content !== '') {
                        errStr = `Invalid message format`;
                    }
                    let message = matches[2];
                    if (message!==''){
                        html += `  <div>\n`;
                        html += `    <p>${message.trim()}</p>\n`;
                        html += `  </div>\n`;
                    }else{
                        errStr = `Missing attributes`;
                    }
                }
            }else{
                errStr = 'Invalid message format';
            }
        } else {
            xml = xml.join('-joinsometags-');
            // console.log(xml);
            let regex = /(<message.*?>)(.*?)(<\/message>)(.*)/g;
            let matches = regex.exec(xml);
            // shit after the message tag:
            if(matches!==null){
                if (matches[4] !== '') {
                    errStr = 'Invalid message format';
                }// check for shit in the opening message tag:
                else {
                    let openingTag = matches[1];
                    // console.log(openingTag);
                    let toRegex = /to="([a-zA-Z0-9\s\.]+|[a-zA-Z0-9]+)"/g;
                    let toMatches = toRegex.exec(openingTag);
                    let fromRegex = /from="([a-zA-Z0-9\s\.]+|[a-zA-Z0-9]+)"/g;
                    let fromMatches = fromRegex.exec(openingTag);
                    if (fromMatches !== null) {
                        html += `  <div>From: <span class="sender">${fromMatches[1]}</span></div>\n`
                    } else {
                        errStr = 'Missing attributes';
                    }
                    if (toMatches !== null) {
                        html += `  <div>To: <span class="recipient">${toMatches[1]}</span></div>\n`
                    } else {
                        errStr = 'Missing attributes';
                    }
                    let openingTagContent = openingTag.substr(8);
                    openingTagContent = openingTagContent.substring(0, openingTagContent.length - 1);
                    let openingTagContentRegex = /\s*[a-z]+="([a-zA-Z0-9\s\.]+|[a-zA-Z0-9]+)"\s*/g;
                    let content = openingTagContent.replace(openingTagContentRegex, '').trim();
                    if (content !== '') {
                        errStr = `Invalid message format`;
                    }
                    let messages = matches[2].split('-joinsometags-');
                    html += `  <div>\n`;
                    if(messages.length!==0){
                        for (let message of messages.filter(e=>e!=='')) {
                            html += `    <p>${message.trim()}</p>\n`;
                        }
                    }else{
                        errStr = `Missing attributes`;
                    }
                    html += `  </div>\n`
                }
            }else{
                errStr = `Invalid message format`;
            }
        }
        html += `</article>`;
        if (errStr !== '') {
            console.log(errStr);
        } else {
            console.log(html);
        }
    }else{
        console.log('Invalid message format');
    }
}
 solve(`<message to="Bob" from="Alice" timestamp="1497254114"></message>`);
//  solve(`<!--<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old Let's go out for a beer</message><meta version="2.0"/>-->`);
// solve(`<message from="Alice" timestamp="1497254112">This is a test</message>`);
// solve(`<message to="Matilda" from="Charlie"><media type="image" src="slyfox.jpg"/></message><meta version="2.0"/>`);
// solve(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`);
// solve(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message>`);
// solve(`<message from="MasterBlaster" to="TheAnimal" color="#FF340B">FWD: Funny stuff</message>`);
// solve('invalid');
// solve('<message to="Bob" from="Alice"></message>');
solve('<message from="Alice"></message>');