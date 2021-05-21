class Iron{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':3.0,
            'density':30.0
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    display(){
        var ironPos=this.body.position;
        push();
        translate(ironPos.x,ironPos.y);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();

    }
}