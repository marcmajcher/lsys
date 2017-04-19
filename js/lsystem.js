'use strict';

/* eslint-env browser */
/* exported Lsystem */

const defaultDistance = 10;
const defaultAngle = 90;

class Lsystem {
  constructor(turtle, axiom, productions, distance = defaultDistance, angle = defaultAngle) {
    this.turtle = turtle;
    this.axiom = axiom; // starting rule
    this.prods = productions; // rules to transform steps, { X: 'XY', Y: 'YY' }
    this.distance = distance; // distance to draw each step
    this.angle = angle;
    this.reset();

    this.rules = {
      F: () => {
        this.turtle.penDown();
        this.turtle.forward(this.distance);
      },
      f: () => {
        this.turtle.penUp();
        this.turtle.forward(this.distance);
      },
      '+': () => this.turtle.right(this.angle),
      '-': () => this.turtle.left(this.angle),
      '[': () => this.turtle.save(),
      ']': () => this.turtle.restore()
    };
  }

  reset() {
    this.moves = this.axiom;
    return this;
  }

  step(times = 1) {
    for (let t = 0; t < times; t++) {
      const string = this.moves;
      this.moves = '';
      for (let i = 0; i < string.length; i++) {
        this.moves += this.prods[string[i]] || string[i];
      }
    }
    return this;
  }

  render(x, y, angle) {
    this.turtle.reset();
    if (x && y) {
      this.turtle.moveTo(x, y);
    }
    if (angle) {
      this.turtle.turn(angle);
    }
    for (let i = 0; i < this.moves.length; i++) {
      const fn = this.rules[this.moves[i]];
      if (fn) {
        fn();
      }
    }
    return this;
  }

}
