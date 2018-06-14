const express = require('express')
const axios = require('axios')

const router = express.Router()

router.route('/').get(function(request, response) {
    response.send('Hello World')
})

router.route('/news').get(function(request, response) {
    const news = [{'Title':1}]
    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=> response.send(HttpResponse.data))
})

router.route('/news/:id').get(function(request, response) {
    var param = request.params
    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=> response.send(HttpResponse.data.articles[param.id]))
    console.log(param.id)
})

module.exports = router
