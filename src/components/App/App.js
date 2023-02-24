import {useState} from 'react';
import Main from '../Main/Main';
import Lamp from '../Lamp/Lamp';


function App() {

  const [light, setLight] = useState(false)

  function turnOnTheLight() {
    setLight(!light)
    //console.log(light)
  }


  return (
    <div className="App">
      <Lamp turnOnTheLight={turnOnTheLight}/>
      <Main light={light}/>
    </div>
  );
}

export default App;