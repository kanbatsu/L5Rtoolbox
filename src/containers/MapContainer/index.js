import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import * as MapActions from '../../actions/Map';
import Map from "../../components/Map";

const mapStateToProps = (state) => ({
    players: state.games.game.players
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MapActions, dispatch)
});

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);

export default MapContainer;