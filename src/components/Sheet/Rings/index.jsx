import React, { useState} from "react";
import Ring from "./Ring";
import classnames from 'classnames'
import {TRAITS} from "../../../constants/CharacterSheet/translations";

const Rings = ({allTraits, voidPoints, setTrait, setVoid, player, location}) => {
    let displayBonus = useState(false);
    let bonusVoid = useState(0);
    let usedVoid = useState(0);

    //let mobile = window.matchMedia("(max-width: 640px)").matches

    const toggleBonus = displayBonus[1];

    function generateVoidPoints(number) {
        let generated = [];
        for (let i = 1; i < number + 1; i++)
        {
            generated.push(<input type="checkbox" key={'void-'+i} className='mx-1 h-4 w-4' checked={i <= usedVoid[0]} onChange={() => {
                if (usedVoid[0] === i)
                {
                    usedVoid[1](i - 1)
                }
                else
                {
                    usedVoid[1](i)
                }
            }
            }/>)
        }
        return generated;
    }

    return (<div className="w-full lg:w-4/6 flex flex-col items-center">
                {allTraits.map((traits, index) => (
                    <div key={'traits-'+index} className={classnames({'lg:mb-2': index === 0}, "flex flex-col md:flex-row w-full lg:w-auto")}>
                        <Ring trait={traits[0]} reverse={false} element={(index === 0) ? 'Earth' : 'Water'}
                              top={index === 1} lineNumber={index} setTrait={setTrait} player={player}
                              location={location}/>
                        <Ring trait={traits[1]} reverse={true} element={(index === 0) ? 'Air' : 'Fire'}
                              top={index === 1} lineNumber={index} setTrait={setTrait} player={player}
                              location={location}/>
                    </div>
                ))}
                <div className="flex mt-6 lg:-mt-8">
                    <div className="relative flex flex-col items-center text-center">
                        <img src="assets/elements/Void.png" title={TRAITS(location).Void} alt={TRAITS(location).Void}
                             style={{height: '122px', width: '122px'}}
                             onDoubleClick={() => toggleBonus(!displayBonus[0])}/>
                        <input type="number" id="voidElement"
                               className="absolute top-0 w-10 h-10 p-2 rounded-full appearance-none border-2 border-gray-700 text-center text-gray-700"
                               style={{left: '50%', transform: 'translate(-50%, -50%)'}} value={voidPoints}
                               onChange={(e) => {
                                   if (player.xp >= (e.target.value * 6)) {
                                       setVoid(e.target.value)
                                   }
                               }}/>

                        <input type="number" id="voidBonus"
                               className={classnames({
                                   'block': displayBonus[0],
                                   'hidden': !displayBonus[0]
                               }, "absolute w-8 h-8 p-2 rounded-full appearance-none border-2 border-gray-700 text-center text-gray-700")}
                               style={{left: '70%', top: '60%', transform: 'translate(-50%, -50%)'}}
                               value={bonusVoid[0]} onChange={(e) => bonusVoid[1](e.target.value)}/>

                        <div className="mt-2" id="usedVoidPoints">
                            {generateVoidPoints(voidPoints + parseInt(bonusVoid[0]), usedVoid[0])}
                            <span className="block text-xs italic">{TRAITS(location).usedVoid}</span>
                        </div>
                    </div>
                </div>
            </div>);
};

export default Rings

//FIXME Génerer les lignes avec un map ? Faire deux tableaux imbriquer dans le premier ?