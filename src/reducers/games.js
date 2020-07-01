import { games as listGames } from "../api";
import * as types from "../constants/Apps/GamesActionType";

/**
 * Games Reducer
 */

/*
if (state.hasOwnProperty('game'))
            {
                return {
                    ...state,
                    games: state.games.map((game) => {
                        return game.name === state.game.name ? state.game : game
                    }),
                    game: state.games.find((game) => game.name === action.name),
                    player: state.games.find((game) => game.name === action.name).players[0].name,
                };
            }
            else
            {
                return {
                    ...state,
                    game: state.games.find((game) => game.name === action.name),
                    player: state.games.find((game) => game.name === action.name).players[0].name,
                };
            }
 */

const initialState = {
    games: listGames
};

export default function games(state = initialState, action) {
    switch (action.type) {
        case types.GET_GAMES:
            return state;
        case types.SET_GAME:
            return {
                ...state,
                game: state.games.find((game) => game.name === action.name),
                player: state.games.find((game) => game.name === action.name).players[0].name,
            };
        case types.SELECT_PLAYER:
            return {
                ...state,
                player: action.name
            };
        case types.SET_VOID_POINTS:
            return {
                ...state,
                game: {
                        ...state.game,
                        players: state.game.players.map((player) => {
                            return player.name === state.player ? {
                                ...player,
                                xp: player.xp - (parseInt(action.point) * 6),
                                Void: parseInt(action.point)
                            } : player
                        })
                    }
            };
        case types.SET_TRAIT:
            return {
                ...state,
                game: {
                        ...state.game,
                        players: state.game.players.map((player) => {
                            return player.name === state.player ? {
                                ...player,
                                xp: player.xp - parseInt(action.point * 4),
                                rings: player.rings.map((ring) => {
                                    return ring.map((traits) => {
                                        return traits.hasOwnProperty(action.trait) ?
                                            Object.defineProperty(traits, action.trait, {
                                                value: parseInt(action.point)
                                            }) : traits
                                    })
                                })
                            } : player
                        })
                }
            };
        case types.ADD_SKILL:
            return {
                ...state,
                game: {
                    ...state.game,
                    players: state.game.players.map((player) => {
                        return player.name === state.player ? {
                            ...player,
                            xp: player.xp - 1,
                            skills: [
                                ...player.skills,
                                action.skill
                            ]
                        } : player
                    })
                    }
            };
        case types.UP_RANK_SKILL:
            return {
                ...state,
                game: {
                    ...state.game,
                    players: state.game.players.map((player) => {
                        return player.name === state.player ? {
                            ...player,
                            xp: player.xp - (parseInt(action.skill.rank) + 1),
                            skills: player.skills.map((skill) => {
                                return skill.skill === action.skill.skill ? {
                                    ...skill,
                                    rank: parseInt(skill.rank) + 1
                                } : skill
                            })
                        } : player
                    })
                }
            };
        case types.SET_SIDEPOINT:
            return {
                ...state,
                game: {
                    ...state.game,
                    players: state.game.players.map((player) => {
                        return player.name === state.player ? {
                            ...player,
                            sidePoints: {
                                ...player.sidePoints,
                                [action.name]: action.value
                            }
                        } : player
                    })
                }
            };
        case types.ADD_VANTAGE:
            return {
                ...state,
                game: {
                    ...state.game,
                    players: state.game.players.map((player) => {
                        return player.name === state.player ? {
                            ...player,
                            xp: (action.vantage.type === 'Advantage') ? player.xp - parseInt(action.vantage.cost) : player.xp + parseInt(action.vantage.cost),
                            vantages: [
                                ...player.vantages,
                                action.vantage
                            ]
                        } : player
                    })
                }
            };
        case types.SAVE_GAME:
            return state;
        default:
            //return state;
            return {
                ...state,
                game: state.games.find((game) => game.name === 'La Tourmente de Rokugan'),
                player: state.games.find((game) => game.name === 'La Tourmente de Rokugan').players[0].name,
            };
    }
}