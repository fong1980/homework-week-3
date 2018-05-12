export default (state ={} , { type,letterAttempt }) => {
  switch (type) {
      case "MAKE_GUESS":
        //console.log(state)
        state = state+1


        return state, {type,letterAttempt }

    default:
      return state



        //step 8 handle action in reducer
      }
    }
