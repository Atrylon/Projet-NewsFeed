import axios from 'axios'

var donnees = new XMLHttpRequest();
donnees.open("POST", '/server', true);
donnees.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

axios.get('https://newsapi.org/v2/top-headlines?' +
    'sources=reddit-r-all&' +
    'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
    .then((HttpResponse)=> donnees.send(HttpResponse.data))

export { donnees }