import React, { useState} from 'react';
import Calendar from 'react-calendar';
import './components/userComponent.css'
// let cronograma = {
//     noviembre:{
//         '2022': {
//             '26': '3 - 4',
//         },
//     },
// };

const ordenPlacas = ["1 - 2", "3 - 4", "5 - 6", "7 - 8", "9 - 0"];
export const AdminComponent = () => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const [ placa, setPlaca ] = useState("")
    const [ value, onChange ] = useState(new Date());
    function exportPlacas() {
        let year = value.getFullYear();
        let yearStr = toString(year);
        let monthUpper = meses[value.getMonth()];
        let monthLower = monthUpper.toLowerCase();
        sessionStorage.setItem(yearStr, monthLower);
        sessionStorage.getItem(monthLower);
    };
    return(
        <div style={{zIndex: '0'}} >  
            {
                value 
                ?
                <div>
                    <h1 style={{color: "black", fontSize: "3rem"}}>Cambiar placas: {value.getDate()} de {meses[value.getMonth()]} del {value.getFullYear()}: </h1>
                    <div className='opciones-admin'>
                        <div>
                            <select id="placa" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setPlaca(e.target.value)}>
                                <option selected>{"Pares de placas"}</option>
                                {
                                    ordenPlacas.map((item, index) => {
                                        return(
                                            <option key={index}>{item}</option>
                                        );
                                    })
                                }
                            </select>
                            <button onClick={exportPlacas}>
                                Agregar placa
                            </button>
                        </div>
                        <div>
                            <h4>Registro de datos datos: </h4>
                            <p></p>
                            <p style={{color: 'black', fontSize: "9rem", margin: "auto",  fontFamily: 'Oswald, sans-serif'}}>{placa}</p>
                        </div>
                    </div>
                </div>
                :
                <h1>Cambiar placas:</h1>

            }
            <div>
                <Calendar onChange={onChange} value={value} />
                {/* {
                } */}
            </div>
        </div>
    );
};