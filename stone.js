class Stone{
    constructor(){
        this.body = Bodies.polygon(90,150,6,30)
        World.add(world, this.body);
        this.image = loadImage("polygon.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,70,70)
    }
}