import {useState} from 'react';
import AUDIO from '../../audio/click';


function Lamp({turnOnTheLight}) {

    function handleLightClick() {
        const AppClassName = document.querySelector('.App');
        const soundClick = AUDIO;
        AppClassName.classList.toggle('on')
        soundClick.play()
        turnOnTheLight()
        console.log('clickLamp')
    }

    return (
        <div className="Lamp">
            <div className="Lamp__body">
                <div className="Lamp__wire"></div>
                <div className="Lamp__bulb">
                    <span></span>
                    <span></span>
                </div>
                <label className="Lamp__switch">
                    <input type="checkbox" onChange={handleLightClick} />
                    <span className="slider round"></span>
                    <p>Подсветить важные задачи</p>
                </label>
            </div>
        </div>
    );
}

export default Lamp;