import {useState} from 'react';

function Lamp() {

    const [Light, setLight] = useState(false)

    return (
        <div className="Lamp">
            <div className="Lamp__body">
                <div className="Lamp__wire"></div>
                <div className="Lamp__bulb">
                    <span></span>
                    <span></span>
                </div>
                <label className="Lamp__switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Lamp;