// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";


document.getElementById("navbar").innerHTML = navbar()



import { appendNews, get } from "./fetch.js";

let news = (e) => {
    if(e.key == "Enter"){
        let query = document.getElementById("search_input").value
        const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
        get(url).then((data)=>{
            let container = document.getElementById("results")
            container.innerHTML = null
            appendNews(data.articles,container)
            window.location.href = "search.html"
        })
        
    }
   
}
document.getElementById("search_input").addEventListener("keydown",news)







let getData = async () =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
        let data = await res.json()
        console.log(data.articles)
        append(data.articles)
    }
    catch(err){
        console.log(err)
    }
   
}
getData()
let sidebar = document.getElementById("sidebar").children

async function search(){
    let id = this.id
  const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`


  get(url).then((data)=>{
      let container = document.getElementById("results")
      container.innerHTML = null
      appendNews(data.articles,container)
    
  })
      

    }

let append = (data) =>{
  
    let results = document.getElementById("results")
    results.innerHTML = null
   data.forEach((el) =>{
  
       let div = document.createElement("div")
       div.setAttribute("class","news")
       div.addEventListener("click",function(){
           myFunc(el)
       })
       let div1 = document.createElement("div")
       let div2 = document.createElement("div")
        
       let image = document.createElement("img")
       image.src = el.urlToImage
       image.id = "image"

       let title = document.createElement("h3")
       title.innerText = el.content

       let dis = document.createElement("p")
       dis.innerText = el.description
       
       div2.append(title,dis)
       div1.append(image)
       div.append(div1,div2)
       results.append(div)
   })
}
var arr = JSON.parse(localStorage.getItem("news")) || []
function myFunc(el){

  arr.push(el)
  localStorage.setItem("news",JSON.stringify(arr))
  window.location.href = "news.html"
}


for(let el of sidebar){
    el.addEventListener("click",search)
}