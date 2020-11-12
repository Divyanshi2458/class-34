class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
   
        this.pointB = pointB
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
this.rope.bodyA=body

    }
    display(){

    
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push ()
            
            stroke(42,28,8)
            strokeWeight(5)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
            
            
       
            pop ()
        }
    }
    
}