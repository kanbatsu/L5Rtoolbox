import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import Modal from "../../components/Modal";
import * as BattleActions from '../../actions/Battlefield';

const mapStateToProps = (state) => ({
    players: state.battlefield
});

const mapDispatchToProps= (dispatch) => ({
    actions: bindActionCreators(BattleActions, dispatch)
});

const BattlefieldContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default BattlefieldContainers;

//FIXME Pas sur que ce soit nécéssaire