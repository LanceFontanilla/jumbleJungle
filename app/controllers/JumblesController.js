import { AppState } from "../AppState.js"
import { jumblesService } from "../services/JumblesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"



function _drawJumble() {
    console.log('drawing Jumble')
    let content = ''
    AppState.jumbles.forEach(jumble => content += jumble.ListTemplate)
    setHTML('jumbles-list', content)
}

function _drawActiveJumble() {
    let content = AppState.activeJumble.ActiveTemplate
    setHTML('jumbles-active', content)
}
export class JumblesController {
    constructor() {
        console.log('this is the controller')
        AppState.on('activeJumble', _drawActiveJumble)
        _drawJumble()
        AppState.on('jumbles', _drawJumble)
    }
    setActiveJumble(selectedJumble) {
        console.log('this is the active jumble', selectedJumble)
        let foundJumble = AppState.jumbles.find(jumble => selectedJumble == jumble.name)
        jumblesService.setActive(foundJumble)
        setHTML('jumbles-active', foundJumble)

        _drawActiveJumble()
    }

    compareBody() {
        window.event.preventDefault()
        console.log('comparingbody')
        const form = window.event.target
        const formData = getFormData(form)
        if (formData.jumbleBody == AppState.activeJumble.body) {
            console.log('youre amazing')
        } else {
            console.log('we are disappointed in you')
        }
        console.log(formData, 'this is the form data')

    }

    startGame() {
        jumblesService.startGame()
    }

    endGame() {
        jumblesService.endGame()
    }

    saveGame() {
        jumblesService.saveGame()
    }

    createJumble() {
        window.event.preventDefault()
        console.log('creating Jumble')
        const form = window.event.target
        const formData = getFormData(form)
        console.log(formData)
        jumblesService.createJumble(formData)
    }
}