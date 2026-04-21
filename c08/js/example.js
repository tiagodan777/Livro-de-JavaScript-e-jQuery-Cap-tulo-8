$(function() {
    var times = $.getJSON('data/example.json');

    $('#event').on('click', 'a', function(e) {
        e.preventDefault();

        $('#event a.current').removeClass('current');
        $(this).addClass('current');

        var id = $(this).attr('id').toUpperCase();

        times.done(function(data) {
            $('#details > div').remove();

            var msg = '<ul>';
            $.each(data[id], function(key, value) {
                var seccao = value.title.replaceAll(' ', '-');
                msg += '<li><span class="time">' + value.time + '</span>' + '<a href="descriptions.html#' + seccao + '">' + value.title + '</a>' + '</li>';
            })
            msg += '</ul>';
            $('#sessions').html(msg);
        })
        .fail(function() {
            $('#sessions').text('Não foi possível carregar os dados');
        })
    });

    $('#sessions').on('click', 'a', function(e) {
        e.preventDefault();

        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');

        var url = (this.href).split('#')[1];

        $('#details').load('descriptions.html ' + '#' + url);
    });
});
