import { useState } from 'react';
import ModalSelectCity from './components/modalSelectCity'
import logo from './img/iconWeather/Clouds3.svg';
import './app.scss'
import {useCity} from './context/cityWeather'


function App() {
  const [openModal, setOpenModal] = useState(false)
  const {city} = useCity()
  
  return (
    
      <div className='ContainerBox'>
        { openModal ? <ModalSelectCity onClose={() => setOpenModal(false)}/> : null}
        <button className='selectCity' onClick={() => setOpenModal(true)}>{city}</button>
        <div className='displyTemperature'>
          <div className='temperatureVariable'>
            <h3>21</h3>
            <label className='elicpeCelsius'></label>
            <p>Min</p>
          </div >
          <div className='temperature'>
            <h3>28</h3>
            <label className='elicpeCelsius'></label>
          </div>
          <div className='temperatureVariable'>
            <h3>35</h3>
            <label className='elicpeCelsius'></label>
            <p>Max</p>
          </div>
        </div>
        <img className='iconWeather' src={logo} alt="descrição imagem"/>
        <p className='descriptionWeather'>nuvens quebradas</p>
      </div>
  );
}

export default App;
