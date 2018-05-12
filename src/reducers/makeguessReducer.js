export default (state ={} , { type }) => {
  switch (type) {
      case "MAKE_GUESS":
        console.log(state)
        return {guessWord:'test'}

    default:
      return state
  


        //step 8 handle action in reducer
      }
    }
