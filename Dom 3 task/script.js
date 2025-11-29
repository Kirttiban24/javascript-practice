let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click',function(){

    var div = document.createElement('div')

    var x = Math.floor(Math.random()*80)
    var y = Math.floor(Math.random()*80)
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    var r = Math.random()*360
    var scl = Math.random()*3

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    div.style.rotate = r+'deg'
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.scale = scl

    main.appendChild(div)

})