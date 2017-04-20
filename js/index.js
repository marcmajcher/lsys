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

const setList = [
  'F-F-F-F|F:F+F-F-FF+F+F-F|6|90|3|200|200|0',
  '-F|F:F+F-F-F+F|9|90|4|760|200|90',
  'R|L:R+L+R;R:L-R-L|10|60|6|80|620|0',
  'F+F+F+F|F:F+f-FF+F+FF+Ff+FF-f+FF-F-FF-Ff-FFF;f:ffffff|10|90|2|220|550|0',
  'F-F-F-F|F:FF-F-F-F-F-F+F|8|90|3|400|200|0',
  'F-F-F-F|F:FF-F-F-F-FF|14|90|3|200|200|0',
  'F-F-F-F|F:FF-F+F-F-FF|25|90|3|550|450|0',
  'F-F-F-F|F:FF-F--F-F|8|90|4|80|70|0',
  'F|F:F[+F]F[-F]F|8|25|4|400|700|270',
  'F|F:F[+F]F[-F][F]|8|20|5|400|700|270',
  'F|F:FF-[-F+F+F]+[+F-F-F]|10|22.5|4|400|700|270',
  'X|X:F[+X]F[-X]+X;F:FF|2|20|7|400|700|270',
  'X|X:F[+X][-X]FX;F:FF|3|25.7|7|400|790|270',
  'X|X:F-[[X]+X]+F[+FX]-X;F:FF|9|25.7|5|400|790|270',
];

function fillForm(set) {
  const form = document.getElementById('lsys');
  [form.axiom.value, form.prods.value, form.dist.value, form.angle.value,
    form.steps.value, form.startx.value, form.starty.value, form.starta.value
  ] = setList[set].split('|');
}


function setup() {
  document.getElementById('btn-render').addEventListener('click', (e) => {
    e.preventDefault();
    render();
  });
  document.getElementById('lsys-select').addEventListener('change', (e) => {
    fillForm(e.target.selectedIndex);
  });
}
