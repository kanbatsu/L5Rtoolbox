import * as types from '../../constants/Apps/ActionTypes'

/**
 * Apps Actions
 */

export const showApps = () => ({
    type: types.GET_APPS
});

export const selectApp = (name) => ({
    type: types.SET_APP,
    name,
});

export const switchLocation = () => ({
    type: types.SWITCH_LOCATION,
});

export const selectMassBattle  = (name) => ({
    type: types.SELECT_GAME,
    name
});