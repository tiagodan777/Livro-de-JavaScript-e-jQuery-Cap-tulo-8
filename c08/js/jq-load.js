$('nav a').on('click', function(e) {
    e.preventDefault();

    var url = this.href;

    $('#container').remove();
    $('#content').load(url + ' #content').hide().fadeIn('slow');

    $('nav a.current').removeClass('current');
    $(this).addClass('current');
});