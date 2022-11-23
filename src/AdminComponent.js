import React, {useState} from 'react';
import Calendar from 'react-calendar';
export const AdminComponent = () => {
    const [value, onChange] = useState(new Date());
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    function valorInterfazA(param){
        if(param){
            return(
                <>
                    <div>
                        <h1 style={{color: "black", fontSize: "3rem"}}>Cambiar cronograma: {value.getDate()} de {meses[value.getMonth()]} del {value.getFullYear()}</h1>
                    </div>
                </>
            );
        }
    };
    
    console.log( value)
    // console.log(value.getDate());
    return(
        <>
            <div>
                {valorInterfazA(value)}
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    );
};