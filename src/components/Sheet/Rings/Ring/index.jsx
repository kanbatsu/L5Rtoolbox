import React, { Component } from "react";
import classnames from 'classnames'
import {TRAITS} from "../../../../constants/CharacterSheet/translations";

export default class Ring extends Component{

    calculElementPoint(traits)
    {
        let sorted = [...traits.sort((a, b) => a - b)];
        return sorted[0];
    }

    render() {
        let { trait, element, reverse, lineNumber, location, player } = this.props;

        let mobile = window.matchMedia("(max-width: 640px)").matches
        let tablet = window.matchMedia("(max-width: 768px)").matches

        const settings = {
            Fire: 'red',
            Air: 'yellow',
            Water: 'blue',
            Earth: 'green'
        };

        return (
            <div className={classnames({'sm:flex-row-reverse md:flex-row lg:flex-row-reverse': reverse, 'flex-row md:flex-row-reverse lg:flex-row': !reverse, 'lg:ml-4': lineNumber === 0 && reverse,' lg:ml-10': lineNumber === 1 && reverse, 'lg:mr-10': lineNumber === 1 && !reverse },"relative flex w-full justify-between lg:justify-start lg:w-auto bg-"+settings[element]+"-600 lg:bg-transparent px-6 lg:px-0 pt-2 pb-3 lg:pt-0 lg:pb-0")}>
                <div className={classnames({'items-end': !reverse, 'items-start': reverse}, "flex flex-col justify-center lg:justify-start text-"+settings[element]+"-600")}>
                    {Object.entries(trait).map((tab, index) => (
                        <div key={tab+index} className={classnames({'flex-row-reverse': reverse, 'lg:pr-6': index === 1 && !reverse, 'lg:pl-6': index === 1 && reverse},"flex mt-2 items-center")}>
                            <span className={classnames({'md:mr-1': !reverse, 'md:ml-1 direction-rtl': reverse}, 'text-white lg:text-'+settings[element]+'-600')} >{TRAITS(location)[tab[0]]} :</span>
                            <input type="number" className={"w-8 h-8 p-2 rounded-full appearance-none border-2 border-"+settings[element]+"-600 text-center trait"} value={tab[1]} onChange={(e) => {if (player.xp >= parseInt(e.target.value) * 4 ){this.props.setTrait(tab[0], e.target.value)}}}/>
                        </div>
                    ))}
                </div>

                <img src={"assets/elements/"+element+".png"} alt={element+" Element"} />
                    <input type="number" id={element.toLowerCase()+"Element"}
                           className={classnames({'lg:left-0': reverse, 'lg:right-0': !reverse, 'md:bottom-0': !this.props.top, 'md:top-0': this.props.top, 'top-1/2 y-center': (mobile || tablet), 'left-33': (reverse && mobile) || (!reverse && tablet), 'right-33': (!reverse && mobile) || (reverse && tablet)}, "absolute w-10 h-10 p-2 rounded-full appearance-none border-2 border-"+settings[element]+"-600 text-center text-"+settings[element]+"-600 opacity-100")}
                           disabled="disabled" value={this.calculElementPoint(Object.values(trait))}/>

            </div>
        );
    }
}