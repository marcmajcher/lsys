'use strict';

/* eslint-env browser */
/* exported setup, fillForm */
/* globals Turtle, Lsystem */

/* eslint no-magic-numbers: 0 */
/* eslint radix: 0 */

function render() {
  const form = document.getElementById('lsys');
  const turtle = new Turtle('turtle-canvas');
  const axiom = form.axiom.value;
  const prodstr = form.prods.value.split(';');
  const prods = {};
  prodstr.forEach((e) => {
    const [letter, rule] = e.split(':');
    prods[letter] = rule;
  });
  const dist = parseInt(form.dist.value);
  const angle = parseInt(form.angle.value);
  const steps = parseInt(form.steps.value);
  const startx = parseInt(form.startx.value);
  const starty = parseInt(form.starty.value);
  const starta = parseInt(form.starta.value);
  const ls = new Lsystem(turtle, axiom, prods, dist, angle);
  ls.step(steps).render(startx, starty, starta);
}

function setup() {
  document.getElementById('btn-render').addEventListener('click', (e) => {
    e.preventDefault();
    render();
  });
}

const sets = {
  one: {
    axiom: 'F-F-F-F',
    prods: {
      F: 'F+F-F-FF+F+F-F'
    },
    angle: 90,
    dist: 6,
    steps: 3,
    startx: 200,
    starty: 600,
    starta: 0
  }
};

function fillForm(set) {
  const form = document.getElementById('lsys');
  form.axiom.value = sets[set].axiom;
  form.angle.value = sets[set].angle;
  form.dist.value = sets[set].dist;
  form.steps.value = sets[set].steps;
  form.startx.value = sets[set].startx;
  form.starty.value = sets[set].starty;
  form.starta.value = sets[set].starta;
  const prodSet = sets[set].prods;
  form.prods.value = Object.keys(prodSet).map(key =>
    `${key}:${prodSet[key]}`).join(';');
}

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

// const axiom = 'X';
// const prods = {
//   X: 'F[+X][-X]FX',
//   F: 'FF'
// };
// const ls = new Lsystem(turtle, axiom, prods, 5, 25.7);
// ls.step(6).render(400, 700, 270);

// const axiom = 'X';
// const prods = {
//   X: 'F-[[X]+X]+F[+FX]-X',
//   F: 'FF'
// };
