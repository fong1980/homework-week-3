//game.js
export const newgame = () => {
    return {

        type: 'NEW_GAME'
    }
}

export const makeguess = (letterAttempt) => {
    return {
        type: 'MAKE_GUESS',
        letterAttempt,


    }
}
