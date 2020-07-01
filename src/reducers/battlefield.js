import * as types from '../constants/Battlefield/ActionTypes'

/**
 * Battlefield Reducer
 */

//const initialState = [];
const initialState = [
    {
        name: 'Col de Bayour',
        players: [
            {
                id: 0,
                name: 'Bertrand',
                perso: 'Genjiro',
                position: 0,
                lp: 44,
                init: 28,
                enemy: false
            },
            {
                id: 1,
                name: 'Lionel',
                perso: 'Rikudo',
                position: 3,
                lp: 24,
                init: 33,
                enemy: false
            },
            {
                id: 2,
                name: 'Romain',
                perso: 'Bokatsu',
                position: 3,
                lp: 54,
                init: 20,
                enemy: true
            }
        ]
    }
]

export default function battlefield (state = initialState, action) {
    switch (action.type) {
        case types.INIT_MASS_BATTLE:
            return [
                ...state,
                {
                    name: action.name,
                    players: action.players
                }
            ];
        case types.ADD_PLAYER:
            return state.map((battle) => {
                    return battle.name === action.battleName ? {
                        ...battle,
                        players: [
                            ...battle.players,
                            {
                                id: battle.players.reduce((idMax, player) => Math.max(player.id, idMax), -1) + 1,
                                name: action.name,
                                perso: action.perso,
                                position: parseInt(action.position),
                                lp: parseInt(action.lp),
                                init: parseInt(action.init),
                                enemy: action.enemy
                            }
                        ]
                    } : battle
                });
        case types.DEL_PLAYER:
            return state.map((battle) => {
                    return battle.name === action.battleName ? {
                        ...battle,
                        players: battle.players.filter((player) => player.id !== action.id)
                    } : battle
                });
        case types.MOVE_PLAYER:
            return state.map((battle) => {
                    return battle.name === action.battleName ? {
                        ...battle,
                        players: battle.players.map((player) => {
                            return player.id === action.id ? {
                                ...player,
                                position: action.position
                            } : player
                        })
                    } : battle
                });
        case types.ATTACK_PLAYER:
            return state.map((battle) => {
                return battle.name === action.battleName ? {
                    ...battle,
                    players: battle.players.map((player) => {
                        return player.id === action.id ? {
                            ...player,
                            lp: parseInt(player.lp - action.damages)
                        } : player
                    })
                } : battle
            });
        default:
            return state;
    }
}