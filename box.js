class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.3,
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World .add(myworld , this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var angle = this.body.angle 
        var pose = this.body.position 
        push() 
        translate (pose.x, pose.y) 
        rotate (angle)
                rect(0,0,this.width,this.height); 
                pop() 
    }
}  