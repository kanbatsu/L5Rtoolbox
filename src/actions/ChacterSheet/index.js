import * as types from '../../constants/Apps/GamesActionType';

export const setVoidPoint = (point) => ({
    type: types.SET_VOID_POINTS,
    point
});

export const selectPlayer = (name) => ({
    type: types.SELECT_PLAYER,
    name
});

export const setTrait = (trait, point) => ({
    type: types.SET_TRAIT,
    trait,
    point
});

export const addSkill = (skill) => ({
    type: types.ADD_SKILL,
    skill
});

/**
 * Action to add or remove point on the side of the rings
 * @param name : name of the point
 * @param value : value of the point (e.g 7.5)
 * @returns {{name: *, type: string, value: *}}
 */
export const setSidePoints = (name, value) => ({
    type: types.SET_SIDEPOINT,
    name,
    value
});

export const setXP = (xp) => ({
    type: types.SET_XP,
    xp
});

export const upSkillRank = (skill) => ({
    type: types.UP_RANK_SKILL,
    skill
});

export const addVantage = (vantage) => ({
    type: types.ADD_VANTAGE,
    vantage
});

