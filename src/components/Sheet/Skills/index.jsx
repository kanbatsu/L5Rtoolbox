import React, { Component } from "react";
import classnames from 'classnames';
import { ListSkills, Schools } from "../../../api";
import {TRAITS} from "../../../constants/CharacterSheet/translations";

export default class Skills extends Component {
    constructor(props) {
        super(props);
        let rings = this.props.player.rings.flat();
        rings.push({
            Void: this.props.player.Void
        });
        this.state = {
            adding: false,
            listSkills: ListSkills,
            addResult: [],
            rings: rings,
            searchInput: false,
            skills: this.props.player.skills
        };
        this.displaySearch = [];
        this.searchSkill = this.searchSkill.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.addResult !== this.state.addResult)
        {
            this.displaySearch = this.state.addResult.map((result) => (
                <span className="w-full inline-block pl-3 py-2 bg-white hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => this.handleAdd(result)}>{result.skill}</span>
            ))
        }

        if (prevProps.player !== this.props.player)
        {
            let rings = this.props.player.rings.flat();
            rings.push({
                Void: this.props.player.Void
            });
            this.setState({
                rings: rings,
                skills: this.props.player.skills
            });
        }
    }

    handleAdd(skill)
    {
        skill = {
            ...skill,
            rank: 1
        };
        this.props.addSkill(skill);
        this.toggleInput();
        this.setState({addResult: []});
        this.displaySearch = [];
    }

    handleUp(skill)
    {
        if (this.props.player.xp >= (parseInt(skill.rank) + 1))
        {
            this.props.upSkill(skill);
        }
    }

    toggleInput()
    {
        this.setState({adding: !this.state.adding})
    }

    searchSkill(event)
    {
        event.preventDefault();
        this.setState({
            addResult: this.state.listSkills.filter((skill) => skill.skill.includes(event.target.value))
        })
    }

    checkSkillBySchool(name)
    {
        let school = Schools.find((school) => school.name === this.props.player.school);
        return (school.skills.find((skill) => skill.name === name) !== undefined) ? true : false;
    }

    filterSkill(event)
    {
        this.setState({skills: this.props.player.skills.filter((skill) => skill.skill.includes(event.target.value))})
    }

    calculRoll(rank, trait)
    {
        let filteredRing = this.state.rings.find((ring) => ring.hasOwnProperty(trait));

        return (parseInt(filteredRing[trait]) + parseInt(rank))+'g'+parseInt(filteredRing[trait]);
    }

    render() {

        return (
            <div className="w-full">
                <div className={"w-11/12 flex mx-auto my-6"}>
                    <div className={'flex'}>
                        <input type="text" id={'vantageSearch'}
                               placeholder={"Rechercher un (dés)avantage"}
                               className={classnames({'w-56 pl-4 border-l': this.state.searchInput, 'w-0': !this.state.searchInput}, "py-1 border-t border-b text-sm rounded-l-full hover:border-gray-700")}
                               onfocusout={() => this.setState({searchInput: !this.state.searchInput})}
                               onChange={(e) => this.filterSkill(e)}/>
                        <label
                            htmlFor={'vantageSearch'}
                            className={classnames({'border-t border-b border-r rounded-r-full': this.state.searchInput, 'border rounded-full': !this.state.searchInput}, ' h-full px-2 text-gray-500 text-sm flex items-center cursor-pointer hover:border-gray-700 hover:text-black')}
                            onClick={() => this.setState({searchInput: !this.state.searchInput})}>
                            <i className="fas fa-search"></i>
                        </label>
                    </div>
                    <button
                        className="h-6 w-6 rounded-full bg-gray-300 text-white text-center align-middle ml-auto mr-6 my-auto hover:bg-gray-700"
                        id="addVantage" onClick={() => this.toggleInput()}>+
                    </button>
                </div>
                <div className="relative w-11/12 mx-auto mt-2 flex flex-col z-20" id="divAddSkill">
                    <input type="text" id="inputAddSkill" className={classnames({'hidden': !this.state.adding}, "border-b border-black w-full")} placeholder="Rechercher un skill" onChange={this.searchSkill}/>
                    <div className="absolute w-full" style={{'top': '100%'}}>
                        {this.displaySearch}
                    </div>
                </div>
                <div className="w-11/12 grid mx-auto mt-6" id="skillsGrid">
                    <div>
                        <span className="th-rotation text-center">Comp.<br />d'école</span>
                        <span className="text-center">Compétence</span>
                        <span className="text-center">Rang</span>
                        <span className="text-center">Trait</span>
                        <span className="text-center">Jet</span>
                        <span className="text-center">Spécialisation et Capacités de Maîtrise</span>
                    </div>
                    {this.state.skills.map((skill) => {
                        let infosSkill = ListSkills.find((skillItem) => skillItem.skill === skill.skill);
                        return (
                            <div className="my-4">
                                <input className="schoolInput" type="checkbox" checked={this.checkSkillBySchool(skill.skill)} disabled="disabled" />
                                <span className="pl-2 border-b border-gray-800">{skill.skill}</span>
                                <span className="text-center border-b border-gray-800" onDoubleClick={() => this.handleUp(skill)}>{skill.rank}</span>
                                <span className="text-center border-b border-gray-800">{TRAITS('FR')[infosSkill.trait]}</span>
                                <span className="text-center border-b border-gray-800">{this.calculRoll(skill.rank, infosSkill.trait)}</span>
                                <div className="abilities">
                                    {skill.abilities.map((ability, index) => {
                                        return (
                                            <span className="pl-2 border-b border-gray-800">{ability}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                <button
                    className="block h-8 w-8 rounded-full mt-12 bg-blue-300 text-white text-2xl text-center flex items-center justify-center mx-auto"
                    id="addSkill" onClick={() => this.toggleInput()}>+
                </button>
            </div>
            </div>
        )
    }
}