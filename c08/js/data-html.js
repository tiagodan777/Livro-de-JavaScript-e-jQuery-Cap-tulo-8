var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status === 200) {
        window.document.querySelector('#content').innerHTML = xhr.responseText;
    }
};

xhr.open('GET', 'data/data.html', true);
xhr.send(null);