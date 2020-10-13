class YeeYee{
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.01
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        console.log(this.chain)
    }
    display(){
        if (this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB;
        push();
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
    fly() {
        this.chain.bodyA=false;
    }
}