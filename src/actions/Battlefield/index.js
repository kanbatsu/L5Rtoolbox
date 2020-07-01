import * as types from '../../constants/Battlefield/ActionTypes'

export const initMassBattle = (name, players) => ({
    type: types.INIT_MASS_BATTLE,
    name,
    players
});

export const addPlayer = (battleName, name, perso, position, lp, init, enemy) => ({
    type: types.ADD_PLAYER,
    battleName,
    name,
    perso,
    position,
    lp,
    init,
    enemy
});

export const deletePlayer = (battleName, id) => ({
    type: types.DEL_PLAYER,
    battleName,
    id
});

export const movePlayer = (battleName, id, position) => ({
    type: types.MOVE_PLAYER,
    battleName,
    id,
    position
});

export const attackPlayer = (battleName, id, damages) => ({
    type: types.ATTACK_PLAYER,
    battleName,
    id,
    damages
});

export const nextRound = (round) => ({
   type: types.NEXT_ROUND,
    round
});

export const nextTurn =  (turn) => ({
    type: types.NEXT_TURN,
    turn
});