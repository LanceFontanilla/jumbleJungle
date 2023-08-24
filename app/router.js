import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: JumblesController,
    view: /*html*/`
<div id="jumbles-list"> This is the HTML </div>

<div id="jumbles-active"> this is the active jumble </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]

