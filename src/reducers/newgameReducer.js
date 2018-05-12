//./reducer/counterReaducer

export default (state = 0, { type }) => {
  switch (type) {
    case "NEW_GAME":
      console.log('test')
      return state + 1

      case "MAKE_GUESS":
        console.log('makeguess')
        return state  +1

    default:
      return state

    //step 8 handle action in reducer
  }
}

//step 3
