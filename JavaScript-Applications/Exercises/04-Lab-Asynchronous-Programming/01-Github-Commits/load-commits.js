/**
 * Created by Deyan Peychev on 31-Jul-17.
 */
function loadCommits() {
    $('#commits').empty();
    let url = `https://api.github.com/repos/${$('#username').val()}/${$('#repo').val()}/commits`;

    $.get(url)
        .then((commits) => {
            let ul = $('#commits');

            for (let currentCommit of commits) {
                ul.append($(`<li>${currentCommit.commit.author.name}: ${currentCommit.commit.message}</li>`))
            }
        })
        .catch((err) => {
            $('#commits').append($(`<li>Error: ${err.status} (${err.statusText})</li>`))
        });
}