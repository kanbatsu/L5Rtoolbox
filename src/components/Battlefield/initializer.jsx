/**
 * Mass battle Initializer
 * TODO Adding PNJ
 */

import React, {useState} from "react";
import Modal from "../Modal";
import classnames from "classnames";

const Initializer = ({players, initMassBattle}) => {
    let playersToAdd = useState([]);

    let tempPlayer = useState({name: ''});
    let displayModal = useState(false)

    let compModal = (<Modal title={'Ajout de '+tempPlayer[0].name+' : quelques infos supplémentaires'}>
        <i className="fas fa-times absolute right-0 top-0 mr-5 mt-5 cursor-pointer" onClick={() => displayModal[1](false)}></i>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            addToQueue(tempPlayer[0], e.target[0].value, e.target[1].value, e.target[2].checked);
            displayModal[1](false)
        }}>
            <div className="my-2 flex">
                <label htmlFor="position">Position :</label>
                <select name="position" id="position" required className="appearance-none border-t border-b focus:border-blue-500 ml-4" style={{flexGrow: '0.8'}}>
                    <option value="0">Soutiens</option>
                    <option value="1">Désengagés</option>
                    <option value="2">Engagés</option>
                    <option value="3">Premières lignes</option>
                </select>
            </div>
            <div className={'flex my-4'}>
                <div className="flex px-2 w-1/2">
                    <label htmlFor="init">Initiative :</label>
                    <input type="number" className={'w-1/3 border-b text-right ml-4'} id="init" name="init" min="0" required/>
                </div>
                <div className="flex px-2 w-1/2">
                    <label htmlFor="enemy">Ennemi :</label>
                    <input type="checkbox" className={'ml-4'} id="enemy" name="enemy"/>
                </div>
            </div>
            <input type="submit" value="Ajouter" className="mt-4 bg-blue-600 text-white p-4 rounded-lg"/>
        </form>
    </Modal>);

    function addToQueue(player, position, init, enemy) {
        let toPush = {
            id: playersToAdd[0].length,
            name: player.player,
            perso: player.name,
            position: parseInt(position),
            lp: parseInt(Object.values(player.rings[0][0]).sort((a, b) => a -b)[0]) * 19,
            init: parseInt(init),
            enemy: enemy
        };

        playersToAdd[1]([...playersToAdd[0],toPush]);
    }

    function handleInit(name) {
        if (playersToAdd[0].length > 0)
        {
            initMassBattle(name, playersToAdd[0])
        }
        else
        {
            alert('Vous devez ajouter au moins un personnage à la bataille');
        }
    }

    return (
        <div className={'w-1/2 mx-auto text-center pt-12'}>
            <h3 className={'uppercase text-lg'}>Selection des personnages</h3>
            <p className={'px-4 mt-4 text-left'}>Veuillez selectionner les personnages qui prendront part à cette bataille de masse, il vous sera demandé pour chaque personnage l'initiative obtenu au jet de dés</p>
            <div className={'flex flex-wrap w-full px-4 mt-8'}>
                {players.map((player) => {
                    let alreadyInQueue = playersToAdd[0].findIndex((item) => item.perso === player.name) !== -1
                    return (
                        <div className={'mx-4'} key={player.name}>
                            <figure>
                                <div className={classnames({'thumb-add-battle': alreadyInQueue, 'cursor-pointer': !alreadyInQueue}, 'h-24 w-24 rounded-full relative overflow-hidden')}
                                     onClick={() => {
                                         if (!alreadyInQueue)
                                         {
                                             tempPlayer[1](player);
                                             displayModal[1](true);
                                         }
                                     }}>
                                    <img src="assets/samurai-default.png" alt="avatar"/>
                                </div>
                                <figcaption className="">
                                    <span>{player.name}</span>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
                <div className={'mx-4'}>
                    <figure>
                        <div className={classnames('h-24 w-24 rounded-full relative overflow-hidden flex justify-center items-center bg-blue-500')}
                             onClick={() => {

                                 /*if (!alreadyInQueue)
                                 {
                                     tempPlayer[1](player);
                                     displayModal[1](true);
                                 }*/
                             }}>
                            <i className="fas fa-plus text-5xl text-white"></i>
                        </div>
                        <figcaption className="">

                        </figcaption>
                    </figure>
                </div>
            </div>
            {displayModal[0] === true ? compModal : ''}
            <button onClick={() => {
                let name = prompt('Nom de la partie');
                handleInit(name);
            }} className='my-2 border'>Lancer la bataille</button>
        </div>)
};

export default Initializer;