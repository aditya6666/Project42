class Umbrella{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.boy = createSprite(200,200);
        this.boy.scale = 0.2;
        this.boyImage = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    }
    

display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    this.boy.addAnimation("image",this.boyImage);
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    drawSprites();
    pop();
    }
 }
