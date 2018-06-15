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

var w = new WebSocket('ws://localhost:8888')
w.onopen=function(){
    console.log('connected')
    w.send('je suis connecté au serveur')
}
w.onmessage=function(event) {
    console.log(event.data)
    console.log('message')
};

w.onclose=function() {
    console.log("closing.")
};



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

            datePublication = new Date(`${datePublication}`).getTime()
            var now = Date.now()
            var time = Math.round((now - datePublication)/3600000)
            if (time > 24){
                time = String(Math.round(time/24)).concat(' j')
            }
            else{
                time = String(time).concat(' h')
            }


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

            document.getElementById("row").innerHTML=
                `


                <div class="article mb-4 col-12" id="redditArticle${param}" style="height: 550px;">
                    <div class="row head">
                        <div class="col-12 titre text-center">
                            <h3 class=''>${titre}</h3>
                        </div>
                        <div class="col-12 author text-center">
                            Posté par ${auteur}
                        </div>
                    </div>             
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-4 text-center">
                               ${description}           
                            </div>
                            <div class="col-12 image mb-4">
                                <img src="${urlImage}" class="img-fluid">
                            </div>
                        </div> 
                    </div>
                       <div class="col-12 lien">
                           <div class="row">
                               <div class="col-12 col-lg-4  text-center">
                                   <a type="button" class="btn btn-primary" href="${url}">Voir plus</a>
                               </div>
                               <div class="col-12 col-lg-4  text-center">
                                    Publié il y a  ${time}
                               </div>
                               <div class="col-12 col-lg-4  text-center">
                                    <a type="button" class="btn btn-primary" href="index.html">Retourner à l'accueil</a> 
                               </div>
                           </div>
                       </div>
                   
                </div>
`

        })
        .catch((HttpResponse)=>{
            console.log(HttpResponse)
        })
}
else{
    axios.get('http://localhost:8080')
        .then((HttpResponse)=>{
            for (var i = 0; i < HttpResponse.data.totalResults; i++){
                //console.log(HttpResponse.data)
                var titre=`${HttpResponse.data.articles[i].title}`
                var auteur = `${HttpResponse.data.articles[i].author}`
                var description = `${HttpResponse.data.articles[i].description}`
                var url = `${HttpResponse.data.articles[i].url}`
                var urlImage = `${HttpResponse.data.articles[i].urlToImage}`
                var datePublication = `${HttpResponse.data.articles[i].publishedAt}`
                datePublication = new Date(`${datePublication}`).getTime()
                var now = Date.now()
                var time = Math.round((now - datePublication)/3600000)
                if (time > 24){
                    time = String(Math.round(time/24)).concat(' j')
                }
                else{
                    time = String(time).concat(' h')
                }

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
                <div class="article mb-4" id="redditArticle${i}">
                    <div class="row head">
                        <div class="col-12 titre">
                            <h3 class='text-center'>${titre}</h3>
                        </div>
                        <div class="col-12 author">
                            Posté par ${auteur}
                        </div>
                    </div>
                    <div class="row details text-center" >
                        <div class="col-12 description">
                            <div class="mb-4">
                                ${description}
                            </div>
                            <div>
                            <a type="button" class="btn btn-primary" href="${url}">Voir la source</a>
                            <a type="button" class="btn btn-info" href="index.html?${i}">Voir l\'article</a>
                            </div>
                        </div>
                        <div class="col-12 image">
                            <img src="${urlImage}" class="img-fluid">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 published">
                            Publié il y a  ${time} 
                        </div>
                    </div>
                </div>                    
            </div>`
                }
            })
        .catch((HttpResponse)=>{
        console.log(HttpResponse)
    })
}



