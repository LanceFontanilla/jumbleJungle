import { generateId } from "../utils/GenerateId.js"

export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = data.fastestTime || 30000
        this.startTime = data.startTime
        this.endTime = null
    }

    get ListTemplate() {
        return `<section class="row">
<div class="col-12" onclick="app.JumblesController.setActiveJumble('${this.name}')">
  <h1>${this.name}</h1>
  <p>${this.body}</p>
</div>
</section>`
    }
    get ActiveTemplate() {
        return `    <section class="row">
    <div class="col-12">
      <h1>${this.name}</h1>
      <p>${this.body}</p>
    
      <h3>${this.fastestTime}</h3>

      <button class="btn btn-danger"onclick="app.JumblesController.startGame()">Start</button>
    </div>
    <div>

    </div>
    <form action="" class="col-12" onsubmit="app.JumblesController.compareBody()">
      <textarea class"w-100" name="jumbleBody" id="jumbleBody" cols="30" rows="10"></textarea>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info col-2" type="submit" onclick="app.JumblesController.endGame()">Submit</button>
      </div>
    </form>
  </section>`
    }

}