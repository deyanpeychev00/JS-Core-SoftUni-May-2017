/**
 * Created by Deyan Peychev on 27-Jul-17.
 */
function loadRepos() {
    let output = $('#repos');
    output.empty();
    $(`<div class="loading"><b>Loading...</b></div>`).appendTo(output);
    $('#btnLoad').prop('disabled', true);
    let url = `https://api.github.com/users/${$('#username').val()}/repos`;

    let request = {
        url,
        success: displayRepos,
        error: displayError,
        complete: () =>  $('#btnLoad').prop('disabled', false)
    };

    $.ajax(request);

    function displayError(err) {
        output.empty();
        let error = $(`<div class="error"><b>Error: User not found</b></div>`);
        output.append(error);

    }

    function displayRepos(repos) {
        output.empty();
        $(`<div class="success"><b>Successfully found user repos</b></div>`).appendTo(output);
        for (let repo of repos) {
            output.append($(`<li><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></li>`));
        }

    }

}