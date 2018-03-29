import {
  button,
  div,
  DOMSource,
  makeDOMDriver,
  p
  } from '@cycle/dom';
import { run } from '@cycle/run';
import xs from 'xstream';


function main(sources: { DOM: DOMSource }) {
  const action$ = xs.merge(
    sources.DOM.select(".dec").events("click").mapTo(-1),
    sources.DOM.select(".inc").events("click").mapTo(+1)
  );

  const reset$ = sources.DOM
    .select(".reset")
    .events("click")
    .startWith(undefined);

  const count$ = reset$.map(_ => action$.fold((x, y) => x + y, 0)).flatten();

  const vdom$ = count$.map(count =>
    div([
      button(".dec", "Decrement"),
      button(".inc", "Increment"),
      button(".reset", "Reset"),
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
