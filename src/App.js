import logo from './img/iconWeather/Clouds3.svg';
import './app.scss'

import api from './services/api'

function App() {
  return (
    <div className='ContainerBox'>
      <a className='selectCity'>Calgary</a>
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
      <img className='iconWeather' src={logo}/>
      <p className='descriptionWeather'>nuvens quebradas</p>
    </div>
  );
}

export default App;
