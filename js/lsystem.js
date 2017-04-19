'use strict';

/* eslint-env browser */
/* exported Lsystem */

const defaultDistance = 10;

class Lsystem {
  constructor(turtle, axiom, productions, distance = defaultDistance) {
    this.turtle = turtle;
    this.axiom = axiom; // starting rule
    this.prods = productions; // rules to transform steps, { X: 'XY', Y: 'YY' }
    this.distance = distance; // distance to draw each step
    this.reset();
  }

  reset() {
    this.moves = this.axiom;
    return this;
  }

  transform(times = 1) {
    for (let t = 0; t < times; t++) {
      const string = this.moves;
      this.moves = '';
      for (let i = 0; i < string.length; i++) {
        this.moves += this.prods[string[i]] || string[i];
      }
    }
  }

  // render(turtle) {
  //
  // }


}
