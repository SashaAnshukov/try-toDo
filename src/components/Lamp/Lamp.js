import {useState} from 'react';
import AUDIO from '../../audio/click';


function Lamp() {

    const [Light, setLight] = useState(false)

    function handleLikeClick() {
        const AppClassName = document.querySelector('.App');
        const soundClick = AUDIO;
        AppClassName.classList.toggle('on')
        soundClick.play()
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
                    <input type="checkbox" onChange={handleLikeClick} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Lamp;