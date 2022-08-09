const sizes=document.querySelectorAll('.size');


function removeActiveclasses(){
    sizes.forEach(size =>{
        size.classList.remove('active')
    })
}
sizes.forEach(size => {
    size.addEventListener('click',()=> {
        removeActiveclasses()
        size.classList.add('active')
    })
});





