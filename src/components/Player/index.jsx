import React, { Component } from "react";
import PropTypes from 'prop-types';
import Modal from "../Modal/index";
import classnames from 'classnames'

class Player extends Component
{
    static propTypes = {
        player: PropTypes.object.isRequired,
        attackPlayer: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            modalATK: false,
            modalMv: false,
            position: this.props.position,
            isGrab: false,
        };

        this.attackPlayer = this.attackPlayer.bind(this);
        this.movePlayer = this.movePlayer.bind(this);
        this.setDrag = this.setDrag.bind(this);
        this.endDrag = this.endDrag.bind(this);

    }

    handleAttack()
    {
        this.setState({modalATK: !this.state.modalATK})
    }

    handleDelete()
    {
        if (window.confirm('Souhaitez-vous réellement supprimer '+this.props.player.perso+' de la bataille de masse ?')) {
            this.props.deletePlayer(this.props.battleName, this.props.player.id)
        }
    }

    handleMove()
    {
        this.setState({modalMv: !this.state.modalMv})
    }

    movePlayer(event)
    {
        event.preventDefault();
        this.props.movePlayer(this.props.battleName, this.props.player.id, parseInt(event.target[0].value));
        this.handleMove();
    }

    attackPlayer(event)
    {
        event.preventDefault();
        this.props.attackPlayer(this.props.battleName, this.props.player.id, parseInt(event.target[0].value));
        this.handleAttack();
    }

    setDrag(event)
    {
        event.dataTransfer.setData("text/plain", this.props.player.id);
        this.setState({isGrab: true});
    }

    endDrag()
    {
        this.setState({isGrab: false});
    }

    render() {
        const player  = this.props.player;

        //console.log(player);

        let modalAttack = (
            <Modal title="Perte de points :">
                <i className="fas fa-times absolute right-0 top-0 mr-5 mt-5 cursor-pointer" onClick={() => this.handleAttack()}></i>
                <form action="" className="flex flex-col py-2 mt-4" onSubmit={this.attackPlayer}>
                    <div className="flex">
                        <div id="flex-label-input" className="px-2">
                            <label htmlFor="pvLoose">Perte de PV :</label>
                            <input type="number" id="pvLoose" name="pvLoose" min="0" required/>
                        </div>
                    </div>
                    <input type="submit" value="Appliquer" className="mt-4 bg-red-600 text-white"/>
                </form>
            </Modal>
        );

        let modalMove = (
            <Modal title="Perte de points :">
                <i className="fas fa-times absolute right-0 top-0 mr-5 mt-5 cursor-pointer" onClick={() => this.handleMove()}></i>
                <form action="" className="flex flex-col py-2 mt-4" onSubmit={this.movePlayer}>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="position">Position :</label>
                        <select name="position" id="position" required className="appearance-none border-t border-b focus:border-blue-500">
                            <option value="0">Soutiens</option>
                            <option value="1">Désengagés</option>
                            <option value="2">Engagés</option>
                            <option value="3">Premières lignes</option>
                        </select>
                    </div>
                    <input type="submit" value="Appliquer" className="mt-4 bg-green-600 text-white"/>
                </form>
            </Modal>
        );

        return (
            <div className={classnames({'cursor-grab': !this.state.isGrab, 'cursor-grabbing': this.state.isGrab, 'opacity-50': player.lp <= 0}, " flex flex-col justify-between my-4 mx-8 items-center")} draggable="true" onDragStart={this.setDrag} onDragEnd={this.endDrag}>
                <div className="flex relative">
                    <button className="h-12 md:h-8 bg-red-600 text-white text-xs md:text-base hover:bg-transparent hover:text-red-600 hover:border-red-600 hover:border absolute rounded-l-lg w-full md:w-1/3 atkBtn battleBtn" onClick={() => this.handleAttack()} title="Attaquer ce personnage"><i className="fas fa-fist-raised"></i></button>
                    <div className={classnames({'border-4 border-green-500': this.props.activePlayer, 'border': !this.props.activePlayer}, "w-12 h-12 md:w-24 md:h-24 rounded-full border-black overflow-hidden z-10")}>
                        <figure className="battleAvatar">
                            <img src="assets/samurai-default.png" alt="avatar" />
                            <figcaption className="">
                                <span title="init"><i className="fas fa-bolt text-purple-500"></i> {player.init}</span>
                                <span title="Points de vie" className="ml-1"><i className="fas fa-heart text-red-500"></i> {player.lp}</span>
                            </figcaption>
                        </figure>
                    </div>
                    <button className="h-12 md:h-8 bg-gray-800 text-white text-xs md:text-base hover:bg-transparent hover:text-gray-800 hover:border-gray-800 hover:border absolute rounded-r-lg w-full md:w-1/3 delBtn battleBtn" onClick={() => this.handleDelete()} title="Supprimer ce personnage"><i className="fas fa-times"></i></button>
                </div>
                <h3 className="text-lg font-bold" title={player.name}>{player.perso}</h3>
                {(this.state.modalATK) ? modalAttack : ''}
                {(this.state.modalMv) ? modalMove : ''}
            </div>
        );
    }
}

export default Player;

/**
 * TODO Appeler l'API
 */
