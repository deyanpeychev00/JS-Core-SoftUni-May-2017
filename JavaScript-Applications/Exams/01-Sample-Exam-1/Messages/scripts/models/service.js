let appService = (() => {

    let commonPartials = {
        header: '././templates/views/main/header.hbs',
        footer: '././templates/views/main/footer.hbs',
    };

    function getAllMessages() {
        return requester.get('appdata', `messages?query={"recipient_username":"${localStorage.getItem('username')}"}`);
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function getAllUsers() {
        return requester.get('user', '');
    }

    function sendMessage(data) {
        return requester.post('appdata', 'messages', data);
    }

    function requestArchive() {
        return requester.get('appdata', `messages?query={"sender_username":"${localStorage.getItem('username')}"}`);
    }

    function deleteMessage(id) {
        return requester.remove('appdata', 'messages/' + id);
    }

    return {
        commonPartials,
        getAllMessages,
        formatDate,
        getAllUsers,
        sendMessage,
        requestArchive,
        deleteMessage
    }
})();