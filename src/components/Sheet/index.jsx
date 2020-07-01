import React, { Component } from "react";
import Sidepoints from "./Sidespoints";
import Rings from "./Rings";
import Skills from "./Skills";
import classnames from 'classnames'
import Vantages from "./Vantages";

/**
 * Character Sheet Component
 */


export default class Sheet extends Component{
    constructor(props) {
        super(props);
        this.insight = 0;
        this.calculInsight();
        this.state = {
            tab: 'stuff'
        }
    }

    calculInsight()
    {
        let total = 0;
        let bonus = 0;
        let rings = this.props.player.rings;
        rings.forEach((traits) => {
            traits.forEach((trait) => {
                let sorted = Object.values(trait).sort();
                total = total + sorted[0];
            })
        });

        this.props.player.skills.forEach((skill) => {
            bonus += parseInt(skill.rank);
            skill.abilities.forEach((ability) => {
                if ((ability.includes('réput') !== false || ability.includes('reput') !== false) && ability.indexOf('+') !== -1)
                {
                    let plus = ability.indexOf('+');
                    bonus += parseInt(ability.charAt(plus + 1))
                }
            })
        });

        total = ((total + this.props.player.Void) * 10  + parseInt(bonus));
        this.insight = total
    }

    render() {
        const player  = this.props.player;

        this.calculInsight();

        let element;

        switch (this.state.tab) {
            case "skill":
                element = <Skills addSkill={this.props.actions.addSkill} upSkill={this.props.actions.upSkillRank} player={player} location={this.props.location}/>;
            break;
            case "vantages":
                element = <Vantages player={player} vantages={player.vantages} addVantage={this.props.actions.addVantage}/>;
            break;
            default:
                element = '';
        }


        return (
            <div className="w-11/12 lg:w-2/3 mx-auto flex flex-col rounded bg-white border border-gray-700">
                <div className="flex justify-between my-8 items-center px-6 lg:px-24 flex-wrap">
                    <h2 className="w-full uppercase font-bold text-xl text-center mb-5 lg:mb-0">{player.family+' '+player.name}</h2>
                    <div id="infosPerso" className='flex flex-col w-1/2 md:w-auto md:grid'>
                        <span>Rang : <span>{Math.floor((this.insight - 125) / 25)}</span></span>
                        <span >Expérience : <span>{player.xp} (tot. : {player.xp_total})</span></span>
                        <span>École : <span>{player.school}</span></span>
                        <span>Réputation : <span>{this.insight}</span></span>
                    </div>
                    <div className="md:w-auto flex flex-col items-center relative">
                        <img src={"assets/mons/families/" + player.family + ".png"} alt={player.family} title={'Famille '+player.family} style={{height: '35px', width: '35px', transform: 'translate(-50%,-75%)'}} className="absolute bottom-0 left-0"/>
                        {player.function !== undefined && (
                            <img src={"assets/mons/families/" + player.function + ".png"} title={'Famille '+player.family} alt={'Mon de la famille '+player.family} style={{height: '35px', width: '35px', transform: 'translate(50%,-75%)'}} className="absolute bottom-0 right-0"/>
                            )}
                        <img src={"assets/mons/clans/" + player.clan + ".png"} alt={player.clan} title={'Clan du '+player.clan} style={{height: '122px', width: '122px'}} />
                        <span className="mt-4">Clan : {player.clan}</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center md:items-start mb-4 justify-center md:justify-between ">
                    {player.rings !== undefined &&
                        <Rings allTraits={player.rings} voidPoints={player.Void} setTrait={this.props.actions.setTrait} setVoid={this.props.actions.setVoidPoint} player={player} location={this.props.location}/>
                    }
                    {typeof player.sidePoints === "object" &&
                    <Sidepoints points={player.sidePoints} setSidePoints={this.props.actions.setSidePoints} location={this.props.location}/>
                    }
                </div>
                <div className="flex flex-col mb-4 mt-12 justify-between">
                    <div className="flex w-full px-4 mb-6 justify-around text-xs md:text-base">
                        <button className={classnames({'text-white tab': this.state.tab === 'skill'}, "w-1/5")} onClick={() => this.setState({tab: 'skill'})}>Skill</button>
                        <button className={classnames({'text-white tab': this.state.tab === 'vantages'}, "w-1/5")} onClick={() => this.setState({tab: 'vantages'})}>Dis / Advantages</button>
                        <button className={classnames({'text-white tab': this.state.tab === 'stuff'}, "w-1/5")} onClick={() => this.setState({tab: 'stuff'})}>Stuff</button>
                        <button className={classnames({'text-white tab': this.state.tab === 'misc'}, "w-1/5")} onClick={() => this.setState({tab: 'misc'})}>Misc</button>
                    </div>
                    {element}
                </div>
            </div>
        )
    }
}