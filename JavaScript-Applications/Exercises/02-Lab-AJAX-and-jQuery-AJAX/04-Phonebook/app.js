/**
 * Created by Deyan Peychev on 27-Jul-17.
 */
$(() => {

    const list = $('#list');
    const baseURL = 'https://phonebook-e562b.firebaseio.com/phonebook';
    const addButton = $('.addBtn');

    addButton.on('click', create);

    loadContacts();

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
            let html = $(`<li><span id="contact"><b>${res[contact].name}</b>: ${res[contact].phone}</span></li><br>`);
            html.append($('<button class="deleteBtn">X</button>').click(() => deleteContact(contact)));
            list.append(html);
        }
    }

    function deleteContact(contact) {
        let req = {
            url: `${baseURL}/${contact}.json`,
            method: 'DELETE',
            success: () => { notify('Successfully deleted contact', 'info'); loadContacts()},
            err: displayError
        };

        $.ajax(req);
    }

    function create() {

        let name = $('#crtName').val();
        let phone = $('#crtPhone').val();

        if(name.length === 0){
            notify('Invalid name', 'error');
            return;
        }
        if(phone.length === 0){
            notify('Invalid phone', 'error');
            return;
        }

        addButton.prop('disabled', true);

        let contact = {
            name, phone
        };

        let req = {
            url: baseURL+'.json',
            contentType: 'application/json',
            method: 'POST',
            data: JSON.stringify(contact),
            success: () => {
                $('#crtName').val('');
                $('#crtPhone').val('');
                notify('Successfully created new contact', 'success');
                loadContacts();
            },
            error: displayError,
            complete: () => addButton.prop('disabled', false)
        };

        $.ajax(req);
    }

    function displayError(message) {
        notify(message.statusText)
    }

    function notify(message, type) {
        let toast = document.getElementById('notification');
        toast.textContent = `${message}`;
        toast.style.display = 'block';

        switch (type){
            case 'error': {
                toast.style.background = '#ef5350';
                break;
            }
            case 'info': {
                toast.style.background = '#82b1ff';
                break;
            }
            case 'success': {
                toast.style.background = '#81c784';
                break;
            }
        }

        setTimeout(() => toast.style.display = 'none', 2000);
    }
});