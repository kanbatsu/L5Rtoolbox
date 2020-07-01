import { createSelector } from 'reselect';
import * as AppsType from '../../constants/Wrap'

const getActiveApp = (state) => (state.games.game !== undefined) ? state.apps.app : '';
const getState = (state) => state;

/*
state.games.game.players.filter((player) => state.battlefield.find((battle) => battle.name === state.apps.battle).players.map((player) => player.name) === player.name) : '',
 */

export const getStatesForApp = createSelector(
    [getActiveApp, getState],
    (active, state) => {
        switch (active) {
            case AppsType.HOME:
                return {
                    app: state.apps.apps.find((app) => app.name === active),
                    apps: state.apps.apps,
                    location: state.apps.location,
                    game: state.games.game,
                    games: state.games,
                    battles: state.battlefield
                };
            case AppsType.BATTLEFIELD:
                return {
                    app: state.apps.apps.find((app) => app.name === active),
                    players: (state.battlefield.length > 0 && state.apps.battle !== undefined) ? state.battlefield.find((battle) => battle.name === state.apps.battle).players : [],
                    fight: state.massBattle,
                    location: state.apps.location,
                    game: state.games.game
                };
            case AppsType.CHARACTER_SHEET:
                return {
                    app: state.apps.apps.find((app) => app.name === active),
                    player: state.games.game.players.find((player) => player.name === state.games.player),
                    players: state.games.game.players,
                    location: state.apps.location,
                    game: state.games.game
                };
            case AppsType.MAP:
                return {
                    app: state.apps.apps.find((app) => app.name === active),
                    player: state.games.game.players.find((player) => player.name === state.games.player),
                    players: state.games.game.players,
                    location: state.apps.location,
                    game: state.games.game
                };
            default:
                return {
                    app: {
                        name: '',
                        title: 'Selection de partie',
                        navColor: 'bg-teal-700 border-b border-black'
                    },
                    apps: [],
                    location: state.apps.location,
                    games: state.games
                }
        }

    }
);