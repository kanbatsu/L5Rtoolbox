import React, {Component} from "react";
import classnames from 'classnames'
import Modal from "../Modal";

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalSwitch: false
        };
        this.handleSwitchGame = this.handleSwitchGame.bind(this)
    }
    handleSwitchGame() {
        this.setState({
            modalSwitch: !this.state.modalSwitch
        })
    }

    render() {
        const { games } = this.props;

        let modalSwitch = (<Modal title="Veuillez selectionner une partie :">
                <i className="fas fa-times absolute right-0 top-0 mr-5 mt-5 cursor-pointer" onClick={() => this.handleSwitchGame()}></i>
                <span>Vous êtes actuellement sur la partie : {games.game !== undefined ? games.game.name : ''}</span>
                <form action="" className="flex flex-col py-2 mt-4" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.actions.selectGame(e.target[0].value)
                    this.setState({modalSwitch: false})
                }}>
                    <div className="flex">
                        <div id="flex-label-input" className="px-2">
                            <label htmlFor="parties">Parties en cours :</label>
                            <select name="parties" id="">
                                {!Array.isArray(games) && games.games.map((game) => (
                                    <option value={game.name} key={game.name}>{game.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <input type="submit" value="Selectionner" className="mt-4 bg-gray-800 text-white"/>
                </form>
            </Modal>
        );

        //(Terre * 5) + Terre * 14

        let apps = this.props.apps.filter(app => app.name !== 'home');

        let battles = (this.props.battles !== undefined) ? this.props.battles : [];

        return (
            <div className="flex h-full w-11/12 md:w-3/4 justify-center items-center mx-auto flex-wrap ">
                {apps.length >= 0 && apps.map((app) =>
                    <div className={classnames(app.color, "home-item w-20 h-20 text-xs md:w-40 md:h-40 md:text-base rounded-lg mx-3 md:mx-8 text-white flex flex-col items-center cursor-pointer")} key={app.name} onClick={() => this.props.actions.selectApp(app.name)}>
                        <i className={app.icon}></i>
                        <h5>{app.title.toUpperCase()}</h5>
                    </div>
                )}

                {Array.isArray(games) && games.map((game) => {
                    return (<div
                        className={classnames("home-item bg-gray-800 w-20 h-20 text-xs md:w-40 md:h-40 md:text-base rounded-lg mx-3 md:mx-8 text-white flex flex-col items-center cursor-pointer")}
                        onClick={() => this.props.actions.selectGame(game.name)} key={game.name}>
                        <i className={game.icon}></i>
                        <h5>{game.name.toUpperCase()}</h5>
                    </div>
                    )})
                }

                {!Array.isArray(games) && (
                    <div className={classnames("home-item bg-gray-800 w-20 h-20 text-xs md:w-40 md:h-40 md:text-base rounded-lg mx-3 md:mx-8 text-white flex flex-col items-center cursor-pointer")}
                            onClick={() => this.handleSwitchGame()}>
                            <i className="fas fa-exchange-alt"></i>
                            <h5>CHANGER DE PARTIE</h5>
                        </div>
                    )
                }

                <div className={'w-full flex justify-center flex-wrap'}>
                    {battles.length > 0 && <h3 className="w-full text-center my-4">Batailles de masse en cours</h3>}
                    {battles.length > 0 && battles.map((battle) =>
                        <div key={battle.name} className={classnames("bg-red-600 home-item w-40 h-40 rounded-lg mx-8 text-white flex flex-col items-center cursor-pointer")} onClick={() => this.props.actions.selectMassBattle(battle.name)}>
                            <i className="fas fa-users"></i>
                            <h5>{battle.name.toUpperCase()}</h5>
                        </div>
                    )}
                </div>

                {(this.state.modalSwitch) ? modalSwitch : ''}
            </div>
        );
    }
}