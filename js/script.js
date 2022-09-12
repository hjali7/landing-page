let btn = document.querySelector('#menu-btn')
let nav = document.querySelector("#menu")

btn.addEventListener("click",function (){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    nav.classList.toggle('flex')
})