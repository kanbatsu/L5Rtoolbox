/**
 * Main Container
 */

import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import Wrapper from "../../components/Wrapper";
import { nextTurn, nextRound } from "../../actions/Battlefield";
import { showApps, selectApp, switchLocation, selectMassBattle } from "../../actions/Apps";
import { selectPlayer } from "../../actions/ChacterSheet";
import { selectGame } from "../../actions/Apps/game";

import { getStatesForApp } from "../../selectors/App";

const mapStateToProps = (state) => (getStatesForApp(state));


const mapDispatchToProps = (dispatch) => ({
        actions: bindActionCreators({ nextTurn, nextRound, showApps, selectApp, selectPlayer, switchLocation, selectGame, selectMassBattle }, dispatch)
    });

const MainContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wrapper);

export default MainContainers;