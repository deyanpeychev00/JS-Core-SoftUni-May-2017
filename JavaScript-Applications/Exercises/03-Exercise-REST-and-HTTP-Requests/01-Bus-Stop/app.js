/**
 * Created by Deyan Peychev on 28-Jul-17.
 */
function getInfo() {
    let stopID = $('#stopId').val();
    let stopName = $('#stopName');
    let buses = $('#buses');

    let baseURL = `https://judgetests.firebaseio.com/businfo/${stopID}.json`;

    let req = {
        url: baseURL,
        success: displayInfo,
        error: displayError
    };

    $.ajax(req);

    function displayInfo(res) {
        stopName.text(res.name);
        for (let bus in res.buses) {
            buses.append(`<li>Bus ${bus} arrives in ${res.buses[bus]} minutes.</li>`);
        }
    }

    function displayError(err) {
        stopName.text('Error');
        buses.empty();
    }
}