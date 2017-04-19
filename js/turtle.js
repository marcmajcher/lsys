'use strict';

/* eslint-env browser */
/* eslint no-magic-numbers: ["error", { "ignore": [2, 180] }] */
/* eslint no-underscore-dangle: 0 */
/* exported Turtle */

class Turtle {
  constructor(canvasid) {
    this.canvas = document.getElementById(canvasid);
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.direction = 0;
    this.draw = true;
    this.states = [];
  }

  penDown() {
    this.draw = true;
    return this;
  }

  penUp() {
    this.draw = false;
    return this;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
    this.canvas.moveTo(x, y);
    return this;
  }

  _go() {
    if (this.draw) {
      this.canvas.lineTo(this.x, this.y);
    }
    else {
      this.canvas.moveTo(this.x, this.y);
    }

    return this;
  }

  forward(distance) {
    this.x += distance * Math.cos(this.direction);
    this.y += distance * Math.sin(this.direction);
    return this._go();
  }

  backward(distance) {
    this.x += distance * Math.cos(this.direction - Math.PI);
    this.y += distance * Math.sin(this.direction - Math.PI);
    return this._go();
  }

  right(angle) {
    this.dir += (angle * (Math.PI / 180));
    return this;
  }

  left(angle) {
    this.dir -= (angle * (Math.PI / 180));
    return this;
  }

  save() {
    this.states.push({
      x: this.x,
      y: this.y,
      d: this.direction
    });
    return this;
  }

  restore() {
    const state = this.states.pop();
    if (state) {
      this.x = state.x;
      this.y = state.y;
      this.direction = state.d;
    }
    return this;
  }
}
