//var body = document.querySelector("body");
//var button = document.createElement("button");
//button.innerText = "Click here";
//button.style.backgroundColor ="blue";
//body.appendChild(button);

//body.insertAdjacentHTML("beforeend", "<div></div>");

var body = document.querySelector("body");
 
for(var i=0; i< 20; i++){
    var div = document.createElement("div");

     var redValue = getRandomInt(0,255);
    var greenValue = getRandomInt(0, 255);
    var blueValue = getRandomInt(0, 255);

    div.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    var redBorder = getRandomInt(0,255);
    var greenBorder = getRandomInt(0, 255);
    var blueBorder = getRandomInt(0, 255);

    div.style.borderColor = `rgb(${redBorder}, ${greenBorder}, ${blueBorder})`;
    body.appendChild(div);
}

    function getRandomInt(min, max) {
        return Math.floor(Math.random() *  (max - min + 1)) + min;
        }
    
    
//var i = 1;
//while(i < 10) {
    //body.insertAdjacentHTML("beforeend", "<div></div>");
   // i = i + 1;

