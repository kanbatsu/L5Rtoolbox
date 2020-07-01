import React, { Component } from "react";
import * as AppsTypes from '../../constants/Wrap/index'
import classnames from 'classnames';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
        this.nextRound = this.nextRound.bind(this);
        document.addEventListener('keyup', (event) => {
            event.preventDefault();
            if (event.code === 'ArrowRight'){
                this.nextRound();
                //FIXME Only In Battlefield AND without Modal open
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.players !== undefined && prevProps.players !== this.props.players)
        {
            this.setState({players: [...this.props.players].sort((a, b) => b.init - a.init), rounds: this.props.players.length})
        }
    }

    nextRound()
    {
        if (this.props.fight.round < this.state.rounds)
        {
            this.props.actions.nextRound(this.props.fight.round + 1)
        }
        else
        {
            this.props.actions.nextTurn(this.props.fight.turn + 1)
        }
    }

    render() {
        let leftNav, rightNav;

        switch (this.props.app.name) {
            case AppsTypes.BATTLEFIELD:
                if (this.props.fight !== undefined && this.props.players.length > 0 )
                {
                    leftNav = (<div className="w-1/3 md:w-1/6">
                        <span title="Tour"><i className="fas fa-redo" style={{'transform': 'rotate(-90deg)'}}></i></span> : {this.props.fight.turn} | <span title="Round"><i
                        className="fas fa-flag-checkered"></i></span> : {this.props.fight.round }
                    </div>);
                    rightNav = (<div className="w-1/3 md:w-1/6 text-right">
                        <span>{this.props.fight.round !== 0 ? (
                            <span>
                                Au tour de {this.state.players[this.props.fight.round - 1].perso}
                            </span>
                        ) : (
                            <span>
                                Phase de déclaration
                            </span>
                        )
                        } <i className="fas fa-step-forward cursor-pointer" onClick={this.nextRound}></i></span>
                    </div>);
                }
                else
                {
                    leftNav = (<div className="w-1/3 md:w-1/6">
                    </div>);
                    rightNav = (<div className="w-1/3 md:w-1/6 text-right">
                    </div>);
                }
                break;
            case AppsTypes.CHARACTER_SHEET:
                leftNav = (<div className="w-1/3 md:w-1/6">
                </div>);
                rightNav = (<div className="w-1/3 md:w-1/6 text-right">
                    <form action="" className={'ml-auto w-2/3 flex'}>
                        <select id="fighters" className={'rounded-l-lg appearance-none w-3/4'}>
                            {this.props.players.map(perso =>
                                <option value={perso.name} onClick={() => this.props.actions.selectPlayer(perso.name)} key={perso.name}>{perso.name}</option> )}
                        </select>
                        <label htmlFor="fighters" className={'flex justify-center items-center text-black w-1/4 bg-white rounded-r-lg'}>
                            <i className={'fas fa-chevron-down'}></i>
                        </label>
                    </form>
                </div>);
                break;
            default:
                leftNav = (<div className="w-1/3 md:w-1/6">
                </div>);
                rightNav = (<div className="w-1/3 md:w-1/6">
                </div>)
        }

        return (
            <nav className={classnames(this.props.app.navColor+" h-16 w-full text-white flex justify-between items-center px-6 uppercase font-bold text-sm md:text-base")}>
                {leftNav}
                <div className="w-1/3 md:w-1/6 text-center"><i className="fas fa-home cursor-pointer" onClick={() => this.props.actions.selectApp('home')}></i> {this.props.app.title.toUpperCase()}</div>
                {rightNav}
            </nav>
        )
    }
}

export default Navbar;

//<i className="fas fa-flag" onClick={() => this.props.actions.switchLocation()}></i>