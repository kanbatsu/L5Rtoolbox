import { NEXT_ROUND, NEXT_TURN } from "../constants/Battlefield/ActionTypes";

const initialState = {
        turn: 0,
        round: 0
    };

const massBattle = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_ROUND:
            return {
                ...state,
                round: action.round
            };
        case NEXT_TURN:
            return {
                turn: action.turn,
                round: 0
            };
        default:
            return state
    }
};

export default massBattle;

/**
 * FIXME MOVE massBattle to battlefield reducers
 */