const increse_button = document.querySelector("#increse");
const decrese_button = document.querySelector("#decrese");
const counter_element = document.getElementById("counter");
const ulel = document.getElementById("list")
let count = 0;
function increse_count(){
    count++;
    counter_element.innerText = count;
    // create element
    const li = document.createElement("li");
    const b = document.createElement("b")
    
    const textnode = document.createTextNode("sentence"+count)
    b.appendChild(textnode)
    li.appendChild(b)


    // append the element       
    ulel.appendChild(li); 

}   
function decrese_count(){
    count--;
    counter_element.innerText = count;
}
increse_button.addEventListener("click", increse_count);
decrese_button.addEventListener("click", decrese_count)