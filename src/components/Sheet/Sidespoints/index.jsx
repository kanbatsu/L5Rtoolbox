import React, { Component } from "react";
import classnames from 'classnames';
import {SIDE_POINTS} from "../../../constants/CharacterSheet/translations";

export default class Sidepoints extends Component{

    constructor(props) {
        super(props);
        this.state = [
            Object.entries(props.points).map((map) => {
                return {
                    name: map[0],
                    rank: this.getRankAndPoint(map[1])[0],
                    point: this.getRankAndPoint(map[1])[1],
                    temp: this.getRankAndPoint(map[1])[1]
                }
            })
        ];
        this.handleHover = this.handleHover.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.setRankAndPoint = this.setRankAndPoint.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.points !== this.props.points)
        {
            this.setState([
                Object.entries(this.props.points).map((map) => {
                    return {
                        name: map[0],
                        rank: this.getRankAndPoint(map[1])[0],
                        point: this.getRankAndPoint(map[1])[1],
                        temp: this.getRankAndPoint(map[1])[1]
                    }
                })
            ])
        }
    }

    handleHover(name, value)
    {
        let newState = this.state[0].map((state) => {
            return state.name === name ? {
                ...state,
                temp: value
            } : state
        });

        this.setState([newState]);
    }

    handleOut(name) {
        let newState = this.state[0].map((state) => {
            return state.name === name ? {
                ...state,
                temp: 0
            } : state
        });

        this.setState([newState]);
    }

    getRankAndPoint(total)
    {
        let splitted = total.toString().split('.');
        if (splitted.length > 1)
        {
            return splitted
        }
        else if(splitted.length === 1)
        {
            return [splitted[0], 0]
        }
    }

    setRankAndPoint(name, index)
    {
        let value = 0;

        if (index === 0 || index === 10)
        {
            if (index === 0)
            {
                value = (this.state[0].find((side) => side.name === name).rank - 1)+'.9';
            }
            else
            {
                value = (parseInt(this.state[0].find((side) => side.name === name).rank) + 1)+'.0';
            }
        }
        else
        {
            value = this.state[0].find((side) => side.name === name).rank+'.'+index;
        }

        this.props.setSidePoints(name, parseFloat(value))
    }

    generatePoints(name, points, temp)
    {
        let spans = [];
        for (let i = 1; i < 10; i++)
        {
            spans.push(
                <span key={name+i} className={
                    classnames({'bg-gray-900': i <= parseInt(points), 'bg-gray-500': i <= parseInt(temp)}, 'h-3 w-3 border border-gray-700 rounded-full mx-1 mt-2 cursor-pointer')
                }
                onMouseOver={() => this.handleHover(name, i)}
                onMouseLeave={() => this.handleOut(name)}
                onClick={() => this.setRankAndPoint(name, i)}
                title={i}>
                </span>
            )
        }
        return spans;
    }

    render() {



        const starLoop = (rank) => {
            const toReturn = [];

            for (let i = 0; i < rank; i++) {
                toReturn.push(<div key={'rank-'+i} className='bloc md:hidden absolute w-full h-full top-0' style={{transform: 'rotateZ('+i*40+'deg)'}}>
                    <i className="fas fa-circle text-red-800" style={{transform: 'translateY(-225%)', fontSize: '.40rem'}}></i>
                </div>);
            }
            return toReturn;
        };

        return (
            <div className="w-full lg:w-1/4 flex flex-row md:flex-col justify-around md:border-4 border-gray-700 rounded-sm py-8 text-center items-center md:mr-10">
                {this.state[0].map((spec) => (
                        <div key={spec.name} className='relative'>
                            <span className='hidden md:block'>{SIDE_POINTS(this.props.location)[spec.name]} ({spec.rank})</span>
                            <span className='flex md:hidden border-2 border-red-800 rounded-full h-12 w-12 justify-center items-center' title={spec.name+' : '+spec.rank+'.'+spec.point}>{SIDE_POINTS(this.props.location)[spec.name].slice(0,1).toUpperCase()}</span>
                            {starLoop(spec.rank)}
                            <div className="md:flex mt-2 hidden" title={spec.name}>
                                <span className={
                                    classnames('h-3 w-3 fas fa-minus-circle rounded-full mx-1 mt-2 cursor-pointer text-xs text-gray-500 hover:text-red-900')
                                }
                                      onMouseOver={() => this.handleHover(spec.name, 0)}
                                      onMouseLeave={() => this.handleOut(spec.name)}
                                      onClick={() => this.setRankAndPoint(spec.name, 0)}
                                      title={'Rank Down'}>
                                </span>
                                {this.generatePoints(spec.name, spec.point, spec.temp)}
                                <span className={
                                      classnames('h-3 w-3 fas fa-plus-circle rounded-full mx-1 mt-2 cursor-pointer text-xs text-gray-500 hover:text-gray-900')
                                      }
                                      onMouseOver={() => this.handleHover(spec.name, 10)}
                                      onMouseLeave={() => this.handleOut(spec.name)}
                                      onClick={() => this.setRankAndPoint(spec.name, 10)}
                                      title={'Rank Up'}>
                                </span>
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}