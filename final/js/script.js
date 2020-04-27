

window.onload = init;
function init(){
    let ballDiameter = 20;

    let canvas = document.getElementById("testCanvas");
    const centerX = getWidth(ballDiameter) / 2;
    getHeight(ballDiameter);
    let ballRadius = ballDiameter / 2;
    let context = canvas.getContext("2d");


    let drawCircle = (ballRadius) => {
        let i = 0;
        let color;
        for(i , x = centerX; i < 15; i++, x -= ballRadius ){
            (i % 2) === 0 ? color = "red" : color ="blue";
            for( let h = 0, X = x; h <= i; h++, X += ballDiameter){
                context.beginPath();
                context.arc(X, (ballRadius * i) + (ballRadius * (i+1)), ballRadius, 0, 2 * Math.PI,false);
                context.fillStyle = color;
                context.fill();

            }

        }
    };

    drawCircle(ballRadius);

}
function getWidth(ballDiameter) {
    let canvas = document.getElementById("testCanvas");
    return canvas.width = ballDiameter * 15;
}

function getHeight(ballDiameter) {
    let canvas = document.getElementById("testCanvas");
    return canvas.height = ballDiameter * 15;
}
