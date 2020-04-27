window.onload = init();

function init() {

    let canvas = document.getElementById("hw2Canvas");
    let context = canvas.getContext("2d");

    //Add event listener into canvas, every we click on the canvas area
    canvas.addEventListener("click", getClickPosition);

    //draw a circle at the poistion we click on.
    function getClickPosition(event) {
        const rect = canvas.getBoundingClientRect();
        let xPosition = event.clientX - rect.left;
        let yPosition = event.clientY - rect.top;
        let nextColor = randomColor();

        drawCirCle(xPosition,yPosition,30,nextColor);
    }

    //draw circle
    function drawCirCle(x,y,r,color){
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.closePath();
    }
}