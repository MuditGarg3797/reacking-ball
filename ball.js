
class Ball{
    constructor(x,y,width,height){
        var options ={
           density : 1,
           frictionAir:0.005
        }
        this.body = Bodies.rectangle(x,y,width,height,options); 
        World.add(world,this.body)
        this.width = width;
        this.height = height;
    }
    display(){
        var pos =this.body.position;
        var ang  =this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(0,0,this.width, this.height)
        pop()
        
    }
    
    }