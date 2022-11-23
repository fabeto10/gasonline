import './App.css';

const diasConPlaca = {
  // sun: [3,4],
  1: [3,4],
  2: [5,6],
  3: [7,8],
  4: [9,0],
  5: [1,2],
  6: [3,4],
};

// const ruedaPlaca = () => {
//     let now = new Date().getDay();
//     if( now === 1 ){
//       for(let i in diasConPlaca){
//         if(diasConPlaca[i][0] > 5 ){
//           diasConPlaca[i][0] -= 2;
//         } else{
//           diasConPlaca[i][0] += 4;
//         };

//         if(diasConPlaca[i][1] > 5 ){
//           diasConPlaca[i][1] -= 2;
//         } else{
//           diasConPlaca[i][1] += 4;
//         };
//       };
//     };
//     console.log(diasConPlaca);
//     return diasConPlaca;
// };
const aux = [];
const diaQueToca = 0;
function getPlacasDeHoy(){
  for(let i in diasConPlaca){
    if( Number(i) === new window.Date() ){
      aux.push(diasConPlaca[i]);
      console.log(i);
    };
  };
  console.log(aux);
  // return String(aux[0]);
};  

const dias = ["Domingo", "Lunes", "Martes", "miercoles", "Jueves", "Viernes", "Sabado"];
// getPlacasDeHoy();

function App() {
  getPlacasDeHoy();
  // ruedaPlaca();
  // let aux = [];
  // for(let i in diasConPlaca){
  //   aux.push([i, diasConPlaca[i]]);
  // };
  // console.log(aux);
  return (
    <div style={{width: '20rem', marginTop:'15rem', textAlign:'center'}} className="container-fluid">
          {/* <table className="table table-striped table-bordered table-hover table-dark">
            <thead>
              <tr>
                <th>Dia</th>
                <th>placa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lunes</td>
                <td>{diasConPlaca[1][0] + " - " + diasConPlaca[1][1]}</td>
              </tr>
              <tr>
                <td>martes</td>
                <td>{diasConPlaca[2][0] + " - " + diasConPlaca[2][1]}</td>
              </tr>
              <tr>
                <td>miercoles</td>
                <td>{diasConPlaca[3][0] + " - " + diasConPlaca[3][1]}</td>
              </tr>
              <tr>
                <td>jueves</td>
                <td>{diasConPlaca[4][0] + " - " + diasConPlaca[4][1]}</td>
              </tr>
              <tr>
                <td>viernes</td>
                <td>{diasConPlaca[5][0] + " - " + diasConPlaca[5][1]}</td>
              </tr>
              <tr>
                <td>sabado</td>
                <td>{diasConPlaca[6][0] + " - " + diasConPlaca[6][1]}</td>
              </tr>
            </tbody>
          </table> */}
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
               {dias[0]}
             </h1>
             {/* <p style={{color: 'black', fontSize: "9rem", margin: "auto",  fontFamily: 'Oswald, sans-serif'}}>{getPlacasDeHoy()[0]} - {getPlacasDeHoy()[1]}</p> */}
           </div>
            {
              // aux.map((item) => {
              //   if( Number(item[0]) === new Date().getDay() ){
              //     return(
              //       <div>
              //         <span style={{fontSize: '4rem', color: 'blue'}} className="material-symbols-outlined">
              //          location_on
              //         </span>
              //         <h2 style={{color: 'black'}}>Ciudad Guayana</h2>
              //         <h1 style={{color: 'black', fontSize: "4rem", fontFamily: 'Oswald, sans-serif'}}>
              //           {dias[item[0]]}
              //         </h1>
              //         <p style={{color: 'black', fontSize: "9rem", margin: "auto",  fontFamily: 'Oswald, sans-serif'}}>{item[1][0]} - {item[1][1]}</p>
              //       </div>
              //     );
              //   };
              // })
            }
          </div>
        </div>
  );
}

export default App;
