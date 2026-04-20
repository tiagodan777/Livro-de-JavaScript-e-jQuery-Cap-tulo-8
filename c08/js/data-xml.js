var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status === 200) {
        var response = xhr.responseXML;
        var events = response.getElementsByTagName('event');

        for (var i = 0; i < events.length; i++) {
            var container = window.document.createElement('div');
            container.className = 'event';

            var image = window.document.createElement('img');
            image.setAttribute('src', getNodeValue(events[i], 'map'));
            image.setAttribute('alt', getNodeValue(events[i], 'location'));
            container.appendChild(image);

            var location = window.document.createElement('p');
            var city = window.document.createElement('b');
            var newLine = window.document.createElement('br');
            
            city.appendChild(window.document.createTextNode(getNodeValue(events[i], 'location')));
            location.appendChild(newLine);
            location.insertBefore(city, newLine);
            location.appendChild(window.document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);

            window.document.getElementById('content')?.appendChild(container);
        }   
    }

    function getNodeValue(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }
};

xhr.open('GET', 'data/data.xml', true);
xhr.send(null);