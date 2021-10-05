var k = 5/8;
var slider;
function setup(){
    createCanvas(600, 600);
    slider = createSlider(1,10,4,0.1);
}

function draw(){
    k = slider.value();
    background("#121212");
    translate(width / 2, height / 2);

    beginShape();
    stroke(255);
    noFill();
    strokeWeight(1);

    for (var a = 0; a < TWO_PI * 10; a += 0.01){
        var r = 200 * cos(k * a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x,y);
    }

    endShape(CLOSE);
}