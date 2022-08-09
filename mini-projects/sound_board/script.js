const buttons=document.querySelectorAll(".btn");


let playing='0';
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        const id=buttons[i].id.slice(0,-1);
        document.getElementById(playing).pause();
        document.getElementById(playing).currentTime = 0;
        playing=id;
        document.getElementById(id).play();
    })
}