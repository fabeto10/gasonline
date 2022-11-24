import React from 'react';
const diasConPlaca = {
  0: [3,4],
  1: [3,4],
  2: [5,6],
  3: [7,8],
  4: [9,0],
  5: [1,2],
  6: [3,4],
};
    
  let diaQueToca = 0;
    
  const aux = [];
    
  function getPlacasDeHoy(){
        const dia = new Date();
        for(let i in diasConPlaca){
        if(dia.getDay() === Number(i)){
            aux.push(diasConPlaca[i]);
            diaQueToca = Number(i);
        } ;
        };
        console.log(aux);
    };  
  const dias = ["Domingo", "Lunes", "Martes", "miercoles", "Jueves", "Viernes", "Sabado"];
  
  
  export function UserComponent() {
    getPlacasDeHoy();
    return (
      <>
      <div style={{width: '20rem', marginTop:'4rem', textAlign:'center', zIndex: '0'}} className="container-fluid">
            <div style={{
              color: "white",
              margin: "button",
            }}>
              <div>
              <span style={{fontSize: '4rem', color: 'blue'}} className="material-symbols-outlined">
                location_on
              </span>
              <h2 style={{color: 'black'}}>Ciudad Guayana</h2>
              <h1 style={{color: 'black', fontSize: "4rem", fontFamily: 'Oswald, sans-serif'}}>
                {dias[diaQueToca]}
              </h1>
              <div>
              <p style={{color: 'black', fontSize: "9rem", margin: "auto",  fontFamily: 'Oswald, sans-serif'}}>{aux[0][0]} - {aux[0][1]}</p>
            </div>
            </div>
            </div>
            <span className="material-symbols-outlined">
              oil_barrel
            </span>
          </div>
        </>
    );
  };
