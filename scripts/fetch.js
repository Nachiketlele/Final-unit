let get = async (query) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let data = await res.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}

let appendNews =  (data,container) =>{
    data.forEach(function(el){
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
        container.append(div)
    })
}
var arr = JSON.parse(localStorage.getItem("news")) || []
function myFunc(el){

  arr.push(el)
  localStorage.setItem("news",JSON.stringify(arr))
  window.location.href = "news.html"
}
export {get,appendNews}