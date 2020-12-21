class Drops{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0.1,
            isStatic:false
        }
        this.r = 5;
        this.drops = Bodies.circle(x, y, this.r, options);
        World.add(world, this.drops);
    }
    

display() {
    var pos = this.drops.position;
    var angle = this.drops.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}
update(){
    if(this.drops.position.y > height){
        Matter.Body.SetPosition(this.drops, {x:random(0,800), y:random(0,800)});
        drops = [];
    for(var i = 0; i<maxDrops; i ++){
        World.remove(world, this.drops);
    }
    }
}
}
