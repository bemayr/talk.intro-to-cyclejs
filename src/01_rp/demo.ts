import * as Rx from "rxjs/Rx";

// --- from arrays to streams --- //
const items = [0, 1, 2, 3, 4, 5];
const items = Rx.Observable.from([0, 1, 2, 3, 4, 5]);
const items = Rx.Observable.interval(500).take(20);
items
  .filter(x => x % 2 === 0)
  .map(x => `${x * 10}%`)
  .forEach(x => console.log(x));

/* ~~~~~~~ ASCII Marble Diagram ~~~~~~~ */
// interval: --0--1--2--3--4--5--6--...--|
//   filter: --0-----2-----4-----6--...--|
//      map: --0---20%---40%---60%--...--|
//   => console.log (side-effect)
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~ http://rxmarbles.com/ ~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
