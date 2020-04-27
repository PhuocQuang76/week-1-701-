window.onload = init;
function init(){
    //access the canvas elemnet and its context
    let canvas = document.getElementById("hw1Canvas");
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = centerX;
    let context = canvas.getContext("2d");

    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    let updateSliderValue = slider.value;
    output.innerHTML = updateSliderValue;      // Display the default slider value

    let drawCircle = (radValue) => {
        for(let rad = radius, flag = 0; rad >= 0; rad -= radValue, flag++){
            let color;

            (flag % 2) === 0 ? color = "red": color = "blue";
            context.beginPath();
            context.arc(centerX, centerY, rad, 0, 2 * Math.PI,false);
            context.fillStyle = color;
            context.fill();
        }
    };

    drawCircle(updateSliderValue);

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        updateSliderValue = this.value;
        output.innerHTML = updateSliderValue;
        drawCircle(updateSliderValue);
    };

};