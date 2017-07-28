/**
 * Created by Deyan Peychev on 28-Jul-17.
 */
function solve() {
    let station = 'depot';

    function depart(){
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', false);

        let req = {
            url: `https://judgetests.firebaseio.com/schedule/${station}.json`,
            success: displayDepart,
            error: displayError
        };

        $.ajax(req);
    }

    function arrive() {
        $('#arrive').prop('disabled', true);
        $('#depart').prop('disabled', false);

        let req = {
            url: `https://judgetests.firebaseio.com/schedule/${station}.json`,
            success: displayArrive,
            error: displayError
        };

        $.ajax(req);
    }

    function displayDepart(res) {
        $('.info').text(`Next stop ${res.name}`);
    }

    function displayArrive(res) {
        $('.info').text(`Arriving at ${res.name}`);
        station=res.next;
    }

    function displayError(err) {
        $('.info').text(`Error`);
    }

    return {
        depart,
        arrive
    };
}
let result = solve();