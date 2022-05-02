// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

import { appendNews, get } from "./fetch.js";
let news = (e) => {
    if(e.key == "Enter"){
        window.location.href = "search.html"
        let query = document.getElementById("search_input").value
        get(query).then((data)=>{
            let container = document.getElementById("results")
            container.innerHTML = null
            
            appendNews(data.articles,container)
            window.location.href = "search.html"
        })
        
    }
}
document.getElementById("search_input").addEventListener("keydown",news)



var arr = JSON.parse(localStorage.getItem("news"))

arr.forEach(function(el){
    let detailed_news = document.getElementById("detailed_news")
detailed_news.innerHTML=null
    let div = document.createElement("div")
    div.id = "news"
        
    let image = document.createElement("img")
    image.src = el.urlToImage
    image.id = "image1"

    let title = document.createElement("h3")
       title.innerText = el.content

       let dis = document.createElement("p")
       dis.innerText = el.description

    div.append(image,title,dis)
    detailed_news.append(div)
})