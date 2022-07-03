const drop=document.getElementById("drop")
const menu=document.getElementById("menu")

drop.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }
    else
    {
        menu.classList.add('hidden')
    }
})