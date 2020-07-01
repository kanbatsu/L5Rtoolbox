import { createSelector } from 'reselect';


const getPlayersByInit = (state) => (state.battlefield.length > 0 && state.apps.battle !== undefined) ? [...state.battlefield.find((battle) => battle.name === state.apps.battle).players].filter(player => player.lp > 0).sort((a, b) => b.init - a.init) : []
const getCurrent = (state) => state.massBattle.round;
const getBattleName = (state) => state.apps.battle;
const getBattles = (state) => state.battlefield;

export const getActivePlayer = createSelector(
    [getCurrent, getPlayersByInit],
    (current, players) => {
        if (current !== 0)
        {
            return players[current - 1].id
        }
    }
);

export const getPlayersOfBattle = createSelector(
    [getBattleName, getBattles],
    (name, battles) => {
        if (name !== undefined)
        {
            return battles.find((battle) => battle.name === name).players;
        }
        else
        {
            return [];
        }
    }
);

export const getNameOfBattle = createSelector(
    [getBattleName, getBattles],
    (name, battles) => {
        if (name !== undefined)
        {
            return name;
        }
        else
        {
            return [];
        }
    }
);

//find((battle) => battle.name === state.apps.battle).players
//[...state.battlefield.find((battle) => battle.name === state.apps.battle).players].filter(player => player.lp > 0).sort((a, b) => b.init - a.init)
//