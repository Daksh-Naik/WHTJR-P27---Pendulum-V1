class PendulumBob {
    constructor(x, y, radius) {
        var BobOptions = {
            'restitution' : 1.0,
            'friction': 0,
            'density': 1.0,
            'inertia' : Infinity,
            'frictionAir' : 0.01

        }
    //this.radius = 25;
    this.body = Matter.Bodies.circle(x, y, radius, BobOptions);
    this.radius = radius;

    World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius);
        pop();
        
    }
}