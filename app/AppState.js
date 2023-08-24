import { Jumble } from "./models/Jumble.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  activeJumble = null

  jumbles = loadState('jumbles', [Jumble])
  // jumbles = [
  //   new Jumble({
  //     name: "mango salad",
  //     body: "Omg I love mango salad! I would eat it every day if I could.",
  //     startTime: 15

  //   }),
  //   new Jumble({
  //     name: "fruity tooty",
  //     body: "This is the fruity tooty cabooty salad mix! You will love it or you suck bananas!",
  //     startTime: 5
  //   }),
  //   new Jumble({
  //     name: "cooked salad",
  //     body: "This cooked salad contains green beans, cat food, and potato chips. Nom Nom, said the kitty cat to the cow as she jumped over the brown dog.",
  //     startTime: 89
  //   })
  // ]


  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
