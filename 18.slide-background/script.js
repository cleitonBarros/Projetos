const body = document.body
const slides = document.querySelectorAll('.slide')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')

let activeslide = 0
//call
setbgtobody()

//background
function setbgtobody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}
//slide change
function setActiveslide(){
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeslide].classList.add('active')
}

//btn
right.addEventListener('click',() => {
    activeslide++

    if(activeslide > slides.length - 1){
        activeslide = 0
        
    }

    setbgtobody()
    setActiveslide()

})
left.addEventListener('click',() => {
    activeslide--

    if(activeslide < 0 ){
        activeslide = slides.length - 1
        
    }

    setbgtobody()
    setActiveslide()

})