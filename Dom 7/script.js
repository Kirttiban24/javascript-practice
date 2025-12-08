// let main = document.querySelector("main");
// let cursor = document.querySelector("#cursor")

// main.addEventListener("mousemove",function(dets){
    
//     cursor.style.left = dets.x + "px"
//     cursor.style.top = dets.y + "px"
// })

let body = document.body
let h1 = document.querySelector("h1")

body.addEventListener("keydown", function(dets){
    h1.innerHTML = dets.code

}) 