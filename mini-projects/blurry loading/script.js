const background=document.querySelector('.background');
const loading=document.querySelector('.loading');


let value=0;
let int = setInterval(blur,30);

function blur() {
    value++;
    if(value===100){
        clearInterval(int);
    }
    loading.innerText=`${value}%`;
    // powering just to make it fade away near 100
    loading.style.opacity=`${1-(value/100)**50}`;
    let blur=(100-value)/2;
    background.style.filter=`blur(${blur}px)`;
}

