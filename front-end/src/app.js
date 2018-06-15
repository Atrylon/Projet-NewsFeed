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
                                    Publié il y a  ${datePublication}
                               </div>
                               <div class="col-12 col-lg-4  text-center">
                                    <a type="button" class="btn btn-primary" href="index.html">Retourner à l'accueil</a> 
                               </div>
                           </div>
                       </div>
                   
                </div>



`


            }
        )
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
                            Publié il y a - ${datePublication}
                        </div>
                    </div>
                </div>                    
            </div>
                    
                    
                    
                    
                    
`
                }

            }
        )
}



