class Blocks{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,)
        World.add(world,this.body)
    }
    
    display(colour){ 
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill(colour)
        rectMode(CENTER)
        rect(0,0,30,30)
        pop()
    }
}