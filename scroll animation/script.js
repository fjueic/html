const boxes = document.querySelectorAll('.box');



const update=()=>{
    const trigger=window.innerHeight*4/5;
    boxes.forEach(box => {
        const boxTop=box.getBoundingClientRect().top;
        if(boxTop<trigger){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}
window.addEventListener("scroll", update);
update();