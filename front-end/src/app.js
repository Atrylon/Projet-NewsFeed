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

            document.getElementById("row").innerHTML+=`
                    <article id="redditArticle${i}" class="col-sm-6" style="border-style: solid; border-width: 1px;">
                       <h3 class='text-center'>${titre}</h3> <br>
                       <i> Posté par ${auteur} </i> <br>
                       ${description}<br>
                       <img src="${urlImage}" style="max-height: 300px; max-width=20%" >  <br>
                       <div style="position: absolute;bottom: 0;"><button type="button" class="btn btn-primary" href="${url}">Voir plus</button>  Publié il y a  ${datePublication} <br> </div>
                    </article>`
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
