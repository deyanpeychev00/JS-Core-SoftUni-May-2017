/**
 * Created by Deyan Peychev on 28-Jul-17.
 */
function attachEvents() {
    let baseURL = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let list = $('#phonebook');

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);

    function loadContacts() {
        let req = {
            url: baseURL+'.json',
            success: displayContacts,
        };

        $.ajax(req);
    }

    function displayContacts(res) {
        list.empty();
        for (let contact in res) {
            let html = $(`<li>${res[contact].person}: ${res[contact].phone}</li>`);
            html.append($('<button>[Delete]</button>').click(() => deleteContact(contact)));
            list.append(html);
        }
    }

    function deleteContact(contact) {
        let req = {
            url: `${baseURL}/${contact}.json`,
            method: 'DELETE',
            success: loadContacts,
        };

        $.ajax(req);
    }

    function createContact() {

        let contact = {
            person: $('#person').val(),
            phone: $('#phone').val()
        };

        let req = {
            url: baseURL+'.json',
            contentType: 'application/json',
            method: 'POST',
            data: JSON.stringify(contact),
            success: () => {
                $('#person').val('');
                $('#phone').val('');
                loadContacts();
            },
        };

        $.ajax(req);
    }

}