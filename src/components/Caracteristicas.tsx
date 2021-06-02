import { ReactElement } from "react";

// interface Caracteristicasprops {
//   city:string
// }
const Caracteristicas:React.FunctionComponent = ():ReactElement => {
  const data:string = localStorage.getItem('city')||'';
  const {name, temperatura, windspeed} = JSON.parse(data);
  return (

    <>
    <p>ciudad: {name}</p>
    <p>temperatura: °{temperatura}</p>
    <p>viento: {windspeed}</p>
    </>
    
    
  );
}

export default Caracteristicas;