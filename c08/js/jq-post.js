$('#register').on('submit', function(e) {
    e.preventDefault();

    var details = $('#register').serialize();

    alert(details);

    $.post('register.php', details, function(data) {
        $('#register').html(data);
    });
});