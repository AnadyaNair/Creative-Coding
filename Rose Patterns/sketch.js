var k = 4;

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background("#121212");
    translate(width / 2, height / 2);

    beginShape();
    stroke(255);
    strokeWeight(1);

    for (var a = 0; a < TWO_PI; a += 0.01){
        var r = 200 * cos(7 * a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x,y);
    }

    endShape(CLOSE);
}