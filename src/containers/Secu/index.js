import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import Wrapper from "../../components/Wrapper";
import { nextTurn, nextRound } from "../../actions/Battlefield";

const mapStateToProps = (state) => ({
    players: state.battlefield.filter(player => player.lp > 0),
    fight: state.massBattle
});

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators({nextTurn, nextRound}, dispatch)
});

const MainContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wrapper);

export default MainContainers;