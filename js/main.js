let allImags =  Array.from( document.querySelectorAll(".try img") )
let mylayer = document.querySelector(".big-image")


    for(let i=0; i<allImags.length; i++){
        allImags[i].addEventListener("click",function(e){
        current = e.target.getAttribute("src")
        mylayer.innerHTML = `<img src="${current}" alt=""></img>`
    })
    } 
