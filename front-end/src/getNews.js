import axios from "axios/index";

var param = location.search

if (param){
    param = param.substr(1, 1)
    axios.get('https://newsapi.org/v2/top-headlines?' +
        'sources=reddit-r-all&' +
        'apiKey=591d3c16f1ab4f129bcd48a5b4480317')
        .then((HttpResponse)=>{

                var titre=`${HttpResponse.data.articles[param].title}`
                var auteur = `${HttpResponse.data.articles[param].author}`
                var description = `${HttpResponse.data.articles[param].description}`
                var url = `${HttpResponse.data.articles[param].url}`
                var urlImage = `${HttpResponse.data.articles[param].urlToImage}`
                var datePublication = `${HttpResponse.data.articles[param].publishedAt}`

                document.getElementById("row").innerHTML=`
                <article id="redditArticle${param}" class="col-sm-12" >
                   <h3 class='text-center'>${titre}</h3> <br>
                   <i> Posté par ${auteur} </i> <br>
                   ${description}<br>
                   <img src="${urlImage}" style="max-height: 300px; max-width=20%" >  <br>
                   <div ><a type="button" class="btn btn-primary" href="${url}">Voir plus</a>  Publié il y a  ${datePublication} <br> </div>
                   <a type="button" class="btn btn-primary" href="index.html">Retourner à l'accueil</a>
                </article>`


            }
        )
}
else{
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
                       <div style="position: absolute;bottom: 0;"><a type="button" class="btn btn-info" href="index.html?${i}">Voir l\'article</a>
                       <a type="button" class="btn btn-primary" href="${url}">Voir plus</a>  Publié il y a  ${datePublication} <br> </div>
                    </article>`
                }

            }
        )
}