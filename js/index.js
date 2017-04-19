'use strict';

/* eslint-env browser */
/* exported render */
/* globals Turtle, Lsystem */

/* eslint no-magic-numbers: 0 */

function render() {
  const turtle = new Turtle('turtle-canvas');
  const axiom = 'F';
  const prods = {
    F: 'F+F'
  };
  const ls = new Lsystem(turtle, axiom, prods);

  console.log(ls.moves);
  ls.transform();
  console.log(ls.moves);
  ls.transform();
  console.log(ls.moves);
  ls.transform();
  console.log(ls.moves);
}
