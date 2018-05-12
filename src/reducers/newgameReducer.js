//./reducer/counterReaducer
import { randomWord } from "../lib/game"


//var A = randomWord()

export default (state ={} , { type }) => {
  switch (type) {
    case "NEW_GAME":
      return {state,newWord:randomWord()}

    default:
      return state


    //step 8 handle action in reducer
  }
}

//step 3
