import * as types from '../../constants/Apps/GamesActionType'

export const showGames = () => ({
    type: types.GET_GAMES
});

export const selectGame = (name) => ({
    type: types.SET_GAME,
    name
});