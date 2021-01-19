class Paper {
  constructor(x, y,radius) {
      var options = {
        isStatic : false,
        'density':1.2,
        'friction' : 0.5,
        'restitution' :0.3
      };
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      //this.image = loadImage("sprites/base.png")
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke("black")
      fill("pink");
      ellipse(0, 0, this.radius);
      pop();
    };
  };
  