class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body = Bodies.circle(x,y,radius,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(RADIUS)
      fill("purple");
      ellipse(pos.x, pos.y, 20,20);

      if (keyCode === UP_ARROW){
          Matter.Body.applyForce(this.body, pos,{x:8,y:-6})
      }
    }
  };