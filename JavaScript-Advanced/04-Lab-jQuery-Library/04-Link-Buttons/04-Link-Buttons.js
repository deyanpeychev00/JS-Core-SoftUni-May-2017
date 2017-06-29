function attachEvents() {
    $('a.button').click(modify);

    function modify() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}
