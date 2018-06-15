import axios from 'axios'

/*
import {messages} from './messages'
var articles = ''
for (var i = 0; i< messages.length; i++){
    articles += `Message n° ${i} <br />
    author : ${messages[i].author} <br />
     message : ${messages[i].message}
    <br /><br />`
}
document.getElementById("message").innerHTML=articles
*/

var param = location.search

if (param){
    param = param.substr(1, 1)
    axios.get('http://localhost:8080')
        .then((HttpResponse)=>{
                console.log(param)
                var titre=`${HttpResponse.data.articles[param].title}`
                var auteur = `${HttpResponse.data.articles[param].author}`
                var description = `${HttpResponse.data.articles[param].description}`
                var url = `${HttpResponse.data.articles[param].url}`
                var urlImage = `${HttpResponse.data.articles[param].urlToImage}`
                var datePublication = `${HttpResponse.data.articles[param].publishedAt}`

                if (auteur === 'null'){
                    auteur = 'Anonyme'
                }
                if (urlImage === 'null'){
                    urlImage = 'http://www.drahtphotography.com/wp-content/uploads/2016/04/Reddit-Logo-Smaller.png'
                }
                if (description === 'null'){
                    description = 'Pas de description disponible'
                }
                if (titre === 'null'){
                    titre = 'Pas de titre disponible'
                }

                document.getElementById("row").innerHTML=`
                <article id="redditArticle${param}" class="col-sm-12" >
                   <h3 class='text-center'>${titre}</h3> <br>
                   <i> Posté par ${auteur} </i> <br>
                   ${description}<br>
                   <img src="${urlImage}" style="max-height: 300px; max-width=20%" >  <br>
                   <div ><a type="button" class="btn btn-primary" href="${url}">Voir plus</a>  Publié il y a  ${datePublication} <br> </div>
                   <a type="button" class="btn btn-primary" href="index.html">Retourner à l'accueil</a>
                </article>`


            })
        .catch((HttpResponse)=>{
        console.log(HttpResponse)
        console.log(HttpResponse.code)
        console.log(HttpResponse.status)
    })
}
else{
    axios.get('http://localhost:8080')
        .then((HttpResponse)=>{
            for (var i = 0; i < HttpResponse.data.totalResults; i++){
                var titre=`${HttpResponse.data.articles[i].title}`
                var auteur = `${HttpResponse.data.articles[i].author}`
                var description = `${HttpResponse.data.articles[i].description}`
                var url = `${HttpResponse.data.articles[i].url}`
                var urlImage = `${HttpResponse.data.articles[i].urlToImage}`
                var datePublication = `${HttpResponse.data.articles[i].publishedAt}`

                if (auteur === 'null'){
                    auteur = 'Anonyme'
                }
                if (urlImage === 'null'){
                    urlImage = 'http://www.drahtphotography.com/wp-content/uploads/2016/04/Reddit-Logo-Smaller.png'
                }
                if (description === 'null'){
                    description = 'Pas de description disponible'
                }
                if (titre === 'null'){
                    titre = 'Pas de titre disponible'
                }

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
                            <a type="button" class="btn btn-primary" href="${url}">Voir plus</a>
                            <a type="button" class="btn btn-info" href="index.html?${i}">Voir l\'article</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 published">
                            Publié il y a - ${datePublication}
                        </div>
                    </div>
                </div>                    
            </div>`
                }
            })
        .catch((HttpResponse)=>{
        console.log(HttpResponse)
        console.log(HttpResponse.code)
        console.log(HttpResponse.status)
    })
}



