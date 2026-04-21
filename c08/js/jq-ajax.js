$('nav a').on('click', function(e) {
    e.preventDefault();

    var url = this.href;

    var $content = $('#content');
    var $container = $('#container');

    $container.remove();

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $.ajax({
        type: "GET",
        url: url,
        timeout: 2000,
        beforeSend: function() {
            $content.append('<div id="load">Loading...</div>');
        },
        complete: function() {
            $content.remove('#load');
        },
        success: function(data) {
            $content.html($(data).find('#container')).hide().fadeIn(400);
        },
        error: function() {
            $content.html('<div id="container">Por favor tenta outra vez mais tarde</div>');
        }
    })
})