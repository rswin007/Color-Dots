

var body = document.querySelector("body");


function clearOldDots() {
    var divsToRemove = document.querySelectorAll('div:not(#rachel)');

    divsToRemove.forEach( function(div) {
        body.removeChild(div);
    })
}


function applyDots() {
    for(var i=0; i< 20; i++){
        var div = document.createElement("div");

        var redValue = getRandomInt(0,255);
        var greenValue = getRandomInt(0, 255);
        var blueValue = getRandomInt(0, 255);
        var alphaBackground = getRandomArbitrary(0.5, 1);

        div.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaBackground})`;

        var redBorder = getRandomInt(0,255);
        var greenBorder = getRandomInt(0, 255);
        var blueBorder = getRandomInt(0, 255);
        var alphaBorder = getRandomArbitrary(0.5, 1);

        div.style.borderColor = `rgba(${redBorder}, ${greenBorder}, ${blueBorder}, ${alphaBorder})`;
        body.appendChild(div);
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() *  (max - min + 1)) + min;
}
    
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



 
var button = document.querySelector("div#rachel");

button.addEventListener("click", function(){
    clearOldDots();
    applyDots()
})



