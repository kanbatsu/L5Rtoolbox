import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Sheet from "../../components/Sheet";
import * as SheetActions from '../../actions/ChacterSheet';

const mapStateToProps = (state) => ({
    player: state.games.game.players.find((player) => player.name === state.games.player),
    players: state.games.game.players
});


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(SheetActions, dispatch)
});

const CharacterSheet = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sheet);

export default CharacterSheet;