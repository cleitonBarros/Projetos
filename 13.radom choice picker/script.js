const tagsEl = document.getElementById("tags")
const textarea =document.getElementById("textarea") 

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags = (e.target.value)


    if(e.key ==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)


        randomSelect()
    }
})
function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim()) 

    tagsEl.innerHTML =''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)

        
    })
}
function randomSelect(){
    const time = 30
    const inteval =setInterval(()=>{
        const randomtag = pickrandomtag()
        highlighttag(randomtag)
        setTimeout(()=>{
            highlighttag(randomtag)
        })
    },100);

    setTimeout(()=>{
        clearInterval(inteval)
         setTimeout(()=>{
            const randomtag =pickrandomtag()
            highlighttag(randomtag)
         }, 100)
    }, time*100)

}

function pickrandomtag(){
const tags = document.querySelectorAll('.tag')
return tafs[math.floor(Math.random()*tags.length)]

}

function highlighttag(tag){
    tag.classList.add('high-light')
}
function Unhighlighttag(tag){
    tag.classList.remove('high-light')
}