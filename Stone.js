class Stone{
    constructor(x,y,width,height){

        var options ={
            'restitution':0.8,
            'friction':0.9,
            'density':12.0
        }
        this.x=x;
        this.y=y;
        this.width= width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }

    display(){
        var stonePos=this.body.position;
        push();
        translate(stonePos.x,stonePos.y);
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();

    }
}