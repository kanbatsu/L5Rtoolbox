import { combineReducers } from "redux";
import battlefield from "./battlefield";
import massBattle from "./massBattle";
import apps from "./apps";
import players from "./players";
import games from "./games";

const rootReducer = combineReducers({
    apps,
    battlefield,
    massBattle,
    players,
    games
});

export default rootReducer;