import React from 'react'
import {useCity} from '../../context/cityWeather'
import './styled.scss'


function ModalSelectCity({onClose = () => {}}) {
    const {setCity} = useCity()

    return (
        <div className='modalBody'>
            <button className='headerModal' onClick={onClose}>
                <label></label>
                <p>Select your city</p>
            </button>
            <ul className='listCitys'>
                <li>
                    <button onClick={() => setCity('Calgary')}>Calgary</button>
                </li>
                <li>
                    <button onClick={() => setCity('Vancuver')}>Vancuver</button>
                </li>
                <li>
                    <button onClick={() => setCity('Toronto')} >Toronto</button>
                </li>
                <li>
                    <button onClick={() => setCity('João Pessoa')}>João Pessoa</button>
                </li>
                <li>
                    <button onClick={() => setCity('Curitiba')}>Curitiba</button>
                </li>
            </ul>
        </div>
    );
  }
  
  export default ModalSelectCity;