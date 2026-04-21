$('#selector img').on('click', function(e) {
    e.preventDefault();

    var queryString = 'vote=' + $(this).attr('id');

    $.get('votes.php', queryString, function(data) {
        $('#selector').html(data);
    })
})