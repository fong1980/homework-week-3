import { showGuess } from "../lib/game"

// const initialUserState = {
//     letterArray:[]
// }

export default (state ={} , {type,guessLetter}) => {

  switch (type) {
      case "MAKE_GUESS":
        //console.log(state)
        //state = state+1

         guessLetter:'tstdd'


        return state, {type,guessLetter }

    default:
      return state



        //step 8 handle action in reducer
      }
    }
