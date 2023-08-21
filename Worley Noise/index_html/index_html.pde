void setup(){
  size(400,400);
}

void draw(){
  loadPixels();
  for (int x = 0; x < width; x++){
   for (int y = 0; y < height; y++){
     int index = x + y * width;
     pixels[index] = color(random(255));
   }
 }
 updatePixels();
}
