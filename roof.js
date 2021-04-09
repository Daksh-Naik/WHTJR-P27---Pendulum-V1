class Roof {
    constructor(x, y, width, height) {
        var Roofoptions = {
            isStatic : true
        }
    this.body = Bodies.rectangle(x, y, width, height, Roofoptions);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill(color(190, 190));
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }

}