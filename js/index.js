'use strict';

/* eslint-env browser */
/* exported render */
/* globals Turtle, Lsystem */

/* eslint no-magic-numbers: 0 */

function render() {
  const turtle = new Turtle('turtle-canvas');
  // const axiom = 'F-F-F-F';
  // const prods = {
  //   F: 'F-F+F+FF-F-F+F'
  // };
  const axiom = '-F';
  const prods = {
    F: 'F+F-F-F+F'
  };
  const ls = new Lsystem(turtle, axiom, prods, 10);
  ls.step(4);
  ls.render();
}
