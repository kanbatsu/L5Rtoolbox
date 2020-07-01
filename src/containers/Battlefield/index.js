/**
 * Battlefield Container
 */

import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import Battlefield from "../../components/Battlefield";
import * as BattleActions from '../../actions/Battlefield';
import { getActivePlayer, getPlayersOfBattle, getNameOfBattle } from "../../selectors/Battles";

const mapStateToProps = (state) => ({
    game: state.games.game,
    battleName: getNameOfBattle(state),
    players: (state.apps.battle !== undefined) ? getPlayersOfBattle(state) : [],
    activePlayer: getActivePlayer(state)
});

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators(BattleActions, dispatch)
});

const BattlefieldContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Battlefield);

export default BattlefieldContainers;