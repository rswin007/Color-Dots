var body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", "<div></div>");

//for(var i=0; i< 10; i+2){
   // body.insertAdjacentHTML("beforeend", "<div></div>");
    
var i = 1;
while(i < 10) {
    body.insertAdjacentHTML("beforeend", "<div></div>");
    i = i + 1;
}