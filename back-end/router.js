const express = require('express')
const axios = require('axios')

const router = express.Router()

router.route('/').get(function(request, response) {
    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=> response.send(HttpResponse.data))
})

module.exports = router
