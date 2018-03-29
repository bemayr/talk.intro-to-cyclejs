import { Observable } from "rxjs/Rx";

// --- from arrays to streams --- //
// const items = [0, 1, 2, 3, 4, 5]
// const items = Observable.from([0, 1, 2, 3, 4, 5])
const items = Observable.interval(500).take(20)

items
  .filter(x => x % 2 === 0)
  .map(x => `${x * 10}%`)
  .forEach(x => console.log(x))
