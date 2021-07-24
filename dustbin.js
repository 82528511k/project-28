class dustbin{
    constructor(x,y,width,height){
        var options= {
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':0.1,
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")

        World.add(world,this.body)
    
    }
    display(){
        rectMode(CENTER)
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image, 610, 620, 150, 100);
    }
}