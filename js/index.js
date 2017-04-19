'use strict';

/* eslint-env browser */
/* exported render */
/* globals Turtle */

/* eslint no-magic-numbers: 0 */

function render() {
  const t = new Turtle('turtle-canvas');
  t.forward(50);
  t.penUp();
  t.forward(50);
  t.penDown();
  t.forward(50);
}
