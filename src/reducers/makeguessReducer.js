import { showGuess } from "../lib/game"

var guesses=[]
export default (state ={} , { type,guessLetter}) => {
  switch (type) {
      case "MAKE_GUESS":
        //console.log(state)
        //state = state+1
        console.log(guessLetter)


        return state, {type,guessLetter }

    default:
      return state



        //step 8 handle action in reducer
      }
    }
