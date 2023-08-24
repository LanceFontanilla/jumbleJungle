import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { saveState } from "../utils/Store.js"



class JumblesService {

    setActive(foundJumble) {

        AppState.activeJumble = foundJumble

    }
    startGame() {
        AppState.activeJumble.startTime = Date.now()
        //console.log(startTime)
    }

    endGame() {

        AppState.activeJumble.endTime = Date.now()
        let finishTime = AppState.activeJumble.endTime - AppState.activeJumble.startTime
        console.log(finishTime)
        this.checkFastestTime(finishTime)
        this.saveGame()

    }

    checkFastestTime(finishTime) {
        if (finishTime < AppState.activeJumble.fastestTime) {
            AppState.activeJumble.fastestTime = finishTime
            console.log('replaced fastest time', finishTime)
        }
        console.log(AppState.activeJumble.fastestTime)
        AppState.emit('activeJumble')
    }

    saveGame() {
        saveState('jumbles', AppState.jumbles)
    }
    createJumble(formData) {
        let newJumble = new Jumble(formData)
        AppState.jumbles.push(newJumble)
        console.log(AppState.jumbles)
        AppState.emit('jumbles')
    }
}



export const jumblesService = new JumblesService