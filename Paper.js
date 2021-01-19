class Paper {
    constructor(x, y, radius) {
    var options = {
    isStatic:false,
    'restitution':0.5,
    'friction':1.0,
    'density':1.5
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x,this.y,this.rodius/2,options);
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;      
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill(255);
    ellipse(0, 0, this.radius, this.radius);
    pop();
    }
  }