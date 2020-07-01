/**
 * Battlefield Component
 */

import React, { Component } from 'react'
import Battleline from "../Battleline";
import PropTypes from 'prop-types'
import Modal from "../Modal";
import classnames from 'classnames'
import Initializer from "./initializer";

class Battlefield extends Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            mobile: window.matchMedia("(max-width: 640px)").matches,
            modalPlayer: false,
            wrap: true,
            allies: true,
            enemies: false
        }
    }


    // let mobile = window.matchMedia("(max-width: 640px)").matches

    handleAddPlayer()
    {
        this.setState({modalPlayer: !this.state.modalPlayer})
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.props.actions.addPlayer(
            this.props.battleName, event.target[0].value, event.target[1].value, event.target[2].value, event.target[4].value, event.target[3].value, (event.target[5].checked ? true : false)
        );
        this.handleAddPlayer();
    }

    handleDisplayOnMobile(side)
    {
        this.setState({allies: side === 'allies'});
        this.setState({enemies: side === 'enemies'});
    }

    fight()
    {
        const { actions, activePlayer } = this.props;

        const players = this.props.players;

        let ModalPlayer = (
            <Modal title="Ajouter un joueur :">
                <i className="fas fa-times absolute right-0 top-0 mr-5 mt-5 cursor-pointer" onClick={() => this.handleAddPlayer()}></i>
                <form action="" className="flex flex-col py-2 mt-4" onSubmit={this.handleSubmit}>
                    <div className="flex-label-input">
                        <label htmlFor="name">Joueur :</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex-label-input">
                        <label htmlFor="perso">Personnage :</label>
                        <input type="text" id="perso" name="perso" required/>
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="position">Position :</label>
                        <select name="position" id="position" required className="appearance-none border-t border-b focus:border-blue-500">
                            <option value="0">Soutiens</option>
                            <option value="1">Désengagés</option>
                            <option value="2">Engagés</option>
                            <option value="3">Premières lignes</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex-label-input px-2 w-1/2">
                            <label htmlFor="init">Initiative :</label>
                            <input type="number" id="init" name="init" min="0" required/>
                        </div>
                        <div className="flex-label-input px-2 w-1/2">
                            <label htmlFor="lp">Points de vie :</label>
                            <input type="number" id="lp" name="lp" min="0" required/>
                        </div>
                        <div className="flex-label-input px-2 w-1/6">
                            <label htmlFor="enemy">Ennemi :</label>
                            <input type="checkbox" id="enemy" name="enemy"/>
                        </div>
                    </div>
                    <input type="submit" value="Ajouter" className="mt-4 bg-blue-600 text-white"/>
                </form>
            </Modal>
        );

        return (
            <div className={classnames({'flex-wrap': this.state.wrap}, "flex h-full")}>
                <div className={'flex w-full md:hidden bg-orange-600 border-t border-b h-12 text-white'}>
                    <span className={classnames({'bg-white text-orange-600 border-orange-600': this.state.allies}, 'h-full w-full flex items-center justify-center cursor-pointer border-r')} onClick={() => this.handleDisplayOnMobile('allies')}><i
                        className="far fa-handshake"></i></span>
                    <span className={classnames({'bg-white text-orange-600 border-orange-600': this.state.enemies}, 'h-full w-full flex items-center justify-center cursor-pointer')} onClick={() => this.handleDisplayOnMobile('enemies')}><i
                        className="fas fa-skull-crossbones"></i></span>
                </div>
                <Battleline title="Soutiens" actions={actions} players={
                    players.filter(player => (player.position === 0 && !player.enemy))
                } position={0} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.allies : true}/>
                <Battleline title="Désengagees" actions={actions} players={
                    players.filter(player => (player.position === 1 && !player.enemy))
                } position={1} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.allies : true}/>
                <Battleline title="Engagés" actions={actions} players={
                    players.filter(player => (player.position === 2 && !player.enemy))
                } position={2} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.allies : true}/>
                <Battleline title="Premières lignes" actions={actions} players={
                    players.filter(player => (player.position === 3 && !player.enemy))
                } position={3} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.allies : true}/>
                <hr className="h-1 bg-white w-full hidden md:block"/>
                <Battleline title="Soutiens" actions={actions} players={
                    players.filter(player => (player.position === 0 && player.enemy))
                } position={0} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.enemies : true}/>
                <Battleline title="Désengagees" actions={actions} players={
                    players.filter(player => (player.position === 1 && player.enemy))
                } position={1} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.enemies : true}/>
                <Battleline title="Engagés" actions={actions} players={
                    players.filter(player => (player.position === 2 && player.enemy))
                } position={2} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.enemies : true}/>
                <Battleline title="Premières lignes" actions={actions} players={
                    players.filter(player => (player.position === 3 && player.enemy))
                } position={3} activePlayer={activePlayer} battleName={this.props.battleName} visible={this.state.mobile ? this.state.enemies : true}/>
                <i className="fas fa-plus-circle fixed bottom-0 right-0 mr-6 mb-6 text-5xl text-white cursor-pointer" onClick={() => this.handleAddPlayer()}></i>
                {(this.state.modalPlayer) ? ModalPlayer : ''}
            </div>
        )
    }

    render() {
        let element;
        if (this.props.players.length > 0)
        {
            element = this.fight();
        }
        else
        {
            element = <Initializer players={this.props.game.players} initMassBattle={this.props.actions.initMassBattle} />
        }

        return element
    }
}

Battlefield.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        perso: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired,
        lp: PropTypes.number.isRequired,
        init: PropTypes.number.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired,
};

export default Battlefield;