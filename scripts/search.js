// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

import { appendNews, get } from "./fetch.js";
let news = (e) => {
    if(e.key == "Enter"){
        let query = document.getElementById("search_input").value
        const url =`https://masai-mock-api.herokuapp.com/news?q=${query}`
        get(url).then((data)=>{
            let container = document.getElementById("results")
            container.innerHTML = null
            appendNews(data.articles,container)
        })
    }
}
document.getElementById("search_input").addEventListener("keydown",news)

