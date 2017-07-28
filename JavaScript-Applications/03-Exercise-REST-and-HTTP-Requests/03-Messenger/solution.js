/**
 * Created by Deyan Peychev on 28-Jul-17.
 */
function attachEvents() {
    $('#submit').on('click', submit);
    $('#refresh').on('click', refresh);

    function submit() {
        let data = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };

        let req = {
            url: 'https://messenger-71f8c.firebaseio.com/messenger.json',
            method: 'POST',
            data: JSON.stringify(data),
            success: () => {
                $('#content').val('');
                refresh();
            },
        };

        $.ajax(req);
    }

    function refresh() {
        let req = {
            url: 'https://messenger-71f8c.firebaseio.com/messenger.json',
            success: refreshMessenger,
        };

        $.ajax(req);
    }

    function refreshMessenger(res) {
        let messages = [];
        for (let message in res) {
            messages.push(res[message]);
        }
        messages = messages.sort((a,b) => a.timestamp > b.timestamp)
            .map(m => `${m.author}: ${m.content}`).join('\n');

        $('#messages').text(messages);
    }
}