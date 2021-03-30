class Sling {

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:100,
            stiffness:0.01
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB = pointB;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            push();
            strokeWeight(3);
            stroke("white");
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }


}