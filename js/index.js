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
  // const ls = new Lsystem(turtle, axiom, prods, 10);

  // const axiom = '-F';
  // const prods = {
  //   F: 'F+F-F-F+F'
  // };
  // const ls = new Lsystem(turtle, axiom, prods, 10);

  const axiom = 'R';
  const prods = {
    L: 'R+L+R',
    R: 'L-R-L'
  };
  const ls = new Lsystem(turtle, axiom, prods, 10, 60);
  ls.rules.R = ls.rules.F;
  ls.rules.L = ls.rules.F;

  ls.step(6);
  ls.render(80, 150);
}
