class Plinko{
constructor(x,y,width){
var options = {

    isStatic :true

}
this.body = Matter.Bodies.circle(x,y,width, options);
this.width = width;
//this.image = loadImage("paper.png");
World.add(world,this.body);

}
display(){
var pos = this.body.position;

ellipseMode(CENTER);

ellipse(pos.x,pos.y,this.width,this.height);

//image(this.image,pos.x, pos.y, this.width, this.width);
	
}

};