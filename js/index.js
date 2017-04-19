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

  // const axiom = 'R';
  // const prods = {
  //   L: 'R+L+R',
  //   R: 'L-R-L'
  // };
  // const ls = new Lsystem(turtle, axiom, prods, 10, 60);

  // const axiom = '-L';
  // const prods = {
  //   L: 'LF+RFR+FL-F-LFLFL-FRFR+',
  //   R: '-LFLF+RFRFR+F+RF-LFL-FR'
  // };
  // const ls = new Lsystem(turtle, axiom, prods, 10);

  // const axiom = '---F';
  // const prods = {
  //   F: 'F[+F]F[-F]F'
  // };
  // const ls = new Lsystem(turtle, axiom, prods, 10, 25.7);

  const axiom = 'X';
  const prods = {
    X: 'F[+X][-X]FX',
    F: 'FF'
  };
  const ls = new Lsystem(turtle, axiom, prods, 5, 25.7);
  ls.step(6).render(400, 700, 270);
}
