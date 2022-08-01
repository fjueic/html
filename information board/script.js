function createLines(n){
    const line =`<div class="line">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
  `;
    let board=``;
    for(let i=0;i<n;i++){
        board+=line;
    }
    const b = document.querySelector('.board');
    b.innerHTML=board;
}


function print(s){
    const boxes = document.querySelectorAll('.box');
    for(let i=0;i<s.length;i++){
        boxes[i].innerHTML=s[i];
    }
}
function KeyPress(e) {
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 32     && evtobj.ctrlKey) {
        var input = window.prompt("Input:")
        input = input.split(' ');
        let s = '';
        input.forEach(word => {
            let remaingSpaces=20-s.length%20;
            if(remaingSpaces>=word.length){
                s+=word;
            }else{
                while(s.length%20!==0){
                    s+=' ';
                }
                s+=word;
            }
            if((s.length)%20!==0){
                s+=' ';
            }
        });
        createLines((s.length-1)/20);
        print(s);
    };
}
createLines(2);
print(`Ctrl+SpaceBar for   input.`)
document.onkeydown = KeyPress;



