export default class Particle {
    /* color is a 3 element tuple representing a HSV value
       position is a P5.Vector
       velocity is a P5.Vector */
    constructor(color, position, velocity) {
        this._color = color;
        this._position = position;
        this._velocity = velocity;
    }

    get color() {
        return this._color;
    }

    get position() {
        return this._position;
    }

    get velocity() {
        return this._velocity;
    }

    set color(value) {
        this._color = value;
    }

    set position(value) {
        this._position = value;
    }

    set velocity(value) {
        this._velocity = value;
    }

    move(newVelocity) {
        this._position = this.position.add(newVelocity);
        this._velocity = newVelocity;
        return this._position;
    }
}
