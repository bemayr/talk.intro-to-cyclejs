import {
  button,
  div,
  DOMSource,
  makeDOMDriver,
  p
  } from '@cycle/dom';
import { run } from '@cycle/run';
import xs from 'xstream';
/* --------------------------------------------------------------------------- */
/* https://cycle.js.org/basic-examples.html#basic-examples-increment-a-counter */
/* --------------------------------------------------------------------------- */



function main(sources: { DOM: DOMSource }) {
  const action$ = xs.merge(
    sources.DOM.select(".dec").events("click").mapTo(-1),
    sources.DOM.select(".inc").events("click").mapTo(+1)
  );

  const count$ = action$.fold((x, y) => x + y, 0);

  const vdom$ = count$.map(count =>
    div([
      button(".dec", "Decrement"),
      button(".inc", "Increment"),
      p("Counter: " + count)
    ])
  );

  return {
    DOM: vdom$
  };
}

run(main, {
  DOM: makeDOMDriver("#app")
});
