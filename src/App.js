import { useEffect, useState } from 'react';
import axios from 'axios'

import ModalSelectCity from './components/modalSelectCity'
import {useCity} from './context/cityWeather'

import Atmosphere from './img/iconWeather/Atmosphere.svg';
import Clouds1 from './img/iconWeather/Clouds1.svg';
import Cloud2 from './img/iconWeather/Clouds2.svg';
import Clouds3 from './img/iconWeather/Clouds3.svg';
import Clear from './img/iconWeather/Clear.svg';
import Rain1 from './img/iconWeather/Rain1.svg';
import Rain2 from './img/iconWeather/Rain2.svg';
import Snow from './img/iconWeather/Snow.svg';
import Thunderstorm from './img/iconWeather/Thunderstorm.svg';

import './app.scss'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState({}) 
  const {city} = useCity()
  const [idWeatherType, setIdWeatherType] = useState()

  useEffect(() => {
    const apiKey = "f1528275ba90d8b0f63b16b770aecc82"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${apiKey}`
    
    axios.get(url).then((response) => {
      setData(response.data)
      setIdWeatherType(response.data.weather[0].id)

    })
    
  }, [city] )
  

  return (
      <div className='ContainerBox'>
        {openModal ? <ModalSelectCity onClose={() => setOpenModal(false)}/> : null}
        <button className='selectCity' onClick={() => setOpenModal(true)}>
          {data.name}
        </button>
        <div className='displayTemperature'>
          <div className='temperatureVariable'>
            <h3>
              {data.main ? <>{data.main.temp_min.toFixed()}</> : null}
            </h3>
            <label className='ellipseCelsius'></label>
            <p>Min</p>
          </div>
          <div className='temperature'>
            <h3>
              {data.main ? <>{data.main.temp.toFixed()}</> : null}
            </h3>
            <label className='ellipseCelsius'></label>
          </div>
          <div className='temperatureVariable'>
            <h3>
             {data.main ? <>{data.main.temp_max.toFixed()}</> : null}
            </h3>
            <label className='ellipseCelsius'></label>
            <p>Max</p>
          </div>
        </div>

        {(() => {
          switch (true) {
            case (idWeatherType === 802): return <img className='iconWeather' src={Clouds1} alt=""/>
            case (idWeatherType === 801): return <img className='iconWeather' src={Clouds3} alt=""/>
            case (idWeatherType === 800): return <img className='iconWeather' src={Clear} alt=""/>
            case (idWeatherType >= 803 && 804 <= idWeatherType): return <img className='iconWeather' src={Cloud2} alt=""/>
            case (idWeatherType >= 701 && 781 <= idWeatherType): return <img className='iconWeather' src={Atmosphere} alt=""/>
            case (idWeatherType >= 600 && 622 <= idWeatherType): return <img className='iconWeather' src={Snow} alt=""/>
            case (idWeatherType >= 300 && 321 <= idWeatherType): return <img className='iconWeather' src={Rain1} alt=""/>
            case (idWeatherType >= 500 && 531 <= idWeatherType): return <img className='iconWeather' src={Rain2} alt=""/>
            case (idWeatherType >= 200 && 232 <= idWeatherType): return <img className='iconWeather' src={Thunderstorm} alt=""/>
            default: return <img className='iconWeather' src={Clouds1} alt=""/>
          }
        })()}

        <p className='descriptionWeather'>
          {data.weather ? <>{data.weather[0].description}</> : null}
        </p>
      </div>
  );
}

export default App;