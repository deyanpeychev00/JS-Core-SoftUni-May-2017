function attachEvents(){

    //attach event listeners to buttons
    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPost);

    // requests elements
    const baseURL = 'https://baas.kinvey.com/appdata/kid_rkrqLWCI-/';
    const username = 'peter';
    const password = 'p';

    // DOM elements
    const select = $('#posts');
    const postComments = $('#post-comments');
    const postTitle = $('#post-title');
    const postBody = $('#post-body');

    function loadPosts() {
        $.ajax({
            url: baseURL+'posts',
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        })
            .then((data) => {
                for (let obj of data) {
                    select.append($(`<option value="${obj._id}">${obj.title}</option>`))
                }
            })
            .catch((reason) => console.warn(reason));
    }

    function viewPost() {
        let selectedPost = $('#posts option:selected');
        let postID = $(selectedPost).val();

        // make post request for title and body
        $.ajax({
            url: `${baseURL}posts/${postID}`,
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        })
            .then((post) => {
                postTitle.empty();
                postBody.empty();
                postTitle.text(post.title);
                postBody.text(post.body);
            })
            .catch((reason) => console.warn(reason));

        // make comments request for post's comments
        $.ajax({
            url: `${baseURL}comments/?query={"post_id":"${postID}"}`,
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        })
            .then((comments) => {
                postComments.empty();
                for (let comment of comments) {
                    postComments.append($(`<li>${comment.text}</li>`))
                }
            })
            .catch((err) => console.warn(err));
    }
}