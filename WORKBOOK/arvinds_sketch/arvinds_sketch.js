function setup() {
  createCanvas(windowWidth, windowHeight); //hereafter 'width' height
  background (255, 255, 255);
  fill (0, 0, 255);
  stroke(0, 0, 0);
  strokeWeight(2);
}


function draw() {
  circle(width/2, height/2, height/2); //circle (x, y, size)
  //ellipse(width/2, height/2, height/2, height/4);
  background (255, 255, 255, 10); //(r,g,b,a)
  //circle(mouseX, mouseY, height/2); //circle (x, y, size)
  //square (mouseX, mouseY, height/2);
  //rect(x, y, w, h);
  //line (mouseX, mouseY, 0, 0);
  strokeWeight(4);
  fill(0);
  //circle(mouseX, mouseY, mouseX/4)
  //fill(255);
  //square (mouseX-10, mouseY+50, mouseY);
  //square (10, 20, height/2);
}
