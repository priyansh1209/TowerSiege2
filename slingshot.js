class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    reattach(bodyA){
        this.sling.bodyA = bodyA
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255,0,0);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.sling.pointB.x, this.sling.pointB.y);
            strokeWeight(7)
            pop();
        }
    }
    
}
