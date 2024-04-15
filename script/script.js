let botao=document.getElementById('btn')
let menu=document.getElementById('mobile')


botao.addEventListener('click',function(){
    menu.classList.add('abrir')
})

menu.addEventListener('click',function(){
    menu.classList.remove('abrir')
})
