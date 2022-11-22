import './App.css';

const diasConPlaca = {
  // sun: [3,4],
  mon: [3,4],
  tue: [5,6],
  wed: [7,8],
  thu: [9,0],
  fri: [1,2],
  sat: [3,4],
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



function App() {
  // ruedaPlaca();

  return (
    <div class="container">
		<div class="row">
			<div class="col">
				<table class="table table-striped table-bordered table-hover table-dark">
					<thead>
						<tr>
							<th>Dia</th>
							<th>placa</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>lunes</td>
							<td>{diasConPlaca["mon"][0] + " y " + diasConPlaca["mon"][1]}</td>
						</tr>
						<tr>
							<td>martes</td>
							<td>{diasConPlaca["tue"][0] + " y " + diasConPlaca["tue"][1]}</td>
						</tr>
            <tr>
							<td>miercoles</td>
							<td>{diasConPlaca["wed"][0] + " y " + diasConPlaca["wed"][1]}</td>
						</tr>
            <tr>
							<td>jueves</td>
							<td>{diasConPlaca["thu"][0] + " y " + diasConPlaca["thu"][1]}</td>
						</tr>
            <tr>
							<td>viernes</td>
							<td>{diasConPlaca["fri"][0] + " y " + diasConPlaca["fri"][1]}</td>
						</tr>
            <tr>
							<td>sabado</td>
							<td>{diasConPlaca["sat"][0] + " y " + diasConPlaca["sat"][1]}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    </div>
  );
}

export default App;
