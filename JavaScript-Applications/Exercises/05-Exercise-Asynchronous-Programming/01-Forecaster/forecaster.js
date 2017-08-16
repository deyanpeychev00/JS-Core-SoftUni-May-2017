/**
 * Created by Deyan Peychev on 02-Aug-17.
 */
function attachEvents() {
    // attach event listeners on button
    $('#submit').on('click', getWeather);

    // DOM elements
    let targetLocation = '';
    let matchedObj = {};
    let forecast = $('#forecast');
    let currentForecast = $('#current');
    let upcomingForecast = $('#upcoming');

    // symbols
    let symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    function request(baseUrl, successFunc) {
        let req = {
            url: baseUrl,
            success: successFunc,
            error: handleError
        };
        $.ajax(req);
    }

    function getWeather() {
        request('https://judgetests.firebaseio.com/locations.json', extractTargetCity);
    }

    function extractTargetCity(res) {

        // get target location from response
        targetLocation = $('#location').val().trim();
        matchedObj = {};

        for (let location in res) {
           if(res[location].name === targetLocation){
               matchedObj = res[location];
               break;
           }
        }
        // get location's current conditions
        if(matchedObj !== {}){
            request(`https://judgetests.firebaseio.com/forecast/today/${matchedObj.code}.json`, displayCurrentConditions);
        }
    }
    function displayCurrentConditions(res) {
        currentForecast
            .empty()
            .append($('<div class="label">Current conditions</div>'));
        // process current conditions and append to DOM
        let conditionSymbol = $(`<span class="condition symbol">${symbols[res.forecast.condition]}</span>`);
        let condition = $('<span>')
            .addClass('condition')
            .append($(`<span class="forecast-data">${res.name}</span>`))
            .append($(`<span class="forecast-data">${res.forecast.low}${symbols['Degrees']}/${res.forecast.high}${symbols['Degrees']}</span>`))
            .append($(`<span class="forecast-data">${res.forecast.condition}</span>`));
        currentForecast
            .append(conditionSymbol)
            .append(condition);

        // request upcoming forecast
        request(`https://judgetests.firebaseio.com/forecast/upcoming/${matchedObj.code}.json`, displayUpcomingForecast);
    }

    function displayUpcomingForecast(res) {
        upcomingForecast
            .empty()
            .append($('<div class="label">Three-day forecast</div>'));
        // append ucoming forecast
        for (let forecast of res.forecast) {
            let upcoming = $('<span>')
                .addClass('upcoming')
                .append($(`<span class="symbol">${symbols[forecast.condition]}</span>`))
                .append($(`<span class="forecast-data">${forecast.low}${symbols['Degrees']}/${forecast.high}${symbols['Degrees']}</span>`))
                .append($(`<span class="forecast-data">${forecast.condition}</span>`));

            upcomingForecast.append(upcoming);
        }

        // display whole forecast on the web page
        displayForecast();
    }

    function displayForecast() {
        forecast.css('display', '');
    }
    function handleError(err) {
        console.warn(err);
    }
}