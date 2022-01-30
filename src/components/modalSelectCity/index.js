import React from 'react'
import './styled.scss'

function ModalSelectCity({onClose = () => {}}) {
    console.log("apenas o retorno")
    return (
        <div className='modalBody'>
            <a className='headerModal' onClick={onClose}>
                <label></label>
                <p>Select your city</p>
            </a>
            <ul className='listCitys'>
                <li>
                    <a>Calgary</a>
                </li>
                <li>
                    <a>Vancuver</a>
                </li>
                <li>
                    <a>Toronto</a>
                </li>
                <li>
                    <a>João Pessoa</a>
                </li>
                <li>
                    <a>Curitiba</a>
                </li>
            </ul>
        </div>
    );
  }
  
  export default ModalSelectCity;