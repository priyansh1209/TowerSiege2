class Blocks{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,)
        World.add(world,this.body)
    }
    
    display(colour){ 
        
        if(this.body.speed<3){
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            fill(colour)
            rectMode(CENTER)
            rect(0,0,30,30)
            pop()
          }else{
            push()
            this.visible = this.visible - 5;
            tint(255,this.visible)
            World.remove(world,this.body)
            pop()
          }
    }
}