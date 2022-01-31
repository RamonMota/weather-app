import React from 'react'
import {useCity} from '../../context/cityWeather'
import './styled.scss'


function ModalSelectCity({onClose = () => {}}) {
    const {setCities} = useCity()

    const selectCityWeather = (e) => {
        setCities(e.target.value)
        onClose()
    }

    return (
        <div className='modalBody'>
            <button className='headerModal' onClick={onClose}>
                <label></label>
                <p>Select your city</p>
            </button>
            <ul className='listCities'>
                <li>
                    <button value="Amsterdam" onClick={selectCityWeather}>Amsterdam</button>
                </li>
                <li>
                    <button value="Vancouver" onClick={selectCityWeather}>Vancouver</button>
                </li>
                <li>
                    <button value="Toronto" onClick={selectCityWeather}>Toronto</button>
                </li>
                <li>
                    <button value="California" onClick={selectCityWeather}>California</button>
                </li>
                <li>
                    <button value="Curitiba" onClick={selectCityWeather}>Curitiba</button>
                </li>
            </ul>
        </div>
    );
  }
  
  export default ModalSelectCity;