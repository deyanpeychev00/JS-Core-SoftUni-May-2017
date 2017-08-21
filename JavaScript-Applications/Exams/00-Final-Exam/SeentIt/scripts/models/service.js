let appService = (() => {

    let commonPartials = {
        header: '././templates/main/header.hbs',
        footer: '././templates/main/footer.hbs',
    };

    function getAllPosts(){
        return requester.get('appdata', 'posts?query={}&sort={"_kmd.ect": -1}')
    }
    function getMyPosts(){
        return requester.get('appdata', `posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`);
    }

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    function postLink(req) {
        return requester.post('appdata', 'posts', req);
    }

    function getSpecifiedPost(id) {
        return requester.get('appdata', 'posts/'+id);
    }

    function getPostComments(id) {
        return requester.get('appdata', `comments?query={"postId":"${id}"}&sort={"_kmd.ect": -1}`)
    }

    function postComment(data) {
        return requester.post('appdata', 'comments', data);
    }

    function deleteComment(id) {
       return requester.remove('appdata', 'comments/'+id);
    }

    function deletePost(id) {
        return requester.remove('appdata', 'posts/'+id);
    }

    function updatePost(data, postId) {
        return requester.update('appdata', 'posts/'+postId, data);
    }
    return {
        commonPartials,
        getAllPosts,
        calcTime,
        postLink,
        getSpecifiedPost,
        getPostComments,
        postComment,
        deleteComment,
        deletePost,
        updatePost,
        getMyPosts
    }
})();