class Snow{
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:1,
            density:1.2,
            restitution:0.5
        }
      this.snowFall = Bodies.circle(x,y,r,options)
      this.x=x;
      this.y=y;
      this.r=r;
      this.image = loadImage("snow4.webp");
      World.add(world, this.snowFall);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle)
        ellipseMode(RADIUS)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
}