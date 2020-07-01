import React, { Component } from "react";
import BattlefieldContainers from "../../containers/Battlefield";
import * as AppsTypes from '../../constants/Wrap'
import Navbar from "../Navbar";
import Home from "../Home";
import CharacterSheet from "../../containers/CharacterSheet";
import MapContainer from "../../containers/MapContainer";

class Wrapper extends Component {
    constructor(props) {
        super(props);
        let forChild;
        switch (props.app.name) {
            case AppsTypes.BATTLEFIELD:
                forChild = (props.players !== undefined) ? {rounds: props.players.length,
                    players: [...props.players].sort((a, b) => b.init - a.init)
                } : {};
                break;
            default:
                forChild = {};
        }
        this.state = {
            app: props.app,
            childState: forChild
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.app !== this.props.app)
        {
            this.setState({app: this.props.app})
        }
        if (prevProps.player !== this.props.player)
        {
            this.setState({player: this.props.player})
        }
    }


    render() {
        let element;

        switch (this.props.app.name) {
            case AppsTypes.BATTLEFIELD:
                element = (<BattlefieldContainers location={this.props.location} />);
            break;
            case AppsTypes.HOME:
                element = (<Home actions={this.props.actions} apps={this.props.apps} location={this.props.location} games={this.props.games} battles={this.props.battles}/>);
            break;
            case AppsTypes.CHARACTER_SHEET:
                element = (
                    <section className="bg-gray-300 pt-4 min-h-full">
                        <CharacterSheet location={this.props.location}/>
                    </section>
                );
            break;
            case AppsTypes.MAP:
                element = (
                    <section className="" style={{height: 'calc(100% - 4rem)',backgroundColor: '#218dff'}}>
                        <MapContainer location={this.props.location}/>
                    </section>
                );
                break;
            default:
                element = (<Home actions={this.props.actions} apps={this.props.apps} location={this.props.location} games={this.props.games.games}/>)
        }

        return (
            <div className="h-full">
                <Navbar {...this.props} state={this.state.childState} location={this.props.location}/>
                { element }
            </div>
        )
    }
}

export default Wrapper