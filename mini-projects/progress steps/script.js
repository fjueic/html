const circles=document.querySelectorAll('.circle');
const back=document.getElementById('prev');
const next=document.getElementById('next');
const bar=document.querySelector('.bar')



let progress=1;
const update=()=>{

    if(progress===1){
        back.disabled=true;
    }else{
        back.disabled=false;
    }
    if(progress===circles.length){
        next.disabled=true;
    }else{
        next.disabled=false;
    }

    circles.forEach((c,i) => {
        if(i<progress){
            c.classList.add('active')
        }else{
            c.classList.remove('active')
        }
    });

    bar.style.width=100*(progress-1)/(circles.length-1)+'%';

}
next.addEventListener('click',()=>{
    if(progress<circles.length){
        progress++;
        console.log(progress)
    }
    update();
});
back.addEventListener('click',()=>{
    if(progress>1){
        progress--;
        console.log(progress)
    }
    update();
});

