import * as types from '../constants/Apps/ActionTypes'

export const initialAppsState = {
    app: 'home',
    apps: [
        {
            name: 'home',
            title: 'Page d\'accueil',
            icon: 'fas fa-home',
            color: 'bg-blue-300',
            navColor: 'bg-blue-700'
        },
        {
            name: 'battlefield',
            title: 'Bataille de Masse',
            icon: 'fas fa-plus',
            color: 'bg-red-300',
            navColor: 'bg-orange-600'
        },
        {
            name: 'characterSheet',
            title: 'Fiche personnage',
            icon: 'fas fa-user',
            color: 'bg-gray-500',
            navColor: 'bg-gray-800'
        },
        {
            name: 'map',
            title: 'Carte du Monde',
            icon: 'fas fa-globe-europe',
            color: 'bg-green-500',
            navColor: 'bg-green-800'
        }
    ],
    location: 'FR'
};

export default function apps(state = initialAppsState, action) {
    switch (action.type) {
        case types.GET_APPS:
            return state;
        case types.SET_APP:
            return {
                ...state,
                app: state.apps.find((app) => app.name === action.name).name
            };
        case types.SELECT_GAME:
            return {
                ...state,
                app: 'battlefield',
                battle: action.name
            };
        case types.SWITCH_LOCATION:
            return {
                ...state,
                location: (state.location === 'FR') ? 'GB' : 'FR'
            };
        default:
            /*return {
                ...state,
                app: state.apps.find((app) => app.name === 'characterSheet').name,
            };*/
            /*return {
                ...state,
                app: state.apps.find((app) => app.name === 'battlefield').name,
                battle: 'Col de Bayour'
            };*/
            return state
    }
}