const list = document.querySelectorAll('.list')
function activelink(){
     list.forEach((item)=>
         item.classList.remove('Active'))
         this.classList.add('Active')
}
list.forEach((item)=>
    item.addEventListener('click', activelink)
)