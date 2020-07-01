import * as types from '../constants/CharacterSheet/ActionType'
import { players as ApiPlayers } from "../api";

const initialState = {
    player: 'Asahi',
    players: ApiPlayers
};

const players = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECT_PLAYER:
            return {
                ...state,
                player: action.name
            };
        case types.SET_VOID_POINTS:
            return {
                ...state,
                players: state.players.map((player) => {
                    return player.name === state.player ? {
                        ...player,
                        Void: parseInt(action.point)
                    } : player
                })
            };
        case types.SET_TRAIT:
            return {
                ...state,
                players: state.players.map((player) => {
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
            };
        case types.ADD_SKILL:
            return {
                ...state,
                players: state.players.map((player) => {
                    return player.name === state.player ? {
                        ...player,
                        xp: player.xp - 1,
                        skills: [
                            ...player.skills,
                            action.skill
                        ]
                    } : player
                })
            };
        case types.UP_RANK_SKILL:
            return {
                ...state,
                players: state.players.map((player) => {
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
            };
        case types.SET_SIDEPOINT:
            return {
                ...state,
                players: state.players.map((player) => {
                    return player.name === state.player ? {
                        ...player,
                        sidePoints: {
                            ...player.sidePoints,
                            [action.name]: action.value
                        }
                    } : player
                })
            };
        default:
            return state
    }
};

export default players;