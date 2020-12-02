let img1=document.getElementById('img1')
let img2=document.getElementById('img2')
let img3=document.getElementById('img3')
let cont1=document.getElementById('cont1')
let cont2=document.getElementById('cont2')
let cont3=document.getElementById('cont3')
let espada1 =document.querySelectorAll('.espada1')
let espada2 =document.querySelectorAll('.espada2')
let espada3 =document.querySelectorAll('.espada3')
let audio=document.querySelector('audio')
    img1.addEventListener('click',()=>{
        for(let i of espada1){
            i.classList.toggle('efecto')
            cont1.classList.toggle('mover')
          audio.play()
        }
    })
    img2.addEventListener('click',()=>{
        for(let i of espada2){
            i.classList.toggle('efecto')
            cont2.classList.toggle('mover')
          audio.play()
        }
    })
    img3.addEventListener('click',()=>{
        for(let i of espada3){
            i.classList.toggle('efecto')
            cont3.classList.toggle('mover')
          audio.play()
        }
    })
