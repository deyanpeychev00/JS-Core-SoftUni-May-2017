/**
 * Created by Deyan Peychev on 27-Jul-17.
 */
function loadTitle() {
    let title = $('<div>').load('text.html');
    $('#text').append(title);
}