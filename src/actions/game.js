//game.js
export const newgame = () => {
    return {

        type: 'NEW_GAME'
    }
}

export const makeguess = (guessLetter) => {
    return {
        type: 'MAKE_GUESS',
        guessLetter,


    }
}
