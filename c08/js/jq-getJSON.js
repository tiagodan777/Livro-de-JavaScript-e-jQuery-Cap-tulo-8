$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
    $.getJSON('data/rates.json')
    .done( function(data) {
        var date = new Date();
        var hrs = date.getHours();
        var min = date.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }

        var msg = '<h2>Valores de Câmbio</h2><br>';
        $.each(data, function(key, value) {
            msg += '<div class="' + key + '">' + key + ': ' + value + '</div>';
        })
        msg += '<p>Última atualização: ' + hrs + ':' + min;
        $('#rates').html(msg);
    })
    .fail(function() {
        $('#rates').text('Não foi possível carregar as taxas');
    })
    .always( function() {
        var reload = '<a id="refresh" href="#"><img src="img/refresh.png" alt="refresh"></a>';
        $('#reload').html(reload);
        $('#refresh').on('click', function(e) {
            e.preventDefault();
            loadRates();
        })
    })
}

loadRates();