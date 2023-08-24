import { AppState } from "../AppState.js"



class JumblesService {

    setActive(foundJumble) {

        AppState.activeJumble = foundJumble

    }
    startGame() {

    }

    endGame() {

    }

}



export const jumblesService = new JumblesService