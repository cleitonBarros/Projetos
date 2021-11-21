const panels = document.querySelectorAll('.painel')

panels.forEach((painel)=>{
    painel.addEventListener('click',() =>{
        removeAcitiveclasses()
        painel.classList.add('active')
    })
})

function removeAcitiveclasses(){
    panels.forEach((painel)=>{
        painel.classList.remove('active')
    });
}