import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './components/userComponent.css'

const diasConPlaca = {
    enero:{},
    febrero:{},
    marzo:{},
    abril:{}, 
    mayo:{}, 
    junio:{},
    julio:{},
    agosto:{},
    septiembre:{},
    octubre:{},
    noviembre:{},
    diciembre:{},
  };


export const AdminComponent = () => {
    const [value, onChange] = useState(new Date());
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    // console.log( value)
    // console.log(value.getDate());
    const [placa, setPlaca] = useState('');
    
    return(
        <>  
            {
                value 
                ?
                <div>
                    <h1 style={{color: "black", fontSize: "3rem"}}>Cambiar placas: {value.getDate()} de {meses[value.getMonth()]} del {value.getFullYear()}: </h1>
                    <div className='opciones-admin'>
                        <div>
                            <input type={"text"} value={placa} onChange={(e) => setPlaca(e.target.value)}/>
                            <button onClick={(e) => setPlaca(placa)}>
                                Agregar placa
                            </button>
                        </div>
                        <div>
                            <p style={{color: 'black', fontSize: "9rem", margin: "auto",  fontFamily: 'Oswald, sans-serif'}}>{placa} - {placa}</p>
                        </div>
                    </div>
                </div>
                :
                <h1>Cambiar placas:</h1>

            }
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    );
};