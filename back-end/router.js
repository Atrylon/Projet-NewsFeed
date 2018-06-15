const express = require('express')
const axios = require('axios')
var WebSocket = require('ws')

const router = express.Router()
const w = new WebSocket('ws://localhost:8888')

function envoyerMessage(message){
    w.send(message);
}

router.route('/').get(function(request, response) {
     axios.get('https://newsapi.org/v2/top-headlines?' +
              'sources=reddit-r-all&' +
              'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
              .then((HttpResponse)=>{ var donnees = HttpResponse.data; w.send(JSON.stringify(donnees))})

    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=>{ var news = HttpResponse.data; response.send(news)} )
})

router.route('/news').get(function(request, response) {
    const news = [{'Title':1}]
    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=> response.send(HttpResponse.data))
})

module.exports = router
