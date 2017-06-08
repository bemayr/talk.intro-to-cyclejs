import * as Rx from "rxjs/Rx";

// --- ARRAYS --- //
const inSpace = [0, 1, 2, 3, 4, 5];
inSpace
  .filter(x => x % 2 === 0)
  .map(x => `${x * 10}%`)
  .forEach(x => console.log(x));

// --- STREAMS/OBSERVABLES --- //
const inTime = Rx.Observable.of(1, 2, 3, 4, 5, 6);
const inTime = Rx.Observable.interval(500).take(20);
inTime
  .filter(x => x % 2 === 0)
  .map(x => `${x * 10}%`)
  .subscribe(x => console.log(x));

/* ~~~~~~~ ASCII Marble Diagram ~~~~~~~ */
// interval: --0--1--2--3--4--5--6--...--|
//   filter: --0-----2-----4-----6--...--|
//      map: --0---20%---40%---60%--...--|
//   => console.log (side-effect)
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// ---------- additional ----------
const percentages = inTime
  .filter(x => x % 2 === 0)
  .map(x => `${x * 10}%`)
  .share();

percentages.subscribe(x => console.log(x));
setTimeout(function() {
  percentages.subscribe(x => console.log(x));
}, 2000);
