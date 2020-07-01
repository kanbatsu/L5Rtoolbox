import * as types from '../../constants/Map/ActionTypes';

export const movePlayer = (player, position) => ({
    type: types.MOVE_PLAYER,
    player,
    position
});