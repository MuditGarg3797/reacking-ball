class Rope{
    
constructor(bodyA,pointB){
    var options={

        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:30
    }
    this.pointB = pointB
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
 }



 display(){
   
        var tom = this.rope.bodyA.position;
        var jerry = this.pointB;
        push()
        stroke("brown")
        strokeWeight(4);
        line(jerry.x, jerry.y, tom.x, tom.y);
        pop()
    }

    }
