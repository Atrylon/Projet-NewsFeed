import {messages} from './messages'
import axios from 'axios'
import {donnees} from './getNews'

console.log('App.js loaded')

/*
var articles = ''
for (var i = 0; i< messages.length; i++){
    articles += `Message n° ${i} <br />
    author : ${messages[i].author} <br />
     message : ${messages[i].message} 
    <br /><br />`
}
document.getElementById("message").innerHTML=articles
*/

axios.get('https://newsapi.org/v2/top-headlines?' +
    'sources=reddit-r-all&' +
    'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
    .then((HttpResponse)=>{
            for (var i = 0; i < HttpResponse.data.totalResults; i++){
                var titre=`${HttpResponse.data.articles[i].title}`
                var auteur = `${HttpResponse.data.articles[i].author}`
                var description = `${HttpResponse.data.articles[i].description}`
                var url = `${HttpResponse.data.articles[i].url}`
                var urlImage = `${HttpResponse.data.articles[i].urlToImage}`
                var datePublication = `${HttpResponse.data.articles[i].publishedAt}`

                document.getElementById("row").innerHTML+=
`
<div class="col-12 col-lg-4" >
    <div class="article" id="redditArticle${i}">
        <div class="row">
            <div class="col-12 titre">
                <h3 class='text-center'>${titre}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 author">
                Posté par ${auteur}
            </div>
        </div>
        <div class="row">
            <div class="col-12 description">
                ${description}
            </div>
        </div>
        <div class="row">
            <div class="col-12 image">
                <img src="${urlImage}" class="img-fluid">
            </div>
            <div>
                <button type="button" class="btn btn-primary" href="${url}">Voir plus</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 published">
                Publié il y a - ${datePublication}
            </div>
        </div>
    </div>                    
</div>

                    
                    
                    
                    
                    
`
            }

        }
    )



/*
 document.getElementById("redditArt").innerHTML=`${HttpResponse.data.articles[1].author} ${HttpResponse.data.articles[1].title}`
for (var j = 0; j< redditArticle.length ; j++){
    console.log('coucou')
    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=> document.getElementById("redditArt").innerHTML=HttpResponse.data.articles[j])

}
*/
