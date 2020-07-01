import React, {useEffect, useState} from "react";
import classnames from 'classnames';
import { ListVantages } from "../../../api";


/**
 {
  name: Calme,
  type: 'Advantage',
  cat: 'Mental',
  cost: '-2',
  desc: 'text',
  bonus: ''
 }
 */

const Vantages = ({vantages, player, addVantage}) => {

    let advantages = useState(vantages.filter((vantage) => vantage.type === 'Advantage'));
    let setAdvantages = advantages[1];

    let disadvantages = useState(vantages.filter((vantage) => vantage.type === 'Disadvantage'));
    let setDisadvantages = disadvantages[1];

    useEffect(() => {
            setAdvantages(vantages.filter((vantage) => vantage.type === 'Advantage'));
            setDisadvantages(vantages.filter((vantage) => vantage.type === 'Disadvantage'));
    }, [vantages, setAdvantages, setDisadvantages]);

    let searchInput = useState(false);

    let addInput = useState(false);

    let addResults = useState([]);

 return (
     <div className={"w-11/12 mx-auto"}>
            <div className={"w-full flex"}>
                <div className={'w-full flex'}>
                    <input type="text" id={'vantageSearch'}
                           placeholder={"Rechercher un (dés)avantage"}
                           className={classnames({'w-56 pl-4 border-l': searchInput[0], 'w-0': !searchInput[0]}, "py-1 border-t border-b text-sm rounded-l-full")}
                           onfocusout={() => searchInput[1](!searchInput[0])}
                           onChange={(e) => {
                               advantages[1](vantages.filter((vantage) => vantage.type === 'Advantage' && vantage.name.includes(e.target.value)));
                               disadvantages[1](vantages.filter((vantage) => vantage.type === 'Disadvantage' && vantage.name.includes(e.target.value)))
                           }}/>
                    <label
                        htmlFor={'vantageSearch'}
                        className={classnames({'border-t border-b border-r rounded-r-full': searchInput[0], 'border rounded-full': !searchInput[0]}, ' h-full px-2 text-gray-500 text-sm flex items-center cursor-pointer')}
                        onClick={() => searchInput[1](!searchInput[0])}>
                        <i className="fas fa-search"></i>
                    </label>
                </div>
                <button
                    className="h-6 w-6 rounded-full bg-gray-300 text-white text-center align-middle ml-auto mr-6 my-auto"
                    id="addVantage" onClick={() => addInput[1](!addInput[0])}>+
                </button>
            </div>
             <div className="relative w-11/12 mx-auto mt-2 flex flex-col z-20" id="">
                 <input type="text" id="inputAddSkill" className={classnames({'hidden': !addInput[0]}, "border-b border-black w-full")} placeholder="Rechercher un avantage"
                        onChange={(e) => {
                            e.preventDefault();
                            addResults[1](ListVantages.filter((vantage) => vantage.name.includes(e.target.value)))
                        }}/>
                 <div className="absolute w-full" style={{'top': '100%'}}>
                     {addResults[0].map((vantage) => (
                         <span className="w-full inline-block pl-3 py-2 bg-white hover:bg-gray-600 hover:text-white cursor-pointer" onClick={() => {addVantage(vantage);addInput[1](!addInput[0]);addResults[1]([]);}}>{vantage.name}</span>
                     ))}
                 </div>
             </div>
             {advantages[0].length > 0 && <h4 className={"text-center mb-4 mt-8"}>Avantages</h4>}
             {advantages[0].length > 0 && <div className={"w-full flex vantage-grid"}>
                 <span className={'text-center'}>Nom</span>
                 <span className={"text-center"}>Catégorie</span>
                 <span className={"text-center"}>Coût</span>
                 <span className={"text-center"}>Bonus</span>
             </div>}
             {advantages[0].map((advantage, index) => (
                 <div className={classnames({'bg-gray-300': (index % 2) !== 0}, "w-full flex vantage-grid p-4")}>
                     <span className={'pl-2 cursor-pointer'} onClick={(e) => {
                         let span = e.target.parentNode.querySelector('.vantage-desc');
                         if(span.style.height === 'auto')
                         {
                             span.style.height = '';
                         }
                         else
                         {
                             span.style.height = 'auto';
                         }}}>{advantage.name}</span>
                     <span className={'text-center'}>{advantage.cat}</span>
                     <span className={'text-center'}>- {advantage.cost}</span>
                     <span className={'pl-2 text-sm'}>{advantage.bonus.text}</span>
                     <span className={"vantage-desc"}>{advantage.desc}</span>
                 </div>
             ))}
            {/* ----- Disadvantages ------*/}
             {disadvantages[0].length > 0 && <h4 className={"text-center mb-4 mt-8"}>Désavantages</h4>}
             {disadvantages[0].length > 0 &&
             <div className={"w-full flex vantage-grid"}>
                 <span className={'text-center'}>Nom</span>
                 <span className={"text-center"}>Catégorie</span>
                 <span className={"text-center"}>Coût</span>
                 <span className={"text-center"}>Bonus</span>
             </div>
             }
             {disadvantages[0].map((advantage, index) => (
                 <div className={classnames({'bg-gray-300': (index % 2) !== 0}, "w-full flex vantage-grid p-4")}>
                 <span className={'pl-2 cursor-pointer'} onClick={(e) => {
                 let span = e.target.parentNode.querySelector('.vantage-desc');
                 if (span.style.height === 'auto') {
                     span.style.height = '';
                 } else {
                     span.style.height = 'auto';
                 }
             }}>{advantage.name}</span>
                 <span className={'text-center'}>{advantage.cat}</span>
                 <span className={'text-center'}>+ {advantage.cost}</span>
                 <span className={'pl-2 text-sm'}>{advantage.bonus.text}</span>
                 <span className={"vantage-desc"}>{advantage.desc}</span>
                 </div>
                 ))}
     </div>
 )
};

export default Vantages;