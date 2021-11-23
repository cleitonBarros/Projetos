const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes(){
    const tiggerbottom = window.innerHeight/ 5 * 4

    boxes.forEach(box =>{
        const boxtop= box.getBoundingClientRect().top

        if(boxtop<tiggerbottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }

    })
}