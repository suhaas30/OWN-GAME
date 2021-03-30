class Shooter {

    constructor(x,y,radius){
        var options={
            restitution:0.2,
            friction:0.3,
            density:2
        }
        this.body = Bodies.circle(x,y,radius,(options));
        this.radius = radius;
        World.add(world,this.body);

    }

    display(){
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}