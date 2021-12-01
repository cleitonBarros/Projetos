const fill =document.querySelector('.fill')
const empties =document.querySelectorAll('.box')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}

function dragStart(){
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
    
    

}
function dragEnd(){
    
}
function dragOver(){
    
}
function dragEnter(){
    
}
function dragLeave(){
    
}
function dragDrop(){
    
}

