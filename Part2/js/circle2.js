window.onload = init();

function init() {

    let canvas = document.getElementById("hw2Canvas");
    let context = canvas.getContext("2d");
    let circles = [];

    canvas.addEventListener("click", getClickPosition);

    function getClickPosition(event) {
        let nextColor = randomColor();
        const rect = canvas.getBoundingClientRect();
        let xPosition = event.clientX - rect.left;
        let yPosition = event.clientY - rect.top;

        drawCirCle(xPosition,yPosition,30,nextColor);
    }

    function drawCircleElement(circle) {
        context.beginPath();
        context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
        context.fillStyle = circle.color;
        context.fill();
        context.closePath();

    }

    function drawCirCle(x,y,r,color){
        let circle = {x,y, r, color};
        if (checkDistance(circle)) {
            circles.push(circle);
            drawCircleElement(circle);
        } else {
            context.clearRect(0,0, 400, 400);
            circles.map(c => drawCircleElement(c));
        }
    }

    /*
        Formular:
        Point1(xa,ya)=(4,3)
        Point2(xb,yb)=(3,-2)

        Distance between two points =
        Math.sqrt(Math.pow((xb-xa), 2)+ Math.pow((yb-ya), 2));
     */
   function checkDistance(c) {
       let newArray = [];

       circles.map(currentCircleObject => {
           let xd = c.x - currentCircleObject.x;
           let yd = c.y - currentCircleObject.y;
           let d = Math.sqrt(Math.pow(xd, 2)+ Math.pow(yd, 2));
           if(d > 60) newArray.push(currentCircleObject);
       });

       if (newArray.length === circles.length) {
           circles.push(c);
           return true;
       } else {
           circles.splice(0, circles.length);
           circles.push(...newArray);
           circles.push(c);
           return false;
       }
   }
}